import { View } from "react-native";

import SearchBars from "../../common/search/SearchBars";
import Countries from "../../common/countries/Countries";
import Footer from "../../common/footer/Footer";

import style from "./home.style";

const Home = () => {
    return (
        <View style={style.container}>
            <SearchBars />
            <Countries />
            <Footer />
        </View>
    );
};

export default Home;
