import pino from "pino";
import makeConfig from "../config";
import { LogData, Logger } from "./types";

const config = makeConfig();

const pinoLogger = pino({
	level: config.logLevel,
});

const parseLoggerInputToPinoFormat = <T>({
	message,
	error,
	...data
}: LogData<T>) => ({
	...data,
	msg: message,
	err: error,
});

const logger: Logger = {
	debug: <T>(log: LogData<T>) =>
		pinoLogger.debug(parseLoggerInputToPinoFormat(log)),
	info: <T>(log: LogData<T>) =>
		pinoLogger.info(parseLoggerInputToPinoFormat(log)),
	warn: <T>(log: LogData<T>) =>
		pinoLogger.warn(parseLoggerInputToPinoFormat(log)),
	error: <T>(log: LogData<T>) =>
		pinoLogger.error(parseLoggerInputToPinoFormat(log)),
};

export default (): Logger => logger;
