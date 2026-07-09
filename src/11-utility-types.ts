interface Todo {
    title: string
    description?: string
    completed?: boolean
    createdAt: Date
    assignedTo: string
}

// Partial - makes all properties optional
type PartialTodo = Partial<Todo>
let updateTodo: PartialTodo = {
    completed: true
}

// Required - makes all properties required
type RequiredTodo = Required<Todo>


// ReadOnly - makes all properties readOnly
type ReadOnlyTodo = Readonly<Todo>
let myTodo: Todo = {
    title: "Typescript",
    description: "JS",
    completed: false,
    createdAt: new Date(),
    assignedTo: "Shiva"
}
// myTodo.completed = true

// Pick - pick specific properties
type TodoPreview = Pick<Todo, "title" | "completed">

// Omit - omit specific properties
type TodoWithoutDate = Omit<Todo, "createdAt">

// Record - construct object type with specific keys & value type
type PageInfo = {
    title: string
    url: string
}

type pages = "home" | "about" | "contact"

type Merged = Record<pages, PageInfo>

let pages: Merged = {
    home: {
        title: "Home",
        url: "/"
    },
    about: {
        title: "About",
        url: "/about"
    },
    contact: {
        title: "Contact",
        url: "/contact"
    }
}

// ReturnType - get return type of function
function createUser() {
    return {
        id: 1,
        name: "Shiva",
        email: "shiva@gmail.com"
    }
}

type UserType = ReturnType<typeof createUser>