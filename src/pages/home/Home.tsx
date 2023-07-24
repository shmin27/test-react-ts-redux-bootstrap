import React from "react";
import { Counter } from "../../features/counter/Counter";
import logo from "../../assets/svgs/logo.svg";

function Home(): JSX.Element {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <span>
        <a
          href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
          target="_blank"
          rel="noreferrer"
        >
          React Lifecycle Methods Diagram
        </a>
      </span>
    </div>
  );
}

export default Home;
