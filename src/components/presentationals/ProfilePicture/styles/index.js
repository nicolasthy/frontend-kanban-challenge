import styled from "styled-components"
import { darken } from "polished"

import { hex2rgba } from "utils/colors"

export const Container = styled.div`
  background: ${({ hex }) => hex2rgba(hex, 0.5)};
  color: ${({ hex }) => darken(0.2, hex)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  min-width: 45px;
  height: 45px;
  border-radius: 50px;
  margin-right: 20px;
`

export const Initials = styled.span`
  font-weight: 500;
`
