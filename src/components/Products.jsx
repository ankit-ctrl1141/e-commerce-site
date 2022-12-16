import React from 'react'
import styled from 'styled-components'
import {popularProducts} from "../data.js"
import Product from './Product.jsx'
const Container = styled.div`
    padding: 20px;
    display: flex; //Its effect wiil be seen on its Child Component i.e, Product Component
    flex-wrap:wrap; //The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
    justify-content: space-between;
   
`
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item)=>{
        return (
            <Product item = {item} key = {item.id}/>
        )
      })}
    </Container>
  )
}

export default Products
