import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export const MagneticButton = ( { children } : { children: React.ReactNode } ) => {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement)

  useGSAP(() => {
    const xTo = gsap.quickTo(ref.current, "x", {duration: 1, ease: "elastic.out"})
    const yTo = gsap.quickTo(ref.current, "y", {duration: 1, ease: "elastic.out"})

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = ref.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x)
      yTo(y)
    }
    const onMouseLeave = (e: MouseEvent) => {
      xTo(0)
      yTo(0)
    }

    ref.current.addEventListener('mousemove', onMouseMove)
    ref.current.addEventListener('mouseleave', onMouseLeave)

    return () => {
      ref.current.removeEventListener('mousemove', onMouseMove)
      ref.current.removeEventListener('mouseleave', onMouseLeave)
    }

  }, [])
  return (
    <div ref={ref}>{children}</div>
  )
}
