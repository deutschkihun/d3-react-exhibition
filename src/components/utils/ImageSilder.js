import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

const ImageContainer = styled.div`
    img {
        width: 100%;
        max-height: 150px;
    }
` 

export const ImageSlider = (props) => {
    const history = useHistory();
    const image = require(`../../uploads/${props.name}.png`)
    return (
            <ImageContainer key={props.name}>
                <img src={image} alt={props.name}  onClick={() => history.push(`${props.name.replace(/\s/g, '')}`)}/>
            </ImageContainer>
    )
}

