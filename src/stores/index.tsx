import React, { createContext, useContext } from 'react';
import ThemeStore from '@stores/themeStore';
import MobxStore from '@stores/MobxStore';
import { NotesStore } from '@stores/NotesStore';

export interface IStore {
  themeStore: ThemeStore;
  mobxStore: MobxStore;
  notesStore: NotesStore;
}
export const globalStore: IStore = {
  themeStore: new ThemeStore(),
  mobxStore: new MobxStore(),
  notesStore: new NotesStore(),
};

export const StoreContext = createContext(globalStore);

export const useStore = () => {
  return useContext(StoreContext);
};

export const GlobalProvider = ({ children }: any) => {
  return <StoreContext.Provider value={globalStore}>{children}</StoreContext.Provider>;
};
