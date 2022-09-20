import style from '../style/BathroomPage.module.css';

function BathroomPage(props) {
    return (
        <div className={style.container}>
            <div id="images">

            </div>
            <div className={style.overview}>
                <div className={style.name}>
                    <h1>{props.bathroom.name}</h1>
                </div>
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
            </div>
        </div>
    );
}

export default BathroomPage;