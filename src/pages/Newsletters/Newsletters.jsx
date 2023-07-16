import React from 'react'
import styles from "./Newsletters.module.css";
import ArticleBox from "../../components/ArticleBox/ArticleBox";

const Newsletters = () => {

  const { app__newsletters, newsletters__center, newsletters__head, newsletters__main } = styles;

  return (

    <main className={app__newsletters}>
      <div className={newsletters__center}>

        {/* Heading */}
        <div className={newsletters__head}>
          <h1>Newsletters</h1>
        </div>

        {/* Newsletters Show */}
        <div className={newsletters__main}>
          <ArticleBox/>
        </div>

      </div>
    </main>

  )
}

export default Newsletters