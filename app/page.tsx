"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import Image from "next/image";
import SolarRoiClient from "./mepco-solar-roi-calculator/SolarRoiClient";
// ==================== TYPES ====================
interface SlabInfo {
  title: string;
  urdu: string;
  roman: string;
  message: string;
  alert: boolean;
  color: string;
  icon: string;
}

interface ConsumerInfo {
  title: string;
  urdu: string;
  roman: string;
  status: string;
  color: string;
}

interface BillBreakdown {
  energy: number;
  fpa: number;
  fixedCharges: number;
  tax: number;
  total: number;
}

interface CityItem {
  name: string;
  slug: string;
  anchor: string;
  title: string;
  consumers: string;
}

interface GuideLink {
  href: string;
  icon: string;
  title: string;
  desc: string;
  category: string;
}

// ==================== CONSTANTS ====================
const SITE_NAME = "MEPCO Online Bill Check 2026";
const SITE_URL  = "https://www.mepcoonlinebill.net";
const HELPLINE  = "0800-63726";
const FPA_RATE  = 3.5;

const CITIES: CityItem[] = [
  { name: "Multan",         slug: "/multan-bill-check",         anchor: "MEPCO Bill Check Multan",         title: "Check MEPCO Bill Online - Multan",         consumers: "2.8M+" },
  { name: "Khanewal",       slug: "/khanewal-bill-check",       anchor: "MEPCO Bill Check Khanewal",       title: "Check MEPCO Bill Online - Khanewal",       consumers: "1.2M+" },
  { name: "Bahawalpur",     slug: "/bahawalpur-bill-check",     anchor: "MEPCO Bill Check Bahawalpur",     title: "Check MEPCO Bill Online - Bahawalpur",     consumers: "1.5M+" },
  { name: "Vehari",         slug: "/vehari-bill-check",         anchor: "MEPCO Bill Check Vehari",         title: "Check MEPCO Bill Online - Vehari",         consumers: "900K+" },
  { name: "Lodhran",        slug: "/lodhran-bill-check",        anchor: "MEPCO Bill Check Lodhran",        title: "Check MEPCO Bill Online - Lodhran",        consumers: "600K+" },
  { name: "Sahiwal",        slug: "/sahiwal-bill-check",        anchor: "MEPCO Bill Check Sahiwal",        title: "Check MEPCO Bill Online - Sahiwal",        consumers: "1.1M+" },
  { name: "Rahim Yar Khan", slug: "/rahim-yar-khan-bill-check", anchor: "MEPCO Bill Check Rahim Yar Khan", title: "Check MEPCO Bill Online - Rahim Yar Khan", consumers: "1.8M+" },
  { name: "Muzaffargarh",   slug: "/muzaffargarh-bill-check",   anchor: "MEPCO Bill Check Muzaffargarh",   title: "Check MEPCO Bill Online - Muzaffargarh",   consumers: "1.0M+" },
  { name: "Dera Ghazi Khan",slug: "/dera-ghazi-khan-bill-check",anchor: "MEPCO Bill Check DG Khan",        title: "Check MEPCO Bill Online - DG Khan",        consumers: "1.3M+" },
  { name: "Bahawalnagar",   slug: "/bahawalnagar-bill-check",   anchor: "MEPCO Bill Check Bahawalnagar",   title: "Check MEPCO Bill Online - Bahawalnagar",   consumers: "800K+" },
  { name: "Layyah",         slug: "/layyah-bill-check",         anchor: "MEPCO Bill Check Layyah",         title: "Check MEPCO Bill Online - Layyah",         consumers: "500K+" },
  { name: "Taunsa",         slug: "/taunsa-bill-check",         anchor: "MEPCO Bill Check Taunsa",         title: "Check MEPCO Bill Online - Taunsa",         consumers: "300K+" },
  { name: "Rajanpur",       slug: "/rajanpur-bill-check",       anchor: "MEPCO Bill Check Rajanpur",       title: "Check MEPCO Bill Online - Rajanpur",       consumers: "400K+" },
];

// SERVICES with Urdu + Roman Urdu
const SERVICES: { icon: string; title: string; desc: string; descUrdu: string; descRoman: string; href: string; color: string }[] = [
  { icon: "📄", title: "Duplicate Bill",   desc: "View, print, or download your latest MEPCO electricity bill online.", descUrdu: "اپنا میپکو بجلی بل آن لائن دیکھیں، پرنٹ کریں یا ڈاؤن لوڈ کریں۔", descRoman: "Apna MEPCO bijli bill online dekhein, print ya download karein.", href: "#bill",                          color: "from-blue-500 to-blue-600"   },
  { icon: "🧮", title: "Bill Calculator",  desc: "Estimate your monthly bill amount using consumed units.",             descUrdu: "استعمال شدہ یونٹ کے ذریعے ماہانہ بل کا تخمینہ لگائیں۔",           descRoman: "Units ke zariye apne maahana bill ka andaza lagaein.",           href: "#calculator",                    color: "from-green-500 to-green-600"  },
  { icon: "⏰", title: "Peak Hours",       desc: "Know high usage hours and reduce your electricity cost.",             descUrdu: "پیک اوقات جانیں اور بجلی کا خرچ کم کریں۔",                       descRoman: "Peak hours janein aur bijli ka kharcha kam karein.",             href: "#peak-hours",                    color: "from-orange-500 to-orange-600"},
  { icon: "🔢", title: "Reference Guide",  desc: "Learn where your 14-digit reference number is written.",             descUrdu: "جانیں کہ 14 ہندسوں کا ریفرنس نمبر کہاں لکھا ہوتا ہے۔",           descRoman: "Janein ke 14 handson ka reference number kahan likha hota hai.", href: "#reference-guide",               color: "from-purple-500 to-purple-600"},
  { icon: "🏙️", title: "Cities Coverage", desc: "MEPCO service areas across South Punjab regions.",                   descUrdu: "جنوبی پنجاب میں میپکو کے سروس ایریاز۔",                          descRoman: "South Punjab mein MEPCO ke service areas.",                     href: "#cities",                        color: "from-teal-500 to-teal-600"   },
  { icon: "💡", title: "Saving Tips",      desc: "Simple habits to reduce monthly electricity bill.",                  descUrdu: "بجلی کا بل کم کرنے کے آسان طریقے۔",                             descRoman: "Bijli ka bill kam karne ke aasan tareeqe.",                     href: "#peak-hours",                    color: "from-yellow-500 to-yellow-600"},
  { icon: "☀️", title: "Solar Calculator", desc: "Calculate solar savings and net metering credits.",                  descUrdu: "سولر بچت اور نیٹ میٹرنگ کریڈٹس کا حساب لگائیں۔",                descRoman: "Solar bachat aur net metering credits ka hisaab lagaein.",      href: "/mepco-solar-savings-calculator", color: "from-amber-500 to-amber-600" },
  { icon: "🛡️", title: "Consumer Status", desc: "Check protected vs unprotected consumer status.",                    descUrdu: "محفوظ اور غیر محفوظ صارف کی حیثیت چیک کریں۔",                   descRoman: "Mahfooz aur ghair mahfooz consumer ki haisiyat check karein.",   href: "#calculator",                    color: "from-red-500 to-red-600"     },
];

const APPLIANCE_WATTS: Record<string, number> = {
  fan: 80, fridge: 180, iron: 1000, waterMotor: 750,
  airCooler: 250, tv: 120, washingMachine: 500,
};

// FAQs with English + Urdu + Roman Urdu
const FAQS: [string, string, string, string][] = [
  [
    "How can I check MEPCO bill online?",
    "Enter your 14-digit reference number in the MEPCO bill checker and click Check Bill. Your bill will open on the official PITC bill portal.",
    "میپکو بل آن لائن چیک کرنے کے لیے 14 ہندسوں کا ریفرنس نمبر درج کریں اور چیک بل پر کلک کریں۔",
    "MEPCO bill online check karne ke liye 14 handson ka reference number enter karein aur Check Bill par click karein."
  ],
  [
    "Can I download a duplicate MEPCO bill?",
    "Yes, after opening your bill on the official PITC portal, you can print or download your duplicate MEPCO electricity bill.",
    "جی ہاں، آفیشل PITC پورٹل پر بل کھولنے کے بعد آپ ڈپلیکیٹ بل پرنٹ یا ڈاؤن لوڈ کر سکتے ہیں۔",
    "Jee haan, official PITC portal par bill kholne ke baad aap duplicate bill print ya download kar sakte hain."
  ],
  [
    "Where can I find my 14-digit MEPCO reference number?",
    "Your 14-digit reference number is printed on your previous MEPCO electricity bill, usually near the top section of the bill.",
    "آپ کا 14 ہندسوں کا ریفرنس نمبر آپ کے پرانے میپکو بل پر اوپری حصے میں درج ہوتا ہے۔",
    "Aapka 14 handson ka reference number aapke purane MEPCO bill par oopri hisse mein darj hota hai."
  ],
  [
    "Can I check MEPCO bill by customer ID?",
    "Some bill portals support customer ID, but MEPCO duplicate bill checking commonly uses the 14-digit reference number.",
    "کچھ پورٹلز کسٹمر آئی ڈی سپورٹ کرتے ہیں، لیکن عام طور پر 14 ہندسوں کا ریفرنس نمبر استعمال ہوتا ہے۔",
    "Kuch portals customer ID support karte hain, lekin aam tor par 14 handson ka reference number use hota hai."
  ],
  [
    "Why is my MEPCO bill high this month?",
    "Your MEPCO bill may increase due to higher units, tariff slab changes, FPA, GST, QTA, fixed charges, arrears, or late payment surcharge.",
    "زیادہ یونٹ، سلیب تبدیلی، ایف پی اے، جی ایس ٹی، کیو ٹی اے، فکسڈ چارجز یا لیٹ فیس کی وجہ سے بل زیادہ آ سکتا ہے۔",
    "Zyada units, slab tabdeeli, FPA, GST, QTA, fixed charges ya late fee ki wajah se bill zyada aa sakta hai."
  ],
  [
    "What is FPA in MEPCO bill?",
    "FPA means Fuel Price Adjustment. It may change monthly based on fuel cost adjustments and can increase or decrease your electricity bill.",
    "ایف پی اے کا مطلب فیول پرائس ایڈجسٹمنٹ ہے۔ یہ ماہانہ تبدیل ہو سکتی ہے اور بل بڑھا یا گھٹا سکتی ہے۔",
    "FPA ka matlab Fuel Price Adjustment hai. Ye maahana change ho sakti hai aur bill barha ya ghata sakti hai."
  ],
  [
    "What is QTA in electricity bill?",
    "QTA means Quarterly Tariff Adjustment. It is an official tariff adjustment that may appear in electricity bills from time to time.",
    "کیو ٹی اے کا مطلب سہ ماہی ٹیرف ایڈجسٹمنٹ ہے جو وقتاً فوقتاً بل میں شامل ہو سکتی ہے۔",
    "QTA ka matlab Quarterly Tariff Adjustment hai jo waqtan fawqtan bill mein shamil ho sakti hai."
  ],
  [
    "What are MEPCO peak hours?",
    "MEPCO peak hours are high-demand electricity usage hours. Avoiding heavy appliances during peak hours may help reduce electricity costs.",
    "پیک اوقات میں بجلی کی مانگ زیادہ ہوتی ہے۔ بھاری آلات سے گریز بل کم کرنے میں مدد کرتا ہے۔",
    "Peak hours mein bijli ki demand zyada hoti hai. Bhari appliances se gureiz bill kam karne mein madad karta hai."
  ],
  [
    "Is this the official MEPCO website?",
    "No. This is an independent informational website. Official bill data is provided through the PITC and MEPCO bill systems.",
    "نہیں۔ یہ ایک آزاد معلوماتی ویب سائٹ ہے۔ آفیشل بل ڈیٹا PITC اور میپکو سسٹم سے آتا ہے۔",
    "Nahi. Ye ek independent informational website hai. Official bill data PITC aur MEPCO system se aata hai."
  ],
  [
    "Is MEPCO bill checking free?",
    "Yes, checking your MEPCO duplicate bill online is free. You only need your valid reference number or consumer information.",
    "جی ہاں، میپکو ڈپلیکیٹ بل آن لائن چیک کرنا مفت ہے۔ صرف ریفرنس نمبر درکار ہے۔",
    "Jee haan, MEPCO duplicate bill online check karna muft hai. Sirf reference number darkaar hai."
  ],
  [
    "Can I check MEPCO bill on mobile?",
    "Yes, this website is mobile-friendly and allows users to access MEPCO bill guides, calculators, and bill checking links from mobile devices.",
    "جی ہاں، یہ ویب سائٹ موبائل فرینڈلی ہے اور آپ موبائل سے بل چیک، گائیڈز اور کیلکولیٹر استعمال کر سکتے ہیں۔",
    "Jee haan, ye website mobile friendly hai aur aap mobile se bill check, guides aur calculator use kar sakte hain."
  ],
  [
    "What should I do if my MEPCO bill is not found?",
    "Check that your reference number is exactly 14 digits and entered without spaces. If the issue continues, try again later on the official PITC portal.",
    "یقینی بنائیں کہ ریفرنس نمبر 14 ہندسوں کا ہے اور بغیر خالی جگہ درج ہے۔ مسئلہ برقرار رہے تو PITC پورٹل پر دوبارہ کوشش کریں۔",
    "Yaqeeni banaein ke reference number 14 handson ka hai aur baghair space ke darj hai. Masla barqarar rahe to PITC portal par dobara try karein."
  ],
];

const GUIDE_LINKS: GuideLink[] = [
  { href: "/mepco-duplicate-bill-guide",            icon: "📄", title: "Duplicate Bill Guide",         desc: "Download, print and save your MEPCO duplicate bill online.",                                 category: "Bill"       },
  { href: "/mepco-bill-due-date-guide",             icon: "📅", title: "Due Date Guide",               desc: "Check bill due date, late fee and amount after due date.",                                   category: "Bill"       },
  { href: "/mepco-bill-installment-guide",          icon: "💰", title: "Bill Installment Guide",       desc: "Learn how to request installment relief for a high MEPCO bill.",                             category: "Bill"       },
  { href: "/mepco-meter-reading-guide",             icon: "⚡", title: "Meter Reading Guide",          desc: "Read your electricity meter and calculate monthly units.",                                    category: "Meter"      },
  { href: "/mepco-meter-complaint-guide",           icon: "🔧", title: "Meter Complaint Guide",        desc: "Report wrong reading, fast meter, damaged meter or display issue.",                          category: "Meter"      },
  { href: "/mepco-wrong-bill-solution",             icon: "❌", title: "Wrong Bill Solution",          desc: "Fix overbilling, wrong reading, arrears or unexpected charges.",                             category: "Bill"       },
  { href: "/mepco-reference-number-guide",          icon: "🔢", title: "Reference Number Guide",       desc: "Find your 14-digit MEPCO reference number on your bill.",                                   category: "Guide"      },
  { href: "/mepco-customer-id-guide",               icon: "🆔", title: "Customer ID Guide",            desc: "Understand Customer ID and how it differs from reference number.",                           category: "Guide"      },
  { href: "/mepco-peak-hours-guide",                icon: "⏰", title: "Peak Hours Guide",             desc: "Check MEPCO peak hours and reduce electricity usage cost.",                                  category: "Guide"      },
  { href: "/mepco-taxes-explained",                 icon: "🧾", title: "Taxes Explained",              desc: "Learn GST, FPA, QTA, fixed charges and other bill items.",                                  category: "Taxes"      },
  { href: "/mepco-bill-slabs-guide",                icon: "📊", title: "Bill Slabs Guide",             desc: "Understand unit rates and electricity bill slabs.",                                          category: "Taxes"      },
  { href: "/mepco-new-connection-guide",            icon: "🔌", title: "New Connection Guide",         desc: "Apply for a new MEPCO electricity connection and track application status.",                 category: "Connection" },
  { href: "/mepco-bill-payment-methods-guide",      icon: "💳", title: "Payment Methods Guide",        desc: "Learn online bill payment through banks, apps and wallets.",                                 category: "Bill"       },
  { href: "/mepco-name-change-guide",               icon: "📝", title: "Name Change Guide",            desc: "Transfer electricity connection ownership and update bill records.",                         category: "Connection" },
  { href: "/mepco-demand-notice-guide",             icon: "📨", title: "Demand Notice Guide",          desc: "Understand demand notice fees, validity and payment process.",                               category: "Bill"       },
  { href: "/mepco-load-extension-guide",            icon: "⚙️", title: "Load Extension Guide",        desc: "Increase sanctioned load for home, shop or commercial use.",                                category: "Connection" },
  { href: "/mepco-net-metering-guide",              icon: "☀️", title: "Net Metering Guide",           desc: "Sell solar energy and understand net metering requirements.",                                category: "Solar"      },
  { href: "/mepco-tariff-guide",                    icon: "📈", title: "Tariff Guide",                 desc: "Understand residential, commercial and industrial tariff categories.",                       category: "Taxes"      },
  { href: "/mepco-security-deposit",                icon: "🏦", title: "Security Deposit Guide",       desc: "Learn security deposit rules, refund process and new connection requirements.",              category: "Connection" },
  { href: "/mepco-bill-correction-guide",           icon: "✏️", title: "Bill Correction Guide",       desc: "Fix incorrect charges, billing errors and consumer billing issues.",                        category: "Bill"       },
  { href: "/mepco-bill-not-received-guide",         icon: "📭", title: "Bill Not Received Guide",      desc: "What to do when your monthly electricity bill is not delivered.",                           category: "Bill"       },
  { href: "/mepco-transformer-complaint-guide",     icon: "🔌", title: "Transformer Complaint",        desc: "Report transformer faults, outages and electricity supply problems.",                       category: "Complaint"  },
  { href: "/mepco-bill-calculator",                 icon: "🧮", title: "Bill Calculator",              desc: "Estimate electricity charges using MEPCO bill calculator tools.",                           category: "Calculator" },
  { href: "/mepco-bill-urdu",                       icon: "🇵🇰", title: "Urdu Guide",                 desc: "Complete MEPCO bill guide in Urdu for Pakistani consumers.",                                category: "Guide"      },
  { href: "/mepco-complaint-tracking-guide",        icon: "📋", title: "Complaint Tracking",           desc: "Track complaint status and understand MEPCO complaint resolution process.",                 category: "Complaint"  },
  { href: "/mepco-disconnection-reconnection-guide",icon: "🔄", title: "Disconnection & Reconnection", desc: "Learn disconnection reasons, restoration process and reconnection rules.",                  category: "Connection" },
  { href: "/mepco-load-shedding-guide",             icon: "⚡", title: "Load Shedding Guide",          desc: "Understand outages, feeder shutdowns and electricity interruption issues.",                 category: "Guide"      },
  { href: "/mepco-change-of-tariff-guide",          icon: "📈", title: "Change of Tariff",             desc: "Convert domestic, commercial and other tariff categories correctly.",                       category: "Connection" },
  { href: "/mepco-bill-check-by-cnic",              icon: "🆔", title: "Bill Check By CNIC",           desc: "Learn whether MEPCO bill can be checked by CNIC and alternative methods.",                 category: "Guide"      },
  { href: "/mepco-200-units-rule",                  icon: "⚡", title: "200 Units Rule",               desc: "Learn protected consumer status, 200 unit limit and slab impact.",                         category: "Guide"      },
  { href: "/mepco-application-forms-guide",         icon: "📄", title: "Application Forms",            desc: "New connection, name change, load extension and complaint forms.",                          category: "Connection" },
  { href: "/mepco-qta-charges-guide",               icon: "📊", title: "QTA Charges Guide",            desc: "Learn what Quarterly Tariff Adjustment means and how it affects bills.",                   category: "Taxes"      },
  { href: "/mepco-protected-consumer-guide",        icon: "🛡️", title: "Protected Consumer",          desc: "Learn protected consumer meaning and 200 units bill impact.",                              category: "Guide"      },
  { href: "/mepco-unprotected-consumer-guide",      icon: "⚠️", title: "Unprotected Consumer",        desc: "Why bills increase after crossing usage limits.",                                           category: "Guide"      },
  { href: "/mepco-bill-increased-guide",            icon: "📈", title: "Why Bill Increased?",          desc: "Why MEPCO bill suddenly increased including slabs, FPA and taxes.",                        category: "Bill"       },
  { href: "/mepco-fpa-charges-guide",               icon: "🧾", title: "FPA Charges Guide",            desc: "What Fuel Price Adjustment means and how it affects charges.",                             category: "Taxes"      },
];

const ANNOUNCEMENTS = [
  "📢 MEPCO consumers can now check duplicate bills online 24/7 — میپکو صارفین اب 24 گھنٹے آن لائن بل چیک کر سکتے ہیں",
  "⚡ Peak hours: 6:30 PM to 10:30 PM — پیک اوقات میں بھاری آلات سے گریز کریں — Peak hours mein bhari appliances mat chalayein",
  "🧾 New FPA charges may apply — نئے ایف پی اے چارجز لاگو ہو سکتے ہیں — Naye FPA charges lagoo ho sakte hain",
  "☀️ Solar net metering applications open — سولر نیٹ میٹرنگ کی درخواستیں کھلی ہیں — Solar net metering ki darkhwastain khuli hain",
  "🛡️ Stay within 200 units for lower rates — 200 یونٹ کے اندر رہیں — 200 units ke andar rahein",
];

const QUICK_ACCESS = [
  { icon: "📄", label: "Check Bill",  labelUrdu: "بل چیک",    href: "#bill",                          desc: "Duplicate bill online"            },
  { icon: "🧮", label: "Calculator",  labelUrdu: "کیلکولیٹر", href: "#calculator",                    desc: "Estimate your bill"               },
  { icon: "🏙️", label: "Cities",     labelUrdu: "شہر",       href: "#cities",                        desc: "All MEPCO regions"                },
  { icon: "📚", label: "Guides",     labelUrdu: "گائیڈز",    href: "#guides",                        desc: `${GUIDE_LINKS.length}+ help guides`},
  { icon: "❓", label: "FAQs",       labelUrdu: "سوالات",    href: "#faq",                           desc: "Common questions"                 },
  { icon: "☀️", label: "Solar",      labelUrdu: "سولر",      href: "/mepco-solar-savings-calculator", desc: "Solar savings"                   },
];

const POPULAR_SEARCHES = [
  { label: "MEPCO Bill Check",          href: "#bill"                           },
  { label: "MEPCO Duplicate Bill",       href: "#bill"                           },
  { label: "MEPCO Bill Calculator",      href: "/mepco-bill-calculator"          },
  { label: "MEPCO Customer ID",          href: "/mepco-customer-id-guide"        },
  { label: "MEPCO Reference Number",     href: "/mepco-reference-number-guide"   },
  { label: "MEPCO Peak Hours",           href: "/mepco-peak-hours-guide"         },
  { label: "MEPCO Taxes Explained",      href: "/mepco-taxes-explained"          },
  { label: "MEPCO New Connection",       href: "/mepco-new-connection-guide"     },
  { label: "MEPCO 200 Units Rule",       href: "/mepco-200-units-rule"           },
  { label: "MEPCO FPA Charges",          href: "/mepco-fpa-charges-guide"        },
  { label: "MEPCO Protected Consumer",   href: "/mepco-protected-consumer-guide" },
  { label: "MEPCO Unprotected Consumer", href: "/mepco-unprotected-consumer-guide"},
  { label: "MEPCO Bill By CNIC",         href: "/mepco-bill-check-by-cnic"       },
  { label: "MEPCO Solar Calculator",     href: "/mepco-solar-savings-calculator" },
  { label: "MEPCO Bill Urdu",            href: "/mepco-bill-urdu"                },
  { label: "MEPCO Meter Reading",        href: "/mepco-meter-reading-guide"      },
  { label: "MEPCO Bill Slabs",           href: "/mepco-bill-slabs-guide"         },
  { label: "MEPCO QTA Charges",          href: "/mepco-qta-charges-guide"        },
  { label: "میپکو بل چیک ملتان",          href: "/multan-bill-check"              },
  { label: "میپکو بل چیک بہاولپور",        href: "/bahawalpur-bill-check"          },
  { label: "MEPCO Bill Rahim Yar Khan",  href: "/rahim-yar-khan-bill-check"      },
  { label: "MEPCO Bill Sahiwal",         href: "/sahiwal-bill-check"             },
  { label: "MEPCO Bill DG Khan",         href: "/dera-ghazi-khan-bill-check"     },
  { label: "MEPCO Why Bill Increased",   href: "/mepco-bill-increased-guide"     },
  { label: "Solar ROI Calculator Pakistan", href: "/mepco-solar-roi-calculator" },
];

const FOOTER_QUICK = [
  { label: "Check Bill",            href: "#bill"                           },
  { label: "MEPCO Bill Calculator", href: "/mepco-bill-calculator"          },
  { label: "MEPCO Bill Urdu",       href: "/mepco-bill-urdu"                },
  { label: "All MEPCO Regions",     href: "/all-mepco-regions"              },
  { label: "Solar Calculator",      href: "/mepco-solar-savings-calculator" },
 { label: "Solar ROI Calculator",  href: "/mepco-solar-roi-calculator"      },
];

const FOOTER_GUIDES = [
  { label: "Reference Number Guide",   href: "/mepco-reference-number-guide"   },
  { label: "Customer ID Guide",        href: "/mepco-customer-id-guide"        },
  { label: "Peak Hours Guide",         href: "/mepco-peak-hours-guide"         },
  { label: "Taxes Explained",          href: "/mepco-taxes-explained"          },
  { label: "Bill Slabs Guide",         href: "/mepco-bill-slabs-guide"         },
  { label: "New Connection Guide",     href: "/mepco-new-connection-guide"     },
  { label: "Bill Check By CNIC",       href: "/mepco-bill-check-by-cnic"       },
  { label: "200 Units Rule",           href: "/mepco-200-units-rule"           },
  { label: "FPA Charges Guide",        href: "/mepco-fpa-charges-guide"        },
  { label: "Protected Consumer Guide", href: "/mepco-protected-consumer-guide" },
  { label: "Solar ROI Calculator",     href: "/mepco-solar-roi-calculator"     },
];

const FOOTER_LEGAL = [
  { label: "About Author",       href: "/about-author"        },
  { label: "Editorial Policy",   href: "/editorial-policy"    },
  { label: "Privacy Policy",     href: "/privacy-policy"      },
  { label: "Disclaimer",         href: "/disclaimer"          },
  { label: "Contact Us",         href: "/contact-us"          },
  { label: "About Us",           href: "/about-us"            },
  { label: "Terms & Conditions", href: "/terms-and-conditions"},
];
// ==================== UTILITY FUNCTIONS ====================
function safeGetItem(key: string, fallback = ""): string {
  if (typeof window === "undefined") return fallback;
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}
function safeSetItem(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(key, value); } catch { /* ignore */ }
}
function safeGetJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(key);
    return (item ? JSON.parse(item) : fallback) as T;
  } catch { return fallback; }
}

function calculateSlabEnergy(units: number): number {
  if (units <= 0) return 0;
  let cost = 0, remaining = units;
  if (remaining > 700) { cost += (remaining - 700) * 45.99; remaining = 700; }
  if (remaining > 500) { cost += (remaining - 500) * 39.49; remaining = 500; }
  if (remaining > 300) { cost += (remaining - 300) * 35.01; remaining = 300; }
  if (remaining > 200) { cost += (remaining - 200) * 30.01; remaining = 200; }
  if (remaining > 100) { cost += (remaining - 100) * 25.08; remaining = 100; }
  cost += remaining * 16.45;
  return cost;
}

function calculateBill(units: number): BillBreakdown {
  const energy = calculateSlabEnergy(units);
  const fpa = units * FPA_RATE;
  const fixedCharges = units > 0 ? 250 : 0;
  const gst = (energy + fpa + fixedCharges) * 0.18;
  return { energy: Math.round(energy), fpa: Math.round(fpa), fixedCharges: Math.round(fixedCharges), tax: Math.round(gst), total: Math.round(energy + fpa + fixedCharges + gst) };
}

function getSlabStatus(units: number): SlabInfo {
  if (units <= 0)   return { title: "Enter Units",            urdu: "یونٹ درج کریں",       roman: "Units enter karein",                 message: "Enter consumed units to check estimated bill and slab status.",              alert: false,        color: "bg-gray-50 text-gray-700 border-gray-300",         icon: "📊" };
  if (units <= 200) return { title: "Protected Range",        urdu: "محفوظ حد",             roman: "Protected range mein hain",          message: `Only ${200 - units} units left before 200 units limit.`,                    alert: units >= 180, color: "bg-emerald-50 text-emerald-800 border-emerald-300", icon: "✅" };
  if (units <= 300) return { title: "Unprotected Slab Alert", urdu: "غیر محفوظ سلیب الرٹ", roman: "200 units cross ho gaye hain",       message: "You crossed 200 units. Your bill may increase due to slab change.",          alert: true,         color: "bg-amber-50 text-amber-800 border-amber-300",       icon: "⚠️" };
  return              { title: "High Usage Alert",            urdu: "زیادہ استعمال الرٹ",   roman: "Bijli ka istemal zyada ho raha hai", message: "High summer usage detected. AC and peak-hour usage may increase your bill.", alert: true,         color: "bg-red-50 text-red-800 border-red-300",             icon: "🔴" };
}

function getConsumerStatus(units: number): ConsumerInfo {
  if (units <= 0)   return { title: "Consumer Status",      urdu: "صارف کی حیثیت",  roman: "Consumer status",     status: "Enter Units",  color: "bg-gray-50 border-gray-300 text-gray-700"          };
  if (units <= 200) return { title: "Protected Consumer",   urdu: "محفوظ صارف",     roman: "Mahfooz Sarif",       status: "Protected",    color: "bg-emerald-50 border-emerald-300 text-emerald-800"  };
  return              { title: "Unprotected Consumer", urdu: "غیر محفوظ صارف", roman: "Ghair Mahfooz Sarif", status: "Unprotected",  color: "bg-red-50 border-red-300 text-red-800"              };
}

// ==================== HOOKS ====================
function useTilt(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
      el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateZ(8px)`;
    };
    const onLeave = () => { el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [ref]);
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ==================== MAIN COMPONENT ====================
export default function Home() {
  const [refNumber, setRefNumber] = useState("");
  const [units, setUnits] = useState("");
  const [acHours, setAcHours] = useState("8");
  const [acType, setAcType] = useState("inverter");
  const [applianceHours, setApplianceHours] = useState("5");
  const [applianceType, setApplianceType] = useState("fan");
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteReady, setSiteReady] = useState(false);
  const [checkingBill, setCheckingBill] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [guideFilter, setGuideFilter] = useState("All");
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const billCardRef = useRef<HTMLDivElement>(null);
  useTilt(billCardRef);
  useScrollReveal();

  useEffect(() => {
    const savedRef = safeGetItem("mepco_reference_number");
    if (savedRef) setRefNumber(savedRef);
    setRecentSearches(safeGetJSON<string[]>("mepco_recent_searches", []));
    setSiteReady(true);
    setTimeout(() => inputRef.current?.focus(), 600);
    setCurrentTime(new Date().toLocaleTimeString());
    const clock = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    const ticker = setInterval(() => setAnnouncementIndex((p) => (p + 1) % ANNOUNCEMENTS.length), 5000);
    return () => { clearInterval(clock); clearInterval(ticker); };
  }, []);

  const cleanRef = refNumber.replace(/\D/g, "");
  const consumedUnits = Number(units || 0);
  const slabStatus = useMemo(() => getSlabStatus(consumedUnits), [consumedUnits]);
  const consumerStatus = useMemo(() => getConsumerStatus(consumedUnits), [consumedUnits]);
  const estimatedBill = useMemo(() => calculateBill(consumedUnits), [consumedUnits]);
  const billShock = useMemo(() => {
    const fu = consumedUnits + 20;
    return { futureUnits: fu, increase: Math.max(0, calculateBill(fu).total - estimatedBill.total) };
  }, [consumedUnits, estimatedBill.total]);
  const acEstimate = useMemo(() => {
    const h = Number(acHours || 0), mu = Math.round(h * (acType === "inverter" ? 1.2 : 2.2) * 30);
    return { monthlyUnits: mu, estimatedCost: Math.round(calculateSlabEnergy(consumedUnits + mu) - calculateSlabEnergy(consumedUnits)) };
  }, [acHours, acType, consumedUnits]);
  const applianceEstimate = useMemo(() => {
    const h = Number(applianceHours || 0), w = APPLIANCE_WATTS[applianceType] || 80, mu = Math.round((w * h * 30) / 1000);
    return { watts: w, monthlyUnits: mu, estimatedCost: Math.round(calculateSlabEnergy(consumedUnits + mu) - calculateSlabEnergy(consumedUnits)) };
  }, [applianceHours, applianceType, consumedUnits]);

  const checkBill = useCallback(() => {
    if (cleanRef.length !== 14) { alert("Please enter a valid 14-digit reference number\nبراہ کرم 14 ہندسوں کا ریفرنس نمبر درج کریں"); return; }
    const last = safeGetItem("mepco_last_check", "0");
    if (Date.now() - Number(last) < 3000) { alert("Please wait a moment\nبراہ کرم تھوڑا انتظار کریں"); return; }
    safeSetItem("mepco_last_check", String(Date.now()));
    setCheckingBill(true);
    safeSetItem("mepco_reference_number", cleanRef);
    const existing = safeGetJSON<string[]>("mepco_recent_searches", []);
    const updated = [cleanRef, ...existing.filter((i) => i !== cleanRef)].slice(0, 5);
    safeSetItem("mepco_recent_searches", JSON.stringify(updated));
    setRecentSearches(updated);
    window.open(`https://bill.pitc.com.pk/mepcobill?refno=${cleanRef}`, "_blank");
    setTimeout(() => setCheckingBill(false), 1500);
  }, [cleanRef]);

  // Schemas
  const faqSchema = useMemo(() => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }), []);
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL, potentialAction: { "@type": "SearchAction", target: `${SITE_URL}/?ref={search_term_string}`, "query-input": "required name=search_term_string" } };
  const govSchema = { "@context": "https://schema.org", "@type": "GovernmentService", name: "MEPCO Electricity Bill Check", serviceType: "Electricity Bill Check", provider: { "@type": "GovernmentOrganization", name: "Multan Electric Power Company" }, areaServed: { "@type": "State", name: "South Punjab, Pakistan" }, url: SITE_URL };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "MEPCO Online Bill Check", item: SITE_URL }] };
  const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: "MEPCO Online Bill Check", alternateName: "MEPCO Bill Portal", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/mepco-logo.png`, width: 512, height: 512 }, description: "Independent MEPCO electricity bill information portal for South Punjab consumers.", areaServed: { "@type": "State", name: "South Punjab, Pakistan" }, knowsAbout: ["MEPCO electricity bills","Duplicate bill download","Bill calculator","Consumer guides","Peak hours","Solar net metering"], sameAs: [] };
  const webPageSchema = { "@context": "https://schema.org", "@type": "WebPage", name: "MEPCO Online Bill Check 2026", description: "Check your MEPCO electricity bill online using your 14-digit reference number.", url: SITE_URL, inLanguage: ["en","ur"], isPartOf: { "@type": "WebSite", url: SITE_URL }, about: { "@type": "Thing", name: "MEPCO Electricity Bill" }, breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }, { "@type": "ListItem", position: 2, name: "MEPCO Online Bill Check", item: SITE_URL }] } };

  const filteredGuides = guideFilter === "All" ? GUIDE_LINKS : GUIDE_LINKS.filter((g) => g.category === guideFilter);
  const guideCategories = ["All", ...Array.from(new Set(GUIDE_LINKS.map((g) => g.category)))];
  const navLinks = [{ label: "Check Bill", href: "#bill" }, { label: "Services", href: "#services" }, { label: "Calculator", href: "#calculator" }, { label: "Cities", href: "#cities" }, { label: "Guides", href: "#guides" }, { label: "FAQs", href: "#faq" }];

  return (
    <main className={`min-h-screen scroll-smooth bg-[#f8faf9] text-[#111] transition-opacity duration-700 ${siteReady ? "opacity-100" : "opacity-0"}`}>

      {/* SCHEMAS */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(govSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* 1. TOP BAR */}
      <div className="bg-[var(--brand-950)] text-white border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs">
          <div className="flex items-center gap-3 font-semibold text-green-200">
            <span className="hidden sm:inline">🇵🇰</span>
            <span>Independent Consumer Information Portal</span>
            <span className="hidden md:inline rounded bg-green-800/50 px-2 py-0.5 text-[10px] uppercase tracking-wider">Independent</span>
          </div>
          <div className="flex items-center gap-4 text-green-300/80">
            <span className="hidden md:inline">📞 {HELPLINE}</span>
            <span className="hidden lg:inline">🕒 {currentTime}</span>
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" /></span>
              <span className="text-green-400 font-bold">Live</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. TICKER */}
      <div className="bg-gradient-to-r from-[var(--brand-600)] to-[var(--brand-700)] text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-2 flex items-center gap-4">
          <span className="shrink-0 rounded bg-white/20 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">Latest</span>
          <div className="overflow-hidden h-5 flex-1">
            <p className="text-sm font-semibold transition-all duration-500" key={announcementIndex}>{ANNOUNCEMENTS[announcementIndex]}</p>
          </div>
        </div>
      </div>

      {/* 3. HEADER */}
      <header className="sticky top-0 z-50 border-b border-[var(--brand-900)] bg-[var(--brand-950)]/98 text-white shadow-[0_4px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image src="/mepco-logo.png" alt="MEPCO Bill Check Portal Logo" width={52} height={52} className="rounded-full border-2 border-green-400/50 bg-white object-cover transition-all duration-300 group-hover:border-green-300 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]" priority />
              <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-[var(--brand-950)]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-wide">MEPCO</span>
                <span className="hidden sm:inline rounded bg-green-600/30 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-green-300">Portal</span>
              </div>
              <p className="text-[11px] font-medium text-green-300/80">Consumer Services Hub | صارف سروسز ہب</p>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (<a key={l.href} href={l.href} className="px-4 py-2 rounded-lg text-sm font-semibold text-green-100 hover:text-white hover:bg-white/10 transition-all duration-200">{l.label}</a>))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#bill" className="hidden md:flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:bg-green-500 btn-3d"><span>⚡</span> Quick Check</a>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu" aria-expanded={menuOpen} className="lg:hidden h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-xl hover:bg-white/20 transition">{menuOpen ? "✕" : "☰"}</button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[var(--brand-950)]/98 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-5 py-4 space-y-1">
              {navLinks.map((l) => (<a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-lg font-semibold text-green-100 hover:text-white hover:bg-white/10 transition">{l.label}</a>))}
            </div>
          </div>
        )}
      </header>

      {/* 4. BREADCRUMB */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
            <a href="/" className="hover:text-[var(--brand-600)] font-medium transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <span className="text-[var(--brand-600)] font-semibold">MEPCO Online Bill Check</span>
          </nav>
        </div>
      </div>

      {/* 5. HERO + BILL CHECKER */}
      <section className="relative overflow-hidden mesh-bg">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-float-a spotlight w-[500px] h-[500px] bg-green-300/20 -top-32 -left-32" />
          <div className="blob-float-b spotlight w-[400px] h-[400px] bg-emerald-400/15 top-1/2 -right-24" />
          <div className="blob-float-c spotlight w-[300px] h-[300px] bg-green-200/20 bottom-0 left-1/3" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 md:py-20">
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {[
  { label: "Access | رسائی", value: "24/7", icon: "🕒" },
{ label: "Service | سروس", value: "Free", icon: "📄" },
  { label: "Regions | علاقے", value: `${CITIES.length}+`, icon: "🏙️" },
  { label: "Guides | گائیڈز", value: `${GUIDE_LINKS.length}+`, icon: "📚" },
  { label: "Status | حالت", value: "Online", icon: "🟢" },
].map((s, i) => (
              <div key={s.label} className="stat-pill reveal flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-md border border-white/60 backdrop-blur-sm cursor-default" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="text-lg">{s.icon}</span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">{s.label}</p>
                  <p className="text-sm font-black text-[var(--brand-600)]">{s.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left */}
            <div className="section-animate">
              <div className="neon-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold text-[var(--brand-600)] mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                MEPCO Consumer Portal Hub — Pakistan
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] text-gray-900">
                MEPCO
                <span className="block gradient-text-animated mt-1">Online Bill Check</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Check your latest MEPCO electricity bill online using your 14-digit reference number.
                Access duplicate bills, bill calculator, consumer guides, and{" "}
                <strong className="text-[var(--brand-600)]">{GUIDE_LINKS.length}+ help resources</strong> — all in one portal.
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-gray-600" dir="rtl" lang="ur">
                میپکو آن لائن بل چیک کریں۔ 14 ہندسوں کا ریفرنس نمبر درج کریں اور فوری طور پر اپنا بجلی کا بل دیکھیں۔
                ڈپلیکیٹ بل، بل کیلکولیٹر، صارف گائیڈز اور {GUIDE_LINKS.length}+ معلوماتی وسائل — سب ایک جگہ۔
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 italic">
                MEPCO bill online check karein. 14 handson ka reference number darj karein aur fori tor par apna bijli ka bill dekhein.
                Duplicate bill, bill calculator, consumer guides aur {GUIDE_LINKS.length}+ madad ke wasail — sab ek jagah.
              </p>
              <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-3">
                {QUICK_ACCESS.map((item, i) => (
                  <a key={item.label} href={item.href} className="portal-card reveal group flex flex-col items-center gap-2 rounded-2xl bg-white/90 p-4 border border-white/60 shadow-md text-center backdrop-blur-sm" style={{ transitionDelay: `${i * 60}ms` }}>
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                    <span className="text-xs font-bold text-gray-800">{item.label}</span>
                    <span className="text-[10px] text-gray-500 leading-tight">{item.labelUrdu}</span>
                    <span className="text-[10px] text-gray-400 leading-tight hidden sm:block">{item.desc}</span>
                  </a>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "⚡ Fast | تیز", bg: "bg-green-50 border-green-200 text-green-800" },
                  { label: "🔒 Secure | محفوظ", bg: "bg-blue-50 border-blue-200 text-blue-800" },
                  { label: "📱 Mobile | موبائل", bg: "bg-purple-50 border-purple-200 text-purple-800" },
                  { label: "🇵🇰 Pakistan | پاکستان", bg: "bg-emerald-50 border-emerald-200 text-emerald-800" },
                ].map((b) => (
                  <div key={b.label} className={`rounded-xl border px-4 py-2 text-center font-bold text-sm shadow-sm ${b.bg}`}>{b.label}</div>
                ))}
              </div>
            </div>

            {/* Right — Bill Checker */}
            <div id="bill" className="section-animate reveal reveal-delay-2">
              <div ref={billCardRef} className="glass-card animated-border rounded-3xl shadow-2xl overflow-hidden" style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease" }}>
                <div className="dark-mesh-bg px-6 py-6 text-white relative overflow-hidden">
                  <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-xl" />
                  <div aria-hidden="true" className="absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-green-400/10 blur-xl" />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-black">Check Your MEPCO Bill</h2>
                      <p className="text-green-200 text-sm mt-0.5">اپنا میپکو بل چیک کریں | Apna MEPCO bill check karein</p>
                      <p className="text-green-300 text-xs mt-0.5">Enter 14-Digit Reference Number | 14 ہندسوں کا ریفرنس نمبر</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl glow-green">📄</div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <label htmlFor="ref-input" className="mb-2 block text-sm font-bold text-gray-700">Reference Number | ریفرنس نمبر</label>
                  <div className="relative">
                    <input id="ref-input" ref={inputRef} value={refNumber}
                      onChange={(e) => setRefNumber(e.target.value.replace(/\D/g, "").slice(0, 14))}
                      placeholder="Enter 14-Digit Reference No | 14 ہندسوں کا نمبر"
                      maxLength={14} autoComplete="off"
                      onKeyDown={(e) => e.key === "Enter" && checkBill()}
                      className={`input-premium h-14 w-full rounded-xl px-4 pr-20 text-lg font-mono ${cleanRef.length === 14 ? "valid" : ""}`} />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-black text-gray-400 tabular-nums">{cleanRef.length}/14</span>
                  </div>
                  {cleanRef.length === 14 && (
                    <div className="mt-3 flex items-center gap-2 text-sm font-bold text-green-700 bg-green-50 border border-green-200 rounded-xl px-3 py-2">
                      <span>✅</span>
                      <div>
                        <p>Reference number ready — saved for next visit</p>
                        <p className="text-xs text-green-600 mt-0.5" dir="rtl" lang="ur">ریفرنس نمبر تیار ہے — اگلی بار کے لیے محفوظ ہو گیا</p>
                      </div>
                    </div>
                  )}
                  {recentSearches.length > 0 && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Recent | حالیہ</p>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((item) => (
                          <button key={item} onClick={() => setRefNumber(item)} className="rounded-lg border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-bold font-mono text-[var(--brand-600)] hover:bg-green-100 hover:border-green-400 transition">{item}</button>
                        ))}
                      </div>
                    </div>
                  )}
                  <button onClick={checkBill} disabled={checkingBill}
                    className="mt-5 h-14 w-full rounded-xl bg-gradient-to-r from-[var(--brand-600)] to-[var(--brand-700)] text-lg font-black text-white btn-3d glow-button disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {checkingBill ? (
                      <><svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Checking… | چیک ہو رہا ہے</>
                    ) : (<><span aria-hidden="true">⚡</span> Check Bill Now | ابھی بل چیک کریں</>)}
                  </button>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <button onClick={() => { safeSetItem("mepco_reference_number", ""); setRefNumber(""); }} className="h-10 rounded-lg border border-gray-200 bg-white text-xs font-bold text-gray-600 hover:bg-gray-50 transition">🗑️ Clear</button>
                    <button onClick={() => window.open(`https://wa.me/?text=Check%20MEPCO%20bill%20online%20at%20${SITE_URL}`, "_blank")} className="h-10 rounded-lg bg-[#25D366] text-xs font-bold text-white hover:bg-[#20BD5A] transition">📲 Share</button>
                    <button onClick={() => navigator.clipboard.writeText(SITE_URL)} className="h-10 rounded-lg border border-gray-200 bg-white text-xs font-bold text-gray-600 hover:bg-gray-50 transition">🔗 Copy</button>
                  </div>
                  <p className="mt-4 text-center text-xs text-gray-400">
                    Reference number is on your previous bill. Independent informational portal.<br />
                    <span dir="rtl" lang="ur">ریفرنس نمبر آپ کے پرانے بل پر ہے۔ یہ ایک آزاد معلوماتی پورٹل ہے۔</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 6. PORTAL SERVICES */}
      <section id="services" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-12 reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)]/10 px-4 py-1.5 text-xs font-bold text-[var(--brand-600)] uppercase tracking-widest mb-4">Portal Services | پورٹل خدمات</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">MEPCO Consumer Services</h2>
            <p className="mt-2 text-gray-500 max-w-2xl mx-auto">Comprehensive electricity bill tools, guides, and calculators for MEPCO consumers across South Punjab.</p>
            <p className="mt-1 text-gray-500 max-w-2xl mx-auto" dir="rtl" lang="ur">جنوبی پنجاب کے میپکو صارفین کے لیے بجلی بل ٹولز، گائیڈز اور کیلکولیٹرز۔</p>
            <p className="mt-1 text-gray-400 max-w-2xl mx-auto text-sm italic">South Punjab ke MEPCO consumers ke liye bijli bill tools, guides aur calculators.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <a key={s.title} href={s.href}
                className="portal-card card-shine reveal group rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:border-[var(--brand-600)]/20"
                style={{ transitionDelay: `${i * 60}ms` }}>
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>{s.icon}</div>
                <h3 className="text-lg font-black text-gray-900 group-hover:text-[var(--brand-600)] transition-colors">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed" dir="rtl" lang="ur">{s.descUrdu}</p>
                <p className="mt-1 text-xs text-gray-400 italic leading-relaxed">{s.descRoman}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 7. REFERENCE NUMBER GUIDE */}
      <section id="reference-guide" className="py-16 bg-[#f8faf9]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="glass-card animated-border rounded-3xl border border-green-100 p-8 md:p-12 shadow-xl">
            <div className="text-center mb-10 reveal">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Find Your Reference Number?</h2>
              <p className="mt-2 text-gray-500" dir="rtl" lang="ur">اپنا ریفرنس نمبر کیسے تلاش کریں؟</p>
              <p className="mt-1 text-gray-400 text-sm italic">Apna reference number kaise talash karein?</p>
              <p className="mt-2 text-gray-500 max-w-2xl mx-auto">Your 14-digit reference number is printed on your previous MEPCO electricity bill.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { step: "01", icon: "📄", title: "Open Old Bill", titleUrdu: "پرانا بل نکالیں", titleRoman: "Purana bill nikalein", desc: "Take any previous MEPCO electricity bill from your records.", descUrdu: "اپنے ریکارڈ سے کوئی بھی پرانا میپکو بل لیں۔", descRoman: "Apne record se koi bhi purana MEPCO bill lein.", color: "from-blue-500 to-blue-600" },
                { step: "02", icon: "🔎", title: "Find Ref No", titleUrdu: "ریفرنس نمبر تلاش کریں", titleRoman: "Reference number talash karein", desc: "Look for the 14-digit Reference Number on the top section.", descUrdu: "بل کے اوپری حصے میں 14 ہندسوں کا نمبر دیکھیں۔", descRoman: "Bill ke oopri hisse mein 14 handson ka number dekhein.", color: "from-green-500 to-green-600" },
                { step: "03", icon: "✅", title: "Enter Online", titleUrdu: "آن لائن درج کریں", titleRoman: "Online darj karein", desc: "Enter it in the bill checker above and click Check Bill.", descUrdu: "اوپر بل چیکر میں درج کریں اور چیک بل پر کلک کریں۔", descRoman: "Oopar bill checker mein darj karein aur Check Bill par click karein.", color: "from-purple-500 to-purple-600" },
              ].map((item, i) => (
                <div key={item.step} className="portal-card reveal group rounded-2xl bg-white border border-gray-100 p-6 text-center shadow-sm" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className={`mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2">Step {item.step}</div>
                  <h3 className="text-xl font-black text-gray-900">{item.title}</h3>
                  <p className="text-sm font-bold text-gray-600 mt-1" dir="rtl" lang="ur">{item.titleUrdu}</p>
                  <p className="text-xs text-gray-400 italic">{item.titleRoman}</p>
                  <p className="mt-3 text-sm text-gray-500">{item.desc}</p>
                  <p className="mt-1 text-xs text-gray-500" dir="rtl" lang="ur">{item.descUrdu}</p>
                  <p className="mt-1 text-xs text-gray-400 italic">{item.descRoman}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 8. BILL CALCULATOR */}
      <section id="calculator" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-12 reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)]/10 px-4 py-1.5 text-xs font-bold text-[var(--brand-600)] uppercase tracking-widest mb-4">Bill Estimator | بل تخمینہ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">MEPCO Bill Calculator 2026</h2>
            <p className="mt-2 text-gray-500">Estimate your monthly electricity bill using 2026 MEPCO domestic tariff slab rates.</p>
            <p className="mt-1 text-gray-500" dir="rtl" lang="ur">2026 کے میپکو ٹیرف سلیب ریٹس کے مطابق ماہانہ بجلی بل کا تخمینہ لگائیں۔</p>
            <p className="mt-1 text-gray-400 text-sm italic">2026 ke MEPCO tariff slab rates ke mutabiq maahana bijli bill ka andaza lagaein.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <div className="reveal rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <label htmlFor="units-input" className="mb-2 block text-sm font-bold text-gray-700">Enter Units Consumed | استعمال شدہ یونٹ درج کریں</label>
                <input id="units-input" type="number" value={units} onChange={(e) => setUnits(e.target.value)} placeholder="Example: 250 | مثال: 250" min="0" className="input-premium h-14 w-full rounded-xl px-4 text-xl" />
                <div className="mt-5">
                  <div className="flex justify-between text-xs font-bold text-gray-400 mb-2"><span>0</span><span className="text-orange-500">200 units | یونٹ</span><span>500+</span></div>
                  <div className="h-3 rounded-full bg-gray-100 overflow-hidden shadow-inner"><div className="h-full rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 transition-all duration-700" style={{ width: `${Math.min(consumedUnits / 5, 100)}%` }} /></div>
                </div>
              </div>
              <div className="reveal reveal-delay-1 rounded-2xl border-2 border-orange-200 bg-orange-50 p-5">
                <h3 className="font-black text-orange-800 flex items-center gap-2"><span>⚡</span> 200 Unit Danger Meter | 200 یونٹ خطرے کا میٹر</h3>
                <div className="mt-3 space-y-2 text-sm">
                  <p className="font-semibold text-orange-700">{200 - consumedUnits > 0 ? `${200 - consumedUnits} units left before 200-unit threshold` : "⚠️ 200-unit threshold crossed"}</p>
                  <p className="font-semibold text-orange-700" dir="rtl" lang="ur">{200 - consumedUnits > 0 ? `200 یونٹ کی حد تک ${200 - consumedUnits} یونٹ باقی ہیں` : "آپ 200 یونٹ کی حد عبور کر چکے ہیں"}</p>
                  <p className="font-semibold text-orange-600 italic">{200 - consumedUnits > 0 ? `Sirf ${200 - consumedUnits} units baqi hain` : "Aap 200 units cross kar chukay hain"}</p>
                </div>
              </div>
              <div className={`reveal reveal-delay-2 rounded-2xl border-2 p-5 ${consumerStatus.color}`}>
                <h3 className="font-black flex items-center gap-2"><span>🛡️</span> {consumerStatus.title}</h3>
                <p className="mt-2 text-sm font-bold" dir="rtl" lang="ur">اردو: {consumerStatus.urdu}</p>
                <p className="mt-1 text-sm font-semibold italic">{consumerStatus.roman}</p>
                <p className="mt-2 text-sm">Status: <strong>{consumerStatus.status}</strong></p>
              </div>
              <div className="reveal reveal-delay-3 rounded-2xl border-2 border-purple-200 bg-purple-50 p-5">
                <h3 className="font-black text-purple-900 flex items-center gap-2"><span>📈</span> Bill Shock Predictor | بل شاک پریڈکٹر</h3>
                <div className="mt-3 space-y-2 text-sm">
                  <p className="font-bold text-purple-800">If you use 20 more units, bill may increase by ~Rs.&nbsp;{billShock.increase}</p>
                  <p className="font-bold text-purple-800" dir="rtl" lang="ur">اگر آپ مزید 20 یونٹ استعمال کریں تو بل تقریباً Rs.&nbsp;{billShock.increase} بڑھ سکتا ہے۔</p>
                  <p className="font-semibold text-purple-700 italic">Agar aap mazeed 20 units use karein to bill taqreeban Rs.&nbsp;{billShock.increase} barh sakta hai.</p>
                  <p className="font-semibold text-purple-700">Future Units: {billShock.futureUnits}</p>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className={`reveal rounded-2xl border-2 p-5 ${slabStatus.color}`}>
                <h3 className="text-lg font-black flex items-center gap-2"><span>{slabStatus.icon}</span> {slabStatus.title}</h3>
                <p className="mt-1 text-sm font-bold" dir="rtl" lang="ur">{slabStatus.urdu}</p>
                <p className="mt-1 text-sm font-semibold italic">{slabStatus.roman}</p>
                <p className="mt-2 text-sm leading-6">{slabStatus.message}</p>
              </div>
              {slabStatus.alert && (
                <div className="reveal rounded-2xl border-2 border-red-200 bg-red-50 p-5 text-red-800">
                  <h3 className="font-black flex items-center gap-2"><span>⚠️</span> Slab Warning | سلیب وارننگ</h3>
                  <p className="mt-2 text-sm font-bold" dir="rtl" lang="ur">200 یونٹ سے اوپر جانے پر بل زیادہ آ سکتا ہے۔</p>
                  <p className="mt-1 text-sm font-semibold italic">200 units se oopar jane par bill zyada aa sakta hai.</p>
                  <p className="mt-1 text-sm">Reduce AC usage during peak hours (7 PM – 11 PM).</p>
                </div>
              )}
              <div className="reveal reveal-delay-1 rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-black text-gray-900 mb-5">Bill Breakdown | بل کی تفصیل</h3>
                <div className="space-y-4">
                  {[
                    ["Electricity Charges | بجلی چارجز", estimatedBill.energy],
                    ["FPA | ایف پی اے", estimatedBill.fpa],
                    ["Fixed Charges | فکسڈ چارجز", estimatedBill.fixedCharges],
                    ["Approx GST (18%) | تخمینی جی ایس ٹی", estimatedBill.tax],
                  ].map(([label, value]) => (
                    <div key={label as string} className="flex items-center justify-between py-2 border-b border-gray-50">
                      <span className="text-sm text-gray-600">{label}</span>
                      <span className="text-lg font-black text-gray-900">Rs.&nbsp;{value}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-4 border-t-2 border-[var(--brand-600)]">
                    <span className="text-xl font-black gradient-text">Estimated Total | تخمینی کل رقم</span>
                    <span className="text-3xl font-black gradient-text">Rs.&nbsp;{estimatedBill.total}</span>
                  </div>
                </div>
                <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-3">
                  <p className="text-xs text-amber-800 font-semibold leading-5">⚠️ This calculator is for estimation only. Official MEPCO tariff, FPA, QTA, taxes and government adjustments may change. Always verify with your official MEPCO bill.</p>
                  <p className="text-xs text-amber-700 font-semibold leading-5 mt-2" dir="rtl" lang="ur">⚠️ یہ کیلکولیٹر صرف تخمینے کے لیے ہے۔ آفیشل میپکو ٹیرف، ایف پی اے، کیو ٹی اے اور ٹیکسز تبدیل ہو سکتے ہیں۔ ہمیشہ اپنے آفیشل بل سے تصدیق کریں۔</p>
                  <p className="text-xs text-amber-600 leading-5 mt-1 italic">Ye calculator sirf estimate ke liye hai. Official tariff, FPA, QTA aur taxes change ho sakte hain. Hamesha apne official bill se tasdeeq karein.</p>
                </div>
              </div>
              <div className="reveal reveal-delay-2 rounded-2xl border border-blue-200 bg-blue-50/50 p-5">
                <h3 className="text-lg font-black text-blue-900 flex items-center gap-2"><span>❄️</span> AC Cost Calculator | اے سی لاگت کیلکولیٹر</h3>
                <p className="mt-1 text-sm text-blue-700" dir="rtl" lang="ur">اے سی کا متوقع ماہانہ بجلی خرچ</p>
                <p className="mt-0.5 text-xs text-blue-600 italic">AC ka mutawaqqa maahana bijli kharcha</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <input type="number" value={acHours} onChange={(e) => setAcHours(e.target.value)} placeholder="Daily Hours | روزانہ گھنٹے" min="0" max="24" aria-label="AC daily usage hours" className="input-premium rounded-xl p-3 text-sm" />
                  <select value={acType} onChange={(e) => setAcType(e.target.value)} aria-label="AC type" className="input-premium rounded-xl p-3 text-sm">
                    <option value="inverter">Inverter AC | انورٹر اے سی</option>
                    <option value="non-inverter">Non-Inverter AC | نان انورٹر اے سی</option>
                  </select>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-900">Monthly: {acEstimate.monthlyUnits} units | ماہانہ</span>
                  <span className="text-xl font-black text-blue-900">Rs.&nbsp;{acEstimate.estimatedCost}</span>
                </div>
              </div>
              <div className="reveal reveal-delay-3 rounded-2xl border border-green-200 bg-green-50/50 p-5">
                <h3 className="text-lg font-black text-green-900 flex items-center gap-2"><span>⚡</span> Appliance Cost | آلات کی لاگت</h3>
                <p className="mt-1 text-sm text-green-700" dir="rtl" lang="ur">گھریلو آلات کی ماہانہ بجلی لاگت</p>
                <p className="mt-0.5 text-xs text-green-600 italic">Gharelu aalaat ki maahana bijli lagat</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <input type="number" value={applianceHours} onChange={(e) => setApplianceHours(e.target.value)} placeholder="Daily Hours | روزانہ گھنٹے" min="0" max="24" aria-label="Appliance daily usage hours" className="input-premium rounded-xl p-3 text-sm" />
                  <select value={applianceType} onChange={(e) => setApplianceType(e.target.value)} aria-label="Appliance type" className="input-premium rounded-xl p-3 text-sm">
                    <option value="fan">Ceiling Fan | پنکھا</option>
                    <option value="fridge">Refrigerator | فریج</option>
                    <option value="iron">Electric Iron | استری</option>
                    <option value="waterMotor">Water Motor | واٹر موٹر</option>
                    <option value="airCooler">Air Cooler | ایئر کولر</option>
                    <option value="tv">Television | ٹی وی</option>
                    <option value="washingMachine">Washing Machine | واشنگ مشین</option>
                  </select>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-green-900">{applianceEstimate.watts}W — {applianceEstimate.monthlyUnits} units/month</span>
                  <span className="text-xl font-black text-green-900">Rs.&nbsp;{applianceEstimate.estimatedCost}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <div className="section-divider" />

      {/* 8.5 — SOLAR ROI CALCULATOR — Bill Calculator ke NEECHE */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-xl md:p-10">
            {/* Section Header */}
            <div className="mb-8 text-center reveal">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">
                <span aria-hidden="true">☀️</span> Solar ROI Tool | سولر ROI ٹول
              </span>
              <h2 className="mt-2 text-3xl font-black text-gray-900 md:text-4xl">
                Solar Payback Calculator Pakistan PKR
              </h2>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
                Apna solar installation cost, system size (kW) aur monthly MEPCO
                bill enter karein — foran payback period, monthly savings aur
                25-year ROI dekhein.
              </p>
              <p className="mt-2 text-sm text-gray-500" dir="rtl" lang="ur">
                سولر لاگت، سسٹم سائز اور ماہانہ بل درج کریں — فوری نتائج
                دیکھیں۔ 3kW سے 15kW تک سسٹم سپورٹ۔
              </p>
              <p className="mt-1 text-xs text-gray-400 italic">
                Solar lagat, system size aur maahana bill darj karein — fori
                nataij dekhein. 3kW se 15kW tak system support.
              </p>
            </div>

            {/* Calculator Component */}
            <SolarRoiClient />

            {/* Full Guide CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/mepco-solar-roi-calculator"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-600)] px-6 py-3 font-bold text-white transition hover:bg-[var(--brand-800)] btn-3d"
              >
                <span aria-hidden="true">📊</span> Full Solar ROI Guide Dekhein →
              </a>
              <a
                href="/mepco-net-metering-guide"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-200 bg-white px-6 py-3 font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                <span aria-hidden="true">🔋</span> Net Metering Guide →
              </a>
              <a
                href="/mepco-solar-savings-calculator"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-bold text-gray-700 transition hover:bg-gray-50"
              >
                <span aria-hidden="true">☀️</span> Solar Savings Calculator →
              </a>
            </div>

            {/* Solar Disclaimer */}
            <div className="mt-6 rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p className="text-xs text-amber-800 font-semibold leading-5">
                <span aria-hidden="true">⚠️</span> Estimates based on 125
                units/kW/month, 80% self-use @ Rs. 50/unit, 20% export @ Rs.
                22/unit. On-grid system assumed. Actual results vary by location,
                panel quality, roof direction and NEPRA tariff. Verify with
                trusted solar installer.
              </p>
              <p className="text-xs text-amber-700 leading-5 mt-2" dir="rtl" lang="ur">
                <span aria-hidden="true">⚠️</span> تخمینے 125 یونٹ/کلو واٹ/ماہ
                پر مبنی ہیں۔ اصل نتائج مقام، پینل معیار، چھت کی سمت اور NEPRA
                ٹیرف کے مطابق مختلف ہو سکتے ہیں۔ مستند سولر انسٹالر سے تصدیق
                کریں۔
              </p>
              <p className="text-xs text-amber-600 leading-5 mt-1 italic">
                Estimates 125 units/kW/month par mabni hain. Asal results
                location, panel quality aur NEPRA tariff ke mutabiq mukhtalif ho
                sakte hain. Solar installer se tasdeeq karein.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 9. PEAK HOURS */}
      <section id="peak-hours" className="py-16 bg-[#f8faf9]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="reveal relative overflow-hidden rounded-3xl dark-mesh-bg p-8 md:p-10 text-white shadow-2xl">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
              <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-green-400/10 blur-2xl" />
              <div className="relative z-10">
                <span className="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-300 mb-6">⚡ Energy Saving Guide | بجلی بچت گائیڈ</span>
                <h2 className="text-4xl font-black leading-tight">MEPCO Peak Hours</h2>
                <p className="mt-2 text-2xl font-bold text-green-200" dir="rtl" lang="ur">میپکو پیک اوقات</p>
                <p className="mt-4 text-green-200 leading-7">Avoid excessive electricity usage during peak hours to significantly reduce your monthly bill amount.</p>
                <p className="mt-2 text-green-300/80 leading-7" dir="rtl" lang="ur">پیک اوقات میں بجلی کے زیادہ استعمال سے گریز کریں تاکہ ماہانہ بل نمایاں طور پر کم ہو۔</p>
                <p className="mt-1 text-green-300/60 leading-7 italic">Peak hours mein bijli ke zyada istemal se gureiz karein taake maahana bill numayan tor par kam ho.</p>
                <div className="mt-8 space-y-4">
                  {[
                    { period: "Summer (Apr–Oct) | گرمیاں", time: "6:30 PM — 10:30 PM", icon: "☀️" },
                    { period: "Winter (Nov–Mar) | سردیاں", time: "6:00 PM — 10:00 PM", icon: "❄️" },
                  ].map((t) => (
                    <div key={t.period} className="rounded-2xl bg-white/10 border border-white/10 p-5 hover:bg-white/15 transition-colors">
                      <div className="flex items-center gap-3"><span className="text-2xl">{t.icon}</span><div><p className="text-xs uppercase tracking-widest text-green-300">{t.period}</p><h3 className="mt-1 text-2xl font-black">{t.time}</h3></div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-1 rounded-3xl bg-white border border-gray-200 p-8 shadow-lg">
              <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2"><span>💡</span> How to Reduce Your Bill</h2>
              <p className="mt-1 text-lg font-bold text-gray-700" dir="rtl" lang="ur">بجلی کا بل کم کرنے کے طریقے</p>
              <p className="mt-1 text-sm text-gray-500 italic">Bijli ka bill kam karne ke tareeqe</p>
              <ul className="mt-6 space-y-3">
                {[
                  { en: "Use energy efficient appliances", ur: "توانائی بچانے والے آلات استعمال کریں", ro: "Energy efficient appliances use karein" },
                  { en: "Avoid heavy appliances during peak hours", ur: "پیک اوقات میں بھاری آلات نہ چلائیں", ro: "Peak hours mein bhari appliances na chalayein" },
                  { en: "Turn off unnecessary lights", ur: "غیر ضروری لائٹیں بند کریں", ro: "Ghair zaroori lights band karein" },
                  { en: "Use natural light in daytime", ur: "دن میں قدرتی روشنی استعمال کریں", ro: "Din mein qudrati roshni use karein" },
                  { en: "Unplug chargers when not in use", ur: "چارجرز استعمال کے بعد نکال دیں", ro: "Chargers use ke baad nikal dein" },
                  { en: "Use inverter AC at 26°C", ur: "انورٹر اے سی 26 ڈگری پر چلائیں", ro: "Inverter AC 26 degree par chalayein" },
                  { en: "Check meter reading regularly", ur: "میٹر ریڈنگ باقاعدگی سے چیک کریں", ro: "Meter reading baaqaidgi se check karein" },
                  { en: "Stay within 200 units for protected rate", ur: "کم ریٹ کے لیے 200 یونٹ کے اندر رہیں", ro: "Kam rate ke liye 200 units ke andar rahein" },
                ].map((tip) => (
                  <li key={tip.en} className="text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold mt-0.5" aria-hidden="true">✓</span>
                      <div>
                        <p>{tip.en}</p>
                        <p className="text-xs text-gray-600" dir="rtl" lang="ur">{tip.ur}</p>
                        <p className="text-xs text-gray-400 italic">{tip.ro}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 10. CITIES */}
      <section id="cities" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-12 reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)]/10 px-4 py-1.5 text-xs font-bold text-[var(--brand-600)] uppercase tracking-widest mb-4">Service Regions | خدمات کے علاقے</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">MEPCO Coverage Areas</h2>
            <p className="mt-2 text-gray-500">Check MEPCO electricity bills across {CITIES.length}+ districts of South Punjab.</p>
            <p className="mt-1 text-gray-500" dir="rtl" lang="ur">جنوبی پنجاب کے {CITIES.length}+ اضلاع میں میپکو بجلی بل چیک کریں۔</p>
            <p className="mt-1 text-gray-400 text-sm italic">South Punjab ke {CITIES.length}+ districts mein MEPCO bijli bill check karein.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CITIES.map((city, i) => (
              <a key={`city-${i}`} href={city.slug} title={city.title} aria-label={city.title}
                className="portal-card reveal group rounded-2xl bg-white border border-gray-100 p-5 shadow-sm hover:border-[var(--brand-600)]/20"
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl" aria-hidden="true">🏙️</span>
                  <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-700">{city.consumers}</span>
                </div>
                <h3 className="text-base font-black text-gray-900 group-hover:text-[var(--brand-600)] transition-colors">{city.anchor}</h3>
                <p className="mt-1 text-xs text-gray-400">{city.name} Division | ڈویژن</p>
              </a>
            ))}
          </div>
          <div className="mt-12 reveal">
            <div className="rounded-3xl bg-gradient-to-br from-[#f0fdf4] to-white border border-green-100 p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-2">MEPCO Bill Check — All Major Cities</h2>
              <p className="text-center text-sm text-gray-500 mb-2" dir="rtl" lang="ur">میپکو بل چیک — تمام بڑے شہر</p>
              <p className="text-center text-xs text-gray-400 italic mb-8">MEPCO Bill Check — Tamam Bare Sheher</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CITIES.map((city, i) => (
                  <a key={`city-seo-${i}`} href={city.slug} title={city.title}
                    className="portal-card reveal group flex items-center gap-4 rounded-2xl bg-white border border-gray-100 p-4 shadow-sm hover:border-[var(--brand-600)]/30"
                    style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-[var(--brand-600)] to-[var(--brand-700)] flex items-center justify-center text-white text-sm font-black shadow-md">{city.name.charAt(0)}</div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-black text-gray-900 group-hover:text-[var(--brand-600)] transition-colors truncate">{city.anchor}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{city.consumers} consumers · {city.name}</p>
                    </div>
                    <span className="ml-auto text-[var(--brand-600)] font-bold text-sm shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
              <p className="mt-6 text-center text-sm text-gray-500">MEPCO provides electricity services across <strong className="text-[var(--brand-600)]">{CITIES.length}+ districts</strong> of South Punjab, Pakistan.</p>
              <p className="mt-1 text-center text-sm text-gray-500" dir="rtl" lang="ur">میپکو جنوبی پنجاب کے <strong className="text-[var(--brand-600)]">{CITIES.length}+ اضلاع</strong> میں بجلی کی خدمات فراہم کرتی ہے۔</p>
            </div>
          </div>
          <div className="mt-10 text-center flex flex-wrap gap-3 justify-center reveal">
            <a href="/all-mepco-regions" className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-600)] px-6 py-3 font-bold text-white transition hover:bg-[var(--brand-800)] btn-3d">View All {CITIES.length}+ Regions | تمام علاقے →</a>
            <a href="/mepco-bill-calculator" className="inline-flex items-center gap-2 rounded-xl bg-white border-2 border-[var(--brand-600)] px-6 py-3 font-bold text-[var(--brand-600)] transition hover:bg-[var(--brand-600)] hover:text-white">🧮 Advanced Calculator | ایڈوانسڈ کیلکولیٹر</a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 11. SOLAR BANNER */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-green-50">
        <div className="mx-auto max-w-7xl px-5">
          <div className="reveal portal-card rounded-3xl bg-white border border-amber-200 p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">☀️ SOLAR TOOL | سولر ٹول</span>
              <h2 className="mt-3 text-3xl font-black text-gray-900">Solar Savings Calculator</h2>
              <p className="mt-2 text-gray-600">Calculate solar savings, yearly return, net metering credits and payback period.</p>
              <p className="mt-1 text-gray-500" dir="rtl" lang="ur">سولر بچت، سالانہ منافع، نیٹ میٹرنگ کریڈٹس اور پے بیک پیریڈ معلوم کریں۔</p>
              <p className="mt-1 text-gray-400 text-sm italic">Solar bachat, saalana munafa, net metering credits aur payback period maloom karein.</p>
            </div>
            <a href="/mepco-solar-savings-calculator" className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[var(--brand-600)] px-8 py-4 text-lg font-black text-white btn-3d glow-button">Open Calculator | کیلکولیٹر کھولیں →</a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 12. GUIDES HUB */}
      <section id="guides" className="py-16 bg-[#f8faf9]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-8 reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)]/10 px-4 py-1.5 text-xs font-bold text-[var(--brand-600)] uppercase tracking-widest mb-4">Help Center | مدد مرکز</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">MEPCO Consumer Guides</h2>
            <p className="mt-2 text-gray-500">{GUIDE_LINKS.length}+ comprehensive guides for MEPCO consumers — bill, meter, connection, taxes, and complaints.</p>
            <p className="mt-1 text-gray-500" dir="rtl" lang="ur">میپکو صارفین کے لیے {GUIDE_LINKS.length}+ مکمل گائیڈز — بل، میٹر، کنکشن، ٹیکسز اور شکایات۔</p>
            <p className="mt-1 text-gray-400 text-sm italic">MEPCO consumers ke liye {GUIDE_LINKS.length}+ mukammal guides.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-8 reveal">
            {guideCategories.map((cat) => (
              <button key={cat} onClick={() => setGuideFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${guideFilter === cat ? "bg-[var(--brand-600)] text-white shadow-lg shadow-green-900/20" : "bg-white border border-gray-200 text-gray-600 hover:border-[var(--brand-600)] hover:text-[var(--brand-600)]"}`}>
                {cat} {cat === "All" ? `(${GUIDE_LINKS.length})` : `(${GUIDE_LINKS.filter((g) => g.category === cat).length})`}
              </button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredGuides.map((g, i) => (
              <a key={g.href} href={g.href} className="portal-card reveal group rounded-2xl bg-white border border-gray-100 p-5 shadow-sm hover:border-[var(--brand-600)]/20" style={{ transitionDelay: `${(i % 4) * 50}ms` }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{g.icon}</span>
                  <span className="rounded-full bg-gray-50 border border-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-400 uppercase">{g.category}</span>
                </div>
                <h3 className="text-base font-black text-gray-900 group-hover:text-[var(--brand-600)] transition-colors">{g.title}</h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">{g.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 13. POPULAR SEARCHES */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-8 reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)]/10 px-4 py-1.5 text-xs font-bold text-[var(--brand-600)] uppercase tracking-widest mb-3">Quick Access | فوری رسائی</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Popular MEPCO Searches</h2>
            <p className="mt-1 text-sm text-gray-500">Most searched MEPCO electricity bill topics — click to access instantly</p>
            <p className="mt-1 text-sm text-gray-500" dir="rtl" lang="ur">سب سے زیادہ تلاش کیے جانے والے میپکو بل موضوعات</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 reveal">
            {POPULAR_SEARCHES.map((s) => (
              <a key={s.label} href={s.href} className="rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 shadow-sm hover:border-[var(--brand-600)] hover:text-[var(--brand-600)] hover:shadow-md transition-all duration-200">{s.label}</a>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-400">{POPULAR_SEARCHES.length}+ popular topics · Updated 2026 · South Punjab Pakistan</p>
        </div>
      </section>

      <div className="section-divider" />

      {/* 14. SEO CONTENT */}
      <section className="py-16 bg-[#f8faf9]">
        <div className="mx-auto max-w-7xl px-5">
          <article className="reveal rounded-3xl bg-white border border-gray-100 p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-black text-gray-900">MEPCO Online Bill Check 2026</h2>
            <div className="mt-8 space-y-6 text-gray-700 leading-8">
              <p>MEPCO online bill checking service allows consumers to instantly view and download duplicate electricity bills using a 14-digit reference number. This platform helps users across South Punjab including Multan, Khanewal, Bahawalpur, Vehari, Dera Ghazi Khan and nearby regions.</p>
              <p>Consumers can check due date, payable amount, estimated electricity charges, and important billing information online without visiting physical offices.</p>
              <p>Consumers can also learn about MEPCO taxes, GST, FPA, QTA, tariff slabs, customer ID, reference number and new electricity connection procedures.</p>
              <p className="text-right" dir="rtl" lang="ur">میپکو صارفین آن لائن بجلی کا بل چیک کر سکتے ہیں، ڈپلیکیٹ بل ڈاؤن لوڈ کر سکتے ہیں، ریفرنس نمبر اور کسٹمر آئی ڈی کی معلومات حاصل کر سکتے ہیں، اور بجلی کے بل میں شامل ٹیکسز، ایف پی اے، کیو ٹی اے اور دیگر چارجز کو سمجھ سکتے ہیں۔</p>
              <p className="italic text-gray-600">MEPCO consumers online bijli ka bill check kar sakte hain, duplicate bill download kar sakte hain, reference number aur customer ID ki maloomaat haasil kar sakte hain, aur bill mein shamil taxes, FPA, QTA aur deegar charges ko samajh sakte hain.</p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: "Check Bill by CNIC | سی این آئی سی سے بل چیک →", href: "/mepco-bill-check-by-cnic" },
                  { label: "200 Units Rule | 200 یونٹ رول →", href: "/mepco-200-units-rule" },
                  { label: "FPA Charges Guide | ایف پی اے گائیڈ →", href: "/mepco-fpa-charges-guide" },
                  { label: "Protected Consumer | محفوظ صارف →", href: "/mepco-protected-consumer-guide" },
                  { label: "Solar Calculator | سولر کیلکولیٹر →", href: "/mepco-solar-savings-calculator" },
                ].map((link) => (
                  <a key={link.href} href={link.href} className="rounded-full bg-[var(--brand-600)]/10 px-4 py-2 text-sm font-bold text-[var(--brand-600)] hover:bg-[var(--brand-600)] hover:text-white transition-all duration-200">{link.label}</a>
                ))}
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { title: "Duplicate Bill", titleUrdu: "ڈپلیکیٹ بل", desc: "Download or print duplicate electricity bills online.", descUrdu: "ڈپلیکیٹ بل آن لائن ڈاؤن لوڈ یا پرنٹ کریں۔", icon: "📄" },
                { title: "Bill Calculator", titleUrdu: "بل کیلکولیٹر", desc: "Estimate monthly electricity charges using units consumed.", descUrdu: "استعمال شدہ یونٹ سے ماہانہ بجلی چارجز کا تخمینہ۔", icon: "🧮" },
                { title: "Mobile Friendly", titleUrdu: "موبائل فرینڈلی", desc: "Optimized for mobile users across Pakistan.", descUrdu: "پاکستان بھر میں موبائل صارفین کے لیے موزوں۔", icon: "📱" },
              ].map((item) => (
                <div key={item.title} className="portal-card rounded-2xl bg-[#f8faf9] p-5 border border-gray-100 shadow-sm">
                  <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                  <h3 className="mt-3 text-lg font-black text-gray-900">{item.title}</h3>
                  <p className="text-sm font-bold text-gray-600" dir="rtl" lang="ur">{item.titleUrdu}</p>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  <p className="mt-1 text-xs text-gray-500" dir="rtl" lang="ur">{item.descUrdu}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <div className="section-divider" />

      {/* 15. URDU AUTHORITY SECTION */}
      <section className="py-16 bg-white" aria-label="میپکو بل گائیڈ اردو">
        <div className="mx-auto max-w-7xl px-5">
          <div className="reveal rounded-3xl border border-green-100 bg-gradient-to-br from-[#f0fdf4] to-white p-8 md:p-12 shadow-sm">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)]/10 px-4 py-1.5 text-xs font-bold text-[var(--brand-600)] uppercase tracking-widest mb-4">اردو گائیڈ | Urdu Guide</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900" dir="rtl" lang="ur">میپکو آن لائن بل چیک — مکمل اردو گائیڈ</h2>
              <p className="mt-2 text-gray-500" dir="rtl" lang="ur">پاکستانی صارفین کے لیے میپکو بجلی بل کی مکمل معلومات اردو میں</p>
              <p className="mt-1 text-gray-400 text-sm italic">Pakistani consumers ke liye MEPCO bijli bill ki mukammal maloomaat Urdu mein</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-5 text-right" dir="rtl" lang="ur">
                <p className="text-gray-700 leading-9 text-base">میپکو یعنی ملتان الیکٹرک پاور کمپنی جنوبی پنجاب کے لاکھوں گھروں اور کاروباروں کو بجلی فراہم کرتی ہے۔ اب آپ گھر بیٹھے اپنا میپکو بجلی کا بل آن لائن چیک کر سکتے ہیں۔ اس کے لیے آپ کو صرف اپنے پرانے بل پر درج 14 ہندسوں کا ریفرنس نمبر چاہیے۔</p>
                <p className="text-gray-700 leading-9 text-base">میپکو بل آن لائن چیک کرنے کا طریقہ بہت آسان ہے۔ اوپر دیے گئے بل چیکر میں اپنا ریفرنس نمبر درج کریں اور چیک بل کے بٹن پر کلک کریں۔ آپ کا بل فوری طور پر کھل جائے گا جہاں آپ واجب الادا رقم، آخری تاریخ اور بل کی تمام تفصیلات دیکھ سکتے ہیں۔</p>
                <p className="text-gray-700 leading-9 text-base">اگر آپ کے پاس پرانا بل موجود نہیں تو آپ اپنے میپکو کسٹمر آئی ڈی کے ذریعے بھی بل کی معلومات حاصل کر سکتے ہیں۔ ہمارا بل کیلکولیٹر استعمال کر کے آپ ماہانہ بجلی کی لاگت کا اندازہ بھی لگا سکتے ہیں۔</p>
                <p className="text-gray-700 leading-9 text-base">200 یونٹ سے کم استعمال کرنے والے صارفین محفوظ صارف کہلاتے ہیں اور انہیں کم نرخ پر بجلی ملتی ہے۔ 200 یونٹ سے زیادہ استعمال پر بل میں نمایاں اضافہ ہو سکتا ہے۔ اس لیے ضروری ہے کہ آپ اپنے ماہانہ یونٹ پر نظر رکھیں۔</p>
                <p className="text-gray-700 leading-9 text-base">میپکو بل میں ایف پی اے یعنی فیول پرائس ایڈجسٹمنٹ، جی ایس ٹی، فکسڈ چارجز اور دیگر ٹیکس شامل ہوتے ہیں۔ ان تمام چارجز کو سمجھنے کے لیے ہماری ٹیکسز گائیڈ پڑھیں۔ یہ ویب سائٹ ایک آزاد معلوماتی پورٹل ہے اور میپکو یا پی آئی ٹی سی سے منسلک نہیں ہے۔</p>
                <div className="mt-6 space-y-4 text-left" dir="ltr">
                  <p className="text-gray-600 leading-8 text-sm italic">MEPCO yani Multan Electric Power Company South Punjab ke laakhon gharon aur karobaron ko bijli faraham karti hai. Ab aap ghar baithe apna MEPCO bijli ka bill online check kar sakte hain.</p>
                  <p className="text-gray-600 leading-8 text-sm italic">200 units se kam istemal karne wale consumers mahfooz consumer kehlate hain aur unhe kam rate par bijli milti hai. 200 units se zyada istemal par bill mein numayan izafa ho sakta hai.</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { title: "ریفرنس نمبر کیا ہے؟", sub: "Reference Number", subRoman: "Reference number kya hai?", icon: "🔢", desc: "14 ہندسوں کا ریفرنس نمبر آپ کے پرانے میپکو بجلی بل کے اوپری حصے میں درج ہوتا ہے۔ یہ نمبر آپ کے کنکشن کی پہچان ہے۔", descRoman: "14 handson ka reference number aapke purane MEPCO bill ke oopri hisse mein darj hota hai." },
                  { title: "محفوظ صارف کون ہے؟", sub: "Protected Consumer", subRoman: "Mahfooz consumer kaun hai?", icon: "🛡️", desc: "جو صارف ماہانہ 200 یونٹ یا اس سے کم بجلی استعمال کرے وہ محفوظ صارف کہلاتا ہے۔ اسے سستی نرخ پر بجلی ملتی ہے۔", descRoman: "Jo consumer maahana 200 units ya us se kam bijli use kare wo mahfooz consumer kehlata hai." },
                  { title: "پیک اوقات کیا ہیں؟", sub: "Peak Hours", subRoman: "Peak hours kya hain?", icon: "⏰", desc: "گرمیوں میں شام 6:30 سے رات 10:30 بجے تک پیک اوقات ہیں۔ اس دوران بھاری آلات جیسے اے سی اور واشنگ مشین کا استعمال کم کریں۔", descRoman: "Garmiyon mein shaam 6:30 se raat 10:30 tak peak hours hain." },
                  { title: "ایف پی اے کیا ہے؟", sub: "Fuel Price Adjustment", subRoman: "FPA kya hai?", icon: "🧾", desc: "ایف پی اے یعنی فیول پرائس ایڈجسٹمنٹ ہر مہینے تبدیل ہو سکتی ہے۔ یہ آپ کے بل میں اضافہ یا کمی دونوں کر سکتی ہے۔", descRoman: "FPA yani Fuel Price Adjustment har maheene tabdeel ho sakti hai." },
                ].map((card) => (
                  <div key={card.title} className="portal-card rounded-2xl bg-white border border-gray-100 p-5 shadow-sm text-right" dir="rtl" lang="ur">
                    <div className="flex items-center justify-end gap-3 mb-3">
                      <div>
                        <h3 className="font-black text-gray-900">{card.title}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{card.sub}</p>
                        <p className="text-xs text-gray-400 italic" dir="ltr">{card.subRoman}</p>
                      </div>
                      <span className="text-2xl shrink-0" aria-hidden="true">{card.icon}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-7">{card.desc}</p>
                    <p className="text-xs text-gray-500 leading-6 mt-2 italic" dir="ltr">{card.descRoman}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 justify-end" dir="rtl">
              {[
                { label: "اردو بل گائیڈ →", href: "/mepco-bill-urdu" },
                { label: "ریفرنس نمبر گائیڈ →", href: "/mepco-reference-number-guide" },
                { label: "محفوظ صارف گائیڈ →", href: "/mepco-protected-consumer-guide" },
                { label: "ایف پی اے چارجز گائیڈ →", href: "/mepco-fpa-charges-guide" },
                { label: "200 یونٹ رول →", href: "/mepco-200-units-rule" },
              ].map((link) => (
                <a key={link.href} href={link.href} lang="ur" className="rounded-full bg-[var(--brand-600)]/10 px-4 py-2 text-sm font-bold text-[var(--brand-600)] hover:bg-[var(--brand-600)] hover:text-white transition-all duration-200">{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 16. FAQ — English + Urdu + Roman Urdu */}
      <section id="faq" className="py-16 bg-[#f8faf9]">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center mb-12 reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-600)]/10 px-4 py-1.5 text-xs font-bold text-[var(--brand-600)] uppercase tracking-widest mb-4">Help &amp; Support | مدد اور سہارا</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-2 text-lg font-bold text-gray-600" dir="rtl" lang="ur">اکثر پوچھے جانے والے سوالات</p>
            <p className="mt-1 text-sm text-gray-400 italic">Aksar poochhe jane wale sawalaat</p>
            <p className="mt-2 text-gray-500">Common questions about MEPCO electricity bills, reference numbers, and online services.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map(([q, aEn, aUr, aRo], i) => (
              <div key={i} className="reveal rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden" style={{ transitionDelay: `${i * 40}ms` }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                  <h3 className="text-base font-black text-gray-900 pr-4">{q}</h3>
                  <span aria-hidden="true" className={`shrink-0 h-8 w-8 rounded-full bg-[var(--brand-600)]/10 flex items-center justify-center text-[var(--brand-600)] font-bold transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>▼</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 border-t border-gray-50 space-y-3">
                    <p className="pt-4 text-sm text-gray-600 leading-7">{aEn}</p>
                    <p className="text-sm text-gray-600 leading-7" dir="rtl" lang="ur">{aUr}</p>
                    <p className="text-sm text-gray-500 leading-7 italic">{aRo}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* 17. AD PLACEHOLDER */}
      <section className="py-6 bg-white" aria-label="Advertisement">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 overflow-hidden" style={{ minHeight: "250px", contain: "layout" }}>
            <div className="border-b border-gray-100 bg-gray-100/50 px-4 py-2"><p className="text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">Advertisement</p></div>
            <div className="flex items-center justify-center p-8" style={{ minHeight: "200px" }}>
              <div className="text-center">
                <p className="text-4xl mb-3" aria-hidden="true">📢</p>
                <p className="text-sm font-bold text-gray-400">Google AdSense Space</p>
                <p className="text-xs text-gray-300 mt-1">Responsive ad will appear after approval</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 18. FOOTER */}
      <footer className="dark-mesh-bg text-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-10 md:grid-cols-5">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/mepco-logo.png" alt="MEPCO Bill Portal" width={48} height={48} className="rounded-full border-2 border-green-600/50 bg-white object-cover" />
                <div><h3 className="text-xl font-black">MEPCO</h3><p className="text-xs text-green-400/70">Consumer Portal Hub | صارف پورٹل ہب</p></div>
              </div>
              <p className="mt-5 text-sm leading-7 text-green-300/60">Independent MEPCO electricity bill information portal for South Punjab consumers. Not affiliated with MEPCO or PITC.</p>
              <p className="mt-2 text-xs leading-6 text-green-300/50" dir="rtl" lang="ur">جنوبی پنجاب کے صارفین کے لیے آزاد میپکو بجلی بل معلوماتی پورٹل۔ میپکو یا پی آئی ٹی سی سے منسلک نہیں۔</p>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-green-400 mb-5">Quick Links | فوری روابط</h4>
              <div className="space-y-3">{FOOTER_QUICK.map((l) => (<a key={l.href} href={l.href} className="block text-sm text-green-300/60 hover:text-white transition-colors">{l.label}</a>))}</div>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-green-400 mb-5">Guides | گائیڈز</h4>
              <div className="space-y-3">{FOOTER_GUIDES.map((l) => (<a key={l.href} href={l.href} className="block text-sm text-green-300/60 hover:text-white transition-colors">{l.label}</a>))}</div>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-green-400 mb-5">Cities | شہر</h4>
              <div className="space-y-3">
                {CITIES.slice(0, 8).map((city, index) => (<a key={`footer-city-${index}`} href={city.slug} className="block text-sm text-green-300/60 hover:text-white transition-colors">{city.anchor}</a>))}
                <a href="/all-mepco-regions" className="block text-sm text-green-400 hover:text-white transition-colors font-bold">View All Regions | تمام علاقے →</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-green-400 mb-5">Information | معلومات</h4>
              <div className="space-y-3 text-sm text-green-300/60">
                <p>Independent informational website. | آزاد معلوماتی ویب سائٹ۔</p>
                <p>Not affiliated with MEPCO or PITC. | میپکو سے منسلک نہیں۔</p>
                <p>📞 Helpline: {HELPLINE}</p>
                <p className="text-xs text-green-300/40 mt-4">Bill data is provided by official PITC/MEPCO systems. Always verify charges with your official bill.<br /><span dir="rtl" lang="ur">بل کا ڈیٹا آفیشل سسٹم سے آتا ہے۔ ہمیشہ اپنے آفیشل بل سے تصدیق کریں۔</span></p>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-green-300/40">© 2026 {SITE_NAME}. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-4 text-xs text-green-300/40">{FOOTER_LEGAL.map((l) => (<a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>))}</div>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAV */}
      <nav aria-label="Mobile bottom navigation" className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/98 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md">
        <div className="grid grid-cols-5 text-center">
          {[
            { icon: "⚡", label: "Bill", href: "#bill" },
            { icon: "🧮", label: "Calc", href: "#calculator" },
            { icon: "🏙️", label: "Cities", href: "#cities" },
            { icon: "📚", label: "Guides", href: "#guides" },
            { icon: "❓", label: "FAQs", href: "#faq" },
          ].map((item) => (
            <a key={item.href} href={item.href} className="py-3 text-xs font-bold text-gray-600 hover:text-[var(--brand-600)] transition-colors">
              <span className="text-lg block" aria-hidden="true">{item.icon}</span>{item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* SCROLL TO TOP */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"
        className="fixed bottom-20 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-600)] text-xl text-white shadow-xl btn-3d glow-green md:bottom-8">↑</button>

    </main>
  );
}
