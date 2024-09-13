import {
    createContext,
    useContext,
    useReducer,
} from 'react'

import { carouselReducers } from './reducers'

export type CarouselContextType = {
    currentIndex: number,
    dispatch?: any,
}

export const initialCarouselState: CarouselContextType = {
    currentIndex: 0,
}

export const CarouselContext = createContext(initialCarouselState)

export const useCarousel = () => {
    return useContext(CarouselContext)
}

export function CarouselProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(carouselReducers, initialCarouselState)

    const value = {
        ...state,
        dispatch,
    }

    return (
        <CarouselContext.Provider value={ value }>
            { children }
        </CarouselContext.Provider>
    )
}