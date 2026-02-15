import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 bg-(--secondary)/24 px-4">
      <div className="container-max mx-auto rounded-2xl bg-(--primary)/30 p-10 text-center shadow-md">
        <h2 className="text-3xl font-extrabold">Find the Right Care Today</h2>
        <p className="mt-3 text-(--text)/80">
          Join thousands of families who found trusted help through CareNest.
        </p>
        <div className="mt-6">
          <Link
            href="/services"
            className="inline-block rounded-full bg-(--secondary) px-6 py-3 text-sm font-semibold text-white shadow"
          >
            Get Matched
          </Link>
        </div>
      </div>
    </section>
  );
}
