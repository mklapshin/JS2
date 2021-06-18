const API_URL =
"http://localhost:3000"

Vue.component('goods-list', {
  props: ['goods'],
  template: `
    <div class="goods-list">
      <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
    </div>
  `
})

Vue.component('goods-item', {
  props: ['goodProp'],
  template: `
    <div class="goods-item">
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
    </div>
  `
})



const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    busketGoods: [],
    searchLine: '',
  },

  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData`);
      console.log(responce)
      if (responce.ok) {
        
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }

    },
  },

  async mounted() {
    await this.getProducts()
  }
});
