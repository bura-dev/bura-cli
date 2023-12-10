<br>

<h1 align="center">
  BURA CLI 💻
</h1>

<p align="center"><img src="/assets/gif/bura.gif" alt="Bura CLI gif" /></p>

<p align="center">
<a href="https://github.com/jepbura/bura-cli/fork" target="blank">
<img src="https://img.shields.io/github/forks/jepbura/bura-cli?style=flat-square" alt="Bura CLI forks"/>
</a>
<a href="https://github.com/jepbura/bura-cli/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/jepbura/bura-cli?style=flat-square" alt="Bura CLI stars"/>
</a>
<a href="https://github.com/jepbura/bura-cli/issues" target="blank">
<img src="https://img.shields.io/github/issues/jepbura/bura-cli?style=flat-square" alt="Bura CLI issues"/>
</a>
<a href="https://github.com/jepbura/bura-cli/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/jepbura/bura-cli?style=flat-square" alt="Bura CLI pull-requests"/>
</a>
</p>

<p align="center">
Bura command helps to get rid of long commands.
</p>


<p align="center">
<a href="https://idpay.ir/jepbura"><img height='23' width="100"  src="/assets/images/idPay.svg" alt="Jepbura id pay"/></a>
<a href='https://ko-fi.com/jepbura' target='_blank'><img height='23' width="100" src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' alt='Buy Coffee for jepbura' /></a>
<a href="https://www.buymeacoffee.com/jepbura" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="23" width="100" style="border-radius:1px" />
</p>

- [What is Bura CLI?](#what-is-bura-cli)
- [Demo](#demo)
- [Installation Windows](#installation-windows)
- [Installation Linux](#installation-linux)
- [List of static commands](#list-of-static-commands)
- [Contact us](#contact)

## What is Bura CLI?

**Bura CLI** is a command line tool that allows you to create long and different commands that you work with in a concise manner as you like (it can be simple or with input).

## Demo

<details>
	<summary>Simple use</summary>
	<img src="/assets/gif/ubuntu.gif" alt="ubuntu gif" />
</details>

<details>
	<summary>Use with input</summary>
	<img src="/assets/gif/ping+.gif" alt="ping+ gif" />
</details>

<details>
	<summary>List of commands</summary>
	<img src="/assets/gif/list.gif" alt="list gif" />
</details>

<details>
	<summary>Add simple command</summary>
	<img src="/assets/gif/serverConnectSimple.gif" alt="serverConnectSimple gif" />
</details>

<details>
	<summary>Add with input command</summary>
	<img src="/assets/gif/serverConnectWithInput.gif" alt="serverConnectWithInput gif" />
</details>



## Installation Windows

1. Download **Bura CLI** `V1.2.0` from [Bura-win.rar](https://s3.ir-thr-at1.arvanstorage.com/jepbura/bura-win.rar) `or` [Bura-win.rar](https://github.com/jepbura/bura-cli/releases/download/v1.2.0/bura-win.rar).

2. Unrar Bura-win.rar in a folder like `C:\bura`

3. Open RUN by shortcut `(WINDOWS_KEY + R_KEY)`.

4. Type in RUN `SystemPropertiesAdvanced`.

5. System Properties dialog should appear, click `Environment Variables`.

6. In User variables (The Top section) select `Path` and click Edit.

7. Add the new path to bura.exe folder like this `C:\bura`.

8. Select OK, and OK again in Environment Variables, and OK in System Properties.

9. Close any Command prompt you using and open again.

10. Hooray, 🙌🤩🥳 now **Bura CLI** is successfully installed.

	```bash
	bura
	```

## Installation Linux

1. Open terminal `(WINDOWS_KEY + ALT + T_KEY)`.

2. Create a folder like `$HOME/bura`.

	```bash
	mkdir $HOME/bura
	```

3. Go in the created folder 

	```bash
	cd $HOME/bura
	```

4. Download **Bura CLI** `V1.2.0`.

	- If you download from these two links, transfer the Bura-linux.rar to the $HOME/bura.
	[Bura-win.rar](https://s3.ir-thr-at1.arvanstorage.com/jepbura/bura-linux.rar)
	`or`
	[Bura-win.rar](https://github.com/jepbura/bura-cli/releases/download/v1.2.0/bura-linux.rar)
	
	```bash
	mv bura-linux.rar $HOME/bura
	```

	- If you use the terminal.

	```bash
	curl –O https://s3.ir-thr-at1.arvanstorage.com/jepbura/bura-linux.rar
	```

5. Unrar Bura-linux.rar.

	```bash
	sudo unrar x $HOME/bura/Bura-win.rar
	```

6. Change Bura permissions.

	```bash
	sudo chmod +x $HOME/bura/bura
	```

7. Set Bura Path.

	- If you use the ohmyz open `.zshrc` file
	
		```bash
		sudo nano ~/.zshrc
		```	
		
		Find `# Path to your oh-my-zsh installation.` and add Bura path under it
	
		```bash
		export PATH="$HOME/bura:$PATH"
		```	
		
		Save and reload `.zshrc`
			
		```bash
		source ~/.zshrc
		```	
	
	- If you dont use the ohmyz open `.profile` file
	
		```bash
		sudo nano ~/.profile
		```	
		
		Scroll to the bottom and add Bura path
		
		```bash
		export PATH="$HOME/bura:$PATH"
		```	
				
		Save and reload `.profile`
			
		```bash
		source ~/.profile
		```	
		
8. Close any terminal you using and open again.

9. Hooray, 🙌🤩🥳 now **Bura CLI** is successfully installed.

	```bash
	bura
	```

## List of static commands

|   Complete   | abbr | Description                          |
|--------------|------|--------------------------------------|
|   --help     |  -h  | Bura guide                           |
|   --version  |  -v  | View version                         |
|   --add      |  -a  | Add command                          |
|   --delete   |  -d  | Delete command                       |
|   --edite    |  -e  | Edite command                        |
|   --update   |  -u  | Bura update                          |
|   --list     |  -l  | View the list of commands and use it |
|     me       |  me  | View BURA                            |

	
## Contact us

<hr>

<p align="center">
  <a href="https://www.bura.dev">
    <img alt="GitHub Profile Readme Generator" src="/assets/images/logo.png" width="60" />
  </a>
</p>

<p align="center">
Developed with <a href='https://www.bura.dev' target='_blank'>BURA</a> ❤️
</p>
