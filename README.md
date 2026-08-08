# IPL Live Predictor v2

A Google Colab notebook that predicts IPL match outcomes using live data instead of static CSVs. It pulls ball-by-ball and match data directly from [Cricsheet.org](https://cricsheet.org), rebuilds the points table, batting/bowling stats, and venue bias from scratch each run, trains six classification models on historical matches, and produces both single-match predictions and a full playoff Monte Carlo simulation.

## What changed from v1

v1 relied on static CSVs (`points_table.csv`, `batting_stats.csv`, `bowling_stats.csv`) manually uploaded to Google Drive. v2 replaces that pipeline with live sources:

| Data | Source | Notes |
|---|---|---|
| Match results, ball-by-ball deliveries | Cricsheet.org (`ipl_csv2.zip`) | Free, no auth, updated within ~24 hrs of each match |
| Points table, batting/bowling stats | Derived from Cricsheet deliveries | Reconstructed each run — no more manual stat entry |

## Features

- **Live data ingestion** — downloads and caches the full Cricsheet IPL history (currently 1,241 matches), auto-detects the current season, and pulls ball-by-ball deliveries for it
- **Team name normalization** — maps legacy franchise names (e.g. Delhi Daredevils → Delhi Capitals, Kings XI Punjab → Punjab Kings) onto the current 10-team set
- **Live points table reconstruction** — wins, losses, points, and Net Run Rate computed directly from match and delivery data
- **Batting & bowling stat aggregation** — per-player runs, strike rate, average, wickets, economy, computed from raw deliveries
- **Venue pitch bias analysis** — bat-first win rate per venue from full historical data (40+ grounds, min. 8 matches each)
- **Composite team strength index** — weighted score (0–10) combining win rate, NRR, batting strike rate/average, and bowling economy
- **Head-to-head records** — win rate for every team pairing across full history (90 matchups)
- **Six-model ensemble** — Logistic Regression, Random Forest, Gradient Boosting, XGBoost, CatBoost, LightGBM, combined via weighted voting
- **Custom match predictor** — editable cell to predict any matchup given teams, venue, and toss outcome
- **Playoff bracket simulation** — predicts Qualifier 1, Eliminator, Qualifier 2, and the Final from the live top-4 standings
- **Monte Carlo title odds** — 50,000-iteration simulation of the playoff bracket to estimate each team's title and finalist probability
- **JSON export** — full output (standings, champion odds, all 45 possible matchup probabilities) saved to Google Drive

## Tech Stack

- **Environment:** Google Colab (mounts Google Drive for caching and output)
- **Data handling:** `pandas`, `numpy`, `requests`, `zipfile`
- **Modeling:** `scikit-learn` (Logistic Regression, Random Forest, Gradient Boosting), `xgboost`, `catboost`, `lightgbm`
- **Visualization:** `matplotlib`, `seaborn`
- **Scraping (fallback):** `beautifulsoup4`, `lxml` — for ESPNcricinfo points table as a fallback if Cricsheet-derived stats are insufficient

## Pipeline Overview

1. **Fetch & cache** — downloads `ipl_csv2.zip` from Cricsheet (skips if already cached; `force_refresh=True` to update)
2. **Parse matches** — reads every `*_info.csv` file into a unified match table (teams, winner, toss, venue, season, date, result)
3. **Clean & filter** — normalizes historical team names to current franchises, drops "no result" matches, splits into historical vs. current season
4. **Rebuild stats** — constructs the points table, batting stats, and bowling stats from raw deliveries (replacing what used to be static CSVs)
5. **Venue bias** — computes bat-first win rate per venue from full history
6. **Team strength index** — normalizes and weights win rate, NRR, batting, and bowling metrics into a single 0–10 score
7. **Head-to-head** — computes historical win rate for every team pairing
8. **Feature engineering** — builds the training feature set (toss outcome, venue bias, team strength diff, H2H rate, NRR diff, encoded team IDs)
9. **Model training** — trains and cross-validates six classifiers, selects the best by 5-fold CV accuracy
10. **Prediction engine** — `predict_match()` runs all six models and returns a weighted-ensemble win probability
11. **Playoff simulation** — predicts each playoff-stage matchup from the live top-4 standings
12. **Monte Carlo simulation** — runs 50,000 simulated playoff brackets to estimate title/finalist odds
13. **Export** — saves a full JSON snapshot (standings, champion odds, all matchups) to Google Drive

## Setup

1. Open the notebook in Google Colab
2. Run the first cell — it installs `catboost`, `lightgbm`, `xgboost`, `requests`, `beautifulsoup4`, `lxml`
3. Mount Google Drive when prompted (used for caching and saving output to `MyDrive/IPL Predictor`)
4. Run all cells top to bottom — first run downloads ~50 MB from Cricsheet; subsequent runs use the cache unless `force_refresh=True`

## Usage

### Predicting a custom match

Edit the variables in the "Custom Match Predictor" cell and re-run it:

```python
team_a           = 'Sunrisers Hyderabad'
team_b           = 'Royal Challengers Bengaluru'
venue            = 'M. Chinnaswamy Stadium, Bengaluru'
team_a_won_toss  = True
toss_elected_bat = False

show_prediction(team_a, team_b, venue, team_a_won_toss, toss_elected_bat)
```

This prints a win-probability bar chart plus a breakdown of how each of the six models voted.

### Reading the output JSON

The exported file (`ipl2026_predictions.json`) contains:

```json
{
  "generated_at": "...",
  "data_source": "Cricsheet.org (live)",
  "season": "2026",
  "best_model": "Logistic Regression",
  "n_simulations": 50000,
  "standings": [ ... ],
  "champion_odds": [ ... ],
  "matchups": [ ... ]
}
```

- `standings` — full live points table with strength scores
- `champion_odds` — Monte Carlo title/finalist percentages for the top-4
- `matchups` — predicted win probability for all 45 possible team pairings

## Model Performance

Six models are trained and compared via test accuracy, AUC-ROC, and 5-fold cross-validation accuracy. The best-performing model by CV accuracy is reported at runtime and used as one vote in the weighted ensemble (model weights: XGBoost/CatBoost = 3, Random Forest/Gradient Boosting/LightGBM = 2, Logistic Regression = 1).

## Known Limitations

- Early-season predictions rely on limited current-season data; team strength and NRR stabilize as more matches are played
- Venue bias requires at least 8 historical matches per ground — newer or rarely-used venues fall back to a neutral 50% bias
- Chennai Super Kings is excluded from the team strength/playoff calculations in the current version (see `strength = strength[strength['team'] != 'Chennai Super Kings']`)
- ESPNcricinfo scraping is a fallback path, not the primary data source — Cricsheet is used whenever available

## Data Sources

- **Cricsheet.org** — [cricsheet.org/downloads/ipl_csv2.zip](https://cricsheet.org/downloads/ipl_csv2.zip) — free, ball-by-ball IPL data, no authentication required
- **ESPNcricinfo** — points table scrape used only as a fallback if Cricsheet-derived stats are unavailable
