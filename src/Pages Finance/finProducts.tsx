import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  ReferenceField,
  ReferenceInput,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  ReferenceArrayInput,
  WrapperField,
  ArrayField,
  ArrayInput,
  SimpleFormIterator,
  DatagridConfigurable,
  TopToolbar,
  SelectColumnsButton,
  TabbedShowLayout,
  Show,
} from "react-admin";
import { Grid } from "@mui/material";
const PostListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
  </TopToolbar>
);

export const FinProductsList = () => (
  <List actions={<PostListActions />} sx={{ mr: 200 }}>
    <DatagridConfigurable rowClick="show">
      <TextField source="id" />
      <ReferenceField source="finOrgId" reference="finorgs" />

      <TextField source="term.duration" />
      <TextField source="term.type" />

      <WrapperField label="resources.finproducts.fields.value">
        <TextField source="maxValue" />
        <TextField source="minValue" />
      </WrapperField>

      <TextField source="addedValue" />
      <TextField source="comissionValue" />

      <WrapperField label="resources.finproducts.fields.prepay">
        <TextField source="prepayValue" />
        <TextField source="prepayValueType" sx={{ marginX: 1 }} />
        <TextField source="prepayTimeout" />
      </WrapperField>

      <TextField source="productSource" />
      <TextField source="dealType" />
      <TextField source="scheduleOn" />
      <TextField source="scoreGuarantee" />

      <WrapperField label="resources.finproducts.fields.scoring">
        <TextField source="scoring.provider" sx={{ marginX: 1 }} />
        <TextField source="scoring.model" />
      </WrapperField>

      <WrapperField label="resources.finproducts.fields.identification">
        <TextField source="identification.provider" sx={{ marginX: 1 }} />
        <TextField source="identification.method" />
      </WrapperField>

      <WrapperField label="resources.finproducts.fields.scheduler">
        <TextField source="scheduler.provider" sx={{ marginX: 1 }} />
        <TextField source="scheduler.method" />
      </WrapperField>

      <WrapperField label="resources.finproducts.fields.coBorrower">
        <TextField source="coBorrower.min" />
        <TextField source="coBorrower.max" />
      </WrapperField>

      <WrapperField label="resources.finproducts.fields.guarantee">
        <TextField source="guarantee.min" />
        <TextField source="guarantee.max" />
      </WrapperField>

      <ReferenceArrayField
        label="resources.finproducts.fields.categories"
        reference="categories"
        source="categories"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>

      <ReferenceArrayField
        label="resources.finproducts.fields.merchants"
        reference="merchants"
        source="merchants"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>

      <ArrayField source="locales">
        <Datagrid bulkActionButtons={false}>
          <TextField source="localeKey" />
          <TextField source="title" />
          <TextField source="description" />
        </Datagrid>
      </ArrayField>

      <EditButton />
    </DatagridConfigurable>
  </List>
);
export const FinProductShow = () => (
  <Show sx={{ mr: 120 }}>
    <TabbedShowLayout sx={{ width: 700 }}>
      <TabbedShowLayout.Tab label="Идентификации">
        <TextField source="id" sx={{ my: 2, fontSize: 16}}/>
        <ReferenceField source="finOrgId" reference="finorgs" sx={{ my: 2}}/>
        <WrapperField label="resources.finproducts.fields.identification">
          <TextField source="identification.provider" sx={{ my: 2}}/>
          <TextField source="identification.method" sx={{ my: 2}}/>
        </WrapperField>
      </TabbedShowLayout.Tab>

      <TabbedShowLayout.Tab label="Значении">
        <TextField source="term.duration" sx={{ my: 2}}/>
        <TextField source="term.type" sx={{ my: 2}}/>
        <WrapperField label="resources.finproducts.fields.value" >
          <TextField source="maxValue" sx={{ my: 2}}/>
          <TextField source="minValue" />
        </WrapperField>
        <TextField source="addedValue" sx={{ my: 2}}/>
        <TextField source="comissionValue" sx={{ my: 2}}/>
        <WrapperField label="resources.finproducts.fields.prepay">
          <TextField source="prepayValue" sx={{ my: 2}}/>
          <TextField source="prepayValueType" sx={{ marginX: 1 }} />
          <TextField source="prepayTimeout" />
        </WrapperField>
      </TabbedShowLayout.Tab>

      <TabbedShowLayout.Tab label="Типы">
        <TextField source="productSource" sx={{ my: 2}}/>
        <TextField source="dealType" sx={{ my: 2}}/>
        <TextField source="scheduleOn" sx={{ my: 2}}/>
        <TextField source="scoreGuarantee" sx={{ my: 2}}/>

        <WrapperField label="resources.finproducts.fields.scoring">
          <TextField source="scoring.provider" sx={{ my: 2}}/>
          <TextField source="scoring.model" sx={{ my: 2}}/>
        </WrapperField>

        <WrapperField label="resources.finproducts.fields.scheduler">
          <TextField source="scheduler.provider" sx={{ my: 2 }} />
          <TextField source="scheduler.method"  sx={{ my: 2}}/>
        </WrapperField>

        <WrapperField label="resources.finproducts.fields.coBorrower">
          <TextField source="coBorrower.min" sx={{ my: 2}}/>
          <TextField source="coBorrower.max" />
        </WrapperField>

        <WrapperField label="resources.finproducts.fields.guarantee">
          <TextField source="guarantee.min" sx={{ my: 2}}/>
          <TextField source="guarantee.max" />
        </WrapperField>
      </TabbedShowLayout.Tab>

      <TabbedShowLayout.Tab label="Агенты">
        <ReferenceArrayField
          label="resources.finproducts.fields.categories"
          reference="categories"
          source="categories"
          sx={{ my: 2}}
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>

        <ReferenceArrayField
          label="resources.finproducts.fields.merchants"
          reference="merchants"
          source="merchants"
          sx={{ my: 2}}
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>

        <ArrayField source="locales" >
          <Datagrid bulkActionButtons={false}>
            <TextField source="localeKey" />
            <TextField source="title" />
            <TextField source="description" />
          </Datagrid>
        </ArrayField>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);

export const FinProductsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextInput source="id" />
          <ReferenceInput source="finOrgId" reference="finorgs" />
          <ReferenceArrayInput source="categories" reference="categories" />
          <ReferenceArrayInput source="merchants" reference="merchants" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="maxValue" sx={{ marginRight: 5 }} />
          <TextInput source="minValue" />
          <TextInput source="addedValue" sx={{ marginRight: 5 }} />
          <TextInput source="comissionValue" />
          <TextInput source="prepayValue" sx={{ marginRight: 5 }} />
          <TextInput source="prepayValueType" />
          <TextInput source="prepayTimeout" sx={{ marginRight: 5 }} />
          <TextInput source="productSource" />
          <TextInput source="dealType" sx={{ marginRight: 5 }} />
          <TextInput source="scheduleOn" />
          <TextInput source="scoreGuarantee" />
        </Grid>
        <Grid item xs={4}>
          <TextInput
            source="term.duration"
            label="duration"
            sx={{ marginRight: 5 }}
          />
          <TextInput source="term.type" label="type" />

          <TextInput source="scoring.provider" sx={{ marginRight: 5 }} />
          <TextInput source="scoring.model" />

          <TextInput
            source="identification.provider"
            label="Identification Provider"
            sx={{ marginRight: 5 }}
          />
          <TextInput source="identification.method" />

          <TextInput source="scheduler.provider" sx={{ marginRight: 5 }} />
          <TextInput source="scheduler.method" />

          <TextInput source="coBorrower.min" sx={{ marginRight: 5 }} />
          <TextInput source="coBorrower.max" />

          <TextInput source="guarantee.min" sx={{ marginRight: 5 }} />
          <TextInput source="guarantee.max" />
        </Grid>
      </Grid>
      <ArrayInput source="locales">
        <SimpleFormIterator inline>
          <TextInput source="localeKey" helperText={false} />
          <TextInput source="title" helperText={false} />
          <TextInput source="description" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const FinProductsEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="finOrgId" reference="finorganizations" />

      <TextInput source="term.duration" label="duration" />
      <TextInput source="term.type" label="type" />

      <TextInput source="maxValue" />
      <TextInput source="minValue" />
      <TextInput source="addedValue" />
      <TextInput source="comissionValue" />
      <TextInput source="prepayValue" />
      <TextInput source="prepayValueType" />
      <TextInput source="prepayTimeout" />
      <TextInput source="productSource" />
      <TextInput source="dealType" />
      <TextInput source="scheduleOn" />
      <TextInput source="scoreGuarantee" />

      <TextInput source="scoring.provider" label="Scoring Provider" />
      <TextInput source="scoring.model" label="Scoring Model" />

      <TextInput
        source="identification.provider"
        label="Identification Provider"
      />
      <TextInput source="identification.method" label="Identification Method" />

      <TextInput source="scheduler.provider" label="Scheduler Provider" />
      <TextInput source="scheduler.method" label="Scheduler Method" />

      <TextInput source="coBorrower.min" label="CoBorrower Min" />
      <TextInput source="coBorrower.max" label="CoBorrower Max" />

      <TextInput source="guarantee.min" label="Guarantee Min" />
      <TextInput source="guarantee.max" label="Guarantee Max" />

      <ReferenceArrayInput
        label="categories"
        source="categories"
        reference="categories"
      />
      <ReferenceArrayInput
        label="merchants"
        source="merchants"
        reference="merchants"
      />

      <ArrayInput source="locales">
        <SimpleFormIterator inline>
          <TextInput source="localeKey" helperText={false} />
          <TextInput source="title" helperText={false} />
          <TextInput source="description" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
