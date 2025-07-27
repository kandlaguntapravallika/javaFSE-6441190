import React from "react";

const blogs = [
  { id: 1, title: "Why React is Awesome", date: "2025-07-27" },
  { id: 2, title: "Conditional Rendering in Depth", date: "2025-07-20" },
];

const BlogDetails = () => {
  return (
    <div>
      <h3>Recent Blogs</h3>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title} — <small>{blog.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;