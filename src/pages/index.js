import React from 'react'
import Styled from 'styled-components'
import Salute from '../images/emojis/salute.png'

import Layout from '../components/layout'

const Title = Styled.h1`
  font-family: 'Lato', sans-serif;
  letter-spacing: .05em;
  color: #23213C;
  font-size: 3rem;
  &:before {
    content: " ";
    background: #3BFD56;
    position: absolute;
    margin-top: 1.5em;
    margin-left: -.2em;
    height: .4em;
    width: 1.4em;
    z-index: -1;
  }
`
const Text = Styled.p`
font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  color: #4e4e4e;
  line-height: 1.5;
`

const SaluteEmoji = Styled.img `
  margin-bottom: 0;
  width: 1.7em;
`



const IndexPage = () => (
  <Layout>
    <Title>Hi!<SaluteEmoji src={Salute} /></Title>
    <Text>
      I'm Elias Emanuel Copa
      <br/>
      Full Stack Developer & Designer.
    </Text>
  </Layout>
)

export default IndexPage
