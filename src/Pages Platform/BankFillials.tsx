import {
  List,
  Datagrid,
  TextField,
  TopToolbar,
  SelectColumnsButton,
  DatagridConfigurable,
  Show,
  TabbedShowLayout,
} from "react-admin";
const PostListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
  </TopToolbar>
);

export const BankFillialsList = () => (
  <List actions={<PostListActions />} sx={{ mr: 140}}>
    <DatagridConfigurable rowClick="show" sx={{ width: 1000}}>
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
    </DatagridConfigurable>
  </List>
);

export const BankFillialsShow = () => (
  <Show sx={{ mr: 120, mt: 5 }}>
    <TabbedShowLayout sx={{ width: 700 }}>
      <TabbedShowLayout.Tab label="Регионы">
        <TextField source="id" />
        <TextField source="bankId" />
        <TextField source="code" sx={{ my: 1 }} />
        <TextField source="tin" sx={{ my: 1 }} />
        <TextField source="regionId" sx={{ my: 1 }} />
        <TextField source="districtId" sx={{ my: 1 }} />
        <TextField source="headerId" sx={{ my: 1 }} />
        <TextField source="unionId" sx={{ my: 1 }} />
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Инфо">
        <TextField source="tccId" sx={{ my: 1 }} />
        <TextField source="cccId" sx={{ my: 1 }} />
        <TextField source="status" sx={{ my: 1 }} />
        <TextField source="dateOpen" sx={{ my: 1 }} />
        <TextField source="dateClose" sx={{ my: 1 }} />
        <TextField source="dateActive" sx={{ my: 1 }} />
        <TextField source="dateDeactive" sx={{ my: 1 }} />
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
