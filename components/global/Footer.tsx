"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { getPages } from "@/lib/page";
import { getContact, type ContactData } from "@/lib/contact";

export function Footer() {
  const [contact, setContact] = useState<ContactData>({
    id: 0,
    address: "",
    map_link: "",
    phone: "",
    email: "",
    opening_hours: "",
  });

  const [services, setServices] = useState<string[]>([]);
  const [branches, setBranches] = useState<string[]>([]);

  // Fetch contact information from the Laravel API
  useEffect(() => {
    let active = true;

    async function loadContact() {
      try {
        const data = await getContact();

        if (active) {
          setContact(data);
        }
      } catch (error) {
        console.error("Failed to load contact information:", error);
      }
    }

    loadContact();

    return () => {
      active = false;
    };
  }, []);

  // Fetch Services dynamically from the Laravel Page API
  useEffect(() => {
    let active = true;

    async function loadServices() {
      try {
        const pages = await getPages();
        const serviceItems =
          pages.embassy_document_services?.content2?.services;

        if (active && Array.isArray(serviceItems)) {
          setServices(
            serviceItems.filter(
              (item): item is string =>
                typeof item === "string" && item.trim().length > 0,
            ),
          );
        }
      } catch (error) {
        console.error("Failed to load footer services:", error);
      }
    }

    loadServices();

    return () => {
      active = false;
    };
  }, []);

  // Fetch B.Tech branches dynamically from the Laravel Page API
  useEffect(() => {
    let active = true;

    async function loadBranches() {
      try {
        const pages = await getPages();
        const branchItems = pages.courses_branches?.branches;

        if (active && Array.isArray(branchItems)) {
          setBranches(
            branchItems.filter(
              (item): item is string =>
                typeof item === "string" && item.trim().length > 0,
            ),
          );
        }
      } catch (error) {
        console.error("Failed to load B.Tech branches:", error);
      }
    }

    loadBranches();

    return () => {
      active = false;
    };
  }, []);

  const phoneLink = contact.phone.replace(/[^\d+]/g, "");

  return (
    <footer className="bg-[#101010] text-white pt-14 pb-8">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Row 1: Logo & Description */}
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
            Academic guidance for students looking for clearer education
            pathways. Helping you complete your degree through legal and
            recognized university options.
          </p>
        </div>

        {/* Row 2: Dynamic Google Map */}
        {contact.map_link && (
          <div className="my-8 w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-md">
            <iframe
              title="Advise Edu Location Map"
              src={contact.map_link}
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full transition-opacity duration-300"
            />
          </div>
        )}

        {/* Row 3: Footer Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 py-6">
          {/* Column 1: Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">
              Explore
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="/btech"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                B.Tech Pathways
              </a>
              <a
                href="/arts"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Arts &amp; Science
              </a>
              <a
                href="/attestation"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Embassy Attestation
              </a>
              <a
                href="/#counselling"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Personal Counselling
              </a>
              <a
                href="/#check-eligibility"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Check Eligibility
              </a>
            </div>
          </div>

          {/* Column 2: Dynamic B.Tech Programs - First 5 Only */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">
              B.Tech Programs
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              {branches.slice(0, 5).map((item, index) => (
                <a
                  href="/btech"
                  key={`${item}-${index}`}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Dynamic Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">
              Services
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              {services.map((item, index) => (
                <a
                  href="/attestation"
                  key={`${item}-${index}`}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Dynamic Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/70">
              Contact Details
            </h4>

            <div className="mt-4 flex flex-col gap-3.5 text-sm text-white/80 font-medium">
              {contact.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white/70 shrink-0 mt-0.5" />
                  <span>{contact.address}</span>
                </div>
              )}

              {contact.phone && (
                <a
                  href={`tel:${phoneLink}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-white/70 shrink-0" />
                  <span>{contact.phone}</span>
                </a>
              )}

              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-white/70 shrink-0" />
                  <span className="break-all">{contact.email}</span>
                </a>
              )}

              {contact.opening_hours && (
                <div className="flex items-start gap-3 text-xs text-white/70 pt-1">
                  <Clock className="h-4 w-4 text-white/70 shrink-0 mt-0.5" />
                  <span>{contact.opening_hours}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Row 4: Copyright */}
        <div className="mt-8 pt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between text-xs font-medium text-white/60">
          <div>
            © 2026 Advise Edu. All rights reserved. | Legal &amp; University
            Recognized Guidance
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
