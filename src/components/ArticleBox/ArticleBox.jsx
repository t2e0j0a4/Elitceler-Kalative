import React from 'react'
import styles from "./ArticleBox.module.css";
import Dummy from "../../assets/Dummy.jpeg";
import { Link } from 'react-router-dom';

const ArticleBox = () => {

  const { article__box, article__detail } = styles;

  return (
    <div className={article__box}>
      <img src={Dummy} alt="Dummy" />
      <div className={article__detail}>
        <h3>Title of Article</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to={'/'}>Read</Link>
      </div>
    </div>
  )
}

export default ArticleBox