export const SHOW_MODAL = 'SHOW_MODAL'
export const showModal = (status) => {
  return {
    type: SHOW_MODAL,
    modalStatus: status
  }
}
