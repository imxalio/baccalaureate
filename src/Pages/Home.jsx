import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home center-container">
      <Link to="/moyen-naja7">
        <button>شحال خاصني فالوطني باش نجح</button>
      </Link>
      <Link to="/moyen-libghit">
        <button>شحال خاصني فالوطني باش نجيب المعدل لي بغيت</button>
      </Link>

      <div style={{ marginTop: '5rem' }}>
        <h1>الله يوفقكم</h1>
        <h1>
          <a
            style={{ textTransform: 'uppercase' }}
            href="https://www.instagram.com/xalio_dev/"
            target="{_blank}"
          >
            By Xalio
          </a>
        </h1>
      </div>
    </div>
  );
};
export default Home;
