import mongoose from 'mongoose';

export interface User {
  id: string;
  name: string;
}

// Imaginary database
const users: User[] = [];
export const db = {
  user: {
    create: async (data: { name: string }) => {
      const user = { id: String(users.length + 1), ...data };
      users.push(user);
      return user;
    },
    findById: async (id: string) => users.find((user) => user.id === id),
    findMany: async () => users,
  },
};

export default async (): Promise<void> => {
  await mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
};
