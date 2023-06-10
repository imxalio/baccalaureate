import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoyenNaja7 from './Pages/MoyenNaja7';
import MoyenLibghit from './Pages/MoyenLibghit';
import Home from './Pages/Home';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/moyen-naja7" element={<MoyenNaja7 />} />
        <Route exact path="/moyen-libghit" element={<MoyenLibghit />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
