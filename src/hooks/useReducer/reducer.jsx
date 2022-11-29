function reducer(state, action) {

    switch (action.type) {
        case 'add': {
            return {...state, action}
        }
        default :
            return state
    }
}
export default reducer