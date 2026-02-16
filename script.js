// ==================== DATA STRUCTURE ====================
const schemesData = [
    {
        id: 1,
        name: "Chief Minister's Comprehensive Health Insurance Scheme",
        name_ta: "முதலமைச்சரின் விரிவான சுகாதார காப்பீட்டு திட்டம்",
        category: "health",
        description: "Free medical treatment up to ₹5 lakhs per family per year",
        description_ta: "குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் வரை இலவச மருத்துவ சிகிச்சை",
        eligibility: ["income:below3", "document:ration"],
        target_groups: ["all"],
        required_documents: ["aadhaar", "ration", "income"],
        benefits: "Covers hospitalization, surgery, and medical expenses",
        how_to_apply: "Visit nearest government hospital or apply online at www.cmchistn.com",
        apply_url: "https://www.cmchistn.com",
        application_mode: "Online/Offline",
        processing_time: "Immediate (for emergency) / 7 days (regular)",
        contact: "Call 104 or visit District Health Office",
        common_mistakes: ["Not carrying Aadhaar card", "Expired ration card", "Incomplete family details"]
    },
    {
        id: 2,
        name: "Old Age Pension Scheme",
        name_ta: "முதியோர் ஓய்வூதிய திட்டம்",
        category: "elderly",
        description: "Monthly pension of ₹1,000 for senior citizens",
        description_ta: "மூத்த குடிமக்களுக்கு மாதம் ₹1,000 ஓய்வூதியம்",
        eligibility: ["age:60+", "income:below1"],
        target_groups: ["elderly"],
        required_documents: ["aadhaar", "age_proof", "income", "bank_passbook"],
        benefits: "₹1,000 per month directly to bank account",
        how_to_apply: "Visit Taluk Office or apply online at www.tnpds.gov.in",
        apply_url: "https://www.tnpds.gov.in",
        application_mode: "Online/Offline",
        processing_time: "30 days",
        contact: "District Social Welfare Office",
        common_mistakes: ["Bank account not linked to Aadhaar", "Income certificate expired", "Wrong age proof"]
    },
    {
        id: 3,
        name: "Amma Two Wheeler Scheme",
        name_ta: "அம்மா இருசக்கர வாகன திட்டம்",
        category: "women",
        description: "50% subsidy on two-wheelers for working women",
        description_ta: "வேலை செய்யும் பெண்களுக்கு இருசக்கர வாகனத்தில் 50% மானியம்",
        eligibility: ["gender:female", "age:18-40", "income:below5", "employed:yes"],
        target_groups: ["women"],
        required_documents: ["aadhaar", "income", "employment_proof", "driving_license"],
        benefits: "Up to ₹25,000 subsidy on two-wheeler purchase",
        how_to_apply: "Apply through authorized dealers or online portal",
        apply_url: "https://www.tn.gov.in",
        application_mode: "Online",
        processing_time: "15 days",
        contact: "Transport Department",
        common_mistakes: ["No valid driving license", "Income exceeds limit", "Not a first-time buyer"]
    },
    {
        id: 4,
        name: "Free Laptop Scheme for Students",
        name_ta: "மாணவர்களுக்கான இலவச மடிக்கணினி திட்டம்",
        category: "students",
        description: "Free laptops for students scoring above 60% in 12th standard",
        description_ta: "12ஆம் வகுப்பில் 60% க்கு மேல் பெறும் மாணவர்களுக்கு இலவச மடிக்கணினி",
        eligibility: ["student:yes", "marks:60+", "class:12"],
        target_groups: ["students"],
        required_documents: ["aadhaar", "marksheet", "school_certificate"],
        benefits: "Free laptop with pre-installed educational software",
        how_to_apply: "Automatic distribution through schools",
        apply_url: null,
        application_mode: "School-based",
        processing_time: "After results declaration",
        contact: "School Principal or Education Department",
        common_mistakes: ["Aadhaar not linked", "Wrong bank details", "Not attending distribution"]
    },
    {
        id: 5,
        name: "Kalaignar Farm Insurance Scheme",
        name_ta: "கலைஞர் பண்ணை காப்பீட்டு திட்டம்",
        category: "farmers",
        description: "Crop insurance and financial assistance for farmers",
        description_ta: "விவசாயிகளுக்கான பயிர் காப்பீடு மற்றும் நிதி உதவி",
        eligibility: ["occupation:farmer", "landowner:yes"],
        target_groups: ["farmers"],
        required_documents: ["aadhaar", "land_documents", "ration", "bank_passbook"],
        benefits: "Coverage against crop failure, up to ₹2 lakhs compensation",
        how_to_apply: "Visit Agricultural Office or apply online",
        apply_url: "https://www.tnagrisnet.tn.gov.in",
        application_mode: "Online/Offline",
        processing_time: "Before crop season",
        contact: "District Agricultural Office",
        common_mistakes: ["Late registration", "Wrong crop details", "No land ownership proof"]
    },
    {
        id: 6,
        name: "Disability Welfare Pension",
        name_ta: "மாற்றுத்திறனாளி நல ஓய்வூதியம்",
        category: "disability",
        description: "Monthly pension of ₹1,500 for persons with disabilities",
        description_ta: "மாற்றுத்திறனாளிகளுக்கு மாதம் ₹1,500 ஓய்வூதியம்",
        eligibility: ["disability:yes", "disability_percent:40+"],
        target_groups: ["disability"],
        required_documents: ["aadhaar", "disability_cert", "income", "bank_passbook"],
        benefits: "₹1,500 per month + additional healthcare benefits",
        how_to_apply: "Visit Taluk Office with disability certificate",
        apply_url: null,
        application_mode: "Offline",
        processing_time: "30 days",
        contact: "District Differently Abled Welfare Office",
        common_mistakes: ["Disability certificate not valid", "Not certified by government hospital", "Bank details incorrect"]
    },
    {
        id: 7,
        name: "Marriage Assistance Scheme",
        name_ta: "திருமண உதவி திட்டம்",
        category: "women",
        description: "Financial assistance of ₹50,000 for daughters' marriage",
        description_ta: "மகள்களின் திருமணத்திற்கு ₹50,000 நிதி உதவி",
        eligibility: ["gender:female", "income:below3", "marriage:yes"],
        target_groups: ["women"],
        required_documents: ["aadhaar", "income", "marriage_invitation", "ration"],
        benefits: "₹50,000 for marriage expenses",
        how_to_apply: "Apply at Taluk Office before marriage date",
        apply_url: null,
        application_mode: "Offline",
        processing_time: "45 days",
        contact: "District Social Welfare Office",
        common_mistakes: ["Applying after marriage", "Income proof not recent", "Missing marriage proof"]
    },
    {
        id: 8,
        name: "Free Education for Girl Child",
        name_ta: "பெண் குழந்தைகளுக்கான இலவசக் கல்வி",
        category: "students",
        description: "Free education including books, uniform, and scholarships",
        description_ta: "புத்தகங்கள், சீருடை மற்றும் உதவித்தொகை உட்பட இலவச கல்வி",
        eligibility: ["gender:female", "student:yes", "income:below5"],
        target_groups: ["students", "women"],
        required_documents: ["aadhaar", "school_certificate", "income", "birth_certificate"],
        benefits: "Free textbooks, uniforms, scholarships up to college level",
        how_to_apply: "Through school administration",
        apply_url: null,
        application_mode: "School-based",
        processing_time: "At admission",
        contact: "School or Education Department",
        common_mistakes: ["Late enrollment", "Wrong income bracket", "Missing birth certificate"]
    },
    {
        id: 9,
        name: "Free Bus Pass for Senior Citizens",
        name_ta: "மூத்த குடிமக்களுக்கு இலவச பேருந்து பாஸ்",
        category: "elderly",
        description: "Free travel on government buses for senior citizens",
        description_ta: "மூத்த குடிமக்களுக்கு அரசு பேருந்துகளில் இலவச பயணம்",
        eligibility: ["age:60+"],
        target_groups: ["elderly"],
        required_documents: ["aadhaar", "age_proof", "photo"],
        benefits: "Unlimited free travel on all government buses",
        how_to_apply: "Visit nearest bus depot with documents",
        apply_url: null,
        application_mode: "Offline",
        processing_time: "Same day",
        contact: "Bus Depot or Transport Office",
        common_mistakes: ["No recent photo", "Aadhaar address mismatch", "Not carrying age proof"]
    },
    {
        id: 10,
        name: "Widow Pension Scheme",
        name_ta: "விதவை ஓய்வூதிய திட்டம்",
        category: "women",
        description: "Monthly pension of ₹1,000 for widows",
        description_ta: "விதவைகளுக்கு மாதம் ₹1,000 ஓய்வூதியம்",
        eligibility: ["gender:female", "marital_status:widow", "income:below1"],
        target_groups: ["women"],
        required_documents: ["aadhaar", "husband_death_certificate", "income", "bank_passbook"],
        benefits: "₹1,000 per month pension",
        how_to_apply: "Apply at Taluk Office",
        apply_url: null,
        application_mode: "Offline",
        processing_time: "30 days",
        contact: "District Social Welfare Office",
        common_mistakes: ["Death certificate not registered", "Bank account issues", "Income exceeds limit"]
    },
    {
        id: 11,
        name: "Kalaignar Ungal Thozhil Scheme (MSME Support)",
        name_ta: "கலைஞர் உங்கள் தொழில் திட்டம் (MSME உதவி)",
        category: "farmers",
        description: "Subsidy and loans up to ₹10 lakhs for micro and small enterprises",
        description_ta: "சிறு மற்றும் நுண் தொழில்களுக்கு ₹10 லட்சம் வரை மானியம் மற்றும் கடன்",
        eligibility: ["income:below10", "occupation:business"],
        target_groups: ["farmers", "all"],
        required_documents: ["aadhaar", "pan", "bank_passbook", "income"],
        benefits: "25% capital subsidy + low interest loans for small businesses",
        how_to_apply: "Apply at District Industries Centre (DIC) or online at www.msmeonline.tn.gov.in",
        apply_url: "https://www.msmeonline.tn.gov.in",
        application_mode: "Online/Offline",
        processing_time: "45 days",
        contact: "District Industries Centre (DIC)",
        common_mistakes: ["No valid business plan", "PAN not linked to Aadhaar", "Wrong category registration"]
    },
    {
        id: 12,
        name: "Ninaithale Inikkum Scheme",
        name_ta: "நினைத்தாலே இனிக்கும் திட்டம்",
        category: "students",
        description: "Free coaching and educational support for students from SC/ST communities",
        description_ta: "SC/ST சமுதாய மாணவர்களுக்கு இலவச பயிற்சி மற்றும் கல்வி உதவி",
        eligibility: ["student:yes", "category:sc", "income:below5"],
        target_groups: ["students"],
        required_documents: ["aadhaar", "community", "income", "marksheet", "school_certificate"],
        benefits: "Free coaching, study materials, and ₹750/month stipend",
        how_to_apply: "Register through school or at Adi Dravidar and Tribal Welfare Department",
        apply_url: null,
        application_mode: "Offline",
        processing_time: "30 days",
        contact: "Adi Dravidar & Tribal Welfare District Officer",
        common_mistakes: ["Community certificate not updated", "Marks below threshold", "Missing school letter"]
    },
    {
        id: 13,
        name: "Tamilnadu Amma Mini Clinic",
        name_ta: "தமிழ்நாடு அம்மா மினி கிளினிக்",
        category: "health",
        description: "Free doorstep healthcare and diagnostics for rural and urban residents",
        description_ta: "கிராமப்புற மற்றும் நகர்ப்புற குடியிருப்பாளர்களுக்கு இலவச வீட்டு வாசல் சுகாதார சேவை",
        eligibility: ["income:below5"],
        target_groups: ["all", "elderly"],
        required_documents: ["aadhaar", "ration"],
        benefits: "Free blood tests, BP/sugar checks, medicines, doctor consultation",
        how_to_apply: "Walk in to nearest Amma Mini Clinic or call 104 for mobile unit",
        apply_url: null,
        application_mode: "Walk-in / Phone",
        processing_time: "Immediate",
        contact: "Call 104 health helpline",
        common_mistakes: ["Assuming services are paid", "Not knowing about mobile units", "Missing Aadhaar at registration"]
    },
    {
        id: 14,
        name: "Varumun Kappom Scheme (Preventive Healthcare)",
        name_ta: "வருமுன் காப்போம் திட்டம்",
        category: "health",
        description: "Annual free health check-up camps for all families in Tamil Nadu",
        description_ta: "தமிழ்நாட்டில் உள்ள அனைத்து குடும்பங்களுக்கும் ஆண்டுதோறும் இலவச உடல் நல பரிசோதனை",
        eligibility: ["income:below10"],
        target_groups: ["all"],
        required_documents: ["aadhaar", "ration"],
        benefits: "Free check-up for 32 diseases including cancer, TB, diabetes, hypertension",
        how_to_apply: "Camps held at government hospitals and primary health centres — no registration needed",
        apply_url: null,
        application_mode: "Walk-in to government health camp",
        processing_time: "Immediate at camp",
        contact: "Primary Health Centre or District Hospital",
        common_mistakes: ["Missing camp dates", "Not bringing Aadhaar", "Skipping follow-up treatment"]
    },
    {
        id: 15,
        name: "Tamilnadu Unorganised Workers Welfare Scheme",
        name_ta: "தமிழ்நாடு அமைப்பு சாரா தொழிலாளர் நல திட்டம்",
        category: "farmers",
        description: "Welfare benefits including accident relief, funeral assistance, and education aid for unorganised workers",
        description_ta: "அமைப்பு சாரா தொழிலாளர்களுக்கு விபத்து நிவாரணம், இறுதி உதவி மற்றும் கல்வி உதவி",
        eligibility: ["income:below3", "occupation:labour"],
        target_groups: ["farmers", "all"],
        required_documents: ["aadhaar", "ration", "bank_passbook", "income"],
        benefits: "₹2 lakh accident relief, ₹5,000 funeral aid, educational scholarships for children",
        how_to_apply: "Register at nearest Labour Department Office",
        apply_url: null,
        application_mode: "Offline",
        processing_time: "30 days",
        contact: "District Labour Office",
        common_mistakes: ["Not enrolled before claiming", "Delayed registration after accident", "No nominee bank account"]
    },
    {
        id: 16,
        name: "Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme",
        name_ta: "மூவலூர் ராமாமிர்தம் அம்மையார் உயர்கல்வி உறுதி திட்டம்",
        category: "students",
        description: "₹1,000/month stipend for first-generation girl students pursuing higher education",
        description_ta: "உயர்கல்வி பயிலும் முதல் தலைமுறை பெண் மாணவர்களுக்கு மாதம் ₹1,000 உதவித்தொகை",
        eligibility: ["gender:female", "student:yes", "income:below3"],
        target_groups: ["students", "women"],
        required_documents: ["aadhaar", "income", "school_certificate", "marksheet", "birth_certificate"],
        benefits: "₹1,000/month for up to 3 years of college or polytechnic",
        how_to_apply: "Apply through college office or at Social Welfare Department",
        apply_url: null,
        application_mode: "Offline",
        processing_time: "45 days",
        contact: "Social Welfare and Women Empowerment Department",
        common_mistakes: ["Not a first-generation college student", "Income certificate expired", "Not enrolled in recognised institution"]
    },
    {
        id: 17,
        name: "Tamilnadu Drought Relief (PM Kisan + State Top-up)",
        name_ta: "தமிழ்நாடு வறட்சி நிவாரண திட்டம் (PM Kisan + மாநில கூடுதல் உதவி)",
        category: "farmers",
        description: "Additional ₹2,000 state top-up per year for farmers affected by drought, on top of PM Kisan",
        description_ta: "PM Kisan-க்கு கூடுதலாக வறட்சி பாதிக்கப்பட்ட விவசாயிகளுக்கு ஆண்டுக்கு ₹2,000 மாநில உதவி",
        eligibility: ["occupation:farmer", "landowner:yes", "income:below5"],
        target_groups: ["farmers"],
        required_documents: ["aadhaar", "land_documents", "bank_passbook", "ration"],
        benefits: "₹2,000 extra per year directly to bank (plus ₹6,000 PM Kisan = ₹8,000 total)",
        how_to_apply: "Registered PM Kisan beneficiaries are auto-enrolled; new applicants visit Block Agriculture Office",
        apply_url: "https://pmkisan.gov.in",
        application_mode: "Online (PM Kisan portal) / Offline (Agriculture Office)",
        processing_time: "3 months (new registration)",
        contact: "Block Level Agriculture Officer",
        common_mistakes: ["Aadhaar not seeded with bank account", "Land record not updated", "Multiple family members applying for same land"]
    },
    {
        id: 18,
        name: "Tamilnadu Housing Board Scheme for EWS/LIG",
        name_ta: "தமிழ்நாடு வீட்டுவசதி வாரிய திட்டம் (EWS/LIG)",
        category: "health",
        description: "Affordable housing allocation for economically weaker sections and low-income families",
        description_ta: "பொருளாதார நலிவடைந்த மற்றும் குறைந்த வருமான குடும்பங்களுக்கு மலிவு விலை வீட்டுவசதி",
        eligibility: ["income:below3"],
        target_groups: ["all"],
        required_documents: ["aadhaar", "income", "ration", "bank_passbook"],
        benefits: "Subsidised flat or house at 30–50% below market price with home loan support",
        how_to_apply: "Apply online at TNHB portal during open draw period",
        apply_url: "https://www.tnhb.gov.in",
        application_mode: "Online",
        processing_time: "6–12 months (lottery based)",
        contact: "Tamil Nadu Housing Board District Office",
        common_mistakes: ["Missing draw application window", "Incorrect income declaration", "Not having a valid bank account for EMI"]
    },
    {
        id: 19,
        name: "Chief Minister's Solar Powered Green House Scheme",
        name_ta: "முதலமைச்சர் சூரிய ஆற்றல் பசுமை இல்லம் திட்டம்",
        category: "farmers",
        description: "Free solar panels for BPL households to reduce electricity bills",
        description_ta: "வறுமை கோட்டுக்கு கீழ் உள்ள குடும்பங்களுக்கு இலவச சூரிய மின்சார பலகைகள்",
        eligibility: ["income:below1"],
        target_groups: ["all"],
        required_documents: ["aadhaar", "ration", "income", "bank_passbook"],
        benefits: "1KW rooftop solar panel free of cost; saves up to ₹1,000/month on electricity",
        how_to_apply: "Apply at TANGEDCO district office or online at solar.tn.gov.in",
        apply_url: "https://solar.tn.gov.in",
        application_mode: "Online/Offline",
        processing_time: "60 days",
        contact: "TANGEDCO District Office or call 1912",
        common_mistakes: ["Roof ownership not documented", "Not in BPL list", "Missing ration card for BPL verification"]
    },
    {
        id: 20,
        name: "Pudhumai Penn Scheme",
        name_ta: "புதுமை பெண் திட்டம்",
        category: "students",
        description: "₹1,000/month for girls studying in government schools from Class 6 to college",
        description_ta: "அரசு பள்ளியில் படிக்கும் 6ஆம் வகுப்பு முதல் கல்லூரி வரை பெண்களுக்கு மாதம் ₹1,000",
        eligibility: ["gender:female", "student:yes", "income:below5"],
        target_groups: ["students", "women"],
        required_documents: ["aadhaar", "school_certificate", "income", "bank_passbook"],
        benefits: "₹1,000/month directly to girl student's bank account throughout education",
        how_to_apply: "Register through school/college office — automatic enrollment for eligible students",
        apply_url: null,
        application_mode: "School-based / College",
        processing_time: "60 days",
        contact: "School Headmaster or Higher Education Department",
        common_mistakes: ["Account not in student's own name", "Aadhaar-bank link missing", "Enrolled in private unaided school (not eligible)"]
    }
];

// ==================== GLOBAL STATE ====================
let currentLanguage = 'en';
let userProfile = null;
let currentFilter = 'all';
let searchQuery = '';
let recentlyViewed = [];
let recognition = null;
let voiceEnabled = true;

// ==================== TRANSLATIONS ====================
const translations = {
    en: {
        siteTitle: "MAKKAL SEVAI",
        siteSubtitle: "Tamil Nadu Government Service Assistant",
        profileBtnText: "Profile",
        welcomeTitle: "Welcome back!",
        welcomeMessage: "Here are your personalized recommendations",
        eligibleSchemesTitle: "Eligible Schemes",
        eligibleText: "schemes match your profile",
        missingDocsTitle: "Missing Documents",
        missingDocsText: "documents needed",
        recentTitle: "Viewing History",
        recentText: "schemes viewed",
        recommendedTitle: "Recommended for You",
        profileFormTitle: "Create Your Profile",
        profileFormSubtitle: "Help us personalize your experience and find the best schemes for you",
        searchTitle: "Search Schemes",
        voiceBtnText: "Voice Search",
        loadingText: "Loading schemes...",
        noResultsTitle: "No schemes found",
        noResultsText: "Try adjusting your search or filters",
        labelFullName: "Full Name *",
        labelAge: "Age *",
        labelGender: "Gender *",
        labelDistrict: "District *",
        labelIncome: "Annual Income Range *",
        labelEducation: "Education Level",
        labelOccupation: "Occupation",
        labelCategory: "Category (Optional)",
        labelDisability: "Disability Status *",
        labelDocuments: "Documents Available (Check all that you have)",
        privacyTitle: "Privacy & Security",
        privacyText: "Your profile data is stored locally on your device only. We do not send your information to any external servers. You can delete your profile at any time.",
        btnSaveProfile: "Save Profile & Continue",
        btnSkip: "Skip for Now",
        historyTitle: "Viewing History",
        historyDescription: "Track all the schemes you've explored",
        historyEmptyTitle: "No History Yet",
        historyEmptyText: "Start exploring schemes to build your history",
        backBtnText: "Back to Dashboard"
    },
    ta: {
        siteTitle: "மக்கள் சேவை",
        siteSubtitle: "தமிழ்நாடு அரசு சேவை உதவியாளர்",
        profileBtnText: "சுயவிவரம்",
        welcomeTitle: "மீண்டும் வருக!",
        welcomeMessage: "உங்களுக்கான தனிப்பயன் பரிந்துரைகள் இதோ",
        eligibleSchemesTitle: "தகுதியான திட்டங்கள்",
        eligibleText: "திட்டங்கள் பொருந்துகின்றன",
        missingDocsTitle: "விடுபட்ட ஆவணங்கள்",
        missingDocsText: "ஆவணங்கள் தேவை",
        recentTitle: "பார்வை வரலாறு",
        recentText: "திட்டங்கள் பார்க்கப்பட்டன",
        recommendedTitle: "உங்களுக்கான பரிந்துரைகள்",
        profileFormTitle: "உங்கள் சுயவிவரத்தை உருவாக்கவும்",
        profileFormSubtitle: "உங்கள் அனுபவத்தை தனிப்பயனாக்க மற்றும் உங்களுக்கு சிறந்த திட்டங்களைக் கண்டறிய எங்களுக்கு உதவுங்கள்",
        searchTitle: "திட்டங்களைத் தேடுங்கள்",
        voiceBtnText: "குரல் தேடல்",
        loadingText: "திட்டங்கள் ஏற்றப்படுகின்றன...",
        noResultsTitle: "திட்டங்கள் இல்லை",
        noResultsText: "உங்கள் தேடல் அல்லது வடிப்பான்களை சரிசெய்யவும்",
        labelFullName: "முழு பெயர் *",
        labelAge: "வயது *",
        labelGender: "பாலினம் *",
        labelDistrict: "மாவட்டம் *",
        labelIncome: "ஆண்டு வருமான வரம்பு *",
        labelEducation: "கல்வி நிலை",
        labelOccupation: "தொழில்",
        labelCategory: "வகை (விரும்பினால்)",
        labelDisability: "மாற்றுத்திறன் நிலை *",
        labelDocuments: "கிடைக்கும் ஆவணங்கள் (உங்களிடம் உள்ளவற்றைத் தேர்வு செய்யவும்)",
        privacyTitle: "தனியுரிமை மற்றும் பாதுகாப்பு",
        privacyText: "உங்கள் சுயவிவர தரவு உங்கள் சாதனத்தில் மட்டுமே சேமிக்கப்படுகிறது. உங்கள் தகவலை நாங்கள் வெளிப்புற சேவையகங்களுக்கு அனுப்பவில்லை. நீங்கள் எந்த நேரத்திலும் உங்கள் சுயவிவரத்தை நீக்கலாம்.",
        btnSaveProfile: "சுயவிவரத்தைச் சேமித்து தொடரவும்",
        btnSkip: "இப்போதைக்கு தவிர்க்கவும்",
        historyTitle: "பார்வை வரலாறு",
        historyDescription: "நீங்கள் ஆராய்ந்த அனைத்து திட்டங்களையும் கண்காணிக்கவும்",
        historyEmptyTitle: "இன்னும் வரலாறு இல்லை",
        historyEmptyText: "உங்கள் வரலாற்றை உருவாக்க திட்டங்களை ஆராயத் தொடங்குங்கள்",
        backBtnText: "டாஷ்போர்டுக்குத் திரும்பு"
    }
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    loadUserProfile();
    loadVoiceSetting();
    initializeVoiceRecognition();
    setupEventListeners();
    showInitialView();
    loadRecentlyViewed();
    updateFilterCounts();
});

function showInitialView() {
    if (userProfile) {
        showDashboard();
        updateDashboardStats();
        displayRecommendedSchemes();
    } else {
        showProfileForm();
    }
    displayAllSchemes();
}

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('profileForm').addEventListener('submit', handleProfileSubmit);
    document.getElementById('profileBtn').addEventListener('click', toggleProfile);
    document.getElementById('btnSkip').addEventListener('click', skipProfile);
    document.getElementById('voiceBtn').addEventListener('click', startVoiceSearch);
    document.getElementById('voiceToggleCheckbox').addEventListener('change', function() {
        toggleVoiceFeature(this.checked);
    });
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('applyModalClose').addEventListener('click', closeApplyModal);
    document.getElementById('viewHistoryBtn').addEventListener('click', showHistory);
    document.getElementById('historyCard').addEventListener('click', showHistory);
    document.getElementById('backFromHistory').addEventListener('click', showDashboard);
    
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterSchemes(this.dataset.filter);
        });
    });
    
    // Hero village icon buttons
    document.querySelectorAll('.hero-village-icon').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            scrollToSchemes();
            filterSchemes(category);
            highlightHeroIcon(this);
        });
    });
    
    // Close modals on outside click
    document.getElementById('schemeModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    document.getElementById('applyModal').addEventListener('click', function(e) {
        if (e.target === this) closeApplyModal();
    });
}

// ==================== PROFILE MANAGEMENT ====================
function loadUserProfile() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        userProfile = JSON.parse(savedProfile);
        updateProfileDisplay();
    }
}

function saveUserProfile(profileData) {
    userProfile = profileData;
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    updateProfileDisplay();
}

function updateProfileDisplay() {
    if (userProfile) {
        const initials = userProfile.fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        document.getElementById('profileIcon').textContent = initials;
    }
}

function handleProfileSubmit(e) {
    e.preventDefault();

    const documents = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
        documents.push(cb.value);
    });

    const age = parseInt(document.getElementById('age').value);
    const profileData = {
        fullName: document.getElementById('fullName').value,
        age: age,
        isSeniorCitizen: age >= 60,
        gender: document.getElementById('gender').value,
        district: document.getElementById('district').value,
        income: document.getElementById('income').value,
        education: document.getElementById('education').value,
        occupation: document.getElementById('occupation').value,
        category: document.getElementById('category').value,
        disability: document.getElementById('disability').value === 'yes',
        documents: documents,
        createdAt: new Date().toISOString()
    };

    saveUserProfile(profileData);
    showDashboard();
    updateDashboardStats();
    displayRecommendedSchemes();
    displayAllSchemes();
    updateFilterCounts();

    if (currentLanguage === 'ta') {
        speakText('உங்கள் சுயவிவரம் வெற்றிகரமாக உருவாக்கப்பட்டது!', 'ta');
    } else {
        speakText('Profile created successfully!', 'en');
    }
}

function toggleProfile() {
    if (userProfile) {
        if (confirm(currentLanguage === 'ta' ? 'சுயவிவரத்தைத் திருத்த வேண்டுமா?' : 'Edit profile?')) {
            showProfileForm();
            populateProfileForm();
        }
    } else {
        showProfileForm();
    }
}

function populateProfileForm() {
    if (!userProfile) return;

    document.getElementById('fullName').value = userProfile.fullName || '';
    document.getElementById('age').value = userProfile.age || '';
    document.getElementById('gender').value = userProfile.gender || '';
    document.getElementById('district').value = userProfile.district || '';
    document.getElementById('income').value = userProfile.income || '';
    document.getElementById('education').value = userProfile.education || '';
    document.getElementById('occupation').value = userProfile.occupation || '';
    document.getElementById('category').value = userProfile.category || '';
    document.getElementById('disability').value = userProfile.disability ? 'yes' : 'no';

    userProfile.documents.forEach(doc => {
        const checkbox = document.querySelector(`input[value="${doc}"]`);
        if (checkbox) checkbox.checked = true;
    });
}

function skipProfile() {
    showDashboard();
    displayAllSchemes();
    updateFilterCounts();
}

function showDashboard() {
    document.getElementById('dashboardSection').classList.add('active');
    document.getElementById('profileSection').classList.remove('active');
    document.getElementById('historySection').classList.remove('active');
    document.getElementById('schemesSection').style.display = 'block';
}

function showProfileForm() {
    document.getElementById('dashboardSection').classList.remove('active');
    document.getElementById('profileSection').classList.add('active');
    document.getElementById('historySection').classList.remove('active');
    document.getElementById('schemesSection').style.display = 'none';
}

// ==================== HISTORY MANAGEMENT ====================
function showHistory() {
    document.getElementById('dashboardSection').classList.remove('active');
    document.getElementById('profileSection').classList.remove('active');
    document.getElementById('historySection').classList.add('active');
    document.getElementById('schemesSection').style.display = 'none';
    
    displayHistory();
}

function displayHistory() {
    const historyList = document.getElementById('historyList');
    const historyEmpty = document.getElementById('historyEmpty');
    
    if (recentlyViewed.length === 0) {
        historyList.innerHTML = '';
        historyEmpty.classList.add('show');
    } else {
        historyEmpty.classList.remove('show');
        const historyItems = recentlyViewed.map(schemeId => {
            const scheme = schemesData.find(s => s.id === schemeId);
            if (!scheme) return '';
            
            const name = currentLanguage === 'ta' ? scheme.name_ta : scheme.name;
            const desc = currentLanguage === 'ta' ? scheme.description_ta : scheme.description;
            
            return `
                <div class="history-item" onclick="showSchemeDetails(${scheme.id})">
                    <div class="history-item-content">
                        <h4>${name}</h4>
                        <p>${desc}</p>
                    </div>
                    <div class="history-item-time">
                        <span style="color: var(--primary-color);">→</span>
                    </div>
                </div>
            `;
        }).join('');
        
        historyList.innerHTML = historyItems;
    }
}

function addToRecentlyViewed(schemeId) {
    recentlyViewed = recentlyViewed.filter(id => id !== schemeId);
    recentlyViewed.unshift(schemeId);
    recentlyViewed = recentlyViewed.slice(0, 20);
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    updateDashboardStats();
}

function loadRecentlyViewed() {
    const saved = localStorage.getItem('recentlyViewed');
    if (saved) recentlyViewed = JSON.parse(saved);
}

// ==================== ELIGIBILITY ENGINE ====================
function checkEligibility(scheme) {
    if (!userProfile) return { eligible: true, missing: [] };

    let eligible = true;
    const missing = [];

    scheme.required_documents.forEach(doc => {
        if (!userProfile.documents.includes(doc)) {
            missing.push(doc);
        }
    });

    if (scheme.eligibility.some(e => e.includes('age:60+'))) {
        if (userProfile.age < 60) eligible = false;
    }

    const incomeRequirement = scheme.eligibility.find(e => e.includes('income:'));
    if (incomeRequirement) {
        const requiredIncome = incomeRequirement.split(':')[1];
        if (requiredIncome === 'below1' && !['below1'].includes(userProfile.income)) eligible = false;
        if (requiredIncome === 'below3' && !['below1', '1to3'].includes(userProfile.income)) eligible = false;
        if (requiredIncome === 'below5' && !['below1', '1to3', '3to5'].includes(userProfile.income)) eligible = false;
    }

    if (scheme.eligibility.some(e => e === 'gender:female')) {
        if (userProfile.gender !== 'female') eligible = false;
    }

    if (scheme.eligibility.some(e => e === 'disability:yes')) {
        if (!userProfile.disability) eligible = false;
    }

    return {
        eligible: eligible && missing.length === 0,
        partiallyEligible: eligible && missing.length > 0,
        missing: missing
    };
}

function getEligibilityBadge(eligibilityStatus) {
    if (eligibilityStatus.eligible) {
        return `<span class="eligibility-badge badge-eligible">✓ ${currentLanguage === 'ta' ? 'தகுதியானது' : 'Eligible'}</span>`;
    } else if (eligibilityStatus.partiallyEligible) {
        return `<span class="eligibility-badge badge-missing">⚠ ${currentLanguage === 'ta' ? 'ஆவணங்கள் தேவை' : 'Docs Needed'}</span>`;
    } else {
        return `<span class="eligibility-badge badge-ineligible">✗ ${currentLanguage === 'ta' ? 'தகுதியற்றது' : 'Not Eligible'}</span>`;
    }
}

function getMissingDocsHTML(missing) {
    if (missing.length === 0) return '';

    const docNames = {
        aadhaar: 'Aadhaar Card', pan: 'PAN Card', ration: 'Ration Card',
        income: 'Income Certificate', community: 'Community Certificate',
        disability_cert: 'Disability Certificate', pension: 'Pension Card',
        bank_passbook: 'Bank Passbook', age_proof: 'Age Proof',
        employment_proof: 'Employment Proof', driving_license: 'Driving License',
        marksheet: 'Marksheet', school_certificate: 'School Certificate',
        land_documents: 'Land Documents', marriage_invitation: 'Marriage Invitation',
        husband_death_certificate: 'Death Certificate', birth_certificate: 'Birth Certificate',
        photo: 'Passport Size Photo'
    };

    const docNamesTa = {
        aadhaar: 'ஆதார் அட்டை', pan: 'பான் அட்டை', ration: 'ரேஷன் அட்டை',
        income: 'வருமான சான்றிதழ்', community: 'சமுதாய சான்றிதழ்',
        disability_cert: 'மாற்றுத்திறன் சான்றிதழ்', pension: 'ஓய்வூதிய அட்டை',
        bank_passbook: 'வங்கி பாஸ்புக்', age_proof: 'வயது ஆதாரம்',
        employment_proof: 'வேலை ஆதாரம்', driving_license: 'ஓட்டுநர் உரிமம்',
        marksheet: 'மதிப்பெண் சான்றிதழ்', school_certificate: 'பள்ளி சான்றிதழ்',
        land_documents: 'நில ஆவணங்கள்', marriage_invitation: 'திருமண அழைப்பிதழ்',
        husband_death_certificate: 'இறப்பு சான்றிதழ்', birth_certificate: 'பிறப்பு சான்றிதழ்',
        photo: 'பாஸ்போர்ட் அளவு புகைப்படம்'
    };

    const names = currentLanguage === 'ta' ? docNamesTa : docNames;
    const title = currentLanguage === 'ta' ? 'விடுபட்ட ஆவணங்கள்' : 'Missing Documents';
    const howToGet = currentLanguage === 'ta' ? 'இவற்றைப் பெறுவது எப்படி:' : 'How to obtain:';

    let html = `<div class="missing-docs">
        <h4>${title}</h4>
        <ul class="doc-list">`;
    missing.forEach(doc => { html += `<li>${names[doc] || doc}</li>`; });
    html += `</ul>
        <p style="margin-top: 0.5rem; font-size: 0.9rem;">${howToGet} ${currentLanguage === 'ta' ? 'தாலூக்கா அலுவலகம் அல்லது மாவட்ட அலுவலகத்தை பார்வையிடவும்' : 'Visit Taluk Office or District Office'}</p>
    </div>`;
    return html;
}

// ==================== DASHBOARD FUNCTIONS ====================
function updateDashboardStats() {
    if (!userProfile) {
        document.getElementById('eligibleCount').textContent = 0;
        document.getElementById('missingDocsCount').textContent = 0;
        document.getElementById('recentCount').textContent = recentlyViewed.length;
        return;
    }

    let eligibleCount = 0;
    let missingDocsCount = 0;

    schemesData.forEach(scheme => {
        const eligibility = checkEligibility(scheme);
        if (eligibility.eligible) eligibleCount++;
        missingDocsCount += eligibility.missing.length;
    });

    document.getElementById('eligibleCount').textContent = eligibleCount;
    document.getElementById('missingDocsCount').textContent = missingDocsCount;
    document.getElementById('recentCount').textContent = recentlyViewed.length;

    if (currentLanguage === 'ta') {
        document.getElementById('welcomeTitle').textContent = `வணக்கம், ${userProfile.fullName}!`;
    } else {
        document.getElementById('welcomeTitle').textContent = `Welcome back, ${userProfile.fullName}!`;
    }
}

function displayRecommendedSchemes() {
    if (!userProfile) return;

    const container = document.getElementById('recommendedContainer');
    const eligible = schemesData.filter(scheme => {
        const eligibility = checkEligibility(scheme);
        return eligibility.eligible || eligibility.partiallyEligible;
    }).slice(0, 6);

    if (eligible.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-light);">
            ${currentLanguage === 'ta' ? 'உங்களுக்கான பரிந்துரைகள் இல்லை' : 'No recommendations yet'}
        </p>`;
        return;
    }

    container.innerHTML = eligible.map(scheme => createSchemeCard(scheme)).join('');
}

// ==================== FILTER COUNTS ====================
function updateFilterCounts() {
    const counts = {
        all: schemesData.length,
        women: 0,
        elderly: 0,
        students: 0,
        farmers: 0,
        disability: 0,
        health: 0
    };

    schemesData.forEach(scheme => {
        if (scheme.target_groups.includes('women') || scheme.category === 'women') counts.women++;
        if (scheme.target_groups.includes('elderly') || scheme.category === 'elderly') counts.elderly++;
        if (scheme.target_groups.includes('students') || scheme.category === 'students') counts.students++;
        if (scheme.target_groups.includes('farmers') || scheme.category === 'farmers') counts.farmers++;
        if (scheme.target_groups.includes('disability') || scheme.category === 'disability') counts.disability++;
        if (scheme.category === 'health') counts.health++;
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        const filter = btn.dataset.filter;
        const countSpan = btn.querySelector('.filter-count');
        if (countSpan && counts[filter] !== undefined) {
            countSpan.textContent = counts[filter];
        }
    });
}

// ==================== SCHEME DISPLAY ====================
function displayAllSchemes() {
    const container = document.getElementById('schemesContainer');
    let filtered = schemesData;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(scheme =>
            scheme.target_groups.includes(currentFilter) || scheme.category === currentFilter
        );
    }

    if (searchQuery) {
        filtered = filtered.filter(scheme => {
            const searchLower = searchQuery.toLowerCase();
            return scheme.name.toLowerCase().includes(searchLower) ||
                   scheme.name_ta.includes(searchQuery) ||
                   scheme.description.toLowerCase().includes(searchLower);
        });
    }

    if (userProfile) {
        filtered.sort((a, b) => {
            const aElig = checkEligibility(a);
            const bElig = checkEligibility(b);
            if (aElig.eligible && !bElig.eligible) return -1;
            if (!aElig.eligible && bElig.eligible) return 1;
            if (aElig.partiallyEligible && !bElig.partiallyEligible) return -1;
            if (!aElig.partiallyEligible && bElig.partiallyEligible) return 1;
            return 0;
        });
    }

    if (filtered.length === 0) {
        document.getElementById('noResults').classList.remove('hidden');
        container.innerHTML = '';
    } else {
        document.getElementById('noResults').classList.add('hidden');
        container.innerHTML = filtered.map(scheme => createSchemeCard(scheme)).join('');
    }
}

function createSchemeCard(scheme) {
    const eligibility = userProfile ? checkEligibility(scheme) : { eligible: true, missing: [] };
    const name = currentLanguage === 'ta' ? scheme.name_ta : scheme.name;
    const desc = currentLanguage === 'ta' ? scheme.description_ta : scheme.description;

    const speakDisabledClass = voiceEnabled ? '' : 'voice-disabled';
    const speakTitle = voiceEnabled
        ? (currentLanguage === 'ta' ? 'கேளுங்கள்' : 'Listen')
        : (currentLanguage === 'ta' ? 'குரல் முடக்கப்பட்டுள்ளது' : 'Voice is off');

    const applyLabel = currentLanguage === 'ta' ? '📝 விண்ணப்பிக்கவும்' : '📝 Apply Here';
    const detailsLabel = currentLanguage === 'ta' ? 'விவரங்கள்' : 'View Details';

    return `
        <div class="scheme-card" onclick="showSchemeDetails(${scheme.id})">
            <div class="scheme-header">
                <div>
                    <h3 class="scheme-title">${name}</h3>
                    <span class="scheme-category">${scheme.category}</span>
                </div>
                ${userProfile ? getEligibilityBadge(eligibility) : ''}
            </div>
            <p class="scheme-description">${desc}</p>
            ${userProfile && eligibility.missing.length > 0 ? getMissingDocsHTML(eligibility.missing) : ''}
            <div class="scheme-actions" onclick="event.stopPropagation()">
                <button class="btn-details" onclick="showSchemeDetails(${scheme.id})">${detailsLabel}</button>
                <button class="btn-apply" onclick="event.stopPropagation(); showApplyModal(${scheme.id})">${applyLabel}</button>
                <button class="btn-speak ${speakDisabledClass}" onclick="event.stopPropagation(); speakScheme(${scheme.id})" title="${speakTitle}">🔊</button>
            </div>
        </div>
    `;
}

// ==================== SCHEME DETAILS ====================
function showSchemeDetails(schemeId) {
    const scheme = schemesData.find(s => s.id === schemeId);
    if (!scheme) return;

    addToRecentlyViewed(schemeId);

    const eligibility = userProfile ? checkEligibility(scheme) : { eligible: true, missing: [] };
    const name = currentLanguage === 'ta' ? scheme.name_ta : scheme.name;
    const desc = currentLanguage === 'ta' ? scheme.description_ta : scheme.description;

    const listenBtnLabel = currentLanguage === 'ta' ? 'விவரங்களைக் கேளுங்கள்' : 'Listen to Details';
    const listenDisabled = voiceEnabled ? '' : 'disabled style="opacity:0.4;cursor:not-allowed;"';

    const content = `
        ${userProfile ? getEligibilityBadge(eligibility) : ''}
        <p style="margin: 1rem 0; font-size: 1.1rem;">${desc}</p>
        ${eligibility.missing.length > 0 ? getMissingDocsHTML(eligibility.missing) : ''}
        <div class="guidance-section">
            <h3>📋 ${currentLanguage === 'ta' ? 'விண்ணப்ப வழிகாட்டுதல்' : 'Application Guidance'}</h3>
            <ul class="step-list">
                <li class="step-item"><span class="step-number">1</span><strong>${currentLanguage === 'ta' ? 'எங்கே விண்ணப்பிக்க வேண்டும்' : 'Where to Apply'}:</strong> ${scheme.application_mode}</li>
                <li class="step-item"><span class="step-number">2</span><strong>${currentLanguage === 'ta' ? 'எப்படி விண்ணப்பிக்க வேண்டும்' : 'How to Apply'}:</strong> ${scheme.how_to_apply}</li>
                <li class="step-item"><span class="step-number">3</span><strong>${currentLanguage === 'ta' ? 'செயலாக்க நேரம்' : 'Processing Time'}:</strong> ${scheme.processing_time}</li>
                <li class="step-item"><span class="step-number">4</span><strong>${currentLanguage === 'ta' ? 'தொடர்பு' : 'Contact'}:</strong> ${scheme.contact}</li>
            </ul>
        </div>
        <div class="guidance-section">
            <h3>⚠️ ${currentLanguage === 'ta' ? 'தவிர்க்க வேண்டிய பொதுவான தவறுகள்' : 'Common Mistakes to Avoid'}</h3>
            <ul class="doc-list">${scheme.common_mistakes.map(m => `<li>${m}</li>`).join('')}</ul>
        </div>
        <div class="checklist">
            <h4 style="margin-bottom: 0.5rem;">✓ ${currentLanguage === 'ta' ? 'தயார்நிலை சரிபார்ப்புப் பட்டியல்' : 'Preparation Checklist'}</h4>
            ${scheme.required_documents.map(doc => `<div class="checklist-item">${doc.replace('_', ' ').toUpperCase()}</div>`).join('')}
        </div>
        <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="speakScheme(${scheme.id})" ${listenDisabled}>
                🔊 ${listenBtnLabel}
            </button>
            <button class="btn-apply" style="min-width:160px; border-radius:8px;" onclick="closeModal(); showApplyModal(${scheme.id})">
                📝 ${currentLanguage === 'ta' ? 'விண்ணப்பிக்கவும்' : 'Apply Here'}
            </button>
        </div>
    `;

    document.getElementById('modalTitle').textContent = name;
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('schemeModal').classList.add('active');
}

function closeModal() {
    document.getElementById('schemeModal').classList.remove('active');
}

// ==================== APPLY MODAL ====================
function showApplyModal(schemeId) {
    const scheme = schemesData.find(s => s.id === schemeId);
    if (!scheme) return;

    const name = currentLanguage === 'ta' ? scheme.name_ta : scheme.name;
    const isTa = currentLanguage === 'ta';

    document.getElementById('applyModalTitle').textContent = name;
    document.getElementById('applyModalSubtitle').textContent = isTa
        ? 'விண்ணப்பிக்க கீழுள்ள படிகளை பின்பற்றவும்'
        : 'Follow the steps below to apply';

    const docNames = {
        aadhaar: 'Aadhaar Card', pan: 'PAN Card', ration: 'Ration Card',
        income: 'Income Certificate', community: 'Community Certificate',
        disability_cert: 'Disability Certificate', pension: 'Pension Card',
        bank_passbook: 'Bank Passbook', age_proof: 'Age Proof',
        employment_proof: 'Employment Proof', driving_license: 'Driving License',
        marksheet: 'Marksheet', school_certificate: 'School Certificate',
        land_documents: 'Land Documents', marriage_invitation: 'Marriage Invitation',
        husband_death_certificate: 'Death Certificate', birth_certificate: 'Birth Certificate',
        photo: 'Passport Size Photo'
    };

    const docsTitle = isTa ? 'தேவையான ஆவணங்கள்' : 'Required Documents';
    const docsHtml = `
        <h4>${docsTitle}</h4>
        <ul>${scheme.required_documents.map(d => `<li>${docNames[d] || d}</li>`).join('')}</ul>
    `;
    document.getElementById('applyRequirementsBox').innerHTML = docsHtml;

    const steps = [
        {
            title: isTa ? 'ஆவணங்களை சேகரிக்கவும்' : 'Gather your documents',
            desc: isTa ? 'மேலே பட்டியலிடப்பட்ட அனைத்து ஆவணங்களையும் தயாராக வைத்திருங்கள்.' : 'Make sure all listed documents are ready and valid.'
        },
        {
            title: isTa ? 'விண்ணப்பிக்கும் முறை' : `Application mode: ${scheme.application_mode}`,
            desc: scheme.how_to_apply
        },
        {
            title: isTa ? 'செயலாக்க நேரம்' : 'Processing time',
            desc: scheme.processing_time
        },
        {
            title: isTa ? 'உதவிக்கு தொடர்பு கொள்ளவும்' : 'Contact for help',
            desc: scheme.contact
        }
    ];

    document.getElementById('applyStepList').innerHTML = steps.map((s, i) => `
        <li class="apply-step-item">
            <div class="apply-step-num">${i + 1}</div>
            <div class="apply-step-text">
                <strong>${s.title}</strong>
                <span>${s.desc}</span>
            </div>
        </li>
    `).join('');

    const onlineLabel = isTa ? '🌐 ஆன்லைனில் விண்ணப்பிக்கவும்' : '🌐 Apply Online';
    const offlineLabel = isTa ? '🏛️ அலுவலகத்தில் விண்ணப்பிக்கவும்' : '🏛️ Visit Office';

    let btns = '';
    if (scheme.apply_url) {
        btns += `<a href="${scheme.apply_url}" target="_blank" class="apply-btn-online">${onlineLabel}</a>`;
    }
    btns += `<button class="apply-btn-offline" onclick="closeApplyModal()">${offlineLabel}</button>`;
    document.getElementById('applyActionBtns').innerHTML = btns;

    document.getElementById('applyModal').classList.add('active');
}

function closeApplyModal() {
    document.getElementById('applyModal').classList.remove('active');
}

// ==================== SEARCH & FILTER ====================
function handleSearch(e) {
    searchQuery = e.target.value;
    displayAllSchemes();
}

function filterSchemes(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) btn.classList.add('active');
    });
    displayAllSchemes();
}

// Helper function to scroll to schemes section
function scrollToSchemes() {
    const schemesSection = document.getElementById('schemesSection');
    if (schemesSection) {
        schemesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Helper function to highlight active hero icon
function highlightHeroIcon(clickedBtn) {
    document.querySelectorAll('.hero-village-icon').forEach(btn => {
        btn.classList.remove('active');
    });
    clickedBtn.classList.add('active');
    
    // Remove highlight after animation
    setTimeout(() => {
        clickedBtn.classList.remove('active');
    }, 2000);
}

// ==================== VOICE FEATURES ====================
function initializeVoiceRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById('searchInput').value = transcript;
            searchQuery = transcript;
            displayAllSchemes();
            stopVoiceSearch();
        };

        recognition.onerror = function() { stopVoiceSearch(); };
        recognition.onend = function() { stopVoiceSearch(); };
    }
}

function startVoiceSearch() {
    if (!voiceEnabled) {
        const msg = currentLanguage === 'ta'
            ? 'குரல் அம்சம் முடக்கப்பட்டுள்ளது. இயக்க மேல் தலைப்பிலுள்ள குரல் திருப்பியை இயக்கவும்.'
            : 'Voice feature is off. Please turn on the Voice toggle in the header.';
        alert(msg);
        return;
    }

    if (!recognition) {
        alert(currentLanguage === 'ta' ? 'குரல் தேடல் ஆதரிக்கப்படவில்லை' : 'Voice search not supported');
        return;
    }

    const btn = document.getElementById('voiceBtn');
    btn.classList.add('listening');
    btn.querySelector('span').textContent = currentLanguage === 'ta' ? 'கேட்கிறது...' : 'Listening...';

    recognition.lang = currentLanguage === 'ta' ? 'ta-IN' : 'en-IN';
    recognition.start();
}

function stopVoiceSearch() {
    const btn = document.getElementById('voiceBtn');
    btn.classList.remove('listening');
    btn.querySelector('span').textContent = currentLanguage === 'ta' ? 'குரல் தேடல்' : 'Voice Search';
}

function speakScheme(schemeId) {
    if (!voiceEnabled) return;

    const scheme = schemesData.find(s => s.id === schemeId);
    if (!scheme) return;

    const eligibility = userProfile ? checkEligibility(scheme) : { eligible: true, missing: [] };
    let text = '';

    if (currentLanguage === 'ta') {
        text = `${scheme.name_ta}. ${scheme.description_ta}.`;
        if (userProfile) {
            if (eligibility.eligible) text += ' நீங்கள் இந்த திட்டத்திற்கு தகுதியானவர்.';
            else if (eligibility.missing.length > 0) text += ` உங்களுக்கு ${eligibility.missing.length} ஆவணங்கள் தேவை.`;
        }
        text += ` விண்ணப்பிக்க: ${scheme.how_to_apply}`;
    } else {
        text = `${scheme.name}. ${scheme.description}.`;
        if (userProfile) {
            if (eligibility.eligible) text += ' You are eligible for this scheme.';
            else if (eligibility.missing.length > 0) text += ` You need ${eligibility.missing.length} documents.`;
        }
        text += ` How to apply: ${scheme.how_to_apply}`;
    }

    speakText(text, currentLanguage);
}

function speakText(text, lang) {
    if (!voiceEnabled) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'ta' ? 'ta-IN' : 'en-IN';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

// ==================== VOICE TOGGLE ====================
function loadVoiceSetting() {
    const saved = localStorage.getItem('voiceEnabled');
    if (saved !== null) {
        voiceEnabled = saved === 'true';
    } else {
        voiceEnabled = true;
    }
    applyVoiceToggleUI(voiceEnabled);
    document.getElementById('voiceToggleCheckbox').checked = voiceEnabled;
}

function toggleVoiceFeature(enabled) {
    voiceEnabled = enabled;
    localStorage.setItem('voiceEnabled', String(enabled));

    if (!enabled) {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        if (recognition) { try { recognition.stop(); } catch(e) {} }
        stopVoiceSearch();
    }

    applyVoiceToggleUI(enabled);
    showVoiceToast(enabled);

    displayAllSchemes();
    if (userProfile) displayRecommendedSchemes();
}

function applyVoiceToggleUI(enabled) {
    const dot = document.getElementById('voiceStatusDot');
    const icon = document.getElementById('voiceToggleIcon');
    const voiceBtn = document.getElementById('voiceBtn');

    if (enabled) {
        dot.classList.add('voice-on');
        icon.textContent = '🔊';
        voiceBtn.classList.remove('voice-globally-off');
        voiceBtn.title = '';
    } else {
        dot.classList.remove('voice-on');
        icon.textContent = '🔇';
        voiceBtn.classList.add('voice-globally-off');
        voiceBtn.title = currentLanguage === 'ta' ? 'குரல் முடக்கப்பட்டுள்ளது' : 'Voice is off';
    }
}

function showVoiceToast(enabled) {
    const toast = document.getElementById('voiceToast');
    const toastIcon = document.getElementById('voiceToastIcon');
    const toastText = document.getElementById('voiceToastText');

    if (enabled) {
        toastIcon.textContent = '🔊';
        toastText.textContent = currentLanguage === 'ta' ? 'குரல் அம்சங்கள் இயக்கப்பட்டன' : 'Voice features enabled';
        toast.style.background = '#1B5E20';
    } else {
        toastIcon.textContent = '🔇';
        toastText.textContent = currentLanguage === 'ta' ? 'குரல் அம்சங்கள் முடக்கப்பட்டன' : 'Voice features disabled';
        toast.style.background = '#616161';
    }

    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 2500);
}

// ==================== LANGUAGE SWITCHING ====================
function switchLanguage(lang) {
    currentLanguage = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) btn.classList.add('active');
    });

    updateUILanguage();
    applyVoiceToggleUI(voiceEnabled);
    displayAllSchemes();
    if (userProfile) displayRecommendedSchemes();
    if (document.getElementById('historySection').classList.contains('active')) {
        displayHistory();
    }
}

function updateUILanguage() {
    const t = translations[currentLanguage];
    Object.keys(t).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
                if (element.textContent !== undefined) element.textContent = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });

    document.getElementById('searchInput').placeholder = currentLanguage === 'ta' ?
        'திட்டங்களைத் தேடுங்கள்...' : 'Search for schemes...';

    document.getElementById('voiceToggleLabelText').textContent = currentLanguage === 'ta' ? 'குரல்' : 'Voice';
}

// Make functions globally accessible
window.showSchemeDetails = showSchemeDetails;
window.showApplyModal = showApplyModal;
window.speakScheme = speakScheme;
window.closeModal = closeModal;
window.closeApplyModal = closeApplyModal;
