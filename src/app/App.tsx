import { Layout } from "antd"

import IssueBoard from "@/features/issues/ui/IssueBoard";
import RepositoryDetails from "@/features/repo/ui/RepositoryDetails";
import Search from "@/components/Search";

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 'auto',
  padding: '20px ',
  display: "flex",
  flexDirection: 'column',
  gap: 16 
};

const contentStyle: React.CSSProperties = {
  width: '80%',
  margin: '0 auto',
};

const layoutStyle = {
  overflow: 'hidden',
  minHeight: '100vh'
};

const { Header, Content } = Layout;
function App() {
  return (
    <Layout style={layoutStyle} >
      <Header style={headerStyle} >
        <Search />
        <RepositoryDetails />
      </Header>
      <Content style={contentStyle} >
        <IssueBoard />
      </Content>
    </Layout >
  )
}

export default App
