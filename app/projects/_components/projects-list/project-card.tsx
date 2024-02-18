import Image from "next/image"

export const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          alt="Projeto"
          width={380}
          height={200}
          unoptimized
          src="/images/placeholder-project.png"
          className="w-full h-full object-cover duration-500 group-hover:scale-110 transition-all"
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500">
          ProjetoName
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          atque vitae porro doloribus, rerum minus, mollitia accusamus, dolorem
          sapiente maxime quia a similique repellat maiores optio sit sed ipsam
          soluta!
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Next.js, Next auth, Stitches, Radix, Typescript, Prisma, React Query
        </span>
      </div>
    </div>
  )
}
