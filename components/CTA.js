import Image from "next/image";
import config from "@/config";
import Link from "next/link"; 

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://cjxgfmhajeqsmwanomxu.supabase.co/storage/v1/object/sign/landingPage/image02.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9pbWFnZTAyLmpwZyIsImlhdCI6MTcyMzc3NTAyOSwiZXhwIjo0ODc3Mzc1MDI5fQ.1tsDzb0zXqlYyTGTNU9JgVA7MGRzBrp4iNGDCnlwrxM&t=2024-08-16T02%3A23%3A50.101Z"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Stop Wasting Subscribers
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Help fix your subscribers typos and improve your newsletter
            engagement
          </p>

          <Link href="/form" passHref>
            <button className="btn btn-primary btn-wide">
              Get {config.appName}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
