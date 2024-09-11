import './App.css';

import { useState } from 'react';

import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1 className="title">website test test</h1>
      </header>
      <div className="main">
        <div className="menubar">
          <a href="aboutme.html" className="menu">
            <div className="this_page">ABOUT ME</div>
          </a>
          <a href="port.html" className="menu">MY BLOG</a>
          <a href="contacts.html" className="menu">PERSONAL PROJECTS</a>
          <a href="https://www.instagram.com/jooyoung.hyun/" className="menu">INSTAGRAM</a>
        </div>
        <div className="box">
          <div className="intro">
            <div className="profile_pic">
              <img
                src="https://i.pinimg.com/564x/96/58/6f/96586f93b88faab34f28030898402b62.jpg"
                alt="My Image"
              />
            </div>
            <div className="container">
              <h1>
                <a href="https://www.instagram.com/jooyoung.hyun/" className="intro_title">
                  @jooyoung.hyun
                </a>
              </h1>
              <ul className="dots">
                <li>안녕하세요!! 컴퓨터공학부 22학번 (반올림해서 23) 현주영입니다 >_<</li>
                <li>mbti: intp</li>
                <li>이 친구 이름은 스너프킨이고 무민이랑 무민밸리에 같이 살아요.</li>
                <li>
                  <a href="https://www.instagram.com/jooyoung.hyun/" className="insta_lol">
                    인스타그램
                  </a>{' '}
                  팔로우 해주세요!! ^ㅁ^
                </li>
              </ul>
              <span className="bold">
                Last Update: 2023 Oct 07 13:11
                <br />
                <br />
              </span>
              <p>
                hi!! i’m joo. currently an undergraduate studying comp sci & engi. welcome to my
                website :D.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  /*
      return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
      */
}

export default App;
