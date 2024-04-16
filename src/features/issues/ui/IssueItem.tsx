import { Card, Tag, Typography, Avatar, Space, Divider } from 'antd';
import { daysSinceCreated } from "@/utils/day";
import { Issue } from "../types";

const { Text } = Typography;

type Props = {
    item: Issue;
};

const IssueItem = ({ item }: Props) => (
    <Card
        hoverable
        style={{ marginBottom: 8, borderRadius: 4 }}
    >
        <Text strong ellipsis={{ tooltip: item.title }}>
            {`#${item.number} ${item.title}`}
        </Text>
        <div >
            <Space>
                <Avatar src={item.user.avatar_url} size="small" alt={`${item.user.login}'s avatar`} />
                <Text>{item.user.login}</Text>
            </Space>
            <Divider/>
            <Tag color="blue">{`${daysSinceCreated(item.created_at)} days ago`}</Tag>
            <Tag color="green">{`Comments: ${item.comments}`}</Tag>
        </div>
    </Card>
);

export default IssueItem;