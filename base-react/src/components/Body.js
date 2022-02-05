import styled from "styled-components";
import { devices } from "../resources/media";

import { Fragment, useEffect, useState } from "react";
import NavBar from './NavBar';


/**
 * Common css adjust vars
*/
const mobileMarginTop = '30rem';
const tabletMarginTop = '33rem';
const laptopMarginTop = '35rem';

const Container = styled.div.attrs({ className: "container" })`
`
const Parallax = styled.div.attrs({
    className: "parallax"
})`
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
    opacity: 100%;
`

const Surpise = styled.div.attrs({ className: "object-wrapper speed-1" })`
    right: 100%;

    @media ${devices.mobile} and {
        right: 0;
        width: 100vw;
        margin-top: ${mobileMarginTop};
    }
`
const Object3 = styled.div.attrs({ className: "object object-3" })`
    width: 50vw;
    height: 50vh;
    background-image: url("/assets/images/Toff.jpg");
    background-size: 100%;
    background-repeat: no-repeat;

    @media ${devices.mobile} {
        width: 100vw;
        margin-top: 8rem;
    }

    @media ${devices.tablet} {
        width: 100vw;
        margin-top: ${tabletMarginTop};
    }

    @media ${devices.laptop} {
        width: 46vw;
        margin-top: ${laptopMarginTop}
    }

  }
`
const About = styled.div.attrs({ className: "object-wrapper speed-10" })`
`
const Object3a = styled.div.attrs({ className: "object object-3" })`
    width: 100vw;
    height: 50vh;
    background: purple;

    @media ${devices.mobile} {
        margin-top: ${mobileMarginTop};
    }

    @media ${devices.tablet} {
        margin-top: ${tabletMarginTop};
    }

    @media ${devices.laptop} {
        margin-top: ${laptopMarginTop}
    }
`

const Welcome = styled.div.attrs({ className: "object-wrapper speed-1" })`

`
const Object4 = styled.div.attrs({ className: "object object-4" })`
    width: 100vw;
    height: 20vh;
    background: orange;

    @media ${devices.mobile} {
        margin-top: calc(${mobileMarginTop} + 50vh);
    }

    @media ${devices.tablet} {
        margin-top: calc(${tabletMarginTop} + 50vh);
    }

    @media ${devices.laptop} {
        margin-top: calc(${laptopMarginTop} + 50vh);
    }
`


function Body() {
    const [scrollPos, setScrollPos] = useState(0);
    const [showNav, setShowNav] = useState(true);

    /**
     * Checks scroll position
     */

    const onScroll = (e) => {
        const scrollY = e.target.scrollTop;
        setScrollPos(scrollY);
    };

    useEffect(() => {
        if (scrollPos > 100) {
            console.log("HIDE")
            setShowNav(false);
        } else {
            console.log("SHOW")
            setShowNav(true);
        };
    }, [scrollPos]);

    return (
        <Fragment>
            <Container>
                <NavBar show={showNav} />
                <Parallax onScroll={onScroll}>
                    <Surpise>
                        <Object3>blue</Object3>
                    </Surpise>
                    <About>
                        <Object3a>purple</Object3a>
                    </About>
                    <Welcome>
                        <Object4>orange</Object4>
                    </Welcome>
                    <div className="page-content">
                    </div>
                </Parallax>
            </Container>
        </Fragment>
    )
}

export default Body;