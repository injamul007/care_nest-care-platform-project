"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import babyCare from "../../public/slider-baby.png";
import elderlyCare from "../../public/slider-elderly.jpeg";
import sickCare from "../../public/slider-sick.jpeg";

export default function HeroSection() {
  const slides = [
    {
      image: babyCare,
      title: "Reliable Baby Care at Home",
      description:
        "Certified and compassionate babysitters ensuring your child’s safety, comfort, and happiness.",
      primaryBtn: "Explore Baby Care",
      link: "/services",
    },
    {
      image: elderlyCare,
      title: "Professional Elderly Support",
      description:
        "Dedicated caregivers providing respectful and attentive care for your elderly loved ones.",
      primaryBtn: "Explore Elderly Care",
      link: "/services",
    },
    {
      image: sickCare,
      title: "Trusted Care for the Sick",
      description:
        "Experienced home care assistance for recovery, comfort, and daily medical support.",
      primaryBtn: "Explore Services",
      link: "/services",
    },
  ];

  return (
    <section className="relative min-h-[90vh] bg-linear-to-b from-[#0f323e] to-[#0f323e]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[80vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex items-center">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[rgba(15,118,110,0.55)]" />

              {/* Content */}
              <div className="relative z-10 container-max text-white">
                <div className="max-w-2xl space-y-6">
                  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-white/90">
                    {slide.description}
                  </p>

                  <div className="flex gap-4 justify-center">
                    <Link
                      href={slide.link}
                      className="lg:px-6 lg:py-3 px-3 py-2 rounded-full bg-linear-to-r from-(--accent) to-orange-400 text-(--text) font-semibold shadow hover:opacity-90 transition"
                    >
                      {slide.primaryBtn}
                    </Link>

                    <Link
                      href="/about"
                      className="lg:px-6 lg:py-3 px-3 py-2 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-(--primary) transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Stylish scroll arrow */}
      <div className="hero-arrow-container">
        <div className="hero-arrow-ring" aria-hidden />
        <button
          onClick={useCallback(() => {
            const target = document.getElementById("services");
            if (target) return target.scrollIntoView({ behavior: "smooth" });
            window.scrollBy({
              top: window.innerHeight * 0.9,
              behavior: "smooth",
            });
          }, [])}
          className="hero-arrow-btn"
          aria-label="Scroll to next section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path className="hero-chev" d="M6 9l6 6 6-6" />
            <path className="hero-chev delay" d="M6 5l6 6 6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
