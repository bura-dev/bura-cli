import axios from "axios"
import { getUpdateLink } from "./props"

export const commands = {
  help: {
    fn: args => {
      return helpText
    },
  },
  h: {
    fn: args => {
      return helpText
    },
  },
  bura: {
    fn: args => {
      return buraText
    },
  },
  win: {
    fn: args => {
      return winText
    },
  },
  linux: {
    fn: args => {
      return linuxText
    },
  },
  "d-win": {
    fn: args => {
      return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //   resolve("done!")
        // }, 5000)
        axios
          .get(getUpdateLink)
          .then(response => {
            console.log("res is: ", response)
            window.open(response?.data?.win_update_link, "_blank")
            resolve(`${response?.data?.description}, Bura version is: ${response?.data?.version}, 
            Download link: ${response?.data?.win_update_link}`)
          })
          .catch(error => resolve(`The download link was not received`))
      })
    },
    isAsync: true,
  },
  "d-linux": {
    fn: args => {
      return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //   resolve("done!")
        // }, 5000)
        axios
          .get(getUpdateLink)
          .then(response => {
            window.open(response?.data?.linux_update_link, "_blank")
            resolve(`${response?.data?.description}, Bura version is: ${response?.data?.version}, 
            Download link: ${response?.data?.linux_update_link}`)
          })
          .catch(error => resolve(`The download link was not received`))
      })
    },
    isAsync: true,
  },
  about: {
    fn: args => {
      return aboutText
    },
  },
  contact: {
    fn: args => {
      return contactText
    },
  },
  //   "foo-n": {
  //     fn: args => {
  //       return `bar. Arguments were: [${args.join(", ")}]`
  //     },
  //   },
}

// If you are tired of long commands, Bura is exactly what you are looking for.
// Bura makes a long command short, easy to remember and easy to use.
const buraText = `Bura CLI is a command line tool that allows you to create long and different commands that you work with in a concise manner as you like (it can be simple or with input).`

const helpText = `"bura" : What is Bura?.
"win" : Windows installation guide.
"linux" : Linux installation guide.
"d-win" : Download the Windows installation file.
"d-linux" : Download the Linux installation file.
"about" : About us.
"contact" : Contact us.`

const aboutText = `We are BURA
Two individuals that offer creative, helpful and intuitive products.

We are a group of passionate and lively people who love and enjoy creativity and being helpful.

Mobile app development, web development, IoT and Embedded development are some of the services that we provide.

Our clients come from different industries including Retail, HealthTech, Blockchain, FinTech and more.

Let's make it happen!
`

const contactText = `Phone: +98 919 1211790
Email: jepbura@gmail.com
Website: www.bura.dev
Address: Bura/West BandPey/Babol/Mazandaran/Iran
`

const winText = `
1. Download Bura CLI (Type here, "d-win").
2. Unrar Bura-win.rar in a folder like C:\\bura
3. Open RUN by shortcut (WINDOWS_KEY + R_KEY).
4. Type in RUN SystemPropertiesAdvanced.
5. System Properties dialog should appear, click Environment Variables.
6. In User variables (The Top section) select Path and click Edit.
7. Add the new path to bura.exe folder like this C:\\bura.
8. Select OK, and OK again in Environment Variables, and OK in System Properties.
9. Close any Command prompt you using and open again.
10. Hooray, 🙌🤩🥳 now Bura CLI is successfully installed.
C:\\Windows>bura
`

const linuxText = `
1. Open terminal (WINDOWS_KEY + ALT + T_KEY).
2. Create a folder like $HOME/bura.
mkdir $HOME/bura
3. Go in the created folder
cd $HOME/bura
4. Download Bura CLI (Type here, "d-linux").
-If you download from here, transfer the Bura-linux.rar to the $HOME/bura.
mv bura-linux.rar $HOME/bura
-If you use the terminal.
curl –O https://s3.ir-thr-at1.arvanstorage.com/jepbura/bura-linux.rar
5. Unrar Bura-linux.rar.
sudo unrar x $HOME/bura/Bura-win.rar
6. Change Bura permissions.
sudo chmod +x $HOME/bura/bura
7. Set Bura Path.
-If you use the ohmyz open .zshrc file
sudo nano ~/.zshrc
Find (# Path to your oh-my-zsh installation.) and add Bura path under it
export PATH="$HOME/bura:$PATH"
Save and reload .zshrc
source ~/.zshrc
-If you dont use the ohmyz open .profile file
sudo nano ~/.profile
Scroll to the bottom and add Bura path
export PATH="$HOME/bura:$PATH"
Save and reload .profile
source ~/.profile
8. Close any terminal you using and open again.
9. Hooray, 🙌🤩🥳 now Bura CLI is successfully installed.
ubuntu@user:~$bura
`