import React from 'react'
import {ConfidenceInterval} from './ConfidenceInterval'
import {ConfidenceIntervalReverse} from './ConfidenceIntervalReverse'

export const ConfidenceIntervalBasic = ({
    width,
    height,
    margin,
}) => (
    <>
        <ConfidenceInterval
            width={width}
            height={height}
            margin={margin}
        />
        <ConfidenceIntervalReverse
            width={width}
            height={height}
            margin={margin}
    />
    </>
)

