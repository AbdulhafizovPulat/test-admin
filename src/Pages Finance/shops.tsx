import {
  List,
  Datagrid,
  Create,
  SimpleForm,
  TextInput,
  ArrayInput,
  BulkDeleteButton,
  ReferenceArrayField,
  TextField,
  SimpleShowLayout,
  SingleFieldList,
  ChipField,
  SimpleFormIterator,
  ReferenceArrayInput,
  ReferenceField,
  ReferenceInput,
  ImageField,
  Show,
  TabbedShowLayout,
  TopToolbar,
  SelectColumnsButton,
  DatagridConfigurable,
} from "react-admin";
import { ColorField } from "../functions/ColorField";
const PostListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
  </TopToolbar>
);

export const ShopsList = () => (
  <List actions={<PostListActions />} sx={{ mr: 80}}>
    <DatagridConfigurable
      rowClick="show"
      sx={{ width:1400}}
    >
      <TextField source="id" />
      <TextField source="upperId" />
      <TextField source="latitude" />
      <TextField source="longitude" />
      <ImageField source="imageSource" />
      <ImageField source="logoSource" />
      <ColorField source="color" />
      <ReferenceArrayField reference="categories" source="categoryIds">
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ReferenceArrayField>
      <TextField source="type" />
      <ReferenceField source="merchantId" reference="merchants">
        <TextField source="id" />
      </ReferenceField>
    </DatagridConfigurable>
  </List>
);
export const ShopsShow = () => (
  <Show>
    <SimpleShowLayout sx={{ width: 500 }}>
      <TabbedShowLayout.Tab label="Магазины">
        <TextField source="id" />
        <TextField source="upperId" />
        <TextField source="latitude" />
        <TextField source="longitude" />
        <ImageField source="imageSource" />
        <ImageField source="logoSource" />
        <ColorField source="color" />
        <ReferenceArrayField reference="categories" source="categoryIds">
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </ReferenceArrayField>
        <TextField source="type" />
        <ReferenceField source="merchantId" reference="merchants">
          <TextField source="id" />
        </ReferenceField>

        {/* locales */}
        <TabbedShowLayout sx={{ width: 400 }}>
          <TabbedShowLayout.Tab label="ru">
            <TextField source="locales[0].name" label="name" />
            <TextField source="locales[0].address" label="address" />
            <TextField source="locales[0].description" label="description" />
            <TextField source="locales[0].shopId" label="shopId" />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="uzb">
            <TextField source="locales[1].name" label="name" />
            <TextField source="locales[1].address" label="address" />
            <TextField source="locales[1].description" label="description" />
            <TextField source="locales[1].shopId" label="shopId" />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="uzc">
            <TextField source="locales[2].name" label="name" />
            <TextField source="locales[2].address" label="address" />
            <TextField source="locales[2].description" label="description" />
            <TextField source="locales[2].shopId" label="shopId" />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </TabbedShowLayout.Tab>
    </SimpleShowLayout>
  </Show>
);
export const ShopsCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="upperId" />
      <TextInput source="latitude" />
      <TextInput source="longitude" />
      <TextInput source="imageSrc" />
      <TextInput source="logoSrc" />
      <TextInput source="color" />
      <ArrayInput source="locales">
        <SimpleFormIterator inline>
          <TextInput source="name" helperText={false} />
          <TextInput
            source="description"
            helperText={false}
            sx={{ width: 300 }}
          />
          <TextInput source="address" helperText={false} />
          <TextInput source="localeCode" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
      <ReferenceArrayInput
        label="categoryIds"
        source="categoryIds"
        reference="categories"
      />
      <TextInput source="type" />
      <ReferenceInput source="merchantId" reference="merchants" />
    </SimpleForm>
  </Create>
);
