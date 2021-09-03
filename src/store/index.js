import { createStore } from 'vuex'
import axios from 'axios'
import { public_key } from '../marvel'

export default createStore({
  state: {
    characters: [],
    character: [],
    charImageUrl: '',
    charStories: [],
    charSeries: [],
    charEvents: [],
    personalData: {
      name: '',
      imageUrl: ''
    }
  },
  mutations: {
    getCharacters(state) {
      state.characters = []
      let url = `http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`
      axios.get(url)
        .then((res) => {
          console.log('res: ', res)
            res.data.data.results.forEach((item) => {
                state.characters.push(item)
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },
    getCharacter(state, id){
      state.character = []
      state.charStories = []
      state.charSeries = []
      state.charEvents = []
      axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`)
      .then(res => {
          res.data.data.results.forEach((item) => {
              state.character.push(item)
              state.charImageUrl = `${item.thumbnail.path}/`
              item.stories.items.forEach((story) => {
                state.charStories.push(story)
              })
              item.series.items.forEach((programme) => {
                state.charSeries.push(programme)
              })
              item.events.items.forEach((event) => {
                state.charEvents.push(event)
              })
          })
      })
      .catch((err) => {
          console.log(err)
      })
    },
    setPersonal (state, personalData) {
      state.personalData = personalData
    }
  },
  actions: {
    getCharacters: context => {
      context.commit('getCharacters')
    },
    getCharacter(context, id) {
      context.commit('getCharacter', id)
    }
  }
})
