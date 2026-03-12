import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../worker/src/router";

const localUrl = "http://127.0.0.1:8787/trpc";
const productionUrl = "https://api.kerp.online/trpc";
const defaultUrl = import.meta.env.DEV ? localUrl : productionUrl;

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_TRPC_URL || defaultUrl,
    }),
  ],
});
