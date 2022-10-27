import type { NextPage } from 'next';
import GlobalStyle from '../styles/GlobalStyle';

const Home: NextPage = () => {
  return (
    <>
      <div className="columns is-mobile">
        <div className="column is-full">
          Hi <a href="">Hello there</a>
        </div>
        <div className="column">hello</div>
      </div>
    </>
  );
};

export default Home;
