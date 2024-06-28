# Configuración de un Emulador de Android

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- **Node.js** y **npm**: Puedes descargarlos e instalarlos desde [nodejs.org](https://nodejs.org/).
- 
- **Java Development Kit (JDK)**: Se recomienda la versión JDK 8. Puedes descargarlo desde [Oracle](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) o usar una distribución como [OpenJDK](https://www.azul.com/downloads/?package=jdk#zulu).
- 
- **Android Studio**: Incluye el Android SDK y el Android Virtual Device (AVD) Manager. Descárgalo desde [developer.android.com](https://developer.android.com/studio).

## Paso 1: Instalar y Configurar Android Studio

1. **Descargar e Instalar Android Studio**:
   - Ve a [developer.android.com/studio](https://developer.android.com/studio) y descarga Android Studio.
   - Sigue las instrucciones de instalación para tu sistema operativo.

2. **Configurar el Android SDK**:
   - Abre Android Studio.
   - Ve a `Preferences` (o `File > Settings` en Windows/Linux) > `Appearance & Behavior` > `System Settings` > `Android SDK`.
   - En la pestaña `SDK Platforms`, selecciona `Show Package Details`.
   - Asegúrate de que las siguientes versiones del SDK estén seleccionadas:
     - Android 10.0 (Q)
     - Android 9.0 (Pie)
   - En la pestaña `SDK Tools`, selecciona:
     - Android SDK Build-Tools
     - Android Emulator
     - Android SDK Platform-Tools
     - Intel x86 Emulator Accelerator (HAXM installer) (para máquinas con procesador Intel)
   - Haz clic en `Apply` para instalar los paquetes seleccionados.

## Paso 2: Crear un Emulador de Android

1. **Abrir AVD Manager**:
   - En Android Studio, ve a `Tools` > `AVD Manager`.

2. **Crear un Nuevo Dispositivo Virtual**:
   - Haz clic en `Create Virtual Device`.
   - Selecciona un dispositivo de la lista (por ejemplo, `Pixel 3`) y haz clic en `Next`.

3. **Seleccionar una Imagen del Sistema**:
   - Selecciona una imagen del sistema recomendada (por ejemplo, `Q API Level 29`).
   - Haz clic en `Next`.

4. **Configurar el Dispositivo Virtual**:
   - Puedes ajustar las configuraciones adicionales del dispositivo según tus necesidades.
   - Haz clic en `Finish` para crear el dispositivo virtual.

5. **Iniciar el Emulador**:
   - En el AVD Manager, haz clic en el ícono de `Play` para iniciar el emulador.
   - Espera a que el emulador inicie completamente.

## Solución de Problemas Comunes

- **Problema**: El emulador no se inicia o se bloquea.
  - **Solución**: Asegúrate de que la opción `Intel x86 Emulator Accelerator (HAXM installer)` esté instalada y habilitada en tu BIOS/UEFI.

- **Problema**: La conexión entre Expo y el emulador falla.
  - **Solución**: Asegúrate de que el emulador esté completamente iniciado antes de ejecutar `npm start`. Revisa que no haya otros emuladores o dispositivos conectados que puedan causar conflictos.
