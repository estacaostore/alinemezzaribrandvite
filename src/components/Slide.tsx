import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Slide() {
  return (
    <section>
      <div className="w-screen">
        <Swiper
          className="flex z-[0] md:hidden"
          effect={"coverflow"}
          slidesPerView={"auto"}
          grabCursor={true}
          loop={true}
          spaceBetween={24}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          pagination={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          <SwiperSlide className="">
            <img className="w-screen" src="/images/slides/a.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="">
            <img className="w-screen" src="/images/slides/b.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full none md:flex">
        <Swiper
          className="md:flex z-[0]"
          effect={"coverflow"}
          slidesPerView={"auto"}
          grabCursor={true}
          loop={true}
          spaceBetween={24}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          pagination={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          <SwiperSlide className="hidden md:flex">
            <img
              className="w-screen"
              src="https://estacaodamodastore.vteximg.com.br/arquivos/ids/224559/sunkissed-aline-mezzari-brand-agosto-2022b.jpg?v=637959944545530000"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="hidden md:flex">
            <img
              className="w-screen"
              src="https://estacaodamodastore.vteximg.com.br/arquivos/ids/225443/Raspou-Ganhou-Mais-de-14-mil-reais-em-cashback-no-mes-do-cliente.jpg?v=637982363286830000"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide className="hidden md:flex">
            <img
              className="w-screen"
              src="https://estacaodamodastore.vteximg.com.br/arquivos/ids/224558/New-Season-Estacao-Store-2022b.jpg?v=637959942544370000"
              alt=""
            />
          </SwiperSlide>

          <div className=".swiper-button-prev"></div>
          <div className=".swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  );
}
