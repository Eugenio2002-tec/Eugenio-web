import React from "react";

const Page = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Eugenio Lozano</h1>
        <p className="text-gray-600">Software Developer | Web Designer</p>
      </header>
      <section className="mb-5">
        <h2 className="text-2xl font-semibold border-b border-gray-200">
          Mi perfil
        </h2>
        <p className="mt-3 text-gray-700">
          He participado en diferentes actividades escolares que me han brindado
          las herramientas para desarrollar aplicaciones móviles y de web. Entre
          los proyectos más importantes está LifeCheck, aplicación web que tiene
          como enfoque ayudar a los miembros de una empresa a través de una
          encuesta y una evaluación, con inteligencia artificial, sobre la
          calidad de vida del individuo. Utilizando estos resultados, brundamos
          apoyo personalizado para mejorar diferentes rubros de la calidad de
          vida.{" "}
        </p>
        <p className="mt-3 text-gray-700">
          Además trabajo actualmente en una consultora llamada Vitek. En esta
          empresa he trabajdo con diferentes proyectos de diseño web y manejo de
          bases de datos. Actualmente estoy trabajando en la página web de una
          empresa llamada "Timesquare" que se dedica a la venta de joyería como
          un e-commerce.{" "}
        </p>
      </section>
      <section className="mb-5">
        <h2 className="text-2xl font-semibold border-b border-gray-200">
          Experiencia
        </h2>
        <div className="mt-3">
          <h3 className="text-xl font-semibold">
            Software Developer Intern — Grupo Vitek
          </h3>
          <p className="text-gray-600">Enero 2024 - Presente</p>
          <ul className="list-disc ml-5 text-gray-700">
            <li>
              Realizado una página web utilizando tailwindcss para empresa de
              relojes llamada E-watch
            </li>
            <li>
              Creado stored procedures para un proyecto interno de la empresa
              utilizando MicrosoftSQL
            </li>
            <li>
              Fullstack developer en un proyecto de soporte técnico dentro de la
              empresa.
            </li>
          </ul>
        </div>
      </section>
      <section className="mb-5">
        <h2 className="text-2xl font-semibold border-b border-gray-200">
          Educación
        </h2>
        <div className="mt-3">
          <h3 className="text-xl font-semibold">
            Ingeniero en tecnologías computacionales — Tecnológico de Monterrey,
            Campus Monterrey
          </h3>
          <p className="text-gray-600">Agosto 2021 - Presente</p>
          <ul className="list-disc ml-5 text-gray-700"></ul>
        </div>
      </section>
      <section className="mb-5">
        <h2 className="text-2xl font-semibold border-b border-gray-200">
          Habilidades
        </h2>
        <div className="mt-3 flex flex-wrap">
          <span className="m-1 px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            Tailwind
          </span>
          <span className="m-1 px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            React
          </span>
          <span className="m-1 px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            Node.js
          </span>
          <span className="m-1 px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            SQL
          </span>
          <span className="m-1 px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            C#
          </span>
        </div>
      </section>
      <footer className="text-center mt-10 text-gray-600">
        <p>
          Contacto:{" "}
          <a href="mailto:john.doe@example.com" className="text-blue-500">
            eugenio02.lozano@gmail.com{" "}
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Page;
