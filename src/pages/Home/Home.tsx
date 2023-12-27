import './Home.scss';
import './components/Baner'
import Baner from './components/Baner';
import Block1 from './components/Block1';
import Block2 from './components/Block2';

function Home() {
  return (
    <div className="home">
      <Baner />
      <Block1 />
      <Block2 />
    </div>
  );
}

export default Home;