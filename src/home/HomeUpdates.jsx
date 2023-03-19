import React from "react";

export default function HomeUpdates() {
  const data = [
    {
      type: "Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis? Architecto perferendis, accusantium quibusdam dolore ad obcaecati maxime explicabo at ab aut ipsa illo voluptatem asperiores voluptates, cum suscipit repudiandae?",
      image:
        "https://instagram.fdel11-2.fna.fbcdn.net/v/t51.2885-15/327590825_214953080892210_7335381751730104556_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fdel11-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=BIbrZsnSk84AX_dW5qr&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAyNDAyMjg5NTY5MDU2OTQ2NA%3D%3D.2-ccb7-5&oh=00_AfDzIKsVoJ0oEfour2q49F1W3oKKfFn3iGOsPTmLBQkYiA&oe=641A80DC&_nc_sid=1527a3",
      title: "Bored Apes Yatch Club New Sale Game",
      link: "#",
    },
    {
      type: "Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis? Architecto perferendis, accusantium quibusdam dolore ad obcaecati maxime explicabo at ab aut ipsa illo voluptatem asperiores voluptates, cum suscipit repudiandae?",
      image:
        "https://instagram.fdel11-2.fna.fbcdn.net/v/t51.2885-15/327590825_214953080892210_7335381751730104556_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fdel11-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=BIbrZsnSk84AX_dW5qr&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAyNDAyMjg5NTY5MDU2OTQ2NA%3D%3D.2-ccb7-5&oh=00_AfDzIKsVoJ0oEfour2q49F1W3oKKfFn3iGOsPTmLBQkYiA&oe=641A80DC&_nc_sid=1527a3",
      title: "Bored Apes Yatch Club New Sale Game",
      link: "#",
    },
    {
      type: "Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis? Architecto perferendis, accusantium quibusdam dolore ad obcaecati maxime explicabo at ab aut ipsa illo voluptatem asperiores voluptates, cum suscipit repudiandae?",
      image:
        "https://instagram.fdel11-2.fna.fbcdn.net/v/t51.2885-15/327590825_214953080892210_7335381751730104556_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fdel11-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=BIbrZsnSk84AX_dW5qr&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAyNDAyMjg5NTY5MDU2OTQ2NA%3D%3D.2-ccb7-5&oh=00_AfDzIKsVoJ0oEfour2q49F1W3oKKfFn3iGOsPTmLBQkYiA&oe=641A80DC&_nc_sid=1527a3",
      title: "Bored Apes Yatch Club New Sale Game",
      link: "#",
    },
    {
      type: "Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis? Architecto perferendis, accusantium quibusdam dolore ad obcaecati maxime explicabo at ab aut ipsa illo voluptatem asperiores voluptates, cum suscipit repudiandae?",
      image:
        "https://instagram.fdel11-2.fna.fbcdn.net/v/t51.2885-15/327590825_214953080892210_7335381751730104556_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fdel11-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=BIbrZsnSk84AX_dW5qr&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAyNDAyMjg5NTY5MDU2OTQ2NA%3D%3D.2-ccb7-5&oh=00_AfDzIKsVoJ0oEfour2q49F1W3oKKfFn3iGOsPTmLBQkYiA&oe=641A80DC&_nc_sid=1527a3",
      title: "Bored Apes Yatch Club New Sale Game",
      link: "#",
    },
    {
      type: "Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis? Architecto perferendis, accusantium quibusdam dolore ad obcaecati maxime explicabo at ab aut ipsa illo voluptatem asperiores voluptates, cum suscipit repudiandae?",
      image:
        "https://instagram.fdel11-2.fna.fbcdn.net/v/t51.2885-15/327590825_214953080892210_7335381751730104556_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fdel11-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=BIbrZsnSk84AX_dW5qr&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAyNDAyMjg5NTY5MDU2OTQ2NA%3D%3D.2-ccb7-5&oh=00_AfDzIKsVoJ0oEfour2q49F1W3oKKfFn3iGOsPTmLBQkYiA&oe=641A80DC&_nc_sid=1527a3",
      title: "Bored Apes Yatch Club New Sale Game",
      link: "#",
    },
  ];

  return (
    <div className="mb-20  sm:h-screen md:h-screen">
      <h1 class="text-center mb-20 text-gray-500 mr-auto ml-auto text-5xl font-extrabold leading-none tracking-tight md:text-6xl lg:text-7xl">
        <span class="">Highlights</span>
      </h1>

      <div className=" grid lg:mx-80 md:mx-40 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5   sm:gap-16 md:gap-16">
        {data.map(({ image, title, type, description, link }) => {
          return (
            <a
              href={link}
              class="group relative block bg-black rounded-xl w-full aspect-square"
            >
              <img
                alt="Developer"
                src={
                  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tech-party-motion-poster-design-template-b63c68de5d78628b1350ae504aa4fc7d_screen.jpg?ts=1567082379"
                }
                class="absolute rounded-xl aspect-square overflow-hidden inset-0 h-full w-full  object-cover opacity-75 transition-opacity group-hover:blur-sm group-hover:opacity-40"
              />

              <div class="absolute flex flex-col justify-between p-4 sm:p-6 lg:p-8">
                <p class="text-xl font-bold uppercase tracking-widest text-pink-500">
                  {type}
                </p>

                <p class="text-2xl font-bold text-white sm:text-2xl">{title}</p>

                <div class="mt-auto">
                  <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p class="text-base text-white">{description}</p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
        <div className='w-64 text-center text-slate-100 flex flex-col gap-3 '>
            <button className='w-64 h-20 bg-stone-900 shadow-md shadow-black hover:bg-stone-800 rounded-2xl items-center'>Blogs</button>
            <button className='w-64 h-20 bg-stone-900 shadow-md shadow-black hover:bg-stone-800 rounded-2xl items-center'>Events</button>
        </div>
      </div>
    </div>
  );
}
