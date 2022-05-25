import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Button, {ButtonVariant} from "../UI/Button/Button";
import css from "./styles.module.css"
import {cardSlice} from "../../store/reducers/CardSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Popup from "../Popup/Popup";

//Компонент карточки
const Card = () => {
    const {cards} = useAppSelector(state => state.cardReducer);
    const {deleteCard, updateCard} = cardSlice.actions;
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isPopup, setIsPopup] = useState<boolean>(false);
    const navigate = useNavigate();
    const params = useParams();


    //загружаем нужную карточку при монтировании
    useEffect(() => {
        let card = cards.filter(card => card.id === Number(params.id))[0];
        if(card){
            setTitle(card.title);
            setContent(card.content);
        } else {
            setError(`карточки с id ${params.id} не существует`);
        }
    }, []);

    if(error){
        return (
            <div className={css.Card}>
                <Button onClick={() => navigate("/")}>Назад</Button>
                <h2>{error}</h2>
            </div>
        )
    }

    const delCard = () => {
        dispatch(deleteCard(Number(params.id)));
        setIsPopup(false);
        navigate("/")
    }

    const updCard = () => {
        dispatch(updateCard({
            id: Number(params.id),
            title,
            content
        }))
        navigate("/");
    }

    return (
        <div className={css.Card}>
            <Popup
                onDeny={() => setIsPopup(false)}
                onAccept={delCard}
                type="warning"
                open={isPopup}
            >Подтвердите удаление карточки</Popup>

            <Button onClick={() => navigate("/")}>Назад</Button>
            <h2>Запись {title}</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea value={content} onChange={(e) => setContent(e.target.value)}/>
            <div className={css.buttons_wrapper}>
                <Button onClick={() => {setIsPopup(true)}} type={ButtonVariant.warning}>Удалить</Button>
                <Button onClick={updCard}>Сохранить</Button>
            </div>
        </div>
    );
};

export default Card;