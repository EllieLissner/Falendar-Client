import styled, { keyframes }  from 'styled-components'

const fade = keyframes`
    0% {
        opacity: 0;
    }

    25% {
        opacity: .25;
    }

    50% {
        opacity: .5;
    }

    100% {
        opacity: 1;
    }
`

const TitleHolder = styled.title`
    
    text-align: center;
   
    `

const Header = styled.h1`
    color: black;
    animation: ${fade} 5s linear infinite;
    font-size: 35px;
`
const SubHeader = styled(Header)`
    animation: ${fade} 5s linear infinite;
    font-size: 24px;
    color: black;
`

export default function Title () {
    return(
        <div>
            <TitleHolder>
                <Header>FALENDAR</Header>
                <SubHeader>Schedule Better</SubHeader>
            </TitleHolder>    
        </div>    
    )

}