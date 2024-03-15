<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const name = ref('');
const age = ref('');
const gender = ref('');
const address = ref('');
const email = ref('');
const phone = ref('');
const handleAddStudent = (ev) => {
    ev.preventDefault();
    const getLocalStorage = JSON.parse(window.localStorage.getItem("students")) || [];
    const payload = {
        id: getLocalStorage.length + 1,
        name: name.value,
        age: +age.value,
        gender: gender.value,
        address: address.value,
        email: email.value,
        phone: phone.value,
    };
    window.localStorage.setItem("students", JSON.stringify([...getLocalStorage, payload]))
    router.push({name: 'home'})
}
</script>
<template>
    <main>
        <div class="mb-3">
            <h1>Add student</h1>
        </div>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" id="name" placeholder="name">
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Age</label>
                <input v-model="age" type="text" class="form-control" id="age" placeholder="age">
            </div>
            <div class="mb-3">
                <label for="gender" class="form-label">Gender</label>
                <input v-model="gender" type="text" class="form-control" id="gender" placeholder="gender">
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input v-model="address" type="text" class="form-control" id="address" placeholder="address">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input v-model="phone" type="text" class="form-control" id="phone" placeholder="phone">
            </div>
            <div class="mb-3">
                <button @click="handleAddStudent" type="button" class="btn btn-primary">Save</button>
            </div>
        </form>
    </main>
</template>
<style>
main {
    padding: 32px;
}

h1 {
    text-align: center;
    color: blue;
}

form {
    width: 500px;
    margin: auto;
}
</style>