export const sleep = (msec: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, msec));

export const getRandomInteger = (n: number) =>
  Math.floor(Math.random() * n)
