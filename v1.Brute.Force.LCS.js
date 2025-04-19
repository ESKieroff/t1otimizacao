/**
 * Função recursiva para encontrar o comprimento da
 * Maior Subsequência Comum (LCS) entre duas strings.
 * 
 * @param {string} s1 - Primeira string
 * @param {string} s2 - Segunda string
 * @param {number} i - Índice atual em s1
 * @param {number} j - Índice atual em s2
 * @returns {number} - Comprimento da LCS até os índices i e j
 */
function lcsRecursive(s1, s2, i = 0, j = 0) {
    // Caso base: se chegarmos ao fim de uma das strings
    if (i === s1.length || j === s2.length) {
      return 0;
    }
  
    if (s1[i] === s2[j]) {
      // Se os caracteres são iguais, avança em ambos e soma 1
      return 1 + lcsRecursive(s1, s2, i + 1, j + 1);
    } else {
      // Se diferentes, tenta as duas possibilidades (pular um caractere de cada vez)
      const skipS1 = lcsRecursive(s1, s2, i + 1, j);
      const skipS2 = lcsRecursive(s1, s2, i, j + 1);
      return Math.max(skipS1, skipS2);
    }
  }
  
  // 🔍 Exemplo de uso:
  const string1 = "AGGTAB";
  const string2 = "GXTXAYB";
  
  console.log(`LCS length: ${lcsRecursive(string1, string2)}`); // Saída esperada: 4
  