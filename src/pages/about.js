import React from 'react'
import Styled from 'styled-components'
import Layout from '../components/layout'

const Title = Styled.h1`
  font-family: 'Lato', sans-serif;
  letter-spacing: .05em;
  color: #23213C;
  font-size: 3rem;
  text-transform: uppercase;
  &:before {
    content: " ";
    background: #3BFD56;
    position: absolute;
    margin-top: .7em;
    margin-left: -.2em;
    height: .4em;
    width: 3.6em;
    z-index: -1;
  }
`
const Text = Styled.p`
font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  color: #4e4e4e;
  line-height: 1.5;
`

const Resume = Styled.div`
    background: #222;
    width: 98%;
    margin: 80px auto 50px;
    font-family: "Inconsolata", monospace;
    &:before {
      border-radius: 6px 6px 0 0;
      content: '';
      background: #1A1A1A;
      width: 100%;
      display: block;
      height: 20px;
      position: relative;
      top: -4px;
    }
  &:after {
    border-radius: 0 0 6px 6px;
    content: '';
    background: #1A1A1A;
    width: 100%;
    display: block;
    height: 20px;
    position: relative;
    bottom: -4px;
  }
`

const Topbar = Styled.span`
background: #ffa200;
height: 7px;
width: 7px;
display: block;
border-radius: 7px;
position: relative;
top: -17px;
left: 22px;
&:before {
  content: '';
  background: #ff1700;
  height: 7px;
  width: 7px;
  display: block;
  border-radius: 7px;
  position: relative;
  top: 0;
  left: -13px;
}
&:after {
  content: '';
  background: #74ff00;
  height: 7px;
  width: 7px;
  display: block;
  border-radius: 7px;
  position: relative;
  top: -7px;
  left: 13px;
}
`

const Resumein = Styled.div`
  padding: 16px 20px 16px;
  color: #eff0f2;
`
const Ol = Styled.ol`
  counter-reset: item;
  list-style-type: none;
`
const LI = Styled.li`
  display: block;
  margin-bottom: 0px; 
  &:before {
    content: counter(item) "  "; 
    counter-increment: item 
  }
`
const Blue = Styled.span`
  color: #569cd6;
`
const Yellow = Styled.span`
  color: #dcdcaa;
`
const LightBlue = Styled.span`
  color: #9cdcfe;
`
const Pink = Styled.span`
  color: #c586c0;
`
const H3 = Styled.h3`
  color: #6a9955; 
  display: inline;
`

const H4 = Styled.h4`
  display: inline;
  color: #ef7c6d;
`
const AboutPage = () => (
  <Layout>
    <Title>About</Title>
    <Text>Hi, I'm Elias Emanuel Copa.</Text>
    <Text>
      I'm a Junior Web Developer. I do freelance web design and development for
      projects that I find interesting, challenging or exciting!
    </Text>
    <Text>
      I'm into analog photography, and have been doing it for over 3 years now.
      I'm inspired by a hot cup of coffee, excellent music, and Mario
      Benedetti poems.
    </Text>
    <Text>
      Please contact me if you would like to hire me, or just
      want to chat.
    </Text>
    <Resume>
      <Topbar/>
      <Resumein>
        <Ol>
          <LI>
            <H3>//Resume</H3>
          </LI>
          <li />
          <LI>
            <H4>//Education:</H4>
          </LI>
          <li />
          <LI>
            <Blue>Universidad</Blue> <Yellow>Tecnologica Nacional</Yellow>(
            <LightBlue>2018</LightBlue>, <LightBlue>actualidad</LightBlue>)
            &#123; <br />
          </LI>
          <LI>
            <Pink>Ingenieria en sistemas de informacion</Pink> &#125;
          </LI>
          <li />
          <LI>
            <Blue>Universidad</Blue> <Yellow>Tecnologica Nacional</Yellow>(
            <LightBlue>2018</LightBlue>, <LightBlue>actualidad</LightBlue>)
            &#123; <br />
          </LI>
          <LI>
            <Pink>Diplomatura en programacion .NET</Pink> &#125;
          </LI>
          <li />
          <LI>
            <Blue>Instituto</Blue> <Yellow>IT Master</Yellow>(
            <LightBlue>2014</LightBlue>, <LightBlue>2014</LightBlue>) &#123;{' '}
            <br />
          </LI>
          <LI>
            <Pink>Programador JAVA</Pink> &#125;
          </LI>
          <li />
        </Ol>
      </Resumein>
    </Resume>
  </Layout>
)

export default AboutPage
