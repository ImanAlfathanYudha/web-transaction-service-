This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, install depedencies:
```bash
# Install dependencies
yarn install
```
then, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To access the project, you can access [http://localhost:3000/transaction](http://localhost:3000/transaction) on your browser.

You can access the csv on [csv folder](https://github.com/ImanAlfathanYudha/web-transaction-service-/tree/main/src/csv).

## 🏗️ Architecture Decisions
### 1.Tech Stack Choices
Next.js + TypeScript: chosen for type safety, strong developer experience, and built-in optimizations for production.
Pure CSS Modules: aligns with the test requirements (“no Tailwind or UI libraries”) while keeping styles isolated per component.

### 2. Folder Structure
```bash
src/
 ├── components/        # Reusable UI components
 ├── modules/           # Components for each page or business unit
 │    └── transaction/  # Components related to transaction features
 ├── pages/             # Next.js pages (entry points)
 ├── types/             # Shared TypeScript interfaces
 ├── actions/           # API interaction layer
 └── styles/            # Global CSS if needed
```
#### Separation of Concerns:
- actions: handles data fetching & uploads (API layer).
- components: handles Reusable UI components.
- modules: handles rendering & specific UI logic
- types: defines data contracts (interface) shared across layers.

### 3. Error handling
All API calls catch and display understandable messages (e.g., invalid csv format, wrong extension, invalid variable, etc).
Frontend surfaces errors through simple alert states or toast notifications.

#### Notes:
- The app avoids unnecessary complexity (like reducers or global state) since the data flow is one-directional:
Upload → Backend processes → Frontend displays results.

#### 🧩 Future Improvements
- Add unit tests for components and API layers.
- Improve error message and UI with visual feedback.

