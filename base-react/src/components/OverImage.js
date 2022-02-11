import styled from 'styled-components';
import { devices } from '../resources/media';

const Gallery = styled.div.attrs({ className: 'object-wrapper speed-6' })`
    @media ${devices.laptop} {
        transform: translateZ(-4px) scale(5);
    }
    @media ${devices.desktop} {
        transform: translateZ(-4px) scale(5);
    }

    @media ${devices.wideDesktop} {
        transform: translateZ(-4px) scale(5);
    }
`

const GalleryObj = styled.div.attrs({ className: "object object-4" })`
    margin-top: ${({ mt }) => { return `calc(${mt.smallMobileMarginTop} + 50vh)` }};
    width: 100vw;
    height: 20vh;
    max-width: 256rem;
    z-index: 2;

    @media ${devices.mobile} {
        margin-top: ${({ mt }) => { return `calc(${mt.mobileMarginTop} + 50vh)` }};
    }

    @media ${devices.tablet} {
        margin-top: ${({ mt }) => { return `calc(${mt.tabletMarginTop} + 50vh)` }};
    }

    @media ${devices.laptop} {
        margin-top: ${({ mt }) => { return `calc(${mt.laptopMarginTop} + 54rem)` }};
    }
    @media ${devices.desktop} {
        margin-top: ${({ mt }) => { return `calc(${mt.desktopMarginTop} + 65rem)` }};
    }

    @media ${devices.wideDesktop} {
        margin-top: ${({ mt }) => { return `calc(${mt.desktopMarginTop} + 57rem)` }};
    }
`

const Img = styled.img`
    width: 150%;

    @media ${devices.mobile} {
        width: 150%;
    }

    @media ${devices.tablet} {
        width: 150%;
    }

    @media ${devices.laptop} {
        width: 80%;
    }
    @media ${devices.desktop} {
        width: 80%;
    }

    @media ${devices.wideDesktop} {
        width: 80%;
    }
`

const UpArrow = styled.div`
    position: absolute;
    transform:rotate(-90deg);
    display: block;
    margin-top: ${({ mt }) => { return `calc(${mt.smallMobileMarginTop} + 49vh)` }};
    margin-left: calc((100vw - 5rem)/2);
    z-index: 2;
    font-size: 4rem;
    opacity: 14%;
    color: white;

    @media ${devices.mobile} {
        background: Black;
    }

    @media ${devices.tablet} {
        display: none;
        background: Black;
    }

    @media ${devices.laptop} {
        display: none;
        background: Black;
    }
    @media ${devices.desktop} {
        display: none;
        background: Black;
    }

    @media ${devices.wideDesktop} {
        display: none;
        background: Black;
    }
`

const DragIndicator = styled.div`
    position: absolute;
    width: 8rem;
    height: 4rem;
    background: transparent;
    margin-top: ${({ mt }) => { return `calc(${mt.smallMobileMarginTop} + 45.5vh)` }};
    margin-left: calc((100vw - 8rem)/2);
    border-radius: 7rem 7rem 0rem 0rem;
    z-index: 1;
;

    @media ${devices.mobile} {
        margin-top: ${({ mt }) => { return `calc(${mt.mobileMarginTop} + 50vh)` }};
    }

    @media ${devices.tablet} {
        margin-top: ${({ mt }) => { return `calc(${mt.tabletMarginTop} + 50vh)` }};
    }

    @media ${devices.laptop} {
        display: none;
        margin-top: ${({ mt }) => { return `calc(${mt.laptopMarginTop} + 54rem)` }};
    }
    @media ${devices.desktop} {
        display: none;
        margin-top: ${({ mt }) => { return `calc(${mt.desktopMarginTop} + 65rem)` }};
    }

    @media ${devices.wideDesktop} {
        display: none;
        margin-top: ${({ mt }) => { return `calc(${mt.desktopMarginTop} + 69rem)` }};
    }
`

function OverImage({ mtSizes }) {
    return (
        <Gallery mt={mtSizes}>
            <UpArrow mt={mtSizes}>&raquo;</UpArrow>
            <DragIndicator mt={mtSizes} />
            <GalleryObj mt={mtSizes}>
                <Img src='/assets/images/tourney.jpg' alt="volleyball" />
            </GalleryObj>
        </Gallery>
    );
}

export default OverImage