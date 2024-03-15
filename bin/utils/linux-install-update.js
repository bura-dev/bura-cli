const linuxInstallerDefault = `
FILE=$3/bura-linux.rar

sudo apt install unrar -y

if [ -f "$FILE" ]; then
    sudo unrar x $FILE $3 -y
#    sudo mv $1 $2/bura.bac 
    sudo mv $3/bura $1
    sudo chmod +x $1
    sudo rm $3/bura-linux.rar
else
    echo "Bura-linux.rar does not exist."
fi
`

module.exports.linuxInstallerDefault = linuxInstallerDefault;
