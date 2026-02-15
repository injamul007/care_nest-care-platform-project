import Image from "next/image";
import babyCareLogo from "../../public/baby_care_logo.png"
import elderCareLogo from "../../public/elder_care_logo.png"
import sickCareLogo from "../../public/sick_care_logo.png"


export default function ServicesSection() {
  const services = [
    { name: "Baby Care", 
      desc: "Trusted babysitters and newborn specialists.",
      img: babyCareLogo },
    {
      name: "Elderly Care",
      desc: "Companionship, medication reminders and daily help.",
      img: elderCareLogo
    },
    {
      name: "Sick People Care",
      desc: "Qualified carers for short-term recovery support.",
      img: sickCareLogo
    },
  ];

  return (
    <section id="services" className="py-16">
      <div className="container-max mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="mt-2 text-(--text)/80">
            Trusted caregiving solutions designed to support families with
            comfort, dignity, and care.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className="group rounded-2xl border bg-(--secondary)/40 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-(--accent)/60 text-(--primary)">
                <Image
                  src={s.img}
                  alt={s.name}
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-(--text)/70 line-clamp-1">
                {s.desc}
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-(--accent)/90 px-4 py-2 text-sm font-semibold text-(--text) transition-transform group-hover:translate-y-0.5"
                >
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
