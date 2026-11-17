import { useEffect, useRef } from 'react'
export default function Section({ id, title, accent, children }) {
  const ref = useRef()
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && ref.current.classList.add('in'), { threshold: 0.08 })
    o.observe(ref.current); return () => o.disconnect()
  }, [])
  return (
    <section id={id}><div className="wrap reveal" ref={ref}>
      <h2 className="sec-title">{title} <span>{accent}</span></h2>{children}
    </div></section>
  )
}
