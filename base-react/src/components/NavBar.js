import { Fragment } from 'react';
import styled from 'styled-components';
import { devices } from '../resources/media';

const Navbar = styled.div.attrs({ className: 'container' })`
  position: absolute;
  top: -350px;
  display: flex;
  justify-content: space-between;
  height: 5.8rem;
  padding-left: 0;
  padding-right: 0;
  margin-top: 4rem;
  margin-bottom: 2rem;
  -webkit-transition: all 1.5s;
  -moz-transition: all 1.5s;
  -o-transition: all 1.5s;
  -ms-transition: all 1.5s;
  transition: all 1.5s;
  z-index: 5;
  box-shadow: -4px 13px 38px -9px #000000;

  ${({ show }) => show && `
  top: 0;
  
  `}

  @media ${devices.mobile} {
    margin-top: 5rem;
    margin-bottom: 3rem;
    height: 6.8rem;
  }
  @media ${devices.tablet} {
    margin-top: 5rem;
    margin-bottom: 5rem;
    height: 9.3rem;
  }
  @media ${devices.laptop} {
    margin-top: 6rem;
    margin-bottom: 6rem;
    height: 9.8rem;
  }
`
const LNav = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 30rem;
  height: 100%;
`
const Title = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Monterey' !important;
  font-size: 2rem;

  @media ${devices.mobile} {
    font-size: 2.6rem;
  }
  @media ${devices.tablet} {
    font-size: 4rem;
  }
  @media ${devices.laptop} {
    font-size: 5rem;
  }
`
const TitleText = styled.div`
  margin-top: 2rem;
`

const Login = styled.div`
  width: 30rem;
  height: 100%;
`
const Profile = styled.img.attrs({
  src: "/assets/images/profile.jpg"
})`
  width: 8rem;
  height: 8rem;
  position: relative;
  top: -1rem;

  overflow: hidden;
  border-radius: 50%;

  @media ${devices.mobile} {
    height: 10.2rem;
    width: 10.2rem;
    top:-2rem;

  }
  @media ${devices.tablet} {
    height: 13.8rem;
    width: 13.8rem;
    left: 8%;
  }
`

function NavBar({ show }) {

  return (
    <Fragment>
      <Navbar show={show}>
        <LNav>
          <Profile className="to-color" altText="not me" />
        </LNav>
        <Title>
          <TitleText>Its <s>Not</s> Perry </TitleText>
        </Title>
        <Login>Sign In</Login>
      </Navbar>
    </Fragment>
  );
}

export default NavBar;