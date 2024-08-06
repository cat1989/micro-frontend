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
                    :prefix-icon="Search"
                />
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                >搜索</el-button>
            </el-form-item>
        </el-form>
        <ul>
            <li v-for="(id, index) in getIds()" :key="index">{{ id }}</li>
        </ul>
        <el-table
            :data="data"
        >
            <el-table-column
                fixed="left"
                type="index"
                label="序号"
                width="80"
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

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
    Search,
} from '@element-plus/icons-vue'

const router = useRouter()

const data = ref(new Array(10).fill(0).map((_, id) => ({
    id,
    name: `John_${id}`,
})))
const model = ref({
    name: '',
})

const getIds = () => {
    return sessionStorage.getItem('id') ? JSON.parse(sessionStorage.getItem('id')) : []
}

const go = ({ id }) => {
    router.push(`/details/${id}`)
    const ids = window.sessionStorage.getItem('id') ? JSON.parse(window.sessionStorage.getItem('id')) : []
    ids.push(id)
    window.sessionStorage.setItem('id', JSON.stringify(ids))
}
</script>
