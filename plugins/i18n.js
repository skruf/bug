import Vue from "vue"
import store from "~store"

Vue.prototype.$t = (key) => {
  let translation = store.state.translation

  let keys = key.split(".")
  keys.forEach((k) => { translation = translation[k] })

  return translation
}
