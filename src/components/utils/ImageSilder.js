import React from 'react'
import { Carousel } from 'antd';
import flag from '../../uploads/SVG/flag.jpg'

export const ImageSlider = (props) => {
    //const image = props.name && require(`./../../brands/${brand}/${branding.dashboardBackground}`).default;
    console.log(props.name)
    const image = require(`../../uploads/SVG`).default
    console.log("image",flag)
    return (
        <div>
            <Carousel autoplay >
                    <div key={props.name}>
                        <img style={{ width: '100%', maxHeight: '150px' }}
                            src={flag} alt={props.name} />
    </div>
            </Carousel>
        </div>
    )
}

