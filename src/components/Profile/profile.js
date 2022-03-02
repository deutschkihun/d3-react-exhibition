import React from 'react'
import { ProfileWrapper,
         ProfileTitle,
         ProfileMessage,
         ProfileButton,
         LogoWrapper,
         Mail,
         LinkedIn,
         Github } from '../../ui-lib/lib'

export const Profile = () => {
    return (
        <>
            <ProfileWrapper>
                    <ProfileTitle>Kihun Kim</ProfileTitle>
                    <ProfileMessage>
                        D3 & React Exhibition is made by Kihun Kim. He is currently junior frontend engineer at PACE Telematics in Germany. 
                        He is in charge of web development of the PACE Drive App at PACE Telematics. Specifically, this app is an all-in-one application 
                        that contains all the functions necessary for refueling such as handling enter fueling process with smartphone, Mobile payment 
                        real-time fuel price comparision, gas station search, and friend referral discount system.
                    </ProfileMessage>
                    <ProfileButton onClick={() => window.location.assign('https://www.deutschkihun.com')}>Kihun's portfolio webpage</ProfileButton>
                    <LogoWrapper>
                        <Mail onClick={() => window.location.assign('mailto:deutschkihun@gmail.com')}/>
                        <LinkedIn onClick={() => window.location.assign('https://www.linkedin.com/in/kihun-kim-b35b73174/')} />
                        <Github onClick={() => window.location.assign('https://github.com/deutschkihun')} />
                    </LogoWrapper>
            </ProfileWrapper>

            <ProfileWrapper>
                <ProfileTitle>His other projects</ProfileTitle>
                <ProfileMessage>
                    In addition to D3 & React Exhibition, he has other great projects that he has worked on on on his own. 
                </ProfileMessage>
                <ProfileButton onClick={() => window.location.assign('')}>LuxeSchmuck: Coming Soon</ProfileButton>
                <ProfileButton onClick={() => window.location.assign('https://sportdbapp-deutschkihun.herokuapp.com/')}>Sport DB Application</ProfileButton>
                <ProfileButton onClick={() => window.location.assign('https://login-boilerplate-deutschkihun.herokuapp.com/')}>Login system boilerplate</ProfileButton>
            </ProfileWrapper>
        </>
    )
}

