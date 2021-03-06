import { useContext, createContext } from 'react';
import { types, Instance, onSnapshot } from 'mobx-state-tree';

import { Counter } from '@models/Counter';
import { Cart } from '@models/Cart';

//根模型
const RootModel = types.model({
  counter: Counter,
  cart: Cart,
});

let initialState = RootModel.create({
  counter: {
    count: 0,
  },
  cart: { items: [] },
});

const data = localStorage.getItem('rootState');
if (data) {
  const json = JSON.parse(data);
  if (RootModel.is(json)) {
    initialState = RootModel.create(json);
  }
}

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
  console.log('Snapshot: ', snapshot);
  localStorage.setItem('rootState', JSON.stringify(snapshot));
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
// hook根组件
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
// HACK: 此处可以优化
// BUG: 此处有bug
// NOTE: 代码说明
// XXX: 实现方法待确认
// FIXME:待修复
// TODO: 无法返回正确的类型提现

export function useMstByName(name: 'counter' | 'cart') {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store[name];
}
