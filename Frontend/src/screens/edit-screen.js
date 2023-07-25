import { useContext, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Context as BlogContext } from '../context/blog-context'


const EditScreen = ({ navigation, route: { params } }) => {
    const { id } = params
    const { state, editBlogPosts } = useContext(BlogContext)
    const blogPost = state.find(
        blogPost => blogPost.id === id
    )
    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)

    return (
        <View className="flex-1 bg-slate-300 items-center space-y-2">
        <View className="flex mt-48 space-y-5 ">
            <View>
                <Text className="font-bold mb-1 ml-1">Enter Title : </Text>
                <TextInput className="bg-gray-200 p-2 w-80 rounded-lg" value={title} onChangeText={setTitle}  />
            </View>
            <View>
                <Text className="font-bold mb-1 ml-1">Enter Content : </Text>
                <TextInput className="bg-gray-200 p-2 w-80 rounded-lg" value={content} onChangeText={setContent} multiline={true} />
            </View>
            <View>
                <Button title='Edit Blog Post' onPress={() => editBlogPosts(id, title, content, () => navigation.goBack())} />
            </View>
        </View>
    </View>
    )
}
            

export default EditScreen