@echo ~~~~~ Delete bura-linux.rar ~~~~~
@if exist bura-linux.rar (del bura-linux.rar) else (@echo "bura-linux.rar File does not exist")
@echo ~~~~~ Delete bura-win.rar ~~~~~
@if exist bura-win.rar (del bura-win.rar) else (@echo "bura-win.rar File does not exist")
@echo ~~~~~ Delete bura ~~~~~
@if exist bura (del bura) else (@echo "bura File does not exist")
@echo ~~~~~ Delete bura.exe ~~~~~
@if exist bura.exe (del bura.exe) else (@echo "bura.exe File does not exist")

@echo ~~~~~ SET PATH ~~~~~
@set path="C:\\Program Files\\WinRAR\\";%path%

@GOTO :MAIN

rem ************ myfunction *************
:myfunction
@echo ~~~~~ pkg ~~~~~
@call ".pkg.bat"
::@start cmd /k @pkg -t node14-linux,node14-win ./bin/bura.js
@goto :eof

rem ************ Main Program *************
:MAIN
@call :myfunction
@echo ~~~~~ Rename bura-linux ~~~~~
@move bura-linux bura
@echo ~~~~~ Rename bura-win.exe ~~~~~
@move bura-win.exe bura.exe
@echo ~~~~~ RAR bura-linux ~~~~~
@rar a -r bura-linux.rar bura
@echo ~~~~~ RAR bura-win.exe ~~~~~
@rar a -r bura-win.rar bura.exe
@pause


