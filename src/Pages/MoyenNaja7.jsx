import { useContext, useState } from 'react';
import Form from '../Form';
import { NotesContext } from '../App';
import ResultPopup from '../ResultPopup';

const MoyenNaja7 = () => {
  const { control, regional, setRegional, setNational, setControl } =
    useContext(NotesContext);
  const [toogle, setToogle] = useState(false);
  let [result, setResult] = useState();

  const resultNaja7 = () => {
    setResult((10 - regional * 0.25 - control * 0.25) / 0.5);
    setResult((prev) => prev.toFixed(2));

    setToogle(true);
    setRegional('');
    setNational('');
    setControl('');
  };
  console.log(toogle);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div className="center-container">
        <Form handleClick={resultNaja7} />
      </div>
      {toogle && <ResultPopup result={result} />}
    </div>
  );
};
export default MoyenNaja7;
