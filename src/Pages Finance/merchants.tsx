import {
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  ReferenceInput,
  List,
  WrapperField,
  ReferenceField,
  ArrayField,
  ArrayInput,
  SimpleFormIterator,
  EditButton,
  TabbedShowLayout,
  Show,
} from "react-admin";
import { Grid } from "@mui/material";

export const MerchantsList = () => (
  <List>
    <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="orgId" />
          <TextField source="name" />
          <TextField source="bankAccountId" />
          <WrapperField label="resources.merchants.fields.contract">
            <TextField source="contract.identifier" />
            <TextField source="contract.date" sx={{ marginX: 1 }} />
          </WrapperField>
          <TextField source="regionId" />
          <ArrayField source="locales">
            <Datagrid bulkActionButtons={false}>
              <TextField source="localeKey" />
              <TextField source="address" />
              <TextField source="title" />
            </Datagrid>
          </ArrayField>
          <EditButton />
    </Datagrid>
  </List>
);
export const  MerchantsShow = () => (
  <Show>
      <TabbedShowLayout sx={{ width: 500 }}>
      <TabbedShowLayout.Tab label="merchants">
          <TextField source="id" />
          <TextField source="orgId" />
          <TextField source="name" />
          <TextField source="bankAccountId" />
          <WrapperField label="resources.merchants.fields.contract">
            <TextField source="contract.identifier" />
            <TextField source="contract.date" sx={{ marginX: 1 }} />
          </WrapperField>
          <TextField source="regionId" />
          <ArrayField source="locales">
            <Datagrid bulkActionButtons={false}>
              <TextField source="localeKey" />
              <TextField source="address" />
              <TextField source="title" />
            </Datagrid>
          </ArrayField>
        </TabbedShowLayout.Tab>

        <TabbedShowLayout.Tab label="merchantagents">
          <ReferenceField
            label="resources.merchants.fields.agentid"
            source="agent_id"
            reference="agents"
          >
            <TextField source="id" />
          </ReferenceField>
          <WrapperField label="resources.merchants.fields.contract">
            <TextField source="agents[0].contract.identifier" />
            <TextField source="agents[0].contract.date" sx={{ marginX: 1 }} />
          </WrapperField>
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
  </Show>
);

export const MerchantsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextInput source="name" sx={{ width: 400 }} />
          <TextInput source="orgId" sx={{ width: 400, marginY: 5 }} />
          <TextInput
            source="bankAccountId"
            sx={{ width: 400, marginRight: 5 }}
          />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="agentId" reference="agents" />
          <TextInput source="contract.date" sx={{ marginRight: 5 }} />
          <TextInput source="contract.identifier" />
          <TextInput
            label="Agents ContractIdentifier"
            source="agents[0].contract.identifier"
            sx={{ marginRight: 5 }}
          />
          <TextInput
            label="Agents ContractDate"
            source="agents[0].contract.date"
            sx={{ marginRight: 5 }}
          />
          <TextInput source="regionId" />
        </Grid>
      </Grid>
      <ArrayInput source="locales">
        <SimpleFormIterator inline>
          <TextInput source="localeKey" helperText={false} />
          <TextInput source="address" helperText={false} sx={{ width: 300 }} />
          <TextInput source="title" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const MerchantsEdit = () => (
  <Edit>
    <SimpleForm>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextInput source="name" sx={{ width: 400 }} />
          <TextInput source="orgId" sx={{ width: 400, marginY: 5 }} />
          <TextInput
            source="bankAccountId"
            sx={{ width: 400, marginRight: 5 }}
          />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="agentId" reference="agents" />
          <TextInput source="contract.date" sx={{ marginRight: 5 }} />
          <TextInput source="contract.identifier" />
          <TextInput
            label="Agents ContractIdentifier"
            source="agents[0].contract.identifier"
            sx={{ marginRight: 5 }}
          />
          <TextInput
            label="Agents ContractDate"
            source="agents[0].contract.date"
            sx={{ marginRight: 5 }}
          />
          <TextInput source="regionId" />
        </Grid>
      </Grid>
      <ArrayInput source="locales">
        <SimpleFormIterator inline>
          <TextInput source="localeKey" helperText={false} />
          <TextInput source="address" helperText={false} />
          <TextInput source="title" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
