import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Foundation } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/blog-context'

// const ShowScreen = ({navigation, route}) => {
//     const {id} = route.params

const ShowScreen = ({ navigation, route: { params } }) => {
    const { state } = useContext(BlogContext)
    const { id } = params
    const blogPost = state.find(
        blogPost => blogPost.id === id
    )
    return (
        
        <View className="flex-1 bg-slate-300 pt-28 items-center space-y-3">
            <View className="flex-row bg-blue-600 p-4 rounded-md  w-80" >
                <Text className="text-white text-lg">Blog</Text>
                <TouchableOpacity className="ml-auto" onPress={() => navigation.navigate('EditScreen',{id})}>
                    <Foundation name="pencil" size={26} color="black" />
                </TouchableOpacity>
            </View>
            <View className="p-3 w-80 bg-slate-400 px-4 rounded-lg">
                <Text className="text-center font-bold text-lg">{blogPost.title}</Text>
                <View className="p-3 mt-2 bg-slate-500 px-4 rounded-lg">
                    <Text className="text-white">{blogPost.content}</Text>
                </View>
            </View>
        </View>
    )
}

export default ShowScreen