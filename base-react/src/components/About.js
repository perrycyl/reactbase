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
        margin-top: ${(props) => props.mtSizes.desktopMarginTop};
        display: flex;
        justify-content: flex-end;
        margin-right: 12.6rem;
        transform: translateZ(-2px) scale(3);
    }

    @media ${devices.wideDesktop} {
        margin-top: ${(props) => props.mtSizes.desktopMarginTop};
        display: flex;
        justify-content: flex-end;
        margin-right: 12.6rem;
        transform: translateZ(-2px) scale(3);
    }
`

const Container = styled.div.attrs({ className: "object object-3" })`
    margin-top: ${(props) => props.mtSizes.smallMobileMarginTop};
    width: 100vw;
    height: 50vh;
    background: purple;
    max-width: 256rem;

    @media ${devices.mobile} {
        margin-top: ${(props) => props.mtSizes.mobileMarginTop};
    }

    @media ${devices.tablet} {
        margin-top: ${(props) => props.mtSizes.tabletMarginTop};
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

function About({ mtSizes }) {

    return (
        <AboutContent mtSizes={mtSizes}>
            <Container mtSizes={mtSizes}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a nunc interdum, molestie sem a, volutpat tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut pulvinar risus, eget mollis sapien. Duis eleifend ante vel cursus ullamcorper. Praesent blandit, odio quis pellentesque molestie, lectus nisl maximus leo, et interdum nibh ante in mi. Integer arcu arcu, aliquet at rutrum eu, sollicitudin at ligula. Nulla hendrerit, mi ut sollicitudin finibus, nisi sapien aliquet mi, nec ultricies augue est nec diam.

                    Aliquam hendrerit ut libero vitae lobortis. Etiam magna dolor, ornare eu tellus id, fermentum euismod diam. Donec at aliquam odio. Aenean imperdiet nunc tincidunt nibh euismod malesuada. Pellentesque eget semper augue. Duis a pulvinar ipsum. Aenean semper euismod dapibus. Sed ultricies faucibus ullamcorper. Aenean sagittis ipsum non lorem scelerisque, id sodales dui interdum.

                    Aenean congue libero vitae ante molestie facilisis. Sed laoreet odio vel lacinia bibendum. Curabitur blandit gravida ante, ac ultricies nisi euismod nec. Fusce quis finibus tellus. Mauris tempor mollis nisl, ut consequat lectus iaculis in. Morbi fringilla quis lacus nec egestas. Vivamus id tellus at nunc consequat convallis. Aenean vitae lobortis lacus, nec euismod nisl. Proin ac arcu arcu. Cras pharetra augue ac consectetur ultrices.</div>
            </Container>
        </AboutContent>
    );
}

export default About