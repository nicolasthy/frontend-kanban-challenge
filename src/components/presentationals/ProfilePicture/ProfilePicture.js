import React from "react"

import { intToRGB, hashCode } from "utils/colors"

import { Container, Initials } from "./styles"

const ProfilePicture = ({ talent }) => {
  const initials = [talent.firstName.charAt(0).toUpperCase(), talent.lastName.charAt(0).toUpperCase()].join("")
  const hex = `#${intToRGB(hashCode(`${talent.firstName} ${talent.lastName}`))}`

  return (
    <Container hex={hex}>
      <Initials>{initials}</Initials>
    </Container>
  )
}

export { ProfilePicture }
