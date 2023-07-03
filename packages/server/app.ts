import { z } from 'zod';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import { db } from './db';
import { publicProcedure, router } from './trpc';

const appRouter = router({
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    const user = await db.user.findById(input);
    return user;
  }),
  userCreate: publicProcedure.input(z.object({ name: z.string() })).mutation(async ({ input }) => {
    const user = await db.user.create(input);
    return user;
  }),
  userList: publicProcedure.query(async () => {
    const users = await db.user.findMany();
    return users;
  }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

server.listen(3000);
