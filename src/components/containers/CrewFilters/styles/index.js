import styled from "styled-components"

export const Container = styled.div`
  position: relative;
`

export const Actions = styled.div`
  display: flex;
  min-height: 37px;
`

export const QuickFilterButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  padding: 0;
  margin: 10px 0 0 0;
  min-width: 130px;

  &:focus {
    outline: none;
  }

  span {
    padding-right: 10px;
  }
`

export const AvailableFiltersList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  margin-top: 5px;
  background: #fff;
  box-shadow: 0 0 12px 0 rgba(5, 7, 26, 0.1);
  border-radius: 10px;
  width: 250px;
  padding: 12px 0;
`

export const AvailableFilterItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  cursor: pointer;
  background: ${({ checked }) => checked && "#e8e9f7"};
  color: ${({ checked }) => checked && "#6167c1"};

  &:hover {
    background: #e8e9f7;
    color: #6167c1;
  }

  input {
    margin-right: 10px;
  }
`

export const FiltersList = styled.ul`
  display: flex;
  overflow-x: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 15px;
  max-width: calc(100% - 130px);
`

export const FilterItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 3px 12px;
  margin: 10px 10px 0 0;
  border-radius: 50px;
  background: #e8e9f7;
  color: #6167c1;
  font-weight: 600;
  font-size: 14px;

  span {
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.7;
  }
`
