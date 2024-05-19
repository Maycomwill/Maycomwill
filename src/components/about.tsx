import React from "react";

function About() {
  return (
    <section
      id="about"
      className="mt-48 min-h-[38rem] shrink-0 snap-start px-4 md:mt-0 md:px-0"
    >
      <h1 className="pb-12 font-title text-5xl tracking-[0.3rem]">SOBRE</h1>
      <div className="flex flex-col space-y-8 text-justify">
        <span>
          Formado em química pela UFRPE, sou um professor que tem o prazer de
          ensinar
        </span>
        <span>
          Atualmente, busco a transição de carreira para a área de tecnologia,
          dessa forma curso técnico em desenvolvimento de sistemas na ETE Adv.
          José David Gil Rodrigues.
        </span>
        <span>
          Também realizei diversos cursos em HTML5, CSS3, JS e participei de
          alguns bootcamps da Rocketseat, onde tive contato com o React,
          Node.Js, e com esses conhecimentos e estudo desenvolvi boa parte dos
          meus projetos.
        </span>
      </div>
    </section>
  );
}

export default About;
