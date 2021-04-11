import {createStore} from 'vuex';

export default createStore({
  state: {
    counter: 0,
    history: [],
  },

  mutations: {
    ADD_TO_COUNTER(state, payload) {
      if ((document.querySelector('.input-number').value) === '') {
        alert('You must enter a number first');
      } else {
        document.querySelector('.empty-text').style.display = 'none';
        state.counter = state.counter + payload;
        state.history.push(state.counter);
      }
    },
    SUBTRACT_FROM_COUNTER(state, payload) {
      if ((document.querySelector('.input-number').value) === '') {
        alert('You must enter a number first');
      } else {
        document.querySelector('.empty-text').style.display = 'none';
        state.counter = state.counter - payload;
        state.history.push(state.counter);
      }
    },
    ADD_FROM_API(state, payload) {
      document.querySelector('.empty-text').style.display = 'none';
      state.counter = state.counter + payload;
      state.history.push(state.counter);
    }
  },
  actions: {
    async addRandomNumber(context) {
      const loader = document.querySelector('.loader-wrapper');
      const counter = document.querySelector('.counter');
      loader.style.display = 'flex';
      loader.style.alignItems = 'center';
      counter.style.display = 'none';

      const xhttp = new XMLHttpRequest();
      xhttp.open('GET', 'https://www.random.org/integers/?num=1&min=-10000&max=10000&col=1&base=10&format=plain&rnd=new', true);
      xhttp.send();
      xhttp.onreadystatechange = await function() {
        if (this.readyState === 4 && this.status === 200) {
          try {
            loader.style.display = 'none';
            counter.style.display = 'block';
            document.querySelector('.empty-text').style.display = 'none';
            context.commit('ADD_FROM_API', parseInt(xhttp.response));
          } catch (e) {
            alert(`Error has occurred: ${e}`);
          }
        }
      };
    }
  },
  getters: {
    activeIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index) => {
        if (number === payload) {
          indexes.push(index);
        }
      });
      return indexes;
    }
  }
});
