import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  background: #6167c1;
  padding: 25px 0 0;

  img {
    width: 54px;
    height: 47px;
  }

  @media only screen and (max-device-width: 765px) {
    display: none;
  }
`

export const Header = styled.header`
  position: fixed;
  left: 135px;
  top: 0;
  right: 0;
  padding: 25px 0 15px;
  display: flex;

  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 28px;
  }

  @media only screen and (max-device-width: 765px) {
    left: 35px;
  }
`

export const HeaderLogo = styled.div`
  display: none;
  align-items: center;
  background: #6167c1;
  border-radius: 100px;
  width: 75px;
  height: 75px;
  padding: 14px 15px 14px 12px;

  img {
    width: 45px;
    height: 45px;
  }

  @media only screen and (max-device-width: 765px) {
    display: flex;
    margin-right: 25px;
  }
`

export const Container = styled.div`
  display: flex;
  padding: 10px 10px 0 15px;
  height: calc(100vh - 145px);
  margin: 125px 15px 0 110px;

  &:after {
    content: "";
    flex: 0 0 10px;
  }

  @media only screen and (max-device-width: 765px) {
    margin: 125px 5px 0 5px;
    height: calc(100vh - 215px);
    height: calc((var(--vh, 1vh) * 100) - 130px);
  }
`
