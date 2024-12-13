import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { FC } from "react"

interface IHeaderTitleProps {
  className?: string
}

export const HeaderTitle: FC<IHeaderTitleProps> = (props) => {
  const { className } = props
  return (
    <div className="flex justify-center items-center">
      <Select>
        <SelectTrigger className="w-[300px] h-[30px] border-none justify-center gap-[10px] items-center bg-black">
          <SelectValue placeholder="Филиал" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}