import React from 'react'
import styled from 'styled-components'

function section() {
    return (
        <Container>
            <TextBox>
                <h1>MEMORIES</h1><br />
                <SmallText>
                <p> Memories is an <b>UPVOTE</b> site that helps you find the best near you.<br/>
                We have curated the best places to visit when you travel.<br />
                Something is exciting about <b>exploring a new place every year.</b> <br/>
                It can be a new country, a new city, or an interesting spot near your Home Town. <br />
                </p>
                </SmallText>
            </TextBox>
        </Container>
    )
}

export default section

const Container = styled.div`
background-color: #e6bfa5;
font-family: Alegreya Sans, humanist sans serif;
`
const TextBox = styled.div`
padding-top: 2vh;
margin-botton: 5vh;
h1{
    font-size: 38px;
    font-weight: 10px;
    padding: 5px;
}
p{
    font-size:25px;
   
    padding:5px;
}

b{
    
}

`
const SmallText = styled.div`
justify-content: center;
`