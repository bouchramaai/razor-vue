import { createApp } from "vue"
import "devextreme/dist/css/dx.light.css"

import DxButton from "devextreme-vue/button"
import DxTextBox from "devextreme-vue/text-box"
import DxDataGrid, { DxColumn } from "devextreme-vue/data-grid"

const app = createApp({

    data() {
        return {

            newUserName: "",

            users: [
                { id: 1, name: "Anna" },
                { id: 2, name: "Tom" }
            ]

        }
    },

    methods: {

        addUser() {

            if (!this.newUserName) return

            const newUser = {
                id: Date.now(),
                name: this.newUserName
            }

            this.users = [...this.users, newUser]

            this.newUserName = ""

        }

    }

})

app.component("DxButton", DxButton)
app.component("DxTextBox", DxTextBox)
app.component("DxDataGrid", DxDataGrid)
app.component("DxColumn", DxColumn)

app.mount("#devextreme-app")