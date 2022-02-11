import styled from "styled-components";
import { devices } from "../resources/media";

const AboutContent = styled.div.attrs({ className: "object-wrapper speed-1" })`
    @media ${devices.laptop} {
        display: flex;
        justify-content: flex-end;
        margin-right: 3.6rem;
        transform: translateZ(-2px) scale(3);
    }
    @media ${devices.desktop} {
        margin-top: 32rem;
        display: flex;
        justify-content: flex-end;
        margin-right: 12.6rem;
        transform: translateZ(-2px) scale(3);
    }

    @media ${devices.wideDesktop} {
        margin-top: 32rem;
        display: flex;
        justify-content: flex-end;
        margin-right: 12.6rem;
        transform: translateZ(-2px) scale(3);
    }
`

const Container = styled.div.attrs({ className: "object object-3" })`
    margin-top: 17rem;
    width: 100vw;
    height: 88vh;
    background: white;
    max-width: 170rem;

    @media ${devices.mobile} {
        margin-top: ${(props) => props.mtSizes.mobileMarginTop};
    }

    @media ${devices.tablet} {
        margin-top: 36rem;
        width: 97vw;
        margin-right: 20.4vw;
    }

    @media ${devices.laptop} {
        width: 39vw;
        margin-top: 30rem;
        margin-right: 20.4vw;
    }
    @media ${devices.desktop} {
        width: 36vw;
        margin-top: 17rem;
        margin-right: 21.4vw;
    }
    @media ${devices.wideDesktop} {
        width: 36vw;
        margin-top: 18rem;
        margin-right: 18.4vw;
    }
`
const Text = styled.div`
    padding: 0 4.2rem 0 4.2rem;
    text-align: justify;
    font-size: 1.8rem;
    &::first-letter {
        font-size: 300%;
        color: red;
    }
    @media ${devices.mobile} {
        
    }

    @media ${devices.tablet} {
        
    }

    @media ${devices.laptop} {
        
    }
    @media ${devices.desktop} {
        font-size: 2.2rem;
    }
    @media ${devices.wideDesktop} {
       font-size: 2.2rem;
    }
`


function About({ mtSizes }) {

    return (
        <AboutContent mtSizes={mtSizes}>
            <Container mtSizes={mtSizes}>
                <Text>
                    Welcome!<br /><br />
                    It is Perry. I write code, play sports, get curious about building effective and efficient systems. My love for software development made me take the plunge to a career change years ago and here I am now.<br /><br />
                    I am proficient in React (Styled Components, React Router, Redux), Python + Flask, and had some experience with Ruby on Rails. Developing in-house tools that integrate CI/CD, Kubernetes, Docker, SQL, JWT based authentication, and API integration, I have come to a point in my journey to take the next step into challenging myself to obtaining the AWS Solutions Architect certification.
                    <br /><br />
                    Outside of the work am fascinated by, I’ve picked up the camera again in conjunction with a new hobby in cycling. Party pace cycling along with a camera really changes how I see the city I grew up in.
                    <br /><br />
                    I am always happy new people, particularly people in software development industry. There is a lot for me to be curious about and learn so do not hesitate to reach out and let’s have a conversation.
                </Text>
            </Container>
        </AboutContent>
    );
}

export default About