import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BulkDeleteButton,
  SimpleForm,
  ReferenceInput,
  TextInput,
  Edit,
  Create,
  EditButton,
} from "react-admin";

export const UserList = () => {
  return (
    <List>
      { (
        <Datagrid
          rowClick="edit"
          bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}
        >
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <TextField source="phone" />
          <EmailField source="email" />
          <TextField source="company.name" />
          <TextField source="address.city" />
          <TextField source="address.street" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
export const UserEdit = () => (
  <Edit>
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="id" />
      <TextField source="company.name" />
      <TextField source="name" />
      <ReferenceInput source="username" reference="users" />
      <TextField source="address.city" />
      <TextField source="address.street" />
    </SimpleForm>
  </Edit>
);
export const UserCreate = () => (
  <Create>
    <SimpleForm warnWhenUnsavedChanges>
      <ReferenceInput source="username" reference="users" />
      <TextField source="company.name" />
      <TextField source="address.city" />
      <TextField source="address.street" />
    </SimpleForm>
  </Create>
);
