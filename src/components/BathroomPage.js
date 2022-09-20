import style from '../style/BathroomPage.module.css';
import img1 from "../images/example-bathroom.jpg"; // TODO: make this dynamic
import Review from './Review.js';
import { useState, useEffect } from 'react';

function BathroomPage(props) {

    const [reviews, setReviews] = useState(null);

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={img1} alt="Bathroom"/>
            </div>
            <div className={style.overview}>
                <h1>{props.bathroom.name}</h1>
                <div className={style.stats}>
                    <span>
                        <h4>Building</h4>
                        {props.bathroom.building}
                    </span>
                    <span>
                        <h4>Admin Rating</h4>
                        {props.bathroom.admin_rating}
                    </span>
                    <span>
                        <h4>Gender</h4>
                        {props.bathroom.gender}
                    </span>
                </div>
                <h1>Reviews</h1>
                <div className={style.reviews}>
                    <Review />
                    <Review />
                    <Review />
                    {reviews}
                </div>
            </div>
        </div>
    );
}

export default BathroomPage;