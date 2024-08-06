<template>
    <el-container class="container">
        <el-header
            class="header"
            :style="{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }"
        >
            <h1 class="title">微前端</h1>
            <el-menu
                mode="horizontal"
                :default-active="activeName"
                @select="onSelect"
                class="menu"
                :style="{
                    flex: 1,
                    justifyContent: 'flex-end',
                }"
            >
                <el-menu-item
                    index="/home"
                >首页</el-menu-item>
                <el-menu-item
                    index="/shop"
                >商城</el-menu-item>
                <el-menu-item
                    index="/profile"
                >个人中心</el-menu-item>
                <el-menu-item
                    index="/about"
                >关于</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <micro-app
                name="home"
                entry="http://localhost:3001"
                active-rule="/home"
                mode="shadow"
            ></micro-app>
            <micro-app
                name="shop"
                entry="http://localhost:3003"
                active-rule="/shop"
                mode="shadow"
            ></micro-app>
            <micro-app
                name="profile"
                entry="http://localhost:3002"
                active-rule="/profile"
            ></micro-app>
            <micro-app
                name="about"
                entry="http://localhost:3005"
                active-rule="/about"
                mode="strict"
                :style="{
                    height: '100%',
                }"
            ></micro-app>
        </el-main>
    </el-container>
</template>

<script setup>
// import 'app-shell/lib/custom-element'
import MicroApp from '@/components/micro-app'
import {
    AppShell,
} from 'app-shell'
import {
    onMounted,
    ref,
} from 'vue'
AppShell.on("beforeRouteLeave", () => {
    const customEvent = new CustomEvent("beforeRouteLeave")
    window.dispatchEvent(customEvent)
})
window.appShell = AppShell

const activeName = ref('/home')

const onSelect = (index) => {
    AppShell.history.push(index)
    // location.href = index
    // history.pushState(null, '', index)
}

onMounted(() => {
    // window.addEventListener("popstate", (e) => {
    //     e.preventDefault()
    //     console.log(e)
    // }, false)
    // AppShell.load('home')
    const {
        pathname,
    } = location
    const [,activeRule,] = (pathname === '/' ? '/home' : pathname).split("/")
    activeName.value = `/${activeRule}`
    AppShell.history.push(pathname === '/' ? '/home' : pathname)
})
</script>

<style lang="scss" scoped>
@use 'sass:map';
@use 'element-plus/theme-chalk/src/common/var.scss' as variables;

.container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    // min-height: 768px;
}
.header {
    background-color: variables.$color-white;
    box-shadow: map.get(variables.$box-shadow, 'lighter');
    z-index: 999;
    position: relative;
}
.title {
    font-size: map.get(variables.$font-size, 'extra-large');
    color: map.get(variables.$text-color, 'primary');
}
.menu {
    border-bottom: 0!important;
}
</style>
