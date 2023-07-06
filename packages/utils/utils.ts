export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const getRandomItem = (array: any[]): any => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
