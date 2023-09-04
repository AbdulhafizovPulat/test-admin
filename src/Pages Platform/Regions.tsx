import { List, Datagrid, TextField, ArrayField, Show, SimpleShowLayout } from "react-admin";

export const RegionsList = () => (
  <List sx={{ mr: 120 }}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="regionType" />
      <TextField source="upperId" />
      <ArrayField source="codes">
        <Datagrid>
          <TextField source="id" />
          <TextField source="regionId" />
          <TextField source="type" />
          <TextField source="code" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="locales">
        <Datagrid>
          <TextField source="regionId" />
          <TextField source="title" />
        </Datagrid>
      </ArrayField>
    </Datagrid>
  </List>
);

export const RegionsShow = () => (
  <Show sx={{ mr: 180, mt: 5}}>
    <SimpleShowLayout sx={{ width: 800 }}>
      <TextField source="id"/>
      <TextField source="regionType"/>
      <TextField source="upperId" />
      <ArrayField source="codes">
        <Datagrid>
          <TextField source="id" />
          <TextField source="regionId" />
          <TextField source="type" />
          <TextField source="code" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="locales">
        <Datagrid>
          <TextField source="regionId" />
          <TextField source="title" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
