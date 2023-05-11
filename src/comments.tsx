import {
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
    BulkDeleteButton
  } from "react-admin";


  export const CommentsList = () => (
    <List >
      <Datagrid bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
        <UrlField source="email" />
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="body" />
        <EditButton />
      </Datagrid>
    </List>
  );
  export const CommentsEdit = () => (
    <Edit >
      <SimpleForm warnWhenUnsavedChanges>
        <TextInput source="id" disabled />
        <ReferenceInput source="postId" reference="comments" />
        <TextInput source="name" />
        <TextInput source="body" multiline rows={15} />
      </SimpleForm>
    </Edit>
  );
  export const CommentsCreate = () => (
    <Create>
      <SimpleForm warnWhenUnsavedChanges>
        <ReferenceInput source="postId" reference="comments" />
        <TextInput source="name" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Create>
  );
  