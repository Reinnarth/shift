import React, { useState } from "react";
import Media from 'react-bootstrap/Media'
import image1 from '../../assets/GirlSpa.png'



export default function ActivityList(props) {


console.log(props) //сюда передаем подраздел для формирования списка
  return (
    <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src={image1}
      alt="Массаж женский"
    />
    <Media.Body>
      <h5>Женский массаж</h5>
      <p>
        Предназначен для женщин. Тут должно быть очень длинное описание
         надо потом придумать будет как-нибудь на досуге но сейчас
          можно просто написать много слов все равно никто не смотрит сюда никогда
      </p>
    </Media.Body>
  </Media>

  );
}
