<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-[20px]">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-white text-2xl font-extrabold">Sign in to your account</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="userName" class="block text-sm font-medium text-gray-700"> User Name </label>
            <div class="mt-1">
              <input v-model="state.userName" id="userName" name="userName" type="text" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>
          <span v-for="error in v$.userName.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
            <div class="mt-1">
              <input v-model="state.password" id="password" name="password" type="password" autocomplete="current-password" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>
          <span v-for="error in v$.password.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>

        <fieldset class="space-y-5">
          <div class="relative flex items-start">
            <div class="flex items-center h-5">
              <input v-model="state.isAdmin" id="admin" aria-describedby="admin" name="admin" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            </div>
            <div class="ml-3 text-sm">
              <label for="admin" class="font-medium text-gray-700">Admin</label>
            </div>
          </div>
        </fieldset>

          <div>
            <button @click.prevent="signIn" type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0B82D4] opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import useVuelidate from '@vuelidate/core'
  import { required, minLength } from '@vuelidate/validators'
  import { reactive } from 'vue-demi'
  import { useRouter } from 'vue-router'
  import { useProductStore } from "../stores/product"

  const store = useProductStore()
  const router = useRouter()

  const state = reactive({
    userName: '',
    password: '',
    isAdmin: false,
  }) 
  const rules = {
    userName: { required, minLength: minLength(4) },
    password: { required, minLength: minLength(4) },
  }

  const v$ = useVuelidate(rules, state)

  const signIn = async () => {
    const result = await v$.value.$validate()

    if (result) {
      store.registerUser(state.userName, state.isAdmin)
      router.push('/home/page/1')
    }
  }

</script>