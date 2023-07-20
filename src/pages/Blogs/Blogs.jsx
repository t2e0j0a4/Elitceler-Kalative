import React, {useContext, useEffect} from 'react'
import styles from "./Blogs.module.css";
import Context from '../../context/createContext';
import Loader from '../../components/Loader/Loader';
import ArticleBox from "../../components/ArticleBox/ArticleBox";

const Blogs = () => {

  const context = useContext(Context);
  const { allData, fetchData, dataLoad } = context;

  // On page render blogs will be fetched.
  useEffect(() => {
    fetchData('Blogs');
    // eslint-disable-next-line
  }, []);

  const { app__blogs, blogs__center, blogs__head, blogs__main, page__load, empty__list } = styles;

  return (

    <main className={app__blogs}>
      <div className={blogs__center}>

        {/* Heading */}
        <div className={blogs__head}>
          <h1>Blogs</h1>
        </div>

        {/* Blogs Show */}

        {
          dataLoad ? (
            <div className={page__load}>
              <Loader/>
            </div>
          ) : (
            <div className={blogs__main}>
              {
                allData.length !== 0 ? (
                  allData.map((item) => {
                    return (
                      <ArticleBox key={item._id} data={item} source="blogs" />
                    )
                  })
                ) : <div className={empty__list}>New Blogs are coming soon!</div>
              }
            </div>
          )
        }

      </div>
    </main>

  )
}

export default Blogs