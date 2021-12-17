import "dotenv/config";

import { makeLogger } from "./logger";

const logger = makeLogger();
logger.info({ type: "LOG_TYPE_1", message: "Hello world debug!" });
