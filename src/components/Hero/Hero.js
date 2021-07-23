import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section> 
    <LeftSection row nopadding>
      <SectionTitle main center>
        Welcome to my <br/> personal 
        portfolio
      </SectionTitle>
      <SectionText>
        Sit back and take a taste of my work.<br/>
        Hope you enjoy! ^^
      </SectionText>
      <Button onClick={() => window.location = '#projects' }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;