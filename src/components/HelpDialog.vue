<template>
    <v-dialog fullscreen transition="dialog-bottom-transition" v-model="show">
        <v-app-bar
                app
                color="primary"
                flat
        >
            <v-btn
                    @click="show = false"
                    aria-label="Hilfe schließen"
                    icon
                    style="color: cornflowerblue"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <h2>Tipps und Tutorials</h2>
        </v-app-bar>
        <v-card flat>
            <v-row
                    class="mb-6"
                    style="padding-top: 64px; margin-left: 6px"
            >
                <v-col
                        :key="tipntut.key"
                        v-for="(tipntut, i) in tipsntuts"
                >
                    <v-card style="max-width: 500px" flat>
                        <v-card-title>
                            {{ tipntut.title }}
                        </v-card-title>
                        <v-card-subtitle v-if="i!==0">
                            {{ tipntut.subtitle }}
                        </v-card-subtitle>
                        <v-img  :src="tipntut.src" v-if="i!==0">
                        </v-img>
                        <v-card-text>
                            <ul v-if="i===0" style="text-align: left">
                                <li v-for="command in tipntut.commands" v-bind:key="command.key">
                                    {{ command }}
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

        </v-card>
    </v-dialog>
</template>
<script>
    export default {
        props: {
            value: Boolean
        },
        data: () => ({
            tipsntuts:
                [
                    { title: "Legende zu den wichtigsten Befehlen",
                        commands: ["Slide erstellt eine neue Zeichenfläche vergleichbar mit einer PowerPoint-Folie (der “Style” kann im CSS-Dokument in der Klasse slide angepasst werden)",
                            "blank erstellt eine Fläche in der Größe einer Folie ohne Hintergrund",
                            "Step in Verwendung mit “slide” legt fest das dieses Element ein Schritt der Präsentation ist, mit data-x und data-y legt man die Koordinaten bzw. die Platzierung auf der gesamten Präsentationsfläche fest",
                            "Header legt die Überschrift fest",
                            "in den “Main”-Bereich kommt der eigentliche Inhalt der Folie1",
                            "in den Footer Quellen"
                        ]
                    },
                    { src: require("../assets/Example.jpeg"), title: "Installation", subtitle: "Lerne wie du Impress.js auf deinem Desktop installierst." },
                    { src: require("../assets/Example.jpeg"),title: "Vom Download zur Präsentation", subtitle: "Lerne wie du mit deinem Template Download zu deiner Präsentation kommst.",}
                ]
        }),
        computed: {
            show: {
                get() {
                    return this.value
                },
                set(value) {
                    this.$emit('input', value)
                }
            }
        }
    }
</script>
