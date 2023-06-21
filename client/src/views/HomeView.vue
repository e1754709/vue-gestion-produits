<template>
  <div>
    <button class="toggle-button" :class="{'blue': !showAddForm, 'red': showAddForm}" @click="toggleAddForm">
      {{ showAddForm ? 'Close' : 'Open' }}
    </button>
    <AddForm
      v-if="showAddForm"
      :toggle="toggleAddForm"
      :addProduct="addProduct"
    />
    <div v-for="(product, index) in inventory" :key="index">
      <SingleProduct
        :product="product"
        :index="index"
        :updateProduct="updateProduct"
        :removeProduct="removeProduct"
      />
    </div>
  </div>
</template>

<script>
import SingleProduct from '@/components/SingleProduct.vue'
import AddForm from '@/components/AddForm.vue'
import ProductDataService from '@/services/ProductDataService'

export default {
  components: {
    SingleProduct,
    AddForm
  },
  data () {
    return {
      showAddForm: false,
      inventory: [],
      title: 'Gestion de produits'
    }
  },
  methods: {
    toggleAddForm () {
      this.showAddForm = !this.showAddForm
    },
    addProduct (product) {
      ProductDataService.create(product)
        .then(response => {
          product.id = response.data.id
          this.inventory.push(product)
          this.showAddForm = false
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateProduct (updatedProduct, index) {
      console.log(updatedProduct)
      ProductDataService.update(updatedProduct.id, updatedProduct)
        .then(response => {
          this.inventory[index].name = updatedProduct.name
          this.inventory[index].description = updatedProduct.description
          this.inventory[index].price = updatedProduct.price
          this.inventory[index].category = updatedProduct.category
          this.inventory[index].image = updatedProduct.image
        })
        .catch(error => {
          console.log(error)
        })
    },
    removeProduct (product) {
      const index = this.inventory.findIndex(p => p.id === product.id)
      if (index !== -1) {
        ProductDataService.delete(product.id)
          .then(response => {
            this.inventory.splice(index, 1)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    fetchInventory () {
      ProductDataService.getAll()
        .then(response => {
          this.inventory = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.fetchInventory()
  }
}
</script>

<style>
.blue {
  background-color: blue;
  color: white;
}

.red {
  background-color: red;
  color: white;
}

.toggle-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
</style>
