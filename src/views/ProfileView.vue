<template>
  <div class="profile mx-20 flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y text-center divide-gray-200">
              <tr v-for="item in items" :key="item._id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ item.name }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="`${item.color} ${item.backgroundColor}`" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"> {{ item.status }} </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue-demi';
import { useRouter } from 'vue-router';
import fetchProducts from '../composables/fetchProducts';

if(!sessionStorage.name) useRouter().push('/')
const items = ref([])

fetchProducts('limit=100').then(products => {
  const checkIfUserBidOnProduct = products.data.data.items.filter(product => product.bidHistory.includes(sessionStorage.name))
  items.value = checkIfUserBidOnProduct.map(product => {
    product.status = product.isActive ? 'Pending' : product.highestBidder === sessionStorage.name ? 'Won' : 'Lost'
    product.color = product.isActive ? 'text-yellow-800' : product.highestBidder === sessionStorage.name ? 'text-green-800' : 'text-red-800'
    product.backgroundColor = product.isActive ? 'bg-orange-200' : product.highestBidder === sessionStorage.name ? 'bg-green-200' : 'bg-red-200'
    return product
  })
})

</script>

<style scoped>
  .profile {
    min-height: 64.1vh;
  }
</style>