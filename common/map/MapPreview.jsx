import { View, Text, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Linking } from "react-native";

const MapPreview = ({ latitude, longitude, title }) => {
    const handleMapClick = () => {
        let url;
        if (Platform.OS === "ios") {
            url = `http://maps.apple.com/?ll=${latitude},${longitude}`;
        } else if (Platform.OS === "android") {
            url = `geo:${latitude},${longitude}?q=${latitude},${longitude}`;
        } else {
            url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        }

        Linking.openURL(url);
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView
                onDoublePress={handleMapClick}
                style={{ minHeight: 200 }}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 1.9,
                    longitudeDelta: 1.4,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude,
                    }}
                    title={title}
                    description="Marker Description"
                />
            </MapView>
            <Text>Doubleclick to open in map</Text>
        </View>
    );
};

export default MapPreview;
