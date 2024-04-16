import { Issue } from "../types";
import IssueItem from "./IssueItem";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  issues: Issue[]
}

const IssueList = ({ issues }: Props) => (
  <>
    {issues.map((item, index) => (
      <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <IssueItem item={item} />
          </div>
        )}
      </Draggable>
    ))}
  </>
)

export default IssueList