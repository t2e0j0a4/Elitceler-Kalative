import React from 'react'
import styles from "./Blogs.module.css";
import ArticleBox from "../../components/ArticleBox/ArticleBox";

const Blogs = () => {

  const { app__blogs, blogs__center, blogs__head, blogs__main } = styles;

  return (

    <main className={app__blogs}>
      <div className={blogs__center}>

        {/* Heading */}
        <div className={blogs__head}>
          <h1>Blogs</h1>
        </div>

        {/* Blogs Show */}
        <div className={blogs__main}>
          <ArticleBox/>
        </div>

      </div>
    </main>

  )
}

export default Blogs