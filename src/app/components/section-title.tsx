"use client"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"

type SectionTitleProps = {
  title: string
  subtitle: string
  className?: string
}

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <motion.span
        transition={{ duration: 0.5 }}
        {...animProps}
        className="font-mono text-sm text-emerald-400"
      >{`.../${subtitle}`}</motion.span>
      <motion.h3
        transition={{ duration: 0.5, delay: 0.2 }}
        {...animProps}
        className="text-3xl font-medium"
      >
        {title}
      </motion.h3>
    </div>
  )
}
