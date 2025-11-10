import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export default function SwiperImages() {
  const images = [
    // 'https://en.wikipedia.org/wiki/Avatar_%282009_film%29',
    'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
    'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg',
    // 'https://www.imdb.com/title/tt1375666/',
    'https://images.moviesanywhere.com/40f0b68206df926efa93e30400013f62/3a36eb3b-39fd-4f9b-a016-fc98a06812f2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6j5bFyToN8130-qtTHdD1vEyTN3QX_PRIUw&s',
    'https://images.justwatch.com/poster/449990/s718/interstellar.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Matrix.png/250px-The_Matrix.png',
    'https://play-lh.googleusercontent.com/YuqsqTiYYUkVNhdrZqJOc4XUly3gE36TpzaQ6l6BTcMoMqme_T1WNSZWRYhqH9o0cLo=w240-h480-rw',
    'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg',
    'https://imusic.b-cdn.net/images/item/original/511/5051892234511.jpg?conjuring-universe-2021-the-conjuring-7-film-collection-blu-ray&class=scaled&v=1647879471',
    'https://play-lh.googleusercontent.com/FQM-r3asbVHGqBdTn1NwTvsozb_ArgwDaQCVnmshGRGMCQu2XiV5Up7zgs0pUpsXwFDvkVwH0ki3_1Af3WU',
    'https://images.justwatch.com/poster/248371483/s718/the-exorcist.jpg',
    'https://images.justwatch.com/poster/285598209/s718/the-hangover.jpg',
    'https://m.media-amazon.com/images/M/MV5BODZkMjEzM2EtYzQwNi00ZmVjLWI3MTQtMzVkYThhYzM1YzYyXkEyXkFqcGc@._V1_.jpg',
    'https://images.justwatch.com/poster/195865316/s718/superbad.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/250px-Deadpool_%282016_poster%29.png',
    'https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png',
    'https://m.media-amazon.com/images/M/MV5BMTU0MGM4ZjQtNmQ3MC00NDE4LWEwYTItYWZiYzAxMGQwMDkzXkEyXkFqcGc@._V1_.jpg',
    'https://play-lh.googleusercontent.com/tpp1wk9h3x6tEeIhef7jE17gRr6pCK1LoL99JFwNHrVrw4KlB707xMdajjCR6g_8wVNhipmfwQs2ruBsVg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Animal_%282023_film%29_poster.jpg/250px-Animal_%282023_film%29_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/The_Kashmir_Files_poster.jpg/250px-The_Kashmir_Files_poster.jpg',
    'https://m.media-amazon.com/images/M/MV5BZjA3YTI1ZTItZGY5Ni00MzQyLTg2NDYtMzc3NGY5NzEwYmQxXkEyXkFqcGc@._V1_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/5/5b/Sardar_Udham_poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/9/92/Amar_Singh_Chamkila_film_poster.jpg',
    'https://m.media-amazon.com/images/M/MV5BM2JjMWM0MDAtMDk2Zi00MWVmLTkxNDQtZDllNWE2YjYwZGM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMGQzMDQxNTItMGY0NS00OWJlLTk0MTgtY2FlYWIzODc1NmJmXkEyXkFqcGc@._V1_.jpg',
    'https://m.media-amazon.com/images/I/714Qw7GLo9L._AC_UF1000,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/M/MV5BNzJlMmE1YTYtZDIwNi00Zjg5LWJhYzAtYjk3NDI5ZDk0MTczXkEyXkFqcGc@._V1_.jpg',
    'https://upload.wikimedia.org/wikipedia/en/c/c9/Chal_Mera_Putt_%282019_film%29_poster.jpg',
    'https://images.justwatch.com/poster/322061523/s718/jatt-and-juliet-3.jpg'
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