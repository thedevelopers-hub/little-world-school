/**
 * Static Pre-rendering Generator for Little World School
 * Generates static, SEO-crawlable HTML files for /, /en, /mr, /hi in dist/
 * Ensures Googlebot Wave 1 HTTP crawl finds rich, semantic HTML without requiring JavaScript.
 */

import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');

interface LangPageConfig {
  code: string;
  langTag: string;
  subpath: string; // '' for root, 'en', 'mr', 'hi'
  canonical: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDesc: string;
  ogLocale: string;
  heading: string;
  subheading: string;
  schoolName: string;
  addressText: string;
  landmarkText: string;
  admissionsNotice: string;
  classesHeading: string;
  facilitiesHeading: string;
  contactHeading: string;
  faqHeading: string;
  classesList: Array<{ name: string; age: string; desc: string }>;
  facilitiesList: string[];
  faqs: Array<{ q: string; a: string }>;
}

const PAGES: LangPageConfig[] = [
  {
    code: 'en',
    langTag: 'en-IN',
    subpath: '',
    canonical: 'https://little-world-school.vercel.app/',
    title: 'Little World School Ambivli | Preschool to Grade 12 | Admissions Open',
    description: 'Discover Little World School in Ambivli, Kalyan, Thane. Quality English-medium education from Playgroup to Grade 12 with nurturing learning, individual attention and admission enquiries.',
    keywords: 'Little World School, best school in Ambivli, school in Ambivli West, preschool Ambivli, nursery admission Ambivli, playgroup Ambivli, primary school in Ambivli, Neptune Swarajya school, schools in Kalyan Thane, English medium school Ambivli, admissions open in Ambivli, school near Ambivli Railway Station',
    ogTitle: 'Little World School Ambivli | Preschool to Grade 12 | Admissions Open',
    ogDesc: 'Discover Little World School in Ambivli, Kalyan, Thane. Quality English-medium education from Playgroup to Grade 12 with nurturing learning, individual attention and admission enquiries.',
    ogLocale: 'en_IN',
    heading: 'Little World School — Ambivli, Kalyan',
    subheading: 'Nurturing Young Minds from Playgroup to Grade 12 with Care, Curiosity & Academic Excellence in Ambivli (West). Admissions Open for Academic Year 2026–2027.',
    schoolName: 'Little World School',
    addressText: 'Neptune Swarajya, Swarajya Road, Village Ambivli (West), Taluka Kalyan, District Thane, Maharashtra 421102',
    landmarkText: 'Near Ambivli Railway Station (Central Line)',
    admissionsNotice: 'Admissions Open for Playgroup, Nursery, Jr KG, Sr KG & Grades 1 to 12. Direct WhatsApp Admissions Hotline: +91 8652681370',
    classesHeading: 'Academic Programs & Classes',
    facilitiesHeading: 'Campus Infrastructure & Child Safety',
    contactHeading: 'Contact & Campus Location',
    faqHeading: 'Frequently Asked Questions',
    classesList: [
      { name: 'Playgroup', age: '1.8 - 2.5 Years', desc: 'Sensory-rich early play, motor skills exploration, emotional security and joyful foundational social habits.' },
      { name: 'Nursery', age: '2.5 - 3.5 Years', desc: 'Foundational phonics, basic numeracy, interactive creative arts and guided curiosity.' },
      { name: 'Junior KG (Jr. KG)', age: '3.5 - 4.5 Years', desc: 'Pre-writing readiness, early literacy, numeric reasoning and experiential STEM discovery.' },
      { name: 'Senior KG (Sr. KG)', age: '4.5 - 5.5 Years', desc: 'Reading fluency, sentence formation, mathematical concepts and structured primary school readiness.' },
      { name: 'Grade 1 to Grade 12', age: '6 - 18 Years', desc: 'Comprehensive curriculum spanning science, mathematics, languages, social studies, commerce, sports and digital skills.' },
    ],
    facilitiesList: [
      'Gated, secure campus inside Neptune Swarajya township away from main road traffic',
      'High-definition CCTV surveillance across classrooms, play zones and entrance points',
      'Child-safe ergonomic furniture, hygienic restrooms and UV-purified drinking water',
      'Trained female attendants (didis / maushis) and caring early childhood teachers',
      'Emergency first-aid medical support with on-call doctor connectivity',
    ],
    faqs: [
      { q: 'Where is Little World School located?', a: 'Little World School is located at Neptune Swarajya, Swarajya Road, Ambivli (West), Kalyan, Thane 421102, just 3 to 5 minutes from Ambivli Railway Station.' },
      { q: 'Which classes are offered for admission?', a: 'We offer admissions from Playgroup, Nursery, Junior KG, Senior KG up to Grade 12.' },
      { q: 'How can parents apply for admission?', a: 'Parents can connect directly with our admissions desk via WhatsApp at +91 8652681370 or visit the school office at Neptune Swarajya, Ambivli (West).' },
    ],
  },
  {
    code: 'en-sub',
    langTag: 'en-IN',
    subpath: 'en',
    canonical: 'https://little-world-school.vercel.app/en',
    title: 'Little World School Ambivli | Preschool to Grade 12 | Admissions Open',
    description: 'Discover Little World School in Ambivli, Kalyan, Thane. Quality English-medium education from Playgroup to Grade 12 with nurturing learning, individual attention and admission enquiries.',
    keywords: 'Little World School, best school in Ambivli, school in Ambivli West, preschool Ambivli, nursery admission Ambivli, playgroup Ambivli, primary school in Ambivli, Neptune Swarajya school, schools in Kalyan Thane, English medium school Ambivli, admissions open in Ambivli, school near Ambivli Railway Station',
    ogTitle: 'Little World School Ambivli | Preschool to Grade 12 | Admissions Open',
    ogDesc: 'Discover Little World School in Ambivli, Kalyan, Thane. Quality English-medium education from Playgroup to Grade 12 with nurturing learning, individual attention and admission enquiries.',
    ogLocale: 'en_IN',
    heading: 'Little World School — Ambivli, Kalyan',
    subheading: 'Nurturing Young Minds from Playgroup to Grade 12 with Care, Curiosity & Academic Excellence in Ambivli (West). Admissions Open for Academic Year 2026–2027.',
    schoolName: 'Little World School',
    addressText: 'Neptune Swarajya, Swarajya Road, Village Ambivli (West), Taluka Kalyan, District Thane, Maharashtra 421102',
    landmarkText: 'Near Ambivli Railway Station (Central Line)',
    admissionsNotice: 'Admissions Open for Playgroup, Nursery, Jr KG, Sr KG & Grades 1 to 12. Direct WhatsApp Admissions Hotline: +91 8652681370',
    classesHeading: 'Academic Programs & Classes',
    facilitiesHeading: 'Campus Infrastructure & Child Safety',
    contactHeading: 'Contact & Campus Location',
    faqHeading: 'Frequently Asked Questions',
    classesList: [
      { name: 'Playgroup', age: '1.8 - 2.5 Years', desc: 'Sensory-rich early play, motor skills exploration, emotional security and joyful foundational social habits.' },
      { name: 'Nursery', age: '2.5 - 3.5 Years', desc: 'Foundational phonics, basic numeracy, interactive creative arts and guided curiosity.' },
      { name: 'Junior KG (Jr. KG)', age: '3.5 - 4.5 Years', desc: 'Pre-writing readiness, early literacy, numeric reasoning and experiential STEM discovery.' },
      { name: 'Senior KG (Sr. KG)', age: '4.5 - 5.5 Years', desc: 'Reading fluency, sentence formation, mathematical concepts and structured primary school readiness.' },
      { name: 'Grade 1 to Grade 12', age: '6 - 18 Years', desc: 'Comprehensive curriculum spanning science, mathematics, languages, social studies, commerce, sports and digital skills.' },
    ],
    facilitiesList: [
      'Gated, secure campus inside Neptune Swarajya township away from main road traffic',
      'High-definition CCTV surveillance across classrooms, play zones and entrance points',
      'Child-safe ergonomic furniture, hygienic restrooms and UV-purified drinking water',
      'Trained female attendants (didis / maushis) and caring early childhood teachers',
      'Emergency first-aid medical support with on-call doctor connectivity',
    ],
    faqs: [
      { q: 'Where is Little World School located?', a: 'Little World School is located at Neptune Swarajya, Swarajya Road, Ambivli (West), Kalyan, Thane 421102, just 3 to 5 minutes from Ambivli Railway Station.' },
      { q: 'Which classes are offered for admission?', a: 'We offer admissions from Playgroup, Nursery, Junior KG, Senior KG up to Grade 12.' },
      { q: 'How can parents apply for admission?', a: 'Parents can connect directly with our admissions desk via WhatsApp at +91 8652681370 or visit the school office at Neptune Swarajya, Ambivli (West).' },
    ],
  },
  {
    code: 'mr',
    langTag: 'mr-IN',
    subpath: 'mr',
    canonical: 'https://little-world-school.vercel.app/mr',
    title: 'लिटल वर्ल्ड स्कूल अंबिवली | प्लेग्रुप ते १२ वी | प्रवेश सुरू २०२६-२७',
    description: 'नेपच्यून स्वराज्य, अंबिवली (पश्चिम), कल्याण येथील लिटल वर्ल्ड स्कूल. प्लेग्रुप ते इयत्ता १२ वी पर्यंत दर्जेदार इंग्रजी माध्यम शिक्षण, सुरक्षित परिसर आणि प्रत्यक्ष प्रवेश चौकशी.',
    keywords: 'लिटल वर्ल्ड स्कूल, अंबिवली शाळा, प्लेग्रुप अंबिवली, नर्सरी प्रवेश, नेपच्यून स्वराज्य शाळा, कल्याण ठाणे शाळा, इंग्रजी माध्यम शाळा',
    ogTitle: 'लिटल वर्ल्ड स्कूल अंबिवली | प्लेग्रुप ते १२ वी | प्रवेश सुरू',
    ogDesc: 'नेपच्यून स्वराज्य, अंबिवली (पश्चिम), कल्याण येथील लिटल वर्ल्ड स्कूल. प्लेग्रुप ते इयत्ता १२ वी पर्यंत दर्जेदार इंग्रजी माध्यम शिक्षण, सुरक्षित परिसर आणि प्रत्यक्ष प्रवेश चौकशी.',
    ogLocale: 'mr_IN',
    heading: 'लिटल वर्ल्ड स्कूल — अंबिवली, कल्याण',
    subheading: 'प्लेग्रुप ते इयत्ता १२ वी पर्यंत दर्जेदार इंग्रजी माध्यम शिक्षण, वैयक्तिक लक्ष आणि सुरक्षित वातावरण. शैक्षणिक वर्ष २०२६–२०२७ चे प्रवेश सुरू.',
    schoolName: 'लिटल वर्ल्ड स्कूल',
    addressText: 'नेपच्यून स्वराज्य, स्वराज्य रोड, अंबिवली (पश्चिम), तालुका कल्याण, जिल्हा ठाणे, महाराष्ट्र ४२११०२',
    landmarkText: 'अंबिवली रेल्वे स्टेशन जवळ (मध्य रेल्वे)',
    admissionsNotice: 'प्लेग्रुप, नर्सरी, ज्युनिअर केजी, सिनिअर केजी आणि इयत्ता १ ते १२ वी चे प्रवेश सुरू. थेट व्हॉट्सॲप हेल्पलाइन: +91 8652681370',
    classesHeading: 'शैक्षणिक वर्ग आणि कार्यक्रम',
    facilitiesHeading: 'शालेय सुविधा आणि मुलांची सुरक्षितता',
    contactHeading: 'संपर्क आणि शाळेचा पत्ता',
    faqHeading: 'सतत विचारले जाणारे प्रश्न (FAQ)',
    classesList: [
      { name: 'प्लेग्रुप (Playgroup)', age: '१.८ ते २.५ वर्षे', desc: 'खेळाच्या माध्यमातून मूलभूत ज्ञान, संभाषण आणि आत्मविश्वास वाढवणारे वातावरण.' },
      { name: 'नर्सरी (Nursery)', age: '२.५ ते ३.५ वर्षे', desc: 'ध्वनिशास्त्र (फोनिक्स), अंकज्ञान, चित्रकला आणि आनंददायी खेळ.' },
      { name: 'ज्युनिअर केजी (Junior KG)', age: '३.५ ते ४.५ वर्षे', desc: 'लेखनपूर्व सराव, संख्याज्ञान, भाषा विकास आणि वैज्ञानिक खेळ.' },
      { name: 'सिनिअर केजी (Senior KG)', age: '४.५ ते ५.५ वर्षे', desc: 'वाचन, वाक्यरचना, गणितीय कौशल्ये आणि प्राथमिक शाळेसाठी तयारी.' },
      { name: 'इयत्ता १ ते १२ वी', age: '६ ते १८ वर्षे', desc: 'विज्ञान, गणित, वाणिज्य, संगणक आणि क्रीडा यांचा समावेश असलेला सर्वसमावेशक अभ्यासक्रम.' },
    ],
    facilitiesList: [
      'नेपच्यून स्वराज्य गृहसंकुलातील शांत, सुरक्षित व बंदिस्त परिसर',
      'सर्व वर्गखोल्या आणि क्रीडांगणावर २४x७ सीसीटीव्ही कॅमेरे देखरेख',
      'मुलांसाठी अनुकूल फर्निचर, स्वच्छ स्वच्छतागृहे आणि शुद्ध पिण्याचे पाणी',
      'अनुभवी शिक्षिका आणि प्रशिक्षित मदतनीस महिला कर्मचारी (मावशी)',
      'आपत्कालीन प्रथमोपचार पेटी आणि डॉक्टरांची तत्पर उपलब्धता',
    ],
    faqs: [
      { q: 'लिटल वर्ल्ड स्कूल कुठे आहे?', a: 'शाळा नेपच्यून स्वराज्य, स्वराज्य रोड, अंबिवली (पश्चिम), कल्याण (ठाणे) येथे अंबिवली रेल्वे स्थानकाजवळ स्थित आहे.' },
      { q: 'कोणत्या वर्गांसाठी प्रवेश सुरू आहेत?', a: 'प्लेग्रुप, नर्सरी, ज्युनिअर केजी, सिनिअर केजी तसेच इयत्ता १ ते १२ वी साठी प्रवेश सुरू आहेत.' },
      { q: 'प्रवेशासाठी संपर्क कसा करावा?', a: 'पालक थेट +91 8652681370 या व्हॉट्सॲप क्रमांकावर किंवा नेपच्यून स्वराज्य येथील कार्यालयात भेट देऊन चौकशी करू शकतात.' },
    ],
  },
  {
    code: 'hi',
    langTag: 'hi-IN',
    subpath: 'hi',
    canonical: 'https://little-world-school.vercel.app/hi',
    title: 'लिटिल वर्ल्ड स्कूल अंबिवली | प्लेग्रुप से १२ वीं | प्रवेश प्रारंभ २०२६-२७',
    description: 'नेपच्यून स्वराज्य, अंबिवली (पश्चिम), कल्याण में स्थित लिटिल वर्ल्ड स्कूल। प्लेग्रुप से कक्षा १२ वीं तक गुणवत्तापूर्ण अंग्रेजी माध्यम शिक्षा, सुरक्षित परिसर और प्रवेश सहायता।',
    keywords: 'लिटिल वर्ल्ड स्कूल, अंबिवली स्कूल, प्लेग्रुप अंबिवली, नर्सरी प्रवेश, नेपच्यून स्वराज्य स्कूल, कल्याण ठाणे स्कूल, अंग्रेजी माध्यम स्कूल',
    ogTitle: 'लिटिल वर्ल्ड स्कूल अंबिवली | प्लेग्रुप से १२ वीं | प्रवेश प्रारंभ',
    ogDesc: 'नेपच्यून स्वराज्य, अंबिवली (पश्चिम), कल्याण में स्थित लिटिल वर्ल्ड स्कूल। प्लेग्रुप से कक्षा १२ वीं तक गुणवत्तापूर्ण अंग्रेजी माध्यम शिक्षा, सुरक्षित परिसर और प्रवेश सहायता।',
    ogLocale: 'hi_IN',
    heading: 'लिटिल वर्ल्ड स्कूल — अंबिवली, कल्याण',
    subheading: 'प्लेग्रुप से कक्षा १२ वीं तक गुणवत्तापूर्ण अंग्रेजी माध्यम शिक्षा, व्यक्तिगत मार्गदर्शन और सुरक्षित वातावरण। शैक्षणिक सत्र २०२६–२०२७ के प्रवेश प्रारंभ।',
    schoolName: 'लिटिल वर्ल्ड स्कूल',
    addressText: 'नेपच्यून स्वराज्य, स्वराज्य रोड, अंबिवली (पश्चिम), तालुका कल्याण, जिला ठाणे, महाराष्ट्र ४२११०२',
    landmarkText: 'अंबिवली रेलवे स्टेशन के निकट (मध्य रेलवे)',
    admissionsNotice: 'प्लेग्रुप, नर्सरी, जूनियर केजी, सीनियर केजी एवं कक्षा १ से १२ वीं तक प्रवेश खुले हैं। आधिकारिक व्हाट्सएप हेल्पलाइन: +91 8652681370',
    classesHeading: 'कक्षाएं एवं शैक्षणिक कार्यक्रम',
    facilitiesHeading: 'परिसर की सुविधाएं एवं बाल सुरक्षा',
    contactHeading: 'संपर्क एवं विद्यालय का पता',
    faqHeading: 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
    classesList: [
      { name: 'प्लेग्रुप (Playgroup)', age: '१.८ से २.५ वर्ष', desc: 'खेल-कूद के माध्यम से प्रारंभिक सामाजिक कौशल, संवाद एवं सुरक्षित बाल विकास।' },
      { name: 'नर्सरी (Nursery)', age: '२.५ से ३.५ वर्ष', desc: 'बुनियादी फोनिक्स, अंक बोध, रचनात्मक रंगाई और उत्सुकता आधारित शिक्षा।' },
      { name: 'जूनियर केजी (Junior KG)', age: '३.५ से ४.५ वर्ष', desc: 'लेखन पूर्व तैयारी, प्रारंभिक भाषा बोध एवं व्यवहारिक गणितीय ज्ञान।' },
      { name: 'सीनियर केजी (Senior KG)', age: '४.५ से ५.५ वर्ष', desc: 'धाराप्रवाह पठन, वाक्य निर्माण, मूलभूत गणित एवं प्राथमिक स्कूल की संपूर्ण तैयारी।' },
      { name: 'कक्षा १ से १२ वीं', age: '६ से १८ वर्ष', desc: 'विज्ञान, गणित, वाणिज्य, कंप्यूटर एवं शारीरिक शिक्षा का समग्र पाठ्यक्रम।' },
    ],
    facilitiesList: [
      'नेपच्यून स्वराज्य टाउनशिप के शांत एवं सुरक्षित परिसर में स्थित',
      'कक्षाओं, हॉल और खेल क्षेत्रों में उच्च गुणवत्ता वाले सीसीटीवी कैमरे',
      'बाल-सुरक्षित फर्नीचर, स्वच्छ शौचालय और यूवी-फ़िल्टर युक्त पेयजल',
      'स्नेहशील शिक्षिकाएं और प्रशिक्षित महिला सहायक कर्मचारी (दीदी)',
      'प्राथमिक चिकित्सा किट और डॉक्टर की त्वरित ऑन-कॉल सुविधा',
    ],
    faqs: [
      { q: 'लिटिल वर्ल्ड स्कूल कहाँ स्थित है?', a: 'यह स्कूल नेपच्यून स्वराज्य, स्वराज्य रोड, अंबिवली (पश्चिम), कल्याण, ठाणे में अंबिवली रेलवे स्टेशन के पास स्थित है।' },
      { q: 'किन कक्षाओं में प्रवेश उपलब्ध हैं?', a: 'प्लेग्रुप, नर्सरी, जूनियर केजी, सीनियर केजी तथा कक्षा १ से १२ वीं तक प्रवेश उपलब्ध हैं।' },
      { q: 'प्रवेश के लिए कैसे संपर्क करें?', a: 'अभिभावक सीधे +91 8652681370 पर व्हाट्सएप कर सकते हैं या नेपच्यून स्वराज्य कार्यालय में आकर संपर्क कर सकते हैं।' },
    ],
  },
];

function generateHtmlContent(p: LangPageConfig, baseTemplate: string): string {
  // Build crawlable semantic DOM to insert inside <div id="root">
  const crawlableBody = `
    <div id="school-prerender-content" class="min-h-screen bg-[#FFFDF9] text-slate-800 font-sans">
      <!-- Crawlable Header -->
      <header class="bg-white border-b border-amber-200 py-3 px-4 sm:px-8">
        <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold text-xl">LW</div>
            <div>
              <div class="font-extrabold text-slate-900 text-lg leading-tight">${p.schoolName}</div>
              <div class="text-xs text-amber-800 font-semibold">${p.landmarkText} | Neptune Swarajya, Ambivli (W)</div>
            </div>
          </div>
          <nav aria-label="Language Portals" class="flex items-center gap-2 text-xs font-bold">
            <span class="text-slate-600">Language:</span>
            <a href="/en" class="px-2.5 py-1 rounded-full ${p.langTag.startsWith('en') ? 'bg-amber-600 text-white font-bold' : 'text-slate-700 hover:bg-amber-100'}">English</a>
            <a href="/mr" class="px-2.5 py-1 rounded-full ${p.langTag.startsWith('mr') ? 'bg-amber-600 text-white font-bold' : 'text-slate-700 hover:bg-amber-100'}">मराठी</a>
            <a href="/hi" class="px-2.5 py-1 rounded-full ${p.langTag.startsWith('hi') ? 'bg-amber-600 text-white font-bold' : 'text-slate-700 hover:bg-amber-100'}">हिन्दी</a>
          </nav>
        </div>
      </header>

      <!-- Main Semantic Content -->
      <main class="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <!-- Hero Section with exactly one H1 -->
        <section class="mb-12 text-center sm:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold mb-4">
            <span>🎓</span>
            <span>Admissions Open 2026–2027</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            ${p.heading}
          </h1>
          <p class="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed mb-6">
            ${p.subheading}
          </p>
          <div class="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl mb-8 flex flex-wrap items-center justify-between gap-4">
            <div class="text-xs sm:text-sm text-emerald-950 font-bold">
              ${p.admissionsNotice}
            </div>
            <a href="https://wa.me/918652681370" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-emerald-600 text-white font-extrabold rounded-xl text-xs sm:text-sm hover:bg-emerald-700 transition-colors">
              Chat on WhatsApp: +91 8652681370
            </a>
          </div>
        </section>

        <!-- Classes & Programs Section -->
        <section class="mb-12">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-amber-200">
            ${p.classesHeading}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${p.classesList.map(c => `
              <article class="p-5 bg-white border border-amber-200/80 rounded-2xl shadow-xs">
                <h3 class="text-lg font-bold text-slate-900 mb-1">${c.name}</h3>
                <div class="text-xs font-bold text-amber-700 mb-2">Age Group: ${c.age}</div>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">${c.desc}</p>
                <a href="https://wa.me/918652681370?text=Hello%2C%20I%20am%20inquiring%20about%20admission%20for%20${encodeURIComponent(c.name)}" class="text-xs font-bold text-emerald-700 hover:underline">
                  Inquire on WhatsApp →
                </a>
              </article>
            `).join('')}
          </div>
        </section>

        <!-- Campus Facilities & Safety -->
        <section class="mb-12">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-amber-200">
            ${p.facilitiesHeading}
          </h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
            ${p.facilitiesList.map(f => `
              <li class="flex items-start gap-2.5 p-3.5 bg-white border border-slate-200 rounded-xl">
                <span class="text-emerald-600 font-bold">✔</span>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </section>

        <!-- FAQ Section -->
        <section class="mb-12">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-amber-200">
            ${p.faqHeading}
          </h2>
          <div class="space-y-4">
            ${p.faqs.map(faq => `
              <div class="p-5 bg-white border border-amber-200/80 rounded-2xl">
                <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">${faq.q}</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${faq.a}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Contact & Location Section -->
        <section class="mb-12">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-amber-200">
            ${p.contactHeading}
          </h2>
          <div class="p-6 bg-amber-50/70 border border-amber-300 rounded-2xl text-xs sm:text-sm text-slate-800 space-y-2">
            <div><strong class="font-bold">School Name:</strong> ${p.schoolName}</div>
            <div><strong class="font-bold">Campus Address:</strong> ${p.addressText}</div>
            <div><strong class="font-bold">Landmark:</strong> ${p.landmarkText}</div>
            <div><strong class="font-bold">Official WhatsApp Helpline:</strong> <a href="https://wa.me/918652681370" class="text-emerald-700 font-bold hover:underline">+91 8652681370</a></div>
            <div><strong class="font-bold">Visiting Hours:</strong> Monday – Saturday, 8:30 AM – 4:30 PM IST</div>
          </div>
        </section>
      </main>

      <!-- Crawlable Footer -->
      <footer class="bg-slate-950 text-slate-300 py-8 px-4 sm:px-8 border-t border-slate-800">
        <div class="max-w-7xl mx-auto space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div>© 2026 Little World School, Ambivli. All rights reserved.</div>
            <div class="flex items-center gap-3">
              <a href="/en" class="hover:text-amber-400">English (/en)</a>
              <span>•</span>
              <a href="/mr" class="hover:text-amber-400">मराठी (/mr)</a>
              <span>•</span>
              <a href="/hi" class="hover:text-amber-400">हिन्दी (/hi)</a>
              <span>•</span>
              <a href="/" class="hover:text-amber-400">Home (/)</a>
            </div>
          </div>
          <div class="text-xs text-slate-400 border-t border-slate-900 pt-4 flex flex-wrap items-center justify-between gap-3">
            <div>Website Designed &amp; Developed By: <strong class="text-white">VICKY</strong> • <strong class="text-purple-400">VICTORIX</strong> (Website Designer &amp; Developer)</div>
            <a href="https://wa.me/916387661594?text=Hello%20Vicky%2C%20I%20am%20interested%20in%20getting%20a%20professional%20website%20developed." class="text-xs text-purple-300 font-semibold hover:underline">
              Contact Developer on WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  `;

  let html = baseTemplate;

  // Replace <html lang="...">
  html = html.replace(/<html\s+lang="[^"]*"/i, `<html lang="${p.langTag}"`);

  // Replace <title>...</title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${p.title}</title>`);

  // Replace <meta name="description" ...>
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${p.description}" />`);

  // Replace <link rel="canonical" ...>
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${p.canonical}" />`);

  // Replace OpenGraph title, description, url, locale
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${p.ogTitle}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${p.ogDesc}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${p.canonical}" />`);
  html = html.replace(/<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:locale" content="${p.ogLocale}" />`);

  // Replace Twitter card title, description
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${p.ogTitle}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${p.ogDesc}" />`);

  // Insert crawlable body inside <div id="root">
  html = html.replace('<div id="root"></div>', `<div id="root">${crawlableBody}</div>`);

  return html;
}

export function prerender() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`Dist directory ${DIST_DIR} does not exist!`);
    process.exit(1);
  }

  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error(`Index file ${indexPath} does not exist!`);
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(indexPath, 'utf-8');

  for (const page of PAGES) {
    const renderedHtml = generateHtmlContent(page, baseTemplate);
    if (page.subpath === '') {
      // Overwrite dist/index.html with prerendered root
      fs.writeFileSync(indexPath, renderedHtml, 'utf-8');
      console.log(`✓ Pre-rendered: dist/index.html (Canonical: ${page.canonical})`);
    } else {
      const targetDir = path.join(DIST_DIR, page.subpath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      const targetFile = path.join(targetDir, 'index.html');
      fs.writeFileSync(targetFile, renderedHtml, 'utf-8');
      console.log(`✓ Pre-rendered: dist/${page.subpath}/index.html (Canonical: ${page.canonical})`);
    }
  }

  console.log('✓ All 4 static language endpoints generated successfully for Googlebot Wave 1 crawl.');
}

prerender();
