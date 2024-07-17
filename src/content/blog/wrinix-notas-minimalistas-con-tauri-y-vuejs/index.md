---
title: "Wrinix: Notas Minimalistas con Tauri y Vue.js"
description: "Descubre cómo voy creando Wrinix, una app de notas minimalista con Tauri, Vue.js y Supabase. Aprende sobre mis objetivos y desafíos."
date: "2024-07-17"
draft: false
cover: './cover.png'
---
![Portada: Creando un cliente HTTP Con Tauri y SvelteKit](@assets/wrinix01.webp)

---

## Introducción

Ha pasado un largo tiempo desde que escribí mi último artículo en el blog. Durante este tiempo, he estado trabajando en varios proyectos y aprendiendo nuevas tecnologías (además de lidiar con los exámenes de la universidad). Uno de los proyectos en los que he estado trabajando es una aplicación de notas minimalista llamada Wrinix. En este artículo, comparto el origen de la idea, mis motivaciones para crearla, y los objetivos y desafíos que espero enfrentar a lo largo del proyecto. Al documentar este proceso, espero ofrecer una visión transparente de los pasos, las decisiones y los problemas encontrados en el camino.

### ¿Qué es Wrinix?

He probado varias aplicaciones de notas en el pasado, como AppFlowy, Bear, Joplin, Apple Notes, etc., pero ninguna de ellas se ajustaba a mis necesidades. Algunas eran demasiado complejas, otras no tenían la funcionalidad que buscaba, y otras simplemente no me gustaban. Por lo tanto, decidí crear mi propia aplicación de notas, con la esperanza de que otros también puedan encontrarla útil.

Wrinix nace de la necesidad de tener una herramienta sencilla y eficiente para tomar notas y organizar ideas. Inspirado por aplicaciones como Notion y Obsidian, mi objetivo es desarrollar una solución que sea local-first, con la opción de sincronización en la nube.

Inicialmente, la aplicación iba a ser para una persona, dado que le estaba haciendo un favor a una amiga que necesitaba una aplicación de notas que cumpliera con sus necesidades. Pero, después de pensarlo un poco más, decidí que sería mejor si la aplicación fuera de código abierto, para que otros puedan contribuir y mejorarla.

### Objetivos del Proyecto

Mis objetivos con Wrinix son claros:

- Crear una aplicación de notas minimalista y fácil de usar.
- Garantizar que las notas sean accesibles sin conexión, con una opción de sincronización en la nube.
- Desarrollar una herramienta que sea flexible y personalizable, permitiendo a los usuarios adaptar la aplicación a sus necesidades.
- Hacer que Wrinix sea una plataforma de código abierto para fomentar la colaboración y mejora continua.
- Asegurar que la aplicación sea segura y respete la privacidad de los usuarios, sin recopilar datos personales.
- Permitir que las notas sean exportables en formatos comunes, como Markdown, HTML, PDF, etc.
- Añadir la posibilidad de encriptar las notas.
- Aprender y mejorar mis habilidades en el desarrollo de aplicaciones de escritorio y web.

### Tecnologías Utilizadas

Me costó decidir qué tecnologías utilizar para el desarrollo de Wrinix. Quería algo que fuera rápido, eficiente y fácil de usar. Después de investigar y probar varias opciones, decidí utilizar las siguientes tecnologías:

- **Tauri**: Un marco para crear aplicaciones de escritorio con tecnologías web. Tauri combina la simplicidad de las aplicaciones web con la potencia de las aplicaciones de escritorio, permitiendo a los desarrolladores crear aplicaciones rápidas y eficientes. Utiliza Rust para el backend y el framework que más te guste para el frontend.
- **Vue.js**: Un framework progresivo para la creación de interfaces de usuario. Vue.js es fácil de aprender y usar, lo que lo convierte en una excelente opción para el desarrollo de aplicaciones web.
- **Supabase**: Una plataforma de base de datos y autenticación que simplifica el desarrollo de aplicaciones web. Supabase es fácil de usar y ofrece una amplia gama de características, como la sincronización en tiempo real y la autenticación segura, evitando tener que preocuparse por la configuración de una base de datos y la gestión de usuarios.
- **Resend**: Un servicio de email marketing que me permite enviar correos electrónicos a los usuarios de Wrinix.
- **Tailwind CSS**: Un framework de diseño CSS que facilita la creación de interfaces de usuario atractivas y receptivas.

Hay más tecnologías que he utilizado, pero estas son las principales. Iré compartiendo más detalles sobre las tecnologías utilizadas a medida que avance en el desarrollo de Wrinix.

## Desafíos y Problemas

Como cualquier proyecto de software, Wrinix no está exento de desafíos y problemas. Especialmente considerando que no tengo vasta experiencia en el desarrollo de aplicaciones de escritorio. La última que realicé fue en WPF para [Librería Imagina](/projects/libreria-imagina), una aplicación de escritorio para la gestión de una librería en un proyecto de la universidad, y no fue una experiencia agradable.

He estado experimentando mucho con Tauri últimamente, y aunque me gusta mucho, todavía tengo mucho que aprender. Afortunadamente, Tauri tiene una documentación excelente y una comunidad activa, especialmente en Discord, donde siempre hay alguien dispuesto a ayudar, incluidos los mismos desarrolladores de Tauri.

Uno de los desafíos que he enfrentado hasta ahora es la integración de Supabase con Tauri. Supabase es una plataforma de base de datos y autenticación que ofrece una API RESTful para interactuar con la base de datos. Aunque la documentación de Supabase es excelente, me costó un poco entender cómo integrarla con Tauri, especialmente por el tema de la seguridad.

Las aplicaciones de escritorio corren en el cliente, lo que significa que cualquier información sensible, como las credenciales de la base de datos, se almacenan en un lugar accesible para cualquiera que tenga acceso al sistema. Según entiendo, a este tipo de aplicaciones se les puede hacer ingeniería inversa fácilmente, por lo que no es recomendable almacenar información sensible en el cliente. Por lo tanto, tuve que buscar una solución para proteger las credenciales de Supabase.

Aquí es donde no tuve más opción que preguntar en Discord. Después de preguntar, uno de los mantenedores de Tauri, llamado [Simon](https://tauri.by.simon.hyll.nu/), me recomendó utilizar un servidor intermedio para manejar las solicitudes a Supabase. De esta forma, las credenciales de Supabase se almacenan en el servidor, y no en el cliente. Aunque esta solución añade una capa adicional de complejidad, es la mejor opción para garantizar la seguridad de la aplicación, y obviamente, proteger mi bienestar mental.

Necesitaba escribir un *proxy* sencillo que se encargara de manejar las solicitudes a Supabase. Para ello, y basándome en que no quería pasar mucho tiempo en esto, decidí utilizar **[Hono](https://hono.dev/)**, un sencillo framework de aplicaciones web similar a Express, sin frontend, que se ejecuta en CDN Edges y permite construir aplicaciones más grandes cuando se combina con middleware.

Esto me permitiría crear este proxy de una forma sencilla y rápida, sin tener que preocuparme por la configuración de un servidor. Además, Hono es compatible con Cloudflare Workers, lo que significa que puedo ejecutar el proxy en la red de Cloudflare, garantizando una alta disponibilidad y rendimiento.

### OAuth2

Un gran desafío al cual me enfrenté fue la implementación de OAuth2 en Wrinix. Supabase ofrece autenticación mediante proveedores de terceros, como Google, GitHub, etc., lo que facilita la integración de la autenticación en la aplicación. Sin embargo, la documentación de Tauri específicamente para OAuth2 es escasa, por no decir nula.

Mi app **debe** tener autenticación, de ese modo, me permite poder sincronizar las notas si el usuario lo desea. ¿Pero como podría hacerlo? Bueno, luego de investigar, encontré dos cosas que me llamaron la atención:

- Existe un [repositorio](https://github.com/JeaneC/tauri-oauth-supabase) sobre como implementar OAuth2 de Supabase en Tauri junto con React. El único problema es que se utiliza [un plugin de Tauri](https://github.com/FabianLars/tauri-plugin-oauth) que esta en versión alpha, además de usar la versión v1 de Tauri (actualmente estoy utilizando la v2).
- El [plugin de DeepLink de Tauri](https://v2.tauri.app/plugin/deep-linking/), que permite abrir enlaces externos en el navegador predeterminado del sistema. Esto me permitiría abrir el enlace de autenticación de Supabase en el navegador, y luego redirigir al usuario de vuelta a la aplicación una vez que se haya autenticado. ¿El problema? Solo funciona en móviles.

En un inicio, probe con la segunda opción y falle miserablemente. Sorprendentemente funcionaba en Windows, pero no en Linux, y no tengo un Mac para probarlo. Por lo tanto, decidí probar con la primera opción, y para mi sorpresa, funcionó perfectamente. Aunque no me gusta depender de un plugin en alpha, es la única opción viable que tengo en este momento (además de que el plugin es de un mantenedor de Tauri).

La parte más complicada de OAuth es la redirección en una aplicación de escritorio. Una vez que un usuario termina de autorizarse en Google, ¿a dónde lo enlazamos? ¿Cómo sabemos que el usuario se autenticó correctamente? ¿Cómo obtenemos el token de acceso? Estas son preguntas que me hice y que tuve que responder.

- La aplicación tiene una vista oculta del navegador web que escuchamos los eventos. Por ejemplo `localhost:9999`.
- Cuando el usuario intenta hacer OAuth, inicializamos el proveedor de OAuth con una url de redirección a `localhost:9999`.
- Entonces abrimos el navegador principal del usuario para pedirle que se autentique con Github o Google.
- Una vez que el usuario se autentique en una plataforma externa, la redirección lo llevará a `localhost:9999` con un parámetro de consulta en él, por ejemplo `localhost:9999?code=abcd`
- Necesitamos ese código para terminar nuestro flujo de autorización PKCE con Supabase. Ya que estábamos escuchando este puerto, simplemente lo parseamos desde nuestro navegador oculto.

## Próximos Pasos

A medida que avanzo en el desarrollo de Wrinix, tengo varios objetivos y desafíos por delante. Algunos de los próximos pasos que planeo tomar son:

- Implementar la sincronización en la nube con Supabase.
- Añadir la posibilidad de encriptar las notas.
- Mejorar la interfaz de usuario y la experiencia del usuario.
- Añadir la posibilidad de exportar las notas en formatos comunes, como Markdown, HTML, PDF, etc.
- Añadir la posibilidad de personalizar la aplicación, como cambiar el tema, la fuente, etc.
- Que la aplicación no ocupe una cantidad excesiva de memoria y espacio en disco.
- Añadir la posibilidad de importar notas desde otras aplicaciones. (Esto es algo que me gustaría hacer, pero no sé si será posible).
- Añadir la posibilidad de compartir notas con otros usuarios.

Estos son solo algunos de los próximos pasos que planeo tomar. A medida que avance en el desarrollo de Wrinix, es probable que surjan nuevos desafíos y problemas, pero estoy emocionado por enfrentarlos y aprender de ellos.

## Conclusión

Wrinix es un proyecto ambicioso que me ha permitido aprender y mejorar mis habilidades en el desarrollo de aplicaciones de escritorio y web. Aunque todavía tengo mucho que aprender, estoy emocionado por el futuro de Wrinix y por las posibilidades que ofrece. Espero que este artículo haya sido útil y que te haya dado una idea de lo que espero lograr con Wrinix. Si tienes alguna pregunta o sugerencia, no dudes en dejar un comentario. ¡Gracias por leer!
