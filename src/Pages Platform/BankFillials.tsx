import {
    List,
    Datagrid,
    TextField,
  } from "react-admin";
  
  export const bankFillialsList = () => (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="bankId" />
        <TextField source="code" />
        <TextField source="tin" />
        <TextField source="regionId" />
        <TextField source="districtId" />
        <TextField source="headerId" />
        <TextField source="unionId" />
        <TextField source="tccId" />
        <TextField source="cccId" />
        <TextField source="status" />
        <TextField source="dateOpen" />
        <TextField source="dateClose" />
        <TextField source="dateActive" />
        <TextField source="dateDeactive" />
      </Datagrid>
    </List>
  );
