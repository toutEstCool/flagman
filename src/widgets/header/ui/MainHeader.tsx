import { FC } from "react";
import { HeaderLayout } from "./components/HeaderLayout/HeaderLayout";

interface IMainHeaderProps {
    className?: string
}

export const MainHeader: FC<IMainHeaderProps> = () => {
    return <HeaderLayout />
}