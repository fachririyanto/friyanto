export const carouselReducers = (state: any, action: any) => {
    switch (action.type) {
        case 'PREVIOUS':
            return {
                ...state,
                currentIndex: state.currentIndex - 1,
            }
        case 'NEXT':
            return {
                ...state,
                currentIndex: state.currentIndex + 1,
            }
        default:
            return state
    }
}