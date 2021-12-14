import React, { useCallback, useEffect, useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UserFallback } from "./components/UserFallback";
import { UserView } from "./components/UserView";
import { fetchGithubUser } from "./userService";

const REQUEST_STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
}

const asyncReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_STATUS.IDLE:
      return {
        status: REQUEST_STATUS.IDLE,
        data: null,
        error: null
      };
    case REQUEST_STATUS.PENDING:
      return {
        status: REQUEST_STATUS.PENDING,
        data: null,
        error: null
      };
    case REQUEST_STATUS.RESOLVED:
      return {
        status: REQUEST_STATUS.RESOLVED,
        data: action.data,
        error: null
      };
    case REQUEST_STATUS.REJECTED:
      return {
        status: REQUEST_STATUS.REJECTED,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const useAsync = (initialState) => {

  const [state, dispatch] = useReducer(asyncReducer, initialState)

  const run = useCallback((promise) => {
    dispatch({ type: REQUEST_STATUS.PENDING });
    promise
      .then((data) => dispatch({ type: REQUEST_STATUS.RESOLVED, data }))
      .catch((err) => dispatch({ type: REQUEST_STATUS.REJECTED, error: err }));
  }, []);

  return { ...state, run }
}

const UserInfo = ({ userName }) => {
  const initialState = {
    status: userName ? REQUEST_STATUS.PENDING : REQUEST_STATUS.IDLE,
    user: null,
    error: null
  };

  const { status, error, data: user, run } = useAsync(initialState);

  useEffect(() => {
    if (!userName) return;
    return run(fetchGithubUser(userName));

  }, [userName, run]);

  switch (status) {
    case REQUEST_STATUS.IDLE:
      return <h1>Submit user</h1>;
    case REQUEST_STATUS.PENDING:
      return <UserFallback userName={userName} />;
    case REQUEST_STATUS.RESOLVED:
      return <UserView user={user} />;
    case REQUEST_STATUS.REJECTED:
      return (
        <div>
          There was an error
          <pre>{error}</pre>
        </div>
      );
    default:
      throw new Error(`Unknown status: ${status}`);

  }
};

const UserSection = ({ onSelect, userName }) => (
  <div>
    <div className="flex justify-center ">
      <UserInfo userName={userName} />
    </div>
  </div>
);

const App = () => {
  const [userName, setUserName] = React.useState(null);
  const handleSubmit = (newUserName) => setUserName(newUserName);
  const handleSelect = (newUserName) => setUserName(newUserName);

  return (
    <div>
      <UserForm userName={userName} onSubmit={handleSubmit} />
      <hr />
      <div className="m-4">
        <UserSection onSelect={handleSelect} userName={userName} />
      </div>
    </div>
  );
};

export default App;
