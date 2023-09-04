import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Edit,
  Create,
  Show,
  TabbedShowLayout,
  useLocaleState,
  ArrayField,
} from "react-admin";

export const CategoriesList = () => {
  const locale = useLocaleState();

  return (
    <List sx={{ mr: 60 }}>
      <Datagrid rowClick="show" sx={{ width: 1400 }}>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="upperId" />
        <ArrayField source="locales" filter={{ localeKey: locale[0] }}>
          <Datagrid bulkActionButtons={false}>
            <TextField source="title" />
            <TextField source="description" />
          </Datagrid>
        </ArrayField>
        <EditButton />
      </Datagrid>
    </List>
  );
};
export const CategoriesShow = (props: any) => (
  <Show {...props} sx={{ mr: 160 }}>
    <TabbedShowLayout sx={{ width: 400 }} spacing={2}>
      <TabbedShowLayout.Tab label="Ru" spacing={2}>
        <TextField source="id" />
        <TextField
          source={`locales[0].title`}
          label="Title"
          sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
        />
        <TextField
          source={`locales[0].description`}
          label="Description"
          sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
        />
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Uzb">
        <TextField source="id" />
        <TextField
          source={`locales[1].title`}
          label="Title"
          sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
        />
        <TextField
          source={`locales[1].description`}
          label="Description"
          sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
        />
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Uzc">
        <TextField source="id" />
        <TextField
          source={`locales[2].title`}
          label="Title"
          sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
        />
        <TextField
          source={`locales[2].description`}
          label="Description"
          sx={{ my: 2, fontSize: 15, fontWeight: 400 }}
        />
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);

export const CategoriesCreate = () => (
  <Create sx={{ mr: 150 }}>
    <SimpleForm sx={{ width: 800 }}>
      <TextInput source="name" />
      <TextInput source="upperId" />
      <TextInput source="title" helperText={false} />
      <TextInput source="description" helperText={false} />
    </SimpleForm>
  </Create>
);

export const CategoriesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="upperId" />
      <TextInput source="title" helperText={false} />
      <TextInput source="description" helperText={false} />
    </SimpleForm>
  </Edit>
);
