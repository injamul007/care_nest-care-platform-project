import Image from "next/image";
import careBanner from "../../public/banner_care_pic.jpeg"
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-(--secondary)/40 py-16">
      <div className="container-max mx-auto grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6 px-2">
          <h1 className="text-3xl font-extrabold leading-tight text-(--text) sm:text-4xl md:text-5xl">
            Reliable Care for Your Loved Ones
          </h1>
          <p className="max-w-xl text-(--text)/80 text-lg">
            At CareNest we connect you with compassionate, vetted caregivers for
            babies, elders and the sick — so your family receives reliable
            support at home when you need it most.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-full bg-(--primary) px-5 py-3 text-sm font-semibold text-white shadow"
            >
              Explore Services
            </Link>
            <Link
              href="/learn-more"
              className="rounded-full border border-transparent bg-white px-5 py-3 text-sm font-semibold text-(--secondary)/90"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="px-2">
          <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-md">
            <div className="aspect-4/3 w-full rounded-lg bg-[linear-gradient(180deg,rgba(153,246,228,0.6),rgba(253,186,116,0.12))] flex items-center justify-center">
              <div className="text-center p-6">
                <Image src={careBanner} 
                alt="CareNest Logo"
                className="object-contain"
                priority/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
