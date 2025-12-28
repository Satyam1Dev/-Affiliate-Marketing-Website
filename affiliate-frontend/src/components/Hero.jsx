import React from 'react'


export default function Hero({ query, setQuery }){
return (
<section className="py-14 bg-gradient-to-b from-neutral-50 to-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl font-black">Find the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EE2A7B] to-[#92278F]">best products</span> for your niche</h1>
<p className="mt-3 text-neutral-600">Honest reviews, comparisons, and curated deals.</p>
<div className="mt-6 max-w-xl mx-auto">
<input value={query} onChange={(e)=>setQuery(e.target.value)} className="w-full rounded-xl border px-4 py-2" placeholder="Search products..." />
</div>
</div>
</section>
)
}