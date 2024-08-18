import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import Link from "next/link"; 

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Increase Your Active Subscribers By Fixing Typos
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          We find and fix email subscriber typos to find subscribers your
          missing
        </p>
        <Link href="/form" passHref>
          <button className="btn btn-primary btn-wide">
            Get {config.appName}
          </button>
        </Link>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="https://cjxgfmhajeqsmwanomxu.supabase.co/storage/v1/object/sign/landingPage/emailAudit1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsYW5kaW5nUGFnZS9lbWFpbEF1ZGl0MS5wbmciLCJpYXQiOjE3MjM3NzI1MzQsImV4cCI6NDg3NzM3MjUzNH0.vw9EF1PE8MgKVIZK8cQ6v8JqMA23YNjUMtd-RDLdBRU&t=2024-08-16T01%3A42%3A14.254Z"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
