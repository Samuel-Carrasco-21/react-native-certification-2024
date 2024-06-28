#!/bin/bash
# no olvidar dar permisos 
# chmod +x tools/extensions.sh  
# Lista de extensiones recomendadas para React Native
extensions=(
  msjsdiag.vscode-react-native
  dbaeumer.vscode-eslint
  esbenp.prettier-vscode
  EQuimper.react-native-react-redux
  msjsdiag.debugger-for-chrome
  christian-kohler.path-intellisense
  formulahendry.auto-rename-tag
  CoenraadS.bracket-pair-colorizer
  eamodio.gitlens
  vscode-icons-team.vscode-icons
  Orta.vscode-jest
  christian-kohler.npm-intellisense
  jpoissonnier.vscode-styled-components
  OfHumanBondage.react-proptypes-intellisense
)

# Instalar cada extensión
for extension in "${extensions[@]}"; do
  echo "Instalando $extension..."
  code --install-extension $extension
done

echo "Todas las extensiones han sido instaladas."