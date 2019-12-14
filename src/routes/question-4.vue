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
                <v-row class="card1" v-for="(template, i) in templates" v-bind:key="template.key">
                    <v-card width="40%">
                        <v-img v-if="art" :alt="template.alt" :src="template.srcl">
                            <v-container fluid class="fill-height">
                                <v-row>
                                    <v-col cols="12">
                                         <h2 style="color: white"> {{ template.name }} </h2>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-img>
                        <v-img v-else :alt="template.alt" :src="template.srck">
                            <v-container fluid class="fill-height">
                                <v-row>
                                    <v-col cols="12">
                                        <h2 style="color: white"> {{ template.name }} </h2>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-img>
                        <v-card-actions class="card" style="margin-top: 5%">
                            <v-btn text dark large outlined style="border-color: cornflowerblue;color: cornflowerblue; margin-right: 5%; width: 150px" v-on:click="download(i)">Download</v-btn>
                            <v-btn text dark large outlined style="border-color: cornflowerblue;color: cornflowerblue; width: 150px" href="https://github.com/althomi/html5pr-si">Git Hub</v-btn>
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
            chooses: [],
            art: false,
            showHelpDialog: false,
            templates: [
                {alt: "Vorschau DHBW Template", srcl: require("../assets/themes/linear/Linear-dhbw.png"), srck: require("../assets/themes/komplex/Komplex-dhbw.png"),  name: "DHBW", dl: 1},
                {alt: "Vorschau Online Medien Template", srcl: require("../assets/themes/linear/Linear-ON.png"), srck: require("../assets/themes/komplex/Komplex-ON.png"), name: "Online Medien", dl: 2},
                {alt: "Vorschau Blau Template", srcl: require("../assets/themes/linear/Linear-blau.png"), srck: require("../assets/themes/komplex/Komplex-blau.png"),  name: "Blau", dl: 3},
                {alt: "Vorschau Angepasst Template", srcl: require("../assets/themes/linear/Linear-custom.png"), srck: require("../assets/themes/komplex/Komplex-Custom.png"), name: "Angepasst", dl: 4},
            ],
        }),
        created: function() {
            this.art = this.$route.query.second;
        },
        mounted() {
            this.art = this.$route.query.second;
        },
        methods: {
            ZipDownload(response){
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'dein-template.zip'); //or any other extension
                document.body.appendChild(link);
                link.click()
            },
            WeblocDownload(response){
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'PDF-Exporter.webloc'); //or any other extension
                document.body.appendChild(link);
                link.click()
            },
            download: function (type) {

                this.chooses = [this.$route.query.first, this.$route.query.second, this.$route.query.third];
                var art = this.chooses[1] ? "Linear" : "Komplex";
                var numbered = this.chooses[0] ? "" : "-onpn";
                var urlp = this.chooses[0] ? "pagenumbers" : "nopagenumbers";
                var urll = this.chooses[1] ? "linear" : "komplex";
                var url = "/downloads/" + urlp + "/" + urll + "/";
                if (this.chooses[2]) {
                    this.$http({
                        method: 'get',
                        url: "/downloads/PDF-Exporter.webloc",
                        responseType: 'arraybuffer'
                    })
                        .then(response => {
                            this.WeblocDownload(response)
                        });
                }
                switch (type) {
                    case 0:
                        var download0 = url + art + "-DHBW" + numbered + ".zip";
                        this.$http({
                            method: 'get',
                            url: download0,
                            responseType: 'arraybuffer'
                        })
                            .then(response => {
                                this.ZipDownload(response)
                            });
                        //DHBW
                        break;
                    case 1:
                        var download1 = url + art + "-ON" + numbered + ".zip";
                        this.$http({
                            method: 'get',
                            url: download1,
                            responseType: 'arraybuffer'
                        })
                            .then(response => {
                                this.ZipDownload(response)
                            });
                        //ON
                        break;
                    case 2:
                        var download2 = url + art + "-Blau" + numbered + ".zip";
                        this.$http({
                            method: 'get',
                            url: download2,
                            responseType: 'arraybuffer'
                        })
                            .then(response => {
                                this.ZipDownload(response)
                            });
                        //Blau
                        break;
                    case 3:
                        var download3 = url + art + "-Custom" + numbered + ".zip";
                        this.$http({
                            method: 'get',
                            url: download3,
                            responseType: 'arraybuffer'
                        })
                            .then(response => {
                                this.ZipDownload(response)
                            });
                        //Custom
                        break;

                }
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
