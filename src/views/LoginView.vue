<template>
    <h1>Login</h1>
    <input type="text" placeholder="Email" v-model="email" /><br />
    <input type="password" placeholder="Password" v-model="password" /><br />
    <button @click="login">Login</button>
    <p v-if="error">Wrong user or password</p>
</template>

<script lang="ts" setup>
import router from "@/router";
import { useAuth } from "@/store/useAuth";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const error = ref(false);

const store = useAuth()
const login = () => {
    error.value = store.login(email.value, password.value)
    if (store.is_auth) {
        router.push('/')
    }
}
</script>
