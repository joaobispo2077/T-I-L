const { logger } = require('./logger');

class CacheStore {
  constructor() {
    this.cache = {};
  }

  isValid(key) {
    return !!this.cache[key];
  }

  get(key) {
    logger.debug(`Getting memory cached ${key}`);
    return this.cache[key];
  }

  set(key, value) {
    logger.debug(`Setting memory ${key} to ${value}`);
    this.cache[key] = value;
  }

}

const setupIsMemoryCacheValid = (cacheStore, checkDataIsRecent) => {
  const isMemoryCacheValid = (key) => {
    const cacheData = cacheStore.get(key);
    return cacheData && checkDataIsRecent(cacheData);
  };

  return isMemoryCacheValid;
};

const setupIsDataRecent = (maxCacheAge) => {
  const isDataRecent = (data) => {
    const lastUpdated = new Date(data.lastUpdated);
    const age = new Date() - lastUpdated;
    return age < maxCacheAge;
  };

  return isDataRecent;
};

const setupIsFileCacheValid = (cacheFile, checkDataIsRecent, fs, fsAsync) => {
  const isFileCacheValid = async () => {
    if (!fs.existsSync(cacheFile)) {
      return false
    };

    const rawFile = await fsAsync.readFile(cacheFile);
    const fileData = JSON.parse(rawFile);
    return checkDataIsRecent(fileData);
  };

  return isFileCacheValid;
};

module.exports = {
  CacheStore,
  setupIsMemoryCacheValid,
  setupIsDataRecent,
  setupIsFileCacheValid,
};
