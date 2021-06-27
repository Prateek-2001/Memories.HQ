import React from 'react'
import styled from 'styled-components'


function Header() {
    return (
        <Container>
            <LeftMenu>
            <a href="#">
                <img src="../public/images/logo.png" />
            </a>
            </LeftMenu>
            <RightMenu>
                <a href="App.js">Home</a>
                <a href="https://airtable.com/shrn4Pz9L15oKrZuX">List a Place+</a>
                <a href="https://tinyurl.com/careersatmemories">Careers</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfE9R7AVPoURu49Z7Oq1VX0arWxFhdoGWrjyrhSab52h9lp6Q/viewform">Creating Memories</a>
            </RightMenu>
        </Container>

    )
}

export default Header

const Container = styled.div`
display: flex;
min-height: 60px;
align-items: center;
justify-content: space-between;
padding: 0 20px;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 10;

`
const LeftMenu = styled.div`

img{
    height: 70px;
    width: 70px;
}

`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    font-size: large;
    padding-right: 15px;
    color: white;

}
`