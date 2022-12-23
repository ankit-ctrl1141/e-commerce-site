import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import {mobile} from "../responsive"

import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
   
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding : "10px 0"})}
`
const Left = styled.div`
    flex: 1;  //for equal width(considered in unit)
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display : "none"})}
`
const SearchContainer = styled.div`
   border: 0.5px solid lightgray;
   display: flex;
   align-items: center;  //vertically center
   margin-left: 25px;
   padding: 5px;
   ${mobile({marginLeft:"11px"})}
`
const Input = styled.input` //input Box
   border: none;
   ${mobile({width : "50px"})}

`
const Center = styled.div`
    flex: 1;  //for equal width(considered in unit)
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize : "24px",marginLeft: "5px"})}
`
const Right = styled.div`
    flex: 1;  //for equal width(considered in unit)
    display: flex;
    align-items: center;
    justify-content: flex-end; //end of the flex box
    ${mobile({flex: 2, justifyContent: "flex-start",marginLeft:"8px"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize : "12px" , marginLeft : "4px"})}
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{color:"gray",fontSize : 16 }}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo> Shopigo.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>

    </Container>
  )
}

export default Navbar
