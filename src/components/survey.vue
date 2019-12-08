<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-row class="card">
                    <h1>Hallo</h1>
                </v-row>
                <v-row
                        class="card"
                >
                    <v-card width="500px" outlined style="border-color: cornflowerblue">
                        <v-card-text>
                            Die nächsten 4 Fragen brinden dich zu deiner Wunschpäsentation
                        </v-card-text>
                    </v-card>
                </v-row>
                <v-row class="card">
                    <v-btn large dark text style="background-color: cornflowerblue; width: 200px" v-on:click="next"><v-icon>mdi-arrow-right</v-icon></v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'Survey',
        props: {
            lang: String
        },
        data: () => ({

        }),
        methods: {
            next: function () {
                this.$router.push({
                    name: 'question1',
                    path: '/question1',
                });
            }
        }
    }
</script>

<style lang="stylus">
    .card
        align-content center
        justify-content center
        margin-bottom 5%
</style>
