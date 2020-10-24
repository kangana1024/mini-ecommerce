describe('cart function test', function () {
  it('should get single item sum price', function () {
    const items = [
      {
        id: '1234',
        name: '1234',
        description: '1234',
        image: '1234',
        price: 30,
        slug: '1234',
        qty: 5
      }
    ];

    expect(items.reduce((total, item) => {
      return total + (item.price * item.qty)
    }, 0)).toEqual(150);
  });
})