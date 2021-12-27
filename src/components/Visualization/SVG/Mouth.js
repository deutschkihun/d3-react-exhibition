import { arc } from 'd3';

export const SmileMouth = ({mouthRadius, mouthWidth}) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2);
  
  return <path d={mouthArc()}/>;
};

export const BadMouth = ({mouthRadius, mouthWidth}) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI * 3 / 2)
    .endAngle(Math.PI * 5 / 2);
  
  return <path d={mouthArc()} style={{transform:"translate(0px, 40px)"}}/>;
};

export const CryingMouth = ({mouthRadius, mouthWidth}) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius + mouthWidth*2)
    .outerRadius(mouthRadius + mouthWidth*2.5)
    .startAngle(Math.PI * 3.5 / 2)
    .endAngle(Math.PI * 4.5 / 2);
  
  return <path d={mouthArc()} style={{transform:"translate(0px, 70px)"}}/>;
};

export const AngryMouth = ({mouthRadius, mouthWidth}) => {
  const mouthArc = arc()
    .innerRadius(mouthRadius * 1)
    .outerRadius(mouthRadius * 1.2 + mouthWidth)
    .startAngle(Math.PI * 2.5 / 2)
    .endAngle(Math.PI * 5.5 / 2);
  
  return <path d={mouthArc()} style={{transform:"translate(0px, 30px)"}}/>;
};


