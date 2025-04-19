const { performance } = require("perf_hooks");

// ========== VERSÃO RECURSIVA COM CONTADOR ==========
function lcsRecursive(s1, s2) {
  let recursiveCalls = 0;

  function helper(i, j) {
    recursiveCalls++;
    if (i === s1.length || j === s2.length) return 0;
    if (s1[i] === s2[j]) return 1 + helper(i + 1, j + 1);
    return Math.max(helper(i + 1, j), helper(i, j + 1));
  }

  const start = performance.now();
  const result = helper(0, 0);
  const end = performance.now();

  return {
    result,
    time: (end - start).toFixed(2),
    calls: recursiveCalls
  };
}

// ========== VERSÃO COM PROGRAMAÇÃO DINÂMICA ==========
function lcsDP(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  let iterations = 0;

  const start = performance.now();
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      iterations++;
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  const end = performance.now();

  return {
    result: dp[m][n],
    time: (end - start).toFixed(2),
    iterations
  };
}

// ========== FUNÇÃO DE TESTE COMPARATIVO ==========
function runTestCases() {
  const testCases = [
    { name: "Curto 1", s1: "abcde", s2: "ace" },
    { name: "Curto 2", s1: "abc", s2: "def" },
    { name: "Médio", s1: "AGGTAB", s2: "GXTXAYB" },
    { name: "Longo", s1: "abcdefgabcdefg", s2: "gfedcbagfedcba" },
    { name: "Muito Longo", s1: "abcde".repeat(5), s2: "edcba".repeat(5) }
  ];

  console.log(`\n📊 Comparativo entre implementações LCS\n`);
  console.log("| Caso          | Tam | LCS | Rec(ms) | Rec.Calls | DP(ms) | DP.Iters |");
  console.log("|---------------|-----|-----|---------|-----------|--------|----------|");

  for (let { name, s1, s2 } of testCases) {
    let r = lcsRecursive(s1, s2);
    let d = lcsDP(s1, s2);

    const tam = `${s1.length}x${s2.length}`;
    console.log(
      `| ${name.padEnd(13)} | ${tam.padEnd(3)} | ${r.result
        .toString()
        .padEnd(3)} | ${r.time.padEnd(7)} | ${r.calls
        .toString()
        .padEnd(9)} | ${d.time.padEnd(6)} | ${d.iterations
        .toString()
        .padEnd(8)} |`
    );
  }
}

runTestCases();
