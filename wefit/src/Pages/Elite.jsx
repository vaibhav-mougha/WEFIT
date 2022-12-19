import { Button } from "@chakra-ui/react";
import React from "react";
import style from "../Components/Elite/Elite.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";

const GetPlansEliteData = async () => {
    return await axios.get(`https://we-fit-database-api.vercel.app/PlansElitePage`)
}


const send_Jefit_elite_membership_gift_section_img = [
  {
    id: 1,
    img_url: "https://www.jefit.com/images/elite/webf_1.png",
    title: "Expert Crafted Workouts",
    description:
      "Access to our plans. From Strength training to bodyweight workouts",
  },
  {
    id: 2,
    img_url: "https://www.jefit.com/images/elite/webf_2.png",
    title: "HD Video Guides",
    description:
      "Never worry about what exercise to do or how to get the perfect form",
  },
  {
    id: 3,
    img_url: "https://www.jefit.com/images/elite/webf_3.png",
    title: "Progress Reports",
    description: "Get Weekly report on Progress and see how you'r progressing",
  },
];

const Elite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetPlansEliteData().then((res) => setData(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className={style.main_div}>
        <div className={style.Year_End_of_discount_section}>
          <h1 className={style.Year_End_of_discount_section_h1_tag}>
            Year End - 10% Off
          </h1>

          <h2 className={style.Year_End_of_discount_section_h2_tag}>
            58 days 3 hours left
          </h2>
        </div>

        {/* Plans that suit you best */}

        <div className={style.Plans_that_suit_you_best_section}>
          <h1
            className={style.Plans_that_suit_you_best_section_h1_tag_Plan_suit}
          >
            Plans that suit you best
          </h1>

          <div className={style.Plans__Blog__Plan_}>
            {data.map((el) => (
              <>
                <div key={el.id}>
                  <h2 className={style.Plans__Blog__Plan_Title_h2_tag}>
                    {el.Title}
                  </h2>

                  <p className={style.Plans__Blog__Plan_Title_h2_tag_discount}>
                    {el.discount}
                  </p>

                  <h3
                    className={style.Plans__Blog__Plan_Title_h3_tag_description}
                  >
                    {el.description}
                  </h3>

                  <Link to="/login">
                    <Button
                      bg={el.buttonBackGroundColor}
                      color="white"
                      mt="15px"
                      size="lg"
                    >
                      {el.buttonTitle}
                    </Button>
                  </Link>

                  <p className={style.Plans__Blog__Plan_Title_p_duration}>
                    {el.duration}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className={style.send_Jefit_elite_membership_gift_section}>
          <div className={style.SEND_JEFIT_ELITE_MEMBERSHIP_AS_GIFT_button}>
            <Link>
              <button
                className={style.SEND_JEFIT_ELITE_MEMBERSHIP_AS_GIFT_button}
              >
                SEND JEFIT ELITE MEMBERSHIP AS GIFT
              </button>
            </Link>
          </div>

          <div
            className={style.SEND_JEFIT_ELITE_MEMBERSHIP_AS_GIFT_IMG_SEction}
          >
            {send_Jefit_elite_membership_gift_section_img.map((el) => (
              <>
                <div key={el.id}>
                  <img src={el.img_url} alt="" />
                  <h1>{el.title}</h1>
                  <p>{el.description}</p>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Also unlock feature  */}

        <div className={style.Also_unlock_feature_section}>
          {/* also unlock fetures all img */}
          <div className={style.Also_unlock_feature_section_all_img}>
            <h1>Also unlock these features with Elite</h1>

            <div className={style.Also_unlock_feature_section_all_img_main}>
              <img
                src="https://www.jefit.com/images/elite/badge_2.png"
                alt=""
              />
              <img
                src="https://www.jefit.com/images/elite/badge_1.png"
                alt=""
              />
              <img
                src="https://www.jefit.com/images/elite/badge_3.png"
                alt=""
              />
              <img
                src="https://www.jefit.com/images/elite/badge_4.png"
                alt=""
              />
              <img
                src="https://www.jefit.com/images/elite/badge_6.png"
                alt=""
              />
              <img
                src="https://www.jefit.com/images/elite/badge_5.png"
                alt=""
              />
            </div>
          </div>

          {/* ne single img background img */}
          <div
            className={
              style.Also_unlock_feature_section_all_img_main_backGroundImg
            }
          >
            <h1>See Result Fast</h1>
            <br />
            <button>
              <Link to="login">Get File</Link>
            </button>
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
};

export default Elite;
