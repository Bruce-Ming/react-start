import React from 'react';
import { Provider, rootStore } from '@models/Root';
import Cart from '@components/Cart';
import Counter from '@components/Counter';
export const Mst = () => {
  return (
    <Provider value={rootStore}>
      <div className="container mx-auto">
        <div className="relative">
          <h1>使用mobx-state-tree hooks 构建的测试</h1>

          <Counter />
          <Cart />
        </div>
      </div>
    </Provider>
  );
};
