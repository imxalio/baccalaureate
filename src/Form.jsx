import { useContext } from 'react';
import { NotesContext } from './App';

const Form = ({ showInput, handleClick }) => {
  const { regional, control, national, setRegional, setControl, setNational } =
    useContext(NotesContext);
  return (
    <div className="form-handler">
      <div className="form-container">
        <input
          type="number"
          id="regional"
          value={regional}
          onChange={(e) => setRegional(e.target.value)}
          placeholder="معدل الجهوي"
        ></input>

        <input
          type="number"
          id="control"
          value={control}
          onChange={(e) => setControl(e.target.value)}
          placeholder="معدل المراقبة المستمرة"
        ></input>
        {showInput && (
          <input
            type="number"
            id="national"
            value={national}
            onChange={(e) => setNational(e.target.value)}
            placeholder="المعدل اللي بغيت"
          ></input>
        )}
        <button onClick={handleClick} style={{ marginTop: '2rem' }}>
          حساب معدل النجاح
        </button>
      </div>
    </div>
  );
};
export default Form;
