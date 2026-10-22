"use client";

import { useEffect, useState, type FormEvent } from "react";
import { formatPhone, isStaffingInquiry, normalizeInquiryType, submissionDestination, type InquiryType } from "./form-contract";

type Props = { endpoint?: string; encoding?: "json" | "form" };
type TrackerWindow = Window & { acrTracker?: { trackLead?: (payload: Record<string, unknown>) => void } };


const companySizes = ["1-5", "5-10", "11-50", "51-250", "251-1k", "1k+"];
const positions = ["Just 1 Position", "2-5 Positions", "6-10 Positions", "11-50 Positions", "51-100 Positions", "101-500 Positions", "501-1,000 Positions", "Over 1,000 Positions"];
const referrals = ["Google", "Email", "LinkedIn", "Reddit", "X / Twitter", "Referral", "ChatGPT / AI", "Outbound Outreach", "Other"];
const inquiryTypes: Array<[InquiryType, string]> = [
  ["staffing", "Staffing or outsourcing help"],
  ["privacy", "Privacy request"],
  ["terms", "Terms question"],
  ["cancellation", "Cancellation help"],
  ["general", "General inquiry"],
];
const countryCodes = [
  ["🇺🇸", "+1"], ["🇨🇦", "+1"], ["🇮🇩", "+62"], ["🇵🇭", "+63"], ["🇬🇧", "+44"],
  ["🇦🇺", "+61"], ["🇳🇿", "+64"], ["🇸🇬", "+65"], ["🇮🇳", "+91"], ["🇦🇪", "+971"],
  ["🇲🇽", "+52"], ["🇧🇷", "+55"], ["🇿🇦", "+27"], ["🇩🇪", "+49"], ["🇫🇷", "+33"],
];

export default function StandardContactForm({ endpoint = "/api/contact", encoding = "form" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [referral, setReferral] = useState("");
  const [inquiryType, setInquiryType] = useState<InquiryType>("staffing");
  const isStaffing = isStaffingInquiry(inquiryType);

  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const zones: Record<string, string> = {
      "Asia/Jakarta": "+62", "Asia/Makassar": "+62", "Asia/Jayapura": "+62", "Asia/Manila": "+63",
      "Europe/London": "+44", "Australia/Sydney": "+61", "Australia/Melbourne": "+61",
      "Pacific/Auckland": "+64", "Asia/Singapore": "+65", "Asia/Kolkata": "+91", "Asia/Dubai": "+971",
    };
    if (zones[zone]) setCountryCode(zones[zone]);
    const requested = new URLSearchParams(window.location.search).get("inquiry");
    setInquiryType(normalizeInquiryType(requested));
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website_url") || "").trim()) return;
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = formatPhone(countryCode, String(data.get("phoneLocal") || ""));
    const payload: Record<string, string> = {
      firstName, lastName, name: `${firstName} ${lastName}`.trim(), fullName: `${firstName} ${lastName}`.trim(),
      email: String(data.get("email") || ""), businessEmail: String(data.get("email") || ""), phone,
      companyName: String(data.get("companyName") || ""), company: String(data.get("companyName") || ""),
      website: String(data.get("website") || ""), companySize: String(data.get("companySize") || ""),
      positions: String(data.get("positions") || ""), positionsToFill: String(data.get("positions") || ""),
      referral: String(data.get("referral") || ""), howTheyHeard: String(data.get("referral") || ""),
      referralSpecify: String(data.get("referralSpecify") || ""), message: String(data.get("message") || ""),
      inquiryType, source: isStaffing ? "contact-form" : "policy-general-contact-form", formId: "contactPageForm",
    };
    setSubmitting(true);
    setError("");
    try {
      const request = encoding === "form"
        ? { method: "POST", body: new URLSearchParams(payload) }
        : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) };
      const response = await fetch(endpoint, request);
      if (!response.ok) throw new Error("Lead endpoint rejected the request");
      try { (window as TrackerWindow).acrTracker?.trackLead?.(payload); } catch {}
      window.location.assign(submissionDestination(inquiryType));
    } catch {
      try {
        const tracker = (window as TrackerWindow).acrTracker?.trackLead;
        if (tracker) {
          tracker(payload);
          window.location.assign(submissionDestination(inquiryType));
          return;
        }
      } catch {}
      setError("We could not submit your request. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="sa-form-card">
      <h2>{isStaffing ? "Tell us what recurring work you want to hand off" : "Send a policy or general inquiry"}</h2>
      <form action={endpoint} method="post" onSubmit={submit} id="contactPageForm">
        <input className="sa-hp" name="website_url" type="hidden" tabIndex={-1} autoComplete="off" aria-label="Leave this field empty" />
        <label>What can we help with? *<select name="inquiryType" required value={inquiryType} onChange={(e) => setInquiryType(e.target.value as InquiryType)}>{inquiryTypes.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
        <div className="sa-grid">
          <label>First Name *<input name="firstName" required autoComplete="given-name" /></label>
          <label>Last Name *<input name="lastName" required autoComplete="family-name" /></label>
        </div>
        <label>{isStaffing ? "Business Email" : "Email"} *<input name="email" type="email" required autoComplete="email" /></label>
        {isStaffing ? <><label>Phone Number *<span className="sa-phone"><select name="countryCode" aria-label="Country code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>{countryCodes.map(([flag, code], i) => <option value={code} key={`${code}-${i}`}>{flag} {code}</option>)}</select><input name="phoneLocal" type="tel" required autoComplete="tel-national" placeholder="Phone number" /></span></label>
        <div className="sa-grid">
          <label>Company Name *<input name="companyName" required autoComplete="organization" /></label>
          <label>Website / URL<input name="website" placeholder="example.com" autoComplete="url" /></label>
        </div>
        <div className="sa-grid">
          <label>Company Size *<select name="companySize" required defaultValue=""><option value="" disabled>Select...</option>{companySizes.map((x) => <option key={x}>{x}</option>)}</select></label>
          <label>How Many Positions to Fill *<select name="positions" required defaultValue=""><option value="" disabled>Select...</option>{positions.map((x) => <option key={x}>{x}</option>)}</select></label>
        </div>
        <label>How Did You Hear About Us? *<select name="referral" required value={referral} onChange={(e) => setReferral(e.target.value)}><option value="" disabled>Select...</option>{referrals.map((x) => <option key={x}>{x}</option>)}</select></label>
        {referral === "Other" ? <label>Please Specify *<input name="referralSpecify" required /></label> : null}</> : null}
        <label>Message{isStaffing ? "" : " *"}<textarea name="message" rows={4} required={!isStaffing} /></label>
        {error ? <p className="sa-error" role="alert">{error}</p> : null}
        <button type="submit" disabled={submitting}>{submitting ? "Submitting..." : isStaffing ? "Book a free call" : "Send inquiry"}</button>
      </form>
      <style jsx>{`
        .sa-form-card{width:100%;max-width:650px;margin:0 auto;background:#fffdf8;border:1px solid #d9d3c8;border-radius:18px;padding:18px 22px 20px;box-shadow:0 18px 48px rgba(23,42,58,.13);color:#344a57;text-align:left}
        h2{margin:0 0 10px;color:#172a3a;font-size:19px;line-height:1.25;font-weight:800;letter-spacing:-.02em}
        form{display:flex;flex-direction:column;gap:8px}.sa-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        label{display:flex;flex-direction:column;gap:3px;font-size:10px;line-height:1.2;font-weight:800;color:#344a57}
        input,select,textarea{box-sizing:border-box;width:100%;border:1px solid #bdc8c5;border-radius:8px;background:#fff;color:#1f2937;font:inherit;font-size:12px;padding:7px 9px;outline:none;min-height:32px}
        input:focus,select:focus,textarea:focus{border-color:#0b655d;box-shadow:0 0 0 3px rgba(11,101,93,.14)}
        .sa-phone{display:grid;grid-template-columns:105px 1fr;border:1px solid #bdc8c5;border-radius:8px;overflow:hidden}.sa-phone:focus-within{border-color:#0b655d;box-shadow:0 0 0 3px rgba(11,101,93,.14)}
        .sa-phone select,.sa-phone input{border:0;border-radius:0;box-shadow:none!important}.sa-phone select{border-right:1px solid #dbe1ea;padding-right:4px}.sa-phone input{min-width:0}
        textarea{resize:vertical;min-height:42px;max-height:64px}button{width:100%;border:0;border-radius:9px;background:#c94929;color:#fff;padding:10px 16px;font-size:14px;font-weight:800;cursor:pointer;box-shadow:0 7px 16px rgba(201,73,41,.2)}
        button:hover{background:#bd3f25}button:disabled{cursor:wait;opacity:.65}.sa-error{margin:0;color:#b42318;font-size:11px}.sa-hp{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:0!important}
        @media(max-width:980px){.sa-form-card{max-width:760px;padding:28px}.sa-form-card h2{font-size:25px;margin-bottom:20px}.sa-form-card form{gap:17px}.sa-form-card label{gap:7px;font-size:15px}.sa-form-card input,.sa-form-card select,.sa-form-card textarea{min-height:48px;padding:12px 14px;font-size:15px}.sa-form-card textarea{min-height:110px;max-height:none}.sa-form-card button{padding:16px;font-size:18px}}
        @media(max-width:700px){.sa-form-card{padding:24px 18px 28px;border-radius:16px}.sa-grid{grid-template-columns:1fr;gap:17px}.sa-phone{grid-template-columns:112px 1fr}}
      `}</style>
    </div>
  );
}
