import styled from "styled-components";
import { Fragment } from "react";

const Container = styled.div.attrs({ className: "container wrapper" })`
`
const ParallaxContainer = styled.div.attrs({ className: "parallax-container" })``

const Image = styled.img.attrs({ src: "/assets/images/Toff.jpg" })`
    max-width: 100%;
    opacity: 35%;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
`
const Background = styled.div.attrs({ className: "parallax-background" })`
`
const ForegroundL1 = styled.div.attrs({ className: "parallax-foreground" })`
`
const ForegroundL2 = styled.div.attrs({ className: "parallax-foreground" })`
    transform: translateZ(1px) scale(0.625);
`

function Body() {
    return (
        <Fragment>
            <Container>
                <ParallaxContainer>
                    <Background>
                        <Image />
                    </Background>
                    <ForegroundL1>
                        <div class="foreground__content">
                            <h1>Parallax L1</h1>
                        </div>
                    </ForegroundL1>
                    <ForegroundL2>
                        <div class="foreground__content">
                            <h1>Parallax L2</h1>
                        </div>
                    </ForegroundL2>
                </ParallaxContainer>
            </Container>
        </Fragment>
    )
}

export default Body;