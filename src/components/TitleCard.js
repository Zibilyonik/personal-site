import React from 'react';
import PropTypes from 'prop-types';

function TitleCard(props) {
    return (
        <div className='title-card'>
            <img src={props.path} alt={props.name} />
            <h1>{props.name}</h1>
        </div>
    );
}

TitleCard.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};


export default TitleCard;
