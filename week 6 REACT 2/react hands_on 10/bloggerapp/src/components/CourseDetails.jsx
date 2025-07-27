import React from "react";

const Course = ({ title, duration }) => (
  <li>
    {title} - <strong>{duration}</strong>
  </li>
);

const CourseDetails = () => {
  const courses = [
    { id: 1, title: "React Basics", duration: "3 Weeks" },
    { id: 2, title: "Advanced React", duration: "4 Weeks" },
  ];

  return (
    <div>
      <h3>Available Courses</h3>
      <ul>
        {courses.map((course) => (
          <Course key={course.id} title={course.title} duration={course.duration} />
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;