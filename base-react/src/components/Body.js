import styled from "styled-components";
import { devices } from "../resources/media";

import { Fragment, useEffect, useState } from "react";
import NavBar from './NavBar';


/**
 * Common css adjust vars
*/

const smallMobileMarginTop = '25rem';
const mobileMarginTop = '25rem';
const tabletMarginTop = '29rem';
const laptopMarginTop = '50rem';
const desktopMarginTop = '50rem';


const Container = styled.div.attrs({ className: "container" })`
`
const Parallax = styled.div.attrs({
    className: "parallax"
})`
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
    opacity: 100%;
`

const Surpise = styled.div.attrs({ className: "object-wrapper speed-4 container" })`
    margin-top: calc(${smallMobileMarginTop});
    right: 43%%;
    @media ${devices.mobile} {
        right: 0;
        width: 100vw;
        margin-top: calc(${mobileMarginTop} - 10vh);
    }

    @media ${devices.tablet} {
        right: 0;
        width: 100vw;
        margin-top: calc(${mobileMarginTop} - 5vh);
    }

    @media ${devices.laptop} {
        width: 100vw;
        margin-top: 0rem;
        transform: translateZ(-3px) scale(4);
    }

    @media ${devices.desktop} {
        right: 100rem;
        width: 100vw;
        margin-top: 36rem;
        transform: translateZ(-3px) scale(4);
    }

    @media ${devices.wideDesktop} {
        right: 100rem;
        width: 100vw;
        margin-top: 36rem;
        transform: translateZ(-3px) scale(4); 
    }
`
const SurpriseBlock = styled.div.attrs({ className: "object object-3" })`
    width: 86vw;
    height: 50vh;
    background-image: url("/assets/images/Toff.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    max-width: 256rem;
    margin-top: calc( ${smallMobileMarginTop} - -2rem);
    margin-left: 2rem;

    @media ${devices.mobile} {
        width: 76vw;
        margin-top: calc(${mobileMarginTop} - -13vh);
        margin-left: 6rem;
    }

    @media ${devices.tablet} {
        width: 55vw;
        margin-top: calc(${tabletMarginTop} - -2rem);
        margin-left: 16rem
    }

    @media ${devices.laptop} {
        width: 25vw;
        margin-top: calc(${laptopMarginTop} + -3rem);
        margin-left: 5rem;
    }
    @media ${devices.desktop} {
        width: 25vw;
        margin-top: calc(${desktopMarginTop} - 6vh);
        margin-left: 8rem;
    }

    @media ${devices.wideDesktop} {
        width: 15vw;
        margin-top: calc(${desktopMarginTop} - 6vh);
        margin-left: 6rem;
    }

    }
`
const About = styled.div.attrs({ className: "object-wrapper speed-1" })`
    @media ${devices.laptop} {
        display: flex;
        justify-content: flex-end;
        margin-right: 3.6rem;
        transform: translateZ(-5px) scale(6);
    }
    @media ${devices.desktop} {
        margin-top: ${desktopMarginTop};
        display: flex;
        justify-content: flex-end;
        margin-right: 8.6rem;
        transform: translateZ(-5px) scale(6);
    }

    @media ${devices.wideDesktop} {
        margin-top: ${desktopMarginTop};
        display: flex;
        justify-content: flex-end;
        margin-right: 8.6rem;
        transform: translateZ(-5px) scale(6);
    }
`

const AboutBlock = styled.div.attrs({ className: "object object-3" })`
    margin-top: ${smallMobileMarginTop};
    width: 100vw;
    height: 50vh;
    background: purple;
    max-width: 256rem;

    @media ${devices.mobile} {
        margin-top: ${mobileMarginTop};
    }

    @media ${devices.tablet} {
        margin-top: ${tabletMarginTop};
    }

    @media ${devices.laptop} {
        width: 63vw;
        margin-top: 26rem;
    }
    @media ${devices.desktop} {
        width: 63vw;
        margin-top: 18rem;
    }
    @media ${devices.wideDesktop} {
        width: 63vw;
        margin-top: 18rem;
    }
`

const Orange = styled.div.attrs({ className: "object-wrapper speed-20" })`
    @media ${devices.mobile} {

    }

    @media ${devices.tablet} {

    }

    @media ${devices.laptop} {
        transform: translateZ(-10px) scale(11);
    }
    @media ${devices.desktop} {
        transform: translateZ(-10px) scale(11);
    }
    @media ${devices.wideDesktop} {
        transform: translateZ(-10px) scale(11);
    }
`
const Object4 = styled.div.attrs({ className: "object object-4" })`
margin-top: calc(${smallMobileMarginTop} + 50vh);
width: 100vw;
height: 20vh;
background: orange;
max-width: 256rem;

@media ${devices.mobile} {
    margin-top: calc(${mobileMarginTop} + 50vh);
}

@media ${devices.tablet} {
    margin-top: calc(${tabletMarginTop} + 50vh);
}

@media ${devices.laptop} {
    margin-top: calc(${laptopMarginTop} + 34vh);
}
@media ${devices.desktop} {
    margin-top: calc(${desktopMarginTop} + 54vh);
}
@media ${devices.wideDesktop} {
    margin-top: calc(${desktopMarginTop} + 54vh);
}
`


const Gallery = styled.div.attrs({ className: 'object-wrapper speed-6' })`

`

const GalleryObj = styled.div.attrs({ className: "object object-4" })`
margin-top: calc(${smallMobileMarginTop} + 50vh);
width: 100vw;
height: 20vh;
background: red;
max-width: 256rem;

@media ${devices.mobile} {
    margin-top: calc(${mobileMarginTop} + 50vh);
}

@media ${devices.tablet} {
    margin-top: calc(${tabletMarginTop} + 50vh);
}

@media ${devices.laptop} {
    display: none;
    margin-top: calc(${laptopMarginTop});
}
@media ${devices.desktop} {
    display: none;
    margin-top: calc(${desktopMarginTop});
}

@media ${devices.wideDesktop} {
    display: none;
    margin-top: calc(${desktopMarginTop});
}
`

const PageContent = styled.div.attrs({ className: "page-content" })`
    @media ${devices.laptop} {
        height: 300vh;
    }
    @media ${devices.desktop} {
        height: 300vh;
    }
    @media ${devices.wideDesktop} {
        height: 300vh;
    }
`


function Body() {
    const [scrollPos, setScrollPos] = useState(0);
    const [showNav, setShowNav] = useState(true);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    /**
     * Checks scroll position
     */

    const onScroll = (e) => {
        const scrollY = e.target.scrollTop;
        setScrollPos(scrollY);
    };


    function handleResize() {
        const height = window.innerHeight || null;
        const width = window.innerWidth || null;
        return { width, height };
    }

    function getWindowDimensions() {
        const hasWindow = typeof window !== 'undefined';
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const hasWindow = typeof window !== 'undefined';
    useEffect(() => {

        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    useEffect(() => {
        if (scrollPos > 100 && windowDimensions.width < 1024) {
            console.log("HIDE")
            setShowNav(false);
        } else {
            console.log("SHOW")
            setShowNav(true);
        };
        console.log("W: ", windowDimensions)
    }, [scrollPos]);

    return (
        <Fragment>
            <Container>
                <NavBar show={showNav} />
                <Parallax onScroll={onScroll}>
                    <Surpise>
                        <SurpriseBlock wd={windowDimensions}>blue</SurpriseBlock>
                    </Surpise>
                    <About>
                        <AboutBlock >
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a nunc interdum, molestie sem a, volutpat tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut pulvinar risus, eget mollis sapien. Duis eleifend ante vel cursus ullamcorper. Praesent blandit, odio quis pellentesque molestie, lectus nisl maximus leo, et interdum nibh ante in mi. Integer arcu arcu, aliquet at rutrum eu, sollicitudin at ligula. Nulla hendrerit, mi ut sollicitudin finibus, nisi sapien aliquet mi, nec ultricies augue est nec diam.

                                Aliquam hendrerit ut libero vitae lobortis. Etiam magna dolor, ornare eu tellus id, fermentum euismod diam. Donec at aliquam odio. Aenean imperdiet nunc tincidunt nibh euismod malesuada. Pellentesque eget semper augue. Duis a pulvinar ipsum. Aenean semper euismod dapibus. Sed ultricies faucibus ullamcorper. Aenean sagittis ipsum non lorem scelerisque, id sodales dui interdum.

                                Aenean congue libero vitae ante molestie facilisis. Sed laoreet odio vel lacinia bibendum. Curabitur blandit gravida ante, ac ultricies nisi euismod nec. Fusce quis finibus tellus. Mauris tempor mollis nisl, ut consequat lectus iaculis in. Morbi fringilla quis lacus nec egestas. Vivamus id tellus at nunc consequat convallis. Aenean vitae lobortis lacus, nec euismod nisl. Proin ac arcu arcu. Cras pharetra augue ac consectetur ultrices.</div>
                        </AboutBlock>
                    </About>
                    <Orange>
                        <Object4>orange</Object4>
                    </Orange>
                    <Gallery>
                        <GalleryObj> red </GalleryObj>
                    </Gallery>
                    <PageContent />
                </Parallax>
            </Container>
        </Fragment>
    )
}

export default Body;