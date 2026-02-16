import React from "react";
import Button from "../Atoms/Button";

const NotFoundHero: React.FC = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700 animate-fade-in-up">
      <div className="container flex flex-col items-center">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-primary dark:text-gray-100">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl dark:text-gray-300">
            Desculpe. Parece que você está perdido. Vamos te ajudar a encontrar o caminho certo.
          </p>
          <Button variant="secondary" as="Link" to="/">
            Voltar para a página inicial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundHero;
