<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-row
                        style="height: 200px; align-content: center; justify-content: center"
                >
                    <v-card width="500px" outlined style="border-color: cornflowerblue">
                        <v-card-title>
                            Hallo
                        </v-card-title>
                        <v-card-text>
                            Die nächsten 4 Fragen brinden dich zu deiner Wunschpäsentation
                        </v-card-text>
                    </v-card>
                </v-row>
                <v-row  style="height: 30px; align-content: center; justify-content: center">
                    <v-btn large text style="background-color: cornflowerblue; width: 200px" dark><v-icon>mdi-arrow-right</v-icon></v-btn>
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
    }
</script>
xs
