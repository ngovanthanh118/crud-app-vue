<script setup>
import users from '../data/index.js'
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const index = ref('');
const name = ref('');
const age = ref('');
const gender = ref('');
const address = ref('');
const email = ref('');
const phone = ref('');
onMounted(() => {
    const getLocalStorage = JSON.parse(window.localStorage.getItem("students"));
    const findStudentById = getLocalStorage.find(std => std.id === +route.params.id);
    index.value = getLocalStorage.indexOf(findStudentById);
    name.value = findStudentById.name;
    age.value = findStudentById.age;
    gender.value = findStudentById.gender;
    address.value = findStudentById.address;
    email.value = findStudentById.email;
    phone.value = findStudentById.phone;

})
const handleUpdateStudent = (id) => {
    const getLocalStorage = JSON.parse(window.localStorage.getItem("students"));
    const payload = {
        id: +route.params.id,
        name: name.value,
        age: +age.value,
        gender: gender.value,
        address: address.value,
        email: email.value,
        phone: phone.value,
    }
    getLocalStorage.splice(+index.value, 1, payload);
    window.localStorage.setItem("students", JSON.stringify(getLocalStorage));
    router.push({ path: '/' })
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
                <button @click="handleUpdateStudent" type="button" class="btn btn-primary">Save changes</button>
            </div>
        </form>
    </main>

</template>