import React from 'react'
import styled from 'styled-components'

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
                
            </RightLinks>
            
        </Nav>
    )
}

export default Navbar

