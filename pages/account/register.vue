<script>
import {
    mapState
} from "vuex";

import {
    required,
    email
} from "vuelidate/lib/validators";

/**
 * Register component
 */
export default {
    layout: "auth",
    head() {
        return {
            title: `${this.title} | Nuxtjs Responsive Bootstrap 4 Admin Dashboard`,
        };
    },
    data() {
        return {
            userForm: {
                email: "",
                password: "",
                family_name: "",
                name: "",
                phone_number: ""
            },
            confirmUserForm: {
                email: "",
                code: ""
            },
            submitted: false,
            confirmSubmitted: false,
            tryingToRegister: false,
            isRegisterError: false,
            isSuccessfullyRegistered: false,
            title: "Register",
        };
    },
    validations: {
        userForm: {
            email: {
                required,
                email,
            },
            password: {
                required,
            },
            name: {
                required,
            },
            phone_number: {
                required,
            },
            family_name: {
                required,
            }
        },
        confirmUserForm: {
            email: {
                required,
                email,
            },
            code: {
                required,
            }
        },
    },
    computed: {
        ...mapState({
            user: state => state.auth.user
        }),
        notification() {
            return this.$store ? this.$store.state.modules.notification : null;
        },
    },
    methods: {
        async register() {
            try {
                await this.$store.dispatch('auth/register', this.userForm)
                this.isSuccessfullyRegistered = true;
                this.confirmUserForm.email = this.userForm.email;
            } catch (error) {
                console.log({ error })
            }
        },
        async confirm() {
            try {
                await this.$store.dispatch('auth/confirmRegistration', this.confirmUserForm);
                console.log(await this.$store.dispatch('auth/login', this.userForm));
                this.$router.push("/");
            } catch (error) {
                console.log({ error })
            }
        },
        // async confirm() {
        //     try {
        //         await this.$store.dispatch('auth/confirmRegistration', this.confirmForm)
        //         await this.$store.dispatch('auth/login', this.registerForm)
        //         this.$router.push('/')
        //     } catch (error) {
        //         console.log({ error })
        //     }
        // }
    }
}
</script>

<template>
<div>
    <div class="home-btn d-none d-sm-block">
        <nuxt-link to="/" class="text-dark">
            <i class="mdi mdi-home-variant h2"></i>
        </nuxt-link>
    </div>
    <div class="account-pages my-5 pt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <nuxt-link to="/" class="mb-5 d-block auth-logo">
                            <img src="~/assets/images/logo-dark.png" alt height="22" class="logo logo-dark" />
                            <img src="~/assets/images/logo-light.png" alt height="22" class="logo logo-light" />
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card">
                        <div class="card-body p-4">
                            <div class="text-center mt-2">
                                <h5 class="text-primary">Register Account</h5>
                                <p class="text-muted">Get your free Minible account now.</p>
                            </div>
                            <div class="p-2 mt-4">
                                <div v-if="notification.message" :class="'alert ' + notification.type">{{ notification.message }}</div>
                                <b-form @submit.prevent="register" v-if="isSuccessfullyRegistered === false">

                                    <b-form-group id="name-group" label="Name" label-for="name">
                                        <b-form-input id="name" v-model="userForm.name" type="text" placeholder="Enter name" :class="{
                          'is-invalid': submitted && $v.userForm.name.$error
                        }"></b-form-input>
                                        <div v-if="submitted && !$v.userForm.name.required" class="invalid-feedback">Name is required.</div>
                                    </b-form-group>

                                    <b-form-group id="fullname-group" label="Email" label-for="email">
                                        <b-form-input id="email" v-model="userForm.email" type="email" placeholder="Enter email" :class="{
                          'is-invalid': submitted && $v.userForm.email.$error
                        }"></b-form-input>
                                        <div v-if="submitted && $v.userForm.email.$error" class="invalid-feedback">
                                            <span v-if="!$v.userForm.email.required">Email is required.</span>
                                            <span v-if="!$v.userForm.email.email">Please enter valid email.</span>
                                        </div>
                                    </b-form-group>

                                    <b-form-group id="password-group" label="Password" label-for="password">
                                        <b-form-input id="password" v-model="userForm.password" type="password" placeholder="Enter password" :class="{
                          'is-invalid': submitted && $v.userForm.password.$error
                        }"></b-form-input>
                                        <div v-if="submitted && !$v.userForm.password.required" class="invalid-feedback">Password is required.</div>
                                    </b-form-group>

                                    <b-form-group id="family_name-group" label="Family name" label-for="family_name">
                                        <b-form-input id="family_name" v-model="userForm.family_name" type="text" placeholder="Enter family name" :class="{
                          'is-invalid': submitted && $v.userForm.family_name.$error
                        }"></b-form-input>
                                        <div v-if="submitted && !$v.userForm.family_name.required" class="invalid-feedback">Family name is required.</div>
                                    </b-form-group>


                                    <b-form-group id="phone_number-group" label="Phone" label-for="phone_number">
                                        <b-form-input id="phone_number" v-model="userForm.phone_number" type="text" placeholder="Enter phone" :class="{
                          'is-invalid': submitted && $v.userForm.phone_number.$error
                        }"></b-form-input>
                                        <div v-if="submitted && !$v.userForm.phone_number.required" class="invalid-feedback">Phone is required.</div>
                                    </b-form-group>
                                    



                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="auth-terms-condition-check" />
                                        <label class="custom-control-label" for="auth-terms-condition-check">
                                            I accept
                                            <a href="javascript: void(0);" class="text-dark">Terms and Conditions</a>
                                        </label>
                                    </div>
                                    <div class="mt-3 text-right">
                                        <b-button type="submit" variant="primary" class="w-sm">Register</b-button>
                                    </div>

                                    <div class="mt-4 text-center">
                                        <div class="signin-other-title">
                                            <h5 class="font-size-14 mb-3 title">Sign up using</h5>
                                        </div>

                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <a href="javascript:void()" class="social-list-item bg-primary text-white border-primary">
                                                    <i class="mdi mdi-facebook"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="javascript:void()" class="social-list-item bg-info text-white border-info">
                                                    <i class="mdi mdi-twitter"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="javascript:void()" class="social-list-item bg-danger text-white border-danger">
                                                    <i class="mdi mdi-google"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mt-4 text-center">
                                        <p class="text-muted mb-0">
                                            Already have an account ?
                                            <nuxt-link to="/account/login" class="font-weight-medium text-primary">Login</nuxt-link>
                                        </p>
                                    </div>
                                </b-form>

                                <b-form @submit.prevent="confirm" v-else>

                                    <b-form-group id="fullname-group" label="Email" label-for="email">
                                        <b-form-input id="email" v-model="confirmUserForm.email" type="email" placeholder="Enter email" :class="{
                          'is-invalid': confirmSubmitted && $v.confirmUserForm.email.$error
                        }"></b-form-input>
                                        <div v-if="confirmSubmitted && $v.confirmUserForm.email.$error" class="invalid-feedback">
                                            <span v-if="!$v.confirmUserForm.email.required">Email is required.</span>
                                            <span v-if="!$v.confirmUserForm.email.email">Please enter valid email.</span>
                                        </div>
                                    </b-form-group>

                                    <b-form-group id="code-group" label="Code" label-for="code">
                                        <b-form-input id="code" v-model="confirmUserForm.code" type="password" placeholder="Enter code" :class="{
                          'is-invalid': confirmSubmitted && $v.confirmUserForm.code.$error
                        }"></b-form-input>
                                        <div v-if="confirmSubmitted && !$v.confirmUserForm.code.required" class="invalid-feedback">Code is required.</div>
                                    </b-form-group>

                            

                                    <div class="mt-3 text-right">
                                        <b-button type="submit" variant="primary" class="w-sm">Confirm</b-button>
                                    </div>

                                    <div class="mt-4 text-center">
                                        <div class="signin-other-title">
                                            <h5 class="font-size-14 mb-3 title">Sign up using</h5>
                                        </div>

                                        <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <a href="javascript:void()" class="social-list-item bg-primary text-white border-primary">
                                                    <i class="mdi mdi-facebook"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="javascript:void()" class="social-list-item bg-info text-white border-info">
                                                    <i class="mdi mdi-twitter"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="javascript:void()" class="social-list-item bg-danger text-white border-danger">
                                                    <i class="mdi mdi-google"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mt-4 text-center">
                                        <p class="text-muted mb-0">
                                            Already have an account ?
                                            <nuxt-link to="/account/login" class="font-weight-medium text-primary">Login</nuxt-link>
                                        </p>
                                    </div>
                                </b-form>
                            </div>
                            <!-- end card-body -->
                        </div>
                        <!-- end card -->
                    </div>
                    <div class="mt-5 text-center">
                        <p>
                            © {{ new Date().getFullYear()}} Minible. Crafted with
                            <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                        </p>
                    </div>
                </div>
                <!-- end col -->
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>

<style lang="scss" module></style>
