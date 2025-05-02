<script setup lang="ts">
import { ref } from "vue";
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const fullName = ref("");
const phone = ref("");
const accountType = ref("");

const errors = ref<{
  email: string;
  password: string;
  fullName: string;
  phone: string;
  accountType: string;
  confirmPassword: string;
}>({
  email: "",
  password: "",
  fullName: "",
  phone: "",
  accountType: "",
  confirmPassword: "",
});
function onSubmit() {
  errors.value.email = email.value ? "" : "Email is required";
  errors.value.password = password.value ? "" : "Password is required";
  errors.value.phone = phone.value ? "" : "Phone is required";
  errors.value.confirmPassword = confirmPassword.value
    ? ""
    : "Please confirm your password";
  errors.value.fullName = fullName.value ? "" : "Please enter your full name";
  errors.value.accountType = accountType.value
    ? ""
    : "Please select an account type";

  let condition1 =
    !errors.value.email &&
    !errors.value.password &&
    !errors.value.accountType &&
    !errors.value.confirmPassword &&
    !errors.value.phone &&
    !errors.value.fullName;

  if (condition1 && password.value === confirmPassword.value) {
    console.log("user ready to be authenticated");
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-[100vh]">
    <AuthCard class="flex justify-center w-full items-center">
      <form @submit.prevent="onSubmit" class="flex flex-col gap-y-5 w-full">
        <BaseInput
          v-model="fullName"
          label="Full Name"
          placeholder="Enter your fullname"
          :error="errors.fullName"
        />
        <BaseInput
          v-model="email"
          label="Email"
          placeholder="Enter your email"
          :error="errors.email"
        />
        <BaseInput
          v-model="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          :error="errors.phone"
        />

        <div>
          <label for="accountType"> Account Type</label>
          <select
            v-model="accountType"
            name="accountType"
            id="accountType"
            :class="[
              'w-full px-4 py-2 border rounded-md focus:outline-none transition',
              errors.accountType
                ? 'border-red-500'
                : 'border-gray-300 focus:ring-2 focus:ring-blue-400',
              disabled ? 'bg-gray-100 cursor-not-allowed' : '',
            ]"
          >
            <option value="business">Business</option>
            <option value="individual">individual</option>
          </select>
        </div>

        <BaseInput
          v-model="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          :error="errors.password"
        />
        <BaseInput
          v-model="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          :error="errors.confirmPassword"
        />
        <button
          type="submit"
          class="w-full rounded-xl cursor-pointer hover:bg-blue-500 transition-colors duration-200 ease-in bg-blue-400 py-4 text-white"
        >
          Register
        </button>
      </form>
    </AuthCard>
  </div>
</template>
