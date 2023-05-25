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
  TranslatableInputs,
} from "react-admin";
import { ImageField } from "react-admin";
import { SearchFilters } from "./search";

export const PhotosList = () => (
  <List filters={SearchFilters}>
    <Datagrid
      bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}
    >
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
  <Edit>
    <SimpleForm >
      <TranslatableInputs locales={["en", "fr", "ru"]}>
        <TextInput source="albumId" />
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="url" />
        <TextInput source="thumbnailUrl" />
      </TranslatableInputs>
    </SimpleForm>
  </Edit>
);
export const PhotosCreate = () => (
  <Create>
    <SimpleForm>
      <TranslatableInputs locales={["en", "fr", "ru"]}>
        <TextInput source="albumId" />
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="url" />
        <TextInput source="thumbnailUrl" />
      </TranslatableInputs>
    </SimpleForm>
  </Create>
);
