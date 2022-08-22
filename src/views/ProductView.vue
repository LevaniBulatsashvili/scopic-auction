<template>
  <div class="product bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <div class="lg:max-w-lg lg:self-end">
        <div class="mt-4">
          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ currentProduct.name }}</h1>
          <div class="flex gap-5 mt-3 items-center">
            <div class="text-2xl ">Auto bid</div>
            <Switch class="" @click="toggleAutoBid" v-model="autoBidEnabled" :class="[autoBidEnabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
              <span class="sr-only">Use setting</span>
              <span aria-hidden="true" :class="[autoBidEnabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
            </Switch>
          </div>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">${{ currentProduct.price }}</p>
          </div>

          <div class="mt-4 space-y-6">
            <p class="text-base text-gray-500 break-words">{{ currentProduct.description }}</p>
          </div>

        </section>
      </div>
      <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
        <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <img :src="currentProduct.imageUrl" :title="currentProduct.name" class="w-full h-full object-center object-cover" />
        </div>
      </div>
      <div class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" class="sr-only">Product options</h2>
          <div class="text-indigo-800 text-[21px] mb-2">Bidding history</div>
          <div class="flex uppercase ">
            <div v-for="(bid, index) in biddingHistory" :key="index"><h1>{{ bid }} <span v-if="index !== 3">&#8592;</span></h1></div>
          </div>
          <form>
            <div class="mt-2">
              Highest Bidder: <span class="uppercase whitespace-nowrap">{{ currentProduct.highestBidder === '' ? 'None' : currentProduct.highestBidder }}</span>
            </div>
            <div>
              <RadioGroup >
                <div class="mt-1 flex justify-between gap-4 ">
                  <RadioGroupOption as="template" v-for="bid in bids" :key="bid.name" :value="bid" v-slot="{ active, checked }">
                    <div class="relative block p-2 focus:outline-none">
                      <RadioGroupLabel as="p" class="text-base font-medium text-gray-900">
                        {{ bid.name }}
                      </RadioGroupLabel>
                      <RadioGroupDescription as="p" class="mt-1 text-sm text-gray-500">
                        {{ bid.description }}
                      </RadioGroupDescription>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
            <div class="mt-10">
              <button @click.prevent="toggleBidModal" :disabled="bidTime === 'expired' ? true : false" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Place a bid</button>
            </div>
            <div class="mt-5">
              <router-link to="/administration/edit" v-if="user.name === 'admin1' || user.name === 'admin2'" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Edit</router-link>
            </div>
            <div class="mt-5">
              <button @click.prevent="toggleDeleteBidModal" v-if="user.name === 'admin1' || user.name === 'admin2'" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Delete</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
  <TransitionRoot as="template" :show="openBidmodal">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="openBidmodal = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <div class="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900"> Bidding </DialogTitle>
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700">USD</label>
            <div class="mt-1">
              <input v-model="state.outBidBy" type="number"  name="price" id="price" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
            </div>
            <span v-for="error in v$.outBidBy.$errors" :hidden="bidInProgress" :key="error.$uid" class="text-red-500">{{ error.$message }}</span>
          </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button @click.prevent="placeABid" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm" @click="open = false">Place Bid</button>
              <button @click.prevent="toggleBidModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm" @click="open = false" ref="cancelButtonRef">Cancel</button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <TransitionRoot as="template" :show="openDeleteModal">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="openDeleteModal = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <div class="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900"> Delete this Auction? </DialogTitle>
              </div>
            </div>
            <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button @click.prevent="deleteAuction" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm" @click="open = false">Delete</button>
              <button @click.prevent="toggleDeleteBidModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm" @click="open = false" ref="cancelButtonRef">Cancel</button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption, Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'
import { Switch } from '@headlessui/vue'
import useVuelidate from '@vuelidate/core'
import { required, minValue, maxValue } from '@vuelidate/validators'
import { onUnmounted, ref, reactive, computed } from 'vue-demi'
import { useRouter } from 'vue-router'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import fetchProduct from '../composables/fetchProuct'
import updateProduct from '../composables/updateProduct'
import deleteProduct from '../composables/deleteProduct'
import calculateBidTimeLeft from '../utils/calculateBidTimeLeft'

const router = useRouter()
if(!sessionStorage.name) router.push('/')

const autoBidEnabled = ref(false)
const openBidmodal = ref(false)
const openDeleteModal = ref(false)
const bidInProgress = ref(false)
const currentProduct = ref('')
const notyf = new Notyf()

const user = reactive({
  name: sessionStorage.name,
  maximumBiddingMoney: sessionStorage.maximumBiddingMoney,
  isAdmin: sessionStorage.isAdmin,
})

const highestBid = ref('')
const biddingHistory = ref([])
const bidExperationDate = ref('')
const bidTime = ref('-- : -- : -- : --')
const bids = [
  { name: 'Last bid made', description: highestBid },
  { name: 'Time Left', description: bidTime }
]
let updateCountdown
let autoBid

// Validation
const state = reactive({
    outBidBy: ''
  }) 
const rules = computed(() => ({
  outBidBy: { required, minValue: minValue(currentProduct.value.price + 1), maxValue: maxValue(100000) },
}))
const v$ = useVuelidate(rules, state)

// Refresh Timer
const biddingTimeLeft = async () => {
  bidTime.value = calculateBidTimeLeft(bidExperationDate.value)

  if(bidTime.value === 'expired') {
    await updateProduct(sessionStorage.currentProductId, { isActive: false })
    clearInterval(updateCountdown)
  }
}

// Fetch Product
const fetchAuction = () => {
  fetchProduct(sessionStorage.currentProductId)
  .then(product => {
    const data = product.data.data.item
    currentProduct.value = data
    highestBid.value = data.price
    biddingHistory.value = data.bidHistory.slice(0, 4)
    bidExperationDate.value = data.endsIn
    if(!state.outBidBy) state.outBidBy = data.price + 1
    if(!updateCountdown) {
      updateCountdown = setInterval(biddingTimeLeft, 1000)
      biddingTimeLeft()
    }
  })
  .catch(err => console.log(err))
}

fetchAuction()
const refreshProduct = setInterval(fetchAuction, 1000)

// Bidding
const placeABid = async () => {
  const result = await v$.value.$validate()
  if(user.name === currentProduct.value.highestBidder) {
    notyf.error('You are the highest bidder')
    openBidmodal.value = false
    return
  }
  if (result) {
    bidInProgress.value = true
    setTimeout(() => bidInProgress.value = false, 400)
    const product = await updateProduct(sessionStorage.currentProductId, { price: state.outBidBy, highestBidder: user.name, bidHistory: [user.name, ...currentProduct.value.bidHistory] })
    const data = product.data.data.item

    openBidmodal.value = false
    currentProduct.value = data
    highestBid.value = data.price
    biddingHistory.value= data.bidHistory.slice(0, 4)
    notyf.success('Bid was succesfull')
  }
}

// AutoBid
const toggleAutoBid = () => {
  if(!autoBidEnabled.value && bidTime.value !== 'expired') {
    let warn = true
    autoBid = setInterval(() => {
      if(currentProduct.value.highestBidder !== user.name && currentProduct.value.price < user.maximumBiddingMoney) {
        state.outBidBy = currentProduct.value.price + 1
        sessionStorage.moneyInBids = state.outBidBy
        placeABid()
        if((sessionStorage.moneyInBids / sessionStorage.maximumBiddingMoney) > (sessionStorage.alert / 100) && warn) {
          warn = false
          notyf.error(`You\'ve used more than ${sessionStorage.alert}% of your bidding money`)
        }
      }
      else if (currentProduct.value.highestBidder !== user.name){
        sessionStorage.moneyInBids = 0
        notyf.error('You\'ve run out of bidding money')
        clearInterval(autoBid)
      }
      else if (bidTime.value === 'expired') {
        if (currentProduct.value.highestBidder === user.name) {
          sessionStorage.maximumBiddingMoney -= sessionStorage.moneyInBids
          notyf.success('Congradulations on your new Item')
        }
        sessionStorage.moneyInBids = 0
        clearInterval(autoBid)
      }
    }, 5000)
  }
  else if (bidTime.value === 'expired') notyf.error('This bid is expired')
  else {
    clearInterval(autoBid)
    notyf.error('Autobid deactivated')
  }
}

const deleteAuction = async () => {
  await deleteProduct(sessionStorage.currentProductId)
  router.push('/home/page/1')
}

const toggleBidModal = () => {
  openBidmodal.value = !openBidmodal.value
}

const toggleDeleteBidModal = () => {
  openDeleteModal.value = !openDeleteModal.value
}

onUnmounted(() => {
  clearInterval(updateCountdown)
  clearInterval(refreshProduct)
  clearInterval(autoBid)
})

</script>

<style scoped>
  .product {
    min-height: 64.1vh;
  }
</style>