import { types, flow } from 'mobx-state-tree';

function wait2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(4);
    }, 2000);
  });
}

export const Counter = types
  .model({
    count: types.number,
  })
  .actions((self) => ({
    increment() {
      self.count++;
    },
    decrement() {
      self.count--;
    },
    // 异步动作,
    asyIncrement: flow(function* () {
      try {
        // ... yield can be used in async/await style
        const c = yield wait2();
        self.count++;
      } catch (error) {
        // ... including try/catch error handling
        console.error('Failed to fetch projects', error);
        self.count = 0;
      }
    }),
  }));
