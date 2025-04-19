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

// ========== FUNÇÃO DE EXPORTAR PARA CSV ==========
function exportCSV(results) {
  const fs = require("fs");

  const headers = [
    "Caso",
    "Tam_S1",
    "Tam_S2",
    "LCS",
    "Recursivo_Tempo(ms)",
    "Recursivo_Chamadas",
    "DP_Tempo(ms)",
    "DP_Iterações"
  ];
  const rows = results.map(r => [
    r.name,
    r.s1.length,
    r.s2.length,
    r.rec.result,
    r.rec.time,
    r.rec.calls,
    r.dp.time,
    r.dp.iterations
  ]);
  const csv = [headers, ...rows]
    .map(row => row.join(","))
    .join("\n");

  fs.writeFileSync("comparativo-lcs.csv", csv);
  console.log("📄 Arquivo 'comparativo-lcs.csv' gerado com sucesso!");
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

  let results = [];

  console.log(`\n📊 Comparativo entre implementações LCS\n`);
  console.log("| Caso          | Tam | LCS | Rec(ms) | Rec.Calls | DP(ms) | DP.Iters |");
  console.log("|---------------|-----|-----|---------|-----------|--------|----------|");

  for (let { name, s1, s2 } of testCases) {
    let rec = lcsRecursive(s1, s2);
    let dp = lcsDP(s1, s2);
    const tam = `${s1.length}x${s2.length}`;

    console.log(
      `| ${name.padEnd(13)} | ${tam.padEnd(3)} | ${rec.result
        .toString()
        .padEnd(3)} | ${rec.time.padEnd(7)} | ${rec.calls
        .toString()
        .padEnd(9)} | ${dp.time.padEnd(6)} | ${dp.iterations
        .toString()
        .padEnd(8)} |`
    );

    results.push({ name, s1, s2, rec, dp });
  }

  exportCSV(results); // Aqui chama a exportação para CSV
}

// Rodando os testes
runTestCases();
