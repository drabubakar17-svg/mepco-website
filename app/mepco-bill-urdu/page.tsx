import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Bill Check Urdu - میپکو بل آن لائن چیک کریں",
  description:
    "MEPCO bill check Urdu guide. اپنا میپکو بجلی بل 14 digit reference number سے online check کرنے کا آسان طریقہ۔",
};

export default function MepcoBillUrduPage() {
  return (
    <main className="mx-auto max-w-[900px] px-5 py-10 text-gray-900 leading-relaxed">
      {/* English heading remains Left-to-Right */}
      <h1 className="mb-5 text-4xl font-bold text-[#005b2e] md:text-5xl">
        MEPCO Bill Check Urdu
      </h1>

      {/* Urdu paragraphs need RTL support and proper text alignment */}
      <p className="text-lg text-right dir-rtl font-normal">
        اگر آپ اپنا MEPCO بجلی بل online check کرنا چاہتے ہیں تو آپ کو اپنے
        پچھلے بجلی بل پر موجود 14 digit reference number کی ضرورت ہوتی ہے۔
      </p>

      <section className="mt-8 text-right dir-rtl" aria-labelledby="urdu-steps-heading">
        <h2 id="urdu-steps-heading" className="mb-4 text-2xl font-semibold md:text-3xl">
          میپکو بل آن لائن کیسے چیک کریں؟
        </h2>

        {/* Replaced list-inside list-decimal for proper RTL numbering layout */}
        <ol className="mr-5 list-decimal space-y-2 text-base">
          <li>اپنا 14 digit reference number تلاش کریں۔</li>
          <li>homepage پر reference number enter کریں۔</li>
          <li>Check Bill button پر click کریں۔</li>
          <li>اپنا duplicate bill view، download یا print کریں۔</li>
        </ol>
      </section>

      <section className="mt-8 text-right dir-rtl" aria-labelledby="urdu-ref-heading">
        <h2 id="urdu-ref-heading" className="mb-4 text-2xl font-semibold md:text-3xl">
          Reference Number کہاں لکھا ہوتا ہے؟
        </h2>

        <p>
          Reference number عام طور پر آپ کے پچھلے MEPCO electricity bill پر
          لکھا ہوتا ہے۔ یہ 14 digits پر مشتمل ہوتا ہے اور اسی سے duplicate bill
          online open ہوتا ہے۔
        </p>
      </section>

      {/* Notice box retains mixed language styling safely */}
      <section className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6 text-right dir-rtl" aria-labelledby="notice-heading">
        <h2 id="notice-heading" className="mb-2 text-xl font-bold text-amber-950">
          Important Notice
        </h2>

        <p className="text-sm text-amber-900 leading-normal">
          یہ website ایک independent informational portal ہے۔ یہ MEPCO، PITC،
          WAPDA یا کسی government department کی official website نہیں ہے۔
        </p>
      </section>

      {/* Button wrapper ensures it sits correctly on the layout */}
      <div className="mt-8 text-left">
        <Link
          href="/"
          className="inline-block rounded-xl bg-[#005b2e] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#004221] focus:outline-none focus:ring-4 focus:ring-green-200"
        >
          Back To Homepage
        </Link>
      </div>
    </main>
  );
}