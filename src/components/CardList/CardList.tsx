import React, {useEffect, useState} from 'react';
import {ICard} from "../../store/models/ICard";
import css from "./style.module.css";
import CardListItem from "./CardListItem/CardListItem";
import {useNavigate} from "react-router-dom";
import Button from "../UI/Button/Button";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {cardSlice} from "../../store/reducers/CardSlice";

//Компонент списка карточек
const CardList = () => {
    const {cards} = useAppSelector(state => state.cardReducer);
    const {addCard} = cardSlice.actions;
    const dispatch = useAppDispatch();

    const navigate = useNavigate()
    const [items, setItems] = useState<ICard[]>([]);

    useEffect(() => {
        setItems([...cards]);
    }, []);

    const addNewCard = () => {
        const id = Date.now()
        dispatch(addCard({
            id,
            title: "",
            content: "",
        }))
        navigate("/card/" + id);
    }

    return (
        <div className={css.CardList}>
            <h1 className={css.title}>Блог</h1>
            <div className={css.cardList}>
                {items.map(card => <CardListItem key={card.id} title={card.title} content={card.content} onClick={() => navigate("/card/" + card.id)}/>)}
            </div>
            <div className={css.buttons_wrapper}>
                <Button onClick={addNewCard}>+ Добавить</Button>
            </div>
        </div>
    );
};

export default CardList;