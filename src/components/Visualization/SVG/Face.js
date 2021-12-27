import React from 'react'
import { FaceContainer } from './FaceContainer';
import { Eyes } from './Eyes';
import { SmileMouth,BadMouth, CryingMouth, AngryMouth } from './Mouth'
import { Tears } from './Tears';

const BackgroundCircle = ({ radius, strokeWidth,type }) => (
    <circle
      r={radius}
      fill={type === "angry" ? "red" : "yellow"}
      stroke="black"
      strokeWidth={strokeWidth}
    />
  );

export const Face = ({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthRadius,
    mouthWidth,
    type
  }) => (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundCircle
        type={type}
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />

      {type === "crying" && 
        <Tears
            eyeOffsetX={eyeOffsetX + 20}
            eyeOffsetY={eyeOffsetY + 20}
            eyeRadius={eyeRadius}
        />
       }
      
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      /> 

      {type === "smile" ? <SmileMouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} /> : 
       type === "bad" ? <BadMouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} /> : 
       type === "crying" ? <CryingMouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} /> : 
       type === "angry" ? <AngryMouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} /> :
       <></>}

    </FaceContainer>
  );