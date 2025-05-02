<script setup lang="ts">
import { ref } from "vue";
const email = ref("");
const password = ref("");
const errors = ref<{ email: string; password: string }>({
  email: "",
  password: "",
});
function onSubmit() {
  errors.value.email = email.value ? "" : "Email is required";
  errors.value.password = password.value ? "" : "Password is required";

  if (!errors.value.email && !errors.value.password) {
    console.log("user ready to be authenticated");
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-[100vh]">
    <AuthCard class="flex justify-center w-full items-center">
      <form @submit.prevent="onSubmit" class="flex flex-col gap-y-5 w-full">
        <BaseInput
          v-model="email"
          label="Email"
          placeholder="Enter your email"
          :error="errors.email"
        />

        <BaseInput
          v-model="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          :error="errors.password"
        />
        <button
          type="submit"
          class="w-full rounded-xl cursor-pointer hover:bg-blue-500 transition-colors duration-200 ease-in bg-blue-400 py-4 text-white"
        >
          Login
        </button>
      </form>
    </AuthCard>
  </div>
</template>
