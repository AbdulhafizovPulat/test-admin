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
  Show,
  TabbedShowLayout,
} from "react-admin";


export const AgentsList = () => (
  <List sx={{mr:100}}>
    <Datagrid  rowClick="show" sx={{width: 1200}}> 
      <TextField source="id" />
      <TextField source="userId" />
      <ReferenceField source="appId" reference="apps" />
      <EditButton />
    </Datagrid>
  </List>
);

export const AgentsShow = () => (
  <Show sx={{mr:120}}>
  <TabbedShowLayout sx={{ width: 700}}>
  <TabbedShowLayout.Tab label="Агент">
      <TextField source="id" sx={{my: 2, fontSize: 15}}/>
      <TextField source="userId" sx={{my: 2, fontSize: 20}}/>
      <ReferenceField source="appId" reference="apps" sx={{my: 2, fontSize: 20}}/>
    </TabbedShowLayout.Tab>
  </TabbedShowLayout>
  </Show>
);
export const AgentsCreate = () => (
  <Create sx={{mr: 120, mt: 5}}>
    <SimpleForm sx={{ width: 700}}>
        <TextInput source="userId" />
        <ReferenceInput source="appId" reference="apps" />
    </SimpleForm>
  </Create>
);

export const AgentsEdit = () => (
  <Edit sx={{mr: 120}}>
    <SimpleForm sx={{ width: 700}}>
        <TextInput source="userId" />
        <ReferenceInput source="appId" reference="apps" />
    </SimpleForm>
  </Edit>
);
