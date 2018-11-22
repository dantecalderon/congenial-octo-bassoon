import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import Dev from '../images/emojis/developer.png'
const Header = Styled.header `
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-between;
    -webkit-justify-content: space-between;
    -ms-flex-pack: space-between;
    justify-content: space-between;
    position: fixed;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    top: 0;
    width: 100%;
    background: rgba(255,255,255,.8);;
`
const Nav = Styled.nav `

`

const Ul = Styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
`
const Li = Styled.li `
    margin: 0;  
`
const Zelda = Styled(Link) `
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    color: #23213C;
    font-size: 14px;
    padding: 2em .75em .85em;
    font-weight: 900;
    text-transform: uppercase;
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    display: block;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    &:hover {
        border-bottom: 4px solid #3BFD56;
    }
`
const DevEmoji = Styled.img `
  margin-bottom: 0;
  width: 4rem;
  padding: .75em .75em .85em;
  
`


const Footer = ({ siteTitle }) => (
    <Header>
        <Link to="/">
            <DevEmoji src={Dev} />
        </Link>
        <Nav>
            <Ul>
                <Li>
                    <Zelda to="/about">About</Zelda>
                </Li>
                <Li>
                    <Zelda to="/projects">Projects</Zelda>
                </Li>
                <Li>
                    <Zelda to="/contact">Contact</Zelda>
                </Li>
            </Ul>
        </Nav>
    </Header>
)

export default Footer
