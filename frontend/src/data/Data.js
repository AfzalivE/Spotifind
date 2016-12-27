import Vue from 'vue'

class Bus extends Vue {

}

export default new Bus() // this instance will be shared across imports
