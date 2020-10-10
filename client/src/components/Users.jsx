import React from 'react';
import {
    Create,
    Edit,
    List,
    SimpleForm,
    TextInput,
    DateInput,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton
} from 'react-admin'

export const UserCreate = props => {
    return (
        <Create title='Create a User' {...props}>
            <SimpleForm>
                <TextInput source='name'/>
                <TextInput source='email'/>
            </SimpleForm>
        </Create>
    );
};

export const UserEdit = props => {
    return (
        <Edit title='Edit this User' {...props}>
            <SimpleForm>
                <TextInput diabled source='id'/>
                <TextInput source='name'/>
                <TextInput source='email'/>
            </SimpleForm>
        </Edit>
    );
};

export const UserList = props => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='name'/>
                <EmailField source='email'/>
                <EditButton basePath='/users'/>
                <DeleteButton basePath='/users'/>
            </Datagrid>
        </List>
    );
};