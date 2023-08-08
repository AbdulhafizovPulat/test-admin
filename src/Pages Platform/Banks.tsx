import {
    List,
    Datagrid,
    TextField,
  } from "react-admin";
  
  export const banksList = () => (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="code" />
        <TextField source="name" />
        <TextField source="dateOpen" />
        <TextField source="dateClose" />
        <TextField source="dateActive" />
        <TextField source="dateDeactive" />
      </Datagrid>
    </List>
  );
