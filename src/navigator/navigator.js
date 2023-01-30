import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/index-screen';
import ShowScreen from '../screens/blog-show-screen';
import CreateScreen from '../screens/create-screen';
import EditScreen from '../screens/edit-screen';

export default function Root() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='IndexScreen'>
            <Stack.Screen name="IndexScreen" component={IndexScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ShowScreen" component={ShowScreen} options={{ title: "", headerStyle: { backgroundColor: "rgb(156,163,175)" } }} />
            <Stack.Screen name="CreateScreen" component={CreateScreen} options={{ title: "", headerStyle: { backgroundColor: "rgb(156,163,175)" } }} />
            <Stack.Screen name="EditScreen" component={EditScreen} options={{ title: "", headerStyle: { backgroundColor: "rgb(156,163,175)" } }} />
        </Stack.Navigator>
    )
}