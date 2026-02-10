

const tickets = [
  {
    ticker: "ITSA4",
    quantity: 15,
    value: 8.58
  },
  {
    ticker: "SDIL11",
    quantity: 4,
    value: 87.93
  },
  {
    ticker: "BCFF11",
    quantity: 3,
    value: 62.15
  },
  {
    ticker: "VISC11",
    quantity: 2,
    value: 104.20
  },
  {
    ticker: "HGLG11",
    quantity: 4,
    value: 161.05
  }
].map(ticket => ({
  ...ticket,
  total: Math.round(ticket.quantity * ticket.value)
}));

//DOLLAR -> AAPL, DIS, NVDA, IBM, UL

const total = tickets.reduce(
  (previousValue, currentValue) => previousValue + currentValue.total,
  0
);

console.table(tickets);
console.log(`Total: ${total}`);
