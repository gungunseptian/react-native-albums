// import a library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a componernt
const App = () => (
    <View>
        <Header headerText={'Albums Header'} />
        <AlbumList />
    </View>
);

// render it to device
AppRegistry.registerComponent('albums', () => App);
