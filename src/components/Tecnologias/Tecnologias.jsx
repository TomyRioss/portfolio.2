import React from 'react';
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
  FaPython,
  FaBootstrap,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiVite,
  SiNextdotjs,
  SiPostgresql,
  SiSqlite,
  SiPostman,
  SiIntellijidea,
  SiInsomnia,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { LuEclipse } from 'react-icons/lu';
import styles from './Tecnologias.module.css';

const Tecnologias = () => {
  return (
    <div className="text-black dark:text-white mt-12 bg-transparent dark:bg-black dark:bg-opacity-20 border-4 shadow-2xl drop-shadow-2xl px-11 py-12 border-black mx-56 rounded-lg w-1000">
      <h3 className="flex mb-20 text-3xl font-modern-serif justify-center font-semibold">
        Tecnologias
      </h3>
      <div className={`${styles.slider} `}>
        <div className={`${styles.slide_track}`}>
          <div className={`${styles.slide}`}>
            <FaReact className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <FaJsSquare className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <SiTypescript className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <FaNodeJs className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <SiExpress className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <FaGitAlt className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <FaPhp className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <FaPython className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <FaBootstrap className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <SiFirebase className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <SiVite className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <SiNextdotjs className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <SiPostgresql className="w-10 h-10" />
          </div>
          <div className={`${styles.slide}`}>
            <SiSqlite className="w-10 h-10" />
          </div>
        </div>
      </div>
      <h3 className="flex mt-20 text-3xl font-modern-serif justify-center font-semibold">
        Herramientas
      </h3>
      <div className={`${styles.sliderLeft} `}>
        <div className={`${styles.slide_trackLeft} mt-24`}>
          <div className={`${styles.slideLeft}`}>
            <FaGithub className="w-10 h-10" />
          </div>
          <div className={`${styles.slideLeft}`}>
            <SiIntellijidea className="w-10 h-10" />
          </div>
          <div className={`${styles.slideLeft}`}>
            <SiPostman className="w-10 h-10" />
          </div>
          <div className={`${styles.slideLeft}`}>
            <SiInsomnia className="w-10 h-10" />
          </div>
          <div className={`${styles.slideLeft}`}>
            <DiVisualstudio className="w-10 h-10" />
          </div>
          <div className={`${styles.slideLeft}`}>
            <BiLogoVisualStudio className="w-10 h-10" />
          </div>
          <div className={`${styles.slideLeft}`}>
            <LuEclipse className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
