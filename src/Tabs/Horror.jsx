import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function Horror() {
  const images = [
    'https://m.media-amazon.com/images/M/MV5BNjkyMDU5ZWQtZDhkOC00ZWFjLWIyM2MtZWFhMDUzNjdlNzU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0z8OlHXs5jwZT9ugparfiZub07AC69xlvA&s',
    'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg',
    'https://m.media-amazon.com/images/I/71lPJW5Uv2L.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbViC1tz4JViPe4Zixi9KVQlMt5cZ6J0teA&s',
    'https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/4/4f/Stree_-_2018_Movie_Poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/0/06/Bhoot_Film_Poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/4/41/Tumbbad_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/6/6f/Bhool_bhulaiyaa.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxEAfVA-SoYOiXGW7wBf73zIAhPp0Q1fVMg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3clG0JwYzO3NL3qfH1Id9Mlp-Qk2EB8Ih7A&s',

  ]

  return (
    
    <div className="swiper-container mb-70 select-none">
      <ul className='flex justify-center text-5xl hover:text-yellow-600 transition-all mt-5 mb-12 duration-200 text-gray-500 hover:scale-110 hover:underline'>
                <li>
                    The Dark Room
                </li>
            </ul>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -60,
          depth: 150,
          modifier: 1.8,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-container {
          width: 100%;
          padding: 50px 0;
        }
        
        .swiper-slide {
          width: 320px;
          height: 450px;
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        /* Center slide styling */
        .swiper-slide-active {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        /* Side slides styling */
        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.6;
          filter: blur(1px);
        }
        
        .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #ff6b6b;
        }
      `}</style>
    </div>
    
  )
}