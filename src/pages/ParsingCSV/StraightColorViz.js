import React from 'react'

export const StraightColorViz = ({data}) => {
    return (
        <>
            {data.map((k,i) => (
                <div
                    key={i}
                    style={{
                    backgroundColor:k['RGB hex value'],
                    height:'10px'
                }}>
                </div>
            ))}
        </>
    )
}

