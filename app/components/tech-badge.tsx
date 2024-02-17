type TechBadgeProps = {
  tech: string
}
export const TechBadge = ({ tech }: TechBadgeProps) => {
  return (
    <span className="bg-emerald-900/80 text-emerald-400 text-sm py-1 px-3 rounded-lg">
      {tech}
    </span>
  )
}
