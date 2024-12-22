import React from 'react';

const AddVolunteer = () => {
    return (
        <div>
            <h2>volunteer add page</h2>
            <form className="card-body">
                {/* Thumbnail */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Thumbnail</span>
                    </label>
                    <input type="url" name='thumbnail' placeholder="thumbnail" className="input input-bordered" required />
                </div>
                {/* Post Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Post Title</span>
                    </label>
                    <input type="text" name='title' placeholder="post-title" className="input input-bordered" required />
                </div>
                {/* Description  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='description ' placeholder="description " className="input input-bordered" required />
                </div>
                {/* Category  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name='category' className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Selected Category</option>
                        <option>healthcare</option>
                        <option>education</option>
                        <option>social service</option>
                        <option>animal welfare</option>
                    </select>
                </div>
                {/* Location  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name='location ' placeholder="location " className="input input-bordered" required />
                </div>
                {/* No. of volunteers needed */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">No.of volunteers Needed </span>
                    </label>
                    <input type="text" name='volunteer' placeholder="no.of volunteers" className="input input-bordered" required />
                </div>
                {/* Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" name='deadline' placeholder="deadline" className="input input-bordered" required />
                </div>

                {/* add post btn */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Post</button>
                </div>
            </form>
        </div>
    );
};

export default AddVolunteer;