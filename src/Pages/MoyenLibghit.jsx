import { useContext, useState } from 'react';
import Form from './../Form';
import ResultPopup from '../ResultPopup';
import { NotesContext } from '../App';

const MoyenLibghit = () => {
  const { regional, national, control, setRegional, setNational, setControl } =
    useContext(NotesContext);

  const [toogle, setToogle] = useState(false);
  const [result, setResult] = useState();

  const myResult = () => {
    setToogle(!toogle);
    setResult((national - (0.25 * regional + 0.25 * control)) / 0.5);
    setResult((prev) => prev.toFixed(2));

    setRegional('');
    setNational('');
    setControl('');
  };

  return (
    <div>
      <div className="center-container">
        <Form showInput={true} handleClick={myResult} />
      </div>
      {toogle && <ResultPopup result={result} />}
    </div>
  );
};
export default MoyenLibghit;
