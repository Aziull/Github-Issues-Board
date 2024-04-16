import { AppDispatch } from "@/app/store";
import { fetchIssues } from "@/features/issues/issueThunks";
import { fetchRepoDetails } from "@/features/repo/repoThunks";
import { Input } from "antd";
import { useDispatch } from "react-redux";

const Search = () => {
    const dispatch = useDispatch<AppDispatch>();
    const onSearch = (value: string) => {
        const matches = value.match(/https?:\/\/github\.com\/([^\/]+)\/([^\/]+)/);
        if (matches) {
            const fullName = `${matches[1]}/${matches[2]}`
            dispatch(fetchRepoDetails(fullName))
            dispatch(fetchIssues(fullName));
        }
    };

    return (<>
        <Input.Search
            placeholder="Enter repo URL"
            enterButton="Load issues"
            onSearch={onSearch}
        />
    </>)
}

export default Search