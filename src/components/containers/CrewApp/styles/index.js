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
`

export const Header = styled.header`
  margin: 0 0 0 135px;
  padding: 25px 0 15px;

  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 28px;
  }
`

export const Container = styled.div`
  display: flex;
  padding: 10px 10px 0 15px;
  height: calc(100vh - 105px);
  margin: 15px 15px 0 110px;

  &:after {
    content: "";
    flex: 0 0 10px;
  }
`
