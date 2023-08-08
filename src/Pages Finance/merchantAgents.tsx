import {
  List,
  Datagrid,
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  BulkDeleteButton,
  ReferenceField,
  TextField,
  WrapperField,
} from "react-admin";

export const MerchantAgentsList = () => (
  <List>
    <Datagrid
      bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}
    >
      <ReferenceField source="merchantId" reference="merchants" />
      <ReferenceField source="agentId" reference="agents" />
      <TextField source="isDisabled" />
      <WrapperField label="resources.merchantagents.fields.contract">
      <TextField source="contract.identifier"/>
      <TextField source="contract.date" sx={{ marginX: 2 }} />
      </WrapperField>
    </Datagrid>
  </List>
);
export const MerchantAgentsCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="merchantId" reference="merchants" sx={{ width: 300 }} />
      <ReferenceInput source="agentId" reference="agents" sx={{ width: 300 }} />
      <TextInput source="isDisabled" />
      <TextInput source="contract.identifier" />
      <TextInput source="contract.date" />
    </SimpleForm>
  </Create>
);
