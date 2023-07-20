import React, { useContext, useEffect } from 'react'
import styles from "./Article.module.css";
import Logo from "../../assets/Logo.svg";
import Context from '../../context/createContext';
import { Link, useParams, useLocation } from 'react-router-dom';

const Article = () => {

  const { id } = useParams();
  const location = useLocation();
  const context = useContext(Context);
  const { dataLoad, fetchSingleItem, singleItem } = context;


  useEffect(() => {
    let pathBy = location.pathname.includes("/blog/") ? "Blog" : "News";
    fetchSingleItem(id, pathBy);
    // eslint-disable-next-line
  }, [location, id]);


  const { app__article, top__badge, page__load, article__center, article__head, head__published, article__desc, back__page } = styles;

  const { title, description, writer, image, updatedAt } = singleItem;

  return (
    <main className={app__article} >
      {
        dataLoad ? (
          <div className={page__load}>
            <p>Loading...</p>
          </div>
        ) : (
          <div className={article__center}>

            {/* Badge */}
            <div className={top__badge}>
              <p>{location.pathname.includes('/blog/') ? 'Blog' : 'Newsletter'}</p>
            </div>

            {/* Head : Title & Publish Details */}

            <div className={article__head}>
              <h1>{title}</h1>

              <div className={head__published}>
                <img src={Logo} alt="Kalative" />
                <div>
                  <p>{writer}</p>
                  <p>{new Date(updatedAt).toLocaleDateString()}</p>
                </div>
              </div>

            </div>

            {/* Article : Blog/News Details */}
            
            <article className={article__desc}>
              <img src={image !== '' ? image : Logo} alt={title} />
              <p>{description}</p>
            </article>

          </div>
        )
      }

      <div className={back__page}>
        <Link to={`${location.pathname.includes('/blog/') ? '/blogs' : '/newsletters'}`}><ion-icon name="chevron-back"></ion-icon> More {location.pathname.includes('/blog/') ? 'Blogs' : 'News'}</Link>
      </div>
    </main>
  );
}

export default Article