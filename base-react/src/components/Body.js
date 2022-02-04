import styled from "styled-components";
import { Fragment, useEffect, useState } from "react";
import NavBar from './NavBar';

const Container = styled.div.attrs({ className: "container" })`
`
const Parallax = styled.div.attrs({
    className: "parallax"
})`
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
    opacity: 100%;
`
const Speed3 = styled.div.attrs({ className: "object-wrapper speed-1" })`
`
const Object3 = styled.div.attrs({ className: "object object-3" })`
    width: 100vw;
    height: 50vh;
    background-image: url("/assets/images/Toff.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
`
const Speed6 = styled.div.attrs({ className: "object-wrapper speed-6" })`
`
const Object6 = styled.div.attrs({ className: "object object-3" })`
    width: 100vw;
    height: 50vh;
    background: purple;
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
                    <Speed3>
                        <Object3>blue</Object3>
                    </Speed3>
                    <Speed6 className="object-wrapper speed-6">
                        <Object6>purple</Object6>
                    </Speed6>
                    <div className="page-content">
                    </div>
                </Parallax>
            </Container>
        </Fragment>
    )
}

export default Body;