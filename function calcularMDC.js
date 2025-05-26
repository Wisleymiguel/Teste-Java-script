function calcularMDC(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

module.exports = calcularMDC;   
