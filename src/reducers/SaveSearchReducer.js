//Reducer for SaveSearch information Initialize State
const initState = {
    CountryListnName: ['Malaysia'],
}

//Define Actions
const SaveSearchReducer = (state = initState, action) => {
    switch (action.type) {
            //Change character name
        case 'SAVE_USER_INPUT':
            let CountryListnName = state.CountryListnName
            CountryListnName.push(action.payload)
            return {
                ...state,
                CountryListnName: CountryListnName
            }
        default:
            return state
    }
}

export default SaveSearchReducer;