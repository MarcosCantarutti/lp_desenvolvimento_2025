import React, { useState } from "react";
import { testimonialData } from "../../Data/testimonial";

const TestimonialSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const MAX_CHARACTERS = 210;

  const getDisplayText = (text: string, index: number): string => {
    if (text.length <= MAX_CHARACTERS || expandedIndex === index) {
      return text;
    }

    return `${text.slice(0, MAX_CHARACTERS).trim()}...`;
  };

  const handleToggle = (index: number): void => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold tracking-widest text-secondary uppercase">
            Impacto comprovado
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-gray-900">
            Confira alguns depoimentos dos nosses clientes
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-600">
            Experiências reais de quem acelerou o desenvolvimento de lideranças,
            cultura e resultados com a LP Desenvolvimento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${testimonial.handle}`}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4"></div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {getDisplayText(testimonial.testimonial, index)}
              </p>

              {testimonial.testimonial.length > MAX_CHARACTERS && (
                <button
                  onClick={() => handleToggle(index)}
                  className="mt-3 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                >
                  {expandedIndex === index ? "Ver menos" : "Ver mais"}
                </button>
              )}

              <div className="flex items-center mt-6 text-gray-500 text-sm">
                <span className="text-sm ml-auto">{testimonial.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
