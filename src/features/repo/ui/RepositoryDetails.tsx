import { RootState } from "@/app/store";
import { StarOutlined } from "@ant-design/icons";
import { Breadcrumb, Flex, Typography } from "antd";
import { useSelector } from "react-redux";

const RepositoryDetails = () => {
    const { repo, error } = useSelector((state: RootState) => state.repo)
    if(error) return
    return (<>
        {repo &&
            <Flex wrap="wrap" gap="small">
                <Breadcrumb
                    itemRender={({ title, href }) => {
                        return <a href={href} target="_blank" style={{ color: 'white' }}>{title}</a>
                    }}
                    separator={<a style={{ color: 'white' }}> {">"} </a>}
                    items={[
                        { title: repo.owner.login, href: repo.owner.htmlUrl },
                        { title: repo.name, href: repo.htmlUrl },
                    ]}
                />

                <Typography.Text style={{ color: 'orange' }}><StarOutlined />{repo.starsCount} stars</Typography.Text>
            </Flex>

        }
    </>)
}

export default RepositoryDetails;