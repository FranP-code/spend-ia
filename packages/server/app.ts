import { z } from 'zod';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './db';
import { publicProcedure, router } from './trpc';
import { User, UserSchema } from './schemas';

dotenv.config();

const appRouter = router({
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    const user = await User.findById(input);
    return user;
  }),
  userCreate: publicProcedure.input(UserSchema).mutation(async ({ input }) => {
    const user = await User.create(input);
    return user;
  }),
  userList: publicProcedure.query(async () => {
    const users = await User.find();
    return users;
  }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

dbConnection()
  .then(() => {
    server.listen(3000);
  })
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  });
