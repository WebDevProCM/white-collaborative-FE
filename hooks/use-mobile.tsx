"use client";

import { useEffect, useState } from "react"

const smScreen_BREAKPOINT = 768

export function useIsMobile() {
  const [isSmall, setIsSmall] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${smScreen_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsSmall(window.innerWidth < smScreen_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsSmall(window.innerWidth < smScreen_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isSmall
}
