import React, {FC, useEffect, useRef, useState} from 'react';
import css from './Popup.module.css'
import Button, {ButtonVariant} from "../UI/Button/Button"

interface PopupProps{
    onAccept: () => void,
    onDeny: () => void,
    actionTitle?: string,
    open: boolean,
    type: string,
    children: React.ReactNode,
}

//Всплывающее окно. Взял из прошлого проекта
const Popup:FC<PopupProps> = ({onAccept, onDeny, actionTitle, type, open, children}) => {
    //type - primary, warning
    const [cls, setCls] = useState([css.Popup])

    let darkRef = useRef<HTMLDivElement>(null);
    let popupRef = useRef<HTMLDivElement>(null);

    //Формируем стили
    useEffect(()=> {
        if(type) {
            setCls([...cls, css[type]])
        }
    }, [])


    //Центрируем карточку относительно прокрутки страницы
    useEffect(()=> {
        if(darkRef.current && popupRef.current){
            popupRef.current.style.top = (window.pageYOffset + window.innerHeight / 2 - popupRef.current.offsetHeight / 2) + "px"
            darkRef.current.style.height = window.pageYOffset + window.innerHeight + "px";
        }
    }, [open])


    return (
        <>

            <div className={css.Popup_wrapper}>
                {open ? <>
                    <style>{`body {
                        overflow: hidden;
                    }`}</style>
                    <div className={css.dark} ref={darkRef}/>
                    <div className={cls.join(" ")} ref={popupRef}>
                        <div className={css.Popup_close} onClick={onDeny}>X</div>
                        {children}
                        <Button type={type === "warning" ? ButtonVariant.warning : ButtonVariant.primary} onClick={onAccept}>{actionTitle || "OK"}</Button>
                    </div>
                </> : null}
            </div>
        </>

    );
};

export default Popup;