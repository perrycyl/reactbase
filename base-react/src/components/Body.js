import styled from "styled-components";
import { devices } from "../resources/media";

import { Fragment, useEffect, useState } from "react";
import NavBar from './NavBar';
import About from './About';
import OverImage from './OverImage';
import UnderImage from "./UnderImage";


/**
 * Common css adjust vars
*/

const mt = {
    smallMobileMarginTop: '25rem',
    mobileMarginTop: '25rem',
    tabletMarginTop: '29rem',
    laptopMarginTop: '50rem',
    desktopMarginTop: '50rem',

}


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
    margin-top: calc(${mt.smallMobileMarginTop});
    right: 43%%;
    @media ${devices.mobile} {
        right: 0;
        width: 100vw;
        margin-top: calc(${mt.mobileMarginTop} - 10vh);
    }

    @media ${devices.tablet} {
        right: 0;
        width: 100vw;
        margin-top: calc(${mt.mobileMarginTop} - 5vh);
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
    margin-top: calc( ${mt.smallMobileMarginTop} - -2rem);
    margin-left: 2rem;

    @media ${devices.mobile} {
        width: 76vw;
        margin-top: calc(${mt.mobileMarginTop} - -13vh);
        margin-left: 6rem;
    }

    @media ${devices.tablet} {
        width: 55vw;
        margin-top: calc(${mt.tabletMarginTop} - -2rem);
        margin-left: 16rem
    }

    @media ${devices.laptop} {
        width: 25vw;
        margin-top: calc(${mt.laptopMarginTop} + -23rem);
        margin-left: 5rem;
    }
    @media ${devices.desktop} {
        width: 25vw;
        margin-top: calc(${mt.desktopMarginTop} + -23rem);
        margin-left: 8rem;
    }

    @media ${devices.wideDesktop} {
        width: 15vw;
        margin-top: calc(${mt.desktopMarginTop} + 23rem);
        margin-left: 6rem;
    }

    }
`


const Gallery = styled.div.attrs({ className: 'object-wrapper speed-6' })`
    @media ${devices.laptop} {
        transform: translateZ(-5px) scale(6);
    }
    @media ${devices.desktop} {
        transform: translateZ(-5px) scale(6);
    }

    @media ${devices.wideDesktop} {
        transform: translateZ(-5px) scale(6);
    }
`

const GalleryObj = styled.div.attrs({ className: "object object-4" })`
    margin-top: calc(${mt.smallMobileMarginTop} + 50vh);
    width: 100vw;
    height: 20vh;
    background: red;
    max-width: 256rem;

    @media ${devices.mobile} {
        margin-top: calc(${mt.mobileMarginTop} + 50vh);
    }

    @media ${devices.tablet} {
        margin-top: calc(${mt.tabletMarginTop} + 50vh);
    }

    @media ${devices.laptop} {
        margin-top: calc(${mt.laptopMarginTop} + 32rem);
    }
    @media ${devices.desktop} {
        margin-top: calc(${mt.desktopMarginTop} + 32rem);
    }

    @media ${devices.wideDesktop} {
        margin-top: calc(${mt.desktopMarginTop} + 32rem);
    }
`

const PageContent = styled.div.attrs({ className: "page-content" })`
    @media ${devices.laptop} {
        height: 400vh;
    }
    @media ${devices.desktop} {
        height: 400vh;
    }
    @media ${devices.wideDesktop} {
        height: 400vh;
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
                    <About mtSizes={mt} />
                    <UnderImage mtSizes={mt} />
                    <OverImage mtSizes={mt} />
                    <PageContent />
                </Parallax>
            </Container>
        </Fragment>
    )
}

export default Body;