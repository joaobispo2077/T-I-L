const papers = [
  {
    code: 'SDIL11',
    quantity: 4,
    value: 91.84,
  },
  {
    code: 'ITSA4',
    quantity: 40,
    value: 8.16
  },
  {
    code: 'BCFF11',
    quantity: 4,
    value: 67.04
  },
  {
    code: 'VISC11',
    quantity: 1,
    value: 105.70
  },
  {
    code: 'HGLG11',
    quantity: 1,
    value: 162.49
  }
].map(paper => ({
  ...paper,
  total: Math.round(paper.quantity * paper.value),
}));


const total = papers.reduce((acc, current) => acc + current.value * current.quantity, 0);

console.table(papers);
console.log("total:", total);
