import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

function HeroSlider() {

  const slides = [
    {
      title:"جاشمعی‌های مینیمال",
      text:"طراحی خاص برای دکورهای مدرن",
      image:"https://images.unsplash.com/photo-1517705008128-361805f42e86"
    },

    {
      title:"دکورهای سنگی لاکچری",
      text:"زیبایی آرامش‌بخش برای خانه",
      image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },

    {
      title:"محصولات دست‌ساز خاص",
      text:"ترکیب هنر و مینیمالیسم",
      image:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e"
    }
  ]

  return (

    <div className="px-10 mt-6">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay:3000 }}
        pagination={{ clickable:true }}
        loop={true}
        className="rounded-[40px] overflow-hidden"
      >

        {slides.map((slide,index)=>(

          <SwiperSlide key={index}>

            <div
              className="h-[500px] bg-cover bg-center relative"
              style={{
                backgroundImage:`url(${slide.image})`
              }}
            >

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center px-20 text-white">

                <h1 className="text-6xl font-bold">
                  {slide.title}
                </h1>

                <p className="text-2xl mt-6">
                  {slide.text}
                </p>

                <button className="mt-8 w-[200px] bg-[#FFD6D6] text-black py-4 rounded-2xl text-lg hover:scale-105 duration-300">
                  مشاهده محصولات
                </button>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  )
}

export default HeroSlider