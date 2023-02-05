import React from "react"

import classes from "./FullPageLayout.css"

export const FullPageLayout = ({children}) => {
  

  return (
    <div
      className={'root'}
      
    >
      {children}
    </div>
  )
}
export default FullPageLayout