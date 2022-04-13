import React from 'react'
import { useHistory } from 'react-router-dom';
import { Images } from '../ui-lib/lib'
 
export const ImageShowCase = (props) => {
    const history = useHistory();
    const image = require(`../uploads/${props.name}.svg`)
    return (
        <Images src={image} alt={props.name}  onClick={() => history.push(`${props.name.replace(/\s/g, '')}`)}/>
    )
}

