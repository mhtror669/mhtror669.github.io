<script setup>
import {VApp, VAppBar, VAppBarTitle, VAppBarNavIcon, VContainer, VRow, VCol} from "vuetify/components";
import MovieCard from "@/components/MovieCard.vue";
import router from "@/router";

const bookmarks = localStorage.bookmarks !== undefined ? JSON.parse(localStorage.bookmarks).reverse() : []

</script>

<template>
    <v-app>
        <v-app-bar color="blue-darken-2">
            <v-app-bar-nav-icon @click.stop="router.back()" variant="text"><v-icon>mdi-arrow-right</v-icon></v-app-bar-nav-icon>
            <v-app-bar-title>نشان ها</v-app-bar-title>
        </v-app-bar>
        <p class="msg" v-if="bookmarks.length < 1">هیچ موردی نشان نشده است</p>
        <v-container v-else class="mt-14">
            <v-row>
                <v-col cols="6" sm="4" md="3" lg="2" v-for="movie of bookmarks">
                    <movie-card :movie="movie"></movie-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<style scoped>
.msg {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>