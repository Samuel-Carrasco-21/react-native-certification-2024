import { View, Text, ScrollView, SafeAreaView } from "react-native";
import {SearchBox} from "../components/commom/SearchBox";
import SearchContent  from "../components/commom/SearchContent";
const SearchScreen = () => {
    return <SafeAreaView style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    }}>
        <ScrollView>
            <SearchBox/>
            <SearchContent/>
        </ScrollView>
    </SafeAreaView>
};

export default SearchScreen;


