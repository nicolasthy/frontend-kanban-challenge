import React from "react"
import { Draggable } from "react-beautiful-dnd"

import { ProfilePicture } from "components/presentationals/ProfilePicture/ProfilePicture"

import { Card, TagsList, TagItem, User, UserName, UserTitle } from "./styles"

const CrewCard = ({ id, index, talent }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          snapshot={snapshot}
        >
          <User>
            <ProfilePicture talent={talent} />
            <div>
              <UserName>{`${talent.firstName} ${talent.lastName}`}</UserName>
              <UserTitle>{talent.job}</UserTitle>
            </div>
          </User>
          <TagsList>
            {talent.tags.map((tag, index) => {
              return <TagItem key={index}>{tag}</TagItem>
            })}
          </TagsList>
        </Card>
      )}
    </Draggable>
  )
}

export { CrewCard }
