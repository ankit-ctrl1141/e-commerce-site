import React from "react"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"  //material icons
import styled from "styled-components"
import { sliderItems } from "../data.js"
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;  // parent position should be relative to have its child position as absolute
    overflow: hidden;  // to hide the overflow of slides
    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fdfbfb;
    border-radius: 50%; //so that arrow will be circular
    display: flex;
    align-items: center;  // vertically center
    justify-content: center;   // vertically horizontal
    position: absolute; //if we are using position : absolute then its parent should be position : relative.
    top: 0;  //property of position: absolute
    bottom: 0; //property of position: absolute
    left: ${(props) => props.direction === "left" && "10px"};  // props is recieved here
    right: ${(props) => props.direction === "right" && "10px"};  // props is recieved here
    margin: auto; 
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;  
`

const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transition: all 1.5s ease;
   transform: translateX(${(props)=> props.slideIndex * -100}vw); // slideIndex will be 0,1,2
   /* if transform : 0vw (first slide), 
   transform : -100 vw (second slide)
   transform : -200 vw (third slide)
   transform : -300 vw (nothing will show up)
   transform : 100vw (nothing will show up) */
`

const Slide = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   background-color: #${props => props.bg};  // "bg" is recieved as props
`
const ImgContainer = styled.div`
   height: 100%;
   flex: 1;  //can only be apllied if its parent is set to display: flex
`
const Image = styled.img`  
    height: 80%;
`

const InfoContainer = styled.div`
   flex: 1;  //can only be apllied if its parent is set to display: flex
   padding: 50px;
`
const Title = styled.h1`
   font-size: 78px;
`
const Description = styled.p`
   margin: 50px 0px;
   font-size: 20px;
   font-weight:500;
   letter-spacing: 3px;

`
const Button = styled.button`
   padding: 10px;
   font-size: 20px;
   background-color: transparent; // to remove that grayish background of button 
   cursor: pointer;
`
const Slider = () => {
   const [slideIndex, setSlideIndex] = React.useState(0)

   function handleClick(direction) {
      if(direction === "left"){
         setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
      }
      else{
         setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
      }
   }
   return (
      <Container>
         <Arrow direction="left" onClick={() => handleClick("left")}>  {/*We can pass props from our Styled Component */}
             {/*here we are using onClick handler as arrow function because we are passing a parameter to it. */}
            <ArrowLeftOutlined />
         </Arrow>
         <Wrapper slideIndex= {slideIndex}>
            {sliderItems.map((item) => (

               <Slide bg={item.bg}>
                  <ImgContainer>
                     <Image src={item.img}></Image>
                  </ImgContainer>
                  <InfoContainer>
                     <Title>{item.title}</Title>
                     <Description>{item.desc}</Description>
                     <Button>SHOP NOW</Button>
                  </InfoContainer>
               </Slide>
            ))}



         </Wrapper>
         <Arrow direction="right" onClick={() => handleClick("right")}>  {/*We can pass props from our Styled Component */}
         {/*here we are using onClick handler as arrow function () => because we are passing a parameter to it. */}
            <ArrowRightOutlined />
         </Arrow>
      </Container>
   )
}

export default Slider
