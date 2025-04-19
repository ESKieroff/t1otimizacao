/**
 * Calcula o comprimento da Maior Subsequência Comum (LCS)
 * entre duas strings usando Programação Dinâmica (Bottom-Up).
 * 
 * @param {string} s1 - Primeira string
 * @param {string} s2 - Segunda string
 * @returns {number} - Comprimento da LCS
 */
function lcsDP(s1, s2) {
    const n = s1.length;
    const m = s2.length;
  
    // Cria uma matriz (n+1 x m+1) inicializada com zeros
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  
    // Preenche a matriz de forma bottom-up
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    return dp[n][m];
  }
  
  // 🔍 Exemplo de uso:
  const string1 = "AGGTAB";
  const string2 = "GXTXAYB";
  
  console.log(`LCS length (DP): ${lcsDP(string1, string2)}`); // Saída esperada: 4
  