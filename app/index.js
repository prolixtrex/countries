import { SafeAreaView } from 'react-native'
import { ContextProvider } from '../dataContext/DataContext'
import Menu from './Menu'
import 'expo-dev-client'

const index = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ContextProvider>
                <Menu />
            </ContextProvider>
        </SafeAreaView>
    )
}

export default index