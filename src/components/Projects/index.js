import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of my projects spanning across domains such as Software Engineering, Data Science, Data Mining, and Machine Learning.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Software Engineer' ?
            <ToggleButton active value="Software Engineer" onClick={() => setToggle('Software Engineer')}>SOFTWARE</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('Software Engineer')}>SOFTWARE</ToggleButton>
          }
          <Divider />
          {toggle === 'Embedded' ?
            <ToggleButton active value="Embedded" onClick={() => setToggle('Embedded')}>EMBEDDED</ToggleButton>
            :
            <ToggleButton value="Embedded" onClick={() => setToggle('Embedded')}>EMBEDDED</ToggleButton>
          }
          <Divider />
          {toggle === 'Data Science / Data Analysis' ?
            <ToggleButton active value="Data Science / Data Analysis" onClick={() => setToggle('Data Science / Data Analysis')}>DATA</ToggleButton>
            :
            <ToggleButton value="Data Science / Data Analysis" onClick={() => setToggle('Data Science / Data Analysis')}>DATA</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('Machine Learning / AI')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('Machine Learning / AI')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects