//reducer
const initialState = {
    count: 0
}
const Counter = (state = initialState, action) => {
    console.log('Counter___state', state)
    switch (action.type) {
        case 'ADD_COUNT':
            return {
                count: ++state.count
            }
        case 'MINUS_COUNT':
            return {
                count: --state.count
            }
        default:
            return initialState;
    }
}
export default Counter