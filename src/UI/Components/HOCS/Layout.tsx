import { FC } from "react";
import { Header } from "../Header";


interface ILayout{
    children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        </>
    )
}
