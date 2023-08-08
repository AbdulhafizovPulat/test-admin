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
    ArrayField,
    SingleFieldList,
    ChipField,
    SimpleFormIterator,
    ReferenceArrayInput,
    Edit,
    ReferenceField,
    ReferenceInput
  } from "react-admin";
  
  export const ShopsList = () => (
    <List>
      <Datagrid
        bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}
      >    
        <TextField source="id"/>
        <TextField source="upperId" />
        <TextField source="latitude" />
        <TextField source="longitude" />
        <TextField source="imageSource" />
        <TextField source="logoSource" />
        <TextField source="color" />
        <ArrayField source="locales">
        <Datagrid bulkActionButtons={false}>
          <TextField source="name" />
          <TextField source="address" />
          <TextField source="description" />
          <TextField source="shopId" />
          <TextField source="localeCode" />
        </Datagrid>
      </ArrayField>
      <ReferenceArrayField
        reference="categories"
        source="categoryIds"
      >
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ReferenceArrayField>
        <TextField source="type" />
        <ReferenceField source="merchantId" reference="merchants" >
            <TextField source="id" />     
        </ReferenceField>
      </Datagrid>
    </List>
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
          <TextInput source="description" helperText={false} sx={{ width: 300 }} />
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
  
  export const ShopsEdit = () => (
    <Edit>
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
          <TextInput source="description" helperText={false} sx={{ width: 300 }} />
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
    </Edit>
  );
  