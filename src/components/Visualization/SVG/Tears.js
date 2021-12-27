export const Tears = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
    <>
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <ellipse
            cx={eyeOffsetX}
            cy={eyeOffsetY}
            r={eyeRadius}
        />
        <ellipse
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
        />
        </svg>
    </>
  );