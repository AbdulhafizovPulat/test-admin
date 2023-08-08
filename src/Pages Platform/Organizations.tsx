import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  EditButton,
} from "react-admin";

export const OrganizationsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="upperId" />
      <TextField source="name" />
      <TextField source="registeredAt.year" />
      <TextField source="registeredAt.month" />
      <TextField source="registeredAt.day" />
      <TextField source="registeredAt.dayOfWeek" />
      <TextField source="registeredAt.dayOfYear" />
      <TextField source="registeredAt.dayNumber" />
      <TextField source="phone" />
      <TextField source="status" />
      <TextField source="tin" />
      <TextField source="thsht" />
      <TextField source="dbibt" />
      <TextField source="ifut" />

      <ArrayField source="locales">
        <Datagrid>
          <TextField source="orgId" />
          <TextField source="localeKey" />
          <TextField source="title" />
          <TextField source="logoSrc" />
          <TextField source="executive" />
          <TextField source="accountant" />
          <TextField source="address" />
          <TextField source="description" />
          <TextField source="content" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="bankAccounts">
        <Datagrid>
          <TextField source="id" />
          <TextField source="orgId" />
          <TextField source="account" />
          <TextField source="bankFillialId" />
        </Datagrid>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);
export const OrganizationsEdit = () => (
  <Create>
    <SimpleForm>
      <TextInput source="upperId" />
      <TextInput source="name" />
      <TextInput source="registeredAt.year" />
      <TextInput source="registeredAt.month" />
      <TextInput source="registeredAt.day" />
      <TextInput source="registeredAt.dayOfWeek" />
      <TextInput source="phone" />
      <TextInput source="status" />
      <TextInput source="tin" />
      <TextInput source="thsht" />
      <TextInput source="dbibt" />
      <TextInput source="ifut" />
      <ArrayInput source="locales">
        <SimpleFormIterator inline>
          <TextInput source="orgId" helperText={false} />
          <TextInput source="localeKey" helperText={false} />
          <TextInput source="title" helperText={false} />
          <TextInput source="logoSrc" helperText={false} />
          <TextInput source="executive" helperText={false} />
          <TextInput source="accountant" helperText={false} />
          <TextInput source="address" helperText={false} />
          <TextInput source="description" helperText={false} />
          <TextInput source="content" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
