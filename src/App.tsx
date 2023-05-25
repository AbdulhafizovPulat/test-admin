import { Admin, Resource } from "react-admin";
import  apiProvider  from './API/apiService';
import { AgentsList} from "./agents";


import GroupsIcon from '@mui/icons-material/Groups';


import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider"; 
import { i18nProvider } from "./i18nProvider";


const App = () => (
<Admin authProvider={authProvider} i18nProvider={i18nProvider} dashboard={Dashboard} dataProvider={apiProvider} >
    <Resource name="agents" list={AgentsList} icon={GroupsIcon}/>
</Admin>
);

export default App;