import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, LoadMoreButton } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(9);
  
  const loadMore = () => {
    setVisibleProjects(prev => prev + 9);
  };

  const filteredProjects = toggle === 'all' 
    ? projects 
    : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of my projects spanning across domains such as Software Engineering, Data Science, Data Mining, and Machine Learning.
        </Desc>
        <ToggleButtonGroup>
          {['all', 'Software Engineer', 'Embedded', 'Data Science / Data Analysis', 'Machine Learning / AI'].map((category) => (
            <React.Fragment key={category}>
              <ToggleButton 
                active={toggle === category} 
                value={category} 
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase()}
              </ToggleButton>
              {category !== 'Machine Learning / AI' && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
        {visibleProjects < filteredProjects.length && (
          <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
