export const createCounterStore = (initialCount = 0) => {
  let count = $state(initialCount);

  return {
    get count() {
      return count;
    },
    increment() {
      count += 1;
    },
    decrement() {
      count -= 1;
    },
  };
};
