import styled from 'styled-components';
import { devices } from '../resources/media';

const Object4 = styled.div.attrs({ className: "object object-4" })`
    margin-top: calc(${({ mt }) => mt.smallMobileMarginTop} + 50vh);
    width: 100vw;
    height: 20vh;
    max-height: 20vh;
    max-width: 256rem;
    filter: grayscale(1);
    

    &:hover {
        background: white;
        filter: grayscale(0);
        transition: all 1.5s;
    }

    @media ${devices.mobile} {
        margin-top: calc(${({ mt }) => mt.mobileMarginTop} + 50vh);
    }

    @media ${devices.tablet} {
        margin-top: calc(${({ mt }) => mt.tabletMarginTop} + 50vh);
    }

    @media ${devices.laptop} {
        margin-top: calc(${({ mt }) => mt.laptopMarginTop} + 32rem);
    }
    @media ${devices.desktop} {
        margin-top: calc(${({ mt }) => mt.desktopMarginTop} + 54vh);
        
    }
    @media ${devices.wideDesktop} {
        margin-top: calc(${({ mt }) => mt.desktopMarginTop} + 54vh);
        
    }

`

const UnderImageContent = styled.div.attrs({ className: "object-wrapper speed-20" })`

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

const Obj4Image = styled.img`
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

function UnderImage({ mtSizes }) {
    return (
        <UnderImageContent>
            <Object4 mt={mtSizes}>
                <Obj4Image src='/assets/images/lake.jpg' alt="lake" />
            </Object4>
        </UnderImageContent>
    );
}

export default UnderImage