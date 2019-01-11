/* eslint-disable no-console */

class Logger {
  defaultLevel = 5;

  LEVELS = {
    LOG: 0,
    DEBUG: 1,
    INFO: 2,
    WARN: 3,
    ERROR: 4,
    OFF: 5,
  };

  constructor() {
    this.currentLevel = this.defaultLevel;
  }

  static get instance() {
    if (!this.singleton) {
      this.singleton = new Logger();
    }

    return this.singleton;
  }

  setLevel(value) {
    if (typeof value === 'string') {
      this.currentLevel = this.LEVELS[value];
    } else {
      this.currentLevel = value;
    }
  }

  isEnabled(level) {
    return level >= this.currentLevel;
  }

  log(msg, ...args) {
    const { LOG } = this.LEVELS;

    if (this.isEnabled(LOG)) {
      console.log(msg, ...args);
    }
  }

  debug(msg, ...args) {
    const { DEBUG } = this.LEVELS;

    if (this.isEnabled(DEBUG)) {
      console.debug(msg, ...args);
    }
  }

  info(msg, ...args) {
    const { INFO } = this.LEVELS;

    if (this.isEnabled(INFO)) {
      console.info(msg, ...args);
    }
  }

  warn(msg, ...args) {
    const { WARN } = this.LEVELS;

    if (this.isEnabled(WARN)) {
      console.warn(msg, ...args);
    }
  }

  error(msg, ...args) {
    const { ERROR } = this.LEVELS;

    if (this.isEnabled(ERROR)) {
      console.error(msg, ...args);
    }
  }
}

const logger = Logger.instance;

export default logger;
