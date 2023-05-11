import {
    List,
    Datagrid,
    TextField,
    EditButton,
    SimpleForm,
    TextInput,
    Edit,
    Create,
    UrlField,
    ReferenceInput,
    BulkDeleteButton,
  } from "react-admin";
  import { ImageField } from 'react-admin';

  const photosFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />,
];

  export const PhotosList = () => (
    <List filters={photosFilters}>
      <Datagrid bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
        <UrlField source="albumId" />
        <TextField source="id" />
        <TextField source="title" />
        <ImageField source="url" />
        <ImageField source="thumbnailUrl" />
        <EditButton />
      </Datagrid>
    </List>
  );
  export const PhotosEdit = () => (
    <Edit >
      <SimpleForm warnWhenUnsavedChanges>
        <TextInput source="albumId" />
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="url" />
        <TextInput source="thumbnailUrl" />
      </SimpleForm>
    </Edit>
  );
  export const PhotosCreate = () => (
    <Create>
      <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="albumId" />
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="url" />
        <TextInput source="thumbnailUrl" />
      </SimpleForm>
    </Create>
  );
  