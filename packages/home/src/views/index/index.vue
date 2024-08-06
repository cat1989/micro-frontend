<template>
    <section>
        <el-form
            inline
            :model="model"
        >
            <el-form-item
                prop="name"
                label="名称"
            >
                <el-input
                    :maxlength="32"
                    v-model="model.name"
                    prefix-icon="el-icon-search"
                />
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                >搜索</el-button>
                <el-button
                    @click="goWithHref"
                >location.href</el-button>
                <el-button
                    @click="goWithPushState"
                >pushState</el-button>
                <el-button
                    @click="goWithAppShell"
                >appShell</el-button>
            </el-form-item>
        </el-form>
        <ul>
            <li v-for="(id, index) in getIds()" :key="index" @click="$router.push(`/details/${id}`)">{{ id }}</li>
        </ul>
        <el-table
            :data="data"
            v-loading="loading"
        >
            <el-table-column
                fixed="left"
                type="index"
                label="序号"
            ></el-table-column>
            <el-table-column
                prop="name"
                label="名称"
            ></el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
            >
                <template #default="scope">
                    <el-button
                        type="text"
                        @click="go(scope.row)"
                    >详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </section>
</template>

<script>
import { users } from '@/services'

export default {
    data() {
        return {
            data: [],
            model: {
                name: '',
            },
            loading: false,
        }
    },
    created() {
        this.loading = true
        users.get().finally(() => {
            this.loading = false
        }).then((users) => {
            this.data = users
        })
        // setTimeout(() => {
        //     request.abort()
        // }, 2000)
        // const abortController = new AbortController()
        // axios.get('//localhost:10086/api/users', {
        //     signal: abortController.signal,
        // }).then((res) => res.data).finally(() => {
        //     this.loading = false
        // }).then((users) => {
        //     this.data = users
        // })
        // setTimeout(() => {
        //     abortController.abort()
        // }, 2000)
        // this.data = new Array(10).fill(0).map((_, id) => ({
        //     id,
        //     name: `John_${id}`,
        // }))
    },
    methods: {
        getIds() {
            return sessionStorage.getItem('id') ? JSON.parse(sessionStorage.getItem('id')) : []
        },
        go({ id }) {
            this.$router.push(`/details/${id}`)
            const ids = sessionStorage.getItem('id') ? JSON.parse(sessionStorage.getItem('id')) : []
            ids.push(id)
            sessionStorage.setItem('id', JSON.stringify(ids))
        },
        goWithHref() {
            location.href = '/profile'
        },
        goWithPushState() {
            history.pushState(null, '', '/profile')
        },
        goWithAppShell() {
            window.appShell.history.push('/profile')
        },
    },
}
</script>
