import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
    img {
        width: 100%;
        max-height: 150px;
    }
` 

export const ImageSlider = (props) => {
    const image = require(`../../uploads/${props.name}.png`)
    return (
            <ImageContainer key={props.name}>
                <img src={image} alt={props.name} />
            </ImageContainer>
    )
}

