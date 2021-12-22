import React from 'react'
import { Carousel } from 'antd';

export const ImageSlider = (props) => {
    return (
        <div>
            <Carousel autoplay >
                {props.images ? props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{ width: '100%', maxHeight: '150px' }}
                            src={`http://localhost:5000/${image}`} alt="hello" />
                    </div>
                )) :  <img style={{ width: '100%', maxHeight: '150px' }}
                src={`http://localhost:5000/`} alt="hello" />}
            </Carousel>
        </div>
    )
}

