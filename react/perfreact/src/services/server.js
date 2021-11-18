module.exports = () => {
  const mockProducts = Array.from(Array(1000).keys(), (current) => ({
    id: current + 1,
    title: `Product ${current + 1}`,
    price: current + 1 * 2.5,
  }));

  return mockProducts;
};
