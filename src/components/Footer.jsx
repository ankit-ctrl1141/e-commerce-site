import { Instagram, IntegrationInstructions, LinkedIn, MailOutline, Phone, Room, Twitter, YouTube } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection : "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    
`
const Description = styled.p`
    margin: 20px 0px;   //only top and bottom
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    padding: 0;    // when you create "ul" it has its own margin and padding
    margin: 0;    // when you create "ul" it has its own margin and padding
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#f3f1f1"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Shopigo.</Logo>
                <Description>There are many variations of passages of LoremIpsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slighlty believable.
                </Description>
                <SocialContainer>
                    <SocialIcon bg="3B5999">
                        <LinkedIn />
                    </SocialIcon>
                    <SocialIcon bg="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg="E60023">
                        <YouTube />
                    </SocialIcon>
                    <SocialIcon bg="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Customer Care</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <IntegrationInstructions style={{marginRight:"10px"}} />Developed By: Ankit Kumar Verma</ContactItem>
                <ContactItem> <Room style={{marginRight:"10px"}} /> Hostel-125, MJPRU, Bareilly, UP(India) </ContactItem>
                <ContactItem> <Phone style={{marginRight:"10px"}}/> + 123456789 </ContactItem>
                <ContactItem> <MailOutline style={{marginRight:"10px"}} /> contact@ankit08.dev</ContactItem>
                
                <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}


export default Footer
