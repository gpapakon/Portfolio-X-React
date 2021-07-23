import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projectsDemo,projects } from '../../constants/constants';




const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectsDemo.map(({id,title, visit,tags,image,description,source}) => (
        <BlogCard key ={id}>
          <Img src={image}></Img>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i ) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">Code</ExternalLinks>
            </UtilityList>
          </div>

        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;