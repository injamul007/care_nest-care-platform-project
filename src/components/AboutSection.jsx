import Image from "next/image";
import verifiedLogo from "../../public/verified_logo.png"
import flexibleLogo from "../../public/flexible_booking_logo.png"
import secureLogo from "../../public/secure_logo.png"

export default function AboutSection() {
  const features = [
    {
      title: "Verified Caregivers",
      desc: "Background-checked professionals with verified references.",
      img: verifiedLogo
    },
    {
      title: "Flexible Booking",
      desc: "On-demand, recurring or long-term scheduling to suit your needs.",
      img: flexibleLogo
    },
    {
      title: "Safe & Secure",
      desc: "Secure payments and robust safety policies for families.",
      img: secureLogo
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-linear-to-b from-(--secondary)/20 to-(--background)"
    >
      {/* Decorative Glow */}
      <div className="absolute -top-32 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-(--primary)/10 blur-3xl"></div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-(--primary)">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-(--text)">
            Compassion Meets Professional Care
          </h2>

          <p className="mt-6 text-lg text-(--text)/70 leading-relaxed">
            We are committed to delivering trusted in-home care services that
            prioritize safety, dignity, and peace of mind for every family.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-3xl border border-(--border)/40 bg-(--card)/80 backdrop-blur-lg p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Soft Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-(--primary) opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-(--secondary) to-(--primary)/20 shadow-inner">
                  <Image
                    src={f.img}
                    alt={f.title}
                    // width={36}
                    // height={36}
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-(--text)">{f.title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-(--text)/70">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
