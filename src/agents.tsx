import {
  List,
  Datagrid,
  TextField, 
  EditButton,
  Create,SimpleForm,TranslatableInputs,ReferenceInput,TextInput,Edit
} from "react-admin";
import {useRecordContext} from 'react-admin';
const AgentsTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const AgentsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="userId" />
      <EditButton />
    </Datagrid>
  </List>
);
export const AgentsCreate = () => (
  <Create>
    <SimpleForm>
      <TranslatableInputs locales={["en", "fr", "ru"]}>
        <ReferenceInput source="userId" reference="agents" />
        <TextInput source="id" />
      </TranslatableInputs>
    </SimpleForm>
  </Create>
);

export const AgentsEdit = () => (
  <Edit title={<AgentsTitle />}>
    <SimpleForm>
      <TranslatableInputs locales={["en", "fr", "ru"]}>
        <TextInput source="id" disabled />
        <ReferenceInput source="userid" reference="users" />
      </TranslatableInputs>
    </SimpleForm>
  </Edit>
);