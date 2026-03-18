import { createApp, onMounted } from "vue"
import "devextreme/dist/css/dx.light.css"

import { exp1 } from "./ts/exp1"
import { devextrem1 } from "./ts/devextrem1"
import { devextrem2 } from "./ts/devextrem2"

createApp({

    setup() {

        onMounted(() => {
            exp1.init()
            devextrem1.init()
            devextrem2.init()
        })

        return {
            exp1,
            devextrem1,
            devextrem2
        }
    }

}).mount("#vue-root")