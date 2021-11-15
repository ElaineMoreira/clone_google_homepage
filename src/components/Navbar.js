import React from 'react';
import styled from 'styled-components';
import profileElaine from '../images/profileElaine.png';
import { Link } from 'react-router-dom';

// aprendendo a colocar estilo
const Nav = styled.nav`

`;
const LeftLinks = styled.div`
    
`;
const RightLinks = styled.div`
    
`;
const NavLinks = styled(Link)`
    
`;

const Navbar = () => {
    return (
        <Nav>
            <LeftLinks>
                <NavLinks to="/about">About</NavLinks>
                <NavLinks to="/store">Store</NavLinks>
            </LeftLinks>
            <RightLinks>
                <NavLinks to="/gmail">Gmail</NavLinks>
                <NavLinks to="/images">Images</NavLinks>
                <NavLinks to="/">
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

