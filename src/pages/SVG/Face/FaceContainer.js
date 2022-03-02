import { Eyes } from './Eyes';
import { EyeBrow } from './EyeBrow';
import { SmileMouth,BadMouth, CryingMouth, AngryMouth } from './Mouth'
import { Tears } from './Tears';
import { randomColorGenerator } from '../../../helper/randomColorGenerator';


export const FaceContainer = ({width, height, centerX, centerY,type,strokeWidth,eyeOffsetX,eyeOffsetY,eyeRadius,mouthWidth,mouthRadius}) => {
  
  const BackgroundCircle = ({ radius, strokeWidth,type }) => (
    <circle
      r={radius}
      fill={type === "angry" ? "red" : type==="random" ? randomColorGenerator(): "yellow"}
      stroke="black"
      strokeWidth={strokeWidth}
    />
  );
  
  return (
    <svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
      
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
      
    </g>
  </svg>
  )
}
   