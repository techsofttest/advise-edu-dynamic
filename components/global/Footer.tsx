"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { attestations } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#101010] text-white pt-14 pb-8">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        
        {/* Row 1: Centered Logo & Description (2x Logo Size, No Border Line) */}
        <div className="flex flex-col items-center text-center pb-8">
          <div className="relative h-28 w-[320px] brightness-0 invert mb-4">
            <Image
              src="/logo/logo.svg"
              alt="Advise Edu"
              fill
              sizes="320px"
              className="object-contain"
            />
          </div>

          <p className="max-w-[550px] text-sm leading-6 text-white/80 font-medium">
            Academic guidance for students looking for clearer education pathways.
            Helping you complete your degree through legal and recognized university options.
          </p>
        </div>

        {/* Row 2: Full Width Colorful Google Map (No Border Line) */}
        <div className="my-8 w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-md">
          <iframe
            title="Advise Edu Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7512217646193!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8380f76859c1cd!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full transition-opacity duration-300"
          />
        </div>

        {/* Row 3: Explore, B.Tech, Services, and Contact Details Grid (No Orange, White/Neutral Text) */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 py-6">
          {/* Column 1: Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">
              Explore
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              <a href="#btech" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                B.Tech Pathways
              </a>
              <a href="#arts" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Arts & Science
              </a>
              <a href="#attestation" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Embassy Attestation
              </a>
              <a href="#counselling" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Personal Counselling
              </a>
              <a href="#check-eligibility" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Check Eligibility
              </a>
            </div>
          </div>

          {/* Column 2: B.Tech Programs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">
              B.Tech Programs
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              <a href="#btech" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Civil Engineering
              </a>
              <a href="#btech" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Mechanical Engineering
              </a>
              <a href="#btech" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Computer Science & Eng.
              </a>
              <a href="#btech" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Electrical & Electronics
              </a>
              <a href="#btech" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                Automobile Engineering
              </a>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">
              Services
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              {attestations.map((item) => (
                <a
                  href="#attestation"
                  key={item}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">
              Contact Details
            </h4>

            <div className="mt-4 flex flex-col gap-3.5 text-sm text-white/80 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/70 shrink-0 mt-0.5" />
                <span>Advise Edu Headquarters, Educational Hub, India</span>
              </div>

              <a
                href="tel:+919000000000"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-white/70 shrink-0" />
                <span>+91 90000 00000</span>
              </a>

              <a
                href="mailto:info@adviseedu.com"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-white/70 shrink-0" />
                <span>info@adviseedu.com</span>
              </a>

              <div className="flex items-center gap-3 text-xs text-white/70 pt-1">
                <Clock className="h-4 w-4 text-white/70 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Copyright (No Top Line) */}
        <div className="mt-8 pt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between text-xs font-medium text-white/60">
          <div>
            © 2026 Advise Edu. All rights reserved. | Legal & University Recognized Guidance
          </div>
          <div>
            <a
              href="https://www.techsoftweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white font-normal hover:underline underline-offset-4 transition-colors"
            >
              Web Design Company in Kochi Techsoft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

