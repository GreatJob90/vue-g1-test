import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cardList: [
            {
                id: 1,
                name: 'First card title',
                description: 'First card description'
            },
            {
                id: 2,
                name: 'Second card title',
                description: 'Second card description'
            }
        ],
        dragActive: true,
        newCard: {
            name: {
                value: '',
                validation: { type: null, message: '' }
            },
            description: {
                value: '',
                validation: { type: null, message: '' }
            }
        },
        infoModal: {
            active: false,
            cardName: '',
            cardDescription: ''
        }
    },
    getters: {
        getCardList: state => state.cardList,
        getNewCard: state => state.newCard,
        getDragActive: state => state.dragActive,
        getDashBoardInfoModal: state => state.infoModal,
    },
    mutations: {
        SET_NEW_CARD_NAME: (state, name) => {
            state.newCard.name.value = name
        },
        SET_NEW_CARD_DESCRIPTION: (state, description) => {
            state.newCard.description.value = description
        },
        CREATE_NEW_CARD: (state) => {
            const newCardName = state.newCard.name.value
            const newCardDescription = state.newCard.description.value
            const newCardId = state.cardList.length + 1

            state.cardList.push({
                id: newCardId,
                name: newCardName,
                description: newCardDescription
            })
            router.push('/')
        },
        SET_NEW_CARD_VALIDATION: (state, data) => {
            switch (data.field) {
                case 'name':
                    state.newCard.name.validation = data.payload
                    break
                case 'description':
                    state.newCard.description.validation = data.payload
                    break
                default:
                    break
            }
        },
        CLEAR_NEW_CARD_VALIDATION: (state) => {
            state.newCard.name.validation = { type: null, message: '' }
            state.newCard.description.validation = { type: null, message: '' }
        },
        CLEAR_NEW_CARD_FIELDS: (state) => {
            state.newCard.name.value = ''
            state.newCard.description.value  = ''
        },
        SET_CARD_LIST_SORT: (state, dropResult) => {
            const removedIndex = dropResult.removedIndex
            const addedIndex = dropResult.addedIndex
            const arrayMove = (arr, oldIndex, newIndex) => {
                arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0])
                return arr
            }

            state.cardList = arrayMove([...state.cardList], removedIndex, addedIndex)
        },
        TOGGLE_DRAG_ACTIVE: (state) => {
            state.dragActive = !state.dragActive
        },
        SHOW_CARD_INFO_MODAL: (state, cardId) => {
            const card = state.cardList.filter(card => {
                return card.id === cardId
            }).shift()

            state.infoModal.active = true
            state.infoModal.cardName = card.name
            state.infoModal.cardDescription = card.description
        },
        CLOSE_CARD_INFO_MODAL: (state) => {
            state.infoModal.active = false
            state.infoModal.cardName = ''
            state.infoModal.cardDescription = ''
        }
    },
    actions: {
        createNewCard ({ commit, state }) {
            const name = state.newCard.name.value
            const description = state.newCard.description.value

            if (!name ) {
                const data = {
                    field: 'name',
                    payload: { type: 'error', message: 'title is required' }
                }
                commit('SET_NEW_CARD_VALIDATION', data)
            } else if (!description) {
                const data = {
                    field: 'description',
                    payload: { type: 'error', message: 'description is required' }
                }
                commit('SET_NEW_CARD_VALIDATION', data)
            } else {
                commit('CREATE_NEW_CARD')
                commit('CLEAR_NEW_CARD_FIELDS')
                /*commit('CLEAR_NEW_CARD_VALIDATION')*/
            }
        },
        setNewCardName ({ commit }, name) {
            commit('SET_NEW_CARD_NAME', name)
        },
        setNewCardDescription ({ commit }, description) {
            commit('SET_NEW_CARD_DESCRIPTION', description)
        },
        clearCreateCardValidation ({ commit }) {
            commit('CLEAR_NEW_CARD_VALIDATION')
        },
        setCardListSort ({ commit }, dropResult) {
            commit('SET_CARD_LIST_SORT', dropResult)
        },
        toggleDragActive ({ commit }) {
            commit('TOGGLE_DRAG_ACTIVE')
        },
        showCardInfoModal ({ commit }, cardId) {
            commit('SHOW_CARD_INFO_MODAL', cardId)
        },
        closeCardInfoModal ({ commit }) {
            commit('CLOSE_CARD_INFO_MODAL')
        }
    },
    plugins: [createPersistedState()]
})
