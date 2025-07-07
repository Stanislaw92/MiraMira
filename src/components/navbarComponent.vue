<template>
    <div class="NavbarContainer">
        <div class="NavbarLogo" @click="pushPageAndSubject('/', 0)"><img src="../assets/logo3white.png" alt=""></div>
        <div class="NavbarShortCuts">
            <div @click="pushPageAndSubject('/', 'about')">O nas</div>
            <div @click="pushPageAndSubject('/', 0)">Dlaczego My</div>
            <div @click="pushPageAndSubject('/', 0)">Galeria</div>
            <div @click="pushPageAndSubject('/', 0)">Kontakt</div>
            <!-- <div @click="pushPageAndSubject('/', 0)">506 129 151</div> -->
        </div>
        <div class="phone_number"><img class="icon" src="../assets/phoneIcon.png" alt="">&nbsp;&nbsp;506 129 151</div>
        <div>
            <div class="hamburger" @click="navToggle" :class="toggle_store.toggle ? 'hamburger--is-open' : ''">
                <div class="hamburger__item hamburger__item--first"></div>
                <div class="hamburger__item hamburger__item--middle" style="z-index: 300;"></div>
                <div class="hamburger__item hamburger__item--last"></div>
            </div>
            <Sidebar @close_offerts="close_offerts">
                <ul class="navbar_sidebar-panel-nav">
                        <div
                            class="sidebar_short_cut "
                            @click="pushPageAndSubject('/', 0)"
                        >
                            HOME
                        </div>
                        <div
                            class="sidebar_short_cut "
                            @click="pushPageAndSubject('/', 'about')"
                        >
                            O NAS
                        </div>
                        <div
                            class="sidebar_short_cut "
                            @click="pushPageAndSubject('/', 100)"
                            
                        >
                            DlACZEGO MY
                        </div>
                        <div
                            class="sidebar_short_cut "
                            @click="pushPageAndSubject('/', 0)"
                        >
                            GALERIA
                        </div>
                        <div
                            class="sidebar_short_cut "
                            @click="pushPageAndSubject('/', 0)"
                        >
                            KOSZT
                        </div>
                        <div
                            class="sidebar_short_cut sidebar_phone_number"
                        >
                            <img class="icon" src="../assets/phoneIcon.png" alt="">&nbsp;&nbsp;506 129 151
                        </div>
                        <!-- <div
                            class="sidebar_short_cut "
                            @click="pushPageAndSubject('/', 'contact')"
                        >
                            KONTAKT
                        </div> -->
                </ul>
            </Sidebar>
        </div>
       
    </div>
</template>

<script>
import { useToggleStore } from '@/stores/store.js'
import Sidebar from './SidebarComponent'
export default {
    name: 'NavbarComponent',
    components: {
        Sidebar
    },
    data() {
        return {
            desktop: true,
            hamburgerOpen: false,
            toggle_store: useToggleStore(),
            // toggle_store: useToggleStore(),
            offert_clicked: false,
            white_dropbar: true,
            
        }
    },
    methods: {
        scrollPageTo(target){
            // console.log(typeof target)
            if (typeof target == "number") {
                this.closeNav()
                this.$smoothScroll({
                    scrollTo: target,
                    duration: 1000,
                    offset: -50,
                })
            } else {
                const target_id = document.getElementById(`${target}`)
                this.closeNav()
                this.$smoothScroll({
                    scrollTo: target_id,
                    duration: 1000,
                    offset: -50,
                })

            }
        },
        navToggle() {
            this.toggle_store.toggleNavbar()
        },
        closeNav(){
            this.toggle_store.closeNavbar()
        },
        closePanel() {
            this.hamburgerOpen = false
        },
        close_offerts(){
            this.offert_clicked = false
        },
        pushPageAndSubject(pageName, subject){
            this.closeNav()
            this.$router.push(`${pageName}`)
            setTimeout(() => {
                this.scrollPageTo(subject)
            }, 200); 
        },
    }
}
</script>

<style>
    .NavbarContainer {
        z-index: 10;
        position: fixed;
        top: 0;
        display: flex;
        justify-content: space-around;
        align-items:center;
        width: 90vw;
        height: 75px;
        color: rgba(255, 255, 255, 0.9);
        background-color: rgba(0, 0, 0, 0.7);
        padding: 0 5vw;
    }
    .NavbarLogo {
        font-family: "Sriracha", serif;
        font-weight: 600;
        font-style: normal;
        font-size: 22px;
        cursor: pointer;
    }

    .NavbarLogo img {
        /* height: 80%; */
        height: 60px;
    }

    .NavbarShortCuts {
        font-size: 16px;
        font-weight: 550;
        width: 50%;
        min-width: 550px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .NavbarShortCuts div {
        cursor: pointer;
    }

    .sidebar_short_cut {
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 43px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--primary-blue-dark);
        text-decoration: none;
        cursor: pointer;
    }

    .hamburger {
        height: 30px;
        width: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        

    }
    .hamburger:hover {
        cursor: pointer;
        }
    .hamburger__item {
        height: 4px;
        width: 100%;
        background: rgba(255, 255, 255, 0.9);
        transition: transform 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 400ms linear, background-color 400ms linear;
        z-index: 1000;


    }
    .hamburger--is-open .hamburger__item--first {
        transform: translate(0, 13px) rotate(45deg);
        background-color: rgba(255, 255, 255, 0.9);
        }
    .hamburger--is-open .hamburger__item--middle {
        opacity: 0;
        background-color: rgba(255, 255, 255, 0.9);
        }
    .hamburger--is-open .hamburger__item--last {
        transform: translate(0, -13px) rotate(-45deg);
        background-color: rgba(255, 255, 255, 0.9);
        }

    .navbar_sidebar-panel-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0 20px 0 20px;
    }

    .icon { 
        height: 15px;
    }

    .phone_number {
        letter-spacing: 1px;
    }

    .sidebar_phone_number {
        letter-spacing: 1px;
        cursor:auto;
    }

    @media screen and ( max-width: 1000px) {
        .NavbarShortCuts {
            display: none;
            width: 0;
            min-width: 0;
        }
        .NavbarShortCuts div {
            width: 0;
        }
    
        .NavbarContainer {
            padding: 0 7vw 0 8vw;
            width: 85vw;
            justify-content: space-between;
        }

        .NavbarLogo img {
            height: 40px;
        }
        .phone_number {
            display: none;
        }
    }

    @media screen and (min-width: 1000px) {
        .hamburger {
            display: none;
        }

    }

    @media screen and ( max-width: 500px) {
        .NavbarLogo img{
            height: 40px;
        }
    }

</style>