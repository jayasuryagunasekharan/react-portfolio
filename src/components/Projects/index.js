import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, LoadMoreButton, NotPinnedDivider, NotPinnedTitle } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(9);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 9);
  };

  const handleToggle = (category) => {
    setToggle(category);
    setVisibleProjects(9); // Reset visible projects when category changes
  };

  // Filter projects based on the selected category
  const filteredProjects = toggle === 'all'
    ? projects
    : projects.filter((item) => item.category === toggle);

  // Separate pinned and unpinned projects
  const pinnedProjects = filteredProjects.filter(project => project.pinned);
  const unpinnedProjects = filteredProjects.filter(project => !project.pinned);

  // Determine the projects to display based on visibility
  const visibleUnpinnedProjects = unpinnedProjects.slice(0, visibleProjects);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of my projects spanning across domains such as Software Engineering, Embedded Systems, Data Science, Data Engineering and Machine Learning.
        </Desc>
        <ToggleButtonGroup>
          {['all', 'SWE', 'LLM', 'Embedded', 'DS', 'DA', 'ML'].map((category) => (
            <React.Fragment key={category}>
              <ToggleButton 
                active={toggle === category} 
                value={category} 
                onClick={() => handleToggle(category)}
              >
                {category.toUpperCase()}
              </ToggleButton>
              {category !== 'LLM' && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {/* Display Pinned Projects */}
          {pinnedProjects.length > 0 && (
            <>
              {pinnedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            </>
          )}

          {/* Display Unpinned Projects */}
          {visibleUnpinnedProjects.length > 0 && (
            <>
              {pinnedProjects.length > 0 && <NotPinnedDivider />}
              {pinnedProjects.length > 0 && <NotPinnedTitle></NotPinnedTitle>}
              {visibleUnpinnedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            </>
          )}
        </CardContainer>

        {/* Load More Button */}
        {visibleProjects < unpinnedProjects.length && (
          <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
