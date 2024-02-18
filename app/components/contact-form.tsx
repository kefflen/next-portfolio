"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { HiArrowNarrowRight } from "react-icons/hi"
import { z } from "zod"
import { Button } from "./Button"
import { SectionTitle } from "./section-title"
import toast from "react-hot-toast"

const contactFormSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>
export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data)
      toast.success("Mensagem enviada com sucesso!")
      reset()
    } catch (error) {
      toast.error("Erro ao enviar mensagem, tente novamente mais tarde.")
    }
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 flex items-center bg-gray-950 md:py-32 "
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          title="Vamos tabalhar juntos, sugestões ou dúvidas? Entre em contato!"
          subtitle="contato"
          className="items-center text-center"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 w-full flex flex-col gap-4"
        >
          <input
            {...register("name", { required: true })}
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            {...register("email", { required: true })}
            placeholder="E-mail"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            {...register("message", { required: true })}
            placeholder="Mensagem"
            maxLength={500}
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-max mx-auto mt-6 shadow-button"
          >
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}
