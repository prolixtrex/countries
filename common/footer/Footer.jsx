import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MyContext from "../../dataContext/DataContext";

import style from "./footer.style";

const Footer = () => {
    const { pageNum, setPageNum, setPageIndex, nextBtn } =
        useContext(MyContext);

    const handlePress = (direction) => {
        if (direction === "prev") {
            if (pageNum > 1) {
                setPageIndex((prev) => prev - 20);
                setPageNum((prev) => prev - 1);
            }
        } else {
            setPageIndex((prev) => prev + 20);
            setPageNum((prev) => prev + 1);
        }
    };

    return (
        <View style={style.container}>
            <TouchableOpacity
                disabled={pageNum === 1 ? true : false}
                onPress={() => handlePress("prev")}
            >
                <Text
                    style={[style.number, { opacity: pageNum === 1 ? 0.5 : 1 }]}
                >
                    Prev
                </Text>
            </TouchableOpacity>
            <Text style={style.number}>{pageNum}</Text>
            <TouchableOpacity
                disabled={nextBtn}
                onPress={() => handlePress("next")}
            >
                <Text style={[style.number, { opacity: nextBtn ? 0.5 : 1 }]}>
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
