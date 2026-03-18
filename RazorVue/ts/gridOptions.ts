import dxDataGrid from "devextreme/ui/data_grid"
import "devextreme/dist/css/dx.light.css"

type User = {
    id: number
    name: string
    email: string
}

const users: User[] = [
    { id: 1, name: "Anna", email: "anna@test.com" },
    { id: 2, name: "Tom", email: "tom@test.com" }
]

// 🔥 GRID DIREKT ERZEUGEN (wie applyGridOptions)
new dxDataGrid(document.getElementById("grid")!, {
    dataSource: users,
    keyExpr: "id",
    showBorders: true,
    columnAutoWidth: true,

    columns: [
        { dataField: "id", caption: "ID", width: 80 },
        { dataField: "name", caption: "Name" },
        { dataField: "email", caption: "Email" },

        // 🔥 DAS IST GENAU WIE IN DEINEM ORIGINAL
        {
            type: "buttons",
            buttons: [
                {
                    icon: "edit",
                    onClick: (e: any) => {
                        console.log("edit", e.row.data)
                        console.log("du hast mich gecklick1");
                    }
                },
                {
                    icon: "trash",
                    onClick: (e: any) => {
                        const id = e.row.data.id
                        const index = users.findIndex(u => u.id === id)
                        console.log("du hast mich gecklick2");

                        if (index !== -1) {
                            users.splice(index, 1)
                        }
                    }
                }
            ]
        }
    ],

    // 🔥 Toolbar wie dein Beispiel
    onToolbarPreparing: (e: any) => {
        e.toolbarOptions.items.unshift({
            widget: "dxButton",
            options: {
                text: "Reload",
                icon: "refresh",
                onClick: () => {
                    console.log("reload")
                }
            },
            location: "after"
        })
    }
})