import React from 'react';  
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from './AboutStyle';
import codingSvg from '../../assets/coding.svg';

const About = () => {
    return (
        <AboutContainer>
            <StyledImage src={codingSvg} alt="coding"/>
            <HeaderContainer>
                <h1>
                    About Software Developer <span>Nukeka</span>
                </h1>
            </HeaderContainer>
            <InfoContainer>
                <h1>I'm Nur Kevser</h1>
                <h2>I'm currently learning Full-Stack Development Languages.</h2>
                <h2>
                    I've already known JS, ReactJS, PYTHON, SQL.
                </h2>
                <h2>
                    <a href="mailto:nukeka07@gmail.com">Send Email</a> :
                    nukeka07@gmail.com
                </h2>
            </InfoContainer>
        </AboutContainer>
    );

};
export default About;