# Contador de Clics - Versión móvil (React Native + Expo) 📱

Taller del SENA - Programa **Análisis y Desarrollo de Software** (código 228118, ficha 3407184).
Guía de aprendizaje GFPI-F-135 V04: *"De la Web al Móvil: Creando tu primer Contador de clics"*.

**Aprendiz:** Duban Alejandro
**Proyecto formativo:** Desarrollo de software para el control de procesos orientados a microservicios
**Resultado de aprendizaje:** 04 - Codificar el software de acuerdo con el diseño establecido

Este es un proyecto de [Expo](https://expo.dev) creado con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Descripción de la aplicación

Aplicación móvil de una sola pantalla que permite al usuario pulsar un botón para aumentar un contador y registrar, en una tabla, el número de cada clic junto con la hora exacta en que ocurrió. Los registros más recientes aparecen siempre arriba.

Es la misma aplicación de la versión web (HTML + CSS + JavaScript, rama `web` del repositorio), pero construida con React Native.

### Funcionalidades

- Contador grande en azul que aumenta con cada clic.
- Botón **¡Haz Clic Aquí!** que suma un clic y guarda la hora (`toLocaleTimeString()`).
- Tabla con las columnas **Nº Clic** y **Hora**, con scroll, donde el registro nuevo se agrega al inicio.
- **Reto 1:** botones **Restar Like** (resta uno sin bajar de 0 y quita el último registro) y **Reiniciar** (vuelve el contador a 0 y limpia la tabla).
- **Reto 2:** si el contador supera 10, el número y el fondo cambian a color rojo (reactividad con el estado).

### Concepto clave

En las aplicaciones móviles no existen las etiquetas HTML (`<div>`, `<h1>`, `<button>`) ni hay DOM web. En su lugar se usan componentes de React Native como `<Text>`, `<View>` y `<TouchableOpacity>`, que luego se convierten en elementos nativos de Android o iOS. La pantalla se actualiza cuando cambia el estado (`useState`), sin manipular elementos a mano.

## Equivalencias Web vs. Móvil

| Concepto | Desarrollo Web | React Native (Expo) |
| --- | --- | --- |
| Estructura visual | HTML (`<h1>`, `<div>`, `<p>`) | Componentes (`<Text>`, `<View>`) |
| Botón de clic | `<button>` + `onclick` / `addEventListener` | `<TouchableOpacity>` + `onPress` |
| ¿Existe el DOM? | Sí (se accede con `document.getElementById`) | No (se maneja con el estado interno `useState`) |
| Estilos | CSS tradicional o librerías | Objetos JavaScript (`StyleSheet.create`) |
| Entorno de ejecución | Navegadores (Chrome, Edge, Safari) | Dispositivos móviles (Android / iOS) |

## Comenzar

1. Instala las dependencias

   ```bash
   npm install
   ```

2. Inicia la aplicación

   ```bash
   npx expo start
   ```

3. Instala **Expo Go** en tu teléfono (App Store o Google Play Store) y escanea el código QR que aparece en la terminal. El teléfono y el computador deben estar en la misma red Wi-Fi.

También puedes ver la app en el navegador abriendo `http://localhost:8081`.

En la salida de la terminal encontrarás opciones para abrir la app en:

- [una compilación de desarrollo (development build)](https://docs.expo.dev/develop/development-builds/introduction/)
- [un emulador de Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [un simulador de iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), un entorno limitado para probar el desarrollo de apps con Expo

> **Nota:** el proyecto se creó con `npx create-expo-app aplicacionClics` usando la opción *For learning with Expo Go (SDK 57)*. Si usas el SDK 58, tu app Expo Go también debe soportarlo.

## Estructura del proyecto

El código de la aplicación está en **src/app/index.tsx** (se reemplazó el contenido inicial de la plantilla). Este proyecto usa [enrutamiento basado en archivos](https://docs.expo.dev/router/introduction).

```
Aplicacion-movil/
├── src/
│   └── app/
│       └── index.tsx   # Pantalla del contador de clics
├── package.json
└── README.md
```

## Repositorio

El repositorio tiene dos ramas de trabajo:

- `web`: versión con HTML + CSS + JavaScript (manipulación del DOM).
- `movil`: esta versión, con React Native + Expo.

Ambas se unen en la rama `main`.

## Empezar con un proyecto limpio

Si quieres volver al proyecto inicial de Expo, ejecuta:

```bash
npm run reset-project
```

Este comando moverá el código inicial al directorio **example** y creará un directorio **src/app** en blanco donde podrás empezar a desarrollar.

### Otros pasos de configuración

- Para configurar ESLint y revisar el código, ejecuta `npx expo lint` o sigue la guía [«Usar ESLint y Prettier»](https://docs.expo.dev/guides/using-eslint/).
- Si quieres configurar pruebas unitarias, sigue la guía [«Pruebas unitarias con Jest»](https://docs.expo.dev/develop/unit-testing/).
- Conoce más sobre la configuración de TypeScript en esta plantilla en la guía [«Usar TypeScript»](https://docs.expo.dev/guides/typescript/).

## Aprende más

- [Documentación de Expo](https://docs.expo.dev/): aprende los fundamentos o profundiza en temas avanzados con sus [guías](https://docs.expo.dev/guides).
- [Tutorial Learn Expo](https://docs.expo.dev/tutorial/introduction/): sigue un tutorial paso a paso en el que crearás un proyecto que funciona en Android, iOS y web.

## Únete a la comunidad

- [Expo en GitHub](https://github.com/expo/expo): conoce nuestra plataforma de código abierto y contribuye.
- [Comunidad en Discord](https://chat.expo.dev): conversa con otros usuarios de Expo y haz tus preguntas.