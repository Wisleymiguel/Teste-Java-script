
function listarnumeros(inicio, fim) {
  const resultado = [];
  for (let i = inicio; i <= fim; i++) {
    resultado.push(i);
  }
  return resultado;
}

module.exports = listarnumeros;   
