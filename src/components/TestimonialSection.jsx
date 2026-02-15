"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function TestimonialSection() {
  const items = [
    {
      name: "Maya R.",
      text: "The sitter was kind and punctual — I felt comfortable leaving my baby with her.",
      stars: 5,
    },
    {
      name: "Arjun S.",
      text: "CareNest matched us with a wonderful caregiver for my father. Very grateful.",
      stars: 5,
    },
    {
      name: "Mina P.",
      text: "Easy booking and great communication. Highly recommend.",
      stars: 4,
    },
    {
      name: "Linda K.",
      text: "Easy booking and great communication. Highly recommend.",
      stars: 4,
    },
    {
      name: "Typhon J.",
      text: "Easy booking and great communication. Highly recommend.",
      stars: 4,
    },
  ];

  return (
    <section className="py-20 bg-(--secondary)/20">
      <div className="container-max mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-(--text)">
            Loved by Families
          </h2>
          <p className="mt-3 text-(--text)/80 text-lg">
            Real stories from people who trust CareNest to care for their loved ones.
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {items.map((t) => (
              <SwiperSlide key={t.name}>
                <blockquote className="rounded-3xl bg-(--card) p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-(--text) text-lg">{t.name}</p>
                      <div className="mt-2 flex items-center gap-1 text-(--accent) text-lg">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-(--text)/75 italic text-sm">
                    “{t.text}”
                  </p>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
