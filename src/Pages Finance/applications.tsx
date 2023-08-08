import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Edit,
  Create,
} from "react-admin";


export const ApplicationsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="appType" />
      <EditButton />
    </Datagrid>
  </List>
);



export const ApplicationsCreate = () => (
  <Create>
    <SimpleForm>
        <TextInput source="name" />
        <TextInput source="appType" />
    </SimpleForm>
  </Create>
);

export const ApplicationsEdit = () => (
  <Edit>
    <SimpleForm>
        <TextInput source="name" />
        <TextInput source="appType" />
    </SimpleForm>
  </Edit>
);
