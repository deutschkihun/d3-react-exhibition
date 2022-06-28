import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Images } from '../ui-lib/lib'
 
export const ImageShowCase = (props) => {
    const navigate = useNavigate();
    const image = require(`../uploads/${props.name}.svg`)
    return (
        <Images src={image} alt={props.name}  onClick={() => navigate(`${props.name.replace(/\s/g, '')}`)}/>
    )
}

