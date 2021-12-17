const { LOG_LEVEL = "info" } = process.env;

const config = {
	logLevel: LOG_LEVEL,
};

export default () => config;
