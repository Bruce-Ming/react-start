import React, { useState } from 'react';
import style from '@components/index.scss';
import { useObserver } from 'mobx-react';
import { useStore } from '@stores/index';
import { TextState } from '@components/TextState';

console.log(style);

interface NotesProps {
  name: string;
}

const Notes = () => {
  const [noteText, setNoteText] = useState('');
  const { notesStore } = useStore();
  const store = useStore();
  const [name, setName] = useState('');
  return useObserver(() => (
    <>
      <TextState />
      <div>
        <h1>mobx测试</h1>
        <div onClick={store.themeStore.toggleDarkMode}>{store.themeStore.isDarkMode}11111</div>
        <div>{store.mobxStore.name}</div>
        <div>{store.mobxStore.greeting}</div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            store.mobxStore.setName(name);
          }}
        />
        <button onClick={() => store.mobxStore.disposer()}>停止autorun</button>
        <button onClick={store.mobxStore.setNewName}>异步action</button>
      </div>
      <h2>note列表</h2>
      <ul>
        {notesStore.notes.map((item: any) => (
          <li
            key={item.id}
            onClick={() => {
              notesStore.removeNote(item.id);
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        name="noteText"
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          notesStore.addNote(noteText);
          setNoteText('');
        }}
      >
        添加
      </button>
    </>
  ));
};
export default Notes;
