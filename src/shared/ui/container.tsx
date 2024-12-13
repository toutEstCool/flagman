import { FC, PropsWithChildren } from "react";
import { cn } from "@/shared/lib/utils";

interface IContainerProps {
    className?: string
}

export const Container: FC<PropsWithChildren<IContainerProps>> = (props) => {
    const { className, children } = props

    return (
        <div
            className={cn(
                "mx-auto max-w-[410px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]",
                className
            )}
        >
            {children}
        </div>
    )
}