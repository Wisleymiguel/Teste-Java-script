# 🧩 Exercícios em JavaScript – Módulo 2

Repositório de estudos focado em **lógica de programação** e **testes unitários** com **JavaScript**.  
Os exercícios foram desenvolvidos como prática para consolidar fundamentos de programação e boas práticas de **qualidade de software**.

---

## 🚀 Objetivo
- Resolver problemas de lógica usando funções em JavaScript;
- Criar **testes automatizados** para validar cada solução;
- Praticar princípios de **TDD (Test-Driven Development)**;
- Fortalecer a base de raciocínio lógico aplicada à programação.

---

## 🛠️ Tecnologias Utilizadas
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  
- [Node.js](https://nodejs.org/)  
- [Jest](https://jestjs.io/) *(ou framework usado nos testes)*  

---

## 📂 Estrutura do Projeto
├── Arrey.js # Funções de manipulação de arrays
├── Arrey.test.js # Testes para funções de array
├── function calcularMDC.js # Função para calcular o MDC
├── function calcularMDC.test.js
├── listarnumeros.js # Função para listar números
├── listarnumeros.test.js
├── package.json # Dependências e scripts
└── README.md

---

## ⚙️ Como Executar

1. **Clonar o repositório**
```bash
git clone https://github.com/Wisleymiguel/Teste-Java-script.git
cd Teste-Java-script/modulo-2
npm install
Rodar os testes

bash
Copiar código
npm test
📌 Exemplos de Exercícios
✅ Calcular MDC
javascript
Copiar código
const calcularMDC = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
✅ Teste correspondente
javascript
Copiar código
test("calcular o MDC de 48 e 18 deve ser 6", () => {
  expect(calcularMDC(48, 18)).toBe(6);
});

