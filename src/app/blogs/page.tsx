'use client';
import { blogsData } from "@/data/blogs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "../components/Breadcrumb";

export default function Blogs() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedTag, setSelectedTag] = useState('all');
    const router = useRouter();
    
    const filteredBlogs = blogsData.filter((blog) => {
        const categoryMatch = selectedCategory === 'all' || blog.category === selectedCategory;
        const tagMatch = selectedTag === 'all' || blog.tags.includes(selectedTag);
        return categoryMatch && tagMatch;
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    };

    const handleBlogClick = (slug: string) => {
        router.push(`/blogs/${slug}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
              <Breadcrumb 
            BC1={{ link: '/blogs', text: 'Blogs' }}
           />
            <h1 className="text-4xl font-bold text-center mb-12">Blogs</h1>
            
            {/* Filter controls - will be implemented later */}
            <div className="mb-8">
                {/* Category and tag filters will go here */}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBlogs.map((blog) => (
                    <div 
                        key={blog.title} 
                        className="group cursor-pointer"
                        onClick={() => handleBlogClick(blog.slug)}
                    >
                        {/* Image container with relative positioning */}
                        <div className="relative mb-4 overflow-hidden rounded-lg">
                            <img 
                                src={blog.image} 
                                alt={blog.title}
                                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />
                            
                            {/* Date positioned absolutely at bottom of image */}
                            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                                {formatDate(blog.date)}
                            </div>
                        </div>
                        
                        {/* Title with book icon */}
                        <div className="flex items-start gap-2">
                            <svg 
                                className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13z"/>
                                <path d="M9 9h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"/>
                            </svg>
                            <h2 className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-orange-600 transition-colors duration-200">
                                {blog.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
