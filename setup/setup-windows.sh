# Instalar Chocolatey (si no está instalado)
if (-not (Get-Command choco -ErrorAction SilentlyContinue)) {
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
}

# Instalar Node.js y npm
choco install -y nodejs

# Instalar Expo CLI
npm install -g expo-cli

# Clonar el repositorio de ejemplo
# Modificar la direccion del folder para que sea el correcto
# cd /Users/your-user/Desktop
git clone https://github.com/your-repo/react-native-certification.git

# Entrar en el directorio del proyecto
Set-Location react-native-certification

# Instalar dependencias del proyecto
npm install

Write-Output "Configuración completa. ¡Estás listo para empezar a desarrollar con React Native!"