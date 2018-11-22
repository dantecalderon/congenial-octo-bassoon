import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Styled from 'styled-components'
//require("typeface-lato")
import Header from './header'
import './layout.css'

import bg from '../images/background.svg'

const Container = Styled.div `
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    background: url(${bg}) 0 0 repeat;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
  }
`
const Main = Styled.div `
  max-width: 960px;
  margin: 60px auto;
  min-height: 70vh;
  padding: 100px 5% 80px;
`


const Layout = ({ children }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
          <Main>
            {children} 
          </Main>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
