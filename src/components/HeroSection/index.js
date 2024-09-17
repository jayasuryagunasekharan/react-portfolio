import React from 'react';
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroImage from '../../images/HeroImage.jpg';

// Import styled components from HeroStyle.js
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  // ResumeButton,
  HobbiesSection,
  HobbiesTitle,
  HobbiesList,
  HobbyItem,
  HobbyIcon,
} from './HeroStyle';

// Import icons from react-icons
import { FaFutbol, FaTv, FaGamepad, FaPlane } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <HeroContainer id="about">
      <HeroBg>
        {/* <GlitteringSea /> */}
      </HeroBg>
      <HeroInnerContainer>
        <HeroLeftContainer id="Left">
          <Title>
            Hi, I am <br /> {Bio.name}
          </Title>
          <TextLoop>
            I am a{' '}
            <Span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Span>
          </TextLoop>
          <SubTitle>{Bio.description}</SubTitle>
          {/* <ResumeButton href={Bio.resume} target="_blank">
            Check Resume
          </ResumeButton> */}
          
          {/* Hobbies Section */}
          <HobbiesSection>
            <HobbiesTitle>Hobbies</HobbiesTitle>
            <HobbiesList>
              {Bio.hobbies.map((hobby, index) => (
                <HobbyItem key={index}>
                  <HobbyIcon>
                    {index === 0 && <FaFutbol />}
                    {index === 1 && <FaTv />}
                    {index === 2 && <FaGamepad />}
                    {index === 3 && <FaPlane />}
                  </HobbyIcon>
                  <span>{hobby}</span>
                </HobbyItem>
              ))}
            </HobbiesList>
          </HobbiesSection>
        </HeroLeftContainer>

        <HeroRightContainer id="Right">
          <Img src={HeroImage} alt="hero-image" />
        </HeroRightContainer>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export default HeroSection;
