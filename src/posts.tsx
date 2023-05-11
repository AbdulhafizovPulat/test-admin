import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  SimpleForm,
  ReferenceInput,
  TextInput,
  Edit,
  Create,
  BulkDeleteButton,
} from "react-admin";
import { useRecordContext } from "react-admin";
import {PostFilterSidebar} from "./search"
import {en} from "./i18n/en"
import {fr} from "./i18n/fr"
import { i18nProvider } from "./i18nProvider";

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};


export const PostList = () => (
  <List aside={<PostFilterSidebar/>}>
    <Datagrid bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
      <ReferenceField source="userId" label={`${i18nProvider.changeLocale.name}`}  reference="users" />
      <TextField source="id" />
      <TextField source="title" label={`${en.addTranslate.title}`} />
      <TextField source="body" label={`${en.addTranslate.body}`} />
      <EditButton />
    </Datagrid>
  </List>
);
export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="id" disabled />
      <ReferenceInput source="userid" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);
export const PostCreate = () => (
  <Create>
    <SimpleForm warnWhenUnsavedChanges>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
