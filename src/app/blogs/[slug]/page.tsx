'use client';
import { blogsData } from "@/data/blogs";
import { notFound, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug as string;
    const router = useRouter();
    const blog = blogsData.find(blog => blog.slug === slug);
    
    if (!blog) {
        notFound();
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const handleBlogClick = (slug: string) => {
        router.push(`/blogs/${slug}`);
    };

    return (
        <>
        <div className="container mx-auto px-4 py-8 max-w-4xl">
           <Breadcrumb 
            BC1={{ link: '/blogs', text: 'Blogs' }}
            BC2={{ link: `/blogs/${slug}`, text: blog.title }}
           />

            {/* Blog header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {blog.title}
                </h1>
                
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                    <span>{blog.byline}</span>
                    <span>•</span>
                    <span>{formatDate(blog.date)}</span>
                </div>

                {/* Category and tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        {blog.category}
                    </span>
                    {blog.tags.map((tag, index) => (
                        <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Featured image */}
            <div className="mb-8">
                <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Blog content */}
            <div className="prose prose-lg max-w-none">
                <div 
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                    className="text-gray-700 leading-relaxed"
                />
            </div>

            {/* Comments section */}
            {/* {blog.comments && blog.comments.length > 0 && (
                <div className="mt-12 border-t pt-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments</h3>
                    <div className="space-y-6">
                        {blog.comments.map((comment, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                                        {comment.name.charAt(0)}
                                    </div>
                                    <span className="font-semibold text-gray-900">{comment.name}</span>
                                </div>
                                <p className="text-gray-700">{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )} */}

            {/* More Blogs Section */}
         
        </div>
           <div className="mt-16 border-t pt-12 container mx-auto px-4 py-8 max-w-4xl">
           <h2 className="text-3xl font-bold text-gray-900 mb-8">More Blogs</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           {blogsData
                   .filter(otherBlog => otherBlog.slug !== slug)
                   .slice(0, 3).map((blog) => (
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
                           className="w-full h-44 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
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
       </>
    );
} 