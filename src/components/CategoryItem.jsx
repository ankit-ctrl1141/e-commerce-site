import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    flex: 1; //giving Container equal widths for each items
    margin: 3px;
    height: 75vh; //height of the Container only
    position: relative;  //as its child's (Info) position is set to absolute
`
const Image = styled.img`
    width: 100%; // so that image can have 100% width inside the container
    height: 100%; // so that image can have 100% height inside the container
    object-fit: cover;  // property of img in CSS

    ${mobile({height : "50vh"})}
`
const Info = styled.div`
    position: absolute; //its parent position should be relative then only it will work
    top: 0;   //property of (position : absolute)
    left: 0;   //property of (position : absolute)
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
`
const Title = styled.h1`
    color: white;
    margin-bottom : 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: #747474;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
`
const CategoryItem = (props) => {
  return (
    <Container>
      <Image src={props.item.img}/>
      <Info>
        <Title>{props.item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
