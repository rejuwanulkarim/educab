import React, { useState } from 'react'
import "../css/CourseCard.css"

import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
function CourseCard(prop) {
    // let like = true;

    const [like, setLike] = useState(true);

    return (
        <div className='course-card'>
            <div className="card-image" style={{ "--card-image": "url(https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg)" }}>
                <h3>Md Mizanur Rahaman <button className='review-btn' onClick={() => setLike(!like)}>

                    {
                        like ? <AiOutlineLike className='review-icon' style={{ "--review-btn-color": "blue" }} /> : <AiFillLike className='review-icon' style={{ "--review-btn-color": "red" }} />
                    }
                </button></h3>
                <p>Powered by Martian</p>
            </div>
            <div className="card-body">
                <div className="review"><div className="review-rapper"><span>⭐</span><p className="review-count">5(1 review)</p></div><span className="profession">Web Developer</span>
                </div>
                <p className="card-quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque ab ratione sapiente impedit quos consectetur et qui eos. Facilis, recusandae quas.</p>
                <div className="enroll-sec">
                    <button className="enroll-btn">Enroll For Free</button>
                </div>
            </div>
        </div >
    )
}

export default CourseCard