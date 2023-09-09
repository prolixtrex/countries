import { useContext } from "react";
import { View } from "react-native";
import MyContext from "../../dataContext/DataContext";
import { Picker } from "@react-native-picker/picker";
import { SearchBar } from "@rneui/base";

import style from "./searchBar.style";

const SearchBars = () => {
    const { search, setSearch, searchTerm, setSearchTerm } =
        useContext(MyContext);

    const handleSearch = (text) => {
        // const trimmedText = text.trim();
        setSearch(text);
    };

    return (
        <View style={style.searchContainer}>
            <View style={style.searchPicker}>
                <Picker
                    style={style.picker}
                    selectedValue={searchTerm}
                    onValueChange={(itemValue) => setSearchTerm(itemValue)}
                >
                    <Picker.Item label="Name" value="name" />
                    <Picker.Item label="Capital" value="capital" />
                    <Picker.Item label="Region" value="region" />
                    <Picker.Item label="Language" value="languages" />
                    <Picker.Item label="Currency" value="currencies" />
                </Picker>
            </View>
            <View style={style.search}>
                <SearchBar
                    platform="android"
                    placeholder={`search by ${searchTerm}`}
                    value={search}
                    onChangeText={handleSearch}
                    onCancel={() => setSearch("")}
                />
            </View>
        </View>
    );
};

export default SearchBars;
