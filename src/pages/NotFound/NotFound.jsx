import React from 'react'
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {

  const { app__nopage, nopage__center, nopage__redirect } = styles;

  return (
    <main className={app__nopage}>
      <div className={nopage__center}>

        <div className={nopage__redirect}>
          <h1>404</h1>
          <p>Page Not Found!</p>
          <Link to={'/'}>Back Home</Link>
        </div>

      </div>
    </main>
  )
}

export default NotFound