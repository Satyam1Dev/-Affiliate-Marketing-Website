import React, {useMemo, useState} from 'react'
import ProductCard from './ProductCard'
import CategoryPills from './CategoryPills'
import {SAMPLE_CATEGORIES, SAMPLE_PRODUCTS} from '../data/sampleData'


export default function ProductsSection({query: parentQuery=''}){
const [selected, setSelected] = useState('All')
const filtered = useMemo(()=>{
return SAMPLE_PRODUCTS.filter(p => (selected==='All'||p.category===selected) && (!parentQuery || p.name.toLowerCase().includes(parentQuery.toLowerCase())))
},[selected,parentQuery])


return (
<section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl font-bold">Featured Products</h2>
<p className="text-sm text-neutral-600">Hand-picked items with affiliate links</p>
</div>
<CategoryPills categories={SAMPLE_CATEGORIES} selected={selected} setSelected={setSelected} />
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{filtered.map(p => <ProductCard key={p.id} product={p} />)}
{filtered.length===0 && <div className="col-span-full text-center py-12 border rounded-2xl">No matches.</div>}
</div>
</section>
)
}