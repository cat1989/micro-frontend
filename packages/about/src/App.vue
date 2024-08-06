<template>
    <div>
        <el-button>按钮</el-button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    window.addEventListener("message", (e) => {
        if (e.data.type === 'reset') {
            const {
                name,
            } = e.data.payload
            const style = getComputedStyle(document.body)
            const height = document.body.scrollHeight + parseInt(style.marginTop) + parseInt(style.marginBottom)
            e.source.postMessage({
                type: 'reset',
                payload: {
                    name,
                    height,
                },
            }, '*')
        }
    }, false)
})
</script>
  