import styled from 'styled-components';
import { devices } from '../resources/media';

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
    margin-top: ${({ mt }) => { return `calc(${mt.smallMobileMarginTop} + 50vh)` }};
    width: 100vw;
    height: 20vh;
    max-width: 256rem;

    @media ${devices.mobile} {
        margin-top: ${({ mt }) => { return `calc(${mt.mobileMarginTop} + 50vh)` }};
    }

    @media ${devices.tablet} {
        margin-top: ${({ mt }) => { return `calc(${mt.tabletMarginTop} + 50vh)` }};
    }

    @media ${devices.laptop} {
        margin-top: ${({ mt }) => { return `calc(${mt.laptopMarginTop} + 32rem)` }};
    }
    @media ${devices.desktop} {
        margin-top: ${({ mt }) => { return `calc(${mt.desktopMarginTop} + 32rem)` }};
    }

    @media ${devices.wideDesktop} {
        margin-top: ${({ mt }) => { return `calc(${mt.desktopMarginTop} + 32rem)` }};
    }
`

const Img = styled.img`
    @media ${devices.mobile} {
    }

    @media ${devices.tablet} {
    }

    @media ${devices.laptop} {
        max-height: 20vh;
    }
    @media ${devices.desktop} {
        max-height: 20vh;
    }

    @media ${devices.wideDesktop} {
        max-height: 20vh;
    }
`

function OverImage({ mtSizes }) {
    return (
        <Gallery mt={mtSizes}>
            <GalleryObj mt={mtSizes}>
                <Img src='/assets/images/tourney.jpg' alt="volleyball" />
            </GalleryObj>
        </Gallery>
    );
}

export default OverImage