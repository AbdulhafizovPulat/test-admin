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
  <List sx={{mr:10}}>
    <Datagrid sx={{ width: 1400}} rowClick="show"> 
      <TextField source="id" sx={{ fontWeight: 800}}/>
      <TextField source="userId" />
      <ReferenceField source="appId" reference="apps" />
      <EditButton />
    </Datagrid>
  </List>
);

export const AgentsShow = () => (
  <Show sx={{mr:100}}>
  <TabbedShowLayout sx={{ width: 700}}>
  <TabbedShowLayout.Tab label="Агент">
      <TextField source="id" sx={{my: 2, fontSize: 15, fontWeight: 800}}/>
      <TextField source="userId" sx={{my: 2, fontSize: 20}}/>
      <ReferenceField source="appId" reference="apps" sx={{my: 2, fontSize: 20}}/>
    </TabbedShowLayout.Tab>
  </TabbedShowLayout>
</Show>
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
