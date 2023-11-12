const logLevels = {
  debug: 1,
  info: 2,
  warn: 3,
  error: 4
};

const logger = {
  level: 'info',
  setLevel: function (level) {
    this.level = level;
  },

  shouldLog: function (level) {
    return logLevels[level] >= logLevels[this.level];
  },

  log: function (message, level = 'info') {
    if (this.shouldLog(level)) {
      console.log(`[${level.toUpperCase()}] - ${message}`);
    }
  },

  debug: function (message) {
    this.log(message, 'debug');
  },

  info: function (message) {
    this.log(message, 'info');
  },

  warn: function (message) {
    this.log(message, 'warn');
  },

  error: function (message) {
    this.log(message, 'error');
  }
};

module.exports = { logger };
