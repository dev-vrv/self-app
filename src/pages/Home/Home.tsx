import './Home.scss';
import './components/Baner'
import Baner from './components/Baner';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import Block3 from './components/Block3';
import Block4 from './components/Block4';

function Home() {
  return (
    <div className="home d-flex flex-column gap-4">
      <Baner />
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
    </div>
  );
}

export default Home;