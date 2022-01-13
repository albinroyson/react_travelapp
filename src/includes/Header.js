import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <HeaderContainer>
                <LogoImage src={require("../../src/assets/images/logo.svg").default}>
                </LogoImage>

            <Rightbox>
                <Button>login</Button>
            </Rightbox>
        </HeaderContainer>
    )
}
const HeaderContainer =styled.div`
    width:90%;
    margin:0 auto;
    padding:30px 0;
    display:flex;
    justify-content: space-between;
    align-items:center;
    `;
const LogoImage =styled.img`
    width: 150px;
    display:block;
`
const Rightbox =styled.div`
display:flex;
align-items:center;
`
const Button =styled.button`
 background-color:#046bf7;
 border-radius:4px;
 padding: 13px 45px;
 border:none;
 `