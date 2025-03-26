import React from 'react'

export default function Text() {
  return (
    <div className="absolute flex flex-col text-[5.5vw] uppercase w-[80vw] items-start leading-tight font-titre">
      <p>Vincent Renaud</p>
      <p className="self-end">Etudiant M1 UX/UI</p>
      <p>Université de Toulon</p>
      <p className="self-end">Portfolio@2025</p>
    </div>
  )
}