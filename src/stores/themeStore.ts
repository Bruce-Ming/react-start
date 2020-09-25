import { action, observable } from 'mobx';

class ThemeStore {
  @observable isDarkMode: boolean = false;

  @action.bound
  toggleDarkMode() {
    console.log(this.isDarkMode);

    this.isDarkMode = !this.isDarkMode;
  }
}

export default ThemeStore;
