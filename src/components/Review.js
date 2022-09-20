import style from '../style/Review.module.css';
import img1 from "../images/icon1.png"; // TODO: make this dynamic

function Review(props) {
    return (
        <div className={style.container}>
            <div className={style.userInfo}>
                <div className={style.profilePic}>   
                    <img src={img1} alt="A default icon"/>
                </div>
                <div className={style.username}>
                    <p>Username</p>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.rating}>
                    <p>5/5</p>
                </div>
                <div className={style.review}>
                    <p>This is a sample review.</p>
                </div>
            </div>
        </div>
    );
}

export default Review;