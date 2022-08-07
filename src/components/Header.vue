<template>
  <Popover as="template" v-slot="{ open }">
    <header class="bg-[#0B82D4] pl-[30px] shadow-sm lg:static lg:overflow-y-visible">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="relative flex justify-between  h-[70px]">
          <div class="flex items-center">
            <router-link class="flex justify-center mr-[2%] hover:animate-none animate-pulse" to="/home/page/1">
               <img class="h-12 w-auto scale-150" src="../assets/scopic/Scopic-Logo-Horizontal-White-small.png" alt="Scopic"/>
            </router-link>
          </div>

          <div class="flex items-center justify-end col-span-4">
            <!-- Profile dropdown -->
            <router-link v-if="user.name" to="/autoBid" class="text-white">Auto-Bid</router-link>
            <Menu v-if="user.name" as="div" class="flex-shrink-0 relative ml-5">
              <div>
                <MenuButton class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="user" :title="user.name"/>
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100"
                          enter-from-class="transform opacity-0 scale-95"
                          enter-to-class="transform opacity-100 scale-100"
                          leave-active-class="transition ease-in duration-75"
                          leave-from-class="transform opacity-100 scale-100"
                          leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                  <MenuItem v-if=" user.name !== 'admin1' && user.name !=='admin2'" v-for="(item) in userNavigation" :key="item.name" v-slot="{ active }">
                    <a @click.prevent="item.onClick" :class="[active ? 'bg-gray-100' : '', 'block py-2 px-4 text-sm text-gray-700']">
                      {{ item.name }}
                    </a>
                  </MenuItem>
                  <MenuItem v-else v-for="(item) in adminNavigatin" :key="item.name" v-slot="{ active }">
                    <a @click.prevent="item.onClick" :class="[active ? 'bg-gray-100' : '', 'block py-2 px-4 text-sm text-gray-700']">
                      {{ item.name }}
                    </a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  </Popover>
</template>

<script setup>
import {Menu, MenuButton, MenuItem, MenuItems, Popover,} from '@headlessui/vue'
import { useRouter } from 'vue-router'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { reactive } from 'vue';

const router = useRouter()
const user = reactive({
  name: sessionStorage.name,
  imageUrl: sessionStorage.imageUrl,
  isAdmin: sessionStorage.isAdmin,
})
const notyf = new Notyf();

const createAuction = () => {
  if (user.isAdmin) {
    router.push('/administration/create')
  }
  else {
    notyf.error('only admins are allowed to create auctions')
  }
}

const logout = () => {
  sessionStorage.removeItem('name')
  sessionStorage.removeItem('imageUrl')
  sessionStorage.removeItem('isAdmin')
  sessionStorage.removeItem('alert')
  sessionStorage.removeItem('maximumBiddingMoney')
  sessionStorage.removeItem('moneyInBids')
  user.name = ''
  user.imageUrl = ''
  user.isAdmin = false
  router.push('/')
}

const userNavigation = [
  { name: 'Sign out', onClick: logout},
]
const adminNavigatin = [
  { name: 'Create Auction', onClick: createAuction },
  { name: 'Sign out', onClick: logout},
]

</script>