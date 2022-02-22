import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from "urql";
import { config } from "../config";

const { environment, apiEndpoints } = config;

const { isClientSide } = environment;

const ssrCache = ssrExchange({ isClient: isClientSide });

const urqlClient = createClient({
  url: apiEndpoints.blog,
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { urqlClient, ssrCache };
