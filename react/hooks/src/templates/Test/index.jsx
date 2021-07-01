import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export const Test = () => {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();

  console.log(params);
  console.log(location);
  console.log(history);
  return <div>Testing</div>;
};
