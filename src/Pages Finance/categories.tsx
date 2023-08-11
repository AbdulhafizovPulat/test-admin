import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Edit,
  Create,
  SingleFieldList,
  ArrayInput,
  SimpleFormIterator,
  useLocaleState,
  ReferenceArrayField,
  ChipField,
} from "react-admin";
import  apiProvider  from '../API/apiService';
import { log } from "console";
import { title } from "process";


export const CategoriesList =  () => {
  let index : number = 0;
  const [locale] = useLocaleState();
  fetch(`https://admin.finance.taqsim.uz/api/categories`, {
    method: 'GET'}).then(item => item.text()).then(response => {
    const obj = JSON.parse(response);
    
    for (let i = 0; i < obj.length; i++) {
      const element = obj[i];
 
      element.locales.forEach((item : any, idx : number) => item.localeKey === locale ? index = idx : console.log())
    }
  })
  
  

  return (
    <List>
      <Datagrid>
          <TextField source={`locales[${index}].title`} />
      </Datagrid>
    </List>
  );
};


export const CategoriesCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="upperId" />
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

export const CategoriesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="upperId" />
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
