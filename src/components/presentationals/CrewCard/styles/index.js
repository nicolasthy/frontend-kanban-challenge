import styled from "styled-components"

export const Card = styled.li.attrs(({ isDragging, style }) => ({
  style: {
    ...style,
    transform: isDragging ? `${style.transform} rotate(5deg)` : style.transform,
  },
}))`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  margin: 0 0 15px 0;
  padding: 20px 15px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(5, 7, 26, 0.1);
  transition: box-shadow 0.2s ease-out;
  cursor: grab;

  &:hover {
    box-shadow: 0 16px 12px -10px rgba(5, 7, 26, 0.1);
  }
`

export const User = styled.div`
  display: flex;
`

export const UserName = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 500px;

  @media only screen and (max-device-width: 765px) {
    font-size: 16px;
  }
`

export const UserTitle = styled.span`
  display: block;
  font-size: 14px;
  color: #41528b;

  @media only screen and (max-device-width: 765px) {
    font-size: 12px;
  }
`

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const TagItem = styled.li`
  font-size: 12px;
  font-weight: 600;
  color: #a5acc6;
  background: rgba(165, 172, 198, 0.15);
  border-radius: 50px;
  padding: 3px 12px;
  margin: 10px 10px 0 0;
`
