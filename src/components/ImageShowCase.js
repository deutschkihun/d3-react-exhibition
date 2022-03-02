import React from 'react'
import { useHistory } from 'react-router-dom';
import { ImageContainer } from '../ui-lib/lib'
 
export const ImageShowCase = (props) => {
    const history = useHistory();
    const image = require(`../uploads/${props.name}.svg`)
    return (
            <ImageContainer key={props.name}>
                <img src={image} alt={props.name}  onClick={() => history.push(`${props.name.replace(/\s/g, '')}`)}/>
            </ImageContainer>
    )
}

