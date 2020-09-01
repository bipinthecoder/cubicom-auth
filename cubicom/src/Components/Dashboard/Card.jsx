import React, {Component} from 'react';
import style from "./Card.module.css";

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {data} = this.props;
        return (
            <div className={`${style.cardContainer}`}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div className={`${style.number}`}>{data.number}</div>
                    <img className={`${style.number}`} src={data.icon}></img>
                </div>

                <div className={`${style.titleDiv}`}>
                    <div className={`${style.title}`}>{data.title}</div>
                    <div className={`${style.mute}`}>{data.mute}</div>
                </div>
            </div>
        );
    }
}

export default Card;