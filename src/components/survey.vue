<template>
    <v-container>
        <p>{{ lang }}</p>
    </v-container>
</template>

<script>
    export default {
        name: 'Survey',
        props: {
            lang: String
        }
    }
</script>
