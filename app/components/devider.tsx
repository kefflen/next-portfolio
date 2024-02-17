import { cn } from "../lib/utils"

type DeviderProps = {
  className?: string
}
export const HorizontalDevider = ({ className }: DeviderProps) => {
  return (
    <div
      className={cn("w-full my-8 border-b border-gray-800", className)}
    ></div>
  )
}
