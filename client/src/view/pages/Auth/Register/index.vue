<template>
    <div class="app-login">
        <div class="login-header">
            <h2 class="login-title">
                Đăng ký
            </h2>
            <div class="close-modal" @click="handleCloseModal">
                X
            </div>
        </div>
        <div class="login-body">
            <form class="form-login">
                <div class="form-input">
                    <label :class="[data.email ? 'isfilled' : '', 'label']">
                        Email
                    </label>
                    <input type="text" name="email" v-model="data.email" @focus="handleInputFocus" @blur="handleInputBlur"
                        autocomplete="off">
                </div>
                <div class="form-input">
                    <label :class="[data.password ? 'isfilled' : '', 'label']">
                        Mật khẩu
                    </label>
                    <input type="password" name="password" v-model="data.password" @focus="handleInputFocus"
                        @blur="handleInputBlur" autocomplete="off">
                </div>
                <div class="form-input">
                    <label class="label">
                        Mật khẩu
                    </label>
                    <input type="password" name="password" autocomplete="off">
                </div>
                <div class="form-input">
                    <span>
                        Quên mật khẩu
                    </span>
                </div>
                <div class="form-input submit">
                    <button type="submit">Đăng ký</button>
                </div>
            </form>
        </div>
        <div class="login-bottom">
            <div class="title">
                <div class="drive">

                </div>
                <p>hoặc đăng nhập bằng</p>
            </div>
            <div class="login-social">
                <div class="login-facebook">
                    <div class="text">
                        Facebook
                    </div>
                </div>
                <div class="login-google">
                    <div class="text">
                        Google
                    </div>
                </div>
            </div>
            <div class="btn-signup">
                <span>
                    Bạn chưa có tài khoản?
                </span>
                <span>
                    Đăng ký ngay
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useStore } from "vuex";

const data = reactive({
    email: '',
    password: '',
    repassword: ''
})
const store = useStore()
const handleCloseModal = () => {
    return store.dispatch('common/CLOSE_MODAL_REGISTER')
}

const handleInputFocus = (event) => {
    event.target.parentElement.querySelector('.label').classList.add('focused');
}

const handleInputBlur = (event) => {
    if (event.target.value === '') {
        event.target.parentElement.querySelector('.label').classList.remove('focused');
    }
}
watch(() => data.email, (newValue, oldValue) => {
    data.email = newValue
    console.log(newValue)
});

watch(() => data.repassword, (newValue, oldValue) => {
    data.repassword = newValue
    console.log(newValue)
});

watch(() => data.password, (newValue, oldValue) => {
    data.password = newValue;
    console.log(newValue)
});
</script>

<style lang="scss" >
.app-login {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .login-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .login-title {
            font-size: 18px;
            font-weight: 600;
            text-transform: uppercase;

        }

        .close-modal {
            font-size: 18px;
            cursor: pointer;
            font-weight: 600;

            &:hover {
                opacity: .6;
            }
        }
    }

    .login-body {
        width: 100%;

        .form-login {
            display: flex;
            flex-direction: column;
            gap: 24px;
            position: relative;

            input {
                height: 46px;
                border: 1px solid #CFCFCF;
                width: 100%;
                padding: 0px 16px;
                border-radius: 4px;
                font-size: 15px;
                font-weight: 500;

                &:focus {
                    outline: none;
                    border: 1px solid $azure;
                    background-color: $light-primary;
                }

                &:-webkit-autofill {
                    background-color: $light-primary !important;
                    -webkit-box-shadow: 0 0 0 30px white inset !important;
                }

            }

            label {
                position: absolute;
                left: 16px;
                color: #535353;
                font-weight: 400;
                font-size: 16px;
                transform: translateY(15px);
                padding: 0px 5px;
                background-color: $light-primary;
                transition: -webkit-transform 0.2s ease-in-out;
                transition: transform 0.2s ease-in-out;
                transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;

                &.focused {
                    // Khi input được focus, thay đổi label
                    transform: translateY(-7.5px);
                    font-size: 13px;
                }

                &:-webkit-autofill {
                    transform: translateY(-7.5px);
                    font-size: 13px;

                }

                &.isfilled {
                    transform: translateY(-7.5px);
                    font-size: 13px;
                }
            }

            .form-input {
                display: flex;
                justify-content: flex-end;

                span {
                    color: $gray;
                    cursor: pointer;

                    &:hover {
                        color: $black;
                    }
                }

                &.submit {
                    width: 100%;

                    button {
                        padding: 15px;
                        background-color: $red;
                        border: none;
                        width: 100%;
                        font-weight: 500;
                        cursor: pointer;
                        color: $light-primary;
                        font-size: 15px;
                        font-family: 'Inter';
                        border-radius: 4px;
                        transition: opacity .2s ease-in-out;

                        &:hover {
                            opacity: .8;
                        }
                    }
                }
            }
        }
    }

    .login-bottom {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .title {
            position: relative;

            .drive {
                height: 1px;
                background-color: $border-section;
            }

            p {
                font-size: 12px;
                position: absolute;
                background-color: $light-primary;
                padding: 5px;
                top: 50%;
                left: 50%;
                color: $gray;
                transform: translate(-50%, -50%);
            }
        }

        .login-social {
            display: flex;
            gap: 16px;

            &>div {
                transition: opacity .2s ease-in-out;
                cursor: pointer;
                width: 50%;
                border-radius: 4px;
                color: $light-primary;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 15px;
                gap: 8px;

                &:hover {
                    opacity: .8;
                }
            }

            .login-facebook {
                background-color: $azure;
            }

            .login-google {
                background-color: $red;
            }
        }

        .btn-signup {
            display: flex;
            gap: 8px;
            font-size: 13px;
            justify-content: center;

            span:last-child {
                color: $blue;
                font-weight: 500;
                cursor: pointer;

                &:hover {
                    color: $azure;
                }
            }
        }
    }
}
</style>