import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function Webseries() {
  const images = [
    'https://resizing.flixster.com/mmvBo8CgJiLxvYSimsMguhNEv58=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vYWM4MWJjZjUtN2I0My00NmQwLThmZjEtOTA0NTU4OWNlOWE3LmpwZw==',
    'https://m.media-amazon.com/images/I/81xETRmcFwL._AC_UF1000,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMDE1NjNmZjgtZTg0OC00NjkxLWEzYzItMDNkMTc3YjgxZWQyXkEyXkFqcGc@._V1_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmkMLMrhcInB4oe_E_SNf75yX1nyvBjicOA&s',
    'https://upload.wikimedia.org/wikipedia/en/2/24/Peacemaker_season_2_poster.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZCSqCo9a8u49EbTAweuHskO_6dLe9ABNNQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIxct_b6dztvcZqw4BzqMEC9pPRXNRqEhtw&s',
    'https://m.media-amazon.com/images/M/MV5BMzdjYWZlMDQtYzdhNi00NmRlLTg2NzUtMTI3MWFhZDliNjBiXkEyXkFqcGc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDY2OWMxNzgtZGQ4Ny00ODI3LTk3MTAtYjM4N2U4ZGI3ZGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjE0NjJiYjYtNDUzZC00MGE2LTgzNDktZTVmOWI1Y2E2MDFkXkEyXkFqcGc@._V1_.jpg',
    // 'https://www.imdb.com/title/tt6473300/',
    'https://m.media-amazon.com/images/M/MV5BNGRkOTVjODgtNTBmZS00MDQ3LWE3ZjQtM2ZiNDQ3OWJkMjM2XkEyXkFqcGc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BZWZlNWMxNDYtNTAzYi00OWFiLThhZDUtZGZkYWMyMzQ5ZGYyXkEyXkFqcGc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMzllMWE4YTgtODM3OS00MGEyLWEwMjktNWQzZjFjNWNhMGNmXkEyXkFqcGc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNmZmYzQzMTktOWJjMi00Mzk1LWIyZjgtZmNiMWRiZmNjYjU4XkEyXkFqcGc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNjMwYWMxNjYtY2I2NC00OWE0LTg4MmQtMmI5ZGI2NzU4ODhiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    
  ]

  return (
    
    <div className="swiper-container mb-70 select-none">
      <ul className='flex justify-center text-5xl hover:text-yellow-600 transition-all mt-5 mb-12 duration-200 text-gray-500 hover:scale-110 hover:underline'>
                <li>
                    Binge Hub
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