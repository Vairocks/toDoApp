After cloning git repo and moving into the directory
1.npm i
2.npm run dev

It will run the server that will serve web app at http>//localhost/3000/

And CRUD api routes at http>//localhost/3000/

The "todo-client" holds the react application. To modify it
1 cd todo-client
2 npm i
3 npm start

###Data Flow

The data flow is simple CRUD api callz from required components,
Being it a bit bigger, these calls could be tranformed into actions despatched to a common redux store for tasks.

Had the task been data intensive, we would have used typescript (my preference zod)

Had this SPA too large we would have opted for next.js due to it's SSR capabilities.

