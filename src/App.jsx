import { createContext } from 'react';
import AppRouter from './AppRouter';
import { useState } from 'react';
import './app.css';

export const NotesContext = createContext();
const App = () => {
  const [regional, setRegional] = useState('');
  const [control, setControl] = useState('');
  const [national, setNational] = useState('');

  return (
    <NotesContext.Provider
      value={{
        regional,
        setRegional,
        control,
        setControl,
        national,
        setNational,
      }}
    >
      <AppRouter />
    </NotesContext.Provider>
  );
};
export default App;
