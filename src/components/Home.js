import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <TextBox>
            <h1>MEMORIES</h1>
            <p><b>Great words live by</b></p><br/>
            
           
            
            </TextBox>
        </Container>
    )
}

export default Home

const Container = styled.div`
background-image: url('./images/img2.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
`
const TextBox = styled.div`
padding-top: 22vh;
font-size: 18px;
    text-align: center;
    flex-grow: 1;
    color: white;
    b{
        color: white;
    }
    h1{
        color:white;
        font-size: 50px;
    }
`