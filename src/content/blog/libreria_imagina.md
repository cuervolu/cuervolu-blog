---
title: Librería Imagina
author: Ángel Cuervo
description: La librería Imagina ofrece servicios de calidad en libros, pero enfrenta desafíos por retrasos y pérdidas frente a la competencia.
pubDatetime: 2024-04-10T19:02:34.129Z
draft: false
tags: ["Duoc"]
slug: libreria-imagina
---

![Librería Imagina](@assets/images/logo_libreria_imagina.png)

En el quinto semestre de mi carrera, tuve la asignatura de Integración de Plataformas, que trataba sobre crear un sistema que pudiera integrarse con otros sitemas, como una API Rest, SOAP, etc. En este caso, se nos entregó una problématica sobre una empresa llamada **Librería Imagina**.

## Table of contents

## Caso de Estudio

La Librería Imagina cuenta con una amplia trayectoria en la importación y comercialización, reparación y servicio técnico de mantenimiento de libros. Posee una amplia experiencia, adquirida durante años de ejercicio profesional, lo que le permite brindar un servicio de calidad, rápido y eficiente. Declara que su misión es transformarse en una librería con el más amplio catálogo de libros del territorio nacional, mientras que en su visión buscan convertirse en una institución de referencia en la venta de libros a nivel sudamericano, apostando a la innovación tecnológica para ello.

Actualmente el servicio que proveen a sus clientes es coordinado mediante llamadas telefónicas, solicitudes a través de su página WEB, pero sin permitir la venta, o con visitas a la sucursal que en la actualidad poseen, desde ese punto de partida los clientes pueden coordinar la compra de libros o de servicios de mantenimiento que ofrece la empresa con relación a estos. Los servicios dentro del ámbito de la venta y cuidado de libros que se ofrecen son:

- Asesoría en proyectos educativos
- Venta de todo tipo de libros
- Servicio de reparación
- Servicio de Mantención Preventiva y Correctiva

La empresa ha mantenido sus niveles de venta y reconocimiento en el mercado por el servicio de calidad que ofrecen, sin embargo, desde hace un año han venido experimentado algunas inestabilidades y perdidas en proyectos de amplia envergadura respecto de su competencia y si, además, agregamos el aumento en los reclamos por retrasados en las mantenciones, tenemos a un gerente general muy preocupado.

## Entregables

Para este proyecto, se nos pidió realizar un sistema que permitiera a la empresa Librería Imagina poder gestionar de mejor manera sus servicios.

En la primera entrega debíamos entregar toda la documentación necesaria para el desarrollo del proyecto, como el **Modelo Relacional**, los **Mock Ups**, el **Diagrama de Casos de Uso**, Secuencia y Despliegue, entre otros. Además de una Carta Gantt con las tareas a realizar y el tiempo que tomaría cada una. Todo esto debía explicarse en un documento llamado "Plan de Integración".

![Modelo Relacional](@assets/images/RelationalLibreria.png)

Para la segunda entrega, ya se nos pedía codificar el sistema, el cuál incluía:

- Una aplicación web tipo E-Commerce, que permitiera a los clientes comprar libros, además de registrar, visualizar sus compras y ver el estado de sus mantenciones.
- Una aplicación de escritorio que permitiera a los empleados de la empresa gestionar las mantenciones de los libros, además de registrar, visualizar y modificar los libros que se venden.
- Dos o más API Rest o SOAP que permitieran la comunicación entre las aplicaciones web y de escritorio.
- Una base de datos que almacenara toda la información necesaria para el correcto funcionamiento del sistema.

## Tecnologías Utilizadas

Se nos permitió utilizar cualquier tecnología que quisiéramos, siempre y cuando cumpliera con los requerimientos del proyecto. En este caso, mi grupo (compuesto de 4 personas) decidimos utilizar las siguientes tecnologías divididas en los siguientes entregables:

- Aplicación Web:
  - **Frontend y Backend**: Django
  - **Base de Datos**: Oracle
  - **API Rest**: Django Rest Framework
- Aplicación de Escritorio:
  - **Frontend**: WPF, siguiendo el patrón MVVM
  - **Backend**: Entity Framework Core con C#
- Servicios Web:
  - Para los servicios de pago, envio y mantenciones:
    - **SOAP**: Si mal no recuerdo, lo hicimos con algo llamado ASMX y WCF.
  - Para el servicio de Libros: - **API Rest**: Django Rest Framework
    Para evitar agregar libros manualmente, utilizamos la **API de Google Books** para obtener los libros y sus detalles.

Fue un trabajo arduo, puesto que teníamos poco tiempo para llevarlo a cabo, aún así logramos el cometido. Por desgracia no tuvimos la mayor nota posible en la última entrega.

Algo que si debo reconocer, es que fue un trabajo problemático, no teníamos conocimientos de experticia en cada una de las tecnologías que usábamos, más que nada nos dificultó porque estábamos aprendiendo mientras desarrollamos la app. Además no todos en el grupo nos llevábamos bien, así que hubo pleitos de vez en cuando.

Me di cuenta de varias cosas:

1. Odio a Oracle y a su motor de base de datos
2. Odio a Microsoft y a su Visual Studio 2022
3. Tengo un amor y odio a la creación de apps de escritorio con C#
4. C# no es para weones (solo algunos entenderán)

La verdad, si pudiera volver a hacer el proyecto, escogería mejor a mi grupo. Además de que utilizaría otras tecnologías. Por ejemplo, me di cuenta que existe un framework de C# para aplicaciones de escritorio multiplataformas llamado Avalonia UI, que es muy similar a WPF, con la diferencia de que es multiplataforma y es mucho mas amigable. También supe que con la licencia de estudiantes podía usar los productos de JetBrains y alejarme de Visual Studio 2022 e irme a Rider.

Pero bueno… a final de cuentas ya no importa. Estoy 100% seguro de que nuestro trabajo era el mejor de todos. ¿Por qué? Porque tengo el ego alto y además vi el trabajo de los demás… y no es por ofender pero… el nuestro era el mejor.
