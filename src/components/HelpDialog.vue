<template>
    <v-dialog fullscreen transition="dialog-bottom-transition" v-model="show">
        <v-app-bar
                color="primary"
                app
                flat
        >
            <v-btn
                    icon
                    style="color: cornflowerblue"
                    @click="show = false"
                    aria-label="Hilfe schließen"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-app-bar>
        <v-card>
            <v-card-title><h2>Tips und Tutorials</h2></v-card-title>
            <v-card-text>

            </v-card-text>
        </v-card>

    </v-dialog>
</template>
<script>
    export default {
        props: {
            value: Boolean
        },
        computed: {
            show: {
                get () {
                    return this.value
                },
                set (value) {
                    this.$emit('input', value)
                }
            }
        }
    }
</script>
