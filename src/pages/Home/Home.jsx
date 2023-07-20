import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import Kalative from "../../assets/Kalative.svg";
import Philosphy from "../../assets/Philosphy.svg";
import {v4 as uuidv4} from "uuid";
import { homeWhyUs, homeObjectivies, homeTestimonials } from '../../constants';
import axios from 'axios';

const Home = () => {

  const { app__home, home__main, home__section1, section1__box1, section1__box2, section1__box3, section1__box4, home__section2, section2__center, section2__head, section2__main, each__whyus, whyus__box, whyus__gif, home__section3, section3__center, section3__head, section3__main, section3__box, each__obj, home__section4, section4__center, section4__head, section4__main, section4__wrapper, testi__box, section4__toggles, activated, home__section56, section56__center, section56__head, section56__main, blog__card, blog__detail, blog__frame, data__load } = styles;

  const [totalTestis] = useState(homeTestimonials.length);
  const [currenTesti, setCurrentTesti] = useState(0);

  const HOST = 'http://localhost:5000';

  const [homeBlogsDemo, setHomeBlogsDemo] = useState([]); 
  const [homeNewsDemo, setHomeNewsDemo] = useState([]);

  const [blogsLoad, setBlogsLoad] = useState(false);
  const [newsLoad, setNewsLoad] = useState(false);

  const fetchData = async (source) => {
    const response = await axios.get(`${HOST}/api/${source}`);
    if (source === 'Blogs') {
      setBlogsLoad(true);
      setHomeBlogsDemo(response.data.Blogs);
      setBlogsLoad(false);
    }
    else {
      setNewsLoad(true);
      setHomeNewsDemo(response.data.News);
      setNewsLoad(false);
    }
  }

  useEffect(() => {
    fetchData('Blogs');
    fetchData('News');
  }, []);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentTesti((c) => {
        if (c === totalTestis - 1) return 0;
        else return c + 1;
      })
    }, 8000)

    return () => {clearInterval(interval);}

  }, [totalTestis, currenTesti]);

  return (
    <main className={app__home}>
      <div className={home__main}>

        {/* Section 1 - Landing */}

        <section className={home__section1}>
          
          <div className={section1__box1}>
            <h2>We are here to change the philosophy of Student Culture</h2>
            <p>We Curate <span></span> Create <span></span> Content</p>
          </div>
          <div className={section1__box2}>
            <img src={Philosphy} alt="Philosphy" />
          </div>
          <div className={section1__box3}>
            <img src={Kalative} alt="Kalative" />
          </div>
          <div className={section1__box4}>
            <h2>“कला tive is a content creating organization that aims to foster a <span>HOLISTIC DEVELOPMENT</span> in Students”</h2>
          </div>

        </section>

        {/* Section 1 - Landing */}

        {/* Section 2 - Why Us? */}

        <section className={home__section2} id='whyus'>
          <div className={section2__center}>

            <div className={section2__head}>
              <h2>Why Us?</h2>
            </div>

            <div className={section2__main}>
              {
                homeWhyUs.map((item) => {
                  return (
                    <div key={item.id} className={each__whyus}>
                      <div className={whyus__box} style={{ backgroundColor : item.bgColor }}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                      <div className={whyus__gif}>
                        <img src={item.presentGif} alt={item.title} />
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>
        </section>

        {/* Section 2 - Why Us? */}

        {/* Section 3 - Key Objectives */}

        <section className={home__section3}>
          <div className={section3__center}>

            <div className={section3__head}>
              <h2>Key Objectivies</h2>
            </div>

            <div className={section3__main}>

              <p>“We Provide Supplements to the Education System”</p>
              <div className={section3__box}>

                {
                  homeObjectivies.map((obj) => {
                    return (
                      <div key={obj.id} className={each__obj}>
                        <span style={{ backgroundColor: obj.color }}></span>
                        <p>{obj.content}</p>
                      </div>
                    )
                  })
                }

              </div>

            </div>

          </div>
        </section>

        {/* Section 3 - Key Objectives */}

        {/* Section 4 - Testimonials */}

        <section className={home__section4}>
          <div className={section4__center}>

              <div className={section4__head}>
                <h2>Testimonials</h2>
              </div>

              <div className={section4__main}>
                <div className={section4__wrapper}>
                  {
                    homeTestimonials.map((item) => {
                      return (
                        <div key={item.id} className={testi__box} style={{ transform : `translateX(-${currenTesti * 100}%)` }} >
                          <p>{item.detail}</p>
                          <h4>- {item.person}</h4>
                        </div>
                      )
                    })
                  }
                </div>

                <div className={section4__toggles}>
                  {
                    [...Array(totalTestis)].map((_, index) => {
                      return (
                        <span key={uuidv4()} onClick={() => {
                          setCurrentTesti(index);
                        }} className={`${(index === currenTesti) && activated}`}></span>
                      )
                    })
                  }
                </div>

              </div>

          </div>
        </section>

        {/* Section 4 - Testimonials */}

        {/* Section 5 - Blogs */}

        <section className={home__section56}>
          <div className={section56__center} style={{ backgroundColor: '#C8EAEF' }}>

            <div className={section56__head}>
              <h2 style={{ color : '#FE5C36' }}>Blogs</h2>
              <Link to='/blogs'>View All</Link>
            </div>

            {
              blogsLoad ? (
                <div className={data__load}>
                  <p>Wait! While we load our latest Blogs for you.</p>
                </div>
              ) : (
                <div className={section56__main}>
                  {
                    homeBlogsDemo.slice(0,3).map((blog) => {
                      return (
                        <div className={blog__card}>
                          <img src={blog.image} alt={blog.title} />
                          <div className={blog__frame}></div>
                          <div className={blog__detail}>
                            <h5>{blog.title.slice(0, 24)}...</h5>
                            <p>{blog.description.slice(0, 64)}...</p>
                            <Link to={`/blog/${blog._id}`}>Read</Link>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              )
            }

          </div>
        </section>

        {/* Section 5 - Blogs */}

        {/* Section 6 - Newsletters */}

        <section className={home__section56}>
          <div className={section56__center} style={{ backgroundColor: '#FFE7C4' }}>

            <div className={section56__head}>
              <h2 style={{ color : '#54AFBC' }} >Newsletters</h2>
              <Link to='/newsletters'>View All</Link>
            </div>

            {
              newsLoad ? (
                <div className={data__load}>
                  <p>Wait! While we get our latest Newsletters for you.</p>
                </div>
              ) : (
                <div className={section56__main}>
                  {
                    homeNewsDemo.slice(0,3).map((news) => {
                      return (
                        <div className={blog__card}>
                          <img src={news.image} alt={news.title} />
                          <div className={blog__frame}></div>
                          <div className={blog__detail}>
                            <h5>{news.title.slice(0, 24)}...</h5>
                            <p>{news.description.slice(0, 64)}...</p>
                            <Link to={`/news/${news._id}`}>Read</Link>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              )
            }

          </div>
        </section>

        {/* Section 6 - Newsletters */}

        {/* Section 7 - Team */}

        {/* Later Soon... */}

        {/* Section 7 - Team */}

      </div>
    </main>
  )
}

export default Home