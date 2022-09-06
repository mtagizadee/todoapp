# Description
    That's a simple todoapp. The current project is the front-end for
    this idea.

#Technologies used
    1. Main framework --> ReactJS
    2. Redux  + RTK Query
    3. Tailwindcss

#How to run the project
    1. Clone the git repo
    2. run npm install command
    3. run npm start

# Types
    todo - {
        id: number
        title: string
        description: string || null
        completed: boolean
        userId: number
    }
    user - {
        id: number
        firstName: string
        secondName: string
        email: string
    }