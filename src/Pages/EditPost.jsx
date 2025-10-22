import { useEffect, useState } from "react"
import { Container, PostForm } from "../components"
import service from "../Appwrite/config"
import { useNavigate, useParams } from "react-router-dom"

const EditPost = () => {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const nav = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getOneArticle(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        }
    }, [slug, nav])
    
    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
