<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-row class="card">
                    <h1>Schritt 3/4</h1>
                </v-row>
                <v-row
                        class="card"
                >
                    <v-card width="40%" outlined style="border-color: cornflowerblue">
                        <v-card-text>
                            Meine Präsentation soll als PDF-Datei exportiert werden
                        </v-card-text>
                    </v-card>
                </v-row>
                <v-row class="card">
                    <v-btn dark large icon text style="background-color: cornflowerblue; margin-right: 5%" v-on:click="next(true)">
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn dark icon large text style="background-color: grey" v-on:click="next(false)">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
    export default {
        name: 'question3',
        data: () => ({}),
        methods: {
            next: function (selected) {
                this.$router.push({path: '/question4', query : { first: this.$route.query.first, second: this.$route.query.second, third: selected}});
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
