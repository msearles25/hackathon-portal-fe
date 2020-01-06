 import React from 'react';

const Events = (props) => {
    return(
        <div className='eventList'>
            {props.events.map(e => {
                return(
                <div className='event'>
                    <img className='eventImage' src={e.url}></img>
                    <a className='eventName'>{e.name}</a>
                </div>
                )
            })}
        </div>
    )
};

export default Events;