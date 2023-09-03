import "./App.css";
import {FC} from "react";

interface CardInfoProps {
  avatar: string;
  name: string;
  title: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const CardInfo: FC<CardInfoProps> = ({ avatar, name, title, email, phoneNumber, address }) => {
  return (
    <div className="flipCard">
      <div className="flipCardInner">
        <div className="flipCardFront">
          <img className="avatar" src={avatar} alt="user avatar pic" />
          <h1 className="name">{name}</h1>
          <p className="title">{title}</p>
        </div>
        <div className="flipCardBack">
          <h1>Contact Info</h1>
          <p>
            <b>E-mail:</b> {email}
          </p>
          <p>
            <b>Phone number:</b> {phoneNumber}
          </p>
          <p>
            <b>Address:</b> {address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
