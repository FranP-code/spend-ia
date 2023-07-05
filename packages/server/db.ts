import mongoose from 'mongoose';

export default async (): Promise<void> => {
  await mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Error connecting to MongoDB:', error);
    });
};
