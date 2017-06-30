import React, { Component } from 'react';
import { 
    View,
    Text,
    FlatList
 } from 'react-native';
 import { connect } from 'react-redux';

import { fetchIfNeeded } from '../../../../actions';
import commonStyle from '../../../../common/commonStyle';

export default class NewsList extends Component {
    constructor(props) {
        super(props);
    }

    renderItem = ({item,index}) => (
        <Text>{item.title}</Text>
    ) 
     render() {
         return (
             <FlatList
                data={this.props.data}
                renderItem={this.renderItem}
             />
         );
     }
 }
