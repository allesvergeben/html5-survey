<template>
    <div>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-row class="card">
                    <h1>Schritt 4/4</h1>
                </v-row>
                <v-row
                        class="card"
                >
                    <v-card outlined style="border-color: cornflowerblue" width="40%">
                        <v-card-text>
                            Das <i>Theme</i> meiner Präsentation ist…
                        </v-card-text>
                    </v-card>
                </v-row>
                <v-row class="card1" v-for="template in templates" v-bind:key="template.key">
                    <v-card width="40%">
                        <v-img :alt="template.alt" :src="template.src">
                            <v-container fluid class="fill-height">
                                <v-row>
                                    <v-col cols="12">
                                         <h2 style="color: white"> {{ template.name }} </h2>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-img>
                        <v-card-actions class="card" style="margin-top: 5%">
                            <v-btn text dark large outlined style="border-color: cornflowerblue;color: cornflowerblue; margin-right: 5%; width: 150px">Download</v-btn>
                            <v-btn text dark large outlined style="border-color: cornflowerblue;color: cornflowerblue; width: 150px">Git Hub</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <v-btn fab bottom right fixed style="margin-bottom: 45px" v-on:click="help"><v-icon>mdi-help</v-icon></v-btn>
    <HelpDialog v-model="showHelpDialog" />
    </div>
</template>


<script>
    import HelpDialog from '../components/HelpDialog'
    export default {
        name: 'question4',
        components: {
            HelpDialog
        },
        props: {
            choose: String
        },
        data: () => ({
            showHelpDialog: false,
            templates: [
                {alt: "Vorschau DHBW Template", src: require("../assets/Example.jpeg"), name: "DHBW", dl: 1},
                {alt: "Vorschau Online Medien Template", src: require("../assets/Example.jpeg"), name: "Online Medien", dl: 2},
                {alt: "Vorschau Blau Template", src: require("../assets/Example.jpeg"), name: "Blau", dl: 3},
                {alt: "Vorschau Angepasst Template", src: require("../assets/Example.jpeg"), name: "Angepasst", dl: 4},
            ]
        }),
        methods: {
            next: function () {
                //this.$router.push({path: '/question3', query : { first: this.$route.query.first, second: this.$route.query.second, third: this.$route.query.third }});
            },
            help: function () {
                this.showHelpDialog=true;
            }
        }
    }

</script>

<style lang="stylus">
    .card
        align-content center
        justify-content center
        margin-bottom 5%
    .card1
        align-content center
        justify-content center
        margin-bottom 20px
</style>
