import React, {useContext, useEffect} from 'react'
import styles from "./Newsletters.module.css";
import Context from "../../context/createContext";
import ArticleBox from "../../components/ArticleBox/ArticleBox";

const Newsletters = () => {

  const context = useContext(Context);
  const { allData, fetchData, dataLoad } = context;

  // On page render blogs will be fetched.
  useEffect(() => {
    fetchData("News");
    // eslint-disable-next-line
  }, []);

  const { app__newsletters, page__load, newsletters__center, newsletters__head, newsletters__main, empty__list } = styles;

  return (
    <main className={app__newsletters}>
      <div className={newsletters__center}>
        {/* Heading */}
        <div className={newsletters__head}>
          <h1>Newsletters</h1>
        </div>

        {/* Blogs Show */}

        {dataLoad ? (
          <div className={page__load}>
            <p>Loading...</p>
          </div>
        ) : (
          <div className={newsletters__main}>
            {allData.length !== 0 ? (
              allData.map((item) => {
                return (
                  <ArticleBox key={item._id} data={item} source="News" />
                )
              })
            ) : (
              <div className={empty__list}>New Blogs are coming soon!</div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default Newsletters