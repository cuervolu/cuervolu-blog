---
title: "Creando un cliente HTTP Con Tauri y SvelteKit"
description: Un pequeño proyecto para crear un cliente minimalista pero funcional para hacer peticiones HTTP.
date: "2024-07-07"
draft: true
cover: './07.png'
---
![Portada: Creando un cliente HTTP Con Tauri y SvelteKit](@assets/07.webp)

---

¡Oh, bueno! He estado un tiempo desaparecido, más que nada debido a la gran cantidad de trabajos y estudios que he tenido en la universidad, pero finalmente tengo *algo* de tiempo libre para crear algo nuevo. Aunque la realidad es que si he estado trabajando en distintos proyectos, por el momento llevo tres y contando, pero quería escribir algo aquí y la razón por la que me centre en este proyecto primero para mostrarles es porque es algo más sencillo de desarrollar en comparación a los otros dos proyectos que tengo en mente.

En este proyecto, vamos a crear un cliente HTTP minimalista pero funcional, que nos permita hacer peticiones HTTP a cualquier servidor y mostrar la respuesta en una interfaz de escritorio multiplataforma.

Está idea la he tenido en mente desde hace siglos, pero recién ahora me enfoque en crearla. En un inicio, me costó escoger las tecnologías a usar. Porque seamos honestos, este proyecto tendrá la gran cantidad de **0** usuarios, por ende, puedo tomarme la libertad de usar la tecnología que quiera solo para divertirme.

## Tecnologías

Dos opciones estuvieron en mi mente:

- [Tauri](https://v2.tauri.app/)
- [Avalonia UI](https://avaloniaui.net/)

Hay dos diferencias significativas y claves sobre estas dos opciones. Por un lado, Tauri utiliza tecnologías web como HTML, CSS y JavaScript para crear aplicaciones de escritorio, a diferencia de otras tecnologías como Electron que utiliza un navegador completo para renderizar la interfaz de usuario, Tauri usa el **webview** de cada sistema operativo. Por ejemplo, en mi caso, uso Linux, por ende, Tauri usará el motor de renderizado de [**webview** de GTK](https://webkitgtk.org/).

Una de las ventajas de Tauri frente a frameworks más establecidos como Electron es que Tauri genera aplicaciones más pequeñas y rápidas (además de que con la versión 2, se pueden crear apps móviles), tiene su propio CLI y a mi parecer, es más fácil de usar.

También se centra mucho en la seguridad, de hecho, tienen secciones enteras en su documentación, tanto de la version v2 como la versión v1, sobre su [filosofía](https://v2.tauri.app/blog/tauri-1-0/) y cosas por el estilo.

También tienen un sistema de plugins, que permite extender la funcionalidad de la aplicación, por ejemplo, si necesitas acceder a la cámara de la computadora, puedes crear un plugin para ello. O puedes usar los plugins oficiales que ya tienen, como el plugin de [notificaciones](https://v2.tauri.app/plugin/notification/) o el plugin de [diálogos](https://v2.tauri.app/plugin/dialog/).

Una de las cosas que me gustó de Tauri es su comunidad de Discord, donde puedes hacer preguntas y recibir ayuda de otros desarrolladores que también usan Tauri, incluso de los mismos desarrolladores de este framework, lo he usado en varias ocasiones y siempre me han ayudado.

### ¿Qué hay de Avalonia UI?

No se si lo he mencionado en algún momento, pero el entorno de .NET es uno de mis favoritos. Todo es tan ordenado en comparación al ecosistema de Javascript. El problema que tienen es que, al menos de parte de Microsoft, nunca pusieron mucho enfoque, a mi parecer, en el desarrollo de aplicaciones de escritorio, especialmente si hablamos de aplicaciones multiplataforma.

He trabajado tanto con Windows Forms como con WPF, y aunque son tecnologías muy buenas, no son multiplataforma. También utilizan el patrón MVVM (Model-View-ViewModel), pero nunca se enfocaron en crear soluciones que unifiquen como desarrollar estas apps. Por ejemplo, hay distintos paquetes de NuGet que te permiten facilitar el uso de este patrón, pero no hay una solución oficial (o al menos no la he encontrado).

Un día iba viendo internet cuando me encontré con Avalonia UI, más que un framework, es una plataforma de desarrollo de aplicaciones, tanto de escritorio, móvil, embebidas y web. Es de código abierto, tiene soporte empresarial y se hace llamar el sucesor de WPF.

Avalonia UI utiliza XAML para definir la interfaz de usuario, y C# para la lógica de la aplicación. Puedes usar tanto Visual Studio, Rider o Visual Studio Code para desarrollar aplicaciones, todas tienen extensiones que te permiten trabajar con Avalonia UI.

¡Aunque eso no es todo! Para la interfaz, **puedes usar tanto C#, F# o XAML**. Si, leíste bien, puedes usar F# o C# para definir la interfaz de usuario, lo cual es algo que me parece muy interesante. Especialmente porque **DETESTO** XAML, no se porque, pero no me gusta.

Y todo empieza con un simple comando:

```bash
dotnet new install Avalonia.Templates
```

(Obviamente, necesitas tener .NET Core instalado)

Si te interesa saber que utiliza para el renderizado, utiliza SkiaSharp, una API de gráficos 2D multiplataforma para plataformas .NET basada en la biblioteca de gráficos Skia de Google. Muchas aplicaciones utilizan Skia para renderizar su interfaz de usuario, como Google Chrome y las aplicaciones creadas con Flutter, lo que permite a los desarrolladores crear aplicaciones de alto rendimiento con un aspecto coherente.

Aunque Skia es el renderizado predeterminado, Avalonia UI también admite el renderizado con Direct2D en Windows.

Todo esto ofrece un rendimiento nativo y consumen muchos menos recursos que una aplicación equivalente desarrollada con tecnologías web como Electron.

## ¿Pero cuál elegí?

Yendo al grano, elegí Tauri.

Pero espera, eso no es todo, también elegí Avalonia UI.

¿Por qué? Porque quería probar ambas tecnologías. Y luego de hacerlo, voy a compararlas y ver cuál es mejor para el proyecto que tengo en mente. Comparando cosas como el rendimiento, la facilidad de uso, la documentación, la comunidad, etc.

Pero como habrás visto en el título, este post se centra en Tauri, porque tengo más experiencia con él y porque es más fácil de usar. Mis habilidades con C# están algo oxidadas por el momento. Además, aún necesito investigar las utilidades que usaré.

## Antes de codificar

Antes de empezar a codificar, tenemos que tener un plan. Yo no soy mucho de documentar mis proyectos, pero siempre tengo un plan en mi cabeza. En este caso, el plan empezará con un simple Design Document. Los suelo escribir en Obsidian, pero puedes usar cualquier editor de texto que prefieras si es que quieres hacer uno.

Mi Design Document tiene las siguientes secciones:

- Una pequeña descripción del proyecto
- Requerimientos
- Tecnologías a usar y el por qué, dividido en dos secciones: Frontend y Backend
- Utilidades a usar, como librerías o plugins
- Diseño de la interfaz de usuario
- Implementación, dividido en dos secciones: Frontend y Backend
- Preguntas abiertas que tengo sobre el proyecto

Y eso es todo. No es necesario que sea muy detallado, pero si es necesario que tengas un plan antes de empezar a codificar. No sabes cuántas veces he empezado un proyecto sin un plan y he terminado abandonándolo porque no sabía qué hacer. O con ganas de matar a mi yo del pasado por no haber hecho un plan.

Dare detalles de los requerimientos que anoté, la mayoría esta enfocada en hacer un MVP (Minimum Viable Product) para que el proyecto sea funcional:

### Requerimientos

1. **Realizar Solicitudes HTTP**:
   - Soporte para los métodos HTTP: GET, POST, PUT, DELETE, PATCH, y OPTIONS.
   - Capacidad para enviar datos en el cuerpo de la solicitud (JSON, XML, Form Data, etc.).

2. **Configurar Encabezados y Parámetros**:
   - Permitir a los usuarios agregar y editar encabezados HTTP personalizados.
   - Soporte para configurar parámetros de consulta (query parameters) y cuerpo de las solicitudes.

3. **Visualizar y Formatear Respuestas**:
   - Mostrar las respuestas de las solicitudes en un formato legible (JSON, XML, texto plano).
   - Formateo automático de JSON y XML para facilitar la lectura.
   - Posibilidad de visualizar los encabezados de la respuesta.

4. **Guardar y Organizar Colecciones de Solicitudes**:
   - Permitir a los usuarios guardar solicitudes individuales.
   - Agrupar y organizar solicitudes en colecciones para fácil acceso.

5. **Generar Código para Diferentes Lenguajes**:
   - Generar ejemplos de código en varios lenguajes de programación (JavaScript, Python, cURL, etc.) basados en las solicitudes configuradas.

6. **Funcionalidades Adicionales (Opcionales para MVP)**:
   - **Autenticación**: Soporte básico para autenticación (e.g., Bearer Tokens, Basic Auth).
   - **Historial de Solicitudes**: Registro de las solicitudes realizadas recientemente.
   - **Tests de Conexión**: Herramientas para probar la conectividad de red y la latencia.

### Tecnologías a Usar

- **Frontend**:

  - **SvelteKit**: Para construir la interfaz de usuario con una experiencia rápida y reactiva.
  - **TailwindCSS**: Para un diseño UI moderno y utilitario.
  - **TypeScript**: Para agregar tipado estático y mejorar la calidad del código.
  - **[Shadcn](https://www.shadcn-svelte.com/)** y **[Bits UI](https://www.bits-ui.com/docs/introduction)**: Para componentes UI
  
- **Backend**:
  - **Tauri**: Para la capa de backend y empaquetado como aplicación de escritorio.
  - **Rust**: Para manejar las operaciones de backend con alta eficiencia y seguridad.
  - **SQLite**: Para almacenamiento local de datos, como colecciones de solicitudes y configuraciones del usuario.

### Utilidades

- [reqwest](https://docs.rs/reqwest/latest/reqwest/#): Para las peticiones HTTP
- [tauri-apps/plugin-sql](https://v2.tauri.app/plugin/sql/): Para almacenamiento local de los datos
- [Store](https://v2.tauri.app/plugin/store/): Para almacenamiento local de ciertas opciones del usuario
- [Clipboard](https://v2.tauri.app/plugin/clipboard/): Por si el usuario quiere copiar la petición o algo
- [Crab Nebula Devtools](https://crabnebula.dev/devtools/): Para depurar la aplicación
- [Stronghold](https://v2.tauri.app/plugin/stronghold/): Para guardar secretos, como API Keys o cosas del usuario
- [Tauri Controls](https://github.com/agmmnn/tauri-controls): Para añadir controles de ventana nativos a la aplicación
- [Lucide](https://lucide.dev/): Para los iconos

E ire añadiendo más utilidades a medida que avance el proyecto.

## Creando el Proyecto

¿Pero como llamaré a este proyecto? No soy bueno con nombres, así que lo llame **Phoenix**, es muy usado, pero me gusta.

Para la interfaz, me baso en otro gran cliente HTTP, [Bruno](https://www.usebruno.com/). Tuve ayuda de [V0](https://v0.dev/) para  partes del diseño, al igual que use algunos componentes de [TailwindComponents](https://tailwindcomponents.com/) e incluso ayuda de los amigazos, ChatGPT y Claude. ¿Por qué? Porque soy malo diseñando.

Para empezar, necesitas seguir los pre-requisitos de Tauri, que puedes encontrar en su [documentación](https://v2.tauri.app/start/prerequisites/).

Luego, debemos crear primero el proyecto de SvelteKit, para ello, ejecutamos el siguiente comando con pnpm (o el gestor de paquetes que prefieras), yo agregaré las dependencias que usaremos al comando:

```bash
pnpm create svelte phoenix
pnpm install
pnpm add -D @sveltejs/adapter-static  @tauri-apps/cli@next cross-env
pnpm install mode-watcher lucide-svelte @fontsource/geist-mono @tauri-apps/api@next 
```

Tauri ejecuta el proyecto de SvelteKit sin servidor, por ende, necesitamos el adaptador estático para que funcione.

```javascript
import adapter from '@sveltejs/adapter-static'; // Importamos el adaptador estático
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 // Consult https://kit.svelte.dev/docs/integrations#preprocessors
 // for more information about preprocessors
 preprocess: vitePreprocess(),

 kit: {
  // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
  // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
  // See https://kit.svelte.dev/docs/adapters for more information about adapters.
  adapter: adapter()
 }
};

export default config;
```

Y hago unas pequeñas modificaciones al archivo `package.json`:

```json
"scripts": {
  "dev": "cross-env RUST_BACKTRACE=1 RUST_LOG=info tauri dev",
  "build": "tauri build",
  "vite:dev": "vite dev",
  "vite:build": "vite build",
  "preview": "vite preview",
  "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
  "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
  "test": "vitest",
  "lint": "prettier --check . && eslint .",
  "format": "prettier --write .",
  "tauri": "tauri",
  "dependencies:check": "depcheck ."
 },
```

Ahora, necesitamos crear el proyecto de Tauri, para ello, ejecutamos el siguiente comando:

```bash
pnpm tauri init
```

Te hará una serie de preguntas:

```bash
✔ What is your app name? phoenix
✔ What should the window title be? Phoenix
✔ Where are your web assets located? ../build
✔ What is the url of your dev server? http://localhost:5173
✔ What is your frontend dev command? pnpm run vite:dev
✔ What is your frontend build command? pnpm run vite:build
```

Ahora, si Dios nos ama, deberías simplemente ejecutar `pnpm run dev` y deberías ver la aplicación corriendo. En mi caso, funcionó a la primera :D.

## Diseñando la Interfaz de Usuario

