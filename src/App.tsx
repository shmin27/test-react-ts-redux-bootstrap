import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./features/navigation/Navigation";
import Main from "./pages/home/Home";
import TestSPA from "./pages/test-spa/TestSPA";
import TestLifecycle from "./pages/test-lifecycle/TestLifecycle";

import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App row">
      <div
        className="col col-md-3 col-xl-2"
        style={{ background: "skyblue", color: "white" }}
      >
        <Navigation />
      </div>
      <div className="col">
        <div className="App-header">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/spa" element={<TestSPA />} />
            <Route path="/lifecycle" element={<TestLifecycle name="b" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
