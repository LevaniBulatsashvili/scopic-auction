<template>
  <div class="autoBid bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
      <svg class="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <svg class="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
        <defs>
          <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
      </svg>
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Auto-Bid Configuration</h2>
      </div>
      <div class="mt-12">
        <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

          <div>
            <label for="maxBid" class="block text-sm font-medium text-gray-700">MAX BID</label>
            <div class="mt-1">
              <input ref="maxBid" v-model="state.maxBid" placeholder="USD" type="number"  name="maxBid" id="maxBid" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
            </div>
            <span v-for="error in v$.maxBid.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
          </div>

          <div>
            <label for="alert" class="block text-sm font-medium text-gray-700">ALERT</label>
            <div class="mt-1">
              <input v-model="state.alert" placeholder="%" type="number"  name="alert" id="alert" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
            </div>
            <span v-for="error in v$.alert.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
          </div>

          <div class="sm:col-span-2">
          </div>
          <div class="sm:col-span-2">
            <button @click.prevent="configureAutoBid"  type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import useVuelidate from '@vuelidate/core'
  import { required, minValue, maxValue } from '@vuelidate/validators'
  import {ref, onMounted, reactive} from 'vue'
  import { Notyf } from 'notyf';
  import 'notyf/notyf.min.css';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  if(!sessionStorage.name) router.push('/')
  const notyf = new Notyf();

  const state = reactive({
    maxBid: '',
    alert: '',
  }) 
  const rules = {
    maxBid: { required,  minValue: minValue(1), maxValue: maxValue(100000) },
    alert: { minValue: minValue(1),  maxValue: maxValue(100) },
  }

  const v$ = useVuelidate(rules, state)

  const maxBid = ref(null);

  const configureAutoBid = async () => {
    const result = await v$.value.$validate()

    if (result) {
      sessionStorage.maximumBiddingMoney = state.maxBid
      sessionStorage.moneyInBids = 0
      if (state.alert) sessionStorage.alert = state.alert
      notyf.success('Autobid succesfully configured')
      router.push('/home/page/1')
    }
    else {
      notyf.error('please fill in the form')
    }
  }

  onMounted(() => {
    maxBid.value.click()
    maxBid.value.focus()
  })
</script>

<style scoped>
  .autoBid {
    min-height: 64.1vh;
  }
</style>