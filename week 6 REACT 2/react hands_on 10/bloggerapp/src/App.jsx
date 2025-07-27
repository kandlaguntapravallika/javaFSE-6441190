import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

const App = () => {
  const [selected, setSelected] = useState("book");

  const renderComponent = () => {
    switch (selected) {
      case "book":
        return <BookDetails />;
      case "blog":
        return <BlogDetails />;
      case "course":
        return <CourseDetails />;
      default:
        return <p>No selection made</p>;
    }
  };

  const element =
    selected === "book" ? (
      <BookDetails />
    ) : selected === "blog" ? (
      <BlogDetails />
    ) : (
      <CourseDetails />
    );

  return (
    <div style={{ padding: 20 }}>
      <h1>Blogger App</h1>

      <button onClick={() => setSelected("book")}>Show Book</button>
      <button onClick={() => setSelected("blog")}>Show Blog</button>
      <button onClick={() => setSelected("course")}>Show Course</button>

      <hr />

      <h2>Using Switch Case</h2>
      {renderComponent()}

      <h2>Using Ternary Operator</h2>
      {element}

      <h2>Using Logical AND (&&)</h2>
      {selected === "book" && <BookDetails />}
    </div>
  );
};

export default App;