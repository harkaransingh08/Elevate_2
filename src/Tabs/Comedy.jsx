import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function SwiperImages() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-GsZ9QVL9kC1EBOUzUBJ58pkoHm3YeUjGQ&s',
    'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/21JumpStreetfilm.jpg/250px-21JumpStreetfilm.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/250px-Deadpool_%282016_poster%29.png',
    // 'https://www.imdb.com/title/tt0829482/',
    // 'https://en.wikipedia.org/wiki/Step_Brothers_%28film%29',
    'https://www.imdb.com/title/tt7975244/',
    'https://m.media-amazon.com/images/M/MV5BNDZmMGEwMjQtNjFlNi00ZGIxLTlkZjItNmU3Mzg4Y2E0ZjUzXkEyXkFqcGc@._V1_.jpg',
    // 'https://m.media-amazon.com/images/M/MV5BMTNkZTExMWYtMGZjMy00NGUwLWJmMWEtOThjYmZjY2Q0N2M5XkEyXkFqcGc@._V1_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/6/6f/Bhool_bhulaiyaa.jpg',
    'https://en.wikipedia.org/wiki/Welcome_%282007_film%29',
    'https://m.media-amazon.com/images/M/MV5BZWU3OTEzODgtMWY4OS00N2NkLWJlNGQtMWZhZDJmODQwN2E5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__z7FWhIPtkl1CzOjuU_Sga8djKtVdLSGbg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__z7FWhIPtkl1CzOjuU_Sga8djKtVdLSGbg&s',
    'https://m.media-amazon.com/images/M/MV5BM2JjMWM0MDAtMDk2Zi00MWVmLTkxNDQtZDllNWE2YjYwZGM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMOejcFtlPDjVanskXZqPkHX0NDF7aQ79gQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyzE0JIr4lsa4J54jHOZxhAkmJdAPR8iOiA&s',
    'https://www.primevideo.com/detail/Jatt-And-Julliet-2/0KJA69SHBMGI3A3UV9M5SUGSW4',
    'https://www.imdb.com/hi/title/tt10623524/',
    'https://en.wikipedia.org/wiki/Mr_%26_Mrs_420',
    'https://www.imdb.com/title/tt6047120/',
  ]

  return (
    
    <div className="swiper-container mb-70 select-none">
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