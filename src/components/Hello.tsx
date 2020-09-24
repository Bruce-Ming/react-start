import React, { useState } from 'react';
import style from '@components/index.scss';

console.log(style);

interface HelloProps {
  name: string;
}

const Hello = (props: HelloProps) => {
  const [data, setData] = useState('initialState');
  return (
    <>
      <div className={style.cr}>hello111 {props.name}</div>
      <div>{data}</div>
      <input
        type="text"
        name="data"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
    </>
  );
};
export default Hello;
