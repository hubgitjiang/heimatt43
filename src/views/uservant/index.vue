<template>
    <div>
        <h2>使用 vant 中的组件</h2>
        <h3>01 使用 vant 中的按钮</h3>
        <!-- type：设置颜色 -->
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <h3>02 使用 vant 中的 icon</h3>
        <van-icon name="close" />
        <van-icon name="like" />
        <h3>03 使用 vant 中的 cell</h3>
        <!-- van-cell-group：单元格的组的标签 -->
        <van-cell-group>
            <!-- van-cell：单元格 -->
            <!-- title: 左侧的内容  value：右侧的内容 label：描述信息 -->
            <van-cell title="单元格" value="内容" />
            <van-cell icon="like">
                <!-- 使用 title 插槽 -->
                <template slot="title">
                    左侧的内容
                    <van-icon name="like" />
                </template>
                <template slot="default">
                    我是右侧的内容
                </template>
                <template slot="label">
                    我是下方的内容
                </template>
            </van-cell>
        </van-cell-group>
        <h3>04 使用 fields 中的 error-message 属性</h3>
        <van-field v-model="phone" label="手机号" placeholder="请输入手机号" :error-message="errmsg" />
        <h3>05 给添加加载效果</h3>
        <van-button :loading="isLoading" loading-type="spinner" @click="isLoading=true">登录中</van-button>
    </div>
</template>

<script>
export default {
    name: "hahaha", // 给当前组件设置一个别名
    data() {
        return {
            phone: "",
            // 错误提示信息
            errmsg: '不合法',
            isLoading: false
        }
    }
}
</script>

<style>

</style>
