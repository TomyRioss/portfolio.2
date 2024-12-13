import React from 'react';
import Underline from './Underline';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

const aboutMe = () => {
  return (
    <div
      className="text-black dark:text-white mt-12 bg-transparent dark:bg-black dark:bg-opacity-20 border-4 shadow-2xl drop-shadow-2xl p-20 border-black mx-48 rounded-lg"
      id="aboutMe"
    >
      <h2 className="font-modern-serif text-4xl font-semibold"> Sobre mi</h2>
      <div className="underline-custom"></div>
      <div className="flex items-center mt-6 font-modern-serif">
        <MapPinIcon className="h-6 w-6 mb-1 mr-3 text-cyan-300" />
        <h3>Argentina, Buenos Aires.</h3>
      </div>
      <div className="flex mt-5 ">
        <a
          className="flex items-center font-modern-serif text-sm ml-1 mr-2 hover:text-cyan-400"
          href="https://mail.google.com/mail/u/0/?fs=1&to=tomyrios2006@gmail.com&su=Portfolio&body=Escribe+lo+que+quieras+decirme&tf=cm"
          target="blank"
        >
          <EnvelopeIcon className="h-4 w-4 text-cyan-300" />
          <p className="ml-1">Correo Electrónico</p>
        </a>
        <a
          className="flex items-center font-modern-serif text-sm ml-2 hover:text-cyan-400"
          href="https://github.com/TomyRioss"
          target="blank"
        >
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMjJDM0U2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSIyNXB4IiBoZWlnaHQ9IjI1cHgiPjxwYXRoIGQ9Ik0yNSw4YzkuMzg5LDAsMTcsNy42MTEsMTcsMTdjMCw3LjU0OC00LjkyMSwxMy45NDQtMTEuNzI5LDE2LjE2M2MwLjAwMi0wLjAwNiwwLjAwNS0wLjAxNiwwLjAwNS0wLjAxNglzLTEuMTQ3LTAuNTM4LTEuMTIzLTEuNDk4YzAuMDI3LTEuMDU2LDAtMy41MjEsMC00LjQyNmMwLTEuNTUzLTAuOTgzLTIuNjU0LTAuOTgzLTIuNjU0czcuNzA5LDAuMDg3LDcuNzA5LTguMTM5CWMwLTMuMTc0LTEuNjU5LTQuODI1LTEuNjU5LTQuODI1czAuODcxLTMuMzg4LTAuMzAyLTQuODI1Yy0xLjMxNS0wLjE0Mi0zLjY2OSwxLjI1Ny00LjY3NSwxLjkxYzAsMC0xLjU5My0wLjY1My00LjI0NC0wLjY1MwljLTIuNjUsMC00LjI0NCwwLjY1My00LjI0NCwwLjY1M2MtMS4wMDUtMC42NTMtMy4zNi0yLjA1Mi00LjY3NS0xLjkxYy0xLjE3MywxLjQzNy0wLjMwMiw0LjgyNS0wLjMwMiw0LjgyNQlzLTEuNjU5LDEuNjUyLTEuNjU5LDQuODI1YzAsOC4yMjYsNy43MDksOC4xMzksNy43MDksOC4xMzlzLTAuNzc3LDAuODc4LTAuOTQ2LDIuMTY4Yy0wLjUzOCwwLjE4My0xLjMzLDAuNDA4LTEuOTY5LDAuNDA4CWMtMS42NzMsMC0yLjk0Ni0xLjYyNi0zLjQxMi0yLjM3OWMtMC40Ni0wLjc0Mi0xLjQwMy0xLjM2NS0yLjI4MS0xLjM2NWMtMC41NzksMC0wLjg2MSwwLjI4OS0wLjg2MSwwLjYyCWMwLDAuMzMxLDAuODExLDAuNTYyLDEuMzQ3LDEuMTc1YzEuMTI5LDEuMjk0LDEuMTA5LDQuMjAyLDUuMTMyLDQuMjAyYzAuNDM3LDAsMS4zMjktMC4xMDcsMi0wLjE5OAljLTAuMDA0LDAuOTE2LTAuMDA1LDEuODgyLDAuMDA5LDIuNDQ3YzAuMDI0LDAuOTYtMS4xMjMsMS40OTgtMS4xMjMsMS40OThzMC4wMDMsMC4wMSwwLjAwNSwwLjAxNkMxMi45MjEsMzguOTQ0LDgsMzIuNTQ4LDgsMjUJQzgsMTUuNjExLDE1LjYxMSw4LDI1LDh6Ii8+PC9zdmc+"
          />
          <p className="ml-1">TomyRioss</p>
        </a>
        <a
          className="flex items-center font-modern-serif text-sm ml-2 hover:text-cyan-400"
          href="https://www.linkedin.com/in/tomy-rios/"
          target="blank"
        >
          <img
            className="h-7 w-7"
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMjJDM0U2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1NnB4IiBoZWlnaHQ9IjU2cHgiPjxwYXRoIGQ9Ik0gMTcuNzIyNjU2IDEwIEMgMTAuNTYwNjU2IDEwIDEwIDEwLjU2MDY1NiAxMCAxNy43MjI2NTYgTCAxMCAzMi4yNzczNDQgQyAxMCAzOS40MzkzNDQgMTAuNTYwNjU2IDQwIDE3LjcyMjY1NiA0MCBMIDMyLjI3NzM0NCA0MCBDIDM5LjQzOTM0NCA0MCA0MCAzOS40MzkzNDQgNDAgMzIuMjc3MzQ0IEwgNDAgMTcuNzY5NTMxIEMgNDAgMTAuNTYzNTMxIDM5LjQzNjQ2OSAxMCAzMi4yMzA0NjkgMTAgTCAxNy43MjI2NTYgMTAgeiBNIDE3IDExIEwgMzMgMTEgQyAzOC41NjUgMTEgMzkgMTEuNDM1IDM5IDE3IEwgMzkgMzMgQyAzOSAzOC41NjUgMzguNTY1IDM5IDMzIDM5IEwgMTcgMzkgQyAxMS40MzUgMzkgMTEgMzguNTY1IDExIDMzIEwgMTEgMTcgQyAxMSAxMS40MzUgMTEuNDM1IDExIDE3IDExIHogTSAxNy44NzY5NTMgMTQuODc4OTA2IEMgMTYuNjU0OTUzIDE0Ljg3ODkwNiAxNS42NjQwNjIgMTUuODY2ODkxIDE1LjY2NDA2MiAxNy4wODc4OTEgQyAxNS42NjQwNjIgMTguMzA4ODkxIDE2LjY1Mzk1MyAxOS4zMDA3ODEgMTcuODc2OTUzIDE5LjMwMDc4MSBDIDE5LjA5NTk1MyAxOS4zMDA3ODEgMjAuMDg1OTM3IDE4LjMwODg5MSAyMC4wODU5MzggMTcuMDg3ODkxIEMgMjAuMDg1OTM3IDE1Ljg2ODg5MSAxOS4wOTU5NTMgMTQuODc4OTA2IDE3Ljg3Njk1MyAxNC44Nzg5MDYgeiBNIDI5LjQ0OTIxOSAyMC43NDIxODggQyAyNy42MDQyMTkgMjAuNzQyMTg3IDI2LjM2ODMyOCAyMS43NTU4NDQgMjUuODYxMzI4IDIyLjcxNDg0NCBMIDI1LjgxMDU0NyAyMi43MTQ4NDQgTCAyNS44MTA1NDcgMjEuMDQ2ODc1IEwgMjIuMTcxODc1IDIxLjA0Njg3NSBMIDIyLjE3MTg3NSAzMy4yNSBMIDI1Ljk2Mjg5MSAzMy4yNSBMIDI1Ljk2Mjg5MSAyNy4yMTI4OTEgQyAyNS45NjI4OTEgMjUuNjIxODkxIDI2LjI2NDI4MSAyNC4wNzgxMjUgMjguMjM4MjgxIDI0LjA3ODEyNSBDIDMwLjE4MzI4MSAyNC4wNzgxMjUgMzAuMjEwOTM4IDI1Ljg5ODQ1MyAzMC4yMTA5MzggMjcuMzE0NDUzIEwgMzAuMjEwOTM4IDMzLjI1IEwgMzQgMzMuMjUgTCAzNCAyNi41NTY2NDEgQyAzNCAyMy4yNzA2NDEgMzMuMjg5MjE5IDIwLjc0MjE4OCAyOS40NDkyMTkgMjAuNzQyMTg4IHogTSAxNS45Nzg1MTYgMjEuMDQ2ODc1IEwgMTUuOTc4NTE2IDMzLjI1IEwgMTkuNzcxNDg0IDMzLjI1IEwgMTkuNzcxNDg0IDIxLjA0Njg3NSBMIDE1Ljk3ODUxNiAyMS4wNDY4NzUgeiIvPjwvc3ZnPg=="
          />
          <p className="ml-1">TomyRioss</p>
        </a>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 p-4">
          <p className="mt-6 font-modern-serif text-base leading-relaxed">
            Soy Tomás Rios, <strong>Frontend Developer</strong> con experiencia
            en el desarrollo de aplicaciones web. A lo largo de mi carrera, he
            tenido el privilegio de trabajar en proyectos desafiantes donde he
            podido aplicar mi conocimiento en tecnologías modernas, como React,
            JavaScript y CSS, con el objetivo de crear experiencias de usuario
            intuitivas y de alto rendimiento. Mi enfoque siempre está en la
            creación de soluciones eficientes, escalables y fáciles de mantener.
            <br />
            <br />
            Mi pasión por el desarrollo web no solo se limita a escribir código;
            me motiva la constante evolución de la tecnología y el aprendizaje
            continuo. En este sentido, me esfuerzo por mantenerme al día con las
            últimas tendencias y herramientas del sector, participando en
            cursos, conferencias y proyectos de código abierto. Este compromiso
            con mi crecimiento profesional me permite ofrecer soluciones
            innovadoras y de alta calidad a los proyectos en los que participo.{' '}
            <br />
            <br />
            Actualmente, me encuentro cursando la carrera de Ingeniería
            Informática en la Universidad de Buenos Aires (UBA), lo que me ha
            permitido desarrollar una sólida comprensión teórica de la
            computación, así como habilidades prácticas en diversas áreas de la
            programación. Mis estudios han reforzado mi capacidad para resolver
            problemas complejos y pensar críticamente sobre las soluciones
            tecnológicas que implemento. Además, el ambiente académico ha
            fomentado en mí un fuerte sentido de trabajo en equipo, comunicación
            efectiva y colaboración interdisciplinaria. <br />
            <br />
            Como profesional, estoy profundamente comprometido con la calidad y
            la excelencia en todo lo que hago. Me esfuerzo por entregar
            resultados que no solo cumplan con los requisitos del cliente, sino
            que también superen sus expectativas. Mi capacidad para trabajar de
            manera colaborativa en equipos multidisciplinarios ha sido clave
            para el éxito de mis proyectos, y considero que una comunicación
            clara y constante es fundamental para lograr los mejores resultados.{' '}
            <br />
            <br />
            Actualmente, busco nuevas oportunidades profesionales dentro del
            mundo de IT, donde pueda seguir desarrollándome y contribuir con mis
            habilidades. Me entusiasma la idea de trabajar en un entorno
            dinámico, en el que pueda aprender de otros profesionales
            talentosos, y aportar valor a proyectos que hagan una diferencia
            significativa. Si tu empresa valora la pasión por la tecnología, la
            innovación y el compromiso con la excelencia, estaré encantado de
            colaborar para llevar nuestros proyectos a un nivel superior.
          </p>
        </div>

        <aside className="w-1/3">
          <div className="flex flex-col justify-center items-center p-4 font-modern-serif h-96 w-full">
            <h2 className="text-3xl font-semibold mb-6">Educación</h2>
            <ul>
              <li className="mb-7 mt-7">
                <h3 className="font-bold text-xl mb-1">UTN</h3>
                <p className="text-sm mb-1">Jun. 2024 - Dic. 2024</p>
                <p>Desarrollo React JS</p>
              </li>
              <li className="mb-7 mt-7">
                <h3 className="font-bold text-xl mb-1">TalentoTech</h3>
                <p className="text-sm mb-1">Jun. 2024 - Dic. 2024</p>
                <p>Introducción A Python</p>
              </li>
              <li className="mb-7 mt-7">
                <h3 className="font-bold text-xl mb-1">DuocUC</h3>
                <p className="text-sm mb-1">2016</p>
                <p>Diseño Gráfico</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default aboutMe;
