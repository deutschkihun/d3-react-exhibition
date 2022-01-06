import React from 'react'
import { FaceContainer } from './FaceContainer';
import { Eyes } from './Eyes';
import { EyeBrow } from './EyeBrow';
import { SmileMouth,BadMouth, CryingMouth, AngryMouth } from './Mouth'
import { Tears } from './Tears';

export const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const BackgroundCircle = ({ radius, strokeWidth,type }) => (
    <circle
      r={radius}
      fill={type === "angry" ? "red" : type==="random" ? getRandomColor(): "yellow"}
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
              eyeRadius={eyeRadius / 2}
          />}

      {type === "angry" && <EyeBrow/>}  
      
      <Eyes
        eyeOffsetX={type === "angry" ? eyeOffsetX-14 : eyeOffsetX}
        eyeOffsetY={type === "angry" ?  eyeOffsetY-25 : eyeOffsetY}
        eyeRadius={type === "angry" ? (eyeRadius / 2) : eyeRadius}
      /> 
      
     

      {type === "smile" || type === "random" ? <SmileMouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} /> : 
       type === "bad" ? <BadMouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} /> : 
       type === "crying" ? <CryingMouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} /> : 
       type === "angry" ? <AngryMouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} /> :
       <></>}

    </FaceContainer>
  );