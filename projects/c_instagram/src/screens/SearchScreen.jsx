import { View, Text, ScrollView, SafeAreaView } from "react-native";
import {SearchBox} from "../components/commom/SearchBox";
import SearchContent  from "../components/commom/SearchContent";
const SearchScreen = () => {
    return <SafeAreaView style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        position: 'relative',
    }}>
        <ScrollView onPressIn={() => setPressed(true)}>
            <SearchBox/>
            <SearchContent/>
        </ScrollView>
    </SafeAreaView>
};

export default SearchScreen;


