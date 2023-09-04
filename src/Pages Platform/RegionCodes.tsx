import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  Show,
  SimpleShowLayout,
} from "react-admin";

export const RegionCodesList = () => (
  <List sx={{ mr: 120 }}>
    <Datagrid rowClick="show" sx={{ width: 900}}>
      <TextField source="id" />
      <TextField source="regionId" />
      <TextField source="type" />
      <TextField source="code" />
      <EditButton />
    </Datagrid>
  </List>
);
export const RegionCodesShow = () => (
  <Show sx={{ mr: 180}}>
    <SimpleShowLayout sx={{ width: 300 }}>
      <TextField source="id" />
      <TextField source="regionId" />
      <TextField source="type" />
      <TextField source="code" />
    </SimpleShowLayout>
  </Show>
);
export const RegionCodesCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="regionId" />
      <TextInput source="type" />
      <TextInput source="code" />
    </SimpleForm>
  </Create>
);

export const RegionCodesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="regionId" />
      <TextInput source="type" />
      <TextInput source="code" />
    </SimpleForm>
  </Edit>
);
