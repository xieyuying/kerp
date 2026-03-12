import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure
    .input(
      z
        .object({
          name: z.string().trim().min(1).default("KERP user"),
        })
        .default({ name: "KERP user" })
    )
    .query(({ input }) => {
      return {
        message: `hello, ${input.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
