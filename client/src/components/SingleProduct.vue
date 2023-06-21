<template>
  <div class="product">
    <div class="product-content">
      <div>
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.category }}</p>
        <span>{{ product.price }}$</span>
      </div>
    </div>
    <div class="image"><img :src="require(`@/assets/img/600/${product.image}`)" :alt="product.name"/></div>
    <div class="btn-parent">
      <CustomButton @click="toggleModifyForm" text="Modifier" color="black" />
      <CustomButton @click="deleteProduct" text="Supprimer" color="red" />
    </div>
  </div>
  <div>
    <ModifyForm v-if="showForm" :product="product" :updateProduct="handleUpdateProduct" />
  </div>
</template>

<script>
import CustomButton from './CustomButton'
import ModifyForm from './ModifyForm'

export default {
  props: ['product', 'index', 'updateProduct', 'removeProduct'],
  components: {
    CustomButton,
    ModifyForm
  },
  data () {
    return {
      showForm: false
    }
  },
  methods: {
    toggleModifyForm () {
      this.showForm = !this.showForm
    },
    deleteProduct () {
      this.removeProduct(this.product)
    },
    handleUpdateProduct (updatedProduct) {
      this.updateProduct(updatedProduct, this.index)
      this.showForm = false
    }
  }
}
</script>
