#!/bin/bash

# Instalar Node.js y npm
echo "Instalando Node.js y npm..."
brew install node

# Instalar Expo CLI
echo "Instalando Expo CLI..."
npm install -g expo-cli

# Clonar el repositorio de ejemplo
# Modificar la direccion del folder para que sea el correcto
# cd /Users/your-user/Desktop
echo "Clonando el repositorio de ejemplo..."
git clone https://github.com/your-repo/react-native-certification.git

# Entrar en el directorio del proyecto
cd react-native-certification

# Instalar dependencias del proyecto
echo "Instalando dependencias del proyecto..."
npm install

echo "Configuración completa. ¡Estás listo para empezar a desarrollar con React Native!"