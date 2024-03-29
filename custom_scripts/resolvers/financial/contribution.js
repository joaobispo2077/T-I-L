const { convertCurrencyList } = require('./currency');

const CONTRIBUTION = 12019;

const blockedCategories = ['stock_US_ETF_REITS', 'crypto'];
// const blockedTickers = ["MXRF11", "HGLG11"]; # TODO: add a filtering on ticker names that you already reached the amount limit
const maxLimitByType = [
  {
    type: 'bond_BR',
    limit: 1185
  },
  {
    type: 'stock_US',
    limit: 1101.89
  },
  // {
  //   type: 'stock_US_ETF_REITS',
  //   limit: 1032.04
  // },
  {
    limit: 5391.60,
    type: 'stock_US_ETF',
  },
  {
    limit: 476.87,
    type: 'stock_BR',
  },
  {
    limit: 945.27,
    type: 'reits_BR',
  },
];

const stocksBR = [
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
];

const bondBR = [
  {
    ticker: 'IPCA+ 2029',
    grade: 9,
    type: 'bond_BR',
  },
  // {
  //   ticker: 'LCI 90 DIAS 113,55% CDI Inter',
  //   grade: 8,
  //   type: 'bond_BR',
  // },
  // {
  //   ticker: 'CDB 100% CDI Inter',
  //   grade: 9,
  //   type: 'bond_BR',
  // },
  {
    ticker: 'Tesouro Selic 2026',
    grade: 10,
    type: 'bond_BR',

  }
];

const stocksUsEtf = [
  {
    ticker: 'VOO',
    grade: 9,
    type: 'stock_US_ETF',
  },
  {
    ticker: 'SCHD',
    grade: 9,
    type: 'stock_US_ETF',
  },
  {
    ticker: 'VEA',
    grade: 4,
    type: 'stock_US_ETF',
  },
  {
    ticker: 'EMB',
    grade: 4,
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
];

const stocksUsEtfReits = [
  {
    ticker: 'SCHH',
    grade: 8,
    type: 'stock_US_ETF_REITS',
  },
  {
    ticker: 'VNQI',
    grade: 2,
    type: 'stock_US_ETF_REITS',
  },
];

const stocksUS = [
  {
    ticker: 'AAPL',
    grade: 10,
    type: 'stock_US',
  },
  {
    ticker: 'IBM',
    grade: 8,
    type: 'stock_US',
  },
  {
    ticker: 'DIS',
    grade: 8,
    type: 'stock_US',
  },
  {
    ticker: 'UL',
    grade: 6,
    type: 'stock_US',
  },
  {
    ticker: 'NVDA',
    grade: 3,
    type: 'stock_US',
  },
];

const reitsBR = [
  {
    ticker: 'VISC11',
    grade: 7,
    type: 'reits_BR',
  },
  {
    ticker: 'BCFF11',
    grade: 7,
    type: 'reits_BR',
  },
  {
    ticker: 'SDIL11',
    grade: 6,
    type: 'reits_BR',
  },
  {
    ticker: 'MXRF11',
    grade: 3,
    type: 'reits_BR',
  },
  {
    ticker: 'HGLG11',
    grade: 3,
    type: 'reits_BR',
  },
];

const stocksWithGrades = [
  ...stocksBR,
  ...bondBR,
  ...stocksUsEtf,
  ...stocksUsEtfReits,
  ...stocksUS,
  ...reitsBR
];

const calculateContribution = (stock, contribution, sumAllStockGrades) => {
  return (stock.grade * contribution) / sumAllStockGrades;
}

async function calculatePoundedContributionForStocksByAmount(stocksWithGrades, amount = 0) {
  console.log('calculating pounded contribution for stocks by amount');
  const sumAllStockGrades = stocksWithGrades.reduce((acc, stock) => acc + stock.grade, 0);

  const stockWithContribution = stocksWithGrades.map(stock => ({
    ...stock,
    contribution: calculateContribution(stock, amount, sumAllStockGrades),
  }));

  const sortedStocksWithContribution = stockWithContribution.sort((a, b) => b.grade - a.grade);

  console.info(`CONTRIB BY TICKER`);
  console.table(sortedStocksWithContribution);
  console.info(`amount to contrib: ${amount}`);

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

  const usedAmount = stockWithDollarsContribution.reduce((acc, stock) => {
    return acc + stock.contribution;
  }, 0);

  console.info(`DOLLARS CONTRIB BY TICKER`);
  console.table(stockWithDollarsContribution);
  console.log(`Proposed contribution: ${CONTRIBUTION}`);
  console.log(`Used amount: ${usedAmount}`);
  console.info(`total BRL to convert: ${totalBrlToBeConverted} BRL`);
  console.info(`total USD contrib: ${totalUsdContrib} USD`);

  return stockWithDollarsContribution;
};


async function bootstrapPoundedContributionByWallet() {
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


async function bootstrapPoundedContributionByCategory(stocksWithGrades, maxLimitByType, CONTRIBUTION) {
  const allStockGradesByCategory = stocksWithGrades.reduce((acc, stock) => {
    const { type, grade } = stock;

    if (!acc[type]) {
      acc[type] = [grade];
      return acc;
    }

    acc[type].push(grade);
    return acc;
  }, {});

  const getContributionLimitByCategory = (category) => {
    const maxLimit = maxLimitByType.find(stock => stock.type === category);

    if (!maxLimit) {
      return 0;
    }

    return maxLimit.limit;
  };

  const categoriesWithBaseDetaill = Object.entries(allStockGradesByCategory).reduce((acc, [category, grades]) => {
    const sumAllGrades = grades.reduce((acc, grade) => acc + grade, 0);
    const contributionLimit = getContributionLimitByCategory(category);

    acc.push({
      category,
      categoryGrade: sumAllGrades,
      contributionLimit,
    })
    return acc;
  }, []);

  const sumAllCategoryGrades = categoriesWithBaseDetaill.reduce((acc, category) => {
    acc += category.categoryGrade;
    return acc;
  }, 0);


  const categoriesWithStock = categoriesWithBaseDetaill.map(category => ({
    ...category,
    contribution: calculateContribution({ grade: category.categoryGrade }, CONTRIBUTION, sumAllCategoryGrades),
    stocks: stocksWithGrades.filter(stock => stock.type === category.category) || [],
  }));

  console.log(`sum grade all category: ${sumAllCategoryGrades}`);
  console.table("categoriesWithStock");
  console.table(categoriesWithStock);
  const totalAmountByCategory = categoriesWithStock.reduce((acc, category) => {
    const { category: categoryKey, contribution, contributionLimit } = category;

    if (!acc[categoryKey]) {
      acc[categoryKey] = 0;
    }

    acc[categoryKey] += Math.min(contribution, contributionLimit);
    return acc;
  }, {});
  console.table(totalAmountByCategory);
  const categoriesWithstockPoundedContribByMinAmount = await Promise.all(categoriesWithStock.map(async category => {
    console.log(`calculating pounded contrib for ${category.category}`);
    console.log(`using amount: ${totalAmountByCategory[category.category]}`);

    const stocksContrib = await calculatePoundedContributionForStocksByAmount(
      category.stocks,
      totalAmountByCategory[category.category]
    );

    const categoryWithStockContrib = {
      ...category,
      stocksContrib
    };

    return categoryWithStockContrib;
  }
  ));

  categoriesWithstockPoundedContribByMinAmount.forEach(category => {
    console.table(category.stocksContrib);

    const totalAmount = category.stocksContrib.reduce((acc, stock) => {
      acc += stock.contribution;

      return acc;
    }, 0);
    console.log(`total contrib: ${totalAmount} in ${category.category}`);
  });
  console.log(`sum grade all category: ${sumAllCategoryGrades}`);
  console.table(categoriesWithStock);
  console.table(totalAmountByCategory);
  const amountUsed = Object.values(totalAmountByCategory).reduce((acc, category) => {
    acc += category;
    return acc;
  }, 0);
  console.log(`amount used: ${amountUsed}`);
  // console.table(categoriesWithstockPoundedContribByMinAmount);
};




async function bootstrap() {
  // run this when want to avoid blocked types
  // await bootstrapPoundedContributionByWallet();
  // console.log('next one');

  // run this when the wallet is balanced with all stocks except blocked ones
  // await calculatePoundedContributionForStocksByAmount(
  //   stocksWithGrades.filter(stock => !blockedCategories.includes(stock.type))
  //   , CONTRIBUTION
  // );

  // fill contrib limits according the spreadsheet and run this when need to balance the wallet
  bootstrapPoundedContributionByCategory(
    stocksWithGrades.filter(stock => !blockedCategories.includes(stock.type)),
    maxLimitByType,
    CONTRIBUTION
  );

}

bootstrap();
