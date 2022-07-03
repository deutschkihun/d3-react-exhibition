import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { Wrapper, Title, Message } from '../ui-lib/lib'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'
import person from '../assets/person.svg'

export function ProfilePage() {
  useEffect(() => {
    d3.selectAll('.icon').attr('width', '100').style('padding', '5px')
  }, [])

  return (
    <Wrapper>
      <Title>Kihun Kim</Title>
      <Message>
        D3 & React Exhibition is made by Kihun Kim. He is currently junior frontend engineer at PACE Telematics in
        Germany. He is in charge of web development of the PACE Drive App at PACE Telematics. Specifically, this app is
        an all-in-one application that contains all the functions necessary for refueling such as handling enter fueling
        process with smartphone, Mobile payment real-time fuel price comparision, gas station search, and friend
        referral discount system.
      </Message>
      <img
        className="icon"
        src={person}
        alt="person"
        onClick={() => window.location.assign('https://deutschkihun.com')}
      />
      <img
        className="icon"
        src={mail}
        alt="mail"
        onClick={() => window.location.assign('mailto:deutschkihun@gmail.com')}
      />
      <img
        className="icon"
        src={linkedin}
        alt="linkedin"
        onClick={() => window.location.assign('https://www.linkedin.com/in/kihun-kim-b35b73174/')}
      />
      <img
        className="icon"
        src={github}
        alt="github"
        onClick={() => window.location.assign('https://github.com/deutschkihun')}
      />
    </Wrapper>
  )
}
