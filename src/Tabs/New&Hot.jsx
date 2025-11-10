import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function NewHot() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeHMXj0wVb5A2xISLwLmvawDXxxNc9B1ZCg&s',
    'https://m.media-amazon.com/images/M/MV5BNzIzNWQxMjEtZmQ3MS00OTk2LWFlZjktZDUyYWRkM2M3NWVlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0Yj5zO383QQAM8laossRS4qgqk18VlVT2Q&s',
    'https://resizing.flixster.com/Nr1qu77x4LsGjvXjv8qVPJrJDDI=/fit-in/705x460/v2/https://resizing.flixster.com/qERWhMTSbohQSSOrtVa_jjlz01o=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RiMTJlMzBmLWFmYWMtNGQ4Ni04MWE3LTI3NGRmOWFkYjIxMC5wbmc=',
    'https://resizing.flixster.com/deQ0ZbG4_O_sJUruxWVTgc5YZIo=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28079875_v_v13_ag.jpg',
    'https://m.media-amazon.com/images/M/MV5BZmIzMThjNTYtNjkwZi00NmM3LTliNGItZWIxYTUwMGU1YzM0XkEyXkFqcGc@._V1_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVPM2ncyLrpfMBkTaHzQ8u8rzpEpBX6zX7A&s',
    'https://m.media-amazon.com/images/M/MV5BYzRkZWE3YTAtNDdkYS00NjE0LWEzMzktMjVkNzVkYjUwODFhXkEyXkFqcGc@._V1_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tpu4JamMLzcOdkK3USDaIdA9m7e3mJF-Sw&s',
    
  ]

  return (
    
    <div className="swiper-container mb-70 select-none">

      <ul className='flex justify-center text-5xl hover:text-yellow-600 transition-all mt-5 mb-12 duration-200 text-gray-500 hover:scale-110 hover:underline'>
                <li>
                    Hot Right Now
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