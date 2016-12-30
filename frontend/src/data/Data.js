import Vue from 'vue'

class Bus extends Vue {
// populated from TunefindRepository after requests succeed
}

export default new Bus() // this instance will be shared across imports
