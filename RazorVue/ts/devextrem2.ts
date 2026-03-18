import { reactive } from "vue"

type User = {
    id: number
    name: string
    email: string
}

class Devextrem2 {

    state = reactive({
        users: [
            { id: 1, name: "Anna", email: "anna@test.com" },
            { id: 2, name: "Tom", email: "tom@test.com" }
        ] as User[],

        popupVisible: false,

        currentUser: {
            id: 0,
            name: "",
            email: ""
        } as User,

        isEdit: false
    })

    init() { }

    openAddPopup() {
        this.state.isEdit = false
        this.state.currentUser = { id: 0, name: "", email: "" }
        this.state.popupVisible = true
    }

    editUser(e: any) {
        this.state.isEdit = true
        this.state.currentUser = { ...e.row.data }
        this.state.popupVisible = true
    }

    deleteUser(e: any) {
        const id = e.row.data.id
        this.state.users = this.state.users.filter(u => u.id !== id)
    }

    saveUser() {
        if (this.state.isEdit) {

            const index = this.state.users.findIndex(u => u.id === this.state.currentUser.id)

            if (index !== -1) {
                this.state.users[index] = { ...this.state.currentUser }
            }

        } else {

            this.state.currentUser.id = Date.now()
            this.state.users.push({ ...this.state.currentUser })

        }

        this.state.popupVisible = false
    }

    closePopup() {
        this.state.popupVisible = false
    }
}

export const devextrem2 = new Devextrem2()