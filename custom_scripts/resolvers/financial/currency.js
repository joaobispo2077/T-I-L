const fs = require('fs');
const fsAsync = require('fs').promises;
const path = require('path');

const {
  CacheStore,
  setupIsMemoryCacheValid,
  setupIsDataRecent,
  setupIsFileCacheValid
} = require('./cache');
const { logger } = require('./logger');
const { runSerialPromisesResolveOneKey, runParallelPromisesResolveOneKey } = require('./utils');

logger.setLevel('debug');

const basePath = path.dirname(__filename);
const cacheFile = `${basePath}/currencyCache.json`;
const cacheApiKey = `${basePath}/currencyApiKey.txt`;
const maxCacheAge = 24 * 60 * 60 * 1000; // Cache age in milliseconds (24 hours in this case)

const apiKey = fs.readFileSync(cacheApiKey, 'utf8').trim();
logger.debug(`API Key: '${apiKey}'`);
const apiURL = 'https://api.currencyapi.com/v3/latest';

const cacheStore = new CacheStore();
const checkDataIsRecent = setupIsDataRecent(maxCacheAge);
const [
  isMemoryCacheValid,
  isFileCacheValid
] = [
    setupIsMemoryCacheValid(cacheStore, checkDataIsRecent),
    setupIsFileCacheValid(cacheFile, checkDataIsRecent, fs, fsAsync)
  ];

const checkCacheValid = async (key) => {
  if (isMemoryCacheValid(key)) {
    logger.log('Valid memory cache found.');
    return true;
  } else {
    logger.log('Invalid memory cache found.');
  }

  if (await isFileCacheValid()) {
    logger.log('Valid file cache found.');
    return true;
  } else {
    logger.log('Invalid file cache found.');
  }

  return false;
}

async function cacheExchangeRate(baseCurrency, targetCurrency, rate) {
  const cacheData = {
    lastUpdated: new Date().toISOString(),
    baseCurrency,
    targetCurrency,
    rate
  };
  cacheStore.set(`${baseCurrency}_${targetCurrency}`, cacheData);
  await fsAsync.writeFile(cacheFile, JSON.stringify(cacheData));
}

async function getBRLOnCurrencyAPI() {
  const params = new URLSearchParams({
    apikey: apiKey,
    base_currency: 'BRL',
    currencies: 'USD'
  });

  try {
    const response = await fetch(`${apiURL}?${params}`);
    const data = await response.json();
    logger.log(`Data is: ${JSON.stringify(data)}`);
    const exchangeRateData = data.data.USD.value;
    logger.log(`The exchange rate from BRL to USD is: ${exchangeRateData}`);
    return { exchangeRateData };
  } catch (error) {
    logger.error('Error occurred: ', error);
  }
}


async function getExchangeRateFromAPI(baseCurrency, targetCurrency) {
  logger.log(`Fetching exchange rate from API for ${baseCurrency} to ${targetCurrency}.`);
  const params = new URLSearchParams({
    apikey: apiKey,
    base_currency: baseCurrency,
    currencies: targetCurrency
  });

  try {
    const response = await fetch(`${apiURL}?${params}`);
    const data = await response.json();
    const exchangeRateData = data.data[targetCurrency].value;
    await cacheExchangeRate(baseCurrency, targetCurrency, exchangeRateData);
    return exchangeRateData;
  } catch (error) {
    logger.error('Error occurred while fetching from API: ', error);
    return null;
  }
}


async function getExchangeRateFromCache(baseCurrency, targetCurrency) {
  try {
    const cacheData = cacheStore.get(`${baseCurrency}_${targetCurrency}`);
    if (cacheData) {
      const now = new Date();
      const lastUpdated = new Date(cacheData.lastUpdated);
      const age = now - lastUpdated;

      if (age < maxCacheAge) {
        logger.log('Using memory cached exchange rate.');
        return cacheData.rate;
      }
    }


    const fileExists = fs.existsSync(cacheFile);
    if (fileExists) {
      const data = JSON.parse(await fsAsync.readFile(cacheFile));
      const now = new Date();
      const lastUpdated = new Date(data.lastUpdated);
      const age = now - lastUpdated;

      if (age < maxCacheAge && data.baseCurrency === baseCurrency && data.targetCurrency === targetCurrency) {
        logger.log('Using file cached exchange rate.');
        cacheStore.set(`${baseCurrency}_${targetCurrency}`, data);
        return data.rate;
      }
    }
  } catch (error) {
    logger.error('Error occurred while reading from cache: ', error);
  }
  // If cache is not valid, fetch new data
  return getExchangeRateFromAPI(baseCurrency, targetCurrency);
}

async function convertCurrency(amount, baseCurrency, targetCurrency) {
  const exchangeRate = await getExchangeRateFromCache(baseCurrency, targetCurrency);
  if (exchangeRate) {
    const convertedAmount = amount * exchangeRate;
    logger.log(`${amount} ${baseCurrency} is equivalent to ${convertedAmount.toFixed(2)} ${targetCurrency}.`);
    return convertedAmount;
  } else {
    logger.log(`Unable to convert ${baseCurrency} to ${targetCurrency} at this time.`);
  }
}


async function convertBRLToUSD(amountInBRL) {
  const { exchangeRateData } = await getBRLOnCurrencyAPI();
  if (exchangeRateData) {
    const amountInUSD = amountInBRL * exchangeRateData;
    logger.log(`${amountInBRL} BRL is equivalent to ${amountInUSD.toFixed(2)} USD.`);
    return amountInUSD;
  } else {
    logger.error('Unable to convert BRL to USD at this time.');
  }
}

async function convertCurrencyList({
  baseKey,
  newProperty,
  list,
  baseCurrency,
  targetCurrency,
}) {
  const newList = list.map(item => ({
    ...item,
    [newProperty]: item.type.includes('US') ?
      async () => await convertCurrency(item[baseKey], baseCurrency, targetCurrency) :
      async () => '-',
  }));
  const cacheKey = `${baseCurrency}_${targetCurrency}`;

  const isCacheValid = await checkCacheValid(cacheKey);
  logger.debug(`isCacheValid+: ${isCacheValid}`);
  if (!isCacheValid) {
    logger.log("Running serial promises.");
    return await runSerialPromisesResolveOneKey(newList, newProperty);
  }

  logger.log("Running parallel promises.");
  return await runParallelPromisesResolveOneKey(newList, newProperty);
}


module.exports = {
  getBRLOnCurrencyAPI,
  convertBRLToUSD,
  getExchangeRateFromAPI,
  convertCurrency,
  convertCurrencyList
}
