const { convertCurrencyList } = require('./currency');

const CONTRIBUTION = 12019;

const blockedCategories = ['stock_BR', 'crypto', 'stocks_US', 'stock_BR'];

const stocksWithGrades = [
  {
    ticker: 'ITSA4',
    grade: 9,
    type: 'stock_BR',
  },
  {
    ticker: 'PSSA3',
    grade: 7,
    type: 'stock_BR',
  },
  {
    ticker: 'BBDC3',
    grade: 6,
    type: 'stock_BR',
  },
  {
    ticker: 'KLBN11',
    grade: 6,
    type: 'stock_BR',
  },
  {
    ticker: 'IPCA+ 2029',
    grade: 10,
    type: 'bond_BR',
  },
  {
    ticker: 'Tesouro Selic 2029',
    grade: 10,
    type: 'bond_BR',

  },
  {
    ticker: 'VOO',
    grade: 8,
    type: 'stock_US_ETF',
  },
  {
    ticker: 'SCHD',
    grade: 8,
    type: 'stock_US_ETF',
  },
  {
    ticker: 'VEA',
    grade: 2,
    type: 'stock_US_ETF',
  },
  {
    ticker: 'EMB',
    grade: 2,
    type: 'stock_US_ETF',
  },
  {
    ticker: 'VWO',
    grade: 1,
    type: 'stock_US_ETF',
  },
  {
    ticker: 'IJR',
    grade: 1,
    type: 'stock_US_ETF',
  },
  {
    ticker: 'SCHH',
    grade: 8,
    type: 'stock_US_ETF_REITS',
  },
  {
    ticker: 'VNQI',
    grade: 1,
    type: 'stock_US_ETF_REITS',
  },
].filter(stock => !blockedCategories.includes(stock.type));

const calculateContribution = (stock, contribution, sumAllStockGrades) => {
  return (stock.grade * contribution) / sumAllStockGrades;
}

async function bootstrap() {
  const sumAllStockGrades = stocksWithGrades.reduce((acc, stock) => acc + stock.grade, 0);

  const stockWithContribution = stocksWithGrades.map(stock => ({
    ...stock,
    contribution: calculateContribution(stock, CONTRIBUTION, sumAllStockGrades),
  }));

  const sortedStocksWithContribution = stockWithContribution.sort((a, b) => b.grade - a.grade);

  console.info(`CONTRIB BY TICKER`);
  console.table(sortedStocksWithContribution);
  console.info(`total contrib: ${CONTRIBUTION}`);

  const categoryByTotalContrib = stockWithContribution.reduce((acc, stock) => {
    const { type, contribution } = stock;

    if (!acc[type]) {
      acc[type] = 0;
    }

    acc[type] += contribution;
    return acc;
  }, {});

  console.info(`CONTRIB BY CATEGORY`);
  console.table(categoryByTotalContrib);

  const stockWithDollarsContribution = await convertCurrencyList({
    baseKey: 'contribution',
    newProperty: 'usd_contribution',
    baseCurrency: 'BRL',
    targetCurrency: 'USD',
    list: sortedStocksWithContribution,
  });

  const totalUsdContrib = stockWithDollarsContribution.reduce((acc, stock) => {
    if (stock.usd_contribution !== '-') {
      acc += stock.usd_contribution;
    }

    return acc;
  }, 0);

  const totalBrlToBeConverted = stockWithDollarsContribution.reduce((acc, stock) => {
    if (stock.usd_contribution !== '-') {
      acc += stock.contribution;
    }

    return acc;
  }, 0);

  console.info(`DOLLARS CONTRIB BY TICKER`);
  console.table(stockWithDollarsContribution);
  console.info(`total BRL to convert: ${totalBrlToBeConverted} BRL`);
  console.info(`total USD contrib: ${totalUsdContrib} USD`);
};

bootstrap();
