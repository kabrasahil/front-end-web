import React from 'react'
import moment from 'moment/moment';

const data = [
    {
        id: 1,
        title: "Boost your conversion rate",
        href: "#",
        datetime: "2020-03-16",
    },
    {
        id: 2,
        title: "Boost your conversion rate",
        href: "#",
        datetime: "2023-03-20",
    }
]

export default function Dashboard_MyArticles({ name, title, time }) {
    return (
        <div className='shadow-[0_0_60px_20px_rgb(0,0,0,0.22)] rounded-2xl m-10 p-10 w-3/4 aspect-square'>
            <h1 className='text-slate-400'>Vishal Jatia <span>/</span> <span className='text-slate-50 text-2xl'>My Articles</span></h1>
            <button className='text-slate-100 my-8 py-3 px-7 rounded-2xl bg-gradient-to-r from-blue-400 to-pink-400'>Create New Article</button>

            <div>
                <div className='flex justify-between ml-3'>
                    <button className='text-slate-100'>Sort by latest <i class="fa-solid fa-sort" style={{ color: "#f8fafc" }} /></button>
                    <div className='items-center bg-stone-800 rounded-xl py-1 px-3 pr-0 flex'>
                        <i className="fa-solid fa-magnifying-glass" style={{ color: "#94a3b8" }} />
                        <input placeholder='Search' className='text-slate-100 text rounded-xl flex-1 px-4 py-1 bg-stone-800 focus:outline-0' />
                    </div>
                </div>

                <div className='text-slate-100 my-5'>
                    {data.map((d) => {
                        return (
                            <div className='px-10 items-center my-5 bg-stone-800 rounded-2xl h-12 flex justify-between hover:bg-stone-700'>
                                <button><span className='mr-5'>{d.id}.</span>{d.title}</button>
                                <p>{moment.utc(d.datetime).local().startOf('seconds').fromNow()}</p>
                                <div className='flex flex-row gap-5 text-slate-400 '>
                                    <i className="fa-solid fa-thumbs-up hover:text-stone-300" />
                                    <i className="fa-solid fa-arrow-up-right-dots hover:text-stone-300" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
