import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput
  } from "react-admin";
  
  export const bankAccountsList = () => (
    <List>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="orgId" reference="organizations"/>
        <TextField source="account" />
        <ReferenceField source="bankFillialId" reference="bankfillials"/>
      </Datagrid>
    </List>
  );
  export const bankAccountsCreate = () => (
    <Create>
      <SimpleForm>
        <ReferenceInput source="orgId" reference="organizations" sx={{ width: 300 }}/>
        <TextInput source="account" />
        <ReferenceInput source="bankFillialId" reference="bankfillials"/>
      </SimpleForm>
    </Create>
  );
  export const bankAccountsEdit = () => (
    <Create>
      <SimpleForm>
        <ReferenceInput source="orgId" reference="organizations" sx={{ width: 300 }}/>
        <TextInput source="account" />
        <ReferenceInput source="bankFillialId" reference="bankfillials"/>
      </SimpleForm>
    </Create>
  );
