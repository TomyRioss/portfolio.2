import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const NameTitle = ({ darkMode }) => {
  return (
    <>
      <div className="pt-72 pl-48 text-dark-blue dark:text-white " id="main">
        <h1
          className="py-12 text-7xl font-modern-serif font-semibold"
          style={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.2)' }}
          id="name"
        >
          Tomas Alexander Rios
        </h1>
        <h2
          className="pl-2 text-6xl font-modern-serif font-semibold text-gradient bg-gradient-to-r dark:from-teal-200 dark:to-blue-300 from-blue-400 to-cyan-300"
          style={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.1)' }}
        >
          Frontend Developer
        </h2>
        <div className="flex mt-10 transition-colors duration-300">
          {darkMode ? (
            <a href="https://github.com/TomyRioss" target="blank">
              <img
                className="bg-white p-1 hover:bg-cyan-300 rounded-xl shadow-2xl"
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gMjUgOCBDIDE1LjYxMSA4IDggMTUuNjExIDggMjUgQyA4IDM0LjM4OSAxNS42MTEgNDIgMjUgNDIgQyAzNC4zODkgNDIgNDIgMzQuMzg5IDQyIDI1IEMgNDIgMTUuNjExIDM0LjM4OSA4IDI1IDggeiBNIDI1IDkgQyAzMy44MzcgOSA0MSAxNi4xNjMgNDEgMjUgQyA0MSAzMi4zMTU5MTEgMzYuMDg1MDQ4IDM4LjQ3MjA5MyAyOS4zODA4NTkgNDAuMzc4OTA2IEMgMjkuMjQ0NTcxIDQwLjE3MjY3MiAyOS4xNDUyOTQgMzkuOTMyMzk2IDI5LjE1MjM0NCAzOS42NTAzOTEgQyAyOS4xNzkzNDQgMzguNTkzMzkxIDI5LjE1MjM0NCAzNi4xMjk2MDkgMjkuMTUyMzQ0IDM1LjIyNDYwOSBDIDI5LjE1MjM0NCAzMy42NzE2MDkgMjguMTY5OTIyIDMyLjU3MDMxMiAyOC4xNjk5MjIgMzIuNTcwMzEyIEMgMjguMTY5OTIyIDMyLjU3MDMxMiAzNS44Nzg5MDYgMzIuNjU3NjQxIDM1Ljg3ODkwNiAyNC40MzE2NDEgQyAzNS44Nzg5MDYgMjEuMjU3NjQxIDM0LjIyMjY1NiAxOS42MDU0NjkgMzQuMjIyNjU2IDE5LjYwNTQ2OSBDIDM0LjIyMjY1NiAxOS42MDU0NjkgMzUuMDkyOTIyIDE2LjIxNjI5NyAzMy45MTk5MjIgMTQuNzc5Mjk3IEMgMzIuNjA0OTIyIDE0LjYzNzI5NyAzMC4yNDkxNDEgMTYuMDM2NDUzIDI5LjI0NDE0MSAxNi42ODk0NTMgQyAyOS4yNDQxNDEgMTYuNjg5NDUzIDI3LjY1Mjk1MyAxNi4wMzcxMDkgMjUuMDAxOTUzIDE2LjAzNzEwOSBDIDIyLjM1MDk1MyAxNi4wMzcxMDkgMjAuNzU3ODEyIDE2LjY4OTQ1MyAyMC43NTc4MTIgMTYuNjg5NDUzIEMgMTkuNzUxODEyIDE2LjAzNjQ1MyAxNy4zOTcwMzEgMTQuNjM3Mjk3IDE2LjA4MjAzMSAxNC43NzkyOTcgQyAxNC45MDkwMzEgMTYuMjE2Mjk3IDE1Ljc3OTI5NyAxOS42MDU0NjkgMTUuNzc5Mjk3IDE5LjYwNTQ2OSBDIDE1Ljc3OTI5NyAxOS42MDU0NjkgMTQuMTIxMDk0IDIxLjI1NTY4OCAxNC4xMjEwOTQgMjQuNDI5Njg4IEMgMTQuMTIxMDk0IDMyLjY1NTY4NyAyMS44MzAwNzggMzIuNTY4MzU5IDIxLjgzMDA3OCAzMi41NjgzNTkgQyAyMS44MzAwNzggMzIuNTY4MzU5IDIxLjA1MzgxIDMzLjQ0MzE3NiAyMC44ODI4MTIgMzQuNzMwNDY5IEMgMjAuMzUxMDEgMzQuOTE4OTU4IDE5LjYxNTUyMyAzNS4xNDY0ODQgMTguOTE0MDYyIDM1LjE0NjQ4NCBDIDE3LjI0MTA2MyAzNS4xNDY0ODQgMTUuOTY5OTA2IDMzLjUxOTU3OCAxNS41MDM5MDYgMzIuNzY3NTc4IEMgMTUuMDQzOTA2IDMyLjAyNTU3OCAxNC4xMDE2NTYgMzEuNDAyMzQ0IDEzLjIyMjY1NiAzMS40MDIzNDQgQyAxMi42NDM2NTYgMzEuNDAyMzQ0IDEyLjM1OTM3NSAzMS42OTI0MzggMTIuMzU5Mzc1IDMyLjAyMzQzOCBDIDEyLjM1OTM3NSAzMi4zNTQ0MzcgMTMuMTcxMDMxIDMyLjU4NDI2NiAxMy43MDcwMzEgMzMuMTk3MjY2IEMgMTQuODM3MDMxIDM0LjQ5MDI2NiAxNC44MTY4NDQgMzcuNDAwMzkxIDE4LjgzOTg0NCAzNy40MDAzOTEgQyAxOS4zMTQgMzcuNDAwMzkxIDIwLjE2NTQ2MiAzNy4yOTI2NzYgMjAuODQ3NjU2IDM3LjE5OTIxOSBDIDIwLjg0MzI1MSAzOC4xNDM0MzggMjAuODMyNzE1IDM5LjA2NDA0OSAyMC44NDc2NTYgMzkuNjQ4NDM4IEMgMjAuODU0NzE2IDM5LjkzMDg0MiAyMC43NTU3NDEgNDAuMTcyNDkyIDIwLjYxOTE0MSA0MC4zNzg5MDYgQyAxMy45MTQ5NTIgMzguNDcyMDkzIDkgMzIuMzE1OTExIDkgMjUgQyA5IDE2LjE2MyAxNi4xNjMgOSAyNSA5IHoiLz48L3N2Zz4="
              />
            </a>
          ) : (
            <a href="https://github.com/TomyRioss" target="blank">
              <img
                className="bg-slate-100 p-1 rounded-xl hover:bg-cyan-300 drop-shadow-2xl shadow-2xl border-1-black "
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGQ9Ik0zMiwxMGMxMi4xNSwwLDIyLDkuODUsMjIsMjJjMCw5Ljc2OC02LjM2OSwxOC4wNDUtMTUuMTc5LDIwLjkxNmMwLjAwMi0wLjAwOCwwLjAwNi0wLjAyMSwwLjAwNi0wLjAyMQlzLTEuNDg1LTAuNjk2LTEuNDUzLTEuOTM4YzAuMDM1LTEuMzY3LDAtNC41NTYsMC01LjcyN2MwLTIuMDEtMS4yNzItMy40MzQtMS4yNzItMy40MzRzOS45NzcsMC4xMTIsOS45NzctMTAuNTMzCWMwLTQuMTA3LTIuMTQ3LTYuMjQ1LTIuMTQ3LTYuMjQ1czEuMTI4LTQuMzg1LTAuMzktNi4yNDVjLTEuNzAxLTAuMTg0LTQuNzQ5LDEuNjI2LTYuMDUsMi40NzJjMCwwLTIuMDYyLTAuODQ2LTUuNDkyLTAuODQ2CWMtMy40MywwLTUuNDkyLDAuODQ2LTUuNDkyLDAuODQ2Yy0xLjMwMS0wLjg0Ni00LjM0OC0yLjY1Ni02LjA1LTIuNDcyYy0xLjUxOCwxLjg2LTAuMzksNi4yNDUtMC4zOSw2LjI0NXMtMi4xNDcsMi4xMzctMi4xNDcsNi4yNDUJYzAsMTAuNjQ1LDkuOTc3LDEwLjUzMyw5Ljk3NywxMC41MzNzLTEuMDA1LDEuMTM2LTEuMjI1LDIuODA2Yy0wLjY5NiwwLjIzNi0xLjcyMSwwLjUyOC0yLjU0OSwwLjUyOAljLTIuMTY1LDAtMy44MTItMi4xMDUtNC40MTYtMy4wNzhjLTAuNTk1LTAuOTYtMS44MTUtMS43NjYtMi45NTMtMS43NjZjLTAuNzQ5LDAtMS4xMTUsMC4zNzUtMS4xMTUsMC44MDNzMS4wNSwwLjcyNywxLjc0MywxLjUyMQljMS40NjEsMS42NzQsMS40MzUsNS40MzgsNi42NDEsNS40MzhjMC41NjUsMCwxLjcxOS0wLjEzOSwyLjU4OC0wLjI1NmMtMC4wMDUsMS4xODUtMC4wMDcsMi40MzYsMC4wMTIsMy4xNjcJYzAuMDMxLDEuMjQyLTEuNDUzLDEuOTM4LTEuNDUzLDEuOTM4czAuMDA0LDAuMDEyLDAuMDA2LDAuMDIxQzE2LjM2OSw1MC4wNDUsMTAsNDEuNzY4LDEwLDMyQzEwLDE5Ljg1LDE5Ljg1LDEwLDMyLDEweiIvPjwvc3ZnPg=="
              />
            </a>
          )}
          {darkMode ? (
            <a href="https://www.linkedin.com/in/tomy-rios/" target="blank">
              <img
                alt="svgImg"
                className="bg-white hover:bg-cyan-300 rounded-xl shadow-2xl ml-5"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1OHB4IiBoZWlnaHQ9IjU4cHgiPjxwYXRoIGQ9Ik0gNiAzIEMgNC4zNDg5MDU5IDMgMyA0LjM0ODkwNTkgMyA2IEwgMyAxOCBDIDMgMTkuNjUxMDk0IDQuMzQ4OTA1OSAyMSA2IDIxIEwgMTggMjEgQyAxOS42NTEwOTQgMjEgMjEgMTkuNjUxMDk0IDIxIDE4IEwgMjEgNiBDIDIxIDQuMzQ4OTA1OSAxOS42NTEwOTQgMyAxOCAzIEwgNiAzIHogTSA2IDQgTCAxOCA0IEMgMTkuMTEwOTA2IDQgMjAgNC44ODkwOTQxIDIwIDYgTCAyMCAxOCBDIDIwIDE5LjExMDkwNiAxOS4xMTA5MDYgMjAgMTggMjAgTCA2IDIwIEMgNC44ODkwOTQxIDIwIDQgMTkuMTEwOTA2IDQgMTggTCA0IDYgQyA0IDQuODg5MDk0MSA0Ljg4OTA5NDEgNCA2IDQgeiBNIDguMTg1NTQ2OSA2Ljc4NTE1NjIgQyA3LjQ0NDU0NjkgNi43ODUxNTYzIDcgNy4yMjkzNTk0IDcgNy44MTgzNTk0IEMgNyA4LjQxMTM1OTQgNy40NDQzNzUgOC44NTc0MjE5IDguMTA5Mzc1IDguODU3NDIxOSBDIDguODUwMzc1IDguODU3NDIxOSA5LjI5MTAxNTYgOC40MTEzNTk0IDkuMjkxMDE1NiA3LjgxODM1OTQgQyA5LjI5MTAxNTYgNy4yMzAzNTk0IDguODUwNTQ2OSA2Ljc4NTE1NjIgOC4xODU1NDY5IDYuNzg1MTU2MiB6IE0gNy4wNjI1IDkuOTYyODkwNiBMIDcuMDYyNSAxNiBMIDkuMjM2MzI4MSAxNiBMIDkuMjM2MzI4MSA5Ljk2Mjg5MDYgTCA3LjA2MjUgOS45NjI4OTA2IHogTSAxMS4wMzMyMDMgOS45NjI4OTA2IEwgMTEuMDMzMjAzIDE2IEwgMTMuMjA3MDMxIDE2IEwgMTMuMjA3MDMxIDEyLjY5NzI2NiBDIDEzLjIwNzAzMSAxMS43MTgyNjYgMTMuOTA4MTQxIDExLjU3NDIxOSAxNC4xMTkxNDEgMTEuNTc0MjE5IEMgMTQuMzMwMTQxIDExLjU3NDIxOSAxNC44OTI1NzggMTEuNzg1MjY2IDE0Ljg5MjU3OCAxMi42OTcyNjYgTCAxNC44OTI1NzggMTYgTCAxNyAxNiBMIDE3IDEyLjY5NzI2NiBDIDE3IDEwLjgwNjI2NiAxNi4xNTQ1MTYgOS45NjI4OTA2IDE1LjEwMzUxNiA5Ljk2Mjg5MDYgQyAxNC4wNTI1MTYgOS45NjI4OTA2IDEzLjQ5MDAzMSAxMC4zMTI2NDEgMTMuMjA3MDMxIDEwLjgwNjY0MSBMIDEzLjIwNzAzMSA5Ljk2Mjg5MDYgTCAxMS4wMzMyMDMgOS45NjI4OTA2IHoiLz48L3N2Zz4="
              />
            </a>
          ) : (
            <a href="https://www.linkedin.com/in/tomy-rios/" target="blank">
              <img
                className="bg-slate-100 p-1 rounded-xl drop-shadow-2xl shadow-2xl border-1-black ml-5 hover:bg-cyan-300"
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGQ9Ik00MC4yMjcsMTJDNTEuMTQ1LDEyLDUyLDEyLjg1NCw1MiwyMy43NzN2MTYuNDUzQzUyLDUxLjE0NSw1MS4xNDUsNTIsNDAuMjI3LDUySDIzLjc3M0MxMi44NTUsNTIsMTIsNTEuMTQ1LDEyLDQwLjIyNwlWMjMuNzczQzEyLDEyLjg1NCwxMi44NTUsMTIsMjMuNzczLDEySDQwLjIyN3ogTTI1LjAyOSw0M1YyNi43MjhoLTUuMDU3VjQzSDI1LjAyOXogTTIyLjUwMSwyNC40MDEJYzEuNjI1LDAsMi45NDctMS4zMjIsMi45NDctMi45NDljMC0xLjYyNS0xLjMyMi0yLjk0Ny0yLjk0Ny0yLjk0N2MtMS42MjksMC0yLjk0OSwxLjMyLTIuOTQ5LDIuOTQ3UzIwLjg3LDI0LjQwMSwyMi41MDEsMjQuNDAxeiBNNDQsNDN2LTguOTI1YzAtNC4zODItMC45NDYtNy43NTItNi4wNjctNy43NTJjLTIuNDYsMC00LjEwOSwxLjM0OS00Ljc4NSwyLjYyOEgzMy4wOHYtMi4yMjNoLTQuODUxVjQzaDUuMDU0di04LjA1CWMwLTIuMTIyLDAuNDA1LTQuMTc4LDMuMDM2LTQuMTc4YzIuNTk0LDAsMi42MjgsMi40MjcsMi42MjgsNC4zMTVWNDNINDR6Ii8+PC9zdmc+"
              />
            </a>
          )}
          <div className="ml-6 flex items-center space-x-4">
            <a
              href="/assets/TomasRiosEs.pdf"
              target="blank"
              className="flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl py-4 px-6 shadow-lg transform transition-all duration-400 ease-in-out hover:scale-105 font-modern-serif"
            >
              <ArrowDownTrayIcon className="h-6 w-6 mr-2 transform transition-all duration-400 ease-in-out" />
              <span>Descargar CV Español</span>
            </a>
            <a
              href="/assets/TomasRiosEn.pdf"
              target="blank"
              className="flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl py-4 px-6 shadow-lg transform transition-all duration-400 ease-in-out hover:scale-105 font-modern-serif"
            >
              <ArrowDownTrayIcon className="h-6 w-6 mr-2 transform transition-all duration-400 ease-in-out" />
              <span>Download CV English</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-96 scroll-smooth absolute bottom-0 mb-5 w-full">
        <a href="#aboutMe">
          <ArrowDownIcon className="h-10 w-10 motion-safe:animate-bounce duration-300 transition-all dark:text-white text-black" />
        </a>
      </div>
    </>
  );
};

export default NameTitle;
