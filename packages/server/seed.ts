import { getRandomItem } from 'utils';
import { Currency, Spending, SpendingCategory, User } from './schemas';

export default async (): Promise<void> => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  void import('@faker-js/faker').then(async ({ faker }) => {
    const EMAIL = 'abc1234@gmail.com';
    if (await User.exists({ email: EMAIL })) {
      return;
    }
    const user = await User.create({
      email: EMAIL,
      name: faker.person.fullName(),
      password: '123456',
    });
    const spendingCategories = await SpendingCategory.insertMany(
      [
        { backgroundColor: 'rgb(99, 128, 255)', label: 'invest' },
        { backgroundColor: 'rgb(54, 162, 235)', label: 'school' },
        { backgroundColor: 'rgb(145, 86, 255)', label: 'party' },
      ].map(({ backgroundColor, label }) => ({ backgroundColor, label, userId: user.id })),
    );
    const currencies = await Currency.insertMany([
      {
        label: 'USD',
      },
      {
        label: 'EUR',
      },
      {
        label: 'ARS',
      },
    ]);
    await Spending.insertMany(
      [...Array(10)].map(() => ({
        amount: Math.random() * 10000,
        currencyId: getRandomItem(currencies).id,
        date: faker.date.past(),
        spendingCategoryId: getRandomItem(spendingCategories).id,
        userId: user.id,
      })),
    );
  });
};
