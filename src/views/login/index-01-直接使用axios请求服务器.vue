<template>
    <div class="login">
        <!-- navBar -->
        <van-nav-bar class="mynavbar">
            <template slot="title">
                <div class="myword">登录</div>
            </template>
        </van-nav-bar>
        <!-- 输入框 -->
        <van-cell-group>
            <van-field v-model="user.mobile" clearable placeholder="请输入手机号" :error-message="yanzheng.mobile">
                <template slot="left-icon">
                    <i class="iconfont icon-iphone"></i>
                </template>
            </van-field>
            <van-field left-icon="contact" v-model="user.code" placeholder="请输入验证码" :error-message="yanzheng.code">
                <template slot="left-icon">
                    <i class="iconfont icon-lock"></i>
                </template>
                <van-button class="mycodebtn" slot="button" size="small">获取验证码</van-button>
            </van-field>
        </van-cell-group>
        <!-- 登录按钮 -->
        <div class="myloginbtn">
            <van-button @click="login" class="mybtn" size="large">登录</van-button>
        </div>
    </div>
</template>

<script>
// 导入 axios 
import axios from 'axios'
export default {
    data() {
        return {
            user: {
                mobile: '13911111111',
                code: '246810'
            },
            yanzheng: {
                // 验证手机号是否合法的错误信息
                mobile: "",
                code: ""
            }
        }
    },
    methods: {
        // 登录方法
        login() {
            if (!this.checking()) {
                return
            }
            // 发送请求到服务器，提交数据
            axios({
                url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
                method: 'POST',
                data: this.user
            }).then(res => {
                console.log(res)
                // 跳转到首页
                this.$router.push('/home')
            }).catch(error => {
                console.log('出错啦')
            })
        },
        checking() {
            // 定义两个变量：用来分别表示手机号 & 验证码是否通过的标识
            let mobileF = true
            let codeF = true
            // 验证合法性
            // 验证手机号的合法性
            if (this.user.mobile.trim().length !== 11) {
                this.yanzheng.mobile = "手机号不合法"
                mobileF = false
            } else {
                this.yanzheng.mobile = ""
            }
            // 验证验证码
            if (this.user.code.trim().length !== 6) {
                this.yanzheng.code = "验证码不合法"
                codeF = false
            } else {
                this.yanzheng.code = ""
            }
            // 判断是否继续向下执行，由两个标识
            return mobileF && codeF
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    .mynavbar {
        background-color: #3296fa;
        .myword {
            color: #fff;
        }
    }
    .mycodebtn {
        background-color: #ececec;
        border-radius: 20px;
    }
    .myloginbtn {
        margin: 40px 20px;
        .mybtn {
            background-color: #6db4fb;
            color: #fff;
            border-radius: 5px;
        }
    }
}
</style>
