---
title: "Batallando con Rust: Parte I"
description: "Iniciando mi viaje con Rust, desde los primeros pasos hasta la maestría en este emocionante lenguaje de programación."
date: "2024-04-17"
---

---

![Mascota de Rust](@assets/cuddlyferris.svg)

## Introducción

Hace unos días decidí que era hora de ponerme a mi mismo una meta con dolores de cabeza y mucho café, que seria aprender nuevos lenguajes de programación. Para estar preparado para la guerra, me hice una lista con los que llamaron mi atención

- Gleam
- Zig
- Rust
- C
- C++

La idea es aprender un nuevo lenguaje que me ayude a ver las cosas desde una perspectiva diferente, y que me ayude a mejorar como programador. No busco específicamente aprender un lenguaje para buscar trabajo, sino para aprender, mejorar y por sobretodo, **divertirme**.

El primer lenguaje que elegí de la lista fue Rust, un lenguaje que me ha llamado la atención desde hace bastante tiempo. Pero debo admitir que aprender estos lenguajes que son más de bajo nivel, me da un poco de miedo, ya que no tengo mucha experiencia con ellos.

Normalmente programó en Typescript, Java, Python y C#, lenguajes que son de un nivel más alto y que no me dan tantos dolores de cabeza como los lenguajes de bajo nivel. O que no tienen una sintaxis tan complicada como C++.

Aún así, una de mis motivaciones principales para aprender un lenguaje de nivel más bajo es para poder crear mi propio lenguaje de programación, algo que siempre he querido hacer, pero que nunca he tenido la oportunidad de hacer.

A simple vista, Rust pareciera ser mucho más amigable que C++ (en mi opinión cualquier cosa se ve mucho más amigable que ese lenguaje), así que decidí empezar con el lenguaje del cangrejo para poder darme una idea de con que me enfrentó.

## ¿Qué es Rust?

![Rust meme](@assets/lai6xuz2n6ia1.png)

Según este post de [MIT Technology Review](https://www.technologyreview.es/s/15106/breve-historia-de-rust-el-lenguaje-de-programacion-que-ha-destronado-c), Rust fue creado por Graydon Hoare, un programador informático de 29 años que trabajaba para Mozilla. En el año 2006, al volver a su apartamento de Vancouver, descubrió que el ascensor no funcionaba. El software de los ascensores suele estar escrito en lenguajes como C++ o C. **El problema es que esos lenguajes también facilitan la introducción accidental de fallos de memoria**, es decir, errores que provocan bloqueos.

Por lo tanto, Hoare decidió crear un lenguaje de programación que fuera seguro y rápido, y que no permitiera que los programadores cometieran errores de memoria. Así nació Rust, un lenguaje de programación que se ha convertido en uno de los más populares en la actualidad.

Rust es muy útil para distintos tipos de programas, entre ellos herramientas de CLI, WebAssembly, Redes, dispositivos embebidos, entre otros. Su código fuente se encuentra en [Github](https://github.com/rust-lang/rust) y al parecer cuenta con una comunidad bastante activa (a mi parecer parece un culto, pero eso es solo mi opinión).

## Primeros pasos

Hay dos formas de usar Rust:

1. Instalándolo en tu sistema operativo
2. Usando [Rust Playground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021)

Yo honestamente prefiero instalarlo en mi sistema y ya está, pero si no quieres instalarlo, puedes usar el Playground.
Para hacer esto, puedes seguir la guía de instalación en la [página oficial de Rust](https://www.rust-lang.org/es/learn/get-started). Según tengo entendido, lenguajes como Rust suelen funcionar mejor en cualquier sistema que no sea Windows (que sorpresa).

Rust viene con un chingo de herramientas, entre ellas:

1. `rustc`: El compilador de Rust
2. `cargo`: El gestor de paquetes y build system de Rust
3. `rustup`: El gestor de versiones de Rust

Para verificar que Rust se instaló correctamente, puedes correr el siguiente comando:

```bash
cargo --version
```

### Algo que ya me gusta de Rust

Uno de los problemas más grandes que he encontrado en otros lenguajes como Python o Typescript, es que el ecosistema de paquetes y dependencias es una mierda. En Python tienes `pip`, pero también tienes `conda` o `poetry`, en Typescript tienes `npm`, `pnpm`, `bun` o `yarn`, pero luego tienes que lidiar con `webpack` o `vite`. En Rust, todo eso se simplifica con `cargo`, que es el gestor de paquetes y build system de Rust. Incluso viene con su propio formateado de código llamado `Rustfmt`, no como en Python que tienes que usar `black` o en Typescript que tienes que usar `prettier`, pero también tienes que configurar `eslint` y `tslint`, o más fácil, usar `biome`.

Todo el mundo suele centrarse en UX/UI, pero nadie se preocupa por la DX (Developer Experience), y Rust parece que se preocupa por eso. Así que ya le doy mi aprobación.

Para aprender este lenguaje, todo el mundo recomienda el gran y todo poderoso [The Book](https://doc.rust-lang.org/book/), el cual es la guía oficial de Rust. También hay otros recursos como [Rust by Example](https://doc.rust-lang.org/rust-by-example/), [Rustlings](https://github.com/rust-lang/rustlings) y [Exercism](https://exercism.io/tracks/rust/exercises). También existe una [versión interactiva del libro](https://rust-book.cs.brown.edu/).

En mi caso, **usaré The Book, Exercism y Rustlings para aprender Rust.** Debo admitir que me siento un poco abrumado con la cantidad de cosas que hay que aprender, pero estoy emocionado por aprender algo nuevo. También admito que aprendó rápido, pero me cuesta recordar las cosas, así que probablemente me tome un tiempo aprender este lenguaje.

Mi forma de aprender es simple, leo documentación, veo vídeos y hago proyectos. Por ende el primer proyecto que haré será crear un simple CLI que me permita hacer cosas básicas. También planeo hacer un proyecto más grande, pero eso será en el futuro cuando sepa como carajos se hace algo en Rust.

## Leyendo The Book

La primera parte de The Book es una introducción a Rust, donde se explica un poco de la historia del lenguaje, sus características y por qué deberías aprenderlo. También se explica como instalar Rust en tu sistema operativo, y como usar `cargo` para crear un nuevo proyecto.

Una cosa a notar es que el libro menciona:

> Este libro asume que has escrito código en otro lenguaje de programación, pero no hace ninguna suposición sobre cuál. Hemos intentado que el material sea ampliamente accesible para personas con una amplia variedad de conocimientos de programación. No dedicamos mucho tiempo a explicar qué es la programación o cómo pensar en ella. Si eres completamente nuevo en la programación, te vendrá mejor leer un libro que proporcione específicamente una introducción a la programación.

Así que si eres completamente nuevo en la programación, te recomiendo que leas un libro de introducción a la programación antes de leer The Book.

Lo bueno se viene en el segundo capítulo, donde se explica como crear un juego de adivinanzas en Rust. En este capítulo se explican conceptos como `let`, `match`, métodos, funciones asociadas, crates externos, y más. Como soy rebelde, decidí no hacer el juego de adivinanzas y saltar directamente al tercer capítulo, donde se explica conceptos de programación en Rust.

### Variables y mutabilidad

Por defecto, las variables son inmutables en Rust. Este es uno de los muchos empujones que Rust te da para escribir tu código de una manera que aproveche la seguridad y la fácil concurrencia que ofrece. Sin embargo, aún tienes la opción de hacer tus variables mutables.

El compilador de Rust garantiza que cuando afirmas que un valor no va a cambiar, realmente no va a cambiar, por lo que no tienes que hacer un seguimiento del mismo. Tu código es más fácil de razonar. Pero la mutabilidad puede ser muy útil, y puede hacer que el código sea más cómodo de escribir. Aunque las variables son inmutables por defecto, puedes hacerlas mutables añadiendo `mut` delante del nombre de la variable.

```rust
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```

Al correr el programa obtenemos:

```shell
$ cargo run
   Compiling variables v0.1.0 (file:///projects/variables)
    Finished dev [unoptimized + debuginfo] target(s) in 0.30s
     Running `target/debug/variables`
The value of x is: 5
The value of x is: 6
```

Se nos permite cambiar el valor ligado a `x` de `5` a `6` cuando se usa `mut`. En última instancia, decidir si utilizar la mutabilidad o no depende de ti y de lo que te parezca más claro en esa situación concreta.

Algo que admito que me confunde es la diferencia entre Constantes y variables inmutables. En Rust, como se menciono anteriormente, las variables son inmutables por defecto, pero puedes hacerlas mutables añadiendo `mut` delante del nombre de la variable. Las constantes, por otro lado, son siempre inmutables sin importar que intentes. Las constantes se declaran con la palabra clave `const` y el tipo de la variable debe ser anotado.

```rust
const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
```

La convención de nomenclatura de Rust para las constantes es utilizar todas las mayúsculas con guiones bajos entre las palabras. El compilador es capaz de evaluar un conjunto limitado de operaciones en tiempo de compilación, lo que nos permite elegir escribir este valor de una manera que sea más fácil de entender y verificar, en lugar de establecer esta constante con el valor 10.800.

### Shadowing

Este concepto es interesante, pero desde mi punto de vista, es un poco confuso. Puedes declarar una nueva variable con el mismo nombre que una variable anterior. La primera variable es _sombreada_ por la segunda, lo que significa que la segunda variable es lo que el compilador verá cuando uses el nombre de la variable. Podemos hacer sombra a una variable utilizando el mismo nombre de variable y repitiendo el uso de la palabra clave let como sigue:

```rust
  fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    }

    println!("The value of x is: {x}");
}
```

Este programa primero vincula `x` a un valor de `5`. Luego crea una nueva variable `x` repitiendo `let x =`, tomando el valor original y añadiendo `1` para que el valor de `x` sea entonces `6`. A continuación, dentro de un ámbito interno creado con las llaves, la tercera sentencia `let` también sombrea `x` y crea una nueva variable, multiplicando el valor anterior por `2` para dar a `x` un valor de `12`. Cuando ese ámbito termina, el programa vuelve al ámbito interno. Cuando ese ámbito termina, la sombra interna termina y `x` vuelve a ser `6`. Cuando ejecutemos este programa, mostrará lo siguiente:

```shell
$ cargo run
   Compiling variables v0.1.0 (file:///projects/variables)
    Finished dev [unoptimized + debuginfo] target(s) in 0.31s
     Running `target/debug/variables`
The value of x in the inner scope is: 12
The value of x is: 6
```

¿Por qué alguien querría hacer esto? Bueno, una razón es que podemos cambiar el tipo de la variable, pero mantener el mismo nombre. Por ejemplo, digamos que queremos cambiar el tipo de una variable de `u32` a `i32`. Podemos hacer esto con sombreado, en lugar de crear una nueva variable con un nombre diferente.

### Tipos de datos

Esto es curioso, en Rust hay un montón de tipos de datos, tales que hasta se hacen memes acerca de ello:
![Rust Types](@assets/jsh156txovp91.webp)
Ten en cuenta que Rust es un lenguaje _estáticamente tipado_, lo que significa que debe conocer los tipos de todas las variables en tiempo de compilación. El compilador normalmente puede inferir qué tipo queremos usar basándose en el valor y en cómo lo usamos.

Los tipos de datos que hay son:

- Scalar Types: Un tipo escalar representa un único valor. Rust tiene cuatro tipos escalares primarios: enteros, números de punto flotante, booleanos y caracteres.
- Integers: Un número entero es un número sin componente fraccionario. Cada variante puede ser con o sin signo y tiene un tamaño explícito. Con signo y sin signo se refieren a si es posible que el número sea negativo, es decir, si el número debe ir acompañado de un signo (con signo) o si sólo será positivo y, por tanto, puede representarse sin signo (sin signo).
- Floating-Point Numbers
- Booleans
- Characters

| Largo   | Signed  | Unsigned |
| ------- | ------- | -------- |
| 8-bit   | `i8`    | `u8`     |
| 16-bit  | `i16`   | `u16`    |
| 32-bit  | `i32`   | `u32`    |
| 64-bit  | `i64`   | `u64`    |
| 128-bit | `i128`  | `u128`   |
| arch    | `isize` | `usize`  |

| Literales numéricos | Ejemplo       |
| ------------------- | ------------- |
| Decimal             | `98_222`      |
| Hex                 | `0xff`        |
| Octal               | `0o77`        |
| Binary              | `0b1111_0000` |
| Byte (`u8` only)    | `b'A'`        |

Pero vaya que hay muchos tipos de datos en Rust, y eso que no hemos hablado de los tipos compuestos. Pero eso será en la próxima parte de esta serie porque me da paja seguir leyendo The Book.

## Conclusión

Con lo que he leído, puedo decir que Rust es un lenguaje muy interesante, pero también muy complicado. Aunque me gusta la idea de tener un lenguaje que sea seguro y rápido, también me da miedo tener que lidiar con cosas como _ownership_, _borrowing_ y _lifetimes_. Pero bueno, todo es cuestión de práctica y de leer mucho.

El primero proyecto que haré con respecto a Rust será un simple CLI que me permita hacer cosas básicas, en este caso me tienta la idea de recrear un programa que ya he creado. Cuando estaba inscrito en Hyperskill, hice un programa que era en esencia un gestor de versiones, como Git, pero más simple. Así que probablemente haga eso. Si no, podría ser un típico TODO CLI, pero eso ya es muy cliché, aunque es un buen ejercicio para aprender un lenguaje.

En fin, espero que esta serie de posts les sea de ayuda si están aprendiendo Rust, o si quieren aprender Rust. Si tienen algún consejo o recomendación, no duden en decírmelo. Nos vemos en la próxima parte de esta serie.
