<template>
  <form class="modify-form" @submit="handleSubmit">
    <h1>Modify product</h1>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div>
      <label for="description">Description:</label>
      <textarea id="description" v-model="description"></textarea>
    </div>
    <div>
      <label for="price">Price:</label>
      <input type="number" id="price" v-model.number="price" />
    </div>
    <div>
      <label for="category">Category:</label>
      <input type="text" id="category" v-model="category" />
    </div>
    <div>
      <label for="image">Image:</label>
      <input type="text" id="image" v-model="image" />
    </div>
    <button type="submit">Modify</button>
  </form>
</template>

<script>
export default {
  props: ['product', 'updateProduct'],
  data () {
    return {
      id: '',
      name: '',
      description: '',
      price: '',
      category: '',
      image: ''
    }
  },
  mounted () {
    this.id = this.product.id
    this.name = this.product.name
    this.description = this.product.description
    this.price = this.product.price
    this.category = this.product.category
    this.image = this.product.image
  },
  methods: {
    handleSubmit (event) {
      event.preventDefault()
      const updatedProduct = {
        id: this.id,
        name: this.name,
        description: this.description,
        price: this.price,
        category: this.category,
        image: this.image
      }
      this.updateProduct(updatedProduct)
      this.name = ''
      this.description = ''
      this.price = ''
      this.category = ''
      this.image = ''
    }
  }
}
</script>
