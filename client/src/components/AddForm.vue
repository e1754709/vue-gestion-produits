<template>
  <form class="add-form" @submit="handleSubmit">
    <div class="form-control">
      <label>Product Name</label>
      <input
        type="text"
        placeholder="add Product"
        v-model="name"
      />
    </div>
    <div class="form-control">
      <label>Product description</label>
      <input
        type="text"
        placeholder="add Description"
        v-model="description"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Price</label>
      <input
        type="number"
        v-model.number="price"
      />
    </div>
    <div class="form-control">
      <label>Category</label>
      <input
        type="text"
        id="category"
        v-model="category"
      />
    </div>
    <div class="form-control">
      <label>Image</label>
      <input
        type="text"
        id="image"
        v-model="image"
      />
    </div>
    <input type="submit" class="btn btn-block" value="Save Product"/>
  </form>
</template>

<script>
export default {
  props: ['addProduct'],
  data () {
    return {
      name: '',
      description: '',
      price: '',
      category: '',
      image: ''
    }
  },
  methods: {
    handleSubmit (event) {
      event.preventDefault()
      const newProduct = {
        name: this.name,
        description: this.description,
        price: this.price,
        category: this.category,
        image: this.image
      }
      this.addProduct(newProduct)
      // Clear the form fields
      this.name = ''
      this.description = ''
      this.price = ''
      this.category = ''
      this.image = ''
    }
  }
}
</script>
