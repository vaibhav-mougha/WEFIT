import React from "react";
import axios from "axios";
import style from "../Components/Blog/Blog.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Components/Blog/Blog-Pagination/Pagination";
import { Text } from "@chakra-ui/react";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";

const getBlogData = async (currentPage) => {
  return await axios.get(`https://we-fit-database-api.vercel.app/Blog?_page=${currentPage}&_limit=10`);
}

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    getBlogData(currentPage).then((res) => {
      setBlogs(res.data);
      setTotalPage(res.headers.get("x-total-count"));
    });
  }, [currentPage]);
  console.log(totalPage);
  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <Navbar />
      <div className={style.main_div}>
        {blogs.map((el) => (
          <>
            <div key={el.id} className={style.blog_Img_Main_section}>
              <div>
                <img src={el.image_url} alt={el.title} />
                <Link to={`/blog/${el.id}`} style={{ textDecoration: "none" }}>
                  <h1 className={style.blog_Img_Main_section_Title_h2_tag}>
                    {el.title}
                  </h1>
                </Link>
                <h4 className={style.blog_Img_Main_section_MiniTitle_h4_tag}>
                  {el.miniTitle}
                </h4>

                <p className={style.blog_Img_Main_section_P_tag_description}>
                  {el.description}
                </p>

                <Link to={`/blog/${el.id}`}>
                  <Text className={style.blog_Img_Main_section_Read_MOre_Link}>
                    Read More{">>"}
                  </Text>
                </Link>
              </div>
            </div>
          </>
        ))}
        <br />
        <br />
        <div className={style.pagination_Main_div}>
          <Pagination totalPages={totalPage} onSwitchPage={handlePageChange} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
