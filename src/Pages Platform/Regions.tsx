import { List, Datagrid, TextField, ArrayField } from "react-admin";

export const regionsList = () => (
  <List>
    <Datagrid>
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
          <TextField source="localeKey" />
          <TextField source="title" />
        </Datagrid>
      </ArrayField>
    </Datagrid>
  </List>
);
