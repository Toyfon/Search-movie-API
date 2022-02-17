import React, {FC} from "react";

import s from "./Profile.module.scss";
import iconMenu from '../../assets/img/iconMenu.svg'


type PropsType = {
    userName: string
}

export const Profile: FC<PropsType> = ({userName}) => {
    return (
        <div className={s.profile}>
            <div className={s.profile__image}>
                <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                     alt="user"/>
            </div>
            <p className={s.profile__name}>
                {userName}
            </p>
            <span className={s.profile__span}>
                <img src={iconMenu} alt="menu"/>
            </span>
        </div>
    )
}
