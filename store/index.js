export const state = () => ({
  modalContent: null,
  isModalOpen: false,
})

export const mutations = {
  setModalContent(state, payload) {
    state.modalContent = payload
  },
  modalOpen(state) {
    state.isModalOpen = true
  },
  modalClose(state) {
    state.isModalOpen = false
    state.modalContent = null
  },
}

export const actions = {
  openModal(ctx, payload) {
    if (ctx.state.isModalOpen) ctx.commit('modalClose')
    ctx.commit('setModalContent', payload)
    ctx.commit('modalOpen')
  },
}
