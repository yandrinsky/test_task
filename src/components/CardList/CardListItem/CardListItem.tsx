import React, {FC} from 'react';
import Button, {ButtonSize} from "../../UI/Button/Button";
import css from "./style.module.css"

interface CardListItemProps {
    title: string,
    content: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

//Компонент ячейки из списка карточек
const CardListItem:FC<CardListItemProps>= ({title, content, onClick}) => {
    return (
        <div className={css.item}>
            <h3 className={css.title}>{title}</h3>
            <textarea value={content} disabled/>
            <Button onClick={onClick} size={ButtonSize.small}>Перейти</Button>
        </div>
    );
};

export default CardListItem;