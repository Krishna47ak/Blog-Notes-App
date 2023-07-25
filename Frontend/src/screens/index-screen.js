import React, { useContext, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/blog-context'

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPosts, getBlogPosts } = useContext(BlogContext)
    // navigation.setOptions({
    //     title: 'My Blog', headerRight: () => <MaterialIcons name="add-box" size={24} color="black" />
    // })
    useEffect(() => {
        getBlogPosts();
        const listener = navigation.addListener('focus', () => {
            getBlogPosts()
        })
        
        return () => {
            listener.remove()
        }
    },[])

    return (
        <View className="flex-1 bg-slate-300 ">
            <View className="flex-row bg-gray-400 p-4 pt-16 px-6 rounded-2xl mb-8" >
                <Text className="text-white text-xl font-bold">My Blogs</Text>
                <TouchableOpacity className="ml-auto" onPress={() => navigation.navigate('CreateScreen')}>
                    <MaterialIcons name="add-box" size={26} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                className="mt-5"
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity className="flex items-center" onPress={() => navigation.navigate("ShowScreen", { id: item.id })}>
                            <View className="flex-row bg-white  rounded-md my-1 items-center px-2 w-80">
                                <Text className="w-52 pl-2">{item.title}</Text>
                                <TouchableOpacity className="p-3 ml-auto" onPress={() => deleteBlogPosts(item.id)}>
                                    <AntDesign name="delete" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}


export default IndexScreen