import React from 'react'
// import Katie from '../Images/Katie.jpg'
import star from '../Images/star.png'

export default function Card (props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className='card'>
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img src={`../../Images/${props.coverImg}`} alt='Img' className='Img'/>
            <div className='CardStats'>
                <img src={star} alt='star' className='RatingsImg'/>
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount})</span>
                <span className='gray'>{props.location}</span>
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
            <p>Open Spots: {props.openSpots}</p>
        
        </div>
    )
}