import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function SwiperImages() {
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
    'https://m.media-amazon.com/images/M/MV5BNGRkOTVjODgtNTBmZS00MDQ3LWE3ZjQtM2ZiNDQ3OWJkMjM2XkEyXkFqcGc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BZWZlNWMxNDYtNTAzYi00OWFiLThhZDUtZGZkYWMyMzQ5ZGYyXkEyXkFqcGc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMzllMWE4YTgtODM3OS00MGEyLWEwMjktNWQzZjFjNWNhMGNmXkEyXkFqcGc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNmZmYzQzMTktOWJjMi00Mzk1LWIyZjgtZmNiMWRiZmNjYjU4XkEyXkFqcGc@._V1_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNjMwYWMxNjYtY2I2NC00OWE0LTg4MmQtMmI5ZGI2NzU4ODhiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  ]

  return (
    <div className="w-full py-12 select-none bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col justify-center">
      {/* Header */}
      <div className="flex justify-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 transition-all duration-500 hover:text-yellow-400 hover:scale-105 text-center px-6 py-4 bg-gradient-to-r from-yellow-600/20 via-red-600/20 to-orange-600/20 rounded-2xl border border-yellow-500/30 shadow-2xl backdrop-blur-sm">
          Top Digital Originals
        </h2>
      </div>

      {/* Swiper Container */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          coverflowEffect={{
            rotate: 3,
            stretch: -30,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 25 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 35 },
            1280: { slidesPerView: 4, spaceBetween: 40 },
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="!w-64 !h-80 md:!w-72 md:!h-96 lg:!w-80 lg:!h-[28rem] rounded-2xl overflow-hidden bg-gray-800 shadow-xl"
            >
              <div className="relative w-full h-full group cursor-pointer">
                {/* Movie Image */}
                <img
                  src={image}
                  alt={`Movie ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end p-4">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">
                      Movie Title {index + 1}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-200 mb-3">
                      <span>⭐ 4.5</span>
                      <span>•</span>
                      <span>2023</span>
                      <span>•</span>
                      <span>2h 15m</span>
                    </div>
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95">
                      Watch Now
                    </button>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 left-3 bg-black/80 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                  ⭐ 4.5
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Instructions */}
      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm animate-pulse">
          ✨ Auto-sliding • Hover to pause • Click to interact
        </p>
      </div>
    </div>
  )
}
