import { Admin, Resource, Login } from "react-admin";
import  apiProvider  from './API/apiService';
import MyLayout from "./functions/MyLayout.js";
// Finance Admin API
import { AgentsList, AgentsShow, AgentsCreate, AgentsEdit } from "./Pages Finance/agents";
import { ApplicationsList, ApplicationsShow, ApplicationsCreate, ApplicationsEdit } from "./Pages Finance/applications"
import { CategoriesList, CategoriesShow, CategoriesCreate, CategoriesEdit } from "./Pages Finance/categories"
import { FinOrganList, FinOrganShow, FinOrganCreate, FinOrganEdit } from "./Pages Finance/finOrganizations" 
import { FinProductsList, FinProductShow, FinProductsCreate, FinProductsEdit} from "./Pages Finance/finProducts"
import { MerchantsList, MerchantsShow, MerchantsCreate, MerchantsEdit} from "./Pages Finance/merchants"
import { ShopsList, ShopsShow, ShopsCreate } from "./Pages Finance/shops.js"

// Icons of Finance
import GroupsIcon from '@mui/icons-material/Groups';
import AppsIcon from '@mui/icons-material/Apps';
import CategoryIcon from '@mui/icons-material/Category';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HowToRegIcon from '@mui/icons-material/HowToReg';

// Platform Admin API
import { BanksList, BanksShow } from "./Pages Platform/Banks"
import { BankFillialsList, BankFillialsShow } from "./Pages Platform/BankFillials"
import { RegionsList, RegionsShow } from "./Pages Platform/Regions"
import { RegionCodesList, RegionCodesShow, RegionCodesCreate, RegionCodesEdit} from "./Pages Platform/RegionCodes"
import { OrganizationsList, OrganizationsShow, OrganizationsEdit } from "./Pages Platform/Organizations"
import { BankAccountsList, BankAccountsCreate, BankAccountsEdit } from "./Pages Platform/BankAccounts";
import { OrganizationsCompanyCreate } from "./API/Organizations.create.js"

// Functions
import { Dashboard } from "./Pages Finance/Dashboard.js";
import { authProvider } from "./functions/authProvider"; 
import { i18nProvider } from "./functions/i18nProvider";

// login page css
const MyLoginPage = () => (
    <Login
    // A random image that changes everyday
    sx={{ width: '1920px' }}
    backgroundImage="https://cdn.wallpapersafari.com/52/9/aw0Ll5.jpg"
    />
    );
    
const App = () => (
<Admin layout={MyLayout} authProvider={authProvider} i18nProvider={i18nProvider} dashboard={Dashboard} dataProvider={apiProvider} loginPage={MyLoginPage}>
    {/* Finance */}
    <Resource name="agents" list={AgentsList} show={AgentsShow} create={AgentsCreate} edit={AgentsEdit} icon={GroupsIcon} recordRepresentation="id"/>
    <Resource name="apps" list={ApplicationsList} show={ApplicationsShow} create={ApplicationsCreate} edit={ApplicationsEdit} icon={AppsIcon} recordRepresentation="name"/>
    <Resource name="categories" list={CategoriesList} show={CategoriesShow} create={CategoriesCreate} edit={CategoriesEdit} icon={CategoryIcon} recordRepresentation="id"/>
    <Resource name="finorgs" list={FinOrganList} show={FinOrganShow} create={FinOrganCreate} edit={FinOrganEdit} icon={AccountBalanceIcon} recordRepresentation="id" />
    <Resource name="finproducts" list={FinProductsList} show={FinProductShow} create={FinProductsCreate} edit={FinProductsEdit} icon={LocalGroceryStoreIcon} recordRepresentation="name"/>
    <Resource name="merchants" list={MerchantsList} show={MerchantsShow} create={MerchantsCreate} edit={MerchantsEdit} icon={HowToRegIcon} recordRepresentation="id"/>
    <Resource name="shops" list={ShopsList} show={ShopsShow} create={ShopsCreate}  />
    
    {/* Platform */}
    <Resource name="bankaccounts" list={BankAccountsList} create={BankAccountsCreate} edit={BankAccountsEdit}/>
    <Resource name="bankfillials" list={BankFillialsList} show={BankFillialsShow}/>
    <Resource name="banks" list={BanksList} show={BanksShow}/>
    <Resource name="organizations" list={OrganizationsList} show={OrganizationsShow} create={OrganizationsCompanyCreate} edit={OrganizationsEdit}/>
    <Resource name="regioncodes" list={RegionCodesList} show={RegionCodesShow} create={RegionCodesCreate} edit={RegionCodesEdit} />
    <Resource name="regions" list={RegionsList} show={RegionsShow} />
</Admin> 
);

export default App;