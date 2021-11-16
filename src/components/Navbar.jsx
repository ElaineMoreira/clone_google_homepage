import React from 'react';
import styled from 'styled-components/macro';
import profileElaine from '../images/profileElaine.png';
import { Link } from 'react-router-dom';

// aprendendo a colocar estilo
const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
font-size: 14px;
`;
const LeftLinks = styled.div`
padding: 10px;
margin-left: 10px;

`;
const RightLinks = styled.div`
display: flex;
align-items: center;
padding: 10px;
margin-right: 16px;
`;
const NavLinks = styled(Link)`
padding: 0 8px;
text-decoration: none;
color: #000;
svg {
  height: 24px;
  width: 24px;
}
`;

const Navbar = () => {
    return (
        <Nav>
            <LeftLinks>
                <NavLinks to="/about"></NavLinks>
                <NavLinks to="/store"></NavLinks>
            </LeftLinks>
            <RightLinks>
                <NavLinks to="/gmail">Gmail</NavLinks>
                <NavLinks to="/images">Images</NavLinks>
                {/* adicionando css inline */}
                <NavLinks 
                    to="/" 
                    css={`
                        padding-right: 20px`
                        }>
                <svg focusable='false' viewBox='0 0 24 24'>
                    <path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,
                    -2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,
                    -2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,
                    20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,
                    2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,
                    2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,
                    -2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,
                    -2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,
                    -2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,
                    -2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,
                    -2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z' />
                </svg>
                </NavLinks>
                <Link to="/">
                    <img src={profileElaine} alt="profileElaine" />
                </Link>
            </RightLinks>
            
        </Nav>
    )
}

export default Navbar

