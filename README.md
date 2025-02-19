# Challenge Técnico Frontend - Frávega Tech

## Objetivo

Crear una aplicación web con NextJS (page router), que permita buscar, listar usuarios de GitHub, marcarlos como favoritos y mostrar detalles de un usuario seleccionado utilizando la API de GitHub Users.

## Requisitos

- **Home (usar csr)**

  - Obtén una lista inicial de usuarios de la API de GitHub Users.
  - Mostrar los usuarios en una lista con sus nombres y avatares.
  - Implementar un buscador que permita filtrar los usuarios haciendo peticiones a la API por nombre.
  - Cada usuario debe tener un enlace a una página de detalle.
  - Poder poner como favorito los usuarios (sin necesidad de persistir)

- **Página de Detalle del Usuario (usar ssr)**

  - Mostrar los detalles de un usuario específico cuando se hace clic en él desde la página de listado (nombre, avatar, bio, repositorios, etc.).
  - Mostrar si es favorito y permitir agregar o eliminarlo

- **Estilo**

  - Podes usar CSS puro, styled-components o una librería de componentes como Material-UI para el estilo.

## API

- https://api.github.com/users
- https://api.github.com/search/users?q={term}
- https://api.github.com/users/{username}

## Next

Este es un proyecto de [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Empezando

Instalar y correr el servidor:

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

## Tareas

- ~~`/` (CSR):~~
  - ~~Buscador para filtrar por nombre de usuario~~
  - ~~Tabla con: nombre y avatar~~
    - ~~Link del usuario a `/detail/:user`~~
    - ~~Botón para agregar como favorito al usuario~~
- `/detail/:user` (SSR):
  - Mostrar los detalles del usuario: nombre, avatar, bio, repositorio, etc (?)
  - Botón para mostrar y agregar como favorito al usuario
