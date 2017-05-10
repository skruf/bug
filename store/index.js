export const state = {
  translation: {}
}

export const mutations = {
  SET_TRANSLATION(state, translation) {
    state.translation = translation
  }
}

const getTranslation = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "text": "text test",
        "meta": {
          "title": "title test"
        }
      })
    }, 20)
  })
}

export const actions = {
  async translate({ state, commit }) {
    let translation = await getTranslation()
    commit("SET_TRANSLATION", translation)
  }
}
