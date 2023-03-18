import React from 'react';


function BlogHeading() {
  return (
    <div className='bg-stone-900'>
        {/* make a small heading showing blogs and with background colour slate-500 */}
        <div className='text-center'>
            <h1 class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text mt-20 text-4xl font-sans font-semibold">BLOGS</h1>  
            </div>      {/* make a much larger heading showing "Releases,insights,and company announcements" and make it white in colour with text justified in center */}
        <h1 className='text-center text-white text-5xl font-bold mt-5'>Releases, insights, and </h1>
        <h1 className='text-center text-white text-5xl font-bold p-2'>company announcements</h1>

    </div>
  );
}

export default BlogHeading;