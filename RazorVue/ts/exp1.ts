import { reactive } from "vue"

class Exp1 {

    state = reactive({
        title: "Vue Test Page",
        count: 0,
        newUserName: "",
        users: [
            { id: 1, name: "Anna" },
            { id: 2, name: "Tom" }
        ]
    })

    init() {
        // optional
    }

    increment() {
        this.state.count++
    }

    decrement() {
        this.state.count--
    }

    addUser() {
        if (!this.state.newUserName) return

        this.state.users.push({
            id: Date.now(),
            name: this.state.newUserName
        })

        this.state.newUserName = ""
    }

    removeUser(id: number) {
        this.state.users = this.state.users.filter(u => u.id !== id)
    }

    get userCount() {
        return this.state.users.length
    }
}

export const exp1 = new Exp1()