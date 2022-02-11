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
    transform: translateZ(-3px) scale(4);
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
    display: None;
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
        display: block;
        width: 27vw;
        margin-top: calc(${mt.laptopMarginTop} + -23rem);
        margin-left: 13rem;
    }
    @media ${devices.desktop} {
        display: block;
        width: 27vw;
        margin-top: calc(${mt.desktopMarginTop} + -37rem);
        margin-left: 24rem;
    }

    @media ${devices.wideDesktop} {
        display: block;
        width: 16vw;
        margin-top: calc(${mt.desktopMarginTop} + -30rem);
        margin-left: 59rem;
    }

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
        height: 500vh;
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
        if (scrollPos > 100) {
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
                        <SurpriseBlock wd={windowDimensions} />
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