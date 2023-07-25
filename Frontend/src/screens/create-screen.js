import { useContext, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Context as BlogContext } from '../context/blog-context'


const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { addBlogPosts } = useContext(BlogContext)

    return (
        <View className="flex-1 bg-slate-300 items-center space-y-2">
            <View className="flex mt-48 space-y-5 ">
                <View>
                    <Text className="font-bold mb-1 ml-1">Enter Title : </Text>
                    <TextInput className="bg-gray-200 p-2 w-80 rounded-lg" value={title} onChangeText={setTitle} />
                </View>
                <View>
                    <Text className="font-bold mb-1 ml-1">Enter Content : </Text>
                    <TextInput className="bg-gray-200 p-2 w-80 rounded-lg" value={content} onChangeText={setContent} />
                </View>
                <View>
                    <Button title='Create Blog Post' onPress={() => addBlogPosts(title, content, () => {
                        navigation.navigate("IndexScreen")
                    })} />
                </View>
            </View>
        </View>
    )
}


export default CreateScreen