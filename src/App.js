import Container from './components/Container/Container';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import './styles/normalize.scss';
import './styles/global.scss';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;