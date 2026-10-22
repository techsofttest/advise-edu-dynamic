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

interface EnquiryFormData {
  full_name: string;
  phone: string;
  email: string;
  course: string;
  branch: string;
  course_completion_year: string;
  previous_university_name: string;
}

interface FloatingInputProps {
  label: string;
  type?: string;
  required?: boolean;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

function FloatingInput({
  label,
  type = "text",
  required = false,
  name,
  value,
  onChange,
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const id = `enquiry-${name.replace(/[^a-zA-Z0-9]/g, "-")}`;

  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
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
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState<EnquiryFormData>({
    full_name: "",
    phone: "",
    email: "",
    course: "",
    branch: "",
    course_completion_year: "",
    previous_university_name: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrorMessage("");
  };

  const formStyles = {
    orange: {
      bg: COLORS.accent,
      text: "text-white",
      subtext: "text-white/90",
      buttonClass:
        "bg-neutral-950 hover:bg-neutral-900 !text-white border-neutral-950",
    },
    blue: {
      bg: COLORS.primary,
      text: "text-white",
      subtext: "text-white/90",
      buttonClass:
        "bg-[#FAAF40] hover:bg-[#e59e31] !text-neutral-950 font-black border-[#FAAF40]",
    },
    green: {
      bg: COLORS.secondary,
      text: "text-white",
      subtext: "text-white/90",
      buttonClass:
        "bg-neutral-950 hover:bg-neutral-900 !text-white border-neutral-950",
    },
    darkBlue: {
      bg: COLORS.primaryDark,
      text: "text-white",
      subtext: "text-white/90",
      buttonClass:
        "bg-[#FAAF40] hover:bg-[#e59e31] !text-neutral-950 font-black border-[#FAAF40]",
    },
    gold: {
      bg: COLORS.accentLight,
      text: "text-neutral-950",
      subtext: "text-neutral-800",
      buttonClass:
        "bg-[#125488] hover:bg-[#0e436d] !text-white border-[#125488]",
    },
  };

  const current = formStyles[variant];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/enquiries`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const result: ApiResponse = await response.json();

      if (!response.ok || result.success === false) {
        const firstValidationError = result.errors
          ? Object.values(result.errors).flat()[0]
          : undefined;

        throw new Error(
          firstValidationError ||
            result.message ||
            "Unable to submit your enquiry. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Enquiry submission failed:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-full rounded-2xl p-6 sm:p-8 font-body ${current.text}`}
      style={{ backgroundColor: current.bg }}
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
        <div className="rounded-xl bg-white p-8 text-center shadow-sm">
          <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-[#26A9E0]" />

          <p className="text-base font-bold text-neutral-900">
            Thank you. Our advisor will contact you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: Name & Phone Number */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FloatingInput
              label="Full Name"
              name="full_name"
              value={formData.full_name}
              onChange={handleInputChange}
              required
            />

            <FloatingInput
              label="Mobile Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Row 2: Email & Course */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FloatingInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <FloatingInput
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
            />
          </div>

          {/* Row 3: Branch & Completion Year */}
          {!compact ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FloatingInput
                label="Branch"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
              />

              <FloatingInput
                label="Course Completion Year"
                name="course_completion_year"
                value={formData.course_completion_year}
                onChange={handleInputChange}
              />
            </div>
          ) : (
            <FloatingInput
              label="Branch"
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
            />
          )}

          {/* Row 4: Previous University Name */}
          {!compact && (
            <FloatingInput
              label="Previous University Name"
              name="previous_university_name"
              value={formData.previous_university_name}
              onChange={handleInputChange}
            />
          )}

          {/* API Error Message */}
          {errorMessage && (
            <div
              role="alert"
              className="rounded-lg border border-red-200 bg-white p-3 text-sm font-medium text-red-600"
            >
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              fullWidth
              size="lg"
              disabled={loading}
              className={`font-extrabold ${current.buttonClass} ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              {loading ? "SUBMITTING..." : buttonText}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
