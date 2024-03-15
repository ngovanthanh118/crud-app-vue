<script setup>
import { onMounted, ref } from 'vue';
import users from '../data/index.js';
const students = ref([]);
onMounted(() => {
  loadStudents();
})
const loadStudents = () => {
  students.value = JSON.parse(window.localStorage.getItem("students"));
}
const handleDelete = (id) => {
  const getLocalStorage = JSON.parse(window.localStorage.getItem("students"));
  const findStudentById = getLocalStorage.find(std => std.id === id);
  const indexOf = getLocalStorage.indexOf(findStudentById);
  const isConfirm = window.confirm("Do you want to delete this student?");
  if (isConfirm) {
    if (indexOf > -1) {
      getLocalStorage.splice(indexOf, 1);
      window.localStorage.setItem("students", JSON.stringify(getLocalStorage));
      alert("Delete student successfully!");
      loadStudents();
    } else {
      alert("Does not exist this student!!!");
    }
  }
}
</script>
<template>
  <main>
    <table class="table caption-top">
      <caption>
        Manager Student App
        <RouterLink
          style="text-decoration: none; background-color: blue; padding: 12px 16px; color: white; border-radius: 18px;"
          to="/students/create">
          Add student
        </RouterLink>
      </caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Phone</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-if="this.student.length === 0" style="text-align: center;">
          <td colspan="8">Does not exist students!!!</td>
        </tr> -->
        <tr v-for="(student, index) in students" :key="index">
          <th scope="row">{{ student.id }}</th>
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.gender }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.address }}</td>
          <td>{{ student.phone }}</td>
          <td style="display: flex; align-items: center; gap: 12px;font-size: 18px;">
            <RouterLink :to="{ path: '/students/' + student.id + '/edit' }"><i style="color: blue; "
                class="fa-solid fa-pen-to-square"></i>
            </RouterLink>
            <div style="cursor: pointer;" @click="() => handleDelete(student.id)">
              <i style="color: red;" class="fa-solid fa-trash-can"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  </main>
</template>
<style>
caption {
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: red;
  margin-top: 12px;
}
</style>
