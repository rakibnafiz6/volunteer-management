import { Link } from "react-router-dom";


const MyVolunteerCard = ({myPost, handleDelete}) => {
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            myPost.map(post=> <div key={post._id} className="card bg-black text-cyan-400 shadow-xl border-2 border-lime-500">
                <div className="card-body items-center">
                    <div className="space-y-2">
                    <h2 className="card-title">{post.title}</h2>
                    <p className=""><span className="font-semibold text-rose-500">Location:</span> {post.location}</p>
                    <p className="font-semibold"><span className="font-semibold text-rose-500">Category:</span> {post.category}</p>
                    </div>
                    <div className="card-actions mt-2">
                    <Link to={`/update/${post._id}`}><button className='btn mr-2 bg-[#2d49bd] text-white'>Update</button></Link>
                        <button onClick={()=>handleDelete(post._id)} className="btn bg-[#de2045] text-white">Delete</button>
                    </div>
                </div>
            </div>)
          }
        </div>
    );
};

export default MyVolunteerCard;