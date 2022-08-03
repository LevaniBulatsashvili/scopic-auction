import { createCompoundExpression } from '@vue/compiler-core'
import { defineStore } from 'pinia'
import productData from './Data/productData'

export const useProductStore = defineStore('product', {
  id: 'product',

  state: () => {
    return {
      user: {
        name: null,
        imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        isAdmin: false
      },
       products: productData,
       currentProduct: {}
    }
  },

  actions: {
    registerUser(user, isAdmin) {
      this.user.name = user
      this.user.isAdmin = isAdmin
    },

    logoutUser() {
      this.user.name = null
      this.user.isAdmin = false
    },

    setCurrentProduct(Product) {
      this.currentProduct = Product
    },

    bidOnCurrentProduct(newPrice) {
      const product = this.currentProduct

      product.price = newPrice
      product.highestBidder = this.user.name
      // if less than 5mins left extend bid by 1min
      if (product.endsIn - Date.now() < 300000) product.endsIn += 60000
    },

    changeToInactive() {
      this.currentProduct.isActive = false
    },

    addProduct(name, imageUrl, summary, description, price, endsIn) {
      const products = this.products
      const product = {
        name,
        imageUrl,
        summary,
        description,
        price,
        highestBidder: '',
        isActive: true,
        endsIn,
      }

      if (products[products.length - 1].length > 9) {
        product.id = products.length * 10 + 1
        products.push([product])
      }
      else {
        product.id = (products.length - 1) * 10 + products[products.length - 1].length + 1
        products[products.length - 1].push(product)
      }
    },

    editProduct(name, imageUrl, summary, description, price, endsIn) {
      this.currentProduct.name = name
      this.currentProduct.imageUrl = imageUrl
      this.currentProduct.summary = summary
      this.currentProduct.description = description
      this.currentProduct.price = price
      this.currentProduct.endsIn = endsIn
    }
  },

  getters: {
    filterProducts: (state) => {
      return (productToKeep, pageOn) => {
        const allProducts = [...state.products]
        allProducts[pageOn] = allProducts[pageOn].filter(product => product.name.toLowerCase().includes(productToKeep.toLowerCase()) || product.summary.toLowerCase().includes(productToKeep.toLowerCase()))
        return allProducts
      }
    }
  }
})