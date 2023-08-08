import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Create,
    SimpleForm,
    TextInput,
    Edit
  } from "react-admin";
  
  export const regionCodesList = () => (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="regionId" />
        <TextField source="type" />
        <TextField source="code" />
        <EditButton />
      </Datagrid>
    </List>
  );
  export const regionCodesCreate = () => (
    <Create>
      <SimpleForm>
          <TextInput source="regionId" />
          <TextInput source="type" />
          <TextInput source="code" />
      </SimpleForm>
    </Create>
  );
  
  export const regionCodesEdit = () => (
    <Edit>
      <SimpleForm>
          <TextInput source="regionId" />
          <TextInput source="type" />
          <TextInput source="code" />
      </SimpleForm>
    </Edit>
  );