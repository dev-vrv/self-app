import './Home.scss';
import './components/Baner'
import Baner from './components/Baner';
import Block1 from './components/Block1';

function Home() {
  return (
    <div className="home">
      <Baner />
      <Block1 />
    </div>
  );
}

export default Home;