// 创建store
// MobxStores.ts:  src/stores/MobxStores.ts，代码如下：
import { action, computed, observable, autorun, when, runInAction } from 'mobx';

class MobxStore {
  constructor() {
    when(
      () => {
        if (this.name.length > 10) return true;
        return false;
      },
      () => {
        console.log('执行某些操作');
        this.disposer();
      },
    );
  }
  @observable public name = 'world';

  @computed
  public get greeting(): string {
    return `hello ${this.name}`;
  }

  @action.bound
  public setName(name: string) {
    this.name = name;
  }

  public disposer = autorun(() => console.log(this.name), { delay: 500 });

  @action.bound // 异步action
  public async setNewName() {
    try {
      const newName = await this.fetchGithubProjectsSomehow();
      console.log(newName);
      // await 之后，再次修改状态需要动作:
      runInAction(() => {
        this.name = newName as string;
      });
    } catch (error) {
      runInAction(() => {
        console.log(error);
      });
    }
  }

  private fetchGithubProjectsSomehow() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('zhangdianmin');
      }, 1000);
    });
  }
}

export default MobxStore;
