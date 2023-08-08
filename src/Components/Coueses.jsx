import React, { useState, useEffect } from 'react'
import '../css/Courses.css'
import Filter from '../svg/Filter.svg'
import { FaHotjar } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import CourseCard from "../Components/CourseCard.jsx"

function Courses() {
  const [CouseGetVal, CouseGet] = useState("");
  useEffect(() => {
    if (CouseGetVal === "web") {
      console.log("work1")
    } else if (CouseGetVal === "android") {
      console.log("work2")

    } else if (CouseGetVal === "ios") {
      console.log("work3")

    } else if (CouseGetVal === "popular") {
      console.log("work4")

    }


  }, [CouseGetVal])



  return (
    <section className="courses">
      <div className="course-header">
        <h2 className="course-head">Programs in partnership with world’s <br />top universities</h2>
        <button className="filter-btn">
          <span>FILTER PROGRAMS</span>
          <img src={Filter} alt="filter icon" className='filter-svg' />
        </button>
      </div>
      <div className="courses-body">
        <ul className="course-lists">
          <li onClick={() => CouseGet("popular")}><button><div className="rapper"><FaHotjar className="courses-icon" /> <span className='course-title'>Popular Course</span> </div><span className='course-list-symbol'>&gt;</span></button></li>
          <li onClick={() => CouseGet("web")}><button><div className="rapper"><FaLaptopCode className="courses-icon" /> <span className='course-title'>Web Development</span> </div><span className='course-list-symbol'>&gt;</span></button></li>
          <li onClick={() => CouseGet("android")}><button><div className="rapper"><FaAndroid className="courses-icon" /> <span className='course-title'>Android Development</span> </div><span className='course-list-symbol'>&gt;</span></button></li>
          <li onClick={() => CouseGet("ios")}><button><div className="rapper"><FaApple className="courses-icon" /> <span className='course-title'>IOS Development</span> </div><span className='course-list-symbol'>&gt;</span></button></li>
          <p className="notice">We will add some more COURSE very soon</p>
        </ul>
        <div className="course-details">
          <CourseCard />
          <CourseCard />
          {
            useEffect(() => {
              if (CouseGetVal === "web") {
                console.log("work1")
              } else if (CouseGetVal === "android") {
                console.log("work2")

              } else if (CouseGetVal === "ios") {
                console.log("work3")

              } else if (CouseGetVal === "popular") {
                // console.log("work4")
                // document.write("work4")

              }


            }, [CouseGetVal])

          }
        </div>
      </div>

    </section>
  )
}

export default Courses