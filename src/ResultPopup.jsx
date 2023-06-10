import { Link } from 'react-router-dom';

const ResultPopup = ({ result }) => {
  if (result > 20) result = 'خاصك كثر من 20 فالوطني';

  return (
    <div className="popup">
      <div className="result">
        <h1>شحال خاصك تجيب فالوطني</h1>
        <h1 style={{ fontSize: '3.6rem', fontFamily: 'sans-serif' }}>
          {result}
        </h1>
        <Link to="/">
          <button>ok</button>
        </Link>
      </div>
    </div>
  );
};
export default ResultPopup;
