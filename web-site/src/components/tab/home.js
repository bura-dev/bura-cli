import * as React from "react"
import CommandLineComponent from "react-command-line"
import { useSelector } from "react-redux"
import { commands } from "../../core/utils/command"
import logo from "../../assets/image/bura.png"
import bura from "../../assets/gif/bura.gif"
import PageTitle from "../pageTitle"
import { Fade, Flip, Slide } from "react-reveal"
import axios from "axios"
import { getUpdateLink } from "../../core/utils/props"

export default function Home(params) {
  const value = useSelector(state => state.homePage.value)
  const [CommandLineStatus, setCommandLineStatus] = React.useState(false)

  React.useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // })
    setTimeout(function () {
      // window.scrollTo({
      //   top: 400,
      //   behavior: "smooth",
      // })
      setCommandLineStatus(true)
    }, 250)
  })

  function getDownloadLink({ device = "win" }) {
    axios
      .get(getUpdateLink)
      .then(response => {
        if (device === "win") {
          window.open(response?.data?.win_update_link, "_blank")
        } else {
          window.open(response?.data?.linux_update_link, "_blank")
        }
      })
      .catch(error => console.log(`The download link was not received`))
  }

  return (
    <div className="relative">
      <PageTitle title={"Home"} />
      <Slide top>
        <div className="flex flex-col justify-center items-center pt-40">
          <span className="text-bios-header font-bios text-20 sm:text-40">
            BURA CLI
          </span>
          {/* <span className="text-bios-header font-bios text-20 sm:text-40 ml-10 flex justify-center items-center">
          BURA
          <img
            className="w-20 sm:w-40 mb-4 mr-10 animate-spin-slow"
            src={logo}
            alt="logo"
          />
          CLI
        </span> */}
          <img className="w-3/5 mb-4 mt-20 rounded-8" src={bura} alt="Bura" />
        </div>
      </Slide>
      {value ? (
        <div className="pt-40 flex flex-col justify-center items-center">
          <Fade top cascade>
            <div className="text-center">
              <span className="text-green-700 font-bios2  text-14 sm:text-24">
                What is Bura?
              </span>
              <br />
              <br />
              <p className="text-bios-header font-bios text-8">
                <span className="text-blue-800 font-bios text-8">Bura CLI</span>
                {" "}is a command line tool that allows you to create long and
                different commands that you work with in a concise manner as you
                like (it can be simple or with input).
              </p>
            </div>
          </Fade>
          <br />
          <Fade top cascade>
            <div className="text-left sm:text-center">
              <span className="text-green-700 font-bios2 text-14 sm:text-24">
                Windows installation guide
              </span>
              <br />
              <br />
              <p className="text-bios-header font-bios text-8">
                1. Download Bura CLI.
              </p>
              <button
                class="relative m-10 px-6 py-2 group"
                onClick={() => getDownloadLink({ device: "win" })}
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-cyan-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-cyan-700 group-hover:bg-cyan-700"></span>
                <span class="relative text-cyan-700 group-hover:text-cyan-100">
                  Download 1
                </span>
              </button>
              <button
                class="relative m-10 px-6 py-2 group"
                onClick={() =>
                  window.open(
                    "https://github.com/jepbura/bura-cli/releases",
                    "_blank"
                  )
                }
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-indigo-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-indigo-700 group-hover:bg-indigo-700"></span>
                <span class="relative text-indigo-700 group-hover:text-indigo-100">
                  Download 2
                </span>
              </button>
              <p className="text-bios-header font-bios text-8">
                2. Unrar Bura-win.rar in a folder like{" "}
                <span className="text-blue-800 font-bios text-8">C:\\bura</span>
              </p>
              <p className="text-bios-header font-bios text-8">
                3. Open RUN by shortcut (
                <span className="text-blue-800 font-bios text-8">
                  WINDOWS_KEY + R_KEY
                </span>
                ).
              </p>
              <p className="text-bios-header font-bios text-8">
                4. Type in RUN{" "}
                <span className="text-blue-800 font-bios text-8">
                  SystemPropertiesAdvanced
                </span>
                .
              </p>
              <p className="text-bios-header font-bios text-8">
                5. System Properties dialog should appear, click Environment
                Variables.
              </p>
              <p className="text-bios-header font-bios text-8">
                6. In User variables (The Top section) select Path and click
                Edit.
              </p>
              <p className="text-bios-header font-bios text-8">
                7. Add the new path to bura.exe folder like this{" "}
                <span className="text-blue-800 font-bios text-8">C:\\bura</span>
                .
              </p>
              <p className="text-bios-header font-bios text-8">
                8. Select OK, and OK again in Environment Variables, and OK in
                System Properties.
              </p>
              <p className="text-bios-header font-bios text-8">
                9. Close any Command prompt you using and open again.
              </p>
              <p className="text-bios-header font-bios text-8">
                10. Hooray, 🙌🤩🥳 now Bura CLI is successfully installed.
              </p>
              <p className="text-bios-header font-bios text-8">
                <span className="text-red-800 font-bios text-8">
                  C:\\Windows{">"}
                </span>
                <span className="text-blue-800 font-bios text-8">bura</span>
              </p>
            </div>
          </Fade>

          <br />
          <Fade top cascade>
            <div className="text-left sm:text-center">
              <span className="text-green-700 font-bios2 text-14 sm:text-24">
                Linux installation guide
              </span>
              <br />
              <br />
              <p className="text-bios-header font-bios text-8">
                1. Open terminal (
                <span className="text-blue-800 font-bios text-8">
                  WINDOWS_KEY + ALT + T_KEY
                </span>
                ).
              </p>
              <p className="text-bios-header font-bios text-8">
                2. Create a folder like $HOME/bura.{" "}
                <span className="text-blue-800 font-bios text-8">
                  mkdir $HOME/bura
                </span>
              </p>
              <p className="text-bios-header font-bios text-8">
                3. Go in the created folder.{" "}
                <span className="text-blue-800 font-bios text-8">
                  cd $HOME/bura
                </span>
              </p>
              <p className="text-bios-header font-bios text-8">
                4. Download Bura CLI.
              </p>
              <button
                class="relative m-10 px-6 py-2 group"
                onClick={() => getDownloadLink({ device: "linux" })}
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-cyan-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-cyan-700 group-hover:bg-cyan-700"></span>
                <span class="relative text-cyan-700 group-hover:text-cyan-100">
                  Download 1
                </span>
              </button>
              <button
                class="relative m-10 px-6 py-2 group"
                onClick={() =>
                  window.open(
                    "https://github.com/jepbura/bura-cli/releases",
                    "_blank"
                  )
                }
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-indigo-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-indigo-700 group-hover:bg-indigo-700"></span>
                <span class="relative text-indigo-700 group-hover:text-indigo-100">
                  Download 2
                </span>
              </button>
              <p className="text-bios-header font-bios text-8">
                5. Unrar Bura-linux.rar.
                <br />
                <span className="text-blue-800 font-bios text-8">
                  sudo unrar x $HOME/bura/Bura-win.rar
                </span>
              </p>
              <p className="text-bios-header font-bios text-8">
                6. Change Bura permissions.
                <br />
                <span className="text-blue-800 font-bios text-8">
                  sudo chmod +x $HOME/bura/bura
                </span>
              </p>
              <p className="text-bios-header font-bios text-8">
                7. Set Bura Path.
                <br />
                <br />
                *** If you use the ohmyz open .zshrc file ***
                <br />
                <span className="text-blue-800 font-bios text-8">
                  sudo nano ~/.zshrc
                </span>
                <br />
                Find (
                <span className="text-blue-800 font-bios text-8">
                  # Path to your oh-my-zsh installation.
                </span>
                ) and add Bura path under it
                <br />
                <span className="text-blue-800 font-bios text-8">
                  export PATH="$HOME/bura:$PATH"
                </span>
                <br />
                Save and reload .zshrc
                <br />
                <span className="text-blue-800 font-bios text-8">
                  source ~/.zshrc
                </span>
                <br />
                <br />
                *** If you dont use the ohmyz open .profile file ***
                <br />
                <span className="text-blue-800 font-bios text-8">
                  sudo nano ~/.profile
                </span>
                <br />
                Scroll to the bottom and add Bura path
                <br />
                <span className="text-blue-800 font-bios text-8">
                  export PATH="$HOME/bura:$PATH"
                </span>
                <br />
                Save and reload .profile
                <br />
                <span className="text-blue-800 font-bios text-8">
                  source ~/.profile
                </span>
              </p>
              <p className="text-bios-header font-bios text-8">
                8. Close any terminal you using and open again.
              </p>
              <p className="text-bios-header font-bios text-8">
                9. Hooray, 🙌🤩🥳 now Bura CLI is successfully installed.
              </p>
              <p className="text-bios-header font-bios text-8">
                <span className="text-red-800 font-bios text-8">
                  ubuntu@user:~$
                </span>
                <span className="text-blue-800 font-bios text-8">bura</span>
              </p>
            </div>
          </Fade>
        </div>
      ) : (
        <div className="pl-10 pt-40">
          <div className="flex flex-col justify-center items-start">
            <span className="text-bios-header font-bios text-8 animate-textTyping overflow-hidden whitespace-nowrap">
              Hi there!
            </span>
            <span className="text-bios-header font-bios text-8 sm:animate-textTyping sm:overflow-hidden sm:whitespace-nowrap">
              Type "help" or "h" to see a list of commands.
            </span>
          </div>
          <div
            className={CommandLineStatus ? "mt-4 border-bios-header" : "hidden"}
          >
            <CommandLineComponent commands={commands} className="react_cli" />
          </div>
        </div>
      )}
    </div>
  )
}
