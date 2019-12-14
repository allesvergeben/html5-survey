<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-row class="card">
                    <h1>Schritt 2/4</h1>
                </v-row>
                <v-row
                        class="card"
                >
                    <v-card width="40%" outlined style="border-color: cornflowerblue">
                        <v-card-text>
                            Meine Präsentatiom ist…
                        </v-card-text>
                    </v-card>
                </v-row>
                <v-row class="card">
                    <v-card style="margin-right: 5%" width="20%" flat>
                        <v-img src="../assets/examples/LinearVorschau.png" alt="Beispiel Linear"/>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn dark large outlined text style="border-color: cornflowerblue;color: cornflowerblue;" v-on:click="next(true)">
                                Linear
                            </v-btn>
                            <v-spacer/>
                        </v-card-actions>
                    </v-card>
                    <v-card style="margin-right: 5%" width="20%" flat>
                        <v-img src="../assets/examples/KomplexVorschau.png" alt="Beispiel Komplex"/>
                        <v-card-actions>
                            <v-spacer/>
                    <v-btn dark large outlined text style="border-color: cornflowerblue; color: cornflowerblue;" v-on:click="next(false)">
                        Komplex
                    </v-btn>
                            <v-spacer/>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
    export default {
        name: 'question2',
        props: {
            choose: String
        },
        data: () => ({}),
        methods: {
            next: function (selected) {
                this.$router.push({path: '/question3', query : { first: this.$route.query.first, second: selected}});
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
