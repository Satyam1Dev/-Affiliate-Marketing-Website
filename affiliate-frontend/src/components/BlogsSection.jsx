import React from 'react'
import { Link } from 'react-router-dom'


export default function BlogCard({post}){
return (
<article className="rounded-2xl border overflow-hidden shadow-sm">
<div className="aspect-[16/9] overflow-hidden"><img src={post.cover} alt={post.title} className="w-full h-full object-cover"/></div>
<div className="p-4">
<h3 className="font-semibold">{post.title}</h3>
<p className="text-sm text-neutral-600 mt-1 line-clamp-2">{post.excerpt}</p>
<div className="mt-3"><Link to={`/blog/${post.slug}`} className="text-sm text-[#92278F]">Read more →</Link></div>
</div>
</article>
)
}