import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  TabbedShowLayout,
  WrapperField,
  Show,
  ArrayInput,
  SimpleFormIterator,
  ArrayField,
  TranslatableInputs,
  FormTab,
} from "react-admin";

export const FinOrganList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="orgId" />
      <TextField source="mfo" />
      <WrapperField label="resources.finorgs.fields.contract">
        <TextField source="contract.identifier" />
        <TextField source="contract.date" />
      </WrapperField>
      <ArrayField source="locales">
        <Datagrid>
          <TextField source="title" />
        </Datagrid>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);

export const FinOrganShow = (props: any) => (
  <Show {...props} sx={{ mr: 120 }}>
    <TabbedShowLayout sx={{ width: 700 }}>
      <TabbedShowLayout.Tab label="Ru">
        <TextField source="id" sx={{ my: 2, fontSize: 15 }} />
        <TextField source="orgId" sx={{ my: 2, fontSize: 15 }} />
        <TextField source="mfo" sx={{ my: 2, fontSize: 15 }} />
        <WrapperField label="resources.finorgs.fields.contract">
          <TextField
            source="contract.identifier"
            sx={{ my: 2, fontSize: 15 }}
          />
          <TextField source="contract.date" sx={{ my: 1, fontSize: 15 }} />
        </WrapperField>
        <TextField
          source={`locales[0].title`}
          label="Title"
          sx={{ my: 2, fontSize: 15 }}
        />
        <TextField
          source={`locales[0].description`}
          label="Description"
          sx={{ my: 2, fontSize: 15 }}
        />
      </TabbedShowLayout.Tab>

      <TabbedShowLayout.Tab label="UZB">
        <TextField source="id" sx={{ my: 2, fontSize: 15 }} />
        <TextField source="orgId" sx={{ my: 2, fontSize: 15 }} />
        <TextField source="mfo" sx={{ my: 2, fontSize: 15 }} />
        <WrapperField label="resources.finorgs.fields.contract">
          <TextField
            source="contract.identifier"
            sx={{ my: 2, fontSize: 15 }}
          />
          <TextField source="contract.date" sx={{ my: 1, fontSize: 15 }} />
        </WrapperField>
        <TextField
          source={`locales[1].title`}
          label="Title"
          sx={{ my: 2, fontSize: 15 }}
        />
        <TextField
          source={`locales[1].description`}
          label="Description"
          sx={{ my: 2, fontSize: 15 }}
        />
      </TabbedShowLayout.Tab>

      <TabbedShowLayout.Tab label="UZC">
        <TextField source="id" sx={{ my: 2, fontSize: 15 }} />
        <TextField source="orgId" sx={{ my: 2, fontSize: 15 }} />
        <TextField source="mfo" sx={{ my: 2, fontSize: 15 }} />
        <WrapperField label="resources.finorgs.fields.contract">
          <TextField
            source="contract.identifier"
            sx={{ my: 2, fontSize: 15 }}
          />
          <TextField source="contract.date" sx={{ my: 1, fontSize: 15 }} />
        </WrapperField>
        <TextField
          source={`locales[2].title`}
          label="Title"
          sx={{ my: 2, fontSize: 15 }}
        />
        <TextField
          source={`locales[2].description`}
          label="Description"
          sx={{ my: 2, fontSize: 15 }}
        />
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);

export const FinOrganCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="orgId" />
      <TextInput source="mfo" />
      <TextInput source="contract.identifier" />
      <TextInput source="contract.date" />
      <ArrayInput source="locales">
        <SimpleFormIterator inline>
          <TextInput source="title" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const FinOrganEdit = (props: object) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="orgId" />
      <TextInput source="mfo" />
      <TextInput source="contract.identifier" label="Contract Identifier" />
      <TranslatableInputs locales={["en", "ru", "uzc"]}>
        <TextInput source="" />
      </TranslatableInputs>
    </SimpleForm>
  </Edit>
);
