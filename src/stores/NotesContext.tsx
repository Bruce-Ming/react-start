import { useLocalStore } from 'mobx-react';
import React, { FC } from 'react';
import { createNotesStore } from './NotesStore';
// 创建上下文
const NotesContext = React.createContext(createNotesStore());

interface NotesProviderProps {
  children: any;
}
// 创建provider
export const NotesProvider: FC<NotesProviderProps> = ({ children }) => {
  const notesStore = useLocalStore(createNotesStore);
  return <NotesContext.Provider value={notesStore}>{children}</NotesContext.Provider>;
};

export const useNotesStore = () => React.useContext(NotesContext);
