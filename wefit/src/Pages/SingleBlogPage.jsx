import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

import style from '../Components/Blog/SingleBlogPage.module.css'
import Footer from '../Components/Home/Footer';
import Navbar from '../Components/Home/Navbar';


const getDetailsBlogData = (url) => {
  return fetch(url).then((res) => res.json());
}

const SingleBlogPage = () => {


  const { user_id } = useParams();

  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {

    getDetailsBlogData(`https://we-fit-database-api.vercel.app/Blog/${user_id}`).then((res) =>

      setBlogDetails(res)
      // console.log(res)

    );

  }, [user_id]);



  return (
   <>
   <Navbar/>
    <div className={style.SingleBlogPageMain_div}>
      <div key={blogDetails.id} className={style.SingleBlogPageMain_div_section}>
        <div>
          <img src={blogDetails.image_url} alt={blogDetails.title} />
          <h1 className={style.SingleBlogPageMain_Title_h2_tag}>{blogDetails.title}</h1>
          <h4 className={style.SingleBlogPageMain_MiniTitle_h4_tag}>{blogDetails.miniTitle}</h4>
          <p className={style.SingleBlogPageMain_P_tag_description}>{blogDetails.description}</p>
          <br />
          <h1 className={style.SingleBlogPageMain_Single_Page_Title_h2_tag}>{blogDetails.singlePageTitle}</h1>
          <p className={style.SingleBlogPageMain_Single_Page_Mini_Title_P_tag_description}> {blogDetails.singlePageMiniDescription}</p>
          <br />
          <div className={style.ButtonSingleBlogPage_div} >
            <Link to="/blog"> <Button colorScheme='teal' className={style.ButtonSingleBlogPage} >Go Back</Button></Link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default SingleBlogPage











