import styled from "styled-components"

export const Container = styled.div`
  flex: 0 0 auto;
  width: 400px;
  background-color: #e8e9f7;
  border-radius: 10px;
  margin: 0 10px;
  padding: 20px 20px 10px 20px;
`

export const Header = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #6167c1;
  margin: 0 0 30px 0;
  padding: 0;
  text-transform: uppercase;

  small {
      font-weight: 400;
      padding-left: 5px;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #6167c1;
    border-radius: 50px;
    width: 32px;
    height: 32px;
  }
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const DroppableContainer = styled.div`
  max-height: calc(100% - 65px);
  overflow-y: auto;
  overflow-anchor: none;
`
