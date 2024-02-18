"use client"
import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { motion } from "framer-motion"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui estão alguns dos projetos que eu fiz, como projetos pessoais, de
          cursos e eventos de programação.
        </p>
        <Link href={"/"}>
          <HiArrowNarrowLeft className="text-emerald-500" size={20} />
          Voltar para home
        </Link>
      </motion.div>
    </section>
  )
}
