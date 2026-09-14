export const inquiryTypeValues = ["staffing", "privacy", "terms", "cancellation", "general"] as const;

export type InquiryType = (typeof inquiryTypeValues)[number];

export function normalizeInquiryType(value: string | null | undefined): InquiryType {
  return inquiryTypeValues.includes(value as InquiryType) ? value as InquiryType : "staffing";
}

export function isStaffingInquiry(value: InquiryType): boolean {
  return value === "staffing";
}

export function formatPhone(countryCode: string, localNumber: string): string {
  const local = localNumber.trim();
  return local ? `${countryCode.trim()} ${local}`.trim() : "";
}

export function submissionDestination(value: InquiryType): string {
  return isStaffingInquiry(value) ? "/thank-you" : `/request-received?inquiry=${encodeURIComponent(value)}`;
}
