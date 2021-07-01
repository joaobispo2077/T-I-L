import React from 'react';
import { useParams } from 'react-router-dom';

export const Test = () => {
  const params = useParams();

  console.log(params);
  return <div>Testing</div>;
};
