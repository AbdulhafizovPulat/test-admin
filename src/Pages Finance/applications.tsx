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
  <List sx={{ mr: 40}}>
    <Datagrid sx={{ width: 1400}} rowClick="show">
      <TextField source="id"/>
      <TextField source="name" />
      <TextField source="appType" />
      <EditButton />
    </Datagrid>
  </List>
);
export const ApplicationsShow = () => (
  <Show sx={{mr: 120}}>
  <TabbedShowLayout sx={{ width: 700}}>
  <TabbedShowLayout.Tab label="Приложение">
      <TextField source="id" sx={{my: 2, fontSize: 15}}/>
      <TextField source="name" sx={{my: 2, fontSize: 17}}/>
      <TextField source="appType" sx={{my: 2, fontSize: 17}}/>
    </TabbedShowLayout.Tab>
  </TabbedShowLayout>
</Show>
);


export const ApplicationsCreate = () => (
  <Create sx={{mr: 120, mt: 5}}>
    <SimpleForm sx={{ width: 700}}>
        <TextInput source="name" />
        <TextInput source="appType" />
    </SimpleForm>
  </Create>
);

export const ApplicationsEdit = () => (
  <Edit sx={{mr: 120}}>
    <SimpleForm sx={{ width: 700}}>
        <TextInput source="name" />
        <TextInput source="appType" />
    </SimpleForm>
  </Edit>
);
