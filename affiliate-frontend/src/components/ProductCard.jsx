import React from 'react'


const currencyINR = n => new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(n)


export default function ProductCard({product}){
return (
<article className="rounded-2xl border bg-white overflow-hidden shadow-sm">
<div className="aspect-[4/3] w-full overflow-hidden">
<img src={product.image} alt={product.name} className="h-full w-full object-cover" />
</div>
<div className="p-4">
<h3 className="font-semibold">{product.name}</h3>
<p className="text-sm text-neutral-600">{currencyINR(product.price)}</p>
<div className="mt-3 flex gap-2">
<a href={product.affiliateLink} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center rounded-xl px-3 py-2 bg-gradient-to-r from-[#EE2A7B] to-[#92278F] text-white">Buy Now</a>
</div>
</div>
</article>
)
}