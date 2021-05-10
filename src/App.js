import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SocialList from './components/SocialList';
import ProgList from './components/ProgList';
import Welcome from './components/Welcome';

// https://www.statista.com/statistics/272014/global-social-networks-ranked-by-number-of-users/

function App() {

  let comp;

  const [opt, setOpt] = useState(0);

  // const option = () => {
  //   switch (opt) {
  //     case 0: return "";
  //     case 1:
  //       console.log(opt);
  //       return <SocialList />;
  //       break;
  //     default:
  //       return;
  //       break;
  //   }
  // }

  // useEffect(() => {
  //   // document.getElementById("art").innerHTML = option();
  //   console.log(opt);
  //   comp = () =>  {<SocialList />}
  // }, [opt])

  return (
    <div className="App">
      <header className="Header">
        <h1>TOP10</h1>
      </header>
      <nav className="nav">
        <div>
          <a href="#" onClick={()=>{setOpt(1)}}>Top 10 Social Networks</a>
          <a href="#" onClick={()=>{setOpt(2)}}>Top 10 Programming Languages</a>
          {/* <a href="#">Link3</a> */}
        </div>
      </nav>
      <article className="Article" id="art">
      {/* <SocialList /> */}
      {
        (opt==0) ? <Welcome /> :
        (opt==1) ? <SocialList /> : 
        (opt==2) ? <ProgList /> : null
      }
      </article>
      {/* <div id="buf"></div> */}
    </div>
  );
}

export default App;
