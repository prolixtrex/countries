import { useEffect, useState } from "react";
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
    Image,
} from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";
import useAxiosFetch from "../../api/useAxiosFetch";
import MapPreview from "../../common/map/MapPreview";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

const CountryPage = () => {
    const name = useGlobalSearchParams();
    const { data, isLoading, error } = useAxiosFetch(
        `name/${name.country}?fullText=true`
    );
    const [country, setCountry] = useState([]);
    const [borderAccr, setBorderAccr] = useState([]);
    const [borders, setBorders] = useState([]);
    const [pageReady, setPageReady] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) {
            setCountry(data);
            setBorderAccr(data.flatMap((country) => country.borders));
        }
        setPageReady(true);
    }, [!isLoading]);

    useEffect(() => {
        const fetch = async (accr) => {
            let loading = true;
            try {
                if (loading && accr !== "") {
                    const response = await axios.request(
                        `https://restcountries.com/v3.1/alpha?codes=${accr}`
                    );
                    setBorders(
                        response.data.map((country) => country.name.common)
                    );
                }
            } catch (err) {
                console.log(err);
            } finally {
                loading = false;
            }
            setPageReady(true);
        };

        fetch(borderAccr.join(","));
    }, [borderAccr]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.headerBtn}
                >
                    <Ionicons name="arrow-back" style={styles.nav} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => router.replace(`/`)}
                    style={styles.headerBtn}
                >
                    <Ionicons name="home" style={styles.nav} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <View>
                        {isLoading ? (
                            <ActivityIndicator size="large" />
                        ) : error ? (
                            <Text>Something Went Wrong</Text>
                        ) : (
                            pageReady &&
                            country.map((country) => (
                                <View
                                    style={styles.country}
                                    key={country.name.common}
                                >
                                    <View>
                                        <View style={styles.image}>
                                            <View style={styles.flagBox}>
                                                <Image
                                                    source={{
                                                        uri: country.flags.png,
                                                    }}
                                                    resizeMode="cover"
                                                    style={styles.flag}
                                                />
                                            </View>

                                            <View>
                                                {Object.values(
                                                    country.coatOfArms
                                                ) && (
                                                    <Image
                                                        source={{
                                                            uri: country
                                                                .coatOfArms.png,
                                                        }}
                                                        resizeMode="cover"
                                                        style={styles.coatOfArm}
                                                    />
                                                )}
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.title}>
                                                {country.name.official}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.card}>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Capital:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.capital &&
                                                    country.capital.join(", ")}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Common Name:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.name.common &&
                                                    country.name.common}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Native Name:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.name.nativeName &&
                                                    Object.values(
                                                        country.name.nativeName
                                                    )
                                                        .map(
                                                            (name) =>
                                                                name.common
                                                        )
                                                        .join(", ")}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Demonyms:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.demonyms.eng.m &&
                                                    country.demonyms.eng.m}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Languages:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.languages &&
                                                    Object.values(
                                                        country.languages
                                                    ).join(", ")}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.card}>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Region:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.region &&
                                                    country.region}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Sub Region:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.subregion &&
                                                    country.subregion}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Timezones:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.timezones
                                                    ?.map((time) => time)
                                                    .join(", ")}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                IDD:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.idd &&
                                                    Object.values(
                                                        country.idd
                                                    ).join(", ")}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Latitude:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.latlng?.[0]}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Longitude:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.latlng?.[1]}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.card}>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Population:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.population?.toLocaleString()}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Currencies:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.currencies &&
                                                    Object.values(
                                                        country.currencies
                                                    )
                                                        .map(
                                                            (currency) =>
                                                                `${currency.name} (${currency.symbol})`
                                                        )
                                                        .join(", ")}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                area:
                                            </Text>
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    flexGrow: 3,
                                                    paddingRight: 5,
                                                    justifyContent: "flex-end",
                                                }}
                                            >
                                                {country.area && (
                                                    <>
                                                        <Text
                                                            style={{
                                                                fontSize: 25,
                                                            }}
                                                        >
                                                            {country.area.toLocaleString()}
                                                            km
                                                        </Text>
                                                        <Text
                                                            style={{
                                                                fontSize: 15,
                                                            }}
                                                        >
                                                            2
                                                        </Text>
                                                    </>
                                                )}
                                            </View>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Landlocked:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.landlocked
                                                    ? "Yes"
                                                    : "No"}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.card}>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Abbreviations:
                                            </Text>
                                            <Text
                                                style={styles.text}
                                            >{`${country.cca2}, ${country.cca3}, ${country.cioc}`}</Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Top Level Domain:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.tld && country.tld}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Start of week:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.startOfWeek &&
                                                    country.startOfWeek}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Driving Lane:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.car?.side}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                Independent:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.independent
                                                    ? "Yes"
                                                    : "No"}
                                            </Text>
                                        </View>
                                        <View style={styles.divider}></View>
                                        <View style={styles.cell}>
                                            <Text style={styles.subtitle}>
                                                UN Member:
                                            </Text>
                                            <Text style={styles.text}>
                                                {country.unMember
                                                    ? "Yes"
                                                    : "No"}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.card}>
                                        <Text style={styles.borderTitle}>
                                            Borders
                                        </Text>
                                        <View style={styles.divider}></View>
                                        <View style={styles.borders}>
                                            {!borders.length ? (
                                                <Text
                                                    style={{
                                                        textAlign: "center",
                                                        fontWeight: "bold",
                                                        flex: 1,
                                                        fontSize: 20,
                                                    }}
                                                >
                                                    None
                                                </Text>
                                            ) : (
                                                borders.map((border) => (
                                                    <TouchableOpacity
                                                        key={border}
                                                        onPress={() =>
                                                            router.push(
                                                                `/countryPage/${border}`
                                                            )
                                                        }
                                                        style={styles.borderBtn}
                                                    >
                                                        <Text
                                                            style={
                                                                styles.borderName
                                                            }
                                                        >
                                                            {border}
                                                        </Text>
                                                    </TouchableOpacity>
                                                ))
                                            )}
                                        </View>
                                    </View>

                                    <MapPreview
                                        latitude={country.latlng[0]}
                                        longitude={country.latlng[1]}
                                        title={country.name.common}
                                    />
                                </View>
                            ))
                        )}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default CountryPage;
