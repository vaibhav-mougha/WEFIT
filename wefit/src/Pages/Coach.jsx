import { Button, Icon } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import style from "../Components/Coach/Coach.module.css";
// import { FaRegNewspaper } from "@react-icons/all-files/fa/FaRegNewspaper";
import { FaRegNewspaper } from "react-icons/fa";
import { CalendarIcon, SettingsIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";

const Coach = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      <Navbar />
      <div className={style.mainDiv}>
        <div className={style.Main_Div_Inside_Div}>
          <div className={style.Personal_Coach_Mode_Section}>
            <h1 className={style.Personal_Coach_Mode_Section_H1_Heading}>
              Personal Coach Mode
            </h1>

            <p className={style.Personal_Coach_Mode_Section_Inside_p_Tag}>
              Expand your personal training business with Personal Coach Mode.
              Reduce your average time spent per client by connecting with
              fitness savvy clients remotely to provide personal workout plans,
              track their workout progress, and provide feedback.
            </p>
            <button className={style.Personal_Coach_Mode_Section_Inside_Button}>
              START 14-DAY FREE TRIAL
            </button>

            <p className={style.Personal_Coach_Mode_Section_Button_P_Tag}>
              Interested? Request a demo or give us some feedback at
              Marketing@jefit.com
            </p>
          </div>

          <div className={style.LowerTimeSpentSection}>
            <div>

              <h4 className={style.LowerTimeSpent_H4_tag}>Lower Your Time Spent On Each Client</h4>
              <p className={style.LowerTimeSpent_P_Tag}>Quickly and efficiently coach clients via WeFit allowing you to expand your client base without increasing your time invested.</p>

              <h4 className={style.LowerTimeSpent_H4_tag}>Easily Build and Sell Workout Plans</h4>
              <p className={style.LowerTimeSpent_P_Tag}>Develop and distribute your premium workout plan with WeFit’s robust exercise and workout plan libraries</p>

              <h4 className={style.LowerTimeSpent_H4_tag}>Build Your Brand</h4>
              <p className={style.LowerTimeSpent_P_Tag}>
                Build a profile that highlights your experience, client results,
                or certifications and attracts future clients.
              </p>

              <button className={style.LowerTimeSpent_Button_Start_here}>
                START HERE
              </button>
            </div>

            <div className={style.LowerTimeSpent_Each_Client_First_Video}>
              <video
                style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                playsInline
                loop
                muted
                controls
                alt="All the devices"
                src="https://www.jefit.com/wp/wp-content/uploads/2020/12/Screen-Recording-2020-12-08-at-1.23.10-PM.mov"
                ref={videoEl}
              />
            </div>
          </div>

          <div className={style.Client_Management_section}>
            <div>
              <h1 className={style.Client_Management_section_H1_tag_Head}>
                Client Management
              </h1>

              <h2 className={style.Client_Management_section_H2_tag_Head}>Coach More Clients in Less Time</h2>

              <p className={style.Client_Management_section_P_Tag_Des}>· Easily onboard new clients with Wifit's robust online routine building and distribution system.</p>
              <p className={style.Client_Management_section_P_Tag_Des}>· Wifit's premium exercise library coaches clients during their workout with exercise instructions and HD video demonstrations.</p>
              <p className={style.Client_Management_section_P_Tag_Des}>· Limit time spent coaching with advanced analytics, insights, and automated notifications from clients logging their workouts.</p>
              <p className={style.Client_Management_section_P_Tag_Des}>· Limit time spent coaching with advanced analytics, insights, and automated notifications from clients logging their workouts.</p>
              <p className={style.Client_Management_section_P_Tag_Des}>· Wifit's feature-rich in-app messenger makes form reviews or workout plan updates quick and simple.</p>
              <p className={style.Client_Management_section_P_Tag_Des}>· Avoid conflicting with geographic based non-compete clauses by expanding your business online.</p>

              <button className={style.Client_Management_section_Button_Start_explore}>START EXPLORING</button>

              <p className={style.Client_Management_section_P_Tag_Des}>
                · Easily onboard new clients with JEFIT's robust online routine
                building and distribution system.
              </p>
              <p className={style.Client_Management_section_P_Tag_Des}>
                · JEFIT's premium exercise library coaches clients during their
                workout with exercise instructions and HD video demonstrations.
              </p>
              <p className={style.Client_Management_section_P_Tag_Des}>
                · Limit time spent coaching with advanced analytics, insights,
                and automated notifications from clients logging their workouts.
              </p>
              <p className={style.Client_Management_section_P_Tag_Des}>
                · Limit time spent coaching with advanced analytics, insights,
                and automated notifications from clients logging their workouts.
              </p>
              <p className={style.Client_Management_section_P_Tag_Des}>
                · JEFIT's feature-rich in-app messenger makes form reviews or
                workout plan updates quick and simple.
              </p>
              <p className={style.Client_Management_section_P_Tag_Des}>
                · Avoid conflicting with geographic based non-compete clauses by
                expanding your business online.
              </p>

              <button
                className={style.Client_Management_section_Button_Start_explore}
              >
                START EXPLORING
              </button>
            </div>

            <div className={style.Client_Management_section_First_Video}>
              <video
                style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                playsInline
                loop
                muted
                controls
                alt="All the devices"
                src="https://www.jefit.com/wp/wp-content/uploads/2020/12/Screen-Recording-2020-12-08-at-1.23.10-PM.mov"
                ref={videoEl}
              />
            </div>
          </div>

          {/* Premium Workout Plans section*/}
          <div className={style.Premium_Workout_Plans_section}>
            <div className={style.Premium_Workout_Plans_section_First_Video}>
              <video
                style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                playsInline
                loop
                muted
                controls
                alt="All the devices"
                src="https://www.jefit.com/wp/wp-content/uploads/2020/12/Screen-Recording-2020-12-08-at-1.23.10-PM.mov"
                ref={videoEl}
              />
            </div>

            <div>
              <h1 className={style.Premium_Workout_Plans_section_H1_tag_Head}>
                Premium Workout Plans
              </h1>

              <h2 className={style.Premium_Workout_Plans_section_H2_tag_Head}>
                Easily personalize your workout plans
              </h2>

              <p className={style.Premium_Workout_Plans_section_P_tag}>
                <Icon as={FaRegNewspaper} boxSize={4} /> . JEFIT's extensive
                exercise library makes updating or personalizing workout plans a
                breeze. JEFIT teaches your clients how to perform each
              </p>

              <p className={style.Premium_Workout_Plans_section_P_tag}><Icon as={FaRegNewspaper} boxSize={4} />  . Wefit's extensive exercise library makes updating or personalizing workout plans a breeze.
                Wefit teaches your clients how to perform each</p>

              <p className={style.Premium_Workout_Plans_section_P_tag}><Icon as={FaRegNewspaper} boxSize={4} />  . exercise with detailed instructions and an HD video mid-workout.</p>

              <p className={style.Premium_Workout_Plans_section_P_tag}><Icon as={FaRegNewspaper} boxSize={4} />  . Sell your services as a coach or just sell your premium workout plan - diversify your types of clients.</p>


              <button className={style.Client_Management_section_Button_Start_explore}>START EXPLORING</button>


              <p className={style.Premium_Workout_Plans_section_P_tag}>
                <Icon as={FaRegNewspaper} boxSize={4} /> . Sell your services as
                a coach or just sell your premium workout plan - diversify your
                types of clients.
              </p>

              <button
                className={style.Client_Management_section_Button_Start_explore}
              >
                START EXPLORING
              </button>
            </div>
          </div>

          {/* coach Branding  page */}

          <div className={style.Client_Management_section}>
            <div>
              <h1 className={style.Client_Management_section_H1_tag_Head}>
                Coach Branding
              </h1>

              <h2 className={style.Client_Management_section_H2_tag_Head}>Build a reputation & let new clients come to you.</h2>

              <p className={style.Client_Management_section_P_Tag_Des}>· Be one of the first Coaches on wifits and start building your reputation first</p>
              <p className={style.Client_Management_section_P_Tag_Des}>· Find time efficient clients as wifits users require less coaching than your average client.</p>
              <p className={style.Client_Management_section_P_Tag_Des}>· Display your client successes and your certifications on your profile.</p>


              <button className={style.Client_Management_section_Button_Start_explore}>START EXPLORING</button>

              <p className={style.Client_Management_section_P_Tag_Des}>
                · Be one of the first Coaches on JEFIT and start building your
                reputation first
              </p>
              <p className={style.Client_Management_section_P_Tag_Des}>
                · Find time efficient clients as JEFIT users require less
                coaching than your average client.
              </p>
              <p className={style.Client_Management_section_P_Tag_Des}>
                · Display your client successes and your certifications on your
                profile.
              </p>

              <button
                className={style.Client_Management_section_Button_Start_explore}
              >
                START EXPLORING
              </button>
            </div>

            <div className={style.Client_Management_section_First_Video}>
              <video
                style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                playsInline
                loop
                muted
                controls
                alt="All the devices"
                src="https://www.jefit.com/wp/wp-content/uploads/2020/12/Screen-Recording-2020-12-08-at-1.23.10-PM.mov"
                ref={videoEl}
              />
            </div>
          </div>

          {/* start you free trial */}

          <div className={style.start_YouFree_Trial_section}>
            <div className={style.start_YouFree_Trial_section_Img_section}>
              <img
                src="https://www.jefit.com/wp/wp-content/uploads/2020/10/coachiphonex-1536x1536.png"
                alt=""
              />
            </div>
            <div>
              <h1 className={style.start_YouFree_Trial_section_h1_tag}>
                Start Your Free Trial
              </h1>

              <h2 className={style.start_YouFree_Trial_section_h2_tag}>
                After the free trial,
              </h2>

              <p className={style.start_YouFree_Trial_section_p_tag}>
                <CalendarIcon w={6} h={8} color="#808285;" /> . $19.99/month
              </p>
              <p className={style.start_YouFree_Trial_section_p_tag}>
                <SettingsIcon w={6} h={8} color="#808285;" /> . You decide what
                to charge your clients and keep the rest!
              </p>
              <br />

              <p className={style.start_YouFree_Trial_section_p_tag}>
                For gym or studio, please contact us for bulk pricing at
                product@jefit.com ​
              </p>

              <Link to="./login">
                {" "}
                <button
                  className={
                    style.Client_Management_section_Button_Start_explore
                  }
                >
                  START EXPLORING
                </button>{" "}
              </Link>
            </div>
          </div>

          <div className={style.our_goal_is_to_Help_Section}>
            <h1 className={style.our_goal_is_to_Help_Section_h1_tag}>
              Our Goal Is To Help You Succeed
            </h1>

            <p className={style.our_goal_is_to_Help_Section_p_tag}>
              Contact us at product@jefit.com for any questions or feedback
            </p>

            <Link to="./login">
              <button
                className={style.Client_Management_section_Button_Start_explore}
                style={{ marginTop: "40px" }}
              >
                START 14-DAY FREE TRIAL
              </button>
            </Link>

            {/* START 14-DAY FREE TRIAL */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Coach;
