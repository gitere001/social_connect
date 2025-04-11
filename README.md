# Social Connect

**Social Connect** is a modern and fully responsive social platform that allows users to register, login, create posts, interact with other users' posts, and much more. Built with **Prisma ORM**, **Express**, **Node.js**, **PostgreSQL**, **React**, **Tailwind CSS**, and deployed using **Vercel** and **DigitalOcean**. This application offers real-time updates for posts, with a sleek design and smooth user experience.

## Features

- **User Authentication**: Register and login with secure authentication.
- **Post Creation**: Create posts that are updated in real time.
- **Post Interaction**: Like posts, see your posts, and interact with other users’ posts.
- **Follow Users**: Follow other users to stay updated with their posts.
- **Live Feedback**: Receive immediate feedback for each action (login, register, post creation, etc.).
- **Responsive Design**: A beautifully responsive website built with **Tailwind CSS** and **React**.
- **Real-Time Updates**: Posts are updated in real-time using **PostgreSQL** and **Prisma ORM**.

## Live Demo

Check out the live demo of **Social Connect**:
[**Social Connect Live Demo**](https://social-connect-kohl.vercel.app)

## Technologies Used

- **Backend**:
  - **Node.js** & **Express**
  - **Prisma ORM**
  - **PostgreSQL** (hosted on **DigitalOcean**)
  - **Nginx** as the reverse proxy
  - **PM2** for process management
- **Frontend**:
  - **React** (with **Vite** for fast build)
  - **Tailwind CSS** for responsive and modern UI
- **Deployment**:
  - **Frontend**: Hosted on **Vercel**
  - **Backend**: Hosted on **DigitalOcean**
## Screenshots
![Register Page](/client/public/register.png)

### Login Page
![Login Page](/client/public/login.png)

### Desktop Home Page
![Desktop Home](/client/public/homeDesk.png)

### Mobile Home Page
![Mobile Home](/client/public/mobileconnec.png)

## Setup

To get this project running locally, follow these steps:

### Prerequisites

1. Install **Node.js** (with **npm**).
2. Install **PostgreSQL** and set up the database.
3. Install **Prisma CLI** globally:

```bash
npm install -g prisma
