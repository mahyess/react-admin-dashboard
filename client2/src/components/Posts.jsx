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
    DateField,
    EditButton,
    DeleteButton
} from 'react-admin'

export const PostCreate = props => {
    return (
        <Create title='Create a Post' {...props}>
            <SimpleForm>
                <TextInput source='title'/>
                <TextInput source='body' multiLine/>
                <DateInput label='Published' source={'publishedAt'}/>
            </SimpleForm>
        </Create>
    );
};

export const PostEdit = props => {
    return (
        <Edit title='Edit this Post' {...props}>
            <SimpleForm>
                <TextInput diabled source='id'/>
                <TextInput source='title'/>
                <TextInput source='body' multiLine/>
                <DateInput label='Published' source={'publishedAt'}/>
            </SimpleForm>
        </Edit>
    );
};

export const PostList = props => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='title'/>
                <TextField source='body'/>
                <DateField source='publishedAt'/>
                <EditButton basePath='/posts'/>
                <DeleteButton basePath='/posts'/>
            </Datagrid>
        </List>
    );
};