import React from 'react'
import { useLocation } from 'react-router-dom';

const HR = () => {
  let { state } = useLocation();
  console.log(state);
  return (
    <section className="w-[100%] h-[100%] tracker p-3 bg-slate-200 gap-3 flex flex-wrap">
      <AsideComp />
      <article className="w-[82%] h-[100%] bg-slate-800 rounded-lg"></article>
    </section>
  )
}

export default HR
