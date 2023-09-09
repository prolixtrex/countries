import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../components/home/Home";
import About from "../components/about/About";


const Drawer = createDrawerNavigator();

const Menu = () => {


    return (
        <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: "Home", title: 'Where in the world?' }} />
            <Drawer.Screen name="About" component={About} options={{ title: 'About' }} />
        </Drawer.Navigator>
    )
}

export default Menu