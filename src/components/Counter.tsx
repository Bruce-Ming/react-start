import React from 'react';
import { useObserver } from 'mobx-react';

import { useMst } from '../models/Root';

interface Props {}

const Counter: React.FC<Props> = () => {
  const { counter } = useMst();

  return useObserver(() => (
    <div className="mt-20 flex flex-col items-center">
      <p className="font-bold text-2xl text-center">Counter</p>
      <p style={{ fontVariant: 'tabular-nums' }} className="font-bold text-2xl text-center">
        {counter.count}
      </p>
      <div className="mt-2 flex-row">
        <button onClick={counter.decrement}>-</button>
        <button onClick={counter.increment}>+</button>
        <button onClick={counter.asyIncrement}>异步增加</button>
      </div>
    </div>
  ));
};

export default Counter;
