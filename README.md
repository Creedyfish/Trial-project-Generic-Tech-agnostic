# Next.js Recipe Management Project - Frontend Trial

This repository contains code for a trial project exploring recipe management functionalities built using the Next.js framework. This project focuses on the frontend aspects of adding, viewing, and managing recipes.

## Installation

Clone and Install my-project with npm

```bash
  git clone https://github.com/Creedyfish/Trial-project-Generic-Tech-agnostic.git
  cd my-project
  npm install
```

## Deployment

First, run the development server:

```bash
  npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Demo

https://trial-project-generic-tech-agnostic.vercel.app/

## Tech Stack

**Client:** Reactjs, Nextjs

**Server:** Nodejs, Nextjs

**Styling:** TailwindCSS

**Deployment Platform:** Vercel

## API Reference

#### POST Login

```http
  POST /api/auth/login
```

#### POST SignUp

```http
  POST /api/auth/signup
```

#### Get all Recipes

```http
  GET /api/
```

#### Get Recipe

```http
  GET /api/recipes/${data}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `data`    | `string` | **Required**. Name of item to fetch |

```http
  DELETE /api/recipes/${data}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `data`    | `string` | **Required**. Name of item to Delete |

```http
  POST /api/recipes
```

| Request | Type     | Description                      |
| :------ | :------- | :------------------------------- |
| `data`  | `string` | **Required**. Data to Add Recipe |
