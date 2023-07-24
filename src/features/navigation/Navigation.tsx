import React from "react";
import { Link } from "react-router-dom";

function Navigation(): JSX.Element {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/csr">TestSPA</Link>
        </li>
        <li>
          <Link to="/lifecycle">TestLifecycle</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
