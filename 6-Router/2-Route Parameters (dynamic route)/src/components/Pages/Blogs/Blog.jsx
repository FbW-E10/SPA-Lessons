import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogsApi from "../../../api/blogs";

export default function Blog() {
  let { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    const findBlog = blogsApi.find((item) => item.id === id);
    setBlog(findBlog);
  }, [id]);
  return blog ? (
    <div class="container mt-4 mb-4">
      <h1>{blog.title}</h1>
      <img src={blog.image} className=" m-auto w-50"></img>
      <p class="mt-4 mb-4">{blog.description}</p>
    </div>
  ) : (
    <div>Loading....</div>
  );
}
