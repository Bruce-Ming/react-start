import React, { useState } from 'react';
import style from '@components/index.scss';
import { useObserver } from 'mobx-react';
import { useStore } from '@stores/index';

console.log(style);

interface NotesProps {
  name: string;
}

const Notes = () => {
  const [noteText, setNoteText] = useState('');
  const { notesStore } = useStore();
  return useObserver(() => (
    <>
      <div>note列表</div>
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
