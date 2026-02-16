import React, { useState, useEffect } from "react";
import CourseCard from "../Molecules/CourseCard";
import { coursesData } from "../../Data/courses";
import { Course } from "../../types";

const CourseHero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(coursesData);

  useEffect(() => {
    const filtered = coursesData.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredCourses(filtered);
  }, [searchQuery]);

  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in-up">
      <section className="container mx-auto px-4 py-24 pt-10 pb-6 sm:px-6">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-secondary">
            Trilhas e conteúdos para líderes e equipes
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            Encontre conteúdos que apoiam o desenvolvimento de pessoas, gestão e
            cultura organizacional. Use a busca para localizar o que precisa.
          </p>
          <div className="mx-auto mt-8 w-full max-w-lg">
            <input
              type="text"
              placeholder="Busque por temas como liderança, cultura, RH, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                link={course.link}
                image={course.image}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              <p>Course não encontrado.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CourseHero;
