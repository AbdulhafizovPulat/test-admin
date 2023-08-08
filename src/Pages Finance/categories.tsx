import { 
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Edit,
  Create,
  BulkDeleteButton,
  ArrayField,
  ArrayInput,
  SimpleFormIterator,
}from "react-admin";

export const CategoriesList = () => (
<List>
  <Datagrid
    bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}
  >
    <TextField source="id" />
    <TextField source="name" />
    <TextField source="upperId" />
    <ArrayField source="locales">
      <Datagrid bulkActionButtons={false}>
        <TextField source="localeKey" />
        <TextField source="title" />
        <TextField source="description" />
      </Datagrid>
    </ArrayField>
    <EditButton />
  </Datagrid>
</List>
);
export const CategoriesCreate = () => (
<Create>
  <SimpleForm>
      <TextInput source="name" />
      <TextInput source="upperId" />
      <ArrayInput source="locales">
              <SimpleFormIterator inline>
                  <TextInput source="localeKey" helperText={false} />
                  <TextInput source="title" helperText={false} />
                  <TextInput source="description" helperText={false} />
              </SimpleFormIterator>
      </ArrayInput>
  </SimpleForm>
</Create>
);

export const CategoriesEdit = () => (
<Edit>
  <SimpleForm>
      <TextInput source="name" />
      <TextInput source="upperId" />
      <ArrayInput source="locales">
              <SimpleFormIterator inline>
                  <TextInput source="localeKey" helperText={false} />
                  <TextInput source="title" helperText={false} />
                  <TextInput source="description" helperText={false} />
              </SimpleFormIterator>
      </ArrayInput>
  </SimpleForm>
</Edit>
);
