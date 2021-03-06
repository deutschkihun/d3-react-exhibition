import React from 'react'
import styled from 'styled-components'
import { Metrics } from './Metrics'

const LoadingViewTitle = styled.h1`
  font-family: ${p => p.theme.fontFamily};
  color: ${p => p.theme.primaryTextColor};
  font-size: 24px;
  font-weight: 200;
  margin: 16px 0px 4px;
`

const LoadingViewBody = styled.p`
  font-family: ${p => p.theme.fontFamily};
  color: ${p => p.theme.primaryTextColor};
  font-size: 16px;
  font-weight: 400;
  margin: 8px 0px 8px 0px;
  white-space: pre-wrap;
`

const StyledLoadingView = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
`

const StyledLoadingViewSpinnerContainer = styled.div`
  margin: 64px auto;
`

const StyledSpinnerContainer = styled.div`
  position: relative;
  margin: auto;

  @keyframes fuelspinner {
    to {
      transform: rotate(360deg);
    }
  }
`

const StyledSpinner = styled.div`
  height: ${p => p.size}px;
  width: ${p => p.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingSpinnerAnimation = styled.div`
  animation: fuelspinner 1.5s linear infinite;
  border: 4px solid ${'white'};
  border-top-color: ${'black'};
  border-radius: 50%;
  box-sizing: border-box;
  content: '';
  height: ${p => p.size}px;
  position: absolute;
  width: ${p => p.size}px;
  z-index: 1;
  display: inline-block;
`

const LoadingSpinnerAnimationWaiting = styled(LoadingSpinnerAnimation)`
  border-top-color: white;
`

const LoadingSpinnerAnimationSlow = styled(LoadingSpinnerAnimation)`
  animation: fuelspinner 3s linear infinite;
`

const StyledSpinnerImage = styled.img`
  max-width: 50%;
  max-height: 50%;
`

export function LoadingSpinner({ img, alt, waiting, slow, primaryColor, backgroundColor, size, className }) {
  let spinner
  if (waiting) {
    spinner = (
      <LoadingSpinnerAnimationWaiting
        className={className}
        primaryColor={primaryColor}
        backgroundColor={backgroundColor}
        size={size}
      />
    )
  } else if (slow) {
    spinner = (
      <LoadingSpinnerAnimationSlow
        className={className}
        primaryColor={primaryColor}
        backgroundColor={backgroundColor}
        size={size}
      />
    )
  } else {
    spinner = (
      <LoadingSpinnerAnimation
        className={className}
        primaryColor={primaryColor}
        backgroundColor={backgroundColor}
        size={size}
      />
    )
  }

  return (
    <StyledSpinnerContainer>
      <StyledSpinner className={className} primaryColor={primaryColor} backgroundColor={backgroundColor} size={size}>
        {spinner}
        <StyledSpinnerImage src={img} alt={alt} />
      </StyledSpinner>
    </StyledSpinnerContainer>
  )
}

LoadingSpinner.defaultProps = {
  primaryColor: null,
  size: 32,
  waiting: false,
  slow: false,
}

const PaddedText = styled.div`
  padding: 0 ${Metrics.defaultPadding};
`

export function LoadingView(props) {
  const { title, body } = props

  return (
    <StyledLoadingView>
      <StyledLoadingViewSpinnerContainer>
        <LoadingSpinner size={192} {...props} />
      </StyledLoadingViewSpinnerContainer>
      <PaddedText>
        <LoadingViewTitle>{title}</LoadingViewTitle>
        <LoadingViewBody>{body}</LoadingViewBody>
      </PaddedText>
    </StyledLoadingView>
  )
}

LoadingView.defaultProps = {
  title: '',
  waiting: false,
  slow: false,
  size: 192,
}
