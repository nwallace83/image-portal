import React from 'react';
import PropTypes from 'prop-types';

const Images = ({images}) => {
    images.map( (image,key) => {
        return <div><h1>{key}</h1> - <img src={image} /></div>
    })
};

images.PropTypes (
    PropTypes.array.required
);

export default Images;