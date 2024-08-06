<template>
    <div
        class="micro-app"
        ref="container"
    ></div>
</template>

<script setup>
import { AppShell } from 'app-shell'
import { defineProps, onMounted, ref } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    entry: {
        type: String,
        required: true,
    },
    activeRule: {
        type: String,
        required: true,
    },
    mode: {
        type: String,
        default: "default",
        validator(val) {
            return [
                'default',
                'shadow',
                'strict',
            ].includes(val)
        },
    },
})
const container = ref(null)

onMounted(() => {
    const {
        name,
        entry,
        activeRule,
        mode,
    } = props
    AppShell.register({
        name,
        entry,
        activeRule,
        container: container.value,
        mode,
    })
})
</script>

<style lang="scss">
.micro-app {
    position: relative;
    display: none;
}
</style>
