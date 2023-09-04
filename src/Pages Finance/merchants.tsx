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
  SimpleShowLayout,
  ArrayInput,
  SimpleFormIterator,
  EditButton,
  TabbedShowLayout,
  Show,
} from "react-admin";
import { Grid } from "@mui/material";


export const MerchantsList = () => (
  <List sx={{ mr: 200 }}>
    <Datagrid rowClick="show" sx={{ width: 1400 }}>
      <TextField source="id" />
      <TextField source="orgId" />
      <TextField source="name" />
      <TextField source="bankAccountId" />
      <WrapperField label="resources.merchants.fields.contract">
        <TextField source="contract.identifier" />
        <TextField source="contract.date" sx={{ marginX: 1 }} />
      </WrapperField>
      <TextField source="regionId" />
      <TextField source="locales[0].address" label="adress" />
      <TextField source="locales[0].title" label="title" />
      <EditButton />
    </Datagrid>
  </List>
);

export const MerchantsShow = () => (
  <Show>
    <SimpleShowLayout sx={{ width: 500 }}>
      <TabbedShowLayout.Tab label="merchants" >
        <TextField source="id" sx={{ my:2 }}/>
        <TextField source="orgId" sx={{ my:2 }}/>
        <TextField source="name" sx={{ my:2 }}/>
        <TextField source="bankAccountId" sx={{ my:2 }}/>
        <WrapperField label="resources.merchants.fields.contract">
          <TextField source="contract.identifier" sx={{ my:2 }}/>
          <TextField source="contract.date" sx={{ my:2 }} />
        </WrapperField>
        <TextField source="regionId" sx={{ my:2 }}/>

        {/* locales */}
        <TabbedShowLayout sx={{ width: 400 }}>
          <TabbedShowLayout.Tab label="Ru">
            <TextField
              source={`locales[0].title`}
              label="Title"
              sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
            />
            <TextField
              source={`locales[0].address`}
              label="Address"
              sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
            />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="Uzb">
            <TextField
              source={`locales[1].title`}
              label="Title"
              sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
            />
            <TextField
              source={`locales[1].address`}
              label="Address"
              sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
            />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="Uzc">
            <TextField
              source={`locales[2].title`}
              label="Title"
              sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
            />
            <TextField
              source={`locales[2].address`}
              label="Address"
              sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
            />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </TabbedShowLayout.Tab>
    </SimpleShowLayout>
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
