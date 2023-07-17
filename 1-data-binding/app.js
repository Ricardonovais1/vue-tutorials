const app = Vue.createApp({
  data() {
    return {
      name: 'Ricardo Novais',
      age: 44,
      imageLink: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS5cyZ3EJTS7BkXAa7bbmUKSAirR5PfXcYTGq4-KNiBCXfMvsekuBU8mIyZOzbC0zTH'
    }
  },
  methods: {
    addAge(num) {
      return this.age + num
    }
  }
})

app.mount('#vue-binding')