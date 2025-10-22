import { useEffect, useState } from "react"
import service from "../Appwrite/config"
import { Container, PostCard } from "../components"

const AllPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => { }, [])
    service.getAllArticles([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    }).catch
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap"></div>
                {posts.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4"><PostCard post={post} /></div>
                ))}
            </Container>
        </div>
    )
}

export default AllPosts
