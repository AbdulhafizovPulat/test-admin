import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Edit,
  Create,Show,TabbedShowLayout
} from "react-admin";


export const ApplicationsList = () => (
  <List sx={{ mr: 10}}>
    <Datagrid sx={{ width: 1400}} rowClick="show">
      <TextField source="id" sx={{ fontWeight: 800}}/>
      <TextField source="name" />
      <TextField source="appType" />
      <EditButton />
    </Datagrid>
  </List>
);
export const ApplicationsShow = () => (
  <Show sx={{mr:100}}>
  <TabbedShowLayout sx={{ width: 700}}>
  <TabbedShowLayout.Tab label="Приложение">
      <TextField source="id" sx={{my: 2, fontSize: 15, fontWeight: 800}}/>
      <TextField source="name" sx={{my: 2, fontSize: 17}}/>
      <TextField source="appType" sx={{my: 2, fontSize: 17}}/>
    </TabbedShowLayout.Tab>
  </TabbedShowLayout>
</Show>
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
