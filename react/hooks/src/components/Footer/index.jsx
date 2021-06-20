import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const Footer = () => {
  const context = useContext(GlobalContext);
  const { state, setState } = context;

  const handleChangeFooter = () => {
    console.log(state);
    const newContext = { ...state, footer: state.footer + '!' };

    setState(newContext);
  };

  return <footer onClick={handleChangeFooter}>{state.footer}</footer>;
};
