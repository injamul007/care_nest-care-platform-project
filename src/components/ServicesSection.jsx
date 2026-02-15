import Image from "next/image";
import Link from "next/link";
import babyCareLogo from "../../public/baby_care_logo.png";
import elderCareLogo from "../../public/elder_care_logo.png";
import sickCareLogo from "../../public/sick_care_logo.png";

export default function ServicesSection() {
  const services = [
    {
      name: "Baby Care",
      desc: "Certified babysitters and newborn specialists ensuring safety, nurturing, and developmental support.",
      img: babyCareLogo,
      slug: "baby-care",
    },
    {
      name: "Elderly Care",
      desc: "Compassionate caregivers offering companionship, medication reminders, and daily living assistance.",
      img: elderCareLogo,
      slug: "elderly-care",
    },
    {
      name: "Sick People Care",
      desc: "Professional short-term recovery support with personalized home care assistance.",
      img: sickCareLogo,
      slug: "sick-care",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-linear-to-b from-(--primary)/30 to-(--secondary)/20"
    >
      <div className="container-max">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-(--text)">
            Our Professional Care Services
          </h2>
          <p className="mt-4 text-lg text-(--text)/70">
            Personalized caregiving solutions tailored to support your loved
            ones with dignity, compassion, and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative rounded-3xl bg-(--secondary)/40 p-8 shadow-sm transition-transform duration-700 ease-out hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Soft Glow Accent */}
              <div className="absolute inset-0 rounded-3xl bg-(--primary) opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10"></div>

              {/* Icon */}
              <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--secondary)/50">
                <Image
                  src={service.img}
                  alt={service.name}
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-(--text)">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-(--text)/70 line-clamp-2">
                  {service.desc}
                </p>

                <Link
                  href={`/service/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-(--primary) transition-colors hover:text-(--accent)"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
