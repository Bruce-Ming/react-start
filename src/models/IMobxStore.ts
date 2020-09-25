// 创建store类型接口
// IMobxStore.ts:  src/models/IMobxStores.ts，代码如下：
export interface IMobxStore {
  name: string;
  greeting: string;
  setName(name: string): void;
}
