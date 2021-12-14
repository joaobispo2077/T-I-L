import React, { useEffect, useReducer, useState } from "react";
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

const userReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_STATUS.IDLE:
      return {
        status: REQUEST_STATUS.IDLE,
        user: null,
        error: null
      };
    case REQUEST_STATUS.PENDING:
      return {
        status: REQUEST_STATUS.PENDING,
        user: null,
        error: null
      };
    case REQUEST_STATUS.RESOLVED:
      return {
        status: REQUEST_STATUS.RESOLVED,
        user: action.user,
        error: null
      };
    case REQUEST_STATUS.REJECTED:
      return {
        status: REQUEST_STATUS.REJECTED,
        user: null,
        error: action.error
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const useAsync = () => {

}

const UserInfo = ({ userName }) => {
  const initialState = {
    status: userName ? REQUEST_STATUS.PENDING : REQUEST_STATUS.IDLE,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState)


  useEffect(() => {
    if (!userName) return;
    dispatch({ type: REQUEST_STATUS.PENDING });

    fetchGithubUser(userName)
      .then((user) => {
        dispatch({ type: REQUEST_STATUS.RESOLVED, user });
      })
      .catch((err) => {
        dispatch({ type: REQUEST_STATUS.REJECTED, error: err });
      });
  }, [userName]);

  const { status, user, error } = state;
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
      throw new Error(`Unknown status: ${state.status}`);

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
