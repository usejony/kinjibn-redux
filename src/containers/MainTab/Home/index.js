import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from 'react-native-vector-icons/Ionicons';

import Header from '../../../components/Header';
import commonStyle from '../../../common/commonStyle';
import Activity from '../../../components/Activity';
import NewsList from './subpages/NewsList';
import { fetchIfNeeded } from '../../../actions';


class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        tabBarLabel: '新闻',
        tabBarIcon: ({tintColor, focused}) => (
            <Icons name={focused ? 'ios-globe' : 'ios-globe-outline'} color={tintColor} size={28}/>
        )
    });
    constructor(props) {
        super(props);
        this.state = {
            newsData: null
        }
    }
    componentWillMount() {
        console.log(this.props)
    }

    renderItem = () => {

    }
    
    render() {
        return (
            <View style={commonStyle.container}>
                <StatusBar animated={true} barStyle="light-content"/>
                <Header title="行业新闻" style={styles.header}/>
                {
                    this.state.newsData
                        ? <NewsList data={this.state.newsData}/>
                        : <Activity/>
                }
            </View>
        );
    }
    componentDidMount() {
        
    }

}

const styles = EStyleSheet.create({
    header: {
        backgroundColor: '$themeColor'
    }
});

const mapStateToProps = state => {
    return {
        newsData: state.news.items,
        isFetching: state.news.isFetching,
        pageCount: state.news.pageCount,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch()
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);