import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  BulkDeleteButton,
  WrapperField,
  ArrayField,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";


export const FinOrganList = () => (
  <List>
    <Datagrid bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}>
      <TextField source="id" />
      <TextField source="orgId"/>
      <TextField source="mfo" />
      <WrapperField label="resources.finorgs.fields.contract">
      <TextField source="contract.identifier"/>
      <TextField source="contract.date" sx={{ marginX: 2 }} />
      </WrapperField>
      
      <ArrayField source="locales">
        <Datagrid bulkActionButtons={false}>
          <TextField source="localeKey" />
          <TextField source="title" />
        </Datagrid>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);
export const FinOrganCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="orgId" sx={{ width: 400 }}/>
      <TextInput source="mfo" sx={{ width: 400 }}/>
      <TextInput source="contract.identifier" sx={{ width: 400 }} />
      <TextInput source="contract.date" sx={{ width: 400 }}/>
      <ArrayInput source="locales">
                <SimpleFormIterator inline>
                    <TextInput source="localeKey" helperText={false} />
                    <TextInput source="title" helperText={false} />
                </SimpleFormIterator>
        </ArrayInput>
    </SimpleForm>
  </Create>
);

export const FinOrganEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="orgId"/>
      <TextInput source="mfo" />
      <TextInput source="contract.identifier" />
      <TextInput source="contract.date" />
      <ArrayInput source="locales">
                <SimpleFormIterator inline>
                    <TextInput source="localeKey" helperText={false} />
                    <TextInput source="title" helperText={false} />
                </SimpleFormIterator>
        </ArrayInput>
    </SimpleForm>
  </Edit>
);
