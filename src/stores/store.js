import { defineStore } from 'pinia'


export const useToggleStore = defineStore('toggler', {
    id: 'toggleNavbar',
    state: () => {
        return { toggle: false }
    },
    actions: {
        toggleNavbar() {
            this.toggle = !this.toggle
        },
        closeNavbar(){
            this.toggle = false
        }
    },
})