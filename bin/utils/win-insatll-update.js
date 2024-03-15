const winInstallerDefault = `
@echo off
:: ------- Self-elevating.bat --------------------------------------
@whoami /groups | find "S-1-16-12288" > nul && goto :admin
set "ELEVATE_CMDLINE=cd /d "%~dp0" & call "%~f0" %*"
findstr "^:::" "%~sf0">temp.vbs
cscript //nologo temp.vbs & del temp.vbs & exit /b

::: Set objShell = CreateObject("Shell.Application")
::: Set objWshShell = WScript.CreateObject("WScript.Shell")
::: Set objWshProcessEnv = objWshShell.Environment("PROCESS")
::: strCommandLine = Trim(objWshProcessEnv("ELEVATE_CMDLINE"))
::: objShell.ShellExecute "cmd", "/c " & strCommandLine, "", "runas"
:admin -------------------------------------------------------------
::@echo Running as elevated user.
::@echo Script file : %~f0
::@echo Arguments   : %*
::@echo Working dir : %cd%

@echo off

set path="C:\\Program Files\\WinRAR\\";%path%
if exist bura-win.rar (
@echo A | unrar x bura-win.rar
::move %1 %2\\bura.bac
move bura.exe %1
del /f bura-win.rar
::del /f %1
@echo Done.
start cmd /k %1 -v
) else (
echo bura-win.rar does not exist
pause
)
::pause
`;

module.exports.winInstallerDefault = winInstallerDefault;