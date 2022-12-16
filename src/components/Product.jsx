import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const InfoContainer = styled.div`
    opacity: 0; //the icons will be hidden, they will only show up when hovered over any particular product (Conatiner).
    width: 100%;
    height: 100%;
    position: absolute; //parent position : relative
    top: 0; //property of position:absolute
    left: 0; //property of position:absolute
    background-color: rgb(0,0,0,.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease;
    cursor: pointer;
   
`
const Container = styled.div`
    flex : 1;  //as the parent Component i.e, Products Component has display:flex
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex; //all items of the particular container will get flexed
    align-items: center; // we are doing this to center that 3 icons
    justify-content: center; // we are doing this to center that 3 icons
    background-color: #f3fbfd; 
    position: relative;
   
    &:hover ${InfoContainer}{ //we want that, this hover effect should get appllied on { InfoContainer Component } // so if want to do that hover effect from here then we should use this method of styled component.
    /* We can even do this directly by using hover effect inside the InfoContainer itself. */
    opacity: 1;
}
    
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius : 50%;
    background-color: white;
    position: absolute; //to fix the position of circle (as we are not getting the proper shape of the circle if the position is not set)
`
const Image = styled.img`
     height: 75%;
     z-index: 2;   // so the circle does not come above the image
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;  //so that icons will animate on hover

    &:hover{
       background-color: #fdf3f3;
       transform: scale(1.2);  //by default the icon size is scaled : 1 , but on hover it will get scaled to 1.2 (means size of icon will increase on hover)
    }

`
const Product = (props) => {
  return (
    <Container>
       <Circle/>
       <Image src = {props.item.img}/>
       <InfoContainer>
           <Icon>
              <ShoppingCartOutlined/>
           </Icon>
           <Icon>
              <SearchOutlined/>
           </Icon>
           <Icon>
              <FavoriteBorderOutlined/>
           </Icon>
       </InfoContainer>
    </Container>
  )
}

export default Product
