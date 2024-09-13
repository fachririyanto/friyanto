import { createContext, useContext, useReducer } from "react";
import { carouselReducers } from "./reducer";

export type CarouselContextType = {
    currentIndex: number;
    onNext: () => void;
    onPrevious: () => void;
};

export const initialCarouselState: CarouselContextType = {
    currentIndex: 0,
    onNext: () => {},
    onPrevious: () => {},
};

export const CarouselContext = createContext(initialCarouselState);

export const useCarousel = () => {
    return useContext(CarouselContext);
};

export function CarouselProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(carouselReducers, initialCarouselState);

    const value = {
        ...state,
        onNext: () => {
            dispatch({ type: "NEXT" });
        },
        onPrevious: () => {
            dispatch({ type: "PREVIOUS" });
        },
    };

    return (
        <CarouselContext.Provider value={value}>
            {children}
        </CarouselContext.Provider>
    );
}