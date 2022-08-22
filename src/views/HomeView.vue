<template>
  <div class="home bg-white">
    <div class="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 ">
      <div class="space-y-12">
      <div class="w-full">
        <label for="search" class="sr-only">Search</label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input v-model="searchBar" @input="filtercurrentPageProducts" id="search" name="search" class="block w-full border-[whitesmoke]  border-[3px] focus:border-white rounded-md py-2 pl-10 pr-3 text-sm  sm:text-sm" placeholder="Search" type="search" />
        </div>
      </div>
      <span class="relative z-0 flex justify-end  rounded-md">
    <button @click="sortAuction('')" type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">Price: Low to Hight</button>
    <button @click="sortAuction('-')" type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">Price: Hight to Low</button>
  </span>
        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          <li v-for="product in displayedProducts" :key="product._id">
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <img class="object-cover shadow-lg rounded-lg" :src="product.imageUrl" alt="" />
              </div>
              <div class="space-y-2">
                <div class="flex justify-between items-center text-lg leading-6 font-medium space-y-1">
                  <div>
                    <h3>{{ product.name }}</h3>
                    <p :title=product.summary class="text-indigo-600 whitespace-nowrap overflow-ellipsis overflow-hidden max-w-[250px]">{{ product.summary }}</p>
                    
                  </div>
                </div>
                <div class="flex items-center justify-between px-2">
                  <span :title=product.price class="text-indigo-600 whitespace-nowrap overflow-ellipsis overflow-hidden max-w-[250px]">${{ product.price }}</span>
                <router-link @click="setCurrentProductId(product._id)" to="/product"><button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap">Bid now</button></router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-[20px]">
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
          </div>
          <div>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button @click="router.push(`/home/page/${pageId - 1}`)" :disabled="pageId === 1" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Previous</span>
                <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
              </button>

              <div v-for="index in totalPages" :key="index">
                <router-link :to="`/home/page/${index}`" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> {{ index }} </router-link>
              </div>

              <button @click="router.push(`/home/page/${pageId + 1}`)" :disabled="pageId == totalPages" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Next</span>
                <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import fetchProducts from '../composables/fetchProducts'

const router = useRouter()
if(!sessionStorage.name) router.push('/')
const searchBar = ref('')
const route = useRoute()
const pageId = Number(route.params.id)

const allProducts = ref([])
const displayedProducts = ref([])
let totalPages = ref(1)
fetchProducts(`page=${pageId}`).then(products => {
  allProducts.value = products.data.data.items
  displayedProducts.value = products.data.data.items
})
fetchProducts(`limit=100`).then(products => totalPages.value = (Math.ceil(products.data.resaults/10)))

const filtercurrentPageProducts = () => {
  const productToKeep = searchBar.value
  displayedProducts.value = allProducts.value.filter(product => product.name.toLowerCase().includes(productToKeep.toLowerCase()) || product.summary.toLowerCase().includes(productToKeep.toLowerCase()))
}

const setCurrentProductId = (id) => {
  sessionStorage.setItem('currentProductId', id)
}

const sortAuction = (order) => {
  fetchProducts(`page=${pageId}&sort=${order}price`).then(sortedProducts => displayedProducts.value = sortedProducts.data.data.items)
}

</script>

<style scoped>
  .home {
    min-height: 64.1vh;
  }
</style>