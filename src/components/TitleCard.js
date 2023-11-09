import React from 'react';
import PropTypes from 'prop-types';

function TitleCard(props) {
    return (
        <div className='title-card'>
            <img className="titlecard-img" src={props.path} alt={props.name} />
            <h1 className={`titlecard-title ${!props.subtitle ? "titlecard-last" : ""}`}>{props.name}</h1>
            {props.subtitle ? <h2 className="titlecard-subtitle titlecard-last">{props.subtitle}</h2> : null}
        </div>
    );
}

TitleCard.propTypes = {
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    path: PropTypes.string.isRequired,
};


export default TitleCard;
