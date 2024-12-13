import { Container } from "@/shared/ui/container"
import { FC } from "react"
import { HeaderTitle } from "../HeaderTitle/HeaderTitle"
import { HeaderMenu } from "../HeaderMenu/HeaderMenu"
import { SlidersVertical } from 'lucide-react';

interface IHeaderLayoutProps {
  className?: string
}

export const HeaderLayout: FC<IHeaderLayoutProps> = (props) => {
  const { className } = props

  return (
    <div className="h-14 flex items-center bg-[#000000]">
      <Container className="w-full">
        <div className="flex w-full justify-between items-center text-white">
          <HeaderMenu />
          {/* <HeaderTitle /> */}
          <SlidersVertical />
        </div>
      </Container>
    </div>
  )
}