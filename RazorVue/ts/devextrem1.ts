import { reactive } from "vue"

class Devextrem1 {

    state = reactive({
        newUserName: "",
        users: [
            { id: 1, name: "Anna" },
            { id: 2, name: "Tom" }
        ]
    })

    init() { }

    addUser() {
        if (!this.state.newUserName) return

        this.state.users.push({
            id: Date.now(),
            name: this.state.newUserName
        })

        this.state.newUserName = ""
    }
}

export const devextrem1 = new Devextrem1()