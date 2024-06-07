---
title: "Batallando con Rust: Parte II"
description: "Implementando un juego de ahorcado en Rust"
date: "2024-04-20"
---

---

![Rust](https://rustacean.net/more-crabby-things/rustdocs.png)
Hace unos días me propuse aprender Rust, un lenguaje de programación que ha estado en mi radar desde hace un tiempo. Y hoy, luego de jugar un poco Undertale y de leer un poco de Rust, me siento para crear mi primer programa en Rust.

Decidí recrear un programa que hice en Python llamado "Ahorcado" o "Hangman" en inglés. El programa es bastante simple, el usuario tiene que adivinar una palabra y tiene un número limitado de intentos. Si el usuario adivina la palabra antes de que se le acaben los intentos, gana. Si no, pierde y muere (en el juego, claro).

## Creando el proyecto

En mi caso, como tengo licencia de estudiante en JetBrains, utilizó Rust Rover, un IDE de Rust que me permite programar en Rust de manera más sencilla. Para crear un nuevo proyecto, simplemente hago clic en "New Project" y selecciono "Rust" en la lista de lenguajes. El nombre del proyecto será "hangman".

Por debajo, el IDE solo ejecuta el comando `cargo new hangman` en la terminal. La estructura de directorios del proyecto es la siguiente:

```shell
.
├── Cargo.lock
├── Cargo.toml
├── src
│   └── main.rs
└── target
    ├── CACHEDIR.TAG
    └── debug
        ├── build
        ├── deps
        ├── examples
        ├── hangman
        ├── hangman.d
        └── incremental
```

## Leyendo una palabra al azar

En Python, lo que realizaba era extremadamente sencillo. Simplemente tenía una lista de palabras y seleccionaba una al azar de la siguiente manera:

```python
from random import choice


def run_game():
    word: str = choice(['apple', 'secret', 'banana'])
```

En Rust, la cosa es un poco más complicada. Primero, necesito importar la librería `rand` en mi archivo `main.rs`. Luego, puedo utilizar el método `choose` para seleccionar una palabra al azar de una lista de palabras. O al menos eso entendí.

```rust
use rand::prelude::IndexedRandom;
use rand::thread_rng;

fn main() {
    run_game()
}


fn run_game() {
    let words = vec!["apple", "secret", "banana"];
    println!("{:?}", words.choose(&mut thread_rng()).unwrap());
}
```

Para probar si esta mierda funcionaba, simplemente ejecuté el programa con `cargo run` y obtuve el siguiente resultado:

```shell
/usr/bin/cargo run --color=always --package hangman --bin hangman
    Finished dev [unoptimized + debuginfo] target(s) in 0.00s
     Running `target/debug/hangman`
"apple"
```

## Saludando al usuario

Ahora que tengo una palabra al azar, necesito saludar al usuario (porque soy un programador educado). En Python, simplemente imprimía un mensaje de bienvenida.

```python
  username: str = input("What is your name? >> ")
  print(f"Welcome to hangman, {username}")
```

En Rust, la cosa es un poco más complicada. Primero, necesito importar la librería `io` para poder leer la entrada del usuario. Luego, utilizo el método `read_line` para leer la entrada del usuario y el método `trim` para eliminar los espacios en blanco.

```rust
//Get username
print!("What is your name? >> ");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut username).expect("Failed to read line");

println!("Welcome to hangman, {}", username.trim());
```

## While loop

En Python utilizaba un bucle `while` para que el usuario pudiera adivinar la palabra hasta que se le acabaran los intentos.

```python
# Setup
    guessed: str = ''
    tries: int = 3

    while tries > 0:
        blanks: int = 0

        print("Word: ", end="")
        for char in word:
            if char in guessed:
                print(char, end="")
            else:
                print("_", end='')
                blanks += 1
        print()  # Adds a blank line
```

Mientras intentaba implementar esta cagada en Rust, me encontré con un error un tanto curioso.
![Error en Bucle](@assets/while_loop_fail.gif)

¿Qué carajos paso? ¿Por qué la terminal se bugeo de ese modo?

```rust
let mut guessed: Vec<char> = Vec::new();
let mut tries = 3;

while tries > 0 {
        let mut blanks = 0;

        print!("Word: ");
        for char in word.chars() {
            if guessed.contains(&char) {
                print!("{} ", char);
            } else {
                print!("_ ");
                blanks += 1;
            }
        }
        println!();
}
```

Porque no puse un break en el bucle, por eso se bugeo. (XD).

En caso que el usuario logre adivinar la palabra, simplemente imprimo un mensaje de victoria.

Eso sí, en Python había un bug de que si el usuario ingresaba `abcdefjhijkl` como palabra, el programa le decía que había ganado puesto que hizo técnicamente un speedrun de la palabra. Para solucionar esto, simplemente agregué un condicional que verificaba si la cantidad de espacios en blanco era igual a 0.

```python
  if blanks == 0:
    print("You got it!")
    break

  guess: str = input("Guess a letter: ")

  if len(guess) != 1:
      print("Don't cheat! Enter only one letter.")
      continue
```

Finalmente solo agregue unas cuantas líneas de código para que el programa funcione correctamente.

```python
if guess in guessed:
    print(f"You already guessed '{guess}'. Please try with another letter.")

guessed += guess

if guess not in word:
  tries -= 1
  print(f"Wrong! You have {tries} tries left.")

if tries == 0:
  print("You lost!")
  break
```

El código completo de Python es el siguiente:

```python
from random import choice


def run_game():
    word: str = choice(['apple', 'secret', 'banana'])

    username: str = input("What is your name? >> ")
    print(f"Welcome to hangman, {username}")

    # Setup
    guessed: str = ''
    tries: int = 3

    while tries > 0:
        blanks: int = 0

        print("Word: ", end="")
        for char in word:
            if char in guessed:
                print(char, end="")
            else:
                print("_", end='')
                blanks += 1
        print()  # Adds a blank line

        if blanks == 0:
            print("You got it!")
            break

        guess: str = input("Guess a letter: ")

        if len(guess) != 1:
            print("Don't cheat! Enter only one letter.")
            continue

        if guess in guessed:
            print(f"You already guessed '{guess}'. Please try with another letter.")
        guessed += guess

        if guess not in word:
            tries -= 1
            print(f"Wrong! You have {tries} tries left.")

            if tries == 0:
                print("You lost!")
                break


if __name__ == '__main__':
    run_game()
```

Volviendo a Rust, me costó más entender como implementar esta cagada, dado que se necesitan el doble de pasos para hacer lo mismo que en Python. Pero al final, logré hacerlo.

```rust
use std::io;
use std::io::Write;
use rand::prelude::IndexedRandom;
use rand::thread_rng;

fn main() {
    run_game()
}

fn run_game() {
    let words = vec!["apple", "secret", "banana"];
    let word = words.choose(&mut thread_rng()).unwrap();

    let mut username = String::new();

    print!("What is your name? >> ");
    io::stdout().flush().unwrap();
    io::stdin().read_line(&mut username).expect("Failed to read line");

    println!("Welcome to hangman, {}", username.trim());

    let mut guessed: Vec<char> = Vec::new();
    let mut tries = 3;

    while tries > 0 {
        let mut blanks = 0;

        print!("Word: ");
        for char in word.chars() {
            if guessed.contains(&char) {
                print!("{} ", char);
            } else {
                print!("_ ");
                blanks += 1;
            }
        }
        println!();

        if blanks == 0 {
            println!("You got it!");
            break;
        }

        let mut guess = String::new();
        println!("Guess a letter: ");
        io::stdin().read_line(&mut guess).expect("Failed to read line");

        let guess = guess.trim().chars().next().unwrap_or('\0');

        if guess == '\0' {
            println!("Invalid input. Please enter a single letter.");
            continue;
        }

        if guessed.contains(&guess) {
            println!("You already guessed '{}'. Please try with another letter.", guess);
            continue;
        }
        guessed.push(guess);

        if !word.contains(guess) {
            tries -= 1;
            println!("Wrong! You have {} tries left.", tries);
        }

        if tries == 0 {
            println!("You lost! The word was '{}'", word);
        }
    }
}
```

1. Usamos `io::stdin().read_line(&mut guess)` para leer la entrada del usuario en una cadena.
2. Recortamos la cadena de entrada utilizando guess `.trim()` para eliminar cualquier carácter de espacio en blanco inicial o final.
3. Extraemos el primer carácter de la cadena recortada utilizando `guess`.`trim().chars().next().unwrap_or('\0')`. Si la entrada está vacía, se asigna "\0" (carácter nulo) a `guess`.
4. Comprobamos si guess es '\0 ' e imprimimos un mensaje de error si lo es, ya que es una entrada no válida.

## Conclusión

Aunque Rust es un lenguaje de programación más complicado que Python, me siento satisfecho de haber logrado recrear mi programa de "Ahorcado" en Rust. Aunque es cierto que el código en Rust es más largo y más complicado que en Python. Encuentro que debo seguir aprendiendo porque aun sigo leyendo el código y no entiendo algunas cosas. Pero bueno, es parte del proceso de aprendizaje.
