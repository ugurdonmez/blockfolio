import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Header } from "react-native-elements";
import HeaderLeft from './header/HeaderLeftCmp';
import HeaderRight from './header/HeaderRightCmp';

class Home extends Component {
    render() {
        return (
            <View>
                <Header>
                    <HeaderLeft />
                    <HeaderRight />
                </Header>

                <Text> ugur </Text>
            </View>
        );
    }
}

export default Home;