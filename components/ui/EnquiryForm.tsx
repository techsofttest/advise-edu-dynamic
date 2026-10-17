"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { COLORS } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export type FormVariant = "orange" | "blue" | "green" | "darkBlue" | "gold";

export interface EnquiryFormProps {
  title: string;
  subtitle?: string;
  variant?: FormVariant;
  buttonText?: string;
  compact?: boolean;
}

interface FloatingInputProps {
  label: string;
  type?: string;
  required?: boolean;
  name?: string;
}

function FloatingInput({
  label,
  type = "text",
  required = false,
  name,
}: FloatingInputProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const id = label.toLowerCase().replace(/[^a-z0-9]/g, "-");

  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        name={name || id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`h-12 w-full rounded-lg border bg-white px-3.5 pt-4 pb-1 text-sm font-medium text-neutral-900 outline-none transition-all duration-200 ${
          isFocused
            ? "border-[#1B75BB] ring-2 ring-[#1B75BB]/20"
            : "border-neutral-300 hover:border-neutral-400"
        }`}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-3.5 transition-all duration-200 ease-in-out ${
          isFloating
            ? "top-1 text-[11px] font-semibold text-neutral-600"
            : "top-3.5 text-sm font-medium text-neutral-500"
        }`}
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
    </div>
  );
}

export function EnquiryForm({
  title,
  subtitle,
  variant = "blue",
  buttonText = "SUBMIT",
  compact = false,
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const formStyles = {
    orange: {
      bg: COLORS.accent, // #F6921E
      text: "text-white",
      subtext: "text-white/90",
      buttonClass:
        "bg-neutral-950 hover:bg-neutral-900 !text-white border-neutral-950",
    },
    blue: {
      bg: COLORS.primary, // #1B75BB
      text: "text-white",
      subtext: "text-white/90",
      buttonClass:
        "bg-[#FAAF40] hover:bg-[#e59e31] !text-neutral-950 font-black border-[#FAAF40]",
    },
    green: {
      bg: COLORS.secondary, // #26A9E0
      text: "text-white",
      subtext: "text-white/90",
      buttonClass:
        "bg-neutral-950 hover:bg-neutral-900 !text-white border-neutral-950",
    },
    darkBlue: {
      bg: COLORS.primaryDark, // #125488
      text: "text-white",
      subtext: "text-white/90",
      buttonClass:
        "bg-[#FAAF40] hover:bg-[#e59e31] !text-neutral-950 font-black border-[#FAAF40]",
    },
    gold: {
      bg: COLORS.accentLight, // #FAAF40
      text: "text-neutral-950",
      subtext: "text-neutral-800",
      buttonClass:
        "bg-[#125488] hover:bg-[#0e436d] !text-white border-[#125488]",
    },
  };

  const current = formStyles[variant];

  return (
    <div
      className={`w-full rounded-2xl p-6 sm:p-8 font-body ${current.text}`}
      style={{
        backgroundColor: current.bg,
      }}
    >
      <div className="mb-6">
        <h3
          className={`font-heading text-2xl font-bold tracking-tight sm:text-3xl ${current.text}`}
        >
          {title}
        </h3>

        {subtitle && (
          <p
            className={`mt-1.5 text-sm leading-relaxed font-medium ${current.subtext}`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {submitted ? (
        <div className="bg-white rounded-xl p-8 text-center shadow-sm">
          <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-[#26A9E0]" />

          <p className="text-base font-bold text-neutral-900">
            Thank you. Our advisor will contact you shortly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-4"
        >
          {/* Row 1: Name & Phone Number */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FloatingInput label="Full Name" required />
            <FloatingInput label="Mobile Number" type="tel" required />
          </div>

          {/* Row 2: Email & Course */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FloatingInput label="Email Address" type="email" />

            <div className="relative">
              <select
                name="course"
                id="course"
                required
                defaultValue=""
                className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select Your Course
                </option>
                <option value="btech">B.Tech</option>
                <option value="ba">B.A.</option>
                <option value="bcom">B.Com.</option>
                <option value="bsc">B.Sc.</option>
                <option value="bba">BBA</option>
                <option value="bca">BCA</option>
                <option value="mba">MBA</option>
                <option value="mca">MCA</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Row 3: Branch & Completion Year */}
          {!compact ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FloatingInput label="Branch" />
              <FloatingInput label="Course Completion Year" />
            </div>
          ) : (
            <FloatingInput label="Branch" />
          )}

          {/* Row 4: Previous University Name */}
          {!compact && <FloatingInput label="Previous University Name" />}

          <div className="pt-2">
            <Button
              type="submit"
              fullWidth
              size="lg"
              className={`font-extrabold ${current.buttonClass}`}
            >
              {buttonText}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
