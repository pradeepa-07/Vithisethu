/* ============================================================
   Vidhisethu — i18n translations
   Languages: English, Hindi, Tamil, Telugu, Kannada,
              Malayalam, Bengali, Marathi
   ============================================================ */

const SUPPORTED_LANGUAGES = {
  en: { label: "English",  native: "English",  flagText: "EN" },
  hi: { label: "Hindi",    native: "हिन्दी",     flagText: "हि" },
  ta: { label: "Tamil",    native: "தமிழ்",      flagText: "த"  },
  te: { label: "Telugu",   native: "తెలుగు",     flagText: "తె" },
  kn: { label: "Kannada",  native: "ಕನ್ನಡ",      flagText: "ಕ"  },
  ml: { label: "Malayalam",native: "മലയാളം",     flagText: "മ"  },
  bn: { label: "Bengali",  native: "বাংলা",       flagText: "বা" },
  mr: { label: "Marathi",  native: "मराठी",       flagText: "म"  }
};

const I18N = {
  en: {
    nav_platform: "Platform",
    nav_coverage: "Coverage",
    nav_fir: "FIR Draft",
    nav_open_app: "Open App",
    nav_try_app: "Try Web App",
    nav_home: "← Home",
    nav_ai: "AI Assistant",
    nav_section: "Section Lookup",
    nav_cases: "Case Library",
    nav_about: "About",
    nav_dark: "Dark Mode",
    nav_light: "Light Mode",
    nav_language: "Language",

    hero_title_line1: "Find the section.",
    hero_title_line2: "Not just the statute.",
    hero_sub: "Vidhisethu reads your situation the way a junior advocate would — then hands you the exact Bharatiya Nyaya Sanhita sections, the IPC mapping, and the precedent behind them.",
    tagline_marquee: "AI-powered Bharatiya Nyaya Sanhita Legal Assistant",
    search_placeholder: "My landlord won't return my security deposit.",
    btn_try_search: "Try Search",
    btn_go_ai: "Go to AI Assistant",
    btn_draft_fir: "Draft an FIR",
    badge_new_free: "New · Free",

    ticker_eyebrow: "Mapped against the Bharatiya Nyaya Sanhita, the Bharatiya Nagarik Suraksha Sanhita, and the repealed IPC",
    ticker_bns: "Bharatiya Nyaya Sanhita, 2023",
    ticker_ipc: "Indian Penal Code, 1860",
    ticker_bnss: "Bharatiya Nagarik Suraksha Sanhita",
    ticker_bsa: "Bharatiya Sakshya Adhiniyam",
    ticker_count: "358 BNS Sections Indexed",

    statement_line1: "Stop memorising section numbers.",
    statement_line2: "Start describing what happened.",

    platform_title: "Built on the statute, not the internet.",
    platform_text: "General-purpose chatbots blend old IPC sections with the new code and quietly get the punishment wrong. Vidhisethu's retrieval layer is grounded only in the BNS section text and its official IPC mapping, so the section number it gives you is the section number a court will recognise.",
    platform_link: "Try Section Lookup →",
    stat_eyebrow: "Section match accuracy",
    stat_verify: "Verified against the official IPC → BNS mapping table",
    stat_generic: "Generic chatbot",
    stat_keyword: "Keyword search",

    coverage_title: "Still searching IPC 302?",
    coverage_text: "Millions of FIRs, judgments, and textbooks still cite the old IPC. Type the IPC number you know, and Vidhisethu surfaces the exact BNS section that replaced it, side by side with what changed in punishment or scope.",
    coverage_link: "Try IPC → BNS Mapping →",
    extract_eyebrow: "[ IPC → BNS MAPPING ]",
    extract_ipc302: "IPC Section 302 — Murder",
    extract_ipc302_desc: "Punishable with death, or imprisonment for life, and fine.",
    extract_replaced: "→ Replaced by BNS Section 103.",
    extract_replaced2: "Same punishment retained, renumbered under Chapter VI.",

    cases_title: "Precedent, not just provisions.",
    cases_text: "A section number alone rarely settles a real dispute. Vidhisethu pairs every relevant section with landmark Supreme Court rulings that show how it has actually been applied — Lalita Kumari on FIR registration, Arnesh Kumar on arrest guidelines, and more.",
    cases_link: "Browse Case Library →",
    case_matched: "CASE MATCHED",
    case_lalita_title: "Lalita Kumari vs. Govt. of UP",
    case_lalita_desc: "FIR registration is mandatory for cognizable offences — cited for BNS Section 173.",

    fir_badge: "● New on Vidhisethu",
    fir_title: "From \"what happened\" to a filed FIR — in one pass.",
    fir_text: "Most people don't need a law lecture, they need a document. Describe the incident in your own words and Vidhisethu drafts a structured FIR-ready statement: complainant details, a plain-English narration, the applicable BNS sections with punishment, and the nearest police station to file it at — all editable before you print or share it.",
    fir_link_draft: "Draft Your FIR →",
    fir_link_police: "Find Nearest Police Station →",
    fir_doc_head: "FIR Draft Preview",
    fir_doc_auto: "AUTO-GENERATED",
    fir_row_nature: "Nature of complaint",
    fir_row_nature_v: "Theft of two-wheeler",
    fir_row_datetime: "Date & time of incident",
    fir_row_datetime_v: "14 June 2026, ~9:40 PM",
    fir_row_place: "Place of occurrence",
    fir_row_place_v: "Outside residence, Pollachi",
    fir_row_section: "Applicable section",
    fir_row_section_tag: "Theft",
    fir_row_station: "Suggested station",
    fir_row_station_v: "Nearest jurisdiction, auto-located",
    fir_row_status: "Status",
    fir_row_status_v: "Ready to review",

    cta_title1: "Your case doesn't wait",
    cta_title2: "for office hours.",
    cta_text: "Ask Vidhisethu in plain English, Tamil, or Hindi — it reads the situation and points to the law.",
    cta_btn_open: "Open the AI Assistant",
    cta_btn_fir: "Draft an FIR",

    foot_ai: "AI Assistant",
    foot_section: "Section Lookup",
    foot_cases: "Case Library",
    foot_about: "About",
    foot_note: "Vidhisethu is an educational legal research tool and does not constitute legal advice. Always consult a qualified advocate for your specific situation.",

    /* ---- app.html ---- */
    app_title: "Vidhisethu",
    app_tagline: "AI-powered Bharatiya Nyaya Sanhita Legal Assistant",

    crisis_title: "🚨 We noticed your message may involve a serious situation",
    crisis_sub: "If you or someone you know is in danger or distress, please reach out immediately:",
    crisis_police: "Police Emergency",
    crisis_women: "Women Helpline",
    crisis_child: "Child Helpline (CHILDLINE)",
    crisis_mental: "Mental Health (iCall)",
    crisis_vandrevala: "Vandrevala Foundation",
    crisis_domestic: "Domestic Violence",
    crisis_find_police: "📍 Find Nearest Police Station",

    ai_input_placeholder: "Ask a legal question...",
    btn_send: "Send",
    chip_attack: "Someone attacked me",
    chip_theft: "Theft by neighbour",
    chip_threat: "Online threat",
    chip_clear: "🗑 Clear Chat",
    ai_loading: "Analyzing BNS sections...",
    err_api: "Error connecting to API. Make sure server is running.",

    section_placeholder: "Enter BNS 303 or IPC 302 or IPC 498A...",
    btn_lookup: "Lookup Section",
    section_loading: "Fetching section...",
    section_not_found: "Section not found.",
    err_api_section: "Error connecting to API.",
    ipc_not_found: "❌ IPC Section {num} not found in our mapping database.",
    keywords_label: "Keywords:",
    punishment_label: "⚖️ Punishment:",
    bns_details_missing: "BNS section details not found in database.",
    no_punishment: "No direct punishment specified",
    change_notes_label: "Change Notes:",
    details_unavailable: "Details not available",

    about_h1: "About Vidhisethu",
    about_p1: "Vidhisethu is an AI-powered legal assistant designed to help users understand the Bharatiya Nyaya Sanhita (BNS) - India's criminal law code.",
    about_h2: "What We Do",
    about_p2: "We provide a comprehensive platform for legal research with three main features:",
    about_li1_title: "AI Assistant:",
    about_li1: "Describe your legal situation and get relevant BNS sections with AI-powered explanations",
    about_li2_title: "Section Lookup:",
    about_li2: "Search BNS sections or enter old IPC sections to find their BNS equivalent",
    about_li3_title: "Case Library:",
    about_li3: "Explore landmark legal cases and judicial precedents",
    about_h3: "Our Mission",
    about_p3: "To democratize legal knowledge and make Indian criminal law accessible to everyone.",
    about_h4: "Technology",
    about_p4: "Vidhisethu uses RAG, ChromaDB vector database, Sentence Transformers, a local LLM, and Google Maps for semantic search, AI explanations, and location services.",
    about_h5: "Disclaimer",
    about_p5: "Vidhisethu is for educational purposes only. Always consult a qualified legal professional before making legal decisions.",

    case_verdict_label: "Verdict:"
  },

  hi: {
    nav_platform: "प्लेटफ़ॉर्म",
    nav_coverage: "कवरेज",
    nav_fir: "एफआईआर ड्राफ्ट",
    nav_open_app: "ऐप खोलें",
    nav_try_app: "वेब ऐप आज़माएं",
    nav_home: "← होम",
    nav_ai: "एआई सहायक",
    nav_section: "धारा खोजें",
    nav_cases: "केस लाइब्रेरी",
    nav_about: "हमारे बारे में",
    nav_dark: "डार्क मोड",
    nav_light: "लाइट मोड",
    nav_language: "भाषा",

    hero_title_line1: "धारा खोजें।",
    hero_title_line2: "सिर्फ़ कानून नहीं।",
    hero_sub: "विधिसेतु आपकी स्थिति को एक जूनियर वकील की तरह समझता है — फिर आपको सटीक भारतीय न्याय संहिता की धाराएं, आईपीसी मैपिंग, और उनके पीछे का न्यायदृष्टांत प्रस्तुत करता है।",
    tagline_marquee: "एआई-संचालित भारतीय न्याय संहिता कानूनी सहायक",
    search_placeholder: "मेरे मकान मालिक ने मेरी सिक्योरिटी डिपॉज़िट वापस नहीं की।",
    btn_try_search: "खोज आज़माएं",
    btn_go_ai: "एआई सहायक पर जाएं",
    btn_draft_fir: "एफआईआर ड्राफ्ट करें",
    badge_new_free: "नया · मुफ़्त",

    ticker_eyebrow: "भारतीय न्याय संहिता, भारतीय नागरिक सुरक्षा संहिता, और निरसित आईपीसी के अनुरूप मैप किया गया",
    ticker_bns: "भारतीय न्याय संहिता, 2023",
    ticker_ipc: "भारतीय दंड संहिता, 1860",
    ticker_bnss: "भारतीय नागरिक सुरक्षा संहिता",
    ticker_bsa: "भारतीय साक्ष्य अधिनियम",
    ticker_count: "358 बीएनएस धाराएं इंडेक्स की गईं",

    statement_line1: "धारा संख्याएं याद रखना बंद करें।",
    statement_line2: "जो हुआ उसका वर्णन करना शुरू करें।",

    platform_title: "कानून पर आधारित, इंटरनेट पर नहीं।",
    platform_text: "सामान्य चैटबॉट पुरानी आईपीसी धाराओं को नए कोड के साथ मिला देते हैं और चुपचाप सज़ा गलत बता देते हैं। विधिसेतु की रिट्रीवल प्रणाली केवल बीएनएस धारा के पाठ और उसकी आधिकारिक आईपीसी मैपिंग पर आधारित है, इसलिए यह जो धारा संख्या आपको देती है, वही न्यायालय में मान्य होगी।",
    platform_link: "धारा खोज आज़माएं →",
    stat_eyebrow: "धारा मिलान सटीकता",
    stat_verify: "आधिकारिक आईपीसी → बीएनएस मैपिंग तालिका के अनुसार सत्यापित",
    stat_generic: "सामान्य चैटबॉट",
    stat_keyword: "कीवर्ड खोज",

    coverage_title: "अभी भी आईपीसी 302 खोज रहे हैं?",
    coverage_text: "लाखों एफआईआर, फैसले और किताबें अभी भी पुरानी आईपीसी का हवाला देती हैं। जो आईपीसी नंबर आप जानते हैं वह टाइप करें, और विधिसेतु उसकी जगह लेने वाली सटीक बीएनएस धारा दिखाता है, साथ ही सज़ा या दायरे में हुए बदलाव भी।",
    coverage_link: "आईपीसी → बीएनएस मैपिंग आज़माएं →",
    extract_eyebrow: "[ आईपीसी → बीएनएस मैपिंग ]",
    extract_ipc302: "आईपीसी धारा 302 — हत्या",
    extract_ipc302_desc: "मृत्युदंड या आजीवन कारावास, और जुर्माने से दंडनीय।",
    extract_replaced: "→ बीएनएस धारा 103 द्वारा प्रतिस्थापित।",
    extract_replaced2: "वही सज़ा बरकरार, अध्याय VI के अंतर्गत पुनः क्रमांकित।",

    cases_title: "न्यायदृष्टांत, सिर्फ़ प्रावधान नहीं।",
    cases_text: "केवल एक धारा संख्या शायद ही किसी वास्तविक विवाद को सुलझाती है। विधिसेतु हर संबंधित धारा को सर्वोच्च न्यायालय के ऐतिहासिक फैसलों के साथ जोड़ता है, जो दिखाते हैं कि इसे वास्तव में कैसे लागू किया गया — एफआईआर पंजीकरण पर ललिता कुमारी, गिरफ्तारी मार्गदर्शन पर अरनेश कुमार, और अधिक।",
    cases_link: "केस लाइब्रेरी देखें →",
    case_matched: "केस मिला",
    case_lalita_title: "ललिता कुमारी बनाम उत्तर प्रदेश सरकार",
    case_lalita_desc: "संज्ञेय अपराधों के लिए एफआईआर पंजीकरण अनिवार्य है — बीएनएस धारा 173 के लिए उद्धृत।",

    fir_badge: "● विधिसेतु पर नया",
    fir_title: "\"क्या हुआ\" से दाखिल एफआईआर तक — एक ही चरण में।",
    fir_text: "अधिकतर लोगों को कानून का व्याख्यान नहीं, एक दस्तावेज़ चाहिए। घटना का वर्णन अपने शब्दों में करें और विधिसेतु एक संरचित एफआईआर-तैयार बयान तैयार करता है: शिकायतकर्ता का विवरण, सरल भाषा में वृत्तांत, सज़ा के साथ लागू बीएनएस धाराएं, और दाखिल करने के लिए नज़दीकी पुलिस स्टेशन — प्रिंट या साझा करने से पहले सब कुछ संपादन योग्य।",
    fir_link_draft: "अपना एफआईआर ड्राफ्ट करें →",
    fir_link_police: "नज़दीकी पुलिस स्टेशन खोजें →",
    fir_doc_head: "एफआईआर ड्राफ्ट पूर्वावलोकन",
    fir_doc_auto: "स्वतः-जनित",
    fir_row_nature: "शिकायत की प्रकृति",
    fir_row_nature_v: "दोपहिया वाहन की चोरी",
    fir_row_datetime: "घटना की तारीख व समय",
    fir_row_datetime_v: "14 जून 2026, रात ~9:40 बजे",
    fir_row_place: "घटनास्थल",
    fir_row_place_v: "निवास के बाहर, पोलाची",
    fir_row_section: "लागू धारा",
    fir_row_section_tag: "चोरी",
    fir_row_station: "सुझाया गया थाना",
    fir_row_station_v: "नज़दीकी क्षेत्राधिकार, स्वतः-स्थित",
    fir_row_status: "स्थिति",
    fir_row_status_v: "जांचने के लिए तैयार",

    cta_title1: "आपका मामला इंतज़ार नहीं करता",
    cta_title2: "ऑफिस समय का।",
    cta_text: "विधिसेतु से सरल अंग्रेज़ी, तमिल, या हिंदी में पूछें — यह स्थिति को समझता है और कानून की ओर इशारा करता है।",
    cta_btn_open: "एआई सहायक खोलें",
    cta_btn_fir: "एफआईआर ड्राफ्ट करें",

    foot_ai: "एआई सहायक",
    foot_section: "धारा खोजें",
    foot_cases: "केस लाइब्रेरी",
    foot_about: "हमारे बारे में",
    foot_note: "विधिसेतु एक शैक्षिक कानूनी शोध उपकरण है और यह कानूनी सलाह नहीं है। अपनी विशेष स्थिति के लिए हमेशा एक योग्य अधिवक्ता से सलाह लें।",

    app_title: "विधिसेतु",
    app_tagline: "एआई-संचालित भारतीय न्याय संहिता कानूनी सहायक",

    crisis_title: "🚨 हमने देखा कि आपका संदेश एक गंभीर स्थिति से जुड़ा हो सकता है",
    crisis_sub: "यदि आप या आपका कोई परिचित खतरे या संकट में है, तो कृपया तुरंत संपर्क करें:",
    crisis_police: "पुलिस आपातकाल",
    crisis_women: "महिला हेल्पलाइन",
    crisis_child: "चाइल्ड हेल्पलाइन (चाइल्डलाइन)",
    crisis_mental: "मानसिक स्वास्थ्य (आईकॉल)",
    crisis_vandrevala: "वंद्रेवाला फाउंडेशन",
    crisis_domestic: "घरेलू हिंसा",
    crisis_find_police: "📍 नज़दीकी पुलिस स्टेशन खोजें",

    ai_input_placeholder: "एक कानूनी सवाल पूछें...",
    btn_send: "भेजें",
    chip_attack: "किसी ने मुझ पर हमला किया",
    chip_theft: "पड़ोसी द्वारा चोरी",
    chip_threat: "ऑनलाइन धमकी",
    chip_clear: "🗑 चैट साफ़ करें",
    ai_loading: "बीएनएस धाराओं का विश्लेषण हो रहा है...",
    err_api: "एपीआई से कनेक्ट करने में त्रुटि। सुनिश्चित करें कि सर्वर चल रहा है।",

    section_placeholder: "बीएनएस 303 या आईपीसी 302 या आईपीसी 498A दर्ज करें...",
    btn_lookup: "धारा खोजें",
    section_loading: "धारा प्राप्त की जा रही है...",
    section_not_found: "धारा नहीं मिली।",
    err_api_section: "एपीआई से कनेक्ट करने में त्रुटि।",
    ipc_not_found: "❌ आईपीसी धारा {num} हमारे मैपिंग डेटाबेस में नहीं मिली।",
    keywords_label: "मुख्य शब्द:",
    punishment_label: "⚖️ सज़ा:",
    bns_details_missing: "बीएनएस धारा का विवरण डेटाबेस में नहीं मिला।",
    no_punishment: "कोई सीधी सज़ा निर्दिष्ट नहीं है",
    change_notes_label: "परिवर्तन टिप्पणी:",
    details_unavailable: "विवरण उपलब्ध नहीं है",

    about_h1: "विधिसेतु के बारे में",
    about_p1: "विधिसेतु एक एआई-संचालित कानूनी सहायक है जो उपयोगकर्ताओं को भारतीय न्याय संहिता (बीएनएस) - भारत की आपराधिक कानून संहिता - को समझने में मदद करता है।",
    about_h2: "हम क्या करते हैं",
    about_p2: "हम तीन मुख्य सुविधाओं के साथ कानूनी शोध के लिए एक व्यापक मंच प्रदान करते हैं:",
    about_li1_title: "एआई सहायक:",
    about_li1: "अपनी कानूनी स्थिति का वर्णन करें और एआई-संचालित स्पष्टीकरण के साथ संबंधित बीएनएस धाराएं प्राप्त करें",
    about_li2_title: "धारा खोज:",
    about_li2: "बीएनएस धाराएं खोजें या उनके बीएनएस समकक्ष खोजने के लिए पुरानी आईपीसी धाराएं दर्ज करें",
    about_li3_title: "केस लाइब्रेरी:",
    about_li3: "ऐतिहासिक कानूनी मामलों और न्यायिक दृष्टांतों का अन्वेषण करें",
    about_h3: "हमारा मिशन",
    about_p3: "कानूनी ज्ञान को लोकतांत्रिक बनाना और भारतीय आपराधिक कानून को सभी के लिए सुलभ बनाना।",
    about_h4: "तकनीक",
    about_p4: "विधिसेतु सिमेंटिक खोज, एआई स्पष्टीकरण और लोकेशन सेवाओं के लिए RAG, ChromaDB वेक्टर डेटाबेस, सेंटेंस ट्रांसफॉर्मर्स, एक लोकल एलएलएम, और गूगल मैप्स का उपयोग करता है।",
    about_h5: "अस्वीकरण",
    about_p5: "विधिसेतु केवल शैक्षिक उद्देश्यों के लिए है। कोई भी कानूनी निर्णय लेने से पहले हमेशा एक योग्य कानूनी पेशेवर से सलाह लें।",

    case_verdict_label: "फैसला:"
  },

  ta: {
    nav_platform: "தளம்",
    nav_coverage: "உள்ளடக்கம்",
    nav_fir: "எஃப்ஐஆர் வரைவு",
    nav_open_app: "ஆப்ஸைத் திற",
    nav_try_app: "வெப் ஆப்ஸை முயற்சிக்கவும்",
    nav_home: "← முகப்பு",
    nav_ai: "AI உதவியாளர்",
    nav_section: "பிரிவு தேடல்",
    nav_cases: "வழக்கு நூலகம்",
    nav_about: "எங்களைப் பற்றி",
    nav_dark: "இருண்ட பயன்முறை",
    nav_light: "வெளிர் பயன்முறை",
    nav_language: "மொழி",

    hero_title_line1: "பிரிவைக் கண்டறியுங்கள்.",
    hero_title_line2: "சட்டத்தை மட்டும் அல்ல.",
    hero_sub: "விதிசேது உங்கள் சூழ்நிலையை ஒரு ஜூனியர் வழக்கறிஞரைப் போல் புரிந்துகொண்டு, பின்னர் சரியான பாரதிய நியாய சன்ஹிதா பிரிவுகள், ஐபிசி மேப்பிங் மற்றும் அதன் பின்னணி வழக்குகளை வழங்குகிறது.",
    tagline_marquee: "AI-இயக்கப்படும் பாரதிய நியாய சன்ஹிதா சட்ட உதவியாளர்",
    search_placeholder: "என் வீட்டு உரிமையாளர் என் பாதுகாப்பு வைப்புத்தொகையைத் திருப்பித் தரவில்லை.",
    btn_try_search: "தேடலை முயற்சிக்கவும்",
    btn_go_ai: "AI உதவியாளருக்குச் செல்",
    btn_draft_fir: "எஃப்ஐஆர் வரைவு செய்யவும்",
    badge_new_free: "புதியது · இலவசம்",

    ticker_eyebrow: "பாரதிய நியாய சன்ஹிதா, பாரதிய நாகரிக் சுரக்ஷா சன்ஹிதா மற்றும் ரத்து செய்யப்பட்ட ஐபிசிக்கு எதிராக மேப் செய்யப்பட்டது",
    ticker_bns: "பாரதிய நியாய சன்ஹிதா, 2023",
    ticker_ipc: "இந்திய தண்டனைச் சட்டம், 1860",
    ticker_bnss: "பாரதிய நாகரிக் சுரக்ஷா சன்ஹிதா",
    ticker_bsa: "பாரதிய சாக்ஷ்ய அதிநியம்",
    ticker_count: "358 பிஎன்எஸ் பிரிவுகள் குறியிடப்பட்டுள்ளன",

    statement_line1: "பிரிவு எண்களை மனனம் செய்வதை நிறுத்துங்கள்.",
    statement_line2: "என்ன நடந்தது என்பதை விவரிக்கத் தொடங்குங்கள்.",

    platform_title: "சட்டத்தின் அடிப்படையில், இணையத்தில் அல்ல.",
    platform_text: "பொதுவான சாட்போட்கள் பழைய ஐபிசி பிரிவுகளை புதிய சட்டத்துடன் கலந்து, அறியாமலே தண்டனையை தவறாகக் கூறுகின்றன. விதிசேதுவின் தேடல் அமைப்பு பிஎன்எஸ் பிரிவு உரை மற்றும் அதன் அதிகாரப்பூர்வ ஐபிசி மேப்பிங்கை மட்டுமே அடிப்படையாகக் கொண்டுள்ளது, எனவே அது தரும் பிரிவு எண் நீதிமன்றம் ஏற்றுக்கொள்ளும் எண்ணாக இருக்கும்.",
    platform_link: "பிரிவு தேடலை முயற்சிக்கவும் →",
    stat_eyebrow: "பிரிவு பொருத்தம் துல்லியம்",
    stat_verify: "அதிகாரப்பூர்வ ஐபிசி → பிஎன்எஸ் மேப்பிங் அட்டவணையின் அடிப்படையில் சரிபார்க்கப்பட்டது",
    stat_generic: "பொதுவான சாட்போட்",
    stat_keyword: "முக்கிய சொல் தேடல்",

    coverage_title: "இன்னும் ஐபிசி 302-ஐ தேடுகிறீர்களா?",
    coverage_text: "மில்லியன் கணக்கான எஃப்ஐஆர்கள், தீர்ப்புகள் மற்றும் பாடநூல்கள் இன்னும் பழைய ஐபிசியைக் குறிப்பிடுகின்றன. நீங்கள் அறிந்த ஐபிசி எண்ணை உள்ளிடுங்கள், விதிசேது அதை மாற்றிய சரியான பிஎன்எஸ் பிரிவையும், தண்டனை அல்லது வீச்சில் என்ன மாற்றம் ஏற்பட்டது என்பதையும் காட்டுகிறது.",
    coverage_link: "ஐபிசி → பிஎன்எஸ் மேப்பிங்கை முயற்சிக்கவும் →",
    extract_eyebrow: "[ ஐபிசி → பிஎன்எஸ் மேப்பிங் ]",
    extract_ipc302: "ஐபிசி பிரிவு 302 — கொலை",
    extract_ipc302_desc: "மரண தண்டனை, அல்லது வாழ்நாள் சிறைத்தண்டனை, மற்றும் அபராதம்.",
    extract_replaced: "→ பிஎன்எஸ் பிரிவு 103 ஆல் மாற்றப்பட்டது.",
    extract_replaced2: "அதே தண்டனை தொடர்கிறது, அத்தியாயம் VI இன் கீழ் மீண்டும் எண்ணிடப்பட்டது.",

    cases_title: "முன்னுதாரணம், வெறும் விதிகள் அல்ல.",
    cases_text: "ஒரு பிரிவு எண் மட்டும் ஒரு உண்மையான சர்ச்சையை அரிதாகவே தீர்க்கும். விதிசேது ஒவ்வொரு தொடர்புடைய பிரிவையும் உச்ச நீதிமன்றத்தின் முக்கிய தீர்ப்புகளுடன் இணைக்கிறது, அவை அது நடைமுறையில் எவ்வாறு பயன்படுத்தப்பட்டது என்பதைக் காட்டுகின்றன — எஃப்ஐஆர் பதிவுக்கான லலிதா குமாரி, கைது வழிகாட்டுதல்களுக்கான அர்னேஷ் குமார், மற்றும் பல.",
    cases_link: "வழக்கு நூலகத்தைப் பார்வையிடுங்கள் →",
    case_matched: "வழக்கு பொருந்தியது",
    case_lalita_title: "லலிதா குமாரி எதிராக உ.பி. அரசு",
    case_lalita_desc: "அறியக்கூடிய குற்றங்களுக்கு எஃப்ஐஆர் பதிவு கட்டாயம் — பிஎன்எஸ் பிரிவு 173க்கு மேற்கோள் காட்டப்பட்டது.",

    fir_badge: "● விதிசேதுவில் புதியது",
    fir_title: "\"என்ன நடந்தது\" என்பதிலிருந்து தாக்கல் செய்யப்பட்ட எஃப்ஐஆர் வரை — ஒரே கட்டத்தில்.",
    fir_text: "பெரும்பாலான மக்களுக்கு சட்ட விரிவுரை தேவையில்லை, அவர்களுக்கு ஒரு ஆவணம் தேவை. சம்பவத்தை உங்கள் சொற்களில் விவரிக்கவும், விதிசேது ஒரு கட்டமைக்கப்பட்ட எஃப்ஐஆர்-தயார் அறிக்கையை வரைகிறது: புகார்தாரர் விவரங்கள், எளிய மொழி விளக்கம், தண்டனையுடன் பொருந்தும் பிஎன்எஸ் பிரிவுகள், மற்றும் தாக்கல் செய்ய அருகிலுள்ள காவல் நிலையம் — அச்சிடுவதற்கு அல்லது பகிர்வதற்கு முன் அனைத்தும் திருத்தக்கூடியவை.",
    fir_link_draft: "உங்கள் எஃப்ஐஆரை வரைவு செய்யுங்கள் →",
    fir_link_police: "அருகிலுள்ள காவல் நிலையத்தைக் கண்டறியவும் →",
    fir_doc_head: "எஃப்ஐஆர் வரைவு முன்னோட்டம்",
    fir_doc_auto: "தானாக உருவாக்கப்பட்டது",
    fir_row_nature: "புகாரின் தன்மை",
    fir_row_nature_v: "இருசக்கர வாகனத் திருட்டு",
    fir_row_datetime: "சம்பவத்தின் தேதி & நேரம்",
    fir_row_datetime_v: "14 ஜூன் 2026, இரவு ~9:40",
    fir_row_place: "நிகழ்விடம்",
    fir_row_place_v: "வசிப்பிடத்திற்கு வெளியே, பொள்ளாச்சி",
    fir_row_section: "பொருந்தும் பிரிவு",
    fir_row_section_tag: "திருட்டு",
    fir_row_station: "பரிந்துரைக்கப்பட்ட நிலையம்",
    fir_row_station_v: "அருகிலுள்ள அதிகார வரம்பு, தானாக கண்டறியப்பட்டது",
    fir_row_status: "நிலை",
    fir_row_status_v: "மதிப்பாய்வுக்குத் தயார்",

    cta_title1: "உங்கள் வழக்கு காத்திருக்காது",
    cta_title2: "அலுவலக நேரத்திற்காக.",
    cta_text: "விதிசேதுவை எளிய ஆங்கிலம், தமிழ் அல்லது இந்தியில் கேளுங்கள் — அது சூழ்நிலையைப் புரிந்துகொண்டு சட்டத்தைச் சுட்டிக்காட்டும்.",
    cta_btn_open: "AI உதவியாளரைத் திற",
    cta_btn_fir: "எஃப்ஐஆர் வரைவு செய்யவும்",

    foot_ai: "AI உதவியாளர்",
    foot_section: "பிரிவு தேடல்",
    foot_cases: "வழக்கு நூலகம்",
    foot_about: "எங்களைப் பற்றி",
    foot_note: "விதிசேது ஒரு கல்வி சார்ந்த சட்ட ஆராய்ச்சி கருவியாகும், இது சட்ட ஆலோசனையாக கருதப்படக் கூடாது. உங்கள் குறிப்பிட்ட சூழ்நிலைக்கு எப்போதும் தகுதியான வழக்கறிஞரை அணுகவும்.",

    app_title: "விதிசேது",
    app_tagline: "AI-இயக்கப்படும் பாரதிய நியாய சன்ஹிதா சட்ட உதவியாளர்",

    crisis_title: "🚨 உங்கள் செய்தி ஒரு கடுமையான சூழ்நிலையை உள்ளடக்கியிருக்கலாம் என்று கண்டறிந்தோம்",
    crisis_sub: "நீங்கள் அல்லது உங்களுக்கு அறிமுகமான ஒருவர் ஆபத்தில் அல்லது துயரத்தில் இருந்தால், உடனடியாக தொடர்பு கொள்ளவும்:",
    crisis_police: "காவல்துறை அவசரநிலை",
    crisis_women: "பெண்கள் உதவி எண்",
    crisis_child: "குழந்தைகள் உதவி எண் (சைல்ட்லைன்)",
    crisis_mental: "மனநல உதவி (iCall)",
    crisis_vandrevala: "வாண்ட்ரேவாலா அறக்கட்டளை",
    crisis_domestic: "குடும்ப வன்முறை",
    crisis_find_police: "📍 அருகிலுள்ள காவல் நிலையத்தைக் கண்டறியவும்",

    ai_input_placeholder: "ஒரு சட்ட கேள்வியைக் கேளுங்கள்...",
    btn_send: "அனுப்பு",
    chip_attack: "ஒருவர் என்னைத் தாக்கினார்",
    chip_theft: "அண்டை வீட்டாரால் திருட்டு",
    chip_threat: "ஆன்லைன் அச்சுறுத்தல்",
    chip_clear: "🗑 அரட்டையை அழி",
    ai_loading: "பிஎன்எஸ் பிரிவுகளை பகுப்பாய்வு செய்கிறது...",
    err_api: "API உடன் இணைப்பதில் பிழை. சேவையகம் இயங்குகிறதா எனச் சரிபார்க்கவும்.",

    section_placeholder: "பிஎன்எஸ் 303 அல்லது ஐபிசி 302 அல்லது ஐபிசி 498A ஐ உள்ளிடவும்...",
    btn_lookup: "பிரிவைத் தேடு",
    section_loading: "பிரிவைப் பெறுகிறது...",
    section_not_found: "பிரிவு கிடைக்கவில்லை.",
    err_api_section: "API உடன் இணைப்பதில் பிழை.",
    ipc_not_found: "❌ ஐபிசி பிரிவு {num} எங்கள் மேப்பிங் தரவுத்தளத்தில் கிடைக்கவில்லை.",
    keywords_label: "முக்கிய சொற்கள்:",
    punishment_label: "⚖️ தண்டனை:",
    bns_details_missing: "பிஎன்எஸ் பிரிவு விவரங்கள் தரவுத்தளத்தில் கிடைக்கவில்லை.",
    no_punishment: "நேரடி தண்டனை எதுவும் குறிப்பிடப்படவில்லை",
    change_notes_label: "மாற்றக் குறிப்புகள்:",
    details_unavailable: "விவரங்கள் கிடைக்கவில்லை",

    about_h1: "விதிசேது பற்றி",
    about_p1: "விதிசேது என்பது பாரதிய நியாய சன்ஹிதா (பிஎன்எஸ்) - இந்தியாவின் குற்றவியல் சட்டக் குறியீடு - பயனர்களுக்குப் புரிந்துகொள்ள உதவும் AI-இயக்கப்படும் சட்ட உதவியாளர்.",
    about_h2: "நாங்கள் என்ன செய்கிறோம்",
    about_p2: "மூன்று முக்கிய அம்சங்களுடன் சட்ட ஆராய்ச்சிக்கான ஒரு விரிவான தளத்தை நாங்கள் வழங்குகிறோம்:",
    about_li1_title: "AI உதவியாளர்:",
    about_li1: "உங்கள் சட்டச் சூழ்நிலையை விவரித்து, AI-இயக்கப்படும் விளக்கங்களுடன் தொடர்புடைய பிஎன்எஸ் பிரிவுகளைப் பெறுங்கள்",
    about_li2_title: "பிரிவு தேடல்:",
    about_li2: "பிஎன்எஸ் பிரிவுகளைத் தேடுங்கள் அல்லது அவற்றின் பிஎன்எஸ் சமானத்தைக் கண்டறிய பழைய ஐபிசி பிரிவுகளை உள்ளிடுங்கள்",
    about_li3_title: "வழக்கு நூலகம்:",
    about_li3: "முக்கிய சட்ட வழக்குகள் மற்றும் நீதித்துறை முன்னுதாரணங்களை ஆராயுங்கள்",
    about_h3: "எங்கள் நோக்கம்",
    about_p3: "சட்ட அறிவை அனைவருக்கும் சமமாக்கி, இந்திய குற்றவியல் சட்டத்தை அனைவருக்கும் அணுகக்கூடியதாக மாற்றுதல்.",
    about_h4: "தொழில்நுட்பம்",
    about_p4: "சொற்பொருள் தேடல், AI விளக்கங்கள் மற்றும் இருப்பிட சேவைகளுக்கு விதிசேது RAG, ChromaDB திசையன் தரவுத்தளம், Sentence Transformers, ஒரு லோக்கல் LLM, மற்றும் Google Maps ஆகியவற்றைப் பயன்படுத்துகிறது.",
    about_h5: "மறுப்பு",
    about_p5: "விதிசேது கல்வி நோக்கங்களுக்காக மட்டுமே. எந்தவொரு சட்ட முடிவையும் எடுக்கும் முன் எப்போதும் தகுதியான சட்ட நிபுணரை அணுகவும்.",

    case_verdict_label: "தீர்ப்பு:"
  },

  te: {
    nav_platform: "ప్లాట్‌ఫారమ్",
    nav_coverage: "కవరేజ్",
    nav_fir: "ఎఫ్ఐఆర్ డ్రాఫ్ట్",
    nav_open_app: "యాప్ తెరవండి",
    nav_try_app: "వెబ్ యాప్ ప్రయత్నించండి",
    nav_home: "← హోమ్",
    nav_ai: "AI సహాయకుడు",
    nav_section: "సెక్షన్ శోధన",
    nav_cases: "కేస్ లైబ్రరీ",
    nav_about: "మా గురించి",
    nav_dark: "డార్క్ మోడ్",
    nav_light: "లైట్ మోడ్",
    nav_language: "భాష",

    hero_title_line1: "సెక్షన్‌ను కనుగొనండి.",
    hero_title_line2: "చట్టం మాత్రమే కాదు.",
    hero_sub: "విధిసేతు మీ పరిస్థితిని ఒక జూనియర్ న్యాయవాది మాదిరిగా అర్థం చేసుకుని, ఖచ్చితమైన భారతీయ న్యాయ సంహిత సెక్షన్లు, ఐపిసి మ్యాపింగ్, మరియు వాటి వెనుక ఉన్న ఉదాహరణలను అందిస్తుంది.",
    tagline_marquee: "AI-ఆధారిత భారతీయ న్యాయ సంహిత లీగల్ అసిస్టెంట్",
    search_placeholder: "నా ఇంటి యజమాని నా సెక్యూరిటీ డిపాజిట్ తిరిగి ఇవ్వలేదు.",
    btn_try_search: "శోధనను ప్రయత్నించండి",
    btn_go_ai: "AI సహాయకుడికి వెళ్ళండి",
    btn_draft_fir: "ఎఫ్ఐఆర్ డ్రాఫ్ట్ చేయండి",
    badge_new_free: "కొత్తది · ఉచితం",

    ticker_eyebrow: "భారతీయ న్యాయ సంహిత, భారతీయ నాగరిక్ సురక్షా సంహిత, మరియు రద్దు చేయబడిన ఐపిసికి వ్యతిరేకంగా మ్యాప్ చేయబడింది",
    ticker_bns: "భారతీయ న్యాయ సంహిత, 2023",
    ticker_ipc: "భారతీయ శిక్షా స్మృతి, 1860",
    ticker_bnss: "భారతీయ నాగరిక్ సురక్షా సంహిత",
    ticker_bsa: "భారతీయ సాక్ష్య అధినియమ్",
    ticker_count: "358 బీఎన్ఎస్ సెక్షన్లు ఇండెక్స్ చేయబడ్డాయి",

    statement_line1: "సెక్షన్ నంబర్లను గుర్తుపెట్టుకోవడం మానేయండి.",
    statement_line2: "ఏమి జరిగిందో వివరించడం మొదలుపెట్టండి.",

    platform_title: "చట్టంపై ఆధారపడింది, ఇంటర్నెట్‌పై కాదు.",
    platform_text: "సాధారణ చాట్‌బాట్‌లు పాత ఐపిసి సెక్షన్లను కొత్త కోడ్‌తో కలిపి, నిశ్శబ్దంగా శిక్షను తప్పుగా చెబుతాయి. విధిసేతు యొక్క రిట్రీవల్ లేయర్ బీఎన్ఎస్ సెక్షన్ టెక్స్ట్ మరియు దాని అధికారిక ఐపిసి మ్యాపింగ్‌పై మాత్రమే ఆధారపడింది, కాబట్టి అది ఇచ్చే సెక్షన్ నంబర్ న్యాయస్థానం గుర్తించే నంబర్‌గా ఉంటుంది.",
    platform_link: "సెక్షన్ శోధనను ప్రయత్నించండి →",
    stat_eyebrow: "సెక్షన్ మ్యాచ్ ఖచ్చితత్వం",
    stat_verify: "అధికారిక ఐపిసి → బీఎన్ఎస్ మ్యాపింగ్ టేబుల్ ఆధారంగా ధృవీకరించబడింది",
    stat_generic: "సాధారణ చాట్‌బాట్",
    stat_keyword: "కీవర్డ్ శోధన",

    coverage_title: "ఇంకా ఐపిసి 302 కోసం వెతుకుతున్నారా?",
    coverage_text: "మిలియన్ల FIRలు, తీర్పులు మరియు పాఠ్యపుస్తకాలు ఇప్పటికీ పాత ఐపిసిని ప్రస్తావిస్తాయి. మీకు తెలిసిన ఐపిసి నంబర్‌ను టైప్ చేయండి, విధిసేతు దాన్ని భర్తీ చేసిన ఖచ్చితమైన బీఎన్ఎస్ సెక్షన్‌ను, శిక్ష లేదా పరిధిలో మారిన అంశాలతో పాటు చూపిస్తుంది.",
    coverage_link: "ఐపిసి → బీఎన్ఎస్ మ్యాపింగ్ ప్రయత్నించండి →",
    extract_eyebrow: "[ ఐపిసి → బీఎన్ఎస్ మ్యాపింగ్ ]",
    extract_ipc302: "ఐపిసి సెక్షన్ 302 — హత్య",
    extract_ipc302_desc: "మరణశిక్ష, లేదా జీవిత ఖైదు, మరియు జరిమానాతో శిక్షించబడుతుంది.",
    extract_replaced: "→ బీఎన్ఎస్ సెక్షన్ 103 ద్వారా భర్తీ చేయబడింది.",
    extract_replaced2: "అదే శిక్ష కొనసాగుతుంది, చాప్టర్ VI కింద తిరిగి నంబరింగ్ చేయబడింది.",

    cases_title: "ఉదాహరణ, కేవలం నిబంధనలు కాదు.",
    cases_text: "ఒక సెక్షన్ నంబర్ మాత్రమే ఒక వాస్తవ వివాదాన్ని పరిష్కరించడం చాలా అరుదు. విధిసేతు ప్రతి సంబంధిత సెక్షన్‌ను సుప్రీం కోర్టు యొక్క ముఖ్యమైన తీర్పులతో జతచేస్తుంది, అవి దాన్ని ఆచరణలో ఎలా అన్వయించారో చూపిస్తాయి — FIR నమోదు కోసం లలితా కుమారి, అరెస్టు మార్గదర్శకాల కోసం అర్నేష్ కుమార్, మరియు మరిన్ని.",
    cases_link: "కేస్ లైబ్రరీని బ్రౌజ్ చేయండి →",
    case_matched: "కేస్ సరిపోలింది",
    case_lalita_title: "లలితా కుమారి వర్సెస్ యూపీ ప్రభుత్వం",
    case_lalita_desc: "గుర్తించదగిన నేరాలకు FIR నమోదు తప్పనిసరి — బీఎన్ఎస్ సెక్షన్ 173 కోసం ప్రస్తావించబడింది.",

    fir_badge: "● విధిసేతులో కొత్తది",
    fir_title: "\"ఏమి జరిగింది\" నుండి దాఖలు చేసిన FIR వరకు — ఒక్క దశలో.",
    fir_text: "చాలా మందికి చట్టం పాఠం అవసరం లేదు, వారికి ఒక పత్రం అవసరం. సంఘటనను మీ స్వంత పదాలలో వివరించండి, విధిసేతు ఒక నిర్మాణాత్మక FIR-సిద్ధంగా ఉన్న ప్రకటనను రూపొందిస్తుంది: ఫిర్యాదుదారు వివరాలు, సాదాసీదా భాషలో వివరణ, శిక్షతో సంబంధిత బీఎన్ఎస్ సెక్షన్లు, మరియు దాఖలు చేయడానికి సమీప పోలీస్ స్టేషన్ — ప్రింట్ చేయడానికి లేదా షేర్ చేయడానికి ముందు అన్నీ సవరించదగినవి.",
    fir_link_draft: "మీ FIRను డ్రాఫ్ట్ చేయండి →",
    fir_link_police: "సమీప పోలీస్ స్టేషన్‌ను కనుగొనండి →",
    fir_doc_head: "FIR డ్రాఫ్ట్ ప్రివ్యూ",
    fir_doc_auto: "ఆటో-జనరేటెడ్",
    fir_row_nature: "ఫిర్యాదు స్వభావం",
    fir_row_nature_v: "ద్విచక్ర వాహన చౌర్యం",
    fir_row_datetime: "సంఘటన తేదీ & సమయం",
    fir_row_datetime_v: "14 జూన్ 2026, రాత్రి ~9:40",
    fir_row_place: "సంఘటన స్థలం",
    fir_row_place_v: "నివాసం బయట, పొల్లాచి",
    fir_row_section: "వర్తించే సెక్షన్",
    fir_row_section_tag: "చౌర్యం",
    fir_row_station: "సూచించిన స్టేషన్",
    fir_row_station_v: "సమీప పరిధి, ఆటో-గుర్తించబడింది",
    fir_row_status: "స్థితి",
    fir_row_status_v: "సమీక్షకు సిద్ధం",

    cta_title1: "మీ కేసు వేచి ఉండదు",
    cta_title2: "ఆఫీసు గంటల కోసం.",
    cta_text: "విధిసేతును సాదా ఇంగ్లీష్, తమిళం, లేదా హిందీలో అడగండి — ఇది పరిస్థితిని అర్థం చేసుకుని చట్టాన్ని సూచిస్తుంది.",
    cta_btn_open: "AI సహాయకుడిని తెరవండి",
    cta_btn_fir: "ఎఫ్ఐఆర్ డ్రాఫ్ట్ చేయండి",

    foot_ai: "AI సహాయకుడు",
    foot_section: "సెక్షన్ శోధన",
    foot_cases: "కేస్ లైబ్రరీ",
    foot_about: "మా గురించి",
    foot_note: "విధిసేతు ఒక విద్యాపరమైన లీగల్ రీసెర్చ్ టూల్, ఇది లీగల్ సలహాగా పరిగణించబడదు. మీ నిర్దిష్ట పరిస్థితి కోసం ఎల్లప్పుడూ అర్హత ఉన్న న్యాయవాదిని సంప్రదించండి.",

    app_title: "విధిసేతు",
    app_tagline: "AI-ఆధారిత భారతీయ న్యాయ సంహిత లీగల్ అసిస్టెంట్",

    crisis_title: "🚨 మీ సందేశం తీవ్రమైన పరిస్థితిని కలిగి ఉండవచ్చని మేము గమనించాము",
    crisis_sub: "మీరు లేదా మీకు తెలిసిన ఎవరైనా ప్రమాదంలో లేదా బాధలో ఉంటే, వెంటనే సంప్రదించండి:",
    crisis_police: "పోలీసు ఎమర్జెన్సీ",
    crisis_women: "మహిళా హెల్ప్‌లైన్",
    crisis_child: "చైల్డ్ హెల్ప్‌లైన్ (చైల్డ్‌లైన్)",
    crisis_mental: "మానసిక ఆరోగ్యం (iCall)",
    crisis_vandrevala: "వాండ్రెవాలా ఫౌండేషన్",
    crisis_domestic: "గృహ హింస",
    crisis_find_police: "📍 సమీప పోలీస్ స్టేషన్‌ను కనుగొనండి",

    ai_input_placeholder: "ఒక లీగల్ ప్రశ్న అడగండి...",
    btn_send: "పంపండి",
    chip_attack: "ఎవరో నన్ను దాడి చేశారు",
    chip_theft: "పక్కింటి వారి చేత దొంగతనం",
    chip_threat: "ఆన్‌లైన్ బెదిరింపు",
    chip_clear: "🗑 చాట్ క్లియర్ చేయండి",
    ai_loading: "బీఎన్ఎస్ సెక్షన్లను విశ్లేషిస్తోంది...",
    err_api: "API కనెక్ట్ చేయడంలో లోపం. సర్వర్ నడుస్తుందని నిర్ధారించుకోండి.",

    section_placeholder: "బీఎన్ఎస్ 303 లేదా ఐపిసి 302 లేదా ఐపిసి 498A నమోదు చేయండి...",
    btn_lookup: "సెక్షన్‌ను శోధించండి",
    section_loading: "సెక్షన్‌ను పొందుతోంది...",
    section_not_found: "సెక్షన్ కనుగొనబడలేదు.",
    err_api_section: "API కనెక్ట్ చేయడంలో లోపం.",
    ipc_not_found: "❌ ఐపిసి సెక్షన్ {num} మా మ్యాపింగ్ డేటాబేస్‌లో కనుగొనబడలేదు.",
    keywords_label: "కీవర్డ్‌లు:",
    punishment_label: "⚖️ శిక్ష:",
    bns_details_missing: "బీఎన్ఎస్ సెక్షన్ వివరాలు డేటాబేస్‌లో కనుగొనబడలేదు.",
    no_punishment: "నేరుగా శిక్ష పేర్కొనబడలేదు",
    change_notes_label: "మార్పు గమనికలు:",
    details_unavailable: "వివరాలు అందుబాటులో లేవు",

    about_h1: "విధిసేతు గురించి",
    about_p1: "విధిసేతు అనేది భారతీయ న్యాయ సంహిత (బీఎన్ఎస్) - భారతదేశ క్రిమినల్ లా కోడ్ - అర్థం చేసుకోవడంలో వినియోగదారులకు సహాయపడే AI-ఆధారిత లీగల్ అసిస్టెంట్.",
    about_h2: "మేము ఏమి చేస్తాము",
    about_p2: "మేము మూడు ముఖ్యమైన ఫీచర్లతో లీగల్ రీసెర్చ్ కోసం సమగ్రమైన ప్లాట్‌ఫారమ్‌ను అందిస్తాము:",
    about_li1_title: "AI సహాయకుడు:",
    about_li1: "మీ లీగల్ పరిస్థితిని వివరించండి మరియు AI-ఆధారిత వివరణలతో సంబంధిత బీఎన్ఎస్ సెక్షన్లను పొందండి",
    about_li2_title: "సెక్షన్ శోధన:",
    about_li2: "బీఎన్ఎస్ సెక్షన్లను శోధించండి లేదా వాటి బీఎన్ఎస్ సమానమైనదాన్ని కనుగొనడానికి పాత ఐపిసి సెక్షన్లను నమోదు చేయండి",
    about_li3_title: "కేస్ లైబ్రరీ:",
    about_li3: "ముఖ్యమైన లీగల్ కేసులు మరియు న్యాయపరమైన ఉదాహరణలను అన్వేషించండి",
    about_h3: "మా లక్ష్యం",
    about_p3: "లీగల్ నాలెడ్జ్‌ను ప్రజాస్వామ్యీకరించడం మరియు భారతీయ క్రిమినల్ లాను అందరికీ అందుబాటులోకి తీసుకురావడం.",
    about_h4: "సాంకేతికత",
    about_p4: "సెమాంటిక్ శోధన, AI వివరణలు మరియు లొకేషన్ సేవల కోసం విధిసేతు RAG, ChromaDB వెక్టర్ డేటాబేస్, సెంటెన్స్ ట్రాన్స్‌ఫార్మర్లు, ఒక లోకల్ LLM, మరియు గూగుల్ మ్యాప్స్‌ను ఉపయోగిస్తుంది.",
    about_h5: "నిరాకరణ",
    about_p5: "విధిసేతు విద్యా ప్రయోజనాల కోసం మాత్రమే. ఏదైనా లీగల్ నిర్ణయం తీసుకునే ముందు ఎల్లప్పుడూ అర్హత ఉన్న లీగల్ నిపుణుడిని సంప్రదించండి.",

    case_verdict_label: "తీర్పు:"
  },

  kn: {
    nav_platform: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್",
    nav_coverage: "ಒಳಗೊಂಡಿರುವಿಕೆ",
    nav_fir: "ಎಫ್‌ಐಆರ್ ಡ್ರಾಫ್ಟ್",
    nav_open_app: "ಅಪ್ಲಿಕೇಶನ್ ತೆರೆಯಿರಿ",
    nav_try_app: "ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್ ಪ್ರಯತ್ನಿಸಿ",
    nav_home: "← ಮುಖಪುಟ",
    nav_ai: "AI ಸಹಾಯಕ",
    nav_section: "ವಿಭಾಗ ಶೋಧ",
    nav_cases: "ಕೇಸ್ ಲೈಬ್ರರಿ",
    nav_about: "ನಮ್ಮ ಬಗ್ಗೆ",
    nav_dark: "ಡಾರ್ಕ್ ಮೋಡ್",
    nav_light: "ಲೈಟ್ ಮೋಡ್",
    nav_language: "ಭಾಷೆ",

    hero_title_line1: "ವಿಭಾಗವನ್ನು ಹುಡುಕಿ.",
    hero_title_line2: "ಕೇವಲ ಶಾಸನ ಅಲ್ಲ.",
    hero_sub: "ವಿಧಿಸೇತು ನಿಮ್ಮ ಪರಿಸ್ಥಿತಿಯನ್ನು ಜೂನಿಯರ್ ವಕೀಲರಂತೆ ಅರ್ಥಮಾಡಿಕೊಂಡು, ನಿಖರವಾದ ಭಾರತೀಯ ನ್ಯಾಯ ಸಂಹಿತಾ ವಿಭಾಗಗಳು, ಐಪಿಸಿ ಮ್ಯಾಪಿಂಗ್, ಮತ್ತು ಅವುಗಳ ಹಿಂದಿನ ಪೂರ್ವನಿದರ್ಶನವನ್ನು ನಿಮಗೆ ನೀಡುತ್ತದೆ.",
    tagline_marquee: "AI-ಚಾಲಿತ ಭಾರತೀಯ ನ್ಯಾಯ ಸಂಹಿತಾ ಕಾನೂನು ಸಹಾಯಕ",
    search_placeholder: "ನನ್ನ ಮನೆ ಮಾಲೀಕರು ನನ್ನ ಸೆಕ್ಯುರಿಟಿ ಡಿಪಾಸಿಟ್ ಹಿಂದಿರುಗಿಸಿಲ್ಲ.",
    btn_try_search: "ಶೋಧ ಪ್ರಯತ್ನಿಸಿ",
    btn_go_ai: "AI ಸಹಾಯಕಕ್ಕೆ ಹೋಗಿ",
    btn_draft_fir: "ಎಫ್‌ಐಆರ್ ಡ್ರಾಫ್ಟ್ ಮಾಡಿ",
    badge_new_free: "ಹೊಸದು · ಉಚಿತ",

    ticker_eyebrow: "ಭಾರತೀಯ ನ್ಯಾಯ ಸಂಹಿತಾ, ಭಾರತೀಯ ನಾಗರಿಕ ಸುರಕ್ಷಾ ಸಂಹಿತಾ, ಮತ್ತು ರದ್ದುಗೊಂಡ ಐಪಿಸಿಗೆ ಎದುರಾಗಿ ಮ್ಯಾಪ್ ಮಾಡಲಾಗಿದೆ",
    ticker_bns: "ಭಾರತೀಯ ನ್ಯಾಯ ಸಂಹಿತಾ, 2023",
    ticker_ipc: "ಭಾರತೀಯ ದಂಡ ಸಂಹಿತೆ, 1860",
    ticker_bnss: "ಭಾರತೀಯ ನಾಗರಿಕ ಸುರಕ್ಷಾ ಸಂಹಿತಾ",
    ticker_bsa: "ಭಾರತೀಯ ಸಾಕ್ಷ್ಯ ಅಧಿನಿಯಮ್",
    ticker_count: "358 ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗಗಳು ಸೂಚಿಕೆಗೊಳಿಸಲಾಗಿದೆ",

    statement_line1: "ವಿಭಾಗ ಸಂಖ್ಯೆಗಳನ್ನು ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವುದನ್ನು ನಿಲ್ಲಿಸಿ.",
    statement_line2: "ಏನಾಯಿತು ಎಂಬುದನ್ನು ವಿವರಿಸಲು ಪ್ರಾರಂಭಿಸಿ.",

    platform_title: "ಶಾಸನದ ಆಧಾರದ ಮೇಲೆ, ಇಂಟರ್ನೆಟ್‌ನಲ್ಲಿ ಅಲ್ಲ.",
    platform_text: "ಸಾಮಾನ್ಯ ಚಾಟ್‌ಬಾಟ್‌ಗಳು ಹಳೆಯ ಐಪಿಸಿ ವಿಭಾಗಗಳನ್ನು ಹೊಸ ಕೋಡ್‌ನೊಂದಿಗೆ ಮಿಶ್ರಣ ಮಾಡಿ, ಮೌನವಾಗಿ ಶಿಕ್ಷೆಯನ್ನು ತಪ್ಪಾಗಿ ಹೇಳುತ್ತವೆ. ವಿಧಿಸೇತುವಿನ ಮರುಸ್ಥಾಪನೆ ಪದರವು ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗದ ಪಠ್ಯ ಮತ್ತು ಅದರ ಅಧಿಕೃತ ಐಪಿಸಿ ಮ್ಯಾಪಿಂಗ್‌ನಲ್ಲಿ ಮಾತ್ರ ಆಧಾರಿತವಾಗಿದೆ, ಆದ್ದರಿಂದ ಅದು ನಿಮಗೆ ನೀಡುವ ವಿಭಾಗ ಸಂಖ್ಯೆ ನ್ಯಾಯಾಲಯ ಗುರುತಿಸುವ ಸಂಖ್ಯೆಯಾಗಿರುತ್ತದೆ.",
    platform_link: "ವಿಭಾಗ ಶೋಧ ಪ್ರಯತ್ನಿಸಿ →",
    stat_eyebrow: "ವಿಭಾಗ ಹೊಂದಾಣಿಕೆ ನಿಖರತೆ",
    stat_verify: "ಅಧಿಕೃತ ಐಪಿಸಿ → ಬಿಎನ್‌ಎಸ್ ಮ್ಯಾಪಿಂಗ್ ಕೋಷ್ಟಕದ ಆಧಾರದ ಮೇಲೆ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    stat_generic: "ಸಾಮಾನ್ಯ ಚಾಟ್‌ಬಾಟ್",
    stat_keyword: "ಕೀವರ್ಡ್ ಶೋಧ",

    coverage_title: "ಇನ್ನೂ ಐಪಿಸಿ 302 ಹುಡುಕುತ್ತಿದ್ದೀರಾ?",
    coverage_text: "ಲಕ್ಷಾಂತರ ಎಫ್‌ಐಆರ್‌ಗಳು, ತೀರ್ಪುಗಳು ಮತ್ತು ಪಠ್ಯಪುಸ್ತಕಗಳು ಇನ್ನೂ ಹಳೆಯ ಐಪಿಸಿಯನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತವೆ. ನಿಮಗೆ ತಿಳಿದಿರುವ ಐಪಿಸಿ ಸಂಖ್ಯೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ, ವಿಧಿಸೇತು ಅದನ್ನು ಬದಲಾಯಿಸಿದ ನಿಖರವಾದ ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗವನ್ನು, ಶಿಕ್ಷೆ ಅಥವಾ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಏನು ಬದಲಾಗಿದೆ ಎಂಬುದರೊಂದಿಗೆ ತೋರಿಸುತ್ತದೆ.",
    coverage_link: "ಐಪಿಸಿ → ಬಿಎನ್‌ಎಸ್ ಮ್ಯಾಪಿಂಗ್ ಪ್ರಯತ್ನಿಸಿ →",
    extract_eyebrow: "[ ಐಪಿಸಿ → ಬಿಎನ್‌ಎಸ್ ಮ್ಯಾಪಿಂಗ್ ]",
    extract_ipc302: "ಐಪಿಸಿ ವಿಭಾಗ 302 — ಕೊಲೆ",
    extract_ipc302_desc: "ಮರಣದಂಡನೆ, ಅಥವಾ ಜೀವಾವಧಿ ಶಿಕ್ಷೆ, ಮತ್ತು ದಂಡದಿಂದ ಶಿಕ್ಷಾರ್ಹ.",
    extract_replaced: "→ ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗ 103 ರಿಂದ ಬದಲಾಯಿಸಲಾಗಿದೆ.",
    extract_replaced2: "ಅದೇ ಶಿಕ್ಷೆ ಉಳಿಸಿಕೊಂಡಿದೆ, ಅಧ್ಯಾಯ VI ಅಡಿಯಲ್ಲಿ ಮರುಸಂಖ್ಯೆ ಮಾಡಲಾಗಿದೆ.",

    cases_title: "ಪೂರ್ವನಿದರ್ಶನ, ಕೇವಲ ನಿಬಂಧನೆಗಳಲ್ಲ.",
    cases_text: "ಒಂದು ವಿಭಾಗ ಸಂಖ್ಯೆ ಮಾತ್ರ ನಿಜವಾದ ವಿವಾದವನ್ನು ವಿರಳವಾಗಿ ಬಗೆಹರಿಸುತ್ತದೆ. ವಿಧಿಸೇತು ಪ್ರತಿ ಸಂಬಂಧಿತ ವಿಭಾಗವನ್ನು ಸುಪ್ರೀಂ ಕೋರ್ಟ್‌ನ ಮಹತ್ವದ ತೀರ್ಪುಗಳೊಂದಿಗೆ ಜೋಡಿಸುತ್ತದೆ, ಅದು ಪ್ರಾಯೋಗಿಕವಾಗಿ ಹೇಗೆ ಅನ್ವಯಿಸಲ್ಪಟ್ಟಿದೆ ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತದೆ — ಎಫ್‌ಐಆರ್ ನೋಂದಣಿಗಾಗಿ ಲಲಿತಾ ಕುಮಾರಿ, ಬಂಧನ ಮಾರ್ಗಸೂಚಿಗಳಿಗಾಗಿ ಅರ್ನೇಶ್ ಕುಮಾರ್, ಮತ್ತು ಇನ್ನೂ ಹಲವು.",
    cases_link: "ಕೇಸ್ ಲೈಬ್ರರಿ ಬ್ರೌಸ್ ಮಾಡಿ →",
    case_matched: "ಕೇಸ್ ಹೊಂದಿಕೆಯಾಗಿದೆ",
    case_lalita_title: "ಲಲಿತಾ ಕುಮಾರಿ vs ಯುಪಿ ಸರ್ಕಾರ",
    case_lalita_desc: "ಗುರುತಿಸಬಹುದಾದ ಅಪರಾಧಗಳಿಗೆ ಎಫ್‌ಐಆರ್ ನೋಂದಣಿ ಕಡ್ಡಾಯ — ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗ 173 ಗಾಗಿ ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",

    fir_badge: "● ವಿಧಿಸೇತುವಿನಲ್ಲಿ ಹೊಸದು",
    fir_title: "\"ಏನಾಯಿತು\" ಎಂಬುದರಿಂದ ಸಲ್ಲಿಸಿದ ಎಫ್‌ಐಆರ್‌ಗೆ — ಒಂದೇ ಹಂತದಲ್ಲಿ.",
    fir_text: "ಹೆಚ್ಚಿನ ಜನರಿಗೆ ಕಾನೂನು ಪಾಠ ಬೇಕಿಲ್ಲ, ಅವರಿಗೆ ಒಂದು ದಾಖಲೆ ಬೇಕು. ಘಟನೆಯನ್ನು ನಿಮ್ಮ ಸ್ವಂತ ಮಾತುಗಳಲ್ಲಿ ವಿವರಿಸಿ, ಮತ್ತು ವಿಧಿಸೇತು ಒಂದು ರಚನಾತ್ಮಕ ಎಫ್‌ಐಆರ್-ಸಿದ್ಧ ಹೇಳಿಕೆಯನ್ನು ತಯಾರಿಸುತ್ತದೆ: ದೂರುದಾರರ ವಿವರಗಳು, ಸರಳ ಭಾಷೆಯ ವಿವರಣೆ, ಶಿಕ್ಷೆಯೊಂದಿಗೆ ಅನ್ವಯವಾಗುವ ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗಗಳು, ಮತ್ತು ಸಲ್ಲಿಸಲು ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆ — ಮುದ್ರಿಸುವ ಅಥವಾ ಹಂಚಿಕೊಳ್ಳುವ ಮೊದಲು ಎಲ್ಲವೂ ಸಂಪಾದಿಸಬಹುದಾದದ್ದು.",
    fir_link_draft: "ನಿಮ್ಮ ಎಫ್‌ಐಆರ್ ಡ್ರಾಫ್ಟ್ ಮಾಡಿ →",
    fir_link_police: "ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆ ಹುಡುಕಿ →",
    fir_doc_head: "ಎಫ್‌ಐಆರ್ ಡ್ರಾಫ್ಟ್ ಮುನ್ನೋಟ",
    fir_doc_auto: "ಸ್ವಯಂ-ರೂಪಿತ",
    fir_row_nature: "ದೂರಿನ ಸ್ವರೂಪ",
    fir_row_nature_v: "ದ್ವಿಚಕ್ರ ವಾಹನ ಕಳ್ಳತನ",
    fir_row_datetime: "ಘಟನೆಯ ದಿನಾಂಕ & ಸಮಯ",
    fir_row_datetime_v: "14 ಜೂನ್ 2026, ರಾತ್ರಿ ~9:40",
    fir_row_place: "ಘಟನೆ ಸ್ಥಳ",
    fir_row_place_v: "ನಿವಾಸದ ಹೊರಗೆ, ಪೊಳ್ಳಾಚಿ",
    fir_row_section: "ಅನ್ವಯವಾಗುವ ವಿಭಾಗ",
    fir_row_section_tag: "ಕಳ್ಳತನ",
    fir_row_station: "ಸೂಚಿಸಲಾದ ಠಾಣೆ",
    fir_row_station_v: "ಹತ್ತಿರದ ವ್ಯಾಪ್ತಿ, ಸ್ವಯಂ-ಗುರುತಿಸಲಾಗಿದೆ",
    fir_row_status: "ಸ್ಥಿತಿ",
    fir_row_status_v: "ಪರಿಶೀಲನೆಗೆ ಸಿದ್ಧ",

    cta_title1: "ನಿಮ್ಮ ಪ್ರಕರಣ ಕಾಯುವುದಿಲ್ಲ",
    cta_title2: "ಕಚೇರಿ ಸಮಯಕ್ಕಾಗಿ.",
    cta_text: "ವಿಧಿಸೇತುವನ್ನು ಸರಳ ಇಂಗ್ಲಿಷ್, ತಮಿಳು, ಅಥವಾ ಹಿಂದಿಯಲ್ಲಿ ಕೇಳಿ — ಅದು ಪರಿಸ್ಥಿತಿಯನ್ನು ಓದಿ ಕಾನೂನಿನತ್ತ ಸೂಚಿಸುತ್ತದೆ.",
    cta_btn_open: "AI ಸಹಾಯಕವನ್ನು ತೆರೆಯಿರಿ",
    cta_btn_fir: "ಎಫ್‌ಐಆರ್ ಡ್ರಾಫ್ಟ್ ಮಾಡಿ",

    foot_ai: "AI ಸಹಾಯಕ",
    foot_section: "ವಿಭಾಗ ಶೋಧ",
    foot_cases: "ಕೇಸ್ ಲೈಬ್ರರಿ",
    foot_about: "ನಮ್ಮ ಬಗ್ಗೆ",
    foot_note: "ವಿಧಿಸೇತು ಒಂದು ಶೈಕ್ಷಣಿಕ ಕಾನೂನು ಸಂಶೋಧನಾ ಸಾಧನವಾಗಿದೆ ಮತ್ತು ಇದು ಕಾನೂನು ಸಲಹೆಯಲ್ಲ. ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಪರಿಸ್ಥಿತಿಗಾಗಿ ಯಾವಾಗಲೂ ಅರ್ಹ ವಕೀಲರನ್ನು ಸಂಪರ್ಕಿಸಿ.",

    app_title: "ವಿಧಿಸೇತು",
    app_tagline: "AI-ಚಾಲಿತ ಭಾರತೀಯ ನ್ಯಾಯ ಸಂಹಿತಾ ಕಾನೂನು ಸಹಾಯಕ",

    crisis_title: "🚨 ನಿಮ್ಮ ಸಂದೇಶವು ಗंभೀರ ಪರಿಸ್ಥಿತಿಯನ್ನು ಒಳಗೊಂಡಿರಬಹುದು ಎಂದು ನಾವು ಗಮನಿಸಿದ್ದೇವೆ",
    crisis_sub: "ನೀವು ಅಥವಾ ನಿಮಗೆ ತಿಳಿದಿರುವ ಯಾರಾದರೂ ಅಪಾಯ ಅಥವಾ ಸಂಕಷ್ಟದಲ್ಲಿದ್ದರೆ, ತಕ್ಷಣ ಸಂಪರ್ಕಿಸಿ:",
    crisis_police: "ಪೊಲೀಸ್ ತುರ್ತು",
    crisis_women: "ಮಹಿಳಾ ಸಹಾಯವಾಣಿ",
    crisis_child: "ಮಕ್ಕಳ ಸಹಾಯವಾಣಿ (ಚೈಲ್ಡ್‌ಲೈನ್)",
    crisis_mental: "ಮಾನಸಿಕ ಆರೋಗ್ಯ (iCall)",
    crisis_vandrevala: "ವಾಂದ್ರೆವಾಲಾ ಫೌಂಡೇಶನ್",
    crisis_domestic: "ಗೃಹ ಹಿಂಸೆ",
    crisis_find_police: "📍 ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆ ಹುಡುಕಿ",

    ai_input_placeholder: "ಒಂದು ಕಾನೂನು ಪ್ರಶ್ನೆ ಕೇಳಿ...",
    btn_send: "ಕಳುಹಿಸಿ",
    chip_attack: "ಯಾರೋ ನನ್ನ ಮೇಲೆ ಹಲ್ಲೆ ಮಾಡಿದರು",
    chip_theft: "ನೆರೆಹೊರೆಯವರಿಂದ ಕಳ್ಳತನ",
    chip_threat: "ಆನ್‌ಲೈನ್ ಬೆದರಿಕೆ",
    chip_clear: "🗑 ಚಾಟ್ ಅಳಿಸಿ",
    ai_loading: "ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
    err_api: "API ಗೆ ಸಂಪರ್ಕಿಸುವಲ್ಲಿ ದೋಷ. ಸರ್ವರ್ ಚಾಲನೆಯಲ್ಲಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",

    section_placeholder: "ಬಿಎನ್‌ಎಸ್ 303 ಅಥವಾ ಐಪಿಸಿ 302 ಅಥವಾ ಐಪಿಸಿ 498A ನಮೂದಿಸಿ...",
    btn_lookup: "ವಿಭಾಗ ಹುಡುಕಿ",
    section_loading: "ವಿಭಾಗ ಪಡೆಯಲಾಗುತ್ತಿದೆ...",
    section_not_found: "ವಿಭಾಗ ಕಂಡುಬಂದಿಲ್ಲ.",
    err_api_section: "API ಗೆ ಸಂಪರ್ಕಿಸುವಲ್ಲಿ ದೋಷ.",
    ipc_not_found: "❌ ಐಪಿಸಿ ವಿಭಾಗ {num} ನಮ್ಮ ಮ್ಯಾಪಿಂಗ್ ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ಕಂಡುಬಂದಿಲ್ಲ.",
    keywords_label: "ಕೀವರ್ಡ್‌ಗಳು:",
    punishment_label: "⚖️ ಶಿಕ್ಷೆ:",
    bns_details_missing: "ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗ ವಿವರಗಳು ಡೇಟಾಬೇಸ್‌ನಲ್ಲಿ ಕಂಡುಬಂದಿಲ್ಲ.",
    no_punishment: "ನೇರ ಶಿಕ್ಷೆ ಯಾವುದನ್ನೂ ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗಿಲ್ಲ",
    change_notes_label: "ಬದಲಾವಣೆ ಟಿಪ್ಪಣಿಗಳು:",
    details_unavailable: "ವಿವರಗಳು ಲಭ್ಯವಿಲ್ಲ",

    about_h1: "ವಿಧಿಸೇತು ಬಗ್ಗೆ",
    about_p1: "ವಿಧಿಸೇತು ಎಂಬುದು ಭಾರತೀಯ ನ್ಯಾಯ ಸಂಹಿತಾ (ಬಿಎನ್‌ಎಸ್) - ಭಾರತದ ಕ್ರಿಮಿನಲ್ ಕಾನೂನು ಸಂಹಿತೆ - ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಬಳಕೆದಾರರಿಗೆ ಸಹಾಯ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ AI-ಚಾಲಿತ ಕಾನೂನು ಸಹಾಯಕ.",
    about_h2: "ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ",
    about_p2: "ನಾವು ಮೂರು ಮುಖ್ಯ ವೈಶಿಷ್ಟ್ಯಗಳೊಂದಿಗೆ ಕಾನೂನು ಸಂಶೋಧನೆಗಾಗಿ ಸಮಗ್ರ ವೇದಿಕೆಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ:",
    about_li1_title: "AI ಸಹಾಯಕ:",
    about_li1: "ನಿಮ್ಮ ಕಾನೂನು ಪರಿಸ್ಥಿತಿಯನ್ನು ವಿವರಿಸಿ ಮತ್ತು AI-ಚಾಲಿತ ವಿವರಣೆಗಳೊಂದಿಗೆ ಸಂಬಂಧಿತ ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗಗಳನ್ನು ಪಡೆಯಿರಿ",
    about_li2_title: "ವಿಭಾಗ ಶೋಧ:",
    about_li2: "ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗಗಳನ್ನು ಹುಡುಕಿ ಅಥವಾ ಅವುಗಳ ಬಿಎನ್‌ಎಸ್ ಸಮಾನವನ್ನು ಕಂಡುಹಿಡಿಯಲು ಹಳೆಯ ಐಪಿಸಿ ವಿಭಾಗಗಳನ್ನು ನಮೂದಿಸಿ",
    about_li3_title: "ಕೇಸ್ ಲೈಬ್ರರಿ:",
    about_li3: "ಮಹತ್ವದ ಕಾನೂನು ಪ್ರಕರಣಗಳು ಮತ್ತು ನ್ಯಾಯಿಕ ಪೂರ್ವನಿದರ್ಶನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    about_h3: "ನಮ್ಮ ಧ್ಯೇಯ",
    about_p3: "ಕಾನೂನು ಜ್ಞಾನವನ್ನು ಪ್ರಜಾಪ್ರಭುತ್ವಗೊಳಿಸುವುದು ಮತ್ತು ಭಾರತೀಯ ಕ್ರಿಮಿನಲ್ ಕಾನೂನನ್ನು ಎಲ್ಲರಿಗೂ ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡುವುದು.",
    about_h4: "ತಂತ್ರಜ್ಞಾನ",
    about_p4: "ಸೆಮ್ಯಾಂಟಿಕ್ ಶೋಧ, AI ವಿವರಣೆಗಳು, ಮತ್ತು ಸ್ಥಳ ಸೇವೆಗಳಿಗಾಗಿ ವಿಧಿಸೇತು RAG, ChromaDB ವೆಕ್ಟರ್ ಡೇಟಾಬೇಸ್, ಸೆಂಟೆನ್ಸ್ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮರ್‌ಗಳು, ಒಂದು ಲೋಕಲ್ LLM, ಮತ್ತು ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ಅನ್ನು ಬಳಸುತ್ತದೆ.",
    about_h5: "ನಿರಾಕರಣೆ",
    about_p5: "ವಿಧಿಸೇತು ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಗಳಿಗಾಗಿ. ಯಾವುದೇ ಕಾನೂನು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲು ಯಾವಾಗಲೂ ಅರ್ಹ ಕಾನೂನು ವೃತ್ತಿಪರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",

    case_verdict_label: "ತೀರ್ಪು:"
  },

  ml: {
    nav_platform: "പ്ലാറ്റ്‌ഫോം",
    nav_coverage: "കവറേജ്",
    nav_fir: "എഫ്ഐആർ ഡ്രാഫ്റ്റ്",
    nav_open_app: "ആപ്പ് തുറക്കുക",
    nav_try_app: "വെബ് ആപ്പ് ശ്രമിക്കുക",
    nav_home: "← ഹോം",
    nav_ai: "AI സഹായി",
    nav_section: "സെക്ഷൻ തിരയൽ",
    nav_cases: "കേസ് ലൈബ്രറി",
    nav_about: "ഞങ്ങളെക്കുറിച്ച്",
    nav_dark: "ഡാർക്ക് മോഡ്",
    nav_light: "ലൈറ്റ് മോഡ്",
    nav_language: "ഭാഷ",

    hero_title_line1: "സെക്ഷൻ കണ്ടെത്തുക.",
    hero_title_line2: "നിയമം മാത്രമല്ല.",
    hero_sub: "വിധിസേതു നിങ്ങളുടെ സാഹചര്യം ഒരു ജൂനിയർ അഭിഭാഷകനെപ്പോലെ മനസ്സിലാക്കി, കൃത്യമായ ഭാരതീയ ന്യായ സംഹിത സെക്ഷനുകളും, ഐപിസി മാപ്പിംഗും, അവയ്ക്ക് പിന്നിലെ കീഴ്‌വഴക്കങ്ങളും നൽകുന്നു.",
    tagline_marquee: "AI-പ്രവർത്തിത ഭാരതീയ ന്യായ സംഹിത ലീഗൽ അസിസ്റ്റന്റ്",
    search_placeholder: "എന്റെ വീട്ടുടമ എന്റെ സെക്യൂരിറ്റി ഡിപ്പോസിറ്റ് തിരികെ നൽകുന്നില്ല.",
    btn_try_search: "തിരയൽ ശ്രമിക്കുക",
    btn_go_ai: "AI സഹായിയിലേക്ക് പോകുക",
    btn_draft_fir: "എഫ്ഐആർ ഡ്രാഫ്റ്റ് ചെയ്യുക",
    badge_new_free: "പുതിയത് · സൗജന്യം",

    ticker_eyebrow: "ഭാരതീയ ന്യായ സംഹിത, ഭാരതീയ നാഗരിക് സുരക്ഷാ സംഹിത, റദ്ദാക്കിയ ഐപിസിക്കെതിരെ മാപ്പ് ചെയ്തിരിക്കുന്നു",
    ticker_bns: "ഭാരതീയ ന്യായ സംഹിത, 2023",
    ticker_ipc: "ഇന്ത്യൻ ശിക്ഷാ നിയമം, 1860",
    ticker_bnss: "ഭാരതീയ നാഗരിക് സുരക്ഷാ സംഹിത",
    ticker_bsa: "ഭാരതീയ സാക്ഷ്യ അധിനിയം",
    ticker_count: "358 ബിഎൻഎസ് സെക്ഷനുകൾ സൂചികയിലാക്കി",

    statement_line1: "സെക്ഷൻ നമ്പറുകൾ ഓർമ്മിക്കുന്നത് നിർത്തുക.",
    statement_line2: "എന്താണ് സംഭവിച്ചതെന്ന് വിവരിക്കാൻ തുടങ്ങുക.",

    platform_title: "നിയമത്തിലധിഷ്ഠിതം, ഇന്റർനെറ്റിലല്ല.",
    platform_text: "സാധാരണ ചാറ്റ്ബോട്ടുകൾ പഴയ ഐപിസി സെക്ഷനുകൾ പുതിയ കോഡുമായി കൂട്ടിക്കുഴച്ച്, നിശ്ശബ്ദമായി ശിക്ഷ തെറ്റായി പറയുന്നു. വിധിസേതുവിന്റെ റിട്രീവൽ ലെയർ ബിഎൻഎസ് സെക്ഷൻ ടെക്സ്റ്റിലും അതിന്റെ ഔദ്യോഗിക ഐപിസി മാപ്പിംഗിലും മാത്രം അധിഷ്ഠിതമാണ്, അതിനാൽ അത് നൽകുന്ന സെക്ഷൻ നമ്പർ കോടതി അംഗീകരിക്കുന്ന നമ്പറായിരിക്കും.",
    platform_link: "സെക്ഷൻ തിരയൽ ശ്രമിക്കുക →",
    stat_eyebrow: "സെക്ഷൻ പൊരുത്ത കൃത്യത",
    stat_verify: "ഔദ്യോഗിക ഐപിസി → ബിഎൻഎസ് മാപ്പിംഗ് ടേബിളിന്റെ അടിസ്ഥാനത്തിൽ പരിശോധിച്ചു",
    stat_generic: "സാധാരണ ചാറ്റ്ബോട്ട്",
    stat_keyword: "കീവേഡ് തിരയൽ",

    coverage_title: "ഇപ്പോഴും ഐപിസി 302 തിരയുകയാണോ?",
    coverage_text: "ദശലക്ഷക്കണക്കിന് എഫ്ഐആറുകളും വിധിന്യായങ്ങളും പാഠപുസ്തകങ്ങളും ഇപ്പോഴും പഴയ ഐപിസിയെ പരാമർശിക്കുന്നു. നിങ്ങൾക്കറിയാവുന്ന ഐപിസി നമ്പർ ടൈപ്പ് ചെയ്യുക, വിധിസേതു അതിനെ മാറ്റിസ്ഥാപിച്ച കൃത്യമായ ബിഎൻഎസ് സെക്ഷൻ, ശിക്ഷയിലോ പരിധിയിലോ വന്ന മാറ്റങ്ങൾക്കൊപ്പം കാണിക്കുന്നു.",
    coverage_link: "ഐപിസി → ബിഎൻഎസ് മാപ്പിംഗ് ശ്രമിക്കുക →",
    extract_eyebrow: "[ ഐപിസി → ബിഎൻഎസ് മാപ്പിംഗ് ]",
    extract_ipc302: "ഐപിസി സെക്ഷൻ 302 — കൊലപാതകം",
    extract_ipc302_desc: "വധശിക്ഷ, അല്ലെങ്കിൽ ജീവപര്യന്തം തടവ്, പിഴയും.",
    extract_replaced: "→ ബിഎൻഎസ് സെക്ഷൻ 103 ഉപയോഗിച്ച് മാറ്റിസ്ഥാപിച്ചു.",
    extract_replaced2: "അതേ ശിക്ഷ നിലനിർത്തി, അധ്യായം VI പ്രകാരം പുനർനാമകരണം ചെയ്തു.",

    cases_title: "കീഴ്‌വഴക്കം, വ്യവസ്ഥകൾ മാത്രമല്ല.",
    cases_text: "ഒരു സെക്ഷൻ നമ്പർ മാത്രം ഒരു യഥാർത്ഥ തർക്കം പരിഹരിക്കുന്നത് അപൂർവ്വമാണ്. വിധിസേതു ഓരോ ബന്ധപ്പെട്ട സെക്ഷനെയും സുപ്രീം കോടതിയുടെ സുപ്രധാന വിധിന്യായങ്ങളുമായി ജോടിയാക്കുന്നു, അവ പ്രായോഗികമായി എങ്ങനെ പ്രയോഗിച്ചു എന്ന് കാണിക്കുന്നു — എഫ്ഐആർ രജിസ്ട്രേഷനായി ലളിത കുമാരി, അറസ്റ്റ് മാർഗ്ഗനിർദ്ദേശങ്ങൾക്കായി അർനേഷ് കുമാർ, കൂടാതെ കൂടുതൽ.",
    cases_link: "കേസ് ലൈബ്രറി ബ്രൗസ് ചെയ്യുക →",
    case_matched: "കേസ് പൊരുത്തപ്പെട്ടു",
    case_lalita_title: "ലളിത കുമാരി vs യുപി സർക്കാർ",
    case_lalita_desc: "തിരിച്ചറിയാവുന്ന കുറ്റകൃത്യങ്ങൾക്ക് എഫ്ഐആർ രജിസ്ട്രേഷൻ നിർബന്ധമാണ് — ബിഎൻഎസ് സെക്ഷൻ 173-ന് ഉദ്ധരിച്ചു.",

    fir_badge: "● വിധിസേതുവിൽ പുതിയത്",
    fir_title: "\"എന്ത് സംഭവിച്ചു\" എന്നതിൽ നിന്ന് ഫയൽ ചെയ്ത എഫ്ഐആറിലേക്ക് — ഒരു ഘട്ടത്തിൽ.",
    fir_text: "ഭൂരിഭാഗം ആളുകൾക്കും ഒരു നിയമ പ്രഭാഷണം ആവശ്യമില്ല, അവർക്ക് ഒരു ഡോക്യുമെന്റ് ആവശ്യമാണ്. സംഭവം നിങ്ങളുടെ സ്വന്തം വാക്കുകളിൽ വിവരിക്കുക, വിധിസേതു ഒരു ഘടനാപരമായ എഫ്ഐആർ-തയ്യാർ പ്രസ്താവന തയ്യാറാക്കും: പരാതിക്കാരന്റെ വിശദാംശങ്ങൾ, ലളിതമായ ഭാഷയിലുള്ള വിവരണം, ശിക്ഷയോടെ ബന്ധപ്പെട്ട ബിഎൻഎസ് സെക്ഷനുകൾ, ഫയൽ ചെയ്യാനുള്ള ഏറ്റവും അടുത്ത പോലീസ് സ്റ്റേഷൻ — പ്രിന്റ് ചെയ്യുന്നതിനോ പങ്കിടുന്നതിനോ മുമ്പ് എല്ലാം എഡിറ്റ് ചെയ്യാവുന്നതാണ്.",
    fir_link_draft: "നിങ്ങളുടെ എഫ്ഐആർ ഡ്രാഫ്റ്റ് ചെയ്യുക →",
    fir_link_police: "ഏറ്റവും അടുത്ത പോലീസ് സ്റ്റേഷൻ കണ്ടെത്തുക →",
    fir_doc_head: "എഫ്ഐആർ ഡ്രാഫ്റ്റ് പ്രിവ്യൂ",
    fir_doc_auto: "ഓട്ടോ-ജനറേറ്റഡ്",
    fir_row_nature: "പരാതിയുടെ സ്വഭാവം",
    fir_row_nature_v: "ഇരുചക്രവാഹന മോഷണം",
    fir_row_datetime: "സംഭവത്തിന്റെ തീയതിയും സമയവും",
    fir_row_datetime_v: "14 ജൂൺ 2026, രാത്രി ~9:40",
    fir_row_place: "സംഭവസ്ഥലം",
    fir_row_place_v: "വസതിക്ക് പുറത്ത്, പൊള്ളാച്ചി",
    fir_row_section: "ബന്ധപ്പെട്ട സെക്ഷൻ",
    fir_row_section_tag: "മോഷണം",
    fir_row_station: "നിർദ്ദേശിച്ച സ്റ്റേഷൻ",
    fir_row_station_v: "ഏറ്റവും അടുത്ത അധികാരപരിധി, ഓട്ടോ-കണ്ടെത്തി",
    fir_row_status: "നില",
    fir_row_status_v: "അവലോകനത്തിന് തയ്യാർ",

    cta_title1: "നിങ്ങളുടെ കേസ് കാത്തിരിക്കില്ല",
    cta_title2: "ഓഫീസ് സമയത്തിനായി.",
    cta_text: "വിധിസേതുവിനെ ലളിതമായ ഇംഗ്ലീഷ്, തമിഴ്, അല്ലെങ്കിൽ ഹിന്ദിയിൽ ചോദിക്കുക — അത് സാഹചര്യം മനസ്സിലാക്കി നിയമത്തിലേക്ക് വിരൽ ചൂണ്ടുന്നു.",
    cta_btn_open: "AI സഹായി തുറക്കുക",
    cta_btn_fir: "എഫ്ഐആർ ഡ്രാഫ്റ്റ് ചെയ്യുക",

    foot_ai: "AI സഹായി",
    foot_section: "സെക്ഷൻ തിരയൽ",
    foot_cases: "കേസ് ലൈബ്രറി",
    foot_about: "ഞങ്ങളെക്കുറിച്ച്",
    foot_note: "വിധിസേതു ഒരു വിദ്യാഭ്യാസ നിയമ ഗവേഷണ ഉപകരണമാണ്, ഇത് നിയമോപദേശമായി കണക്കാക്കരുത്. നിങ്ങളുടെ പ്രത്യേക സാഹചര്യത്തിന് എപ്പോഴും യോഗ്യതയുള്ള ഒരു അഭിഭാഷകനെ സമീപിക്കുക.",

    app_title: "വിധിസേതു",
    app_tagline: "AI-പ്രവർത്തിത ഭാരതീയ ന്യായ സംഹിത ലീഗൽ അസിസ്റ്റന്റ്",

    crisis_title: "🚨 നിങ്ങളുടെ സന്ദേശത്തിൽ ഗൗരവമായ ഒരു സാഹചര്യം ഉൾപ്പെട്ടേക്കാമെന്ന് ഞങ്ങൾ ശ്രദ്ധിച്ചു",
    crisis_sub: "നിങ്ങളോ നിങ്ങൾക്കറിയാവുന്ന ആരെങ്കിലുമോ അപകടത്തിലോ ദുരിതത്തിലോ ആണെങ്കിൽ, ഉടൻ ബന്ധപ്പെടുക:",
    crisis_police: "പോലീസ് അടിയന്തരാവസ്ഥ",
    crisis_women: "വനിതാ ഹെൽപ്പ്‌ലൈൻ",
    crisis_child: "ചൈൽഡ് ഹെൽപ്പ്‌ലൈൻ (ചൈൽഡ്‌ലൈൻ)",
    crisis_mental: "മാനസികാരോഗ്യം (iCall)",
    crisis_vandrevala: "വാന്ദ്രേവാല ഫൗണ്ടേഷൻ",
    crisis_domestic: "ഗാർഹിക പീഡനം",
    crisis_find_police: "📍 ഏറ്റവും അടുത്ത പോലീസ് സ്റ്റേഷൻ കണ്ടെത്തുക",

    ai_input_placeholder: "ഒരു നിയമപരമായ ചോദ്യം ചോദിക്കുക...",
    btn_send: "അയയ്ക്കുക",
    chip_attack: "ആരോ എന്നെ ആക്രമിച്ചു",
    chip_theft: "അയൽവാസിയുടെ മോഷണം",
    chip_threat: "ഓൺലൈൻ ഭീഷണി",
    chip_clear: "🗑 ചാറ്റ് മായ്ക്കുക",
    ai_loading: "ബിഎൻഎസ് സെക്ഷനുകൾ വിശകലനം ചെയ്യുന്നു...",
    err_api: "API-യിലേക്ക് കണക്റ്റ് ചെയ്യുന്നതിൽ പിശക്. സെർവർ പ്രവർത്തിക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക.",

    section_placeholder: "ബിഎൻഎസ് 303 അല്ലെങ്കിൽ ഐപിസി 302 അല്ലെങ്കിൽ ഐപിസി 498A നൽകുക...",
    btn_lookup: "സെക്ഷൻ തിരയുക",
    section_loading: "സെക്ഷൻ ലഭ്യമാക്കുന്നു...",
    section_not_found: "സെക്ഷൻ കണ്ടെത്തിയില്ല.",
    err_api_section: "API-യിലേക്ക് കണക്റ്റ് ചെയ്യുന്നതിൽ പിശക്.",
    ipc_not_found: "❌ ഐപിസി സെക്ഷൻ {num} ഞങ്ങളുടെ മാപ്പിംഗ് ഡാറ്റാബേസിൽ കണ്ടെത്തിയില്ല.",
    keywords_label: "കീവേഡുകൾ:",
    punishment_label: "⚖️ ശിക്ഷ:",
    bns_details_missing: "ബിഎൻഎസ് സെക്ഷൻ വിശദാംശങ്ങൾ ഡാറ്റാബേസിൽ കണ്ടെത്തിയില്ല.",
    no_punishment: "നേരിട്ടുള്ള ശിക്ഷ ഒന്നും വ്യക്തമാക്കിയിട്ടില്ല",
    change_notes_label: "മാറ്റ കുറിപ്പുകൾ:",
    details_unavailable: "വിശദാംശങ്ങൾ ലഭ്യമല്ല",

    about_h1: "വിധിസേതുവിനെക്കുറിച്ച്",
    about_p1: "വിധിസേതു എന്നത് ഭാരതീയ ന്യായ സംഹിത (ബിഎൻഎസ്) - ഇന്ത്യയുടെ ക്രിമിനൽ നിയമ കോഡ് - മനസ്സിലാക്കാൻ ഉപയോക്താക്കളെ സഹായിക്കാൻ രൂപകൽപ്പന ചെയ്ത AI-പ്രവർത്തിത നിയമ സഹായിയാണ്.",
    about_h2: "ഞങ്ങൾ എന്ത് ചെയ്യുന്നു",
    about_p2: "മൂന്ന് പ്രധാന സവിശേഷതകളോടെ നിയമ ഗവേഷണത്തിനായി ഞങ്ങൾ ഒരു സമഗ്രമായ പ്ലാറ്റ്‌ഫോം നൽകുന്നു:",
    about_li1_title: "AI സഹായി:",
    about_li1: "നിങ്ങളുടെ നിയമപരമായ സാഹചര്യം വിവരിക്കുക, AI-പ്രവർത്തിത വിശദീകരണങ്ങളോടെ ബന്ധപ്പെട്ട ബിഎൻഎസ് സെക്ഷനുകൾ നേടുക",
    about_li2_title: "സെക്ഷൻ തിരയൽ:",
    about_li2: "ബിഎൻഎസ് സെക്ഷനുകൾ തിരയുക അല്ലെങ്കിൽ അവയുടെ ബിഎൻഎസ് തുല്യത കണ്ടെത്താൻ പഴയ ഐപിസി സെക്ഷനുകൾ നൽകുക",
    about_li3_title: "കേസ് ലൈബ്രറി:",
    about_li3: "സുപ്രധാന നിയമ കേസുകളും ജുഡീഷ്യൽ കീഴ്‌വഴക്കങ്ങളും പര്യവേക്ഷണം ചെയ്യുക",
    about_h3: "ഞങ്ങളുടെ ലക്ഷ്യം",
    about_p3: "നിയമപരമായ അറിവ് ജനാധിപത്യവൽക്കരിക്കുകയും ഇന്ത്യൻ ക്രിമിനൽ നിയമം എല്ലാവർക്കും ലഭ്യമാക്കുകയും ചെയ്യുക.",
    about_h4: "സാങ്കേതികവിദ്യ",
    about_p4: "സെമാന്റിക് തിരയൽ, AI വിശദീകരണങ്ങൾ, ലൊക്കേഷൻ സേവനങ്ങൾക്കായി വിധിസേതു RAG, ChromaDB വെക്റ്റർ ഡാറ്റാബേസ്, സെന്റൻസ് ട്രാൻസ്ഫോർമറുകൾ, ഒരു ലോക്കൽ LLM, ഗൂഗിൾ മാപ്സ് എന്നിവ ഉപയോഗിക്കുന്നു.",
    about_h5: "നിരാകരണം",
    about_p5: "വിധിസേതു വിദ്യാഭ്യാസ ആവശ്യങ്ങൾക്ക് മാത്രമാണ്. ഏതെങ്കിലും നിയമപരമായ തീരുമാനം എടുക്കുന്നതിന് മുമ്പ് എപ്പോഴും യോഗ്യതയുള്ള ഒരു നിയമ വിദഗ്ധനെ സമീപിക്കുക.",

    case_verdict_label: "വിധി:"
  },

  bn: {
    nav_platform: "প্ল্যাটফর্ম",
    nav_coverage: "কভারেজ",
    nav_fir: "এফআইআর ড্রাফট",
    nav_open_app: "অ্যাপ খুলুন",
    nav_try_app: "ওয়েব অ্যাপ চেষ্টা করুন",
    nav_home: "← হোম",
    nav_ai: "AI সহায়ক",
    nav_section: "সেকশন অনুসন্ধান",
    nav_cases: "কেস লাইব্রেরি",
    nav_about: "আমাদের সম্পর্কে",
    nav_dark: "ডার্ক মোড",
    nav_light: "লাইট মোড",
    nav_language: "ভাষা",

    hero_title_line1: "সেকশন খুঁজুন।",
    hero_title_line2: "শুধু আইন নয়।",
    hero_sub: "বিধিসেতু আপনার পরিস্থিতি একজন জুনিয়র আইনজীবীর মতো বুঝে নেয় — তারপর আপনাকে সঠিক ভারতীয় ন্যায় সংহিতার ধারা, আইপিসি ম্যাপিং, এবং তার পেছনের নজির প্রদান করে।",
    tagline_marquee: "AI-চালিত ভারতীয় ন্যায় সংহিতা লিগাল অ্যাসিস্ট্যান্ট",
    search_placeholder: "আমার বাড়িওয়ালা আমার সিকিউরিটি ডিপোজিট ফেরত দিচ্ছে না।",
    btn_try_search: "অনুসন্ধান চেষ্টা করুন",
    btn_go_ai: "AI সহায়কে যান",
    btn_draft_fir: "এফআইআর ড্রাফট করুন",
    badge_new_free: "নতুন · ফ্রি",

    ticker_eyebrow: "ভারতীয় ন্যায় সংহিতা, ভারতীয় নাগরিক সুরক্ষা সংহিতা, এবং বাতিল আইপিসির বিরুদ্ধে ম্যাপ করা হয়েছে",
    ticker_bns: "ভারতীয় ন্যায় সংহিতা, ২০২৩",
    ticker_ipc: "ভারতীয় দণ্ডবিধি, ১৮৬০",
    ticker_bnss: "ভারতীয় নাগরিক সুরক্ষা সংহিতা",
    ticker_bsa: "ভারতীয় সাক্ষ্য অধিনিয়ম",
    ticker_count: "৩৫৮টি বিএনএস ধারা সূচিভুক্ত",

    statement_line1: "ধারা নম্বর মুখস্থ করা বন্ধ করুন।",
    statement_line2: "যা ঘটেছে তা বর্ণনা করা শুরু করুন।",

    platform_title: "আইনের উপর ভিত্তি করে, ইন্টারনেটের উপর নয়।",
    platform_text: "সাধারণ চ্যাটবটগুলি পুরনো আইপিসি ধারাকে নতুন কোডের সাথে মিশিয়ে নিঃশব্দে শাস্তি ভুল বলে দেয়। বিধিসেতুর রিট্রিভাল লেয়ার শুধুমাত্র বিএনএস ধারার পাঠ্য এবং তার অফিসিয়াল আইপিসি ম্যাপিংয়ের উপর ভিত্তি করে তৈরি, তাই এটি যে ধারা নম্বর দেয়, আদালত তা স্বীকৃতি দেবে।",
    platform_link: "সেকশন অনুসন্ধান চেষ্টা করুন →",
    stat_eyebrow: "সেকশন মিল নির্ভুলতা",
    stat_verify: "অফিসিয়াল আইপিসি → বিএনএস ম্যাপিং টেবিলের বিরুদ্ধে যাচাই করা হয়েছে",
    stat_generic: "সাধারণ চ্যাটবট",
    stat_keyword: "কিওয়ার্ড অনুসন্ধান",

    coverage_title: "এখনও আইপিসি ৩০২ খুঁজছেন?",
    coverage_text: "লক্ষ লক্ষ এফআইআর, রায় এবং পাঠ্যপুস্তক এখনও পুরনো আইপিসি উল্লেখ করে। আপনার জানা আইপিসি নম্বর টাইপ করুন, এবং বিধিসেতু এর বদলে আসা সঠিক বিএনএস ধারা দেখায়, শাস্তি বা পরিধিতে কী পরিবর্তন হয়েছে তার সাথে।",
    coverage_link: "আইপিসি → বিএনএস ম্যাপিং চেষ্টা করুন →",
    extract_eyebrow: "[ আইপিসি → বিএনএস ম্যাপিং ]",
    extract_ipc302: "আইপিসি ধারা ৩০২ — হত্যা",
    extract_ipc302_desc: "মৃত্যুদণ্ড, বা যাবজ্জীবন কারাদণ্ড, এবং জরিমানা দণ্ডনীয়।",
    extract_replaced: "→ বিএনএস ধারা ১০৩ দ্বারা প্রতিস্থাপিত।",
    extract_replaced2: "একই শাস্তি বহাল, অধ্যায় VI-এর অধীনে পুনঃনম্বরকৃত।",

    cases_title: "নজির, শুধু বিধান নয়।",
    cases_text: "শুধুমাত্র একটি ধারা নম্বর কখনোই একটি বাস্তব বিরোধ মেটায় না। বিধিসেতু প্রতিটি প্রাসঙ্গিক ধারাকে সুপ্রিম কোর্টের ঐতিহাসিক রায়ের সাথে যুক্ত করে, যা দেখায় এটি বাস্তবে কীভাবে প্রয়োগ করা হয়েছে — এফআইআর নিবন্ধনের জন্য ললিতা কুমারী, গ্রেপ্তার নির্দেশিকার জন্য অর্নেশ কুমার, এবং আরও অনেক।",
    cases_link: "কেস লাইব্রেরি ব্রাউজ করুন →",
    case_matched: "কেস মিলেছে",
    case_lalita_title: "ললিতা কুমারী বনাম উত্তরপ্রদেশ সরকার",
    case_lalita_desc: "জ্ঞাতব্য অপরাধের জন্য এফআইআর নিবন্ধন বাধ্যতামূলক — বিএনএস ধারা ১৭৩-এর জন্য উদ্ধৃত।",

    fir_badge: "● বিধিসেতুতে নতুন",
    fir_title: "\"কী ঘটেছে\" থেকে দাখিল করা এফআইআর পর্যন্ত — এক ধাপে।",
    fir_text: "অধিকাংশ মানুষের আইনি বক্তৃতা প্রয়োজন নেই, তাদের একটি ডকুমেন্ট প্রয়োজন। ঘটনাটি আপনার নিজের ভাষায় বর্ণনা করুন, এবং বিধিসেতু একটি গঠনমূলক এফআইআর-প্রস্তুত বিবরণ তৈরি করে: অভিযোগকারীর বিবরণ, সহজ ভাষায় বর্ণনা, শাস্তি সহ প্রযোজ্য বিএনএস ধারা, এবং দাখিল করার জন্য নিকটতম থানা — প্রিন্ট বা শেয়ার করার আগে সবকিছু সম্পাদনাযোগ্য।",
    fir_link_draft: "আপনার এফআইআর ড্রাফট করুন →",
    fir_link_police: "নিকটতম থানা খুঁজুন →",
    fir_doc_head: "এফআইআর ড্রাফট প্রিভিউ",
    fir_doc_auto: "অটো-জেনারেটেড",
    fir_row_nature: "অভিযোগের প্রকৃতি",
    fir_row_nature_v: "দুই চাকার গাড়ি চুরি",
    fir_row_datetime: "ঘটনার তারিখ ও সময়",
    fir_row_datetime_v: "১৪ জুন ২০২৬, রাত ~৯:৪০",
    fir_row_place: "ঘটনাস্থল",
    fir_row_place_v: "বাসভবনের বাইরে, পোল্লাচি",
    fir_row_section: "প্রযোজ্য ধারা",
    fir_row_section_tag: "চুরি",
    fir_row_station: "প্রস্তাবিত থানা",
    fir_row_station_v: "নিকটতম এলাকা, স্বয়ংক্রিয়ভাবে চিহ্নিত",
    fir_row_status: "অবস্থা",
    fir_row_status_v: "পর্যালোচনার জন্য প্রস্তুত",

    cta_title1: "আপনার মামলা অপেক্ষা করে না",
    cta_title2: "অফিসের সময়ের জন্য।",
    cta_text: "বিধিসেতুকে সহজ ইংরেজি, তামিল, বা হিন্দিতে জিজ্ঞাসা করুন — এটি পরিস্থিতি বুঝে আইন নির্দেশ করে।",
    cta_btn_open: "AI সহায়ক খুলুন",
    cta_btn_fir: "এফআইআর ড্রাফট করুন",

    foot_ai: "AI সহায়ক",
    foot_section: "সেকশন অনুসন্ধান",
    foot_cases: "কেস লাইব্রেরি",
    foot_about: "আমাদের সম্পর্কে",
    foot_note: "বিধিসেতু একটি শিক্ষামূলক আইনি গবেষণা টুল এবং এটি আইনি পরামর্শ নয়। আপনার নির্দিষ্ট পরিস্থিতির জন্য সর্বদা একজন যোগ্য আইনজীবীর পরামর্শ নিন।",

    app_title: "বিধিসেতু",
    app_tagline: "AI-চালিত ভারতীয় ন্যায় সংহিতা লিগাল অ্যাসিস্ট্যান্ট",

    crisis_title: "🚨 আমরা লক্ষ্য করেছি আপনার বার্তায় একটি গুরুতর পরিস্থিতি জড়িত থাকতে পারে",
    crisis_sub: "আপনি বা আপনার পরিচিত কেউ বিপদে বা সংকটে থাকলে, অনুগ্রহ করে অবিলম্বে যোগাযোগ করুন:",
    crisis_police: "পুলিশ জরুরি",
    crisis_women: "মহিলা হেল্পলাইন",
    crisis_child: "শিশু হেল্পলাইন (চাইল্ডলাইন)",
    crisis_mental: "মানসিক স্বাস্থ্য (iCall)",
    crisis_vandrevala: "ভান্দ্রেওয়ালা ফাউন্ডেশন",
    crisis_domestic: "ঘরোয়া সহিংসতা",
    crisis_find_police: "📍 নিকটতম থানা খুঁজুন",

    ai_input_placeholder: "একটি আইনি প্রশ্ন জিজ্ঞাসা করুন...",
    btn_send: "পাঠান",
    chip_attack: "কেউ আমাকে আক্রমণ করেছে",
    chip_theft: "প্রতিবেশী দ্বারা চুরি",
    chip_threat: "অনলাইন হুমকি",
    chip_clear: "🗑 চ্যাট পরিষ্কার করুন",
    ai_loading: "বিএনএস ধারা বিশ্লেষণ করা হচ্ছে...",
    err_api: "API-এর সাথে সংযোগে ত্রুটি। সার্ভার চলছে তা নিশ্চিত করুন।",

    section_placeholder: "বিএনএস ৩০৩ বা আইপিসি ৩০২ বা আইপিসি ৪৯৮A লিখুন...",
    btn_lookup: "সেকশন খুঁজুন",
    section_loading: "সেকশন আনা হচ্ছে...",
    section_not_found: "সেকশন পাওয়া যায়নি।",
    err_api_section: "API-এর সাথে সংযোগে ত্রুটি।",
    ipc_not_found: "❌ আইপিসি ধারা {num} আমাদের ম্যাপিং ডেটাবেসে পাওয়া যায়নি।",
    keywords_label: "কীওয়ার্ড:",
    punishment_label: "⚖️ শাস্তি:",
    bns_details_missing: "বিএনএস ধারার বিবরণ ডেটাবেসে পাওয়া যায়নি।",
    no_punishment: "কোনো সরাসরি শাস্তি উল্লেখ নেই",
    change_notes_label: "পরিবর্তনের নোট:",
    details_unavailable: "বিবরণ উপলব্ধ নয়",

    about_h1: "বিধিসেতু সম্পর্কে",
    about_p1: "বিধিসেতু একটি AI-চালিত আইনি সহায়ক যা ব্যবহারকারীদের ভারতীয় ন্যায় সংহিতা (বিএনএস) - ভারতের অপরাধ আইন কোড - বুঝতে সাহায্য করার জন্য ডিজাইন করা হয়েছে।",
    about_h2: "আমরা যা করি",
    about_p2: "আমরা তিনটি মূল বৈশিষ্ট্য নিয়ে আইনি গবেষণার জন্য একটি সম্পূর্ণ প্ল্যাটফর্ম প্রদান করি:",
    about_li1_title: "AI সহায়ক:",
    about_li1: "আপনার আইনি পরিস্থিতি বর্ণনা করুন এবং AI-চালিত ব্যাখ্যা সহ প্রাসঙ্গিক বিএনএস ধারা পান",
    about_li2_title: "সেকশন অনুসন্ধান:",
    about_li2: "বিএনএস ধারা অনুসন্ধান করুন বা তাদের বিএনএস সমতুল্য খুঁজে পেতে পুরনো আইপিসি ধারা লিখুন",
    about_li3_title: "কেস লাইব্রেরি:",
    about_li3: "ঐতিহাসিক আইনি মামলা এবং বিচারিক নজির অন্বেষণ করুন",
    about_h3: "আমাদের লক্ষ্য",
    about_p3: "আইনি জ্ঞানকে গণতান্ত্রিক করা এবং ভারতীয় অপরাধ আইনকে সবার জন্য সহজলভ্য করা।",
    about_h4: "প্রযুক্তি",
    about_p4: "সিম্যান্টিক অনুসন্ধান, AI ব্যাখ্যা এবং অবস্থান পরিষেবার জন্য বিধিসেতু RAG, ChromaDB ভেক্টর ডেটাবেস, সেন্টেন্স ট্রান্সফর্মার, একটি লোকাল LLM, এবং গুগল ম্যাপস ব্যবহার করে।",
    about_h5: "দাবিত্যাগ",
    about_p5: "বিধিসেতু শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে। কোনো আইনি সিদ্ধান্ত নেওয়ার আগে সর্বদা একজন যোগ্য আইনি পেশাদারের পরামর্শ নিন।",

    case_verdict_label: "রায়:"
  },

  mr: {
    nav_platform: "प्लॅटफॉर्म",
    nav_coverage: "कव्हरेज",
    nav_fir: "एफआयआर ड्राफ्ट",
    nav_open_app: "अॅप उघडा",
    nav_try_app: "वेब अॅप वापरून पाहा",
    nav_home: "← मुख्यपृष्ठ",
    nav_ai: "एआय सहाय्यक",
    nav_section: "कलम शोध",
    nav_cases: "केस लायब्ररी",
    nav_about: "आमच्याबद्दल",
    nav_dark: "डार्क मोड",
    nav_light: "लाइट मोड",
    nav_language: "भाषा",

    hero_title_line1: "कलम शोधा.",
    hero_title_line2: "केवळ कायदा नाही.",
    hero_sub: "विधिसेतू तुमची परिस्थिती एका कनिष्ठ वकिलासारखी समजून घेते — आणि नंतर तुम्हाला नेमकी भारतीय न्याय संहिता कलमे, आयपीसी मॅपिंग, आणि त्यामागील पूर्वदृष्टांत प्रदान करते.",
    tagline_marquee: "एआय-चालित भारतीय न्याय संहिता कायदेशीर सहाय्यक",
    search_placeholder: "माझ्या घरमालकाने माझी सिक्युरिटी डिपॉझिट परत केली नाही.",
    btn_try_search: "शोध वापरून पाहा",
    btn_go_ai: "एआय सहाय्यकाकडे जा",
    btn_draft_fir: "एफआयआर ड्राफ्ट करा",
    badge_new_free: "नवीन · मोफत",

    ticker_eyebrow: "भारतीय न्याय संहिता, भारतीय नागरिक सुरक्षा संहिता, आणि रद्द केलेल्या आयपीसीच्या तुलनेत मॅप केलेले",
    ticker_bns: "भारतीय न्याय संहिता, २०२३",
    ticker_ipc: "भारतीय दंड संहिता, १८६०",
    ticker_bnss: "भारतीय नागरिक सुरक्षा संहिता",
    ticker_bsa: "भारतीय साक्ष्य अधिनियम",
    ticker_count: "३५८ बीएनएस कलमे अनुक्रमित",

    statement_line1: "कलम क्रमांक लक्षात ठेवणे थांबवा.",
    statement_line2: "काय घडले ते वर्णन करायला सुरुवात करा.",

    platform_title: "कायद्यावर आधारित, इंटरनेटवर नाही.",
    platform_text: "सामान्य चॅटबॉट्स जुन्या आयपीसी कलमांना नवीन कोडसोबत मिसळतात आणि शांतपणे शिक्षा चुकीची सांगतात. विधिसेतूची रिट्रीव्हल यंत्रणा केवळ बीएनएस कलमाचा मजकूर आणि त्याच्या अधिकृत आयपीसी मॅपिंगवर आधारित आहे, त्यामुळे ते देणारा कलम क्रमांक न्यायालय मान्य करेल असाच असतो.",
    platform_link: "कलम शोध वापरून पाहा →",
    stat_eyebrow: "कलम जुळणी अचूकता",
    stat_verify: "अधिकृत आयपीसी → बीएनएस मॅपिंग तक्त्याच्या आधारे सत्यापित",
    stat_generic: "सामान्य चॅटबॉट",
    stat_keyword: "कीवर्ड शोध",

    coverage_title: "अजूनही आयपीसी ३०२ शोधत आहात?",
    coverage_text: "लाखो एफआयआर, निकाल आणि पाठ्यपुस्तके अजूनही जुन्या आयपीसीचा संदर्भ देतात. तुम्हाला माहीत असलेला आयपीसी क्रमांक टाइप करा, आणि विधिसेतू त्याची जागा घेतलेले नेमके बीएनएस कलम, शिक्षा किंवा व्याप्तीमध्ये काय बदलले यासह दाखवते.",
    coverage_link: "आयपीसी → बीएनएस मॅपिंग वापरून पाहा →",
    extract_eyebrow: "[ आयपीसी → बीएनएस मॅपिंग ]",
    extract_ipc302: "आयपीसी कलम ३०२ — खून",
    extract_ipc302_desc: "मृत्युदंड, किंवा जन्मठेपेची शिक्षा, आणि दंडास पात्र.",
    extract_replaced: "→ बीएनएस कलम १०३ ने बदलले.",
    extract_replaced2: "तीच शिक्षा कायम, प्रकरण VI अंतर्गत पुनःक्रमांकित.",

    cases_title: "पूर्वदृष्टांत, केवळ तरतुदी नाहीत.",
    cases_text: "केवळ एक कलम क्रमांक खऱ्या वादाचे निराकरण करत नाही. विधिसेतू प्रत्येक संबंधित कलमाला सर्वोच्च न्यायालयाच्या ऐतिहासिक निकालांसोबत जोडते, जे दाखवतात की ते प्रत्यक्षात कसे लागू केले गेले — एफआयआर नोंदणीसाठी ललिता कुमारी, अटक मार्गदर्शक तत्त्वांसाठी अर्नेश कुमार, आणि बरेच काही.",
    cases_link: "केस लायब्ररी पाहा →",
    case_matched: "केस जुळले",
    case_lalita_title: "ललिता कुमारी विरुद्ध उत्तर प्रदेश सरकार",
    case_lalita_desc: "दखलपात्र गुन्ह्यांसाठी एफआयआर नोंदणी बंधनकारक आहे — बीएनएस कलम १७३ साठी उद्धृत.",

    fir_badge: "● विधिसेतूवर नवीन",
    fir_title: "\"काय घडले\" पासून दाखल केलेल्या एफआयआरपर्यंत — एका टप्प्यात.",
    fir_text: "बहुतेक लोकांना कायद्याचे व्याख्यान नको असते, त्यांना एक दस्तऐवज हवा असतो. घटनेचे वर्णन तुमच्या स्वतःच्या शब्दांत करा, आणि विधिसेतू एक संरचित एफआयआर-तयार निवेदन तयार करते: तक्रारदाराचे तपशील, सोप्या भाषेतील वर्णन, शिक्षेसह लागू बीएनएस कलमे, आणि दाखल करण्यासाठी जवळचे पोलीस ठाणे — प्रिंट किंवा शेअर करण्यापूर्वी सर्व काही संपादनयोग्य.",
    fir_link_draft: "तुमचा एफआयआर ड्राफ्ट करा →",
    fir_link_police: "जवळचे पोलीस ठाणे शोधा →",
    fir_doc_head: "एफआयआर ड्राफ्ट पूर्वावलोकन",
    fir_doc_auto: "स्वयं-तयार",
    fir_row_nature: "तक्रारीचे स्वरूप",
    fir_row_nature_v: "दुचाकी वाहन चोरी",
    fir_row_datetime: "घटनेची तारीख आणि वेळ",
    fir_row_datetime_v: "१४ जून २०२६, रात्री ~९:४०",
    fir_row_place: "घटनास्थळ",
    fir_row_place_v: "निवासस्थानाबाहेर, पोल्लाची",
    fir_row_section: "लागू कलम",
    fir_row_section_tag: "चोरी",
    fir_row_station: "सुचवलेले ठाणे",
    fir_row_station_v: "जवळचे अधिकारक्षेत्र, स्वयं-शोधलेले",
    fir_row_status: "स्थिती",
    fir_row_status_v: "पुनरावलोकनासाठी तयार",

    cta_title1: "तुमचे प्रकरण वाट पाहत नाही",
    cta_title2: "ऑफिसच्या वेळेसाठी.",
    cta_text: "विधिसेतूला सोप्या इंग्रजी, तमिळ, किंवा हिंदीमध्ये विचारा — ते परिस्थिती समजून घेते आणि कायद्याकडे निर्देश करते.",
    cta_btn_open: "एआय सहाय्यक उघडा",
    cta_btn_fir: "एफआयआर ड्राफ्ट करा",

    foot_ai: "एआय सहाय्यक",
    foot_section: "कलम शोध",
    foot_cases: "केस लायब्ररी",
    foot_about: "आमच्याबद्दल",
    foot_note: "विधिसेतू हे एक शैक्षणिक कायदेशीर संशोधन साधन आहे आणि ते कायदेशीर सल्ला नाही. तुमच्या विशिष्ट परिस्थितीसाठी नेहमी पात्र वकिलाचा सल्ला घ्या.",

    app_title: "विधिसेतू",
    app_tagline: "एआय-चालित भारतीय न्याय संहिता कायदेशीर सहाय्यक",

    crisis_title: "🚨 आम्हाला लक्षात आले की तुमच्या संदेशात गंभीर परिस्थिती असू शकते",
    crisis_sub: "तुम्ही किंवा तुमच्या ओळखीचे कोणीतरी धोक्यात किंवा त्रासात असल्यास, कृपया लगेच संपर्क साधा:",
    crisis_police: "पोलीस आपत्कालीन",
    crisis_women: "महिला हेल्पलाइन",
    crisis_child: "बाल हेल्पलाइन (चाइल्डलाइन)",
    crisis_mental: "मानसिक आरोग्य (iCall)",
    crisis_vandrevala: "वांद्रेवाला फाउंडेशन",
    crisis_domestic: "घरगुती हिंसा",
    crisis_find_police: "📍 जवळचे पोलीस ठाणे शोधा",

    ai_input_placeholder: "कायदेशीर प्रश्न विचारा...",
    btn_send: "पाठवा",
    chip_attack: "कोणीतरी माझ्यावर हल्ला केला",
    chip_theft: "शेजाऱ्याने चोरी केली",
    chip_threat: "ऑनलाइन धमकी",
    chip_clear: "🗑 चॅट साफ करा",
    ai_loading: "बीएनएस कलमांचे विश्लेषण करत आहे...",
    err_api: "API शी कनेक्ट करताना त्रुटी. सर्व्हर सुरू आहे याची खात्री करा.",

    section_placeholder: "बीएनएस ३०३ किंवा आयपीसी ३०२ किंवा आयपीसी ४९८A प्रविष्ट करा...",
    btn_lookup: "कलम शोधा",
    section_loading: "कलम मिळवत आहे...",
    section_not_found: "कलम सापडले नाही.",
    err_api_section: "API शी कनेक्ट करताना त्रुटी.",
    ipc_not_found: "❌ आयपीसी कलम {num} आमच्या मॅपिंग डेटाबेसमध्ये सापडले नाही.",
    keywords_label: "कीवर्ड्स:",
    punishment_label: "⚖️ शिक्षा:",
    bns_details_missing: "बीएनएस कलमाचे तपशील डेटाबेसमध्ये सापडले नाहीत.",
    no_punishment: "कोणतीही थेट शिक्षा नमूद नाही",
    change_notes_label: "बदल नोंदी:",
    details_unavailable: "तपशील उपलब्ध नाहीत",

    about_h1: "विधिसेतू बद्दल",
    about_p1: "विधिसेतू हे एक एआय-चालित कायदेशीर सहाय्यक आहे जे वापरकर्त्यांना भारतीय न्याय संहिता (बीएनएस) - भारताची फौजदारी कायदा संहिता - समजून घेण्यास मदत करण्यासाठी डिझाइन केलेले आहे.",
    about_h2: "आम्ही काय करतो",
    about_p2: "आम्ही तीन मुख्य वैशिष्ट्यांसह कायदेशीर संशोधनासाठी एक सर्वसमावेशक व्यासपीठ प्रदान करतो:",
    about_li1_title: "एआय सहाय्यक:",
    about_li1: "तुमच्या कायदेशीर परिस्थितीचे वर्णन करा आणि एआय-चालित स्पष्टीकरणांसह संबंधित बीएनएस कलमे मिळवा",
    about_li2_title: "कलम शोध:",
    about_li2: "बीएनएस कलमे शोधा किंवा त्यांचे बीएनएस समतुल्य शोधण्यासाठी जुने आयपीसी कलमे प्रविष्ट करा",
    about_li3_title: "केस लायब्ररी:",
    about_li3: "महत्त्वपूर्ण कायदेशीर प्रकरणे आणि न्यायिक पूर्वदृष्टांत एक्सप्लोर करा",
    about_h3: "आमचे ध्येय",
    about_p3: "कायदेशीर ज्ञानाचे लोकशाहीकरण करणे आणि भारतीय फौजदारी कायदा सर्वांसाठी सुलभ करणे.",
    about_h4: "तंत्रज्ञान",
    about_p4: "सिमेंटिक शोध, एआय स्पष्टीकरणे आणि स्थान सेवांसाठी विधिसेतू RAG, ChromaDB व्हेक्टर डेटाबेस, सेंटेन्स ट्रान्सफॉर्मर्स, एक लोकल LLM, आणि गुगल मॅप्स वापरते.",
    about_h5: "अस्वीकरण",
    about_p5: "विधिसेतू केवळ शैक्षणिक उद्देशांसाठी आहे. कोणताही कायदेशीर निर्णय घेण्यापूर्वी नेहमी पात्र कायदेशीर तज्ञाचा सल्ला घ्या.",

    case_verdict_label: "निकाल:"
  }
};

/* ============================================================
   HTML variants (with <mark> emphasis) for paragraphs that use
   inline highlighting in the original English copy.
   Format: plain text with **bold-like** markers replaced by <mark>.
   We reuse the [[ ]] delimiter for the highlighted span.
   ============================================================ */
const I18N_HTML_SEGMENTS = {
  en: {
    platform_text_html: "General-purpose chatbots blend old IPC sections with the new code and quietly get the punishment wrong. Vidhisethu's retrieval layer is grounded [[only in the BNS section text and its official IPC mapping]], so the section number it gives you is the section number a court will recognise.",
    coverage_text_html: "Millions of FIRs, judgments, and textbooks still cite the old IPC. Type the IPC number you know, and Vidhisethu surfaces [[the exact BNS section that replaced it]], side by side with what changed in punishment or scope.",
    cases_text_html: "A section number alone rarely settles a real dispute. Vidhisethu pairs every relevant section with [[landmark Supreme Court rulings]] that show how it has actually been applied — Lalita Kumari on FIR registration, Arnesh Kumar on arrest guidelines, and more.",
    fir_text_html: "Most people don't need a law lecture, they need a document. Describe the incident in your own words and Vidhisethu drafts a [[structured FIR-ready statement]]: complainant details, a plain-English narration, the applicable BNS sections with punishment, and the nearest police station to file it at — all editable before you print or share it."
  },
  hi: {
    platform_text_html: "सामान्य चैटबॉट पुरानी आईपीसी धाराओं को नए कोड के साथ मिला देते हैं और चुपचाप सज़ा गलत बता देते हैं। विधिसेतु की रिट्रीवल प्रणाली [[केवल बीएनएस धारा के पाठ और उसकी आधिकारिक आईपीसी मैपिंग पर]] आधारित है, इसलिए यह जो धारा संख्या आपको देती है, वही न्यायालय में मान्य होगी।",
    coverage_text_html: "लाखों एफआईआर, फैसले और किताबें अभी भी पुरानी आईपीसी का हवाला देती हैं। जो आईपीसी नंबर आप जानते हैं वह टाइप करें, और विधिसेतु [[उसकी जगह लेने वाली सटीक बीएनएस धारा]] दिखाता है, साथ ही सज़ा या दायरे में हुए बदलाव भी।",
    cases_text_html: "केवल एक धारा संख्या शायद ही किसी वास्तविक विवाद को सुलझाती है। विधिसेतु हर संबंधित धारा को [[सर्वोच्च न्यायालय के ऐतिहासिक फैसलों]] के साथ जोड़ता है, जो दिखाते हैं कि इसे वास्तव में कैसे लागू किया गया — एफआईआर पंजीकरण पर ललिता कुमारी, गिरफ्तारी मार्गदर्शन पर अरनेश कुमार, और अधिक।",
    fir_text_html: "अधिकतर लोगों को कानून का व्याख्यान नहीं, एक दस्तावेज़ चाहिए। घटना का वर्णन अपने शब्दों में करें और विधिसेतु [[एक संरचित एफआईआर-तैयार बयान]] तैयार करता है: शिकायतकर्ता का विवरण, सरल भाषा में वृत्तांत, सज़ा के साथ लागू बीएनएस धाराएं, और दाखिल करने के लिए नज़दीकी पुलिस स्टेशन — प्रिंट या साझा करने से पहले सब कुछ संपादन योग्य।"
  },
  ta: {
    platform_text_html: "பொதுவான சாட்போட்கள் பழைய ஐபிசி பிரிவுகளை புதிய சட்டத்துடன் கலந்து, அறியாமலே தண்டனையை தவறாகக் கூறுகின்றன. விதிசேதுவின் தேடல் அமைப்பு [[பிஎன்எஸ் பிரிவு உரை மற்றும் அதன் அதிகாரப்பூர்வ ஐபிசி மேப்பிங்கை மட்டுமே]] அடிப்படையாகக் கொண்டுள்ளது, எனவே அது தரும் பிரிவு எண் நீதிமன்றம் ஏற்றுக்கொள்ளும் எண்ணாக இருக்கும்.",
    coverage_text_html: "மில்லியன் கணக்கான எஃப்ஐஆர்கள், தீர்ப்புகள் மற்றும் பாடநூல்கள் இன்னும் பழைய ஐபிசியைக் குறிப்பிடுகின்றன. நீங்கள் அறிந்த ஐபிசி எண்ணை உள்ளிடுங்கள், விதிசேது [[அதை மாற்றிய சரியான பிஎன்எஸ் பிரிவையும்]], தண்டனை அல்லது வீச்சில் என்ன மாற்றம் ஏற்பட்டது என்பதையும் காட்டுகிறது.",
    cases_text_html: "ஒரு பிரிவு எண் மட்டும் ஒரு உண்மையான சர்ச்சையை அரிதாகவே தீர்க்கும். விதிசேது ஒவ்வொரு தொடர்புடைய பிரிவையும் [[உச்ச நீதிமன்றத்தின் முக்கிய தீர்ப்புகளுடன்]] இணைக்கிறது, அவை அது நடைமுறையில் எவ்வாறு பயன்படுத்தப்பட்டது என்பதைக் காட்டுகின்றன — எஃப்ஐஆர் பதிவுக்கான லலிதா குமாரி, கைது வழிகாட்டுதல்களுக்கான அர்னேஷ் குமார், மற்றும் பல.",
    fir_text_html: "பெரும்பாலான மக்களுக்கு சட்ட விரிவுரை தேவையில்லை, அவர்களுக்கு ஒரு ஆவணம் தேவை. சம்பவத்தை உங்கள் சொற்களில் விவரிக்கவும், விதிசேது [[ஒரு கட்டமைக்கப்பட்ட எஃப்ஐஆர்-தயார் அறிக்கையை]] வரைகிறது: புகார்தாரர் விவரங்கள், எளிய மொழி விளக்கம், தண்டனையுடன் பொருந்தும் பிஎன்எஸ் பிரிவுகள், மற்றும் தாக்கல் செய்ய அருகிலுள்ள காவல் நிலையம் — அச்சிடுவதற்கு அல்லது பகிர்வதற்கு முன் அனைத்தும் திருத்தக்கூடியவை."
  },
  te: {
    platform_text_html: "సాధారణ చాట్‌బాట్‌లు పాత ఐపిసి సెక్షన్లను కొత్త కోడ్‌తో కలిపి, నిశ్శబ్దంగా శిక్షను తప్పుగా చెబుతాయి. విధిసేతు యొక్క రిట్రీవల్ లేయర్ [[బీఎన్ఎస్ సెక్షన్ టెక్స్ట్ మరియు దాని అధికారిక ఐపిసి మ్యాపింగ్‌పై మాత్రమే]] ఆధారపడింది, కాబట్టి అది ఇచ్చే సెక్షన్ నంబర్ న్యాయస్థానం గుర్తించే నంబర్‌గా ఉంటుంది.",
    coverage_text_html: "మిలియన్ల FIRలు, తీర్పులు మరియు పాఠ్యపుస్తకాలు ఇప్పటికీ పాత ఐపిసిని ప్రస్తావిస్తాయి. మీకు తెలిసిన ఐపిసి నంబర్‌ను టైప్ చేయండి, విధిసేతు [[దాన్ని భర్తీ చేసిన ఖచ్చితమైన బీఎన్ఎస్ సెక్షన్‌ను]], శిక్ష లేదా పరిధిలో మారిన అంశాలతో పాటు చూపిస్తుంది.",
    cases_text_html: "ఒక సెక్షన్ నంబర్ మాత్రమే ఒక వాస్తవ వివాదాన్ని పరిష్కరించడం చాలా అరుదు. విధిసేతు ప్రతి సంబంధిత సెక్షన్‌ను [[సుప్రీం కోర్టు యొక్క ముఖ్యమైన తీర్పులతో]] జతచేస్తుంది, అవి దాన్ని ఆచరణలో ఎలా అన్వయించారో చూపిస్తాయి — FIR నమోదు కోసం లలితా కుమారి, అరెస్టు మార్గదర్శకాల కోసం అర్నేష్ కుమార్, మరియు మరిన్ని.",
    fir_text_html: "చాలా మందికి చట్టం పాఠం అవసరం లేదు, వారికి ఒక పత్రం అవసరం. సంఘటనను మీ స్వంత పదాలలో వివరించండి, విధిసేతు [[ఒక నిర్మాణాత్మక FIR-సిద్ధంగా ఉన్న ప్రకటనను]] రూపొందిస్తుంది: ఫిర్యాదుదారు వివరాలు, సాదాసీదా భాషలో వివరణ, శిక్షతో సంబంధిత బీఎన్ఎస్ సెక్షన్లు, మరియు దాఖలు చేయడానికి సమీప పోలీస్ స్టేషన్ — ప్రింట్ చేయడానికి లేదా షేర్ చేయడానికి ముందు అన్నీ సవరించదగినవి."
  },
  kn: {
    platform_text_html: "ಸಾಮಾನ್ಯ ಚಾಟ್‌ಬಾಟ್‌ಗಳು ಹಳೆಯ ಐಪಿಸಿ ವಿಭಾಗಗಳನ್ನು ಹೊಸ ಕೋಡ್‌ನೊಂದಿಗೆ ಮಿಶ್ರಣ ಮಾಡಿ, ಮೌನವಾಗಿ ಶಿಕ್ಷೆಯನ್ನು ತಪ್ಪಾಗಿ ಹೇಳುತ್ತವೆ. ವಿಧಿಸೇತುವಿನ ಮರುಸ್ಥಾಪನೆ ಪದರವು [[ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗದ ಪಠ್ಯ ಮತ್ತು ಅದರ ಅಧಿಕೃತ ಐಪಿಸಿ ಮ್ಯಾಪಿಂಗ್‌ನಲ್ಲಿ ಮಾತ್ರ]] ಆಧಾರಿತವಾಗಿದೆ, ಆದ್ದರಿಂದ ಅದು ನಿಮಗೆ ನೀಡುವ ವಿಭಾಗ ಸಂಖ್ಯೆ ನ್ಯಾಯಾಲಯ ಗುರುತಿಸುವ ಸಂಖ್ಯೆಯಾಗಿರುತ್ತದೆ.",
    coverage_text_html: "ಲಕ್ಷಾಂತರ ಎಫ್‌ಐಆರ್‌ಗಳು, ತೀರ್ಪುಗಳು ಮತ್ತು ಪಠ್ಯಪುಸ್ತಕಗಳು ಇನ್ನೂ ಹಳೆಯ ಐಪಿಸಿಯನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತವೆ. ನಿಮಗೆ ತಿಳಿದಿರುವ ಐಪಿಸಿ ಸಂಖ್ಯೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ, ವಿಧಿಸೇತು [[ಅದನ್ನು ಬದಲಾಯಿಸಿದ ನಿಖರವಾದ ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗವನ್ನು]], ಶಿಕ್ಷೆ ಅಥವಾ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಏನು ಬದಲಾಗಿದೆ ಎಂಬುದರೊಂದಿಗೆ ತೋರಿಸುತ್ತದೆ.",
    cases_text_html: "ಒಂದು ವಿಭಾಗ ಸಂಖ್ಯೆ ಮಾತ್ರ ನಿಜವಾದ ವಿವಾದವನ್ನು ವಿರಳವಾಗಿ ಬಗೆಹರಿಸುತ್ತದೆ. ವಿಧಿಸೇತು ಪ್ರತಿ ಸಂಬಂಧಿತ ವಿಭಾಗವನ್ನು [[ಸುಪ್ರೀಂ ಕೋರ್ಟ್‌ನ ಮಹತ್ವದ ತೀರ್ಪುಗಳೊಂದಿಗೆ]] ಜೋಡಿಸುತ್ತದೆ, ಅದು ಪ್ರಾಯೋಗಿಕವಾಗಿ ಹೇಗೆ ಅನ್ವಯಿಸಲ್ಪಟ್ಟಿದೆ ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತದೆ — ಎಫ್‌ಐಆರ್ ನೋಂದಣಿಗಾಗಿ ಲಲಿತಾ ಕುಮಾರಿ, ಬಂಧನ ಮಾರ್ಗಸೂಚಿಗಳಿಗಾಗಿ ಅರ್ನೇಶ್ ಕುಮಾರ್, ಮತ್ತು ಇನ್ನೂ ಹಲವು.",
    fir_text_html: "ಹೆಚ್ಚಿನ ಜನರಿಗೆ ಕಾನೂನು ಪಾಠ ಬೇಕಿಲ್ಲ, ಅವರಿಗೆ ಒಂದು ದಾಖಲೆ ಬೇಕು. ಘಟನೆಯನ್ನು ನಿಮ್ಮ ಸ್ವಂತ ಮಾತುಗಳಲ್ಲಿ ವಿವರಿಸಿ, ಮತ್ತು ವಿಧಿಸೇತು [[ಒಂದು ರಚನಾತ್ಮಕ ಎಫ್‌ಐಆರ್-ಸಿದ್ಧ ಹೇಳಿಕೆಯನ್ನು]] ತಯಾರಿಸುತ್ತದೆ: ದೂರುದಾರರ ವಿವರಗಳು, ಸರಳ ಭಾಷೆಯ ವಿವರಣೆ, ಶಿಕ್ಷೆಯೊಂದಿಗೆ ಅನ್ವಯವಾಗುವ ಬಿಎನ್‌ಎಸ್ ವಿಭಾಗಗಳು, ಮತ್ತು ಸಲ್ಲಿಸಲು ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆ — ಮುದ್ರಿಸುವ ಅಥವಾ ಹಂಚಿಕೊಳ್ಳುವ ಮೊದಲು ಎಲ್ಲವೂ ಸಂಪಾದಿಸಬಹುದಾದದ್ದು."
  },
  ml: {
    platform_text_html: "സാധാരണ ചാറ്റ്ബോട്ടുകൾ പഴയ ഐപിസി സെക്ഷനുകൾ പുതിയ കോഡുമായി കൂട്ടിക്കുഴച്ച്, നിശ്ശബ്ദമായി ശിക്ഷ തെറ്റായി പറയുന്നു. വിധിസേതുവിന്റെ റിട്രീവൽ ലെയർ [[ബിഎൻഎസ് സെക്ഷൻ ടെക്സ്റ്റിലും അതിന്റെ ഔദ്യോഗിക ഐപിസി മാപ്പിംഗിലും മാത്രം]] അധിഷ്ഠിതമാണ്, അതിനാൽ അത് നൽകുന്ന സെക്ഷൻ നമ്പർ കോടതി അംഗീകരിക്കുന്ന നമ്പറായിരിക്കും.",
    coverage_text_html: "ദശലക്ഷക്കണക്കിന് എഫ്ഐആറുകളും വിധിന്യായങ്ങളും പാഠപുസ്തകങ്ങളും ഇപ്പോഴും പഴയ ഐപിസിയെ പരാമർശിക്കുന്നു. നിങ്ങൾക്കറിയാവുന്ന ഐപിസി നമ്പർ ടൈപ്പ് ചെയ്യുക, വിധിസേതു [[അതിനെ മാറ്റിസ്ഥാപിച്ച കൃത്യമായ ബിഎൻഎസ് സെക്ഷൻ]], ശിക്ഷയിലോ പരിധിയിലോ വന്ന മാറ്റങ്ങൾക്കൊപ്പം കാണിക്കുന്നു.",
    cases_text_html: "ഒരു സെക്ഷൻ നമ്പർ മാത്രം ഒരു യഥാർത്ഥ തർക്കം പരിഹരിക്കുന്നത് അപൂർവ്വമാണ്. വിധിസേതു ഓരോ ബന്ധപ്പെട്ട സെക്ഷനെയും [[സുപ്രീം കോടതിയുടെ സുപ്രധാന വിധിന്യായങ്ങളുമായി]] ജോടിയാക്കുന്നു, അവ പ്രായോഗികമായി എങ്ങനെ പ്രയോഗിച്ചു എന്ന് കാണിക്കുന്നു — എഫ്ഐആർ രജിസ്ട്രേഷനായി ലളിത കുമാരി, അറസ്റ്റ് മാർഗ്ഗനിർദ്ദേശങ്ങൾക്കായി അർനേഷ് കുമാർ, കൂടാതെ കൂടുതൽ.",
    fir_text_html: "ഭൂരിഭാഗം ആളുകൾക്കും ഒരു നിയമ പ്രഭാഷണം ആവശ്യമില്ല, അവർക്ക് ഒരു ഡോക്യുമെന്റ് ആവശ്യമാണ്. സംഭവം നിങ്ങളുടെ സ്വന്തം വാക്കുകളിൽ വിവരിക്കുക, വിധിസേതു [[ഒരു ഘടനാപരമായ എഫ്ഐആർ-തയ്യാർ പ്രസ്താവന]] തയ്യാറാക്കും: പരാതിക്കാരന്റെ വിശദാംശങ്ങൾ, ലളിതമായ ഭാഷയിലുള്ള വിവരണം, ശിക്ഷയോടെ ബന്ധപ്പെട്ട ബിഎൻഎസ് സെക്ഷനുകൾ, ഫയൽ ചെയ്യാനുള്ള ഏറ്റവും അടുത്ത പോലീസ് സ്റ്റേഷൻ — പ്രിന്റ് ചെയ്യുന്നതിനോ പങ്കിടുന്നതിനോ മുമ്പ് എല്ലാം എഡിറ്റ് ചെയ്യാവുന്നതാണ്."
  },
  bn: {
    platform_text_html: "সাধারণ চ্যাটবটগুলি পুরনো আইপিসি ধারাকে নতুন কোডের সাথে মিশিয়ে নিঃশব্দে শাস্তি ভুল বলে দেয়। বিধিসেতুর রিট্রিভাল লেয়ার [[শুধুমাত্র বিএনএস ধারার পাঠ্য এবং তার অফিসিয়াল আইপিসি ম্যাপিংয়ের উপর]] ভিত্তি করে তৈরি, তাই এটি যে ধারা নম্বর দেয়, আদালত তা স্বীকৃতি দেবে।",
    coverage_text_html: "লক্ষ লক্ষ এফআইআর, রায় এবং পাঠ্যপুস্তক এখনও পুরনো আইপিসি উল্লেখ করে। আপনার জানা আইপিসি নম্বর টাইপ করুন, এবং বিধিসেতু [[এর বদলে আসা সঠিক বিএনএস ধারা]] দেখায়, শাস্তি বা পরিধিতে কী পরিবর্তন হয়েছে তার সাথে।",
    cases_text_html: "শুধুমাত্র একটি ধারা নম্বর কখনোই একটি বাস্তব বিরোধ মেটায় না। বিধিসেতু প্রতিটি প্রাসঙ্গিক ধারাকে [[সুপ্রিম কোর্টের ঐতিহাসিক রায়ের সাথে]] যুক্ত করে, যা দেখায় এটি বাস্তবে কীভাবে প্রয়োগ করা হয়েছে — এফআইআর নিবন্ধনের জন্য ললিতা কুমারী, গ্রেপ্তার নির্দেশিকার জন্য অর্নেশ কুমার, এবং আরও অনেক।",
    fir_text_html: "অধিকাংশ মানুষের আইনি বক্তৃতা প্রয়োজন নেই, তাদের একটি ডকুমেন্ট প্রয়োজন। ঘটনাটি আপনার নিজের ভাষায় বর্ণনা করুন, এবং বিধিসেতু [[একটি গঠনমূলক এফআইআর-প্রস্তুত বিবরণ]] তৈরি করে: অভিযোগকারীর বিবরণ, সহজ ভাষায় বর্ণনা, শাস্তি সহ প্রযোজ্য বিএনএস ধারা, এবং দাখিল করার জন্য নিকটতম থানা — প্রিন্ট বা শেয়ার করার আগে সবকিছু সম্পাদনাযোগ্য।"
  },
  mr: {
    platform_text_html: "सामान्य चॅटबॉट्स जुन्या आयपीसी कलमांना नवीन कोडसोबत मिसळतात आणि शांतपणे शिक्षा चुकीची सांगतात. विधिसेतूची रिट्रीव्हल यंत्रणा [[केवळ बीएनएस कलमाचा मजकूर आणि त्याच्या अधिकृत आयपीसी मॅपिंगवर]] आधारित आहे, त्यामुळे ते देणारा कलम क्रमांक न्यायालय मान्य करेल असाच असतो.",
    coverage_text_html: "लाखो एफआयआर, निकाल आणि पाठ्यपुस्तके अजूनही जुन्या आयपीसीचा संदर्भ देतात. तुम्हाला माहीत असलेला आयपीसी क्रमांक टाइप करा, आणि विधिसेतू [[त्याची जागा घेतलेले नेमके बीएनएस कलम]], शिक्षा किंवा व्याप्तीमध्ये काय बदलले यासह दाखवते.",
    cases_text_html: "केवळ एक कलम क्रमांक खऱ्या वादाचे निराकरण करत नाही. विधिसेतू प्रत्येक संबंधित कलमाला [[सर्वोच्च न्यायालयाच्या ऐतिहासिक निकालांसोबत]] जोडते, जे दाखवतात की ते प्रत्यक्षात कसे लागू केले गेले — एफआयआर नोंदणीसाठी ललिता कुमारी, अटक मार्गदर्शक तत्त्वांसाठी अर्नेश कुमार, आणि बरेच काही.",
    fir_text_html: "बहुतेक लोकांना कायद्याचे व्याख्यान नको असते, त्यांना एक दस्तऐवज हवा असतो. घटनेचे वर्णन तुमच्या स्वतःच्या शब्दांत करा, आणि विधिसेतू [[एक संरचित एफआयआर-तयार निवेदन]] तयार करते: तक्रारदाराचे तपशील, सोप्या भाषेतील वर्णन, शिक्षेसह लागू बीएनएस कलमे, आणि दाखल करण्यासाठी जवळचे पोलीस ठाणे — प्रिंट किंवा शेअर करण्यापूर्वी सर्व काही संपादनयोग्य."
  }
};

/* ============================================================
   Crisis keyword lists per language — used by app.html to detect
   sensitive situations regardless of which language the user
   types their query in.
   ============================================================ */
const CRISIS_KEYWORDS = {
  en: [
    'suicide', 'suicidal', 'kill myself', 'end my life', 'want to die',
    'sexual abuse', 'sexually abused', 'rape', 'raped',
    'physical abuse', 'physically abused', 'domestic violence',
    'child abuse', 'child molest',
    'murder', 'being murdered', 'going to kill',
    'being attacked', 'someone attacking',
    'help me', 'in danger', 'emergency',
    'i am being abused', 'being abused'
  ],
  hi: [
    'आत्महत्या', 'खुदकुशी', 'मुझे मरना है', 'अपनी जान लेना',
    'यौन शोषण', 'बलात्कार', 'रेप',
    'शारीरिक शोषण', 'घरेलू हिंसा',
    'बाल यौन शोषण', 'बच्चे का शोषण',
    'हत्या', 'मार डालने', 'जान से मारने',
    'हमला हो रहा', 'कोई हमला कर रहा',
    'मदद करो', 'खतरे में', 'इमरजेंसी',
    'मेरे साथ दुर्व्यवहार'
  ],
  ta: [
    'தற்கொலை', 'என்னை கொல்ல வேண்டும்', 'உயிரை முடிக்க',
    'பாலியல் துன்புறுத்தல்', 'வல்லுறவு', 'பாலியல் வல்லுறவு',
    'உடல் துன்புறுத்தல்', 'குடும்ப வன்முறை',
    'குழந்தை துன்புறுத்தல்',
    'கொலை', 'கொலை செய்யப்படுகிறேன்', 'கொல்லப் போகிறேன்',
    'தாக்கப்படுகிறேன்', 'யாரோ தாக்குகிறார்கள்',
    'உதவி செய்யுங்கள்', 'ஆபத்தில்', 'அவசரநிலை'
  ],
  te: [
    'ఆత్మహత్య', 'నన్ను చంపుకోవాలి', 'జీవితం ముగించాలి',
    'లైంగిక వేధింపులు', 'అత్యాచారం', 'రేప్',
    'శారీరక వేధింపులు', 'గృహ హింస',
    'పిల్లల వేధింపులు',
    'హత్య', 'చంపబడుతున్నాను', 'చంపేస్తాను',
    'దాడి జరుగుతోంది', 'ఎవరో దాడి చేస్తున్నారు',
    'సహాయం చేయండి', 'ప్రమాదంలో', 'అత్యవసరం'
  ],
  kn: [
    'ಆತ್ಮಹತ್ಯೆ', 'ನನ್ನನ್ನು ಕೊಲ್ಲಿಕೊಳ್ಳಬೇಕು', 'ಜೀವನ ಮುಗಿಸಬೇಕು',
    'ಲೈಂಗಿಕ ದೌರ್ಜನ್ಯ', 'ಅತ್ಯಾಚಾರ', 'ರೇಪ್',
    'ದೈಹಿಕ ದೌರ್ಜನ್ಯ', 'ಗೃಹ ಹಿಂಸೆ',
    'ಮಕ್ಕಳ ಮೇಲಿನ ದೌರ್ಜನ್ಯ',
    'ಕೊಲೆ', 'ಕೊಲೆ ಆಗುತ್ತಿದೆ', 'ಕೊಲ್ಲುತ್ತೇನೆ',
    'ಹಲ್ಲೆ ನಡೆಯುತ್ತಿದೆ', 'ಯಾರೋ ಹಲ್ಲೆ ಮಾಡುತ್ತಿದ್ದಾರೆ',
    'ಸಹಾಯ ಮಾಡಿ', 'ಅಪಾಯದಲ್ಲಿ', 'ತುರ್ತುಸ್ಥಿತಿ'
  ],
  ml: [
    'ആത്മഹത്യ', 'എന്നെ കൊല്ലണം', 'ജീവിതം അവസാനിപ്പിക്കണം',
    'ലൈംഗിക പീഡനം', 'ബലാത്സംഗം', 'റേപ്പ്',
    'ശാരീരിക പീഡനം', 'ഗാർഹിക പീഡനം',
    'ശിശു പീഡനം',
    'കൊലപാതകം', 'കൊല്ലപ്പെടുന്നു', 'കൊല്ലും',
    'ആക്രമിക്കപ്പെടുന്നു', 'ആരോ ആക്രമിക്കുന്നു',
    'സഹായിക്കണം', 'അപകടത്തിൽ', 'അടിയന്തരാവസ്ഥ'
  ],
  bn: [
    'আত্মহত্যা', 'আমাকে মরতে হবে', 'জীবন শেষ করতে চাই',
    'যৌন নির্যাতন', 'ধর্ষণ', 'রেপ',
    'শারীরিক নির্যাতন', 'ঘরোয়া সহিংসতা',
    'শিশু নির্যাতন',
    'হত্যা', 'খুন হচ্ছি', 'মেরে ফেলব',
    'আক্রমণ করা হচ্ছে', 'কেউ আক্রমণ করছে',
    'সাহায্য করুন', 'বিপদে', 'জরুরি'
  ],
  mr: [
    'आत्महत्या', 'मला मरायचे आहे', 'जीवन संपवायचे आहे',
    'लैंगिक अत्याचार', 'बलात्कार', 'रेप',
    'शारीरिक अत्याचार', 'घरगुती हिंसा',
    'बाल अत्याचार',
    'खून', 'माझा खून होतोय', 'जिवे मारेन',
    'हल्ला होत आहे', 'कोणीतरी हल्ला करत आहे',
    'मदत करा', 'धोक्यात', 'आपत्कालीन'
  ]
};

function checkCrisisMultilingual(query) {
  const lower = query.toLowerCase();
  return Object.values(CRISIS_KEYWORDS).some(list =>
    list.some(keyword => lower.includes(keyword.toLowerCase()))
  );
}

/* ============================================================
   Case Library — landmark case summaries/verdicts/takeaways
   translated per language. Case titles & section citations are
   kept consistent across languages (as in real legal practice).
   ============================================================ */
const CASES_DATA = [
  {
    id: "maharashtra_sajid",
    title: "State of Maharashtra vs Mohd. Sajid Husain",
    section: "BNS Section 103 — Murder",
    i18n: {
      en: { summary: "Accused committed murder during a robbery attempt. Court examined intent and premeditation.", verdict: "Convicted. Life imprisonment awarded.", takeaway: "Murder during robbery is treated with maximum severity under BNS." },
      hi: { summary: "आरोपी ने डकैती के प्रयास के दौरान हत्या की। न्यायालय ने इरादे और पूर्वनियोजन की जांच की।", verdict: "दोषी पाया गया। आजीवन कारावास की सजा दी गई।", takeaway: "डकैती के दौरान हत्या को बीएनएस के अंतर्गत अधिकतम गंभीरता से देखा जाता है।" },
      ta: { summary: "கொள்ளை முயற்சியின் போது குற்றவாளி கொலை செய்தார். நீதிமன்றம் நோக்கம் மற்றும் முன்திட்டமிடலை ஆராய்ந்தது.", verdict: "குற்றவாளி எனத் தீர்ப்பு. வாழ்நாள் சிறைத்தண்டனை வழங்கப்பட்டது.", takeaway: "கொள்ளையின் போது நடக்கும் கொலை பிஎன்எஸ் கீழ் அதிகபட்ச கடுமையுடன் கையாளப்படுகிறது." },
      te: { summary: "దొంగతనం ప్రయత్నంలో నిందితుడు హత్య చేశాడు. న్యాయస్థానం ఉద్దేశం మరియు ముందస్తు ప్రణాళికను పరిశీలించింది.", verdict: "దోషిగా నిర్ధారించబడింది. జీవిత ఖైదు విధించబడింది.", takeaway: "దొంగతనం సమయంలో జరిగే హత్యను బీఎన్ఎస్ కింద గరిష్ట తీవ్రతతో పరిగణిస్తారు." },
      kn: { summary: "ದರೋಡೆ ಪ್ರಯತ್ನದ ಸಮಯದಲ್ಲಿ ಆರೋಪಿ ಕೊಲೆ ಮಾಡಿದರು. ನ್ಯಾಯಾಲಯ ಉದ್ದೇಶ ಮತ್ತು ಪೂರ್ವಯೋಜನೆಯನ್ನು ಪರಿಶೀಲಿಸಿತು.", verdict: "ತಪ್ಪಿತಸ್ಥ ಎಂದು ತೀರ್ಪು. ಜೀವಾವಧಿ ಶಿಕ್ಷೆ ವಿಧಿಸಲಾಯಿತು.", takeaway: "ದರೋಡೆ ಸಮಯದಲ್ಲಿ ನಡೆಯುವ ಕೊಲೆಯನ್ನು ಬಿಎನ್‌ಎಸ್ ಅಡಿಯಲ್ಲಿ ಗರಿಷ್ಠ ಕಠಿಣತೆಯಿಂದ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ." },
      ml: { summary: "കവർച്ച ശ്രമത്തിനിടെ പ്രതി കൊലപാതകം നടത്തി. കോടതി ഉദ്ദേശ്യവും മുൻകൂട്ടി ആസൂത്രണവും പരിശോധിച്ചു.", verdict: "ശിക്ഷിക്കപ്പെട്ടു. ജീവപര്യന്തം തടവ് നൽകി.", takeaway: "കവർച്ചയ്ക്കിടെയുള്ള കൊലപാതകം ബിഎൻഎസ് പ്രകാരം പരമാവധി ഗൗരവത്തോടെ പരിഗണിക്കുന്നു." },
      bn: { summary: "ডাকাতির চেষ্টার সময় অভিযুক্ত হত্যা করেছিল। আদালত উদ্দেশ্য এবং পূর্ব-পরিকল্পনা পরীক্ষা করেছিল।", verdict: "দোষী সাব্যস্त। যাবজ্জীবন কারাদণ্ড দেওয়া হয়েছে।", takeaway: "ডাকাতির সময় হত্যাকে বিএনএস-এর অধীনে সর্বোচ্চ গুরুত্বের সাথে বিবেচনা করা হয়।" },
      mr: { summary: "दरोड्याच्या प्रयत्नादरम्यान आरोपीने खून केला. न्यायालयाने हेतू आणि पूर्वनियोजन तपासले.", verdict: "दोषी ठरवले. जन्मठेपेची शिक्षा देण्यात आली.", takeaway: "दरोड्यादरम्यान होणारा खून बीएनएस अंतर्गत जास्तीत जास्त गंभीरतेने हाताळला जातो." }
    }
  },
  {
    id: "lalita_kumari",
    title: "Lalita Kumari vs Govt. of UP",
    section: "BNS Section 173 — FIR Filing",
    i18n: {
      en: { summary: "Supreme Court held that police must register FIR immediately for cognizable offences.", verdict: "Landmark ruling — FIR registration is mandatory.", takeaway: "Police cannot refuse to file FIR for serious offences." },
      hi: { summary: "सर्वोच्च न्यायालय ने कहा कि संज्ञेय अपराधों के लिए पुलिस को तुरंत एफआईआर दर्ज करनी चाहिए।", verdict: "ऐतिहासिक फैसला — एफआईआर पंजीकरण अनिवार्य है।", takeaway: "गंभीर अपराधों के लिए पुलिस एफआईआर दर्ज करने से इनकार नहीं कर सकती।" },
      ta: { summary: "அறியக்கூடிய குற்றங்களுக்கு போலீசார் உடனடியாக எஃப்ஐஆர் பதிவு செய்ய வேண்டும் என உச்ச நீதிமன்றம் தீர்ப்பளித்தது.", verdict: "முக்கிய தீர்ப்பு — எஃப்ஐஆர் பதிவு கட்டாயம்.", takeaway: "கடுமையான குற்றங்களுக்கு போலீசார் எஃப்ஐஆர் பதிவு செய்ய மறுக்க முடியாது." },
      te: { summary: "గుర్తించదగిన నేరాలకు పోలీసులు వెంటనే FIR నమోదు చేయాలని సుప్రీం కోర్టు పేర్కొంది.", verdict: "చారిత్రాత్మక తీర్పు — FIR నమోదు తప్పనిసరి.", takeaway: "తీవ్రమైన నేరాలకు పోలీసులు FIR నమోదు చేయడానికి నిరాకరించలేరు." },
      kn: { summary: "ಗುರುತಿಸಬಹುದಾದ ಅಪರಾಧಗಳಿಗೆ ಪೊಲೀಸರು ತಕ್ಷಣ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಬೇಕು ಎಂದು ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ತೀರ್ಪು ನೀಡಿತು.", verdict: "ಮಹತ್ವದ ತೀರ್ಪು — ಎಫ್‌ಐಆರ್ ನೋಂದಣಿ ಕಡ್ಡಾಯ.", takeaway: "ಗंभೀರ ಅಪರಾಧಗಳಿಗೆ ಪೊಲೀಸರು ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಲು ನಿರಾಕರಿಸಲಾಗದು." },
      ml: { summary: "തിരിച്ചറിയാവുന്ന കുറ്റകൃത്യങ്ങൾക്ക് പോലീസ് ഉടൻ എഫ്ഐആർ രജിസ്റ്റർ ചെയ്യണമെന്ന് സുപ്രീം കോടതി വിധിച്ചു.", verdict: "സുപ്രധാന വിധി — എഫ്ഐആർ രജിസ്ട്രേഷൻ നിർബന്ധം.", takeaway: "ഗുരുതരമായ കുറ്റകൃത്യങ്ങൾക്ക് പോലീസിന് എഫ്ഐആർ രജിസ്റ്റർ ചെയ്യാൻ വിസമ്മതിക്കാനാവില്ല." },
      bn: { summary: "জ্ঞাতব্য অপরাধের জন্য পুলিশকে অবিলম্বে এফআইআর নিবন্ধন করতে হবে বলে সুপ্রিম কোর্ট রায় দিয়েছে।", verdict: "ঐতিহাসিক রায় — এফআইআর নিবন্ধন বাধ্যতামূলক।", takeaway: "গুরুতর অপরাধের জন্য পুলিশ এফআইআর দাখিল করতে অস্বীকার করতে পারে না।" },
      mr: { summary: "दखलपात्र गुन्ह्यांसाठी पोलिसांनी त्वरित एफआयआर नोंदवावी असा निकाल सर्वोच्च न्यायालयाने दिला.", verdict: "ऐतिहासिक निकाल — एफआयआर नोंदणी बंधनकारक.", takeaway: "गंभीर गुन्ह्यांसाठी पोलीस एफआयआर नोंदवण्यास नकार देऊ शकत नाहीत." }
    }
  },
  {
    id: "arnesh_kumar",
    title: "Arnesh Kumar vs State of Bihar",
    section: "BNS Section 35 — Arrest Guidelines",
    i18n: {
      en: { summary: "SC laid down strict guidelines for arrest in cases with punishment under 7 years.", verdict: "Police must justify arrest necessity before making it.", takeaway: "Arrest is not automatic — police must apply mind before arresting." },
      hi: { summary: "सर्वोच्च न्यायालय ने 7 साल से कम सजा वाले मामलों में गिरफ्तारी के लिए सख्त मार्गदर्शन दिया।", verdict: "गिरफ्तारी से पहले पुलिस को इसकी आवश्यकता उचित ठहरानी होगी।", takeaway: "गिरफ्तारी स्वचालित नहीं है — पुलिस को गिरफ्तार करने से पहले विचार करना होगा।" },
      ta: { summary: "7 ஆண்டுகளுக்கும் குறைவான தண்டனை உள்ள வழக்குகளில் கைது செய்வதற்கு உச்ச நீதிமன்றம் கடுமையான வழிகாட்டுதல்களை வகுத்தது.", verdict: "கைது செய்வதற்கு முன் போலீசார் அதன் அவசியத்தை நிரூபிக்க வேண்டும்.", takeaway: "கைது தானியங்கி அல்ல — போலீசார் கைது செய்வதற்கு முன் சிந்திக்க வேண்டும்." },
      te: { summary: "7 సంవత్సరాల కంటే తక్కువ శిక్ష ఉన్న కేసుల్లో అరెస్టుకు సుప్రీం కోర్టు కఠినమైన మార్గదర్శకాలను నిర్దేశించింది.", verdict: "అరెస్టు చేయడానికి ముందు పోలీసులు దాని ఆవశ్యకతను సమర్థించాలి.", takeaway: "అరెస్టు ఆటోమేటిక్ కాదు — పోలీసులు అరెస్టు చేయడానికి ముందు ఆలోచించాలి." },
      kn: { summary: "7 ವರ್ಷಗಳಿಗಿಂತ ಕಡಿಮೆ ಶಿಕ್ಷೆಯ ಪ್ರಕರಣಗಳಲ್ಲಿ ಬಂಧನಕ್ಕಾಗಿ ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಕಠಿಣ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ರೂಪಿಸಿತು.", verdict: "ಬಂಧಿಸುವ ಮೊದಲು ಪೊಲೀಸರು ಅದರ ಅಗತ್ಯವನ್ನು ಸಮರ್ಥಿಸಬೇಕು.", takeaway: "ಬಂಧನ ಸ್ವಯಂಚಾಲಿತವಲ್ಲ — ಪೊಲೀಸರು ಬಂಧಿಸುವ ಮೊದಲು ಯೋಚಿಸಬೇಕು." },
      ml: { summary: "7 വർഷത്തിൽ താഴെ ശിക്ഷയുള്ള കേസുകളിൽ അറസ്റ്റിന് സുപ്രീം കോടതി കർശന മാർഗ്ഗനിർദ്ദേശങ്ങൾ നൽകി.", verdict: "അറസ്റ്റ് ചെയ്യുന്നതിന് മുമ്പ് പോലീസ് അതിന്റെ ആവശ്യകത ന്യായീകരിക്കണം.", takeaway: "അറസ്റ്റ് ഓട്ടോമാറ്റിക് അല്ല — അറസ്റ്റ് ചെയ്യുന്നതിന് മുമ്പ് പോലീസ് ചിന്തിക്കണം." },
      bn: { summary: "৭ বছরের কম শাস্তির মামলায় গ্রেপ্তারের জন্য সুপ্রিম কোর্ট কঠোর নির্দেশিকা দিয়েছে।", verdict: "গ্রেপ্তারের আগে পুলিশকে এর প্রয়োজনীয়তা প্রমাণ করতে হবে।", takeaway: "গ্রেপ্তার স্বয়ংক্রিয় নয় — গ্রেপ্তারের আগে পুলিশকে ভাবতে হবে।" },
      mr: { summary: "7 वर्षांपेक्षा कमी शिक्षेच्या प्रकरणांमध्ये अटकेसाठी सर्वोच्च न्यायालयाने कठोर मार्गदर्शक तत्त्वे घातली.", verdict: "अटक करण्यापूर्वी पोलिसांनी त्याची आवश्यकता सिद्ध करावी.", takeaway: "अटक स्वयंचलित नाही — अटक करण्यापूर्वी पोलिसांनी विचार करावा." }
    }
  },
  {
    id: "vikas_yadav",
    title: "State vs Vikas Yadav (Nitish Katara Case)",
    section: "BNS Section 103 — Murder",
    i18n: {
      en: { summary: "Honour killing case. Accused killed victim for relationship with sister from different caste.", verdict: "Convicted for murder. Life imprisonment.", takeaway: "Honour killings are treated as premeditated murder with no leniency." },
      hi: { summary: "ऑनर किलिंग का मामला। आरोपी ने अलग जाति की बहन के साथ संबंध के कारण पीड़ित की हत्या की।", verdict: "हत्या के लिए दोषी। आजीवन कारावास।", takeaway: "ऑनर किलिंग को बिना किसी रियायत के पूर्वनियोजित हत्या माना जाता है।" },
      ta: { summary: "மரியாதைக் கொலை வழக்கு. வேறு சாதி சகோதரியுடன் உள்ள உறவுக்காக பாதிக்கப்பட்டவரை குற்றவாளி கொலை செய்தார்.", verdict: "கொலைக்காக குற்றவாளி. வாழ்நாள் சிறைத்தண்டனை.", takeaway: "மரியாதைக் கொலைகள் எந்த இரக்கமும் இல்லாமல் முன்திட்டமிட்ட கொலையாக கருதப்படுகின்றன." },
      te: { summary: "గౌరవ హత్య కేసు. వేరే కులానికి చెందిన సోదరితో సంబంధం కారణంగా నిందితుడు బాధితుడిని హత్య చేశాడు.", verdict: "హత్యకు దోషి. జీవిత ఖైదు.", takeaway: "గౌరవ హత్యలను ఎలాంటి సానుభూతి లేకుండా ముందస్తు ప్రణాళికతో చేసిన హత్యగా పరిగణిస్తారు." },
      kn: { summary: "ಗೌರವ ಹತ್ಯೆ ಪ್ರಕರಣ. ಬೇರೆ ಜಾತಿಯ ಸಹೋದರಿಯೊಂದಿಗಿನ ಸಂಬಂಧಕ್ಕಾಗಿ ಆರೋಪಿ ಬಲಿಪಶುವನ್ನು ಕೊಂದರು.", verdict: "ಕೊಲೆಗೆ ತಪ್ಪಿತಸ್ಥ. ಜೀವಾವಧಿ ಶಿಕ್ಷೆ.", takeaway: "ಗೌರವ ಹತ್ಯೆಗಳನ್ನು ಯಾವುದೇ ಮನ್ನಣೆ ಇಲ್ಲದೆ ಪೂರ್ವಯೋಜಿತ ಕೊಲೆಯಾಗಿ ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ." },
      ml: { summary: "ഓണർ കില്ലിംഗ് കേസ്. വ്യത്യസ്ത ജാതിയിലുള്ള സഹോദരിയുമായുള്ള ബന്ധത്തിന് പ്രതി ഇരയെ കൊലപ്പെടുത്തി.", verdict: "കൊലപാതകത്തിന് ശിക്ഷിക്കപ്പെട്ടു. ജീവപര്യന്തം തടവ്.", takeaway: "ഓണർ കില്ലിംഗുകൾ ഒരു ഇളവുമില്ലാതെ മുൻകൂട്ടി ആസൂത്രണം ചെയ്ത കൊലപാതകമായി പരിഗണിക്കുന്നു." },
      bn: { summary: "সম্মান হত্যার ঘটনা। ভিন্ন বর্ণের বোনের সাথে সম্পর্কের কারণে অভিযুক্ত ভিকটিমকে হত্যা করেছিল।", verdict: "হত্যার জন্য দোষী। যাবজ্জীবন কারাদণ্ড।", takeaway: "সম্মান হত্যাকে কোনো ছাড় ছাড়াই পূর্ব-পরিকল্পিত হত্যা হিসেবে গণ্য করা হয়।" },
      mr: { summary: "सन्मान हत्या प्रकरण. वेगळ्या जातीतील बहिणीसोबतच्या संबंधासाठी आरोपीने पीडितेची हत्या केली.", verdict: "खूनासाठी दोषी. जन्मठेप.", takeaway: "सन्मान हत्या कोणत्याही सहानुभूतीशिवाय पूर्वनियोजित खून मानल्या जातात." }
    }
  },
  {
    id: "hadiya_case",
    title: "Shafin Jahan vs Asokan KM (Hadiya Case)",
    section: "BNS Section 137 — Kidnapping",
    i18n: {
      en: { summary: "SC examined whether an adult woman can be kept under parents custody against her will.", verdict: "Adult has full right to choose religion and life partner.", takeaway: "Personal liberty cannot be curtailed even by family under BNS." },
      hi: { summary: "सर्वोच्च न्यायालय ने जांच की कि क्या एक वयस्क महिला को उसकी इच्छा के विरुद्ध माता-पिता की हिरासत में रखा जा सकता है।", verdict: "वयस्क को धर्म और जीवन साथी चुनने का पूरा अधिकार है।", takeaway: "बीएनएस के अंतर्गत व्यक्तिगत स्वतंत्रता को परिवार द्वारा भी सीमित नहीं किया जा सकता।" },
      ta: { summary: "ஒரு வயது வந்த பெண்ணை அவளது விருப்பத்திற்கு எதிராக பெற்றோர் காவலில் வைக்க முடியுமா என்பதை உச்ச நீதிமன்றம் ஆராய்ந்தது.", verdict: "வயது வந்தவருக்கு மதம் மற்றும் வாழ்க்கைத் துணையை தேர்வு செய்ய முழு உரிமை உள்ளது.", takeaway: "பிஎன்எஸ் கீழ் தனிநபர் சுதந்திரத்தை குடும்பத்தாலும் கட்டுப்படுத்த முடியாது." },
      te: { summary: "ఒక వయోజన మహిళను ఆమె కోరిక లేకుండా తల్లిదండ్రుల అదుపులో ఉంచవచ్చా అని సుప్రీం కోర్టు పరిశీలించింది.", verdict: "వయోజనులకు మతం మరియు జీవిత భాగస్వామిని ఎంచుకునే పూర్తి హక్కు ఉంది.", takeaway: "బీఎన్ఎస్ కింద వ్యక్తిగత స్వేచ్ఛను కుటుంబం కూడా పరిమితం చేయలేరు." },
      kn: { summary: "ಒಬ್ಬ ವಯಸ್ಕ ಮಹಿಳೆಯನ್ನು ಅವಳ ಇಚ್ಛೆಗೆ ವಿರುದ್ಧವಾಗಿ ಪೋಷಕರ ಸುಪರ್ದಿಯಲ್ಲಿ ಇಡಬಹುದೇ ಎಂದು ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಪರಿಶೀಲಿಸಿತು.", verdict: "ವಯಸ್ಕರಿಗೆ ಧರ್ಮ ಮತ್ತು ಜೀವನ ಸಂಗಾತಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡುವ ಸಂಪೂರ್ಣ ಹಕ್ಕು ಇದೆ.", takeaway: "ಬಿಎನ್‌ಎಸ್ ಅಡಿಯಲ್ಲಿ ವ್ಯಕ್ತಿಗತ ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಕುಟುಂಬವೂ ಸಹ ಮಿತಿಗೊಳಿಸುವಂತಿಲ್ಲ." },
      ml: { summary: "ഒരു മുതിർന്ന സ്ത്രീയെ അവളുടെ ഇഷ്ടത്തിന് വിരുദ്ധമായി മാതാപിതാക്കളുടെ കസ്റ്റഡിയിൽ വയ്ക്കാമോ എന്ന് സുപ്രീം കോടതി പരിശോധിച്ചു.", verdict: "മുതിർന്നവർക്ക് മതവും ജീവിതപങ്കാളിയും തിരഞ്ഞെടുക്കാൻ പൂർണ്ണ അവകാശമുണ്ട്.", takeaway: "ബിഎൻഎസ് പ്രകാരം വ്യക്തിസ്വാതന്ത്ര്യം കുടുംബത്തിനു പോലും പരിമിതപ്പെടുത്താനാവില്ല." },
      bn: { summary: "একজন প্রাপ্তবয়স্ক মহিলাকে তার ইচ্ছার বিরুদ্ধে পিতামাতার হেফাজতে রাখা যায় কিনা তা সুপ্রিম কোর্ট পরীক্ষা করেছে।", verdict: "প্রাপ্তবয়স্কদের ধর্ম এবং জীবনসঙ্গী বেছে নেওয়ার সম্পূর্ণ অধিকার রয়েছে।", takeaway: "বিএনএস-এর অধীনে ব্যক্তিগত স্বাধীনতা পরিবার দ্বারাও সীমিত করা যায় না।" },
      mr: { summary: "एका प्रौढ महिलेला तिच्या इच्छेविरुद्ध पालकांच्या ताब्यात ठेवता येते का याची सर्वोच्च न्यायालयाने तपासणी केली.", verdict: "प्रौढ व्यक्तीला धर्म आणि जीवनसाथी निवडण्याचा पूर्ण अधिकार आहे.", takeaway: "बीएनएस अंतर्गत वैयक्तिक स्वातंत्र्य कुटुंबाकडूनही मर्यादित केले जाऊ शकत नाही." }
    }
  },
  {
    id: "shreya_singhal",
    title: "Shreya Singhal vs Union of India",
    section: "BNS Section 196 — Hate Speech",
    i18n: {
      en: { summary: "SC struck down Section 66A of IT Act for being vague and violating free speech.", verdict: "Section 66A unconstitutional.", takeaway: "Online speech restrictions must be specific and proportionate." },
      hi: { summary: "सर्वोच्च न्यायालय ने आईटी अधिनियम की धारा 66ए को अस्पष्ट और अभिव्यक्ति की स्वतंत्रता का उल्लंघन मानते हुए रद्द कर दिया।", verdict: "धारा 66ए असंवैधानिक।", takeaway: "ऑनलाइन भाषण प्रतिबंध स्पष्ट और आनुपातिक होने चाहिए।" },
      ta: { summary: "ஐடி சட்டத்தின் பிரிவு 66ஏ தெளிவற்றது மற்றும் பேச்சு சுதந்திரத்தை மீறுவதாக கருதி உச்ச நீதிமன்றம் ரத்து செய்தது.", verdict: "பிரிவு 66ஏ அரசியலமைப்புக்கு எதிரானது.", takeaway: "ஆன்லைன் பேச்சு கட்டுப்பாடுகள் தெளிவாகவும் விகிதாசாரமாகவும் இருக்க வேண்டும்." },
      te: { summary: "ఐటి చట్టంలోని సెక్షన్ 66ఎ అస్పష్టంగా ఉండి, వాక్ స్వాతంత్ర్యాన్ని ఉల్లంఘిస్తుందని సుప్రీం కోర్టు కొట్టివేసింది.", verdict: "సెక్షన్ 66ఎ రాజ్యాంగ విరుద్ధం.", takeaway: "ఆన్‌లైన్ ప్రసంగ నిబంధనలు స్పష్టంగా మరియు అనుపాతంగా ఉండాలి." },
      kn: { summary: "ಐಟಿ ಕಾಯ್ದೆಯ ಸೆಕ್ಷನ್ 66ಎ ಅಸ್ಪಷ್ಟವಾಗಿದ್ದು ವಾಕ್ ಸ್ವಾತಂತ್ರ್ಯವನ್ನು ಉಲ್ಲಂಘಿಸುತ್ತದೆ ಎಂದು ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ರದ್ದುಗೊಳಿಸಿತು.", verdict: "ಸೆಕ್ಷನ್ 66ಎ ಅಸಂವಿಧಾನಿಕ.", takeaway: "ಆನ್‌ಲೈನ್ ಭಾಷಣ ನಿರ್ಬಂಧಗಳು ನಿರ್ದಿಷ್ಟ ಮತ್ತು ಅನುಪಾತಿಕವಾಗಿರಬೇಕು." },
      ml: { summary: "ഐടി നിയമത്തിലെ സെക്ഷൻ 66എ അവ്യക്തവും സംസാര സ്വാതന്ത്ര്യം ലംഘിക്കുന്നതുമാണെന്ന് സുപ്രീം കോടതി റദ്ദാക്കി.", verdict: "സെക്ഷൻ 66എ ഭരണഘടനാ വിരുദ്ധം.", takeaway: "ഓൺലൈൻ സംസാര നിയന്ത്രണങ്ങൾ വ്യക്തവും ആനുപാതികവുമായിരിക്കണം." },
      bn: { summary: "আইটি আইনের ধারা 66এ অস্পষ্ট এবং বাক স্বাধীনতা লঙ্ঘন করায় সুপ্রিম কোর্ট বাতিল করেছে।", verdict: "ধারা 66এ অসাংবিধানিক।", takeaway: "অনলাইন বক্তব্যের সীমাবদ্ধতা সুনির্দিষ্ট এবং সমানুপাতিক হতে হবে।" },
      mr: { summary: "आयटी कायद्याचे कलम 66A अस्पष्ट असून भाषण स्वातंत्र्याचे उल्लंघन करते म्हणून सर्वोच्च न्यायालयाने रद्द केले.", verdict: "कलम 66A घटनाबाह्य.", takeaway: "ऑनलाइन भाषण निर्बंध स्पष्ट आणि प्रमाणशीर असावेत." }
    }
  },
  {
    id: "vishaka",
    title: "Vishaka vs State of Rajasthan",
    section: "BNS Section 75 — Sexual Harassment",
    i18n: {
      en: { summary: "Landmark case that led to guidelines against sexual harassment at workplace.", verdict: "Vishaka guidelines established — now codified as POSH Act.", takeaway: "Employers are responsible for preventing workplace sexual harassment." },
      hi: { summary: "ऐतिहासिक मामला जिसके कारण कार्यस्थल पर यौन उत्पीड़न के खिलाफ मार्गदर्शन तैयार हुआ।", verdict: "विशाखा मार्गदर्शक सिद्धांत स्थापित — अब पॉश अधिनियम के रूप में संहिताबद्ध।", takeaway: "कार्यस्थल पर यौन उत्पीड़न रोकने की जिम्मेदारी नियोक्ताओं की है।" },
      ta: { summary: "பணியிடத்தில் பாலியல் துன்புறுத்தலுக்கு எதிரான வழிகாட்டுதல்களுக்கு வழிவகுத்த முக்கிய வழக்கு.", verdict: "விஷாகா வழிகாட்டுதல்கள் நிறுவப்பட்டன — இப்போது POSH சட்டமாக குறியீடாக்கப்பட்டுள்ளது.", takeaway: "பணியிட பாலியல் துன்புறுத்தலைத் தடுக்க பணியாளர்கள் பொறுப்பு." },
      te: { summary: "కార్యాలయంలో లైంగిక వేధింపులకు వ్యతిరేకంగా మార్గదర్శకాలకు దారితీసిన చారిత్రాత్మక కేసు.", verdict: "విశాఖ మార్గదర్శకాలు స్థాపించబడ్డాయి — ఇప్పుడు POSH చట్టంగా క్రోడీకరించబడింది.", takeaway: "కార్యాలయ లైంగిక వేధింపులను నివారించడం యజమానుల బాధ్యత." },
      kn: { summary: "ಕಾರ್ಯಸ್ಥಳದಲ್ಲಿ ಲೈಂಗಿಕ ಕಿರುಕುಳದ ವಿರುದ್ಧ ಮಾರ್ಗಸೂಚಿಗಳಿಗೆ ಕಾರಣವಾದ ಮಹತ್ವದ ಪ್ರಕರಣ.", verdict: "ವಿಶಾಖಾ ಮಾರ್ಗಸೂಚಿಗಳು ಸ್ಥಾಪಿತ — ಈಗ POSH ಕಾಯ್ದೆಯಾಗಿ ಸಂಹಿತೆಗೊಳಿಸಲಾಗಿದೆ.", takeaway: "ಕಾರ್ಯಸ್ಥಳದ ಲೈಂಗಿಕ ಕಿರುಕುಳವನ್ನು ತಡೆಗಟ್ಟುವ ಜವಾಬ್ದಾರಿ ಉದ್ಯೋಗದಾತರದ್ದು." },
      ml: { summary: "ജോലിസ്ഥലത്തെ ലൈംഗിക പീഡനത്തിനെതിരായ മാർഗ്ഗനിർദ്ദേശങ്ങളിലേക്ക് നയിച്ച സുപ്രധാന കേസ്.", verdict: "വിശാഖ മാർഗ്ഗനിർദ്ദേശങ്ങൾ സ്ഥാപിച്ചു — ഇപ്പോൾ POSH നിയമമായി ക്രോഡീകരിച്ചു.", takeaway: "ജോലിസ്ഥലത്തെ ലൈംഗിക പീഡനം തടയുന്നതിന് തൊഴിലുടമകൾ ഉത്തരവാദികളാണ്." },
      bn: { summary: "কর্মক্ষেত্রে যৌন নির্যাতনের বিরুদ্ধে নির্দেশিকার দিকে পরিচালিত একটি ঐতিহাসিক মামলা।", verdict: "বিশাখা নির্দেশিকা প্রতিষ্ঠিত — এখন POSH আইন হিসেবে কোডিফাইড।", takeaway: "কর্মক্ষেত্রে যৌন নির্যাতন রোধ করার দায়িত্ব নিয়োগকর্তাদের।" },
      mr: { summary: "कामाच्या ठिकाणी लैंगिक छळाविरुद्ध मार्गदर्शक तत्त्वांकडे नेणारे ऐतिहासिक प्रकरण.", verdict: "विशाखा मार्गदर्शक तत्त्वे स्थापित — आता POSH कायदा म्हणून संहिताबद्ध.", takeaway: "कामाच्या ठिकाणी होणारा लैंगिक छळ रोखण्याची जबाबदारी नियोक्त्यांची आहे." }
    }
  },
  {
    id: "puttaswamy",
    title: "KS Puttaswamy vs Union of India",
    section: "BNS Section 26 — Right to Privacy",
    i18n: {
      en: { summary: "SC unanimously held that privacy is a fundamental right under the Constitution.", verdict: "Right to privacy is a fundamental right.", takeaway: "Any law violating privacy must pass strict scrutiny." },
      hi: { summary: "सर्वोच्च न्यायालय ने एकमत से माना कि निजता संविधान के अंतर्गत एक मौलिक अधिकार है।", verdict: "निजता का अधिकार एक मौलिक अधिकार है।", takeaway: "निजता का उल्लंघन करने वाला कोई भी कानून सख्त जांच से गुजरना चाहिए।" },
      ta: { summary: "தனியுரிமை அரசியலமைப்பின் கீழ் ஒரு அடிப்படை உரிமை என்று உச்ச நீதிமன்றம் ஒருமனதாக கருதியது.", verdict: "தனியுரிமை உரிமை ஒரு அடிப்படை உரிமை.", takeaway: "தனியுரிமையை மீறும் எந்த சட்டமும் கடுமையான ஆய்வை கடந்து செல்ல வேண்டும்." },
      te: { summary: "గోప్యత రాజ్యాంగం కింద ఒక ప్రాథమిక హక్కు అని సుప్రీం కోర్టు ఏకగ్రీవంగా పేర్కొంది.", verdict: "గోప్యత హక్కు ఒక ప్రాథమిక హక్కు.", takeaway: "గోప్యతను ఉల్లంఘించే ఏ చట్టమైనా కఠినమైన పరిశీలనను దాటాలి." },
      kn: { summary: "ಗೌಪ್ಯತೆಯು ಸಂವಿಧಾನದ ಅಡಿಯಲ್ಲಿ ಒಂದು ಮೂಲಭೂತ ಹಕ್ಕು ಎಂದು ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಏಕಮತದಿಂದ ತೀರ್ಪು ನೀಡಿತು.", verdict: "ಗೌಪ್ಯತೆಯ ಹಕ್ಕು ಒಂದು ಮೂಲಭೂತ ಹಕ್ಕು.", takeaway: "ಗೌಪ್ಯತೆಯನ್ನು ಉಲ್ಲಂಘಿಸುವ ಯಾವುದೇ ಕಾನೂನು ಕಠಿಣ ಪರಿಶೀಲನೆಯನ್ನು ಹಾದುಹೋಗಬೇಕು." },
      ml: { summary: "സ്വകാര്യത ഭരണഘടനയ്ക്ക് കീഴിലുള്ള ഒരു മൗലികാവകാശമാണെന്ന് സുപ്രീം കോടതി ഏകകണ്ഠമായി വിധിച്ചു.", verdict: "സ്വകാര്യതയ്ക്കുള്ള അവകാശം ഒരു മൗലികാവകാശമാണ്.", takeaway: "സ്വകാര്യത ലംഘിക്കുന്ന ഏത് നിയമവും കർശന പരിശോധന കടന്നുപോകണം." },
      bn: { summary: "গোপনীয়তা সংবিধানের অধীনে একটি মৌলিক অধিকার বলে সুপ্রিম কোর্ট একতরফাভাবে রায় দিয়েছে।", verdict: "গোপনীয়তার অধিকার একটি মৌলিক অধিকার।", takeaway: "গোপনীয়তা লঙ্ঘন করে এমন কোনো আইন কঠোর যাচাই-বাছাই পার হতে হবে।" },
      mr: { summary: "गोपनीयता ही राज्यघटनेअंतर्गत मूलभूत हक्क आहे असे सर्वोच्च न्यायालयाने एकमताने मांडले.", verdict: "गोपनीयतेचा हक्क हा मूलभूत हक्क आहे.", takeaway: "गोपनीयतेचे उल्लंघन करणारा कोणताही कायदा कठोर तपासणीतून जावा लागतो." }
    }
  }
];

function getLocalizedCases() {
  const lang = getCurrentLanguage();
  return CASES_DATA.map(c => {
    const tr = c.i18n[lang] || c.i18n.en;
    return {
      title: c.title,
      section: c.section,
      summary: tr.summary,
      verdict: tr.verdict,
      takeaway: tr.takeaway
    };
  });
}

/* ============================================================
   Language helper functions — shared across index.html / app.html
   ============================================================ */
function getCurrentLanguage() {
  return localStorage.getItem('vidhisethu-lang') || 'en';
}

function setCurrentLanguage(lang) {
  if (!I18N[lang]) lang = 'en';
  localStorage.setItem('vidhisethu-lang', lang);
}

function t(key, vars) {
  const lang = getCurrentLanguage();
  const dict = I18N[lang] || I18N.en;
  let str = dict[key] !== undefined ? dict[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
  if (vars) {
    Object.keys(vars).forEach(k => {
      str = str.replace(`{${k}}`, vars[k]);
    });
  }
  return str;
}

/* Returns an HTML string for a key registered in I18N_HTML_SEGMENTS,
   converting [[ ... ]] into <mark> ... </mark>. Falls back to English. */
function tHtml(key) {
  const lang = getCurrentLanguage();
  const seg = (I18N_HTML_SEGMENTS[lang] && I18N_HTML_SEGMENTS[lang][key])
    || (I18N_HTML_SEGMENTS.en && I18N_HTML_SEGMENTS.en[key])
    || '';
  return seg
    .replace(/\[\[/g, '<mark>')
    .replace(/\]\]/g, '</mark>');
}

/* Applies translations to every element carrying a data-i18n* attribute */
function applyTranslations() {
  const lang = getCurrentLanguage();
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = tHtml(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });
  document.querySelectorAll('[data-i18n-value]').forEach(el => {
    const key = el.getAttribute('data-i18n-value');
    el.setAttribute('value', t(key));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.setAttribute('title', t(key));
  });

  // Notify page-specific scripts that translations changed
  document.dispatchEvent(new CustomEvent('vidhisethu-lang-changed', { detail: { lang } }));
}

/* Builds the language-switcher dropdown markup and wires up its events.
   targetSelector = the element to insert the dropdown into. */
function initLanguageSwitcher(containerEl) {
  const current = getCurrentLanguage();
  const wrap = document.createElement('div');
  wrap.className = 'lang-switch';
  wrap.innerHTML = `
    <button type="button" class="lang-switch-btn" id="langSwitchBtn" aria-haspopup="listbox" aria-expanded="false">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z"/></svg>
      <span id="langSwitchLabel">${SUPPORTED_LANGUAGES[current].native}</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="lang-switch-menu" id="langSwitchMenu" role="listbox"></div>
  `;
  containerEl.appendChild(wrap);

  const menu = wrap.querySelector('#langSwitchMenu');
  Object.keys(SUPPORTED_LANGUAGES).forEach(code => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'lang-switch-item' + (code === current ? ' active' : '');
    item.setAttribute('role', 'option');
    item.dataset.lang = code;
    item.innerHTML = `<span class="lang-native">${SUPPORTED_LANGUAGES[code].native}</span><span class="lang-en">${SUPPORTED_LANGUAGES[code].label}</span>`;
    item.addEventListener('click', () => {
      setCurrentLanguage(code);
      wrap.querySelectorAll('.lang-switch-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      document.getElementById('langSwitchLabel').textContent = SUPPORTED_LANGUAGES[code].native;
      menu.classList.remove('open');
      wrap.querySelector('.lang-switch-btn').setAttribute('aria-expanded', 'false');
      applyTranslations();
    });
    menu.appendChild(item);
  });

  const btn = wrap.querySelector('#langSwitchBtn');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
}
