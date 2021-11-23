import { useState } from "react"

export const useDnDZIndex = () => {
  const [activeItem, setActiveItem] = useState(null)

  return { activeItem, setActiveItem }
}