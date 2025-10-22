import { Link } from "react-router-dom"
import service from "../Appwrite/config"

const PostCard = ({ $id, Title, FeaturedImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-md p-4">
                <div className="w-full justify-center mb-4">
                    <img src={service.getPreview(FeaturedImage)} className="rounded-md" alt={Title} />
                </div>
                <h1 className="font-semibold text-xl">{Title}</h1>
            </div>
        </Link>
    )
}

export default PostCard
