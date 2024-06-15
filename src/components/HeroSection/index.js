import React from 'react';
import { Bio } from '../../data/constants';
// import GlitteringSea from '../GlitteringSea';
import Typewriter from 'typewriter-effect';

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
} from './HeroStyle';

// Import HeroImage from assets
import HeroImg from '../../images/HeroImage.jpg';

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
        </HeroLeftContainer>

        <HeroRightContainer id="Right">
          <Img src={HeroImg} alt="hero-image" />
        </HeroRightContainer>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export default HeroSection;
