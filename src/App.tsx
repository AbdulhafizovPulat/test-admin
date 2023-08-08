import { Admin, Resource, Login } from "react-admin";
import  apiProvider  from './API/apiService';
// Finance Admin API
import { AgentsList, AgentsCreate, AgentsEdit } from "./Pages Finance/agents";
import { ApplicationsList, ApplicationsCreate, ApplicationsEdit } from "./Pages Finance/applications"
import { CategoriesList, CategoriesCreate, CategoriesEdit } from "./Pages Finance/categories"
import { FinOrganList, FinOrganCreate, FinOrganEdit } from "./Pages Finance/finOrganizations" 
import { FinProductsList, FinProductsCreate, FinProductsEdit} from "./Pages Finance/finProducts"
import { MerchantAgentsList, MerchantAgentsCreate} from "./Pages Finance/merchantAgents"
import { MerchantsList, MerchantsShow, MerchantsCreate, MerchantsEdit} from "./Pages Finance/merchants"
import { ShopsList, ShopsCreate, ShopsEdit } from "./Pages Finance/shops.js"

// Icons of Finance
import GroupsIcon from '@mui/icons-material/Groups';
import AppsIcon from '@mui/icons-material/Apps';
import CategoryIcon from '@mui/icons-material/Category';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HowToRegIcon from '@mui/icons-material/HowToReg';

// Platform Admin API
import { banksList } from "./Pages Platform/Banks"
import { regionsList } from "./Pages Platform/Regions"
import { bankFillialsList } from "./Pages Platform/BankFillials"
import { regionCodesList, regionCodesCreate, regionCodesEdit} from "./Pages Platform/RegionCodes"
import { OrganizationsList, OrganizationsEdit } from "./Pages Platform/Organizations"
import { bankAccountsList, bankAccountsCreate, bankAccountsEdit } from "./Pages Platform/BankAccounts";
import { OrganizationsCompanyCreate } from "./API/Organizations.create.js"

// Functions
import { Dashboard } from "./Pages Finance/Dashboard";
import { authProvider } from "./functions/authProvider"; 
import { i18nProvider } from "./functions/i18nProvider";

// login page css
const MyLoginPage = () => (
    <Login
    // A random image that changes everyday
    sx={{ width: '1920px' }}
    backgroundImage="https://www.heet.org.uk/wp-content/uploads/2016/06/gradient-background-26046-26731-hd-wallpapers.jpg.png"

    />
    );
    
const App = () => (
<Admin authProvider={authProvider} i18nProvider={i18nProvider} dashboard={Dashboard} dataProvider={apiProvider} loginPage={MyLoginPage}>
    {/* Finance */}
    <Resource name="agents" list={AgentsList} create={AgentsCreate} edit={AgentsEdit} icon={GroupsIcon} recordRepresentation="id"/>
    <Resource name="apps" list={ApplicationsList} create={ApplicationsCreate} edit={ApplicationsEdit} icon={AppsIcon} recordRepresentation="name"/>
    <Resource name="categories" list={CategoriesList} create={CategoriesCreate} edit={CategoriesEdit} icon={CategoryIcon} recordRepresentation="id"/>
    <Resource name="finorgs" list={FinOrganList} create={FinOrganCreate} edit={FinOrganEdit} icon={AccountBalanceIcon} recordRepresentation="id" />
    <Resource name="finproducts" list={FinProductsList} create={FinProductsCreate} edit={FinProductsEdit} icon={LocalGroceryStoreIcon} recordRepresentation="name"/>
    <Resource name="merchantagents" list={MerchantAgentsList} create={MerchantAgentsCreate} icon={PeopleAltIcon}/>
    <Resource name="merchants" list={MerchantsList} show={MerchantsShow} create={MerchantsCreate} edit={MerchantsEdit} icon={HowToRegIcon} recordRepresentation="id"/>
    <Resource name="shops" list={ShopsList} create={ShopsCreate} edit={ShopsEdit} />
    
    {/* Platform */}
    <Resource name="bankaccounts" list={bankAccountsList} create={bankAccountsCreate} edit={bankAccountsEdit}/>
    <Resource name="bankfillials" list={bankFillialsList} />
    <Resource name="banks" list={banksList} />
    <Resource name="organizations" list={OrganizationsList} create={OrganizationsCompanyCreate} edit={OrganizationsEdit}/>
    <Resource name="regioncodes" list={regionCodesList} create={regionCodesCreate} edit={regionCodesEdit} />
    <Resource name="regions" list={regionsList} />
</Admin> 
);

export default App;