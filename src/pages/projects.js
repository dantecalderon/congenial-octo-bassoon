import React from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Title = Styled.h1`
  font-family: 'Lato', sans-serif;
  letter-spacing: .05em;
  color: #23213C;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  &:before {
    content: " ";
    background: #3BFD56;
    position: absolute;
    margin-top: .7em;
    margin-left: -.2em;
    height: .4em;
    width: 5.25em;
    z-index: -1;
  }
`
const SubTitle = Styled.h3`
  font-family: 'Lato', sans-serif;
  color: #3BFD56;
  font-weight: 900;
  font-size: 2rem;
`
const SubTitleLink = Styled(Link)`
  color: #3BFD56;
  font-weight: 900;
  text-decoration: none;
`


const Text = Styled.p`
font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  color: #4e4e4e;
  line-height: 1.5;
`
const List = Styled.ul`
  margin: 0 auto;
`
const Item = Styled.li`
  margin-top: 50px; 
  list-style-type: none;
`

const ProjectsPage = () => (
  <Layout>
    <Title>Projects</Title>
    <Text>
      Here you will find some projects I've developed as a freelancer. I've
      worked on different types of projects both personal and professionals.
    </Text>
    <List>
      <Item>
        <SubTitle><SubTitleLink to="www.clubseverino.com.ar">Club Severino</SubTitleLink></SubTitle>
        <Text>
          Designed & Developed a night club website:<br/>
          Built With: HTML5, CSS3, Javascript, Boostrap.
        </Text>
      </Item>
      <Item>
        <SubTitle><SubTitleLink to="/">Personal Website</SubTitleLink></SubTitle>
        <Text>
          Designed & Developed my own website:<br/>
          Built With: React, gatsbyjs .
        </Text>
      </Item>
      <Item>
        <SubTitle>Bookex</SubTitle>
        <Text>
          Designing & Development a book exchange app:<br/>
          Built With: Ionic, Angular.
        </Text>
      </Item>
      <Item>
        <SubTitle><SubTitleLink to="www.alternativeapp.io">Alternativapp</SubTitleLink></SubTitle>
        <Text>
          Developing a new app:<br/>
          Using: Xamarin, C#, Javascript.
        </Text>
      </Item>
    </List>
  </Layout>
)

export default ProjectsPage
