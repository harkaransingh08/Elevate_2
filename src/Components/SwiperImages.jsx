import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function SwiperImages() {
  const images = [
    'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg',
    'https://images.moviesanywhere.com/40f0b68206df926efa93e30400013f62/3a36eb3b-39fd-4f9b-a016-fc98a06812f2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6j5bFyToN8130-qtTHdD1vEyTN3QX_PRIUw&s',
    'https://images.justwatch.com/poster/449990/s718/interstellar.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Matrix.png/250px-The_Matrix.png',
    'https://play-lh.googleusercontent.com/YuqsqTiYYUkVNhdrZqJOc4XUly3gE36TpzaQ6l6BTcMoMqme_T1WNSZWRYhqH9o0cLo=w240-h480-rw',
    'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg',
    'https://imusic.b-cdn.net/images/item/original/511/5051892234511.jpg',
    'https://images.justwatch.com/poster/248371483/s718/the-exorcist.jpg',
    'https://images.justwatch.com/poster/285598209/s718/the-hangover.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/250px-Deadpool_%282016_poster%29.png',
    'https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Animal_%282023_film%29_poster.jpg/250px-Animal_%282023_film%29_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/9/92/Amar_Singh_Chamkila_film_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/5/5b/Sardar_Udham_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/d4/The_Kashmir_Files_poster.jpg'
  ]

  return (
    <div className="w-full py-12 select-none bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col justify-center">
      {/* Header */}
      <div className="flex justify-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 transition-all duration-500 hover:text-yellow-400 hover:scale-105 text-center px-6 py-4 bg-gradient-to-r from-yellow-600/20 via-red-600/20 to-orange-600/20 rounded-2xl border border-yellow-500/30 shadow-2xl backdrop-blur-sm">
          November Top Viewed Movies
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
