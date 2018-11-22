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
    width: 4.9em;
    z-index: -1;
  }
`

const Text = Styled.p`
font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  color: #4e4e4e;
  line-height: 1.5;
`

const Email = Styled.a`
  font-family: 'Lato', sans-serif;
  color: #3BFD56;
  text-decoration: none;
`


const ContactPage = () => (
  <Layout>
    <Title>
      Contact
    </Title>
    <Text>
      If you want to get in touch with me free feel to write me at <Email href="mailto:eliasemanuelcopa@outlook.com">eliasemanuelcopa@outlook.com</Email>
    </Text>
  </Layout>
)

export default ContactPage
