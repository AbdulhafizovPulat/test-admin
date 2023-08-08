import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  ReferenceField,
  ReferenceInput,
} from "react-admin";



export const AgentsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="userId" />
      <ReferenceField source="appId" reference="apps" />
      <EditButton />
    </Datagrid>
  </List>
);
export const AgentsCreate = () => (
  <Create>
    <SimpleForm>
        <TextInput source="userId" />
        <ReferenceInput source="appId" reference="apps" />
    </SimpleForm>
  </Create>
);

export const AgentsEdit = () => (
  <Edit>
    <SimpleForm>
        <TextInput source="userId" />
        <ReferenceInput source="appId" reference="apps" />
    </SimpleForm>
  </Edit>
);
