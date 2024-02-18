"use client"
import { useEffect, useState } from "react"
import { TbArrowNarrowUp } from "react-icons/tb"
import { Button } from "./Button"

export const BackToTop = () => {
  const [show, setShow] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY
      const backToTop = document.querySelector("#back-to-top")
      if (scroll > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
  }, [])

  return (
    <div id="back-to-top" className="fixed right-4 bottom-4">
      {show && (
        <Button
          onClick={scrollToTop}
          className="shadow-lg shadow-emerald-400/20"
        >
          <TbArrowNarrowUp />
        </Button>
      )}
    </div>
  )
}
