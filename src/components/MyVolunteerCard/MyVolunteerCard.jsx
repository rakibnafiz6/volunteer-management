import { Link } from "react-router-dom";


const MyVolunteerCard = ({myPost, handleDelete}) => {
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            myPost.map(post=> <div key={post._id} className="card bg-base-100 shadow-xl">
                <div className="card-body items-center space-y-3">
                    <h2 className="card-title">{post.title}</h2>
                    <p>Location: {post.location}</p>
                    <p>Category: {post.category}</p>
                    <div className="card-actions">
                    <Link to={`/update/${post._id}`}><button className='btn mr-2'>Update</button></Link>
                        <button onClick={()=>handleDelete(post._id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>)
          }
        </div>
    );
};

export default MyVolunteerCard;