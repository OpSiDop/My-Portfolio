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
          I have worked on a wide range of projects. From IoT to Flutter apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'IoT' ?
            <ToggleButton active value="IoT" onClick={() => setToggle('IoT')}>IoT</ToggleButton>
            :
            <ToggleButton value="IoT" onClick={() => setToggle('IoT')}>IoT</ToggleButton>
          }
          <Divider />
          {toggle === 'App Dev' ?
            <ToggleButton active value="App Dev" onClick={() => setToggle('App Dev')}>App Dev</ToggleButton>
            :
            <ToggleButton value="App Dev" onClick={() => setToggle('App Dev')}>App Dev</ToggleButton>
          }
          <Divider />
          {toggle === 'Python App' ?
            <ToggleButton active value="Python App" onClick={() => setToggle('Python App')}>Python App</ToggleButton>
            :
            <ToggleButton value="Python App" onClick={() => setToggle('Python App')}>Python App</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects