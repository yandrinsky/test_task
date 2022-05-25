import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICard} from "../models/ICard";

interface UserState {
    cards: ICard[],
}
const initialState: UserState = {
    cards: [],
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard(state, action: PayloadAction<ICard>){
            state.cards.push(action.payload);
        },
        deleteCard(state, action: PayloadAction<number>){
            let index;
            for (let i = 0; i < state.cards.length; i++) {
                if(state.cards[i].id === action.payload) {
                    index = i;
                    break;
                }
            }
            if(index !== undefined){ //т.к. нужной карточки может не быть
                state.cards.splice(index, 1);
            }
        },
        updateCard(state, action: PayloadAction<ICard>){
            let index;
            for (let i = 0; i < state.cards.length; i++) {
                if(state.cards[i].id === action.payload.id) {
                    index = i;
                    break;
                }
            }
            if(index !== undefined){ //т.к. нужной карточки может не быть
                state.cards[index] = action.payload;
            }
        }

    }
})

export default cardSlice.reducer;