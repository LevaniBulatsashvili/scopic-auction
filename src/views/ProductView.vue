<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <div class="mt-4">
          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ product.name }}</h1>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">${{ product.price }}</p>
          </div>

          <div class="mt-4 space-y-6">
            <p class="text-base text-gray-500 break-words">{{ product.description }}</p>
          </div>

        </section>
      </div>

      <!-- Product image -->
      <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
        <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <img :src="product.imageUrl" :title="product.name" class="w-full h-full object-center object-cover" />
        </div>
      </div>

      <!-- Product form -->
      <div class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" class="sr-only">Product options</h2>

          <form>
            <div>
              <span>Highest Bidder: {{ product.highestBidder === '' ? 'None' : store.currentProduct.highestBidder }}</span>
            </div>
            <div>
              <!-- Size selector -->
              <RadioGroup >
                <!-- <RadioGroupLabel class="block text-sm font-medium text-gray-700"> Bids </RadioGroupLabel> -->
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
              <button @click.prevent="toggleModal" :disabled="bidTime === 'expired' ? true : false" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Place a bid</button>
            </div>
            <div class="mt-5">
              <button @click.prevent="editBid" v-if="store.user.isAdmin" class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Edit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
  <!-- modal -->
  <TransitionRoot as="template" :show="openBidmodal">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="openBidmodal = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
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
              <button @click.prevent="toggleModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm" @click="open = false" ref="cancelButtonRef">Cancel</button>
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
import useVuelidate from '@vuelidate/core'
import { required, minValue, maxValue } from '@vuelidate/validators'
import { onUnmounted, ref, reactive, computed } from 'vue-demi'
import { useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const router = useRouter()
const store = useProductStore()
const product = store.currentProduct
const notyf = new Notyf()

const openBidmodal = ref(false)
const highestBid = ref(product.price)
const bidExperationDate = ref(product.endsIn)
const bidTime = ref('-- : -- : --')
const outBidBy = ref(product.price + 1)
const bidInProgress = ref(false)

const bids = [
  { name: 'Last bid made', description: highestBid },
  { name: 'Time Left', description: bidTime }
]

const state = reactive({
    outBidBy: product.price + 1
  }) 
const rules = computed(() => ({
  outBidBy: { required, minValue: minValue(product.price + 1), maxValue: maxValue(100000) },
}))

const v$ = useVuelidate(rules, state)

const placeABid = async () => {
  const result = await v$.value.$validate()
  if(store.user.name === product.highestBidder) {
    notyf.error('You are the highest bidder')
    openBidmodal.value = false
    return
  }
  if (result) {
      bidInProgress.value = true
      setTimeout(() => bidInProgress.value = false, 300)
      store.bidOnCurrentProduct(state.outBidBy)
      openBidmodal.value = false
      highestBid.value = product.price
       // if bid time extended
      bidExperationDate.value = product.endsIn
      notyf.success('Bid was succesfull')
    }
}

const toggleModal = () => {
  openBidmodal.value = !openBidmodal.value
}

const biddingTimeLeft = () => {
  const timeLeft = bidExperationDate.value - Date.now()
    if(timeLeft > 0) {
      let hours = new Date(timeLeft).getHours() - 4
      let minutes = new Date(timeLeft).getMinutes()
      let seconds = new Date(timeLeft).getSeconds()

      hours < 10 ? hours = '0' + hours : null
      minutes < 10 ? minutes = '0' + minutes : null
      seconds < 10 ? seconds = '0' + seconds : null

      bidTime.value = `${hours}:${minutes}:${seconds}`
    }
    else {
        bidTime.value = 'expired'
        store.changeToInactive()
        clearInterval(updateCountdown)
    }
}

const updateCountdown = setInterval(biddingTimeLeft, 1000)
biddingTimeLeft()

const editBid = () => {
  router.push('/administration/edit')
}

onUnmounted(() => clearInterval(updateCountdown))

</script>
