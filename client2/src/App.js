import React from 'react';
import restProvider from "ra-data-simple-rest"
import {Admin, Resource} from "react-admin";
import {PostList, PostCreate, PostEdit} from "./components/Posts";
import {UserList, UserCreate, UserEdit} from "./components/Users";

const App = () => (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource
            name="posts"
            list={PostList}
            create={PostCreate}
            edit={PostEdit}
        />
        <Resource
            name="users"
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
        />
    </Admin>
);

export default App;
