"use client"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperObject} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slideShow.css';
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  classname?: string;
}

export const ProductSlider = ({ images, title, classname }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={classname}>


      <Swiper
       
        spaceBetween={10}
        navigation={true}
        autoplay ={{
          delay : 2500
        }}
        thumbs={{ 
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
         }}
        modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        className="mySwiper2"
      >
      
      {
        images.map((img) => (
          <SwiperSlide key={ img }>
            <Image
              width={ 1024 }
              height={ 800 }
              src={`/products/${img}`}
              alt={title}
              className="roundedn-lg object-fill"
            />
          </SwiperSlide>
        ))
      }
        
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
       {
        images.map((img) => (
          <SwiperSlide key={ img }  className="cursor-pointer">
            <Image
              width={ 300 }
              height={ 300 }
              src={`/products/${img}`}
              alt={title}
              className="roundedn-lg object-fill"
            />
          </SwiperSlide>
        ))
      }
      </Swiper>

    </div>
  )
}
