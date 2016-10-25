export const SHOW_MODAL = 'SHOW_MODAL'
export const showModal = (ID) => {
  return {
    type: SHOW_MODAL,
    modalID: ID
  }
}
