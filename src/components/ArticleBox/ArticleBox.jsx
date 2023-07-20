import React from 'react'
import styles from "./ArticleBox.module.css";
import Logo from "../../assets/Logo.svg";
import { Link } from 'react-router-dom';

const ArticleBox = ({data, source = "blogs"}) => {

  const { article__box, article__detail } = styles;
  const { _id, title, description, image } = data;

  return (
    <div className={article__box} id={`${source === 'blogs' ? `blog__${_id}` : `news__${_id}` }`} >
      <img src={image !== '' ? image : Logo} alt={title} />
      <div className={article__detail}>
        <h3>{title.slice(0, 28 + 1)}...</h3>
        <p>{description.slice(0, 108 + 1)}...</p>
      </div>
      <Link to={`/${source === 'blogs' ? 'blog' : 'news'}/${_id}`}>Read</Link>
    </div>
  )
}

export default ArticleBox