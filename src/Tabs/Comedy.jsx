import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
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
    <div className="w-full py-12 select-none bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col justify-center">
      {/* Header */}
      <div className="flex justify-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 transition-all duration-500 hover:text-yellow-400 hover:scale-105 text-center px-6 py-4 bg-gradient-to-r from-yellow-600/20 via-red-600/20 to-orange-600/20 rounded-2xl border border-yellow-500/30 shadow-2xl backdrop-blur-sm">
         Top Comedy Hits of the Month
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
