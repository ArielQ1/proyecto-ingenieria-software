import { FC } from "react";
import { IconType } from "react-icons";

interface CardImageTextProps {
    text: string;
    position:string;
    icon: IconType;
}

const CardImageText: FC<CardImageTextProps> = ({ text, icon: Icon, position }) => {
    const opcion = position === "left" ? "flex-row" : "flex-row-reverse";
    return (
        <div className={` w-11/12 flex my-2 items-center bg-slate-900 text-white rounded-3xl ${opcion}`}>
            <Icon className="text-9xl mx-6"/>
            <p className="text-center mx-5">
                {text}
            </p>
        </div>
    )
}

export default CardImageText;