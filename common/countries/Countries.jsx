import { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import DataContext from "../../dataContext/DataContext";
import { useRouter } from "expo-router";
import style from "./countries.style";

const Countries = () => {
    const {
        pageIndex,
        search,
        searchTerm,
        data,
        isLoading,
        error,
        setNextBtn,
    } = useContext(DataContext);
    // const { data, isLoading, error } = useAxiosFetch();
    const [countries, setCountries] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) {
            setCountries(data);
        }
    }, [isLoading, data]);

    useEffect(() => {
        const handlePages = () => {
            const nextPage = countries
                .slice(pageIndex + 20, pageIndex + 40)
                .map((country) => country.name.common);
            nextPage.length > 0 ? setNextBtn(false) : setNextBtn(true);
            setFiltered(countries.slice(pageIndex, pageIndex + 20));
        };

        handlePages();
    }, [pageIndex, countries]);

    const searchParams = (search, searchTerm) => {
        let result = [];
        switch (searchTerm) {
            case "name":
                result = data.filter((country) =>
                    country.name.common
                        .toLowerCase()
                        .includes(search.toLowerCase())
                );
                break;

            case "capital":
                result = data.filter((country) =>
                    country.capital
                        ?.join()
                        .toLowerCase()
                        .includes(search.toLowerCase())
                );
                break;

            case "languages":
                result = data.filter(
                    (country) =>
                        country.languages &&
                        Object.values(country.languages)
                            .join()
                            .toLowerCase()
                            .includes(search.toLowerCase())
                );
                break;

            case "currencies":
                result = data.filter(
                    (country) =>
                        country.currencies &&
                        Object.values(country.currencies)
                            .map((currency) => currency.name)
                            .join()
                            .toLowerCase()
                            .includes(search.toLowerCase())
                );
                break;

            default:
                result = data.filter((country) =>
                    country.region.toLowerCase().includes(search.toLowerCase())
                );
                break;
        }

        setCountries(result);
    };

    useEffect(() => {
        if (search) {
            searchParams(search, searchTerm);
        } else {
            setFiltered(data.slice(0, 20));
        }
    }, [search]);

    return (
        <View style={style.container}>
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                filtered.length > 0 && (
                    <ScrollView>
                        {filtered.map((item) => (
                            <TouchableOpacity
                                style={{
                                    borderWidth: 1,
                                    borderColor: "black",
                                    marginBottom: 5,
                                    borderRadius: 5,
                                }}
                                key={item.name.common}
                                onPress={() =>
                                    router.push(
                                        `/countryPage/${item.name.official}`
                                    )
                                }
                            >
                                <View style={style.card}>
                                    <View style={style.imageContainer}>
                                        <Image
                                            source={{ uri: item.flags.png }}
                                            resizeMode="cover"
                                            style={style.image}
                                        />
                                    </View>
                                    <View style={style.textContainer}>
                                        <Text
                                            style={style.name}
                                            numberOfLines={1}
                                            ellipsizeMode="tail"
                                        >
                                            {item.name.common}
                                        </Text>
                                        <Text style={style.capital}>
                                            {item.capital?.join(", ")}
                                        </Text>
                                        <Text>{item.region}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )
            )}
        </View>
    );
};

export default Countries;
