const listarnumeros = require('./listarnumeros');

test('listarnumeros de 1 a 5 deve retornar [1,2,3,4,5]', () => {
  expect(listarnumeros(1, 5)).toEqual([1,2,3,4,5]);
});
