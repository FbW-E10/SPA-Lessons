import React from "react";
import { Link } from "react-router-dom";
import blogsApi from "../../../api/blogs";

const Card = ({ id, title, image }) => {
  return (
    <div class="card">
      <img height={200} src={image} class="card-img-top" alt="..." />
      <div class="card-body border-top">
        <h5 class="card-title ">{title}</h5>

        <Link to={`/blog/${id}`} class="btn btn-primary">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default function Blogs() {
  return (
    <div class="container mt-4">
      <div class="row">
        {blogsApi.map((blog) => (
          <div class="col" key={blog.id}>
            <Card {...blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
