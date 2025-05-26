const calcularMDC = require('./function calcularMDC');

test('calcularMDC de 12 e 18 deve ser 6', () => {
  expect(calcularMDC(12, 18)).toBe(6);
});

test('se um dos números é 0, devolve o outro', () => {
  expect(calcularMDC(0, 7)).toBe(7);
  expect(calcularMDC(9, 0)).toBe(9);
});
