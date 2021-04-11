<template>
  <h1>Advanced Counter</h1>
  <div class="loader-wrapper">
    <div class="loader"></div>
  </div>
  <div class="counter">{{ $store.state.counter }}</div>
  <div class="input-wrapper">
    <button
        @click="SUBTRACT_FROM_COUNTER(parseInt(value))">
      -
    </button>
    <input
        class="input-number"
        type="number"
        v-model="value"
        placeholder="Type a number"
    />
    <button
        @click="ADD_TO_COUNTER(parseInt(value))"
    >
      +
    </button>
  </div>
  <div class="btn-wrapper">
    <button
        class="btn-add-number"
        @click="addRandomNumber">Add Random Number</button>
    <button
        class="btn-reset"
        @click="reset">Reset</button>
  </div>
  <div class="history">
    <h2>History</h2>
    <div class="history-wrapper">
      <p class="empty-text">
        Empty
      </p>
      <p
          v-for="(number, index) in history"
          :key="index"
          :class="activeIndexes(parseInt(historyValue)).includes(index) && 'matched-number'"
      >
        {{ number }}
      </p>
    </div>
  </div>
  <input
      type="number"
      v-model="historyValue"
      placeholder="Search history"
  />
  <button
      class="clear-history"
      title="Clear history"
      @click="clearHistory"
  >
    X
  </button>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';

export default {
  name: 'AdvancedCounter',
  data() {
    return {
      value: '',
      historyValue: ''
    };
  },
  computed: {
    ...mapState(['counter', 'history']),
    ...mapGetters(['activeIndexes'])
  },
  methods: {
    ...mapMutations(['ADD_TO_COUNTER', 'SUBTRACT_FROM_COUNTER']),
    ...mapActions(['addRandomNumber']),
    reset() {
      this.value = '';
      this.$store.state.counter = 0;
    },
    clearHistory() {
      this.$store.state.history = [];
      document.querySelector('.empty-text').style.display = 'block';
    }
  }
};
</script>

<style scoped>
*:focus {
  outline: none;
}

/*
 * Loader
 */

.loader-wrapper {
  display: none;
  width: 100%;
  height: 90px;
}

.loader {
  box-sizing: border-box;
  border: 2px solid #d9d9de;
  border-top: 2px solid #41b983;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin: 0 auto;
  -webkit-animation: spin .3s linear infinite;
  animation: spin .3s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.counter {
  font-size: 80px;
  font-weight: 900;
  line-height: 90px;
}

.input-wrapper {
  display: flex;
  justify-content: center;
  margin: 22px 0;
}

input {
  margin: 0 12px;
  font-size: 16px;
  padding: 0 0 0 5px;
  height: 36px;
  border: 1px solid #d9d9de;
  color: #2c3e50;
}

input::placeholder {
  font-size: 14px;
}

button {
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  width: 38px;
  height: 38px;
  background-color: #d9d9de;
}

.btn-wrapper button {
  width: fit-content;
  height: fit-content;
  padding: 15px 25px;
  background-color: #41b983;
  border-radius: unset;
  margin-top: 1rem;
  color: #fff;
  font-size: 1rem;
}

.btn-wrapper .btn-reset {
  background-color: #fd5555;
  margin-left: .5rem;
  font-size: 1rem;
}

.history {
  margin: 3rem 0 .5rem;
}

.history-wrapper {
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: .8rem;
  width: 25rem;
  margin-bottom: 20px;
}

.history-wrapper p {
  margin: 0;
  line-height: 1rem;
}

.matched-number {
  font-weight: 600;
  background-color: yellow;
}

button.clear-history {
  background-color: #fd5555;
  width: 30px;
  height: 30px;
  color: #fff;
}
</style>
