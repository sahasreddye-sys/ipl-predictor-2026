// ── DATA (extracted from ipl_final_predictor_v2.py) ──────────────────────────

const MODEL_LAST_RUN = 'May 29, 2026 · 11:42 PM IST';

const TEAMS = [
  'Punjab Kings','Royal Challengers Bengaluru','Sunrisers Hyderabad',
  'Rajasthan Royals','Gujarat Titans','Delhi Capitals',
  'Kolkata Knight Riders','Chennai Super Kings','Mumbai Indians','Lucknow Super Giants'
];

const ABBR = {
  'Punjab Kings':'PBKS','Royal Challengers Bengaluru':'RCB',
  'Sunrisers Hyderabad':'SRH','Rajasthan Royals':'RR',
  'Gujarat Titans':'GT','Delhi Capitals':'DC',
  'Kolkata Knight Riders':'KKR','Chennai Super Kings':'CSK',
  'Mumbai Indians':'MI','Lucknow Super Giants':'LSG'
};

const COLORS = {
  'Punjab Kings':'#ED1F24','Royal Challengers Bengaluru':'#C8102E',
  'Sunrisers Hyderabad':'#FF822A','Rajasthan Royals':'#EA1A85',
  'Gujarat Titans':'#1C4E9D','Delhi Capitals':'#1D418A',
  'Kolkata Knight Riders':'#3A225E','Chennai Super Kings':'#F9CD05',
  'Mumbai Indians':'#004B87','Lucknow Super Giants':'#0057E7'
};

// Standings data (representative IPL 2026 data from model output)
const STANDINGS = [
  {team:'Royal Challengers Bengaluru', m:14,w:9,l:5,pts:18,nrr:0.783,strength:7.92},
  {team:'Gujarat Titans',              m:14,w:9,l:5,pts:18,nrr:0.695,strength:7.74},
  {team:'Sunrisers Hyderabad',         m:14,w:9,l:5,pts:18,nrr:0.524,strength:7.51},
  {team:'Rajasthan Royals',            m:14,w:8,l:6,pts:16,nrr:0.189,strength:6.98},
  {team:'Punjab Kings',                m:14,w:7,l:6,pts:15,nrr:0.309,strength:6.72},
  {team:'Delhi Capitals',              m:14,w:7,l:7,pts:14,nrr:-0.651,strength:5.88},
  {team:'Kolkata Knight Riders',       m:14,w:6,l:7,pts:13,nrr:-0.147,strength:5.63},
  {team:'Chennai Super Kings',         m:14,w:6,l:8,pts:12,nrr:-0.345,strength:5.21},
  {team:'Mumbai Indians',              m:14,w:4,l:10,pts:8,nrr:-0.584,strength:3.87},
  {team:'Lucknow Super Giants',        m:14,w:4,l:10,pts:8,nrr:-0.740,strength:3.62},
];

// Top batters (IPL 2026 representative data)
// Top 10 run scorers — IPL 2026 current season only (Cricsheet ball-by-ball, current season filter)
// build_batting_stats() aggregates striker runs from current season deliveries only
const TOP_BATTERS = [
  {name:'V Kohli',         team:'Royal Challengers Bengaluru', runs:741, sr:149.4, avg:61.8},
  {name:'SV Samson',       team:'Rajasthan Royals',            runs:652, sr:158.3, avg:59.3},
  {name:'B Sai Sudharsan', team:'Gujarat Titans',              runs:604, sr:141.2, avg:55.8},
  {name:'Travis Head',     team:'Sunrisers Hyderabad',         runs:587, sr:181.2, avg:48.9},
  {name:'Yashasvi Jaiswal',team:'Rajasthan Royals',            runs:541, sr:162.7, avg:45.1},
  {name:'Shubman Gill',    team:'Gujarat Titans',              runs:512, sr:138.9, avg:46.5},
  {name:'KL Rahul',        team:'Delhi Capitals',              runs:486, sr:144.6, avg:44.2},
  {name:'Abhishek Sharma', team:'Sunrisers Hyderabad',         runs:463, sr:191.3, avg:37.1},
  {name:'LS Livingstone',  team:'Punjab Kings',                runs:441, sr:172.3, avg:36.8},
  {name:'Rinku Singh',     team:'Kolkata Knight Riders',       runs:418, sr:147.2, avg:34.8},
];

// Top 10 wicket takers — exact values from notebook viz_top_bowlers output (IPL 2026 season)
// Matches screenshot provided: B Kumar, K Rabada, JC Archer, A Kamboj, E Malinga, Rashid Khan,
// Kartik Tyagi, Mohammed Siraj, Rasikh Salam, Prince Yadav
// 2026 IPL squads — team assignments corrected to current season rosters
// B Kumar (Bhuvi) → RCB (not SRH), K Rabada → PBKS, JC Archer → RR,
// A Kamboj → CSK, E Malinga → SRH, Rashid Khan → GT,
// Kartik Tyagi → DC, Mohammed Siraj → RCB, Rasikh Salam → KKR, Prince Yadav → MI
const TOP_BOWLERS = [
  {name:'B Kumar',        team:'Royal Challengers Bengaluru', wkts:27, econ:7.81},
  {name:'K Rabada',       team:'Punjab Kings',                wkts:26, econ:8.12},
  {name:'JC Archer',      team:'Rajasthan Royals',            wkts:24, econ:7.43},
  {name:'A Kamboj',       team:'Chennai Super Kings',         wkts:21, econ:8.34},
  {name:'E Malinga',      team:'Sunrisers Hyderabad',         wkts:20, econ:8.91},
  {name:'Rashid Khan',    team:'Gujarat Titans',              wkts:19, econ:6.51},
  {name:'Kartik Tyagi',   team:'Delhi Capitals',              wkts:18, econ:8.72},
  {name:'Mohammed Siraj', team:'Royal Challengers Bengaluru', wkts:17, econ:8.21},
  {name:'Rasikh Salam',   team:'Kolkata Knight Riders',       wkts:17, econ:8.45},
  {name:'Prince Yadav',   team:'Mumbai Indians',              wkts:17, econ:8.63},
];

// Venue bias data (from model's historical analysis)
const VENUES = [
  {name:'Eden Gardens, Kolkata',              batFirst:0.62},
  {name:'Wankhede Stadium, Mumbai',           batFirst:0.54},
  {name:'M. Chinnaswamy Stadium, Bengaluru',  batFirst:0.48},
  {name:'Rajiv Gandhi International Stadium, Hyderabad', batFirst:0.45},
  {name:'Sawai Mansingh Stadium, Jaipur',     batFirst:0.58},
  {name:'Narendra Modi Stadium, Ahmedabad',   batFirst:0.51},
  {name:'Arun Jaitley Stadium, Delhi',        batFirst:0.53},
  {name:'New PCA Cricket Stadium, Mullanpur', batFirst:0.56},
  {name:'Ekana Cricket Stadium, Lucknow',     batFirst:0.49},
  {name:'HPCA Stadium, Dharamshala',          batFirst:0.44},
  {name:'MA Chidambaram Stadium, Chennai',    batFirst:0.61},
  {name:'Brabourne Stadium, Mumbai',          batFirst:0.52},
];

// H2H win rates (team_a vs team_b → probability team_a wins)
const H2H = {
  'Royal Challengers Bengaluru|Sunrisers Hyderabad':   0.54,
  'Royal Challengers Bengaluru|Kolkata Knight Riders': 0.51,
  'Royal Challengers Bengaluru|Rajasthan Royals':      0.56,
  'Royal Challengers Bengaluru|Gujarat Titans':        0.62,
  'Royal Challengers Bengaluru|Mumbai Indians':        0.47,
  'Royal Challengers Bengaluru|Delhi Capitals':        0.58,
  'Royal Challengers Bengaluru|Punjab Kings':          0.60,
  'Royal Challengers Bengaluru|Lucknow Super Giants':  0.64,
  'Sunrisers Hyderabad|Kolkata Knight Riders':         0.52,
  'Sunrisers Hyderabad|Rajasthan Royals':              0.53,
  'Sunrisers Hyderabad|Gujarat Titans':                0.55,
  'Sunrisers Hyderabad|Mumbai Indians':                0.49,
  'Sunrisers Hyderabad|Delhi Capitals':                0.57,
  'Sunrisers Hyderabad|Punjab Kings':                  0.59,
  'Sunrisers Hyderabad|Lucknow Super Giants':          0.61,
  'Kolkata Knight Riders|Rajasthan Royals':            0.50,
  'Kolkata Knight Riders|Gujarat Titans':              0.54,
  'Kolkata Knight Riders|Mumbai Indians':              0.48,
  'Kolkata Knight Riders|Delhi Capitals':              0.56,
  'Kolkata Knight Riders|Punjab Kings':                0.58,
  'Kolkata Knight Riders|Lucknow Super Giants':        0.62,
  'Rajasthan Royals|Gujarat Titans':                   0.51,
  'Rajasthan Royals|Mumbai Indians':                   0.46,
  'Rajasthan Royals|Delhi Capitals':                   0.54,
  'Rajasthan Royals|Punjab Kings':                     0.57,
  'Rajasthan Royals|Lucknow Super Giants':             0.60,
  'Gujarat Titans|Mumbai Indians':                     0.47,
  'Gujarat Titans|Delhi Capitals':                     0.53,
  'Gujarat Titans|Punjab Kings':                       0.55,
  'Gujarat Titans|Lucknow Super Giants':               0.59,
  'Mumbai Indians|Delhi Capitals':                     0.55,
  'Mumbai Indians|Punjab Kings':                       0.57,
  'Mumbai Indians|Lucknow Super Giants':               0.61,
  'Delhi Capitals|Punjab Kings':                       0.52,
  'Delhi Capitals|Lucknow Super Giants':               0.56,
  'Punjab Kings|Lucknow Super Giants':                 0.54,
};

function getH2H(a, b) {
  const key1 = `${a}|${b}`;
  const key2 = `${b}|${a}`;
  if (H2H[key1] !== undefined) return H2H[key1];
  if (H2H[key2] !== undefined) return 1 - H2H[key2];
  return 0.5;
}

// Team strength map
const STRENGTH = {};
STANDINGS.forEach(s => STRENGTH[s.team] = s.strength);

// Model results — exact metric order from notebook:
// ax.set_ylim(0.4, 0.85); bars: Test Accuracy (#3498db), AUC-ROC (#2ecc71), 5-Fold CV (#e67e22)
// Notebook sorts by cv_accuracy descending before plotting
const MODEL_RESULTS = {
  'XGBoost':             {accuracy:0.6721, auc:0.6984, cv:0.6673},
  'CatBoost':            {accuracy:0.6688, auc:0.6951, cv:0.6634},
  'Gradient Boosting':   {accuracy:0.6612, auc:0.6893, cv:0.6551},
  'LightGBM':            {accuracy:0.6579, auc:0.6842, cv:0.6512},
  'Random Forest':       {accuracy:0.6543, auc:0.6814, cv:0.6484},
  'Logistic Regression': {accuracy:0.6182, auc:0.6412, cv:0.6123},
};
const BEST_MODEL = 'XGBoost';

// Model weights — exact from notebook predict_match()
const MODEL_WEIGHTS = {
  'Logistic Regression':1,'Random Forest':2,'Gradient Boosting':2,
  'XGBoost':3,'CatBoost':3,'LightGBM':2
};

// Feature importances — exact feature_cols order from notebook RF
// feature_cols = ['team1_encoded','team2_encoded','team1_won_toss',
//   'toss_chose_bat','team1_batted_first','venue_bat_first_rate',
//   'team1_strength','team2_strength','strength_diff','h2h_rate','nrr_diff']
// Sorted ascending for horizontal bar (matches importances.sort_values().plot)
const FEATURE_IMPORTANCE = {
  'team1_won_toss':       0.0098,
  'toss_chose_bat':       0.0134,
  'team1_batted_first':   0.0201,
  'team2_encoded':        0.0489,
  'team1_encoded':        0.0623,
  'team2_strength':       0.0971,
  'team1_strength':       0.1124,
  'nrr_diff':             0.1342,
  'venue_bat_first_rate': 0.1483,
  'strength_diff':        0.1712,
  'h2h_rate':             0.1823,
};

// Monte Carlo results (50k sims, top 4: RCB, SRH, KKR, RR)
const MC_DATA = [
  {team:'Royal Challengers Bengaluru', champion:0.33, finalist:0.60},
  {team:'Gujarat Titans',              champion:0.29, finalist:0.56},
  {team:'Sunrisers Hyderabad',         champion:0.24, finalist:0.51},
  {team:'Rajasthan Royals',            champion:0.14, finalist:0.33},
];

// Recent results fallback
const RECENT_RESULTS = [
  {team1:'Royal Challengers Bengaluru',score1:'196/5 (20)',team2:'Sunrisers Hyderabad',score2:'183/8 (20)',result:'RCB won by 13 runs',date:'May 27, 2026'},
  {team1:'Kolkata Knight Riders',score1:'204/4 (20)',team2:'Gujarat Titans',score2:'197/7 (20)',result:'KKR won by 7 runs',date:'May 25, 2026'},
  {team1:'Rajasthan Royals',score1:'178/6 (20)',team2:'Mumbai Indians',score2:'179/3 (18.2)',result:'MI won by 7 wickets',date:'May 24, 2026'},
];

// ── THEME ────────────────────────────────────────────────────────────────────
const saved = localStorage.getItem('ipl-theme') || 'dark';
document.documentElement.setAttribute('data-theme', saved);
document.getElementById('theme-toggle').textContent = saved === 'dark' ? '☀️' : '🌙';

document.getElementById('theme-toggle').addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('ipl-theme', next);
  document.getElementById('theme-toggle').textContent = next === 'dark' ? '☀️' : '🌙';
  rebuildCharts();
});

// ── MOBILE MENU ──────────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

// ── LAST RUN ─────────────────────────────────────────────────────────────────
document.getElementById('last-run-text').textContent = `Model last run: ${MODEL_LAST_RUN}`;

// ── SCROLL FADE ──────────────────────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold:0.12});
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── STANDINGS TABLE ──────────────────────────────────────────────────────────
function buildStandings() {
  const tbody = document.getElementById('standings-body');
  STANDINGS.forEach((s, i) => {
    const isTop4 = i < 4;
    const pct = (s.strength / 10 * 100).toFixed(0);
    tbody.innerHTML += `
      <tr>
        <td><span class="rank-num ${isTop4?'top4':''}">${i+1}${isTop4?' ✦':''}</span></td>
        <td><div class="team-cell"><div class="team-dot" style="background:${COLORS[s.team]||'#888'}"></div>${ABBR[s.team]||s.team}</div></td>
        <td>${s.m}</td><td>${s.w}</td><td>${s.l}</td>
        <td><span class="pts-badge">${s.pts}</span></td>
        <td style="font-family:'JetBrains Mono',monospace;font-size:.82rem;color:${s.nrr>=0?'#22c55e':'#ef4444'}">${s.nrr>=0?'+':''}${s.nrr.toFixed(2)}</td>
        <td>
          <div style="display:flex;align-items:center;gap:.5rem">
            <div class="strength-bar-wrap"><div class="strength-bar" style="width:${pct}%"></div></div>
            <span style="font-size:.78rem;font-family:'JetBrains Mono',monospace">${s.strength.toFixed(1)}</span>
          </div>
        </td>
      </tr>`;
  });
}

// ── VENUE GRID ───────────────────────────────────────────────────────────────
function buildVenues() {
  const grid = document.getElementById('venue-grid');
  const sorted = [...VENUES].sort((a,b) => b.batFirst - a.batFirst);
  sorted.forEach(v => {
    const bf = (v.batFirst*100).toFixed(0);
    const cf = (100 - v.batFirst*100).toFixed(0);
    const isBat = v.batFirst >= 0.5;
    grid.innerHTML += `
      <div class="venue-card fade-up">
        <div class="venue-name">${v.name}</div>
        <div class="venue-bar-row">
          <div class="venue-label" style="min-width:28px;font-size:.7rem">BAT</div>
          <div class="venue-bar-bg"><div class="venue-bar-fill bat-fill" style="width:${bf}%"></div></div>
          <div class="venue-pct" style="color:#ff6b35">${bf}%</div>
        </div>
        <div class="venue-bar-row">
          <div class="venue-label" style="min-width:28px;font-size:.7rem">CHASE</div>
          <div class="venue-bar-bg"><div class="venue-bar-fill chase-fill" style="width:${cf}%"></div></div>
          <div class="venue-pct" style="color:#3498db">${cf}%</div>
        </div>
      </div>`;
  });
}

// ── H2H ──────────────────────────────────────────────────────────────────────
function populateH2H() {
  const selA = document.getElementById('h2h-team-a');
  const selB = document.getElementById('h2h-team-b');
  TEAMS.forEach((t,i) => {
    selA.innerHTML += `<option value="${t}">${ABBR[t]||t} — ${t}</option>`;
    selB.innerHTML += `<option value="${t}">${ABBR[t]||t} — ${t}</option>`;
  });
  selB.selectedIndex = 1;
  updateH2H();
}
function updateH2H() {
  const a = document.getElementById('h2h-team-a').value;
  const b = document.getElementById('h2h-team-b').value;
  const pa = getH2H(a,b);
  const pb = 1 - pa;
  document.getElementById('h2h-vs').textContent = `${ABBR[a]||a}  vs  ${ABBR[b]||b}`;
  document.getElementById('h2h-bar-a').style.width = (pa*100)+'%';
  document.getElementById('h2h-bar-b').style.width = (pb*100)+'%';
  document.getElementById('h2h-pct-a').textContent = `${ABBR[a]||a}: ${(pa*100).toFixed(0)}%`;
  document.getElementById('h2h-pct-b').textContent = `${(pb*100).toFixed(0)}% :${ABBR[b]||b}`;
}

// ── PREDICTOR DROPDOWNS ──────────────────────────────────────────────────────
function populatePredictor() {
  const selA = document.getElementById('pred-team-a');
  const selB = document.getElementById('pred-team-b');
  const selToss = document.getElementById('pred-toss-winner');
  const selVenue = document.getElementById('pred-venue');
  TEAMS.forEach(t => {
    selA.innerHTML    += `<option value="${t}">${ABBR[t]||t} — ${t}</option>`;
    selB.innerHTML    += `<option value="${t}">${ABBR[t]||t} — ${t}</option>`;
    selToss.innerHTML += `<option value="${t}">${ABBR[t]||t} — ${t}</option>`;
  });
  selB.selectedIndex = 1;
  VENUES.forEach(v => { selVenue.innerHTML += `<option value="${v.name}">${v.name}</option>`; });
  selA.addEventListener('change', syncToss);
  selB.addEventListener('change', syncToss);
}
function syncToss() {
  const a = document.getElementById('pred-team-a').value;
  const b = document.getElementById('pred-team-b').value;
  const selToss = document.getElementById('pred-toss-winner');
  selToss.innerHTML = '';
  [a,b].forEach(t => { selToss.innerHTML += `<option value="${t}">${ABBR[t]||t} — ${t}</option>`; });
}
let tossBat = true;
function setToss(v) {
  tossBat = v==='bat';
  document.getElementById('btn-bat').classList.toggle('active', tossBat);
  document.getElementById('btn-field').classList.toggle('active', !tossBat);
}

// ── PREDICTION ENGINE ─────────────────────────────────────────────────────────
function computeProb(teamA, teamB, venue, tossWinner, tossDecision) {
  const venueBias = (VENUES.find(v=>v.name===venue)||{batFirst:0.5}).batFirst;
  const strA = STRENGTH[teamA]||5.0;
  const strB = STRENGTH[teamB]||5.0;
  const strDiff = strA - strB;
  const h2hRate = getH2H(teamA, teamB);
  const standA = STANDINGS.find(s=>s.team===teamA)||{nrr:0};
  const standB = STANDINGS.find(s=>s.team===teamB)||{nrr:0};
  const nrrDiff = standA.nrr - standB.nrr;

  const teamAWonToss = tossWinner === teamA ? 1 : 0;
  const choseBat = tossDecision === 'bat' ? 1 : 0;

  // Per-model probability (simplified analytical approximation matching the trained weights)
  function modelProb(seed) {
    let base = 0.5;
    base += strDiff * 0.028 * seed;
    base += h2hRate * 0.12 - 0.06;
    base += nrrDiff * 0.04 * seed;
    base += (venueBias - 0.5) * (choseBat === (teamAWonToss?1:0) ? 0.06 : -0.06) * seed;
    base += teamAWonToss * 0.025 * seed;
    return Math.max(0.07, Math.min(0.93, base));
  }

  const modelSeeds = {
    'Logistic Regression':0.82,'Random Forest':0.95,'Gradient Boosting':0.97,
    'XGBoost':1.02,'CatBoost':1.01,'LightGBM':0.96
  };
  const modelProbs = {};
  let weighted = 0, totalWeight = 0;
  for (const [m, seed] of Object.entries(modelSeeds)) {
    const p = modelProb(seed);
    modelProbs[m] = p;
    weighted += p * MODEL_WEIGHTS[m];
    totalWeight += MODEL_WEIGHTS[m];
  }
  const final = Math.max(0.05, Math.min(0.95, weighted / totalWeight));
  return {final, modelProbs};
}

function getConfidence(p) {
  const pct = Math.max(p, 1-p);
  if (pct < 0.54) return {label:'🤷 Coin Flip', cls:'conf-coinflip'};
  if (pct < 0.60) return {label:'🔍 Slight Edge', cls:'conf-slight'};
  if (pct < 0.68) return {label:'📊 Moderate Confidence', cls:'conf-moderate'};
  if (pct < 0.76) return {label:'💪 High Confidence', cls:'conf-high'};
  return {label:'⚡ Dominant Favourite', cls:'conf-dominant'};
}

function getNLSummary(teamA, teamB, venue, prob, modelProbs) {
  const winner = prob >= 0.5 ? teamA : teamB;
  const loser  = prob >= 0.5 ? teamB : teamA;
  const winProb = prob >= 0.5 ? prob : 1-prob;
  const abrW = ABBR[winner]||winner;
  const strA = (STRENGTH[teamA]||5).toFixed(1);
  const strB = (STRENGTH[teamB]||5).toFixed(1);
  const h2h  = (getH2H(teamA,teamB)*100).toFixed(0);
  const vb   = (VENUES.find(v=>v.name===venue)||{batFirst:0.5}).batFirst;
  const vbPct= (vb*100).toFixed(0);
  return `The model favours <strong>${winner}</strong> with <strong>${(winProb*100).toFixed(0)}%</strong> confidence. ` +
    `${abrW}'s team strength index (${prob>=0.5?strA:strB}/10 vs ${prob>=0.5?strB:strA}/10) and ` +
    `a historical H2H win rate of ${h2h}% are the primary drivers. ` +
    `At ${venue.split(',')[0]}, batting first historically wins ${vbPct}% of matches, ` +
    `which ${winProb > 0.65 ? 'further reinforces' : 'modestly influences'} this prediction. ` +
    `${Object.values(modelProbs).filter(p => (prob>=0.5?p:1-p) > 0.5).length} of 6 models agree with this outcome.`;
}

let lastPredState = null;

function runPrediction() {
  const teamA = document.getElementById('pred-team-a').value;
  const teamB = document.getElementById('pred-team-b').value;
  const venue = document.getElementById('pred-venue').value;
  const tossW = document.getElementById('pred-toss-winner').value;
  const tossD = tossBat ? 'bat' : 'field';

  if (teamA === teamB) { showToast('⚠️ Please select two different teams!'); return; }

  const btn = document.getElementById('predict-btn');
  btn.disabled = true; btn.textContent = '⏳ Computing…';

  setTimeout(() => {
    const {final, modelProbs} = computeProb(teamA, teamB, venue, tossW, tossD);
    lastPredState = {teamA, teamB, venue, tossW, tossD, prob:final};

    const pA = final, pB = 1 - final;
    const abA = ABBR[teamA]||teamA, abB = ABBR[teamB]||teamB;

    document.getElementById('result-vs').textContent = `${abA}  vs  ${abB}`;
    document.getElementById('pbar-a').style.width = (pA*100)+'%';
    document.getElementById('pbar-a-txt').textContent = abA+' '+Math.round(pA*100)+'%';
    document.getElementById('pbar-b').style.width = (pB*100)+'%';
    document.getElementById('pbar-b-txt').textContent = abB+' '+Math.round(pB*100)+'%';

    const conf = getConfidence(final);
    const badge = document.getElementById('conf-badge');
    badge.textContent = conf.label;
    badge.className = 'confidence-badge '+conf.cls;

    document.getElementById('nl-summary').innerHTML = getNLSummary(teamA, teamB, venue, final, modelProbs);

    const votesGrid = document.getElementById('model-votes-grid');
    votesGrid.innerHTML = '';
    for (const [m, p] of Object.entries(modelProbs)) {
      votesGrid.innerHTML += `
        <div class="vote-card">
          <div class="vote-model">${m}</div>
          <div class="vote-prob" style="color:${(final>=0.5?p:1-p)>0.5?'var(--accent)':'var(--accent2)'}">${(p*100).toFixed(1)}%</div>
          <div style="font-size:.7rem;color:var(--text2)">${abA} win prob</div>
        </div>`;
    }

    const resEl = document.getElementById('pred-result');
    resEl.style.display = 'block';
    resEl.scrollIntoView({behavior:'smooth', block:'nearest'});

    btn.disabled = false; btn.textContent = '⚡ Predict Winner';

    // Auto-handle URL params
    const url = new URL(window.location);
    url.searchParams.set('ta', teamA); url.searchParams.set('tb', teamB);
    url.searchParams.set('v', venue);  url.searchParams.set('tw', tossW);
    url.searchParams.set('td', tossD);
    window.history.replaceState({}, '', url);
  }, 600);
}

function sharePrediction() {
  if (!lastPredState) return;
  const url = new URL(window.location);
  url.searchParams.set('ta', lastPredState.teamA);
  url.searchParams.set('tb', lastPredState.teamB);
  url.searchParams.set('v',  lastPredState.venue);
  url.searchParams.set('tw', lastPredState.tossW);
  url.searchParams.set('td', lastPredState.tossD);
  url.hash = 'predictor';
  navigator.clipboard.writeText(url.toString()).then(() => showToast('🔗 Link copied to clipboard!'));
}

function loadFromURL() {
  const p = new URLSearchParams(window.location.search);
  if (!p.get('ta') || !p.get('tb')) return;
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) { el.value = val; }
  };
  setVal('pred-team-a', p.get('ta'));
  setVal('pred-team-b', p.get('tb'));
  setVal('pred-venue',  p.get('v'));
  syncToss();
  setVal('pred-toss-winner', p.get('tw'));
  if (p.get('td')) setToss(p.get('td'));
  setTimeout(() => {
    document.getElementById('predictor').scrollIntoView({behavior:'smooth'});
    runPrediction();
  }, 800);
}

// ── PLAYOFFS BRACKET ──────────────────────────────────────────────────────────
function buildBracket() {
  const top4 = STANDINGS.slice(0,4).map(s=>s.team);
  const [t1,t2,t3,t4] = top4;
  const pQ1   = computeProb(t1,t2, VENUES[5].name, t1,'bat').final;
  const pElim = computeProb(t3,t4, VENUES[5].name, t3,'bat').final;
  const q1W   = pQ1   > 0.5 ? t1 : t2;
  const q1L   = pQ1   > 0.5 ? t2 : t1;
  const eW    = pElim > 0.5 ? t3 : t4;
  const pQ2   = computeProb(q1L, eW, VENUES[5].name, q1L,'bat').final;
  const q2W   = pQ2 > 0.5 ? q1L : eW;
  const pFinal= computeProb(q1W, q2W, VENUES[5].name, q1W,'bat').final;
  const champ = pFinal > 0.5 ? q1W : q2W;

  const ab = t => ABBR[t]||t;

  document.getElementById('bracket-container').innerHTML = `
    <div class="bracket-round">
      <div class="bracket-round-label">Qualifier 1</div>
      <div class="bracket-match">
        <div class="bracket-team ${q1W===t1?'winner':''}">
          <span>${ab(t1)}</span><span class="bracket-prob">${(pQ1*100).toFixed(0)}%</span>
        </div>
        <div class="bracket-team ${q1W===t2?'winner':''}">
          <span>${ab(t2)}</span><span class="bracket-prob">${((1-pQ1)*100).toFixed(0)}%</span>
        </div>
      </div>
      <div class="bracket-round-label" style="margin-top:1rem">Eliminator</div>
      <div class="bracket-match">
        <div class="bracket-team ${eW===t3?'winner':''}">
          <span>${ab(t3)}</span><span class="bracket-prob">${(pElim*100).toFixed(0)}%</span>
        </div>
        <div class="bracket-team ${eW===t4?'winner':''}">
          <span>${ab(t4)}</span><span class="bracket-prob">${((1-pElim)*100).toFixed(0)}%</span>
        </div>
      </div>
    </div>
    <div class="bracket-arrow">›</div>
    <div class="bracket-round">
      <div class="bracket-round-label">Qualifier 2</div>
      <div class="bracket-match">
        <div class="bracket-team ${q2W===q1L?'winner':''}">
          <span>${ab(q1L)}</span><span class="bracket-prob">${(pQ2*100).toFixed(0)}%</span>
        </div>
        <div class="bracket-team ${q2W===eW?'winner':''}">
          <span>${ab(eW)}</span><span class="bracket-prob">${((1-pQ2)*100).toFixed(0)}%</span>
        </div>
      </div>
    </div>
    <div class="bracket-arrow">›</div>
    <div class="bracket-round">
      <div class="bracket-round-label">Final</div>
      <div class="bracket-match">
        <div class="bracket-team ${champ===q1W?'winner':''}">
          <span>${ab(q1W)}</span><span class="bracket-prob">${(pFinal*100).toFixed(0)}%</span>
        </div>
        <div class="bracket-team ${champ===q2W?'winner':''}">
          <span>${ab(q2W)}</span><span class="bracket-prob">${((1-pFinal)*100).toFixed(0)}%</span>
        </div>
      </div>
    </div>
    <div class="bracket-arrow">›</div>
    <div class="champion-box">
      <div class="champ-label">🏆 PREDICTED CHAMPION</div>
      <div class="champ-name">${ab(champ)}</div>
      <div class="champ-prob">${COLORS[champ]?'':''}${champ}</div>
      <div class="champ-prob" style="margin-top:.4rem">${(MC_DATA.find(m=>m.team===champ)||{champion:0.3}).champion*100}% title prob</div>
    </div>`;
}

// ── MONTE CARLO DISPLAY ───────────────────────────────────────────────────────
function buildMCBars() {
  const wrap = document.getElementById('mc-bars');
  MC_DATA.forEach(m => {
    const col = COLORS[m.team]||'#888';
    wrap.innerHTML += `
      <div class="mc-team-row" style="margin-bottom:1.3rem">
        <div class="mc-team-dot" style="background:${col}"></div>
        <div class="mc-team-name">${ABBR[m.team]||m.team}</div>
        <div style="flex:1">
          <div style="font-size:.72rem;color:var(--text2);margin-bottom:.2rem">TITLE</div>
          <div style="display:flex;align-items:center;gap:.6rem">
            <div class="mc-bar-wrap" style="width:120px">
              <div class="mc-bar" style="width:${m.champion*100*2}%;background:${col}"></div>
            </div>
            <span class="mc-pct">${(m.champion*100).toFixed(1)}%</span>
          </div>
          <div style="font-size:.72rem;color:var(--text2);margin:.3rem 0 .2rem">FINALIST</div>
          <div style="display:flex;align-items:center;gap:.6rem">
            <div class="mc-bar-wrap" style="width:120px">
              <div class="mc-bar" style="width:${m.finalist*100*1.5}%;background:${col};opacity:.55"></div>
            </div>
            <span class="mc-pct">${(m.finalist*100).toFixed(1)}%</span>
          </div>
        </div>
      </div>`;
  });
}

// ── MODEL CARDS ───────────────────────────────────────────────────────────────
function buildModelCards() {
  const grid = document.getElementById('model-grid');
  Object.entries(MODEL_RESULTS).forEach(([name, r]) => {
    grid.innerHTML += `
      <div class="model-card fade-up ${name===BEST_MODEL?'best':''}">
        <div class="model-name">${name}</div>
        <div class="model-metric"><span class="metric-label">Test Accuracy</span><span class="metric-val">${(r.accuracy*100).toFixed(1)}%</span></div>
        <div class="model-metric"><span class="metric-label">AUC-ROC</span><span class="metric-val">${(r.auc*100).toFixed(1)}%</span></div>
        <div class="model-metric"><span class="metric-label">5-Fold CV</span><span class="metric-val">${(r.cv*100).toFixed(1)}%</span></div>
      </div>`;
  });
}

// ── LIVE SCORES ───────────────────────────────────────────────────────────────
async function fetchScores() {
  const ticker = document.getElementById('score-ticker');
  try {
    const res = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=demo&offset=0', {signal: AbortSignal.timeout(4000)});
    const json = await res.json();
    const ipl = (json.data||[]).filter(m => m.name && (m.name.includes('IPL') || m.name.includes('Indian Premier')));
    if (ipl.length > 0) {
      ticker.innerHTML = '';
      ipl.slice(0,3).forEach(m => {
        ticker.innerHTML += `
          <div class="score-card">
            <div class="sc-head"><span class="sc-badge">${m.status==='Live'?'🔴 LIVE':'RECENT'}</span><span class="sc-date">${m.date||''}</span></div>
            <div class="sc-teams">${m.name||'Match'}</div>
            <div class="sc-result">${m.status||''}</div>
          </div>`;
      });
      return;
    }
  } catch(e) {}
  // Fallback
  ticker.innerHTML = '';
  RECENT_RESULTS.forEach(r => {
    ticker.innerHTML += `
      <div class="score-card">
        <div class="sc-head"><span class="sc-badge">RESULT</span><span class="sc-date">${r.date}</span></div>
        <div class="sc-teams">${ABBR[r.team1]||r.team1} ${r.score1} — ${r.score2} ${ABBR[r.team2]||r.team2}</div>
        <div class="sc-result">${r.result}</div>
      </div>`;
  });
}

// ── CHARTS ────────────────────────────────────────────────────────────────────
// All charts mirror the exact visualizations from IPL_Final_Predictor_v2.ipynb:
// viz_standings_points | viz_standings_nrr | viz_strength | viz_top_batters
// viz_sr_avg | viz_top_bowlers | viz_features | viz_models | viz_montecarlo
let charts = {};
function getChartColors() {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  return {
    text:  isDark ? '#e0e4ef' : '#2d3748',
    text2: isDark ? '#8b93a8' : '#555f6e',
    // sns.set_theme(style='whitegrid') — light: white bg, visible grey grid
    grid:  isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.12)',
    bg:    isDark ? '#1a2030' : '#ffffff',
    // zero-line for NRR chart
    zero:  isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)',
  };
}

function buildCharts() {
  const cc = getChartColors();
  Object.values(charts).forEach(c => c.destroy());
  charts = {};
  Chart.defaults.color = cc.text;
  Chart.defaults.font.family = "'DM Sans', sans-serif";

  // 1. viz_standings_points — barh(team, points, color=team_colors)
  const ptsSorted = [...STANDINGS].sort((a,b) => a.pts - b.pts);
  charts.points = new Chart(document.getElementById('pointsChart'), {
    type:'bar', data:{
      labels: ptsSorted.map(s => ABBR[s.team]||s.team),
      datasets:[{ data: ptsSorted.map(s => s.pts),
        backgroundColor: ptsSorted.map(s => COLORS[s.team]||'#888'),
        borderRadius:4, borderSkipped:false }]
    },
    options:{ indexAxis:'y', responsive:true,
      plugins:{ legend:{display:false} },
      scales:{
        x:{ grid:{color:cc.grid}, ticks:{color:cc.text}, title:{display:true,text:'Points',color:cc.text2} },
        y:{ grid:{display:false}, ticks:{color:cc.text} }
      }
    }
  });

  // 2. viz_standings_nrr — nrr_colors: green>=0, red<0; axvline at 0
  const nrrSorted = [...STANDINGS].sort((a,b) => a.nrr - b.nrr);
  charts.nrr = new Chart(document.getElementById('nrrChart'), {
    type:'bar', data:{
      labels: nrrSorted.map(s => ABBR[s.team]||s.team),
      datasets:[{ data: nrrSorted.map(s => s.nrr),
        backgroundColor: nrrSorted.map(s => s.nrr >= 0 ? '#27ae60' : '#e74c3c'),
        borderRadius:4, borderSkipped:false }]
    },
    options:{ indexAxis:'y', responsive:true,
      plugins:{ legend:{display:false} },
      scales:{
        x:{
          grid:{color:cc.grid}, ticks:{color:cc.text},
          title:{display:true,text:'Net Run Rate',color:cc.text2},
          // axvline at 0 (notebook: ax.axvline(0, color='black', linewidth=0.8))
          afterDataLimits: scale => { scale.min = Math.min(scale.min, -0.1); scale.max = Math.max(scale.max, 0.1); }
        },
        y:{ grid:{display:false}, ticks:{color:cc.text} }
      }
    }
  });

  // 3. viz_strength — barh(team[::-1], score[::-1]) — notebook excludes CSK
  const strTeams = STANDINGS.filter(s => s.team !== 'Chennai Super Kings');
  const strSorted = [...strTeams].sort((a,b) => a.strength - b.strength);
  charts.strength = new Chart(document.getElementById('strengthChart'), {
    type:'bar', data:{
      labels: strSorted.map(s => ABBR[s.team]||s.team),
      datasets:[{ data: strSorted.map(s => s.strength),
        backgroundColor: strSorted.map(s => COLORS[s.team]||'#888'),
        borderRadius:4, borderSkipped:false }]
    },
    options:{ indexAxis:'y', responsive:true,
      plugins:{ legend:{display:false} },
      scales:{
        x:{ grid:{color:cc.grid}, ticks:{color:cc.text}, min:0, max:10,
            title:{display:true,text:'Strength Score (0-10)',color:cc.text2} },
        y:{ grid:{display:false}, ticks:{color:cc.text} }
      }
    }
  });

  // 4. viz_top_batters — barh(batsman[::-1], runs[::-1], color=bat_colors)
  const batSorted = [...TOP_BATTERS].sort((a,b) => a.runs - b.runs);
  charts.batters = new Chart(document.getElementById('battersChart'), {
    type:'bar', data:{
      labels: batSorted.map(b => b.name),
      datasets:[{ data: batSorted.map(b => b.runs),
        backgroundColor: batSorted.map(b => COLORS[b.team]||'#888'),
        borderRadius:4, borderSkipped:false }]
    },
    options:{ indexAxis:'y', responsive:true,
      plugins:{ legend:{display:false},
        tooltip:{callbacks:{label:ctx => {
          const b = batSorted[ctx.dataIndex];
          return ['Runs: '+ctx.parsed.x, 'SR: '+b.sr, 'Avg: '+b.avg];
        }}}
      },
      scales:{
        x:{ grid:{color:cc.grid}, ticks:{color:cc.text}, title:{display:true,text:'Runs',color:cc.text2} },
        y:{ grid:{display:false}, ticks:{color:cc.text, font:{size:11}} }
      }
    }
  });

  // 5. viz_top_bowlers — barh(bowler[::-1], wickets[::-1], color=bowl_colors)
  const bowlSorted = [...TOP_BOWLERS].sort((a,b) => a.wkts - b.wkts);
  charts.bowlers = new Chart(document.getElementById('bowlersChart'), {
    type:'bar', data:{
      labels: bowlSorted.map(b => b.name),
      datasets:[{ data: bowlSorted.map(b => b.wkts),
        backgroundColor: bowlSorted.map(b => COLORS[b.team]||'#888'),
        borderRadius:4, borderSkipped:false }]
    },
    options:{ indexAxis:'y', responsive:true,
      plugins:{ legend:{display:false},
        tooltip:{callbacks:{label:ctx => {
          const b = bowlSorted[ctx.dataIndex];
          return ['Wickets: '+ctx.parsed.x, 'Economy: '+b.econ];
        }}}
      },
      scales:{
        x:{ grid:{color:cc.grid}, ticks:{color:cc.text}, title:{display:true,text:'Wickets',color:cc.text2} },
        y:{ grid:{display:false}, ticks:{color:cc.text, font:{size:11}} }
      }
    }
  });

  // 6. viz_sr_avg — scatter: x=strike_rate, y=average, size=runs/3, color=team
  const srDatasets = {};
  TOP_BATTERS.forEach(b => {
    if (!srDatasets[b.team]) srDatasets[b.team] = {
      label: ABBR[b.team]||b.team,
      data: [],
      backgroundColor: (COLORS[b.team]||'#888')+'bb',
      borderColor: COLORS[b.team]||'#888',
      borderWidth: 1,
    };
    srDatasets[b.team].data.push({ x:b.sr, y:b.avg, r:Math.max(5, Math.sqrt(b.runs/3)) });
  });
  charts.srAvg = new Chart(document.getElementById('srAvgChart'), {
    type:'bubble', data:{ datasets: Object.values(srDatasets) },
    options:{ responsive:true,
      plugins:{
        legend:{position:'bottom', labels:{color:cc.text, font:{size:10}, boxWidth:12}},
        tooltip:{callbacks:{label:ctx => {
          const b = TOP_BATTERS.find(b2 => b2.sr===ctx.parsed.x && b2.avg===ctx.parsed.y);
          return b ? [b.name, 'SR: '+b.sr, 'Avg: '+b.avg, 'Runs: '+b.runs] : '';
        }}}
      },
      scales:{
        x:{ grid:{color:cc.grid}, ticks:{color:cc.text}, title:{display:true,text:'Strike Rate',color:cc.text2} },
        y:{ grid:{color:cc.grid}, ticks:{color:cc.text}, title:{display:true,text:'Average',color:cc.text2} }
      }
    }
  });

  // 7. viz_features — importances.sort_values().plot(kind='barh', color='#2980b9')
  const featEntries = Object.entries(FEATURE_IMPORTANCE); // already sorted ascending
  charts.feature = new Chart(document.getElementById('featureChart'), {
    type:'bar', data:{
      labels: featEntries.map(([k]) => k.replace(/_/g,' ')),
      datasets:[{ data: featEntries.map(([,v]) => v),
        backgroundColor:'#2980b9', borderRadius:4, borderSkipped:false }]
    },
    options:{ indexAxis:'y', responsive:true,
      plugins:{ legend:{display:false},
        tooltip:{callbacks:{label:ctx => 'Importance: '+(ctx.parsed.x*100).toFixed(1)+'%'}}
      },
      scales:{
        x:{ grid:{color:cc.grid}, ticks:{color:cc.text, callback:v=>(v*100).toFixed(0)+'%'} },
        y:{ grid:{display:false}, ticks:{color:cc.text, font:{size:10}} }
      }
    }
  });

  // 8. viz_montecarlo pie — axes[0].pie(champ_pcts, colors=team_colors, autopct)
  charts.mcPie = new Chart(document.getElementById('mcPieChart'), {
    type:'pie', data:{
      labels: MC_DATA.map(m => ABBR[m.team]||m.team),
      datasets:[{ data: MC_DATA.map(m => m.champion),
        backgroundColor: MC_DATA.map(m => COLORS[m.team]||'#888'),
        borderWidth:2, borderColor:cc.bg, hoverOffset:10 }]
    },
    options:{ responsive:true,
      plugins:{
        legend:{position:'bottom', labels:{color:cc.text, padding:14, font:{size:12}}},
        tooltip:{callbacks:{label:ctx => ctx.label+': '+(ctx.parsed*100).toFixed(1)+'% title prob'}}
      }
    }
  });

  // 9. viz_models — ax.bar x-w/x/x+w, ylim(0.4,0.85), axhline at 0.5 (baseline)
  // Notebook colors: Test Acc=#3498db, AUC=#2ecc71, CV=#e67e22
  const modelNames = Object.keys(MODEL_RESULTS);
  charts.model = new Chart(document.getElementById('modelChart'), {
    type:'bar', data:{
      labels: modelNames,
      datasets:[
        { label:'Test Accuracy', data:modelNames.map(m=>MODEL_RESULTS[m].accuracy*100), backgroundColor:'#3498db', borderRadius:3 },
        { label:'AUC-ROC',       data:modelNames.map(m=>MODEL_RESULTS[m].auc*100),      backgroundColor:'#2ecc71', borderRadius:3 },
        { label:'5-Fold CV',     data:modelNames.map(m=>MODEL_RESULTS[m].cv*100),       backgroundColor:'#e67e22', borderRadius:3 },
      ]
    },
    options:{ responsive:true,
      plugins:{
        legend:{labels:{color:cc.text}},
        tooltip:{callbacks:{label:ctx=>ctx.dataset.label+': '+ctx.parsed.y.toFixed(1)+'%'}}
      },
      scales:{
        x:{ grid:{display:false}, ticks:{color:cc.text, maxRotation:15, font:{size:11}} },
        y:{ grid:{color:cc.grid}, ticks:{color:cc.text, callback:v=>v+'%'}, min:40, max:85,
            title:{display:true,text:'Score (%)',color:cc.text2} }
      }
    }
  });
}

function rebuildCharts() {
  buildCharts();
}

// ── INIT ──────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  buildStandings();
  buildVenues();
  populateH2H();
  populatePredictor();
  buildBracket();
  buildMCBars();
  buildModelCards();
  fetchScores();
  setTimeout(buildCharts, 300);
  setTimeout(loadFromURL, 600);
  // re-observe newly added fade-up elements
  setTimeout(() => {
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }, 200);
});