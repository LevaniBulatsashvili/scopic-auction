<template>
  <div class="admin bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
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
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Auction</h2>
      </div>
      <div class="mt-12">
        <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div class="sm:col-span-2">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <div class="mt-1">
              <input ref="auctionName" v-model="state.name" type="text" name="name" id="name" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
            </div>
            <span v-for="error in v$.name.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
          </div>

          <div class="sm:col-span-2">
            <label for="summery" class="block text-sm font-medium text-gray-700">Summery</label>
            <div class="mt-1">
              <input v-model="state.summary" id="summery" name="summery" type="text" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
            </div>
            <span v-for="error in v$.summary.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
          </div>

          <div>
            <label for="price" class="block text-sm font-medium text-gray-700">USD</label>
            <div class="mt-1">
              <input v-model="state.price" placeholder="Min. $10" type="number"  name="price" id="price" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
            </div>
            <span v-for="error in v$.price.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
          </div>

          <div>
            <label for="expires" class="block text-sm font-medium text-gray-700">Expires in Hr.</label>
            <div class="mt-1">
              <input v-model="state.hours" type="number" placeholder="1-720Hr " name="expires" id="expires" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
            </div>
            <span v-for="error in v$.hours.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
          </div>

          <div class="sm:col-span-2">
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <div class="mt-1">
              <textarea v-model="state.description" id="description" name="description" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" />
            </div>
            <span v-for="error in v$.description.$errors" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
          </div>

          <div class="sm:col-span-2">
          </div>
          <div class="sm:col-span-2">
            <button @click.prevent="createOrUpdateAuction"  type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import useVuelidate from '@vuelidate/core'
  import { required, minLength, maxLength, minValue, maxValue } from '@vuelidate/validators'
  import {onMounted, ref, reactive} from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { Notyf } from 'notyf'
  import 'notyf/notyf.min.css'
  import axios from 'axios'

  const router = useRouter()
  if(!sessionStorage.name) router.push('/')
  const notyf = new Notyf()
  const url = 'http://localhost:3001/api/v1/items'

  // editing or creating auction
  const type = useRoute().params.type

  const state = reactive({
        name: '',
        imageUrl: `https://picsum.photos/10${Math.round(Math.random()*89) + 10}/10${Math.round(Math.random()*89) + 10}`,
        summary: '',
        description: '',
        price: '',
        hours: '',
      },) 

  const rules = {
    name: { required, minLength: minLength(3), maxLength: maxLength(20) },
    summary: { required, minLength: minLength(5), maxLength: maxLength(60) },
    description: { required,  minLength: minLength(10), maxLength: maxLength(400) },
    price: { required,  minValue: minValue(10), maxValue: maxValue(100000) },
    hours: { required, minValue: minValue(1),  maxValue: maxValue(720) },
  }

  const v$ = useVuelidate(rules, state)

  const auctionName = ref(null);
  if (type === 'edit') {
    axios.get(`${url}/${sessionStorage.currentProductId}`)
        .then(auction => {
          const data = auction.data[0]
          state.name = data.name
          state.summary = data.summary,
          state.description = data.description,
          state.price = data.price
        })
        .catch(err => console.log(err))
  }
  const createOrUpdateAuction = async () => {
    const result = await v$.value.$validate()

    if (result) {
      const date = new Date(new Date().getTime() + state.hours * 3600000)
      const data = {
          username: 'admin1',
          name: state.name,
          imageUrl: `https://picsum.photos/10${Math.round(Math.random()*89) + 10}/10${Math.round(Math.random()*89) + 10}`,
          summary: state.summary,
          description: state.description,
          price: state.price,
          highestBidder: 'None',
          isActive: true,
          endsIn: date
        }

      // Editing existing auction
      if (type === 'edit' ) {
        axios.put(`${url}/${sessionStorage.currentProductId}`, data)
        .then(() => {
          notyf.success('auction succesfully updated')
          router.push('/home/page/1')
        })
        .catch(err => console.log(err))
      }
      // creating new auction
      else {
        axios.post(url, data)
        .then(auction => {
          notyf.success('New auction successfully added!');
          router.push(`/home/page/1`)
        })
        .catch(err => console.log(err))
      }
    }
    else {
      notyf.error('please fill in the form')
    }
  }
  
  onMounted(() => {
    auctionName.value.click()
    auctionName.value.focus()
  })
</script>

<style scoped>
  .admin {
    min-height: 64.1vh;
  }
</style>