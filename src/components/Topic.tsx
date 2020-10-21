import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Topic = () => {
  let history = useHistory();

  let { topicId } = useParams() as { topicId: string };
  console.log(useParams());
  const goback = () => {
    history.push('/about');
  };
  return (
    <div>
      <h3>Requested topic ID: {topicId}</h3>
      <button onClick={goback}>返回about组件 </button>
    </div>
  );
};

export default Topic;
