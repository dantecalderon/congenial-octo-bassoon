import React from 'react'
import Layout from '../components/layout'
import Styled from 'styled-components'
import Error from '../images/emojis/sad.png'
const Title = Styled.h1`
  font-family: 'Lato', sans-serif;
  letter-spacing: .05em;
  text-align: center;
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
    width: 6.2em;
    z-index: -1;
  }
`

const Text = Styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 400; 
  font-size: 1.2rem;
  color: #4e4e4e;
  line-height: 1.5;
  text-align: center;
`

const ErrorEmoji = Styled.img `
  width: 4em;
  align-self: center;
`

const NotFoundPage = () => (
  <Layout>
    <Title>NOT FOUND</Title>
    <Text><ErrorEmoji src={Error}></ErrorEmoji></Text>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Layout>
)

export default NotFoundPage
