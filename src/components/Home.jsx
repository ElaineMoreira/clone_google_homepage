import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
 display: flex;
 flex-direction : column;
`
const LogoSection = styled.div`
    display:flex;
    flex-direction : column;
    align-items: center;
    min-height: 290px;
    height: calc(100% - 560px);
    img {
        width:270px;
        height: 90px;
        margin-top: auto;
    }
    `
const SearchSection = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Form = styled.div``
const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 0 14px;
    background: #fff;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    z-index: 3;
    height: 44px;
    margin: 0 auto;
    max-width: 580px;
`
const SearchIcon = styled.div`
    color: #9aa0a6;
    height: 30px;
    width: 30px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    svg {
        fill: #9aa0a6;
    }
`
const SearchInput = styled.div`
    display: flex;
    flex: 1;
    background-color: transparent;
    height: 40px;
    border: none;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.87);
    word-wrap: break-word;
    outline: none;
    height: 30px;
    font-size: 16px;
`
const VoiceIcon = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    border: 0;
    background: transparent;
    outline: none;
    padding: 0 8px;
    width: 40px;
    line-height: 40px;
    height: 40px;
    svg {
        height: 24px;
        width: 24px;
        vertical-align: middle;
    }
`
const ButtonSection = styled.div`
    display: flex;
    justify-content: center;
    height: 70px;
    padding-top: 18px;
    top: 50px;
    z-index: 0;
    button {
        background-color: #f8f9fa;
        border: 1px solid #f8f9fa;
        border-radius: 5px;
        color: #3c4043;
        font-family: roboto, arial, sans-serif;
        font-size: 14px;
        margin: 11px 4px;
        padding: 0 16px;
        line-height: 27px;
        height: 37px;
        min-width: 50px;
        text-align: center;
        cursor: pointer;
    }
`
const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    color: #3c4043;
    margin-top: 120px;
    font-size: 15px;
`
const NavFooterOne = styled.div`
    display: flex;
`
const NavFooterTwo = styled.div`
    display: flex;
`
const NavLink = styled.div`
    padding: 10px;
    margin-left: 10px;`

const Home = () => {
    return (
        <Container>
            <LogoSection>
                <img 
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                alt="logo_google"
                />
            </LogoSection>
            <SearchSection>
                <Form action="/" method="GET" role="search">
                    <Search>
                        <SearchIcon>
                            <svg 
                                focusable="false" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24"
                            >
                                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 
                                3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 
                                5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </SearchIcon>
                        <SearchInput type="text"/>
                        <VoiceIcon>
                        <svg
                focusable='false'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill='#4285f4'
                  d='m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z'
                />
                <path fill='#34a853' d='m11 18.08h2v3.92h-2z' />
                <path
                  fill='#fbbc05'
                  d='m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z'
                />
                <path
                  fill='#ea4335'
                  d='m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z'
                />
              </svg>
                        </VoiceIcon>
                    </Search>
                </Form>
                <ButtonSection>
                    <button>Google Search</button>
                    <button>I'm feeling Lucky</button>
                </ButtonSection>
                <FooterLinks>
                    <NavFooterOne>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/about">Advertising</NavLink>
                        <NavLink to="/about">Business</NavLink>
                        <NavLink to="/about">How the search works</NavLink>
                    </NavFooterOne>
                    <NavFooterTwo>
                        <NavLink to="/about">Privacy</NavLink>
                        <NavLink to="/about">Terms</NavLink>
                        <NavLink to="/about">Settings</NavLink>
                    </NavFooterTwo>
                </FooterLinks>
            </SearchSection>
        </Container>
    )
}

export default Home
