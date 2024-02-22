const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      confirmedName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if(value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if(value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;  
    //   }
    // }
  },
  computed: {
    fullname() {
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + this.lastname;
    }
  },
  methods: {
    outputFullname() {
      if(this.name === '') {
        return '';
      }
      return this.name + ' Botha';
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('Submitted');
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      alert('Great');
      this.name = 'aassdd';
    }
  }
});

app.mount('#events');
