import {
  TranslatableInputs,
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  ReferenceInput,
  TextInput,
  Edit,
  Create,
  UrlField,
  BulkDeleteButton,
} from "react-admin";
import { SearchFilters } from "./search";


export const CommentsList = () => (
  <List filters={SearchFilters}>
    <Datagrid
      bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}
      sx={{ backgroundColor: "Lavender", "& .RaDatagrid-headerCell": {
        backgroundColor: "MistyRose",
    },}}
    >
      <UrlField source="email" />
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="body"  sx={{ '& .MuiAvatar': { width: 48} }}  />
      <EditButton sx={{ fontWeight: "bold" }} />
    </Datagrid>
  </List>
);
export const CommentsEdit = () => (
  <Edit>
    <SimpleForm >
      <TranslatableInputs locales={["en", "fr", "ru"]}>
        <TextInput source="email" />
        <TextInput source="id" />
        <ReferenceInput source="postId" reference="comments" />
        <TextInput source="name" />
        <TextInput source="body" multiline rows={15} />
      </TranslatableInputs>
    </SimpleForm>
  </Edit>
);
export const CommentsCreate = () => (
  <Create>
    <SimpleForm >
      <TranslatableInputs locales={["en", "fr", "ru"]}>
        <TextInput source="email" />
        <TextInput source="name" />
        <TextInput source="body" multiline rows={5} />
        <ReferenceInput source="postId" reference="comments" />
      </TranslatableInputs>
    </SimpleForm>
  </Create>
);
