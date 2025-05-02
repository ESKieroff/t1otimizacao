# 🧠 Projeto e Otimização de Algoritmos  
## Trabalho 1 – Programação Dinâmica

**Professor:** Michael da Costa Móra  
**Grupo:**  
- Carol Lewandowski
- Leonardo Bortoletti
- Paulo Cardoso Carnovale
- Rodrigo Oliveira Rosa 

**Tema:** Algoritmo para cálculo da **Maior Subsequência Comum (LCS)**  
**Data de Entrega:** _[Inserir data]_  

---

## 📌 1. Introdução

Este relatório apresenta o estudo, a implementação e a análise do algoritmo para o problema da **Maior Subsequência Comum (LCS)** utilizando a técnica de **Programação Dinâmica**.  
O problema da LCS é um clássico da área de algoritmos e tem aplicações em bioinformática, comparação de arquivos e versionamento de código.

---

## 📖 2. Descrição do Problema

Dadas duas strings \( S_1 \) e \( S_2 \), deseja-se encontrar o comprimento da maior subsequência que seja comum a ambas.  

> **Exemplo:**  
> S1 = `"AGGTAB"`  
> S2 = `"GXTXAYB"`  
> LCS = `"GTAB"`  
> Comprimento = 4

---

## 🧪 3. Exemplos de Casos do Problema

| S1         | S2         | LCS      | Comprimento |
|------------|------------|----------|-------------|
| `ABCBDAB`  | `BDCAB`    | `BCAB`   | 4           |
| `ABCDGH`   | `AEDFHR`   | `ADH`    | 3           |
| `ABC`      | `AC`       | `AC`     | 2           |

*Inserir mais exemplos e prints se necessário.*

---

## 🧮 4. Algoritmo Recursivo (Força Bruta)

### 4.1 Descrição do Algoritmo

- Estratégia de exploração completa de todas as subsequências possíveis.
- Complexidade **exponencial**.

### 4.2 Pseudocódigo

```text
function LCS(i, j):
  if i >= len(S1) or j >= len(S2):
    return 0
  if S1[i] == S2[j]:
    return 1 + LCS(i+1, j+1)
  else:
    return max(LCS(i+1, j), LCS(i, j+1))
```

### 4.3 Exemplo de Execução

📸 _[Inserir print/output com trace do algoritmo recursivo]_  

---

## ⚙️ 5. Algoritmo com Programação Dinâmica

### 5.1 Descrição

- Abordagem bottom-up com tabela de subproblemas.
- Complexidade: **O(n × m)** em tempo e espaço.

### 5.2 Pseudocódigo

```text
Criar matriz dp[n+1][m+1]
para i de 1 até n:
  para j de 1 até m:
    se S1[i-1] == S2[j-1]:
      dp[i][j] = dp[i-1][j-1] + 1
    senão:
      dp[i][j] = max(dp[i-1][j], dp[i][j-1])
```

### 5.3 Exemplo de Execução

📸 _[Inserir print da matriz preenchida e subsequência reconstruída, se aplicável]_  

---

## 🖥️ 6. Implementação

### 6.1 Tecnologias utilizadas

- Linguagem: JavaScript  
- Ferramentas: Node.js / Console

### 6.2 Estrutura do Código

📁 `lcs-recursive.js`  
📁 `lcs-dp.js`  

### 6.3 Trechos Relevantes

#### Algoritmo Recursivo

```js
function lcsRecursive(s1, s2, i = 0, j = 0) {
  // ...
}
```

#### Algoritmo com Programação Dinâmica

```js
function lcsDP(s1, s2) {
  // ...
}
```

---

## 🧾 7. Casos de Teste

| S1       | S2       | LCS Esperado | Recursivo (ms) | DP (ms) | Iterações Recursivo | Iterações DP |
|----------|----------|---------------|----------------|---------|----------------------|--------------|
| `AGGTAB` | `GXTXAYB`| `GTAB` (4)     | 85             | 1       | 89                   | 42           |
| `ABC`    | `AC`     | `AC` (2)       | 10             | <1      | 5                    | 6            |

📸 _[Inserir prints ou gráficos com tempo de execução e número de iterações]_  

---

## 📊 8. Análise Comparativa

- Comparação de desempenho entre as duas abordagens;
- Limitações do algoritmo recursivo puro;
- Ganhos evidentes com uso da Programação Dinâmica;
- Discussão sobre complexidade e uso de memória.

📈 _[Inserir gráficos comparativos se possível]_  

---

## 📁 9. Arquivos para Entrega

- `relatorio.pdf` – este documento completo;
- `lcs-recursive.js` – implementação recursiva;
- `lcs-dp.js` – implementação com DP;
- Outros arquivos auxiliares, se necessário.

---

## ✅ 10. Conclusão

- O problema da LCS é uma excelente aplicação para técnicas de otimização com programação dinâmica.
- A versão recursiva é valiosa para entendimento conceitual, mas inviável em escalas maiores.
- A versão dinâmica resolve o problema de forma eficiente e com excelente desempenho.

---

## 📚 Referências

- Cormen, T. H. et al. **Algoritmos: Teoria e Prática**.  
- Leetcode. LCS Problem. Disponível em: https://leetcode.com/problems/longest-common-subsequence/  
- GeeksForGeeks. LCS Tutorial. https://www.geeksforgeeks.org/longest-common-subsequence/

---
