import { createApp } from "vue"

type User = {
    id: number
    name: string
}

createApp({

    data() {
        return {

            title: "Vue Test Page",
            count: 0,

            newUserName: "",

            users: [
                { id: 1, name: "Anna" },
                { id: 2, name: "Tom" }
            ] as User[]

        }
    },

    computed: {

        userCount(): number {
            return this.users.length
        }

    },

    methods: {

        increment() {
            this.count++
        },

        decrement() {
            this.count--
        },

        addUser() {

            if (!this.newUserName) return

            const newUser: User = {
                id: Date.now(),
                name: this.newUserName
            }

            this.users.push(newUser)

            this.newUserName = ""

        },

        removeUser(id: number) {

            const result: User[] = []

            for (let i = 0; i < this.users.length; i++) {

                const u = this.users[i]

                if (u.id !== id) {
                    result.push(u)
                }

            }

            this.users = result

        }
    }

}).mount("#exp1-app")