import React from 'react';
import { DiDatabase, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import{BiCodeCurly} from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id="tech">
    <br />
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies during my academic studies in the software engineering world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End </ListTitle>
          <ListParagraph>
            Experience with React,<br/> 
            HTLM, Css, JavaScript.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Back-End </ListTitle>
          <ListParagraph>
            Experience with<br/> MySQL, 
            FireBase.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiCodeCurly size="4rem" />
        <ListContainer>
          <ListTitle>Code Development </ListTitle>
          <ListParagraph>
            Experience with <br/>Java ,Python ,C#.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider/>
  </Section>
);

export default Technologies;
