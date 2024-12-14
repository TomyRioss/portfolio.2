import React from 'react';
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
  FaPython,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiVite,
  SiNextdotjs,
  SiPostgresql,
  SiSqlite,
} from 'react-icons/si';
import styles from './Tecnologias.module.css';

const Tecnologias = () => {
  return (
    <div className="text-black dark:text-white mt-12 bg-transparent dark:bg-black dark:bg-opacity-20 border-4 shadow-2xl drop-shadow-2xl p-20 border-black mx-48 rounded-lg min-w-100 w-100 h-100">
      <h3 className="flex mb-20 text-2xl font-modern-serif justify-center">
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
    </div>
  );
};

export default Tecnologias;
