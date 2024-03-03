'use client'
import { motion } from "framer-motion"

type TechBadgeProps = React.ComponentProps<typeof motion.span> & {
  tech: string
}

export const TechBadge = ({ tech, ...rest }: TechBadgeProps) => {
  return (
    <motion.span
      className="bg-emerald-900/80 text-emerald-400 text-sm py-1 px-3 rounded-lg"
      {...rest}
    >
      {tech}
    </motion.span>
  )
}
