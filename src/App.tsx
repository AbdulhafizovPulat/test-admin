import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit, UserCreate } from "./users";
import { PhotosList, PhotosEdit, PhotosCreate} from "./photos";
import { PostList, PostEdit, PostCreate } from "./posts";
import { CommentsList, CommentsEdit, CommentsCreate } from "./comments";


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import CommentIcon from '@mui/icons-material/Comment';
import PhotoIcon from '@mui/icons-material/PhotoSizeSelectActual';

import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvider"; 
import { i18nProvider } from "./i18nProvider";

const App = () => (
<Admin authProvider={authProvider} i18nProvider={i18nProvider} dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    <Resource name="comments" list={CommentsList} edit={CommentsEdit} create={CommentsCreate} icon={CommentIcon}/>
    <Resource name="photos" list={PhotosList} edit={PhotosEdit} create={PhotosCreate} icon={PhotoIcon}/>
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} recordRepresentation="name" icon={UserIcon}/>
</Admin>
);

export default App;