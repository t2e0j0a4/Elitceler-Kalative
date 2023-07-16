import React from 'react'
import styles from "./Article.module.css";
import Logo from "../../assets/Logo.svg";
import Dummy from "../../assets/Dummy.jpeg";

const Article = () => {

  const { app__article, article__center, article__head, head__published, article__desc } = styles;

  return (
    <main className={app__article}>
      <div className={article__center}>

        {/* Title & Published Name + Date */}

        <div className={article__head}>
          <h1>Title of Article</h1>

          <div className={head__published}>
            <img src={Logo} alt="Kalative" />
            <div>
              <p>Kalative</p>
              <p>16/07/2023</p>
            </div>
          </div>

        </div>

        {/* Article Image & Description */}
        
        <article className={article__desc}>

          <img src={Dummy} alt="Dummy" />

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum libero dolorum, dolor totam, quis illum, nobis sed aperiam repellendus aut consectetur laborum. Dignissimos dolorem debitis optio? Aperiam beatae provident quia, blanditiis accusantium architecto eos repellendus doloremque fugiat eveniet dolore dicta odio nemo ea hic vitae iure esse in repellat qui animi? Unde officiis distinctio quaerat accusamus voluptates cumque asperiores nisi optio quasi! Illum quas facere atque unde. Reprehenderit, nihil iure, nesciunt incidunt mollitia porro harum veniam voluptate dolor voluptatibus dolores reiciendis neque ut rem aut consequatur, nisi eaque. Voluptatum, amet nobis! Nostrum expedita quas inventore, corporis, est veniam eius minus consequatur facilis beatae ratione quasi molestias itaque! Consectetur dolores facilis officiis quidem cum tempora, tempore molestiae quas nulla corporis voluptatum, repudiandae sint autem, hic eum earum. Hic eligendi culpa cumque pariatur sunt laborum neque ipsum at eaque, repellat aperiam vel unde error consequatur tenetur tempore a! Quasi cupiditate obcaecati ut et architecto nobis nemo rem, laudantium expedita culpa soluta at ducimus iure sit nulla, vel deserunt temporibus possimus perspiciatis repudiandae ea error aspernatur necessitatibus vero! Possimus consectetur rem nam facilis fugit laboriosam, laborum eos hic? Veritatis totam dicta, at ex nesciunt sit excepturi aperiam esse cumque sapiente amet alias consectetur.</p>

        </article>

      </div>
    </main>
  );
}

export default Article