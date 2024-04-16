import { AppDispatch, RootState } from "@/app/store"
import { useSelector } from "react-redux"
import { Issue } from "../types";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import { StrictModeDroppable } from "@/components/StrictModeDroppable";
import IssueList from "./IssuesList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { moveIssue } from "../issueSlice";


interface Column {
    name: string;
    items: Issue[];
}

interface Columns {
    [key: string]: Column;
}

const IssueBoard = () => {
    const { todo, inProgress, done } = useSelector((state: RootState) => state.issues)

    const dispatch = useDispatch<AppDispatch>();

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        dispatch(moveIssue(result))
    };

    const columns: Columns = {
        todo: { name: "To Do", items: todo },
        inProgress: { name: "In Progress", items: inProgress },
        done: { name: "Done", items: done },
    };


    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Row gutter={20}>
                {Object.entries(columns).map(([columnId, column]) => (
                    <Col key={columnId} span={8}>
                        <Title level={5} style={{ textAlign: "center" }}>{column.name}</Title>
                        <StrictModeDroppable droppableId={columnId}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    style={{ height: '100%' }}
                                >
                                    <IssueList issues={column.items} />
                                    {provided.placeholder}
                                </div>
                            )}
                        </StrictModeDroppable>
                    </Col>
                ))}
            </Row>
        </DragDropContext>
    )
}

export default IssueBoard