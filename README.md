# Employee Management System

A role-based employee management app built with React, Vite, Tailwind CSS, and Appwrite. The project separates admin and employee workflows, letting administrators create employees, assign tasks, review team activity, and remove tasks when needed. Employees can sign in, view their assigned work, and mark tasks as completed.

Live app: https://employee-management-system-sage-nine.vercel.app/

## Features

- Secure login through Appwrite authentication.
- Role-based dashboard handling for Admin and Employee users.
- Admin workflow to create employees and assign tasks.
- Employee workflow to review pending work and complete tasks.
- Task summary views with pending, completed, and total counts.
- Expandable task panels for team members and completed work.

## How It Works

The app reads the current Appwrite session on load and routes users based on the authenticated account name.

- If the logged-in user name is `Admin`, the admin dashboard is shown.
- Any other authenticated user is treated as an employee and sees the employee dashboard.
- If no session exists, the login screen is shown.

Admin and employee data are stored in Appwrite:

- Authentication uses Appwrite Account.
- Employee records are stored in one database collection.
- Tasks are stored in a separate tasks collection.
- Each task is linked to an employee through the assigned user id.


## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Appwrite
- React Icons

## Environment Variables

Create a `.env` file in the project root using the values from `env.sample`.

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_TABLE_ID=
VITE_APPWRITE_TASKS_COLLECTION_ID=
```

## Setup

1. Install dependencies.

```bash
npm install
```

2. Add your Appwrite values to `.env`.

3. Start the development server.

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - start the Vite development server.
- `npm run build` - create a production build.
- `npm run preview` - preview the production build locally.
- `npm run lint` - run ESLint across the project.

## Appwrite Integration

This project expects the following Appwrite setup:

- A project configured in Appwrite.
- A database for employee and task data.
- One collection for employee records.
- One collection for task records.
- The employee collection should include a `role` field with the value `employee` for team members created by the admin flow.

The employee creation flow first creates the Appwrite auth account, then stores the employee profile in the database with the generated user id.

## Deployment

The project is deployed on Vercel:

https://employee-management-system-sage-nine.vercel.app/
