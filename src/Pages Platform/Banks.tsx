import {
    List,
    Datagrid,
    TextField,Show,TabbedShowLayout
  } from "react-admin";
  
  export const BanksList = () => (
    <List sx={{ mr:120 }}>
      <Datagrid rowClick="show" sx={{ width: 1000 }}>
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
  export const BanksShow = () => (
    <Show sx={{ mr: 120, mt: 5 }}>
      <TabbedShowLayout sx={{ width: 700 }}>
        <TabbedShowLayout.Tab label="Банки">
        <TextField source="id" sx={{ my: 1}}/>
        <TextField source="code" sx={{ my: 1}}/>
        <TextField source="name" sx={{ my: 1}}/>
        <TextField source="dateOpen" sx={{ my: 1}}/>
        <TextField source="dateClose" sx={{ my: 1}}/>
        <TextField source="dateActive" sx={{ my: 1}}/>
        <TextField source="dateDeactive" sx={{ my: 1}}/>
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );