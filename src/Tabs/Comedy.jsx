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
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgNo79yQhudtUdAz6zguIfgAecVuOpPZBeA&s/',
    'https://upload.wikimedia.org/wikipedia/en/d/d9/StepbrothersMP08.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXAQMy849zSmXknrzCRJrMhh_oIRbhqR_2Q&s/',
    'https://m.media-amazon.com/images/M/MV5BNDZmMGEwMjQtNjFlNi00ZGIxLTlkZjItNmU3Mzg4Y2E0ZjUzXkEyXkFqcGc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTNkZTExMWYtMGZjMy00NGUwLWJmMWEtOThjYmZjY2Q0N2M5XkEyXkFqcGc@._V1_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/6/6f/Bhool_bhulaiyaa.jpg',
    'https://upload.wikimedia.org/wikipedia/en/f/f4/Welcome_poster_2007.jpg',
    'https://m.media-amazon.com/images/M/MV5BZWU3OTEzODgtMWY4OS00N2NkLWJlNGQtMWZhZDJmODQwN2E5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__z7FWhIPtkl1CzOjuU_Sga8djKtVdLSGbg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__z7FWhIPtkl1CzOjuU_Sga8djKtVdLSGbg&s',
    'https://m.media-amazon.com/images/M/MV5BM2JjMWM0MDAtMDk2Zi00MWVmLTkxNDQtZDllNWE2YjYwZGM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMOejcFtlPDjVanskXZqPkHX0NDF7aQ79gQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyzE0JIr4lsa4J54jHOZxhAkmJdAPR8iOiA&s',
    'https://m.media-amazon.com/images/S/pv-target-images/93526a0419d048a37c86981472d425bd5f577f57bc5507686255b1e154f0840b.jpg',
    'https://m.media-amazon.com/images/M/MV5BZWE1NmZiOGMtODJkMi00MGFhLWFkOTItZGI1NzVjOWUyNjAzXkEyXkFqcGc@._V1_QL75_UX149_.jpg/',
    'https://upload.wikimedia.org/wikipedia/en/5/59/Mr_%26_Mrs_420_poster.jpg',
    'https://m.media-amazon.com/images/M/MV5BMWFlOGU0MDYtODNkZi00ODRkLWJhN2YtNDhhMzA3OWUzOTc1XkEyXkFqcGc@._V1_.jpg/',
  ]

  return (
    
    <div className="swiper-container mb-70 select-none">
      <ul className='flex justify-center text-5xl hover:text-yellow-600 transition-all mt-5 mb-12 duration-200 text-gray-500 hover:scale-110 hover:underline'>
                <li>
                    Laugh Lounge
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