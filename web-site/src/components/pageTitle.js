import * as React from "react"

export default function PageTitle({ title }) {
  return (
    <span className="text-bios-header font-bios3 absolute top-10 left-10 underline animate-fade-in-up">
      {title}
    </span>
  )
}
