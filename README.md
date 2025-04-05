This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# Creating the project

```bash
npx create-next-app@latest
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
/* This project uses npm to run the development server */

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Inside the app project folder install Apollo Client and Graphql:

```bash
npm install @apollo/client graphql
```

# Finished Tasks

- Set Up Apollo Client
- Create Fetch Function w/ Grapql
- Render Initial Data/Character List
- Install And.Design UI Library
```bash
npm install antd
```
- Fix Components to .tsx Format
- Add Navigational Bar w/ Filters
- Implement Filters
- Add Grid System on Character Layout
- Add Card Component on Character Info

//fix
- Task: Render Initial Data/Character List [FIX: Now renders characters in map through id from query, no more duplicate character when rendering through name ]
- Task: Implement Filters [FIX: Now uses filter argument through query]