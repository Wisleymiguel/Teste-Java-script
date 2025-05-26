const Arrey = require('./Arrey');   

describe('Arrey (implementação simples de Array)', () => {
  test('cria objeto com length 0', () => {
    const arr = new Arrey();
    expect(typeof arr).toBe('object');
    expect(arr).toHaveProperty('length', 0);
  });

  test('push adiciona item e incrementa length', () => {
    const arr = new Arrey();
    const retorno = arr.push(42);
    expect(retorno).toBe(1);       
    expect(arr.length).toBe(1);
    expect(arr[0]).toBe(42);
  });

  test('pop remove e devolve o último item', () => {
    const arr = new Arrey();
    arr.push('a');
    arr.push('b');
    const ultimo = arr.pop();
    expect(ultimo).toBe('b');
    expect(arr.length).toBe(1);
    expect(arr[0]).toBe('a');
  });

  test('pop em array vazio devolve undefined', () => {
    const arr = new Arrey();
    expect(arr.pop()).toBeUndefined();
  });
});
