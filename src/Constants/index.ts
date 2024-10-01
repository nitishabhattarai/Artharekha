import { recent1, recent2, recent3, recent4, recent5 } from "../assets/images";

interface News {
  src?: string;
  title: string;
  oneline?: string;
  author?: string;
  time: string;
  readingTime?: string;
  category: string;
}

export const headlines = [
  {
    title:
      "एनसेल प्रकरण छानबिन गर्न टंकमणि शर्माको संयोजकत्वमा उच्चस्तरीय समिति",
    url: "news-1",
  },
  {
    title: "पशुपतिनाथ क्षेत्रमा आजदेशि मासु, मदिरा र नसालु पदार्थ निषेध",
    url: "news-1",
  },
  {
    title: "शैक्षिक सुधारमा पूर्वशिक्षामन्त्रीको जोड",
    url: "news-1",
  },
  {
    title:
      "आगलागी अपडेटः घाइते ४ जनालाई सेनाको एयर एम्बुलेन्समा काठमाडौँ पठाइयो",
    url: "news-1",
  },
  {
    title: "सुन र हुन्डीको अवैध कारोबारी पाण्डे ७ किलो सुन सहित पक्राउ",
    url: "news-1",
  },

  {
    title:
      "दुर्गा प्रसाईंको २० लाखसम्म ऋण मिनाहा गर्ने हल्लाले कर्जा दिन बैंकहरु हच्किएः गभर्नर अधिकारी",
    url: "news-1",
  },
  {
    title: "नक्कली भारतीय आधारकार्ड बनाएर क्यासिनोमा जुवा खेल्दै नेपाली",
    url: "news-1",
  },
];

export const recentNews = [
  {
    url: "news-1",
    src: recent1,
    title: "काठमाडौंको तापक्रम निरन्तर घट्दो, चिसो अझ बढ्ने",
    oneline:
      "राष्ट्रपति रामचन्द्र पौडेलसँग श्रीलंकाका विदेशमन्त्री मोहम्मद उवैस मोहम्मद अली साब्रीले शीष्टाचार भेटवार्ता गरेका छन्।",
    author: "नागरिक",
    time: "१७ मिनेट अघि",
    readingTime: "१ मिनेट पाठ",
  },
  {
    url: "news-2",
    src: recent2,
    title: "विदेशबाट फर्केका श्रमिकहरूको पनि सुधारिएन जीवन",
    time: "१८ मिनेट अघि",
    author: "नागरिक",
    oneline:
      "राष्ट्रपति रामचन्द्र पौडेलसँग श्रीलंकाका विदेशमन्त्री मोहम्मद उवैस मोहम्मद अली साब्रीले शीष्टाचार भेटवार्ता गरेका छन्।",
    readingTime: "१ मिनेट पाठ",
  },
  {
    url: "news-3",
    src: recent3,
    title:
      "एनसेल बिक्रीविरुद्ध प्रदर्शन गर्ने मानवअधिकारकर्मी पक्राउ (तस्बिरहरु)",
    time: "३७ मिनेट अघि",
    author: "नागरिक",
    oneline:
      "राष्ट्रपति रामचन्द्र पौडेलसँग श्रीलंकाका विदेशमन्त्री मोहम्मद उवैस मोहम्मद अली साब्रीले शीष्टाचार भेटवार्ता गरेका छन्।",
    readingTime: "१ मिनेट पाठ",
  },
  {
    url: "news-4",
    src: recent4,
    title: "शाहरूख खानको फिल्म 'डंकी' आजदेखि प्रदर्शनमा",
    time: "४९ मिनेट अघि",
    author: "नागरिक",
    oneline:
      "राष्ट्रपति रामचन्द्र पौडेलसँग श्रीलंकाका विदेशमन्त्री मोहम्मद उवैस मोहम्मद अली साब्रीले शीष्टाचार भेटवार्ता गरेका छन्।",
    readingTime: "१ मिनेट पाठ",
  },
  {
    url: "news-5",
    src: recent5,
    title: "प्रधानमन्त्री कप महिला क्रिकेटः एपीएफद्वारा सुदूरपश्चिम पराजित",
    time: "५२ मिनेट अघि",
    author: "नागरिक",
    oneline:
      "राष्ट्रपति रामचन्द्र पौडेलसँग श्रीलंकाका विदेशमन्त्री मोहम्मद उवैस मोहम्मद अली साब्रीले शीष्टाचार भेटवार्ता गरेका छन्।",
    readingTime: "१ मिनेट पाठ",
  },
];

export const newsDetail = {
  url: "news-1",
  src: recent1,
  title: "प्रधानमन्त्री कप महिला क्रिकेटः एपीएफद्वारा सुदूरपश्चिम पराजित",
  time: "५२ मिनेट अघि",
  author: "नागरिक",
  category: "राजनीति",
  shares: 0,
  location: "काठमाडौँ",
  datePosted: "२ चैत्र २०८०",
  readingTime: "६ मिनेट पाठ",
  newsStory:
    "‘हामीलाई न्याय कसैले दिन सक्दैन। आत्मसम्मान पनि फर्काउन सक्नु हुन्न। तर हामी न्याय पाएको अनुभूति गर्न सक्छौं। त्यसबाट हामीलाई मनको शान्ति मिल्नेछ। कानुन कहाँनेर रोकियो?’ सशस्त्र द्वन्द्वकालमा बलात्कृत एक महिलाको अभिव्यक्ति हो यो। १३ वर्षको किशोरी हुँदा सेनाबाट बलात्कृत भएकी उनी अहिले ३५ वर्ष नाघिसकिन्। संक्रमणकालीन न्यायसम्बन्धी काठमाडौंमा आयोजना गरिएको एक कार्यक्रममा उनले आफ्नो पीडा त पोखिन् तर उनी खुलेर आफ्नो कुरा भने कहिल्यै राख्न सक्दिनन्। ‘म घरबाट निकाला भइसकें। मेरो एउटा बच्चा छ। जो सधैंभरि असुरक्षित छ। बलात्कारबाट जन्मेको बच्चा तपाईंहरूले कहाँ लगेर सुरक्षित गर्नुहुन्छ? बाहिर जति हाँसे पनि भित्र नदेखिने घाउ छ,’ उनले भनिन्। उमेरसँगै उनको पाठेघरको समस्या पनि बल्झिँदैछ। उनी डाक्टरले सोधेको जवाफ सहज रूपमा दिन सक्दिनन्। ‘मैले डाक्टरलाई भन्न सकूँ ममाथि के भएको भनेर? डाक्टरले तपाईं के पेसा गर्नुहुन्छ भनेर सोध्छन्। त्यो भनेको के? तपाईं बुझ्नुहुन्छ? के म यौनकर्मी हुँ?’ उनले रुँदै आफू अगाडि भएका सांसद, अधिकारकर्मीसँग प्रश्न गरिन्। उनलाई पाठेघरको समस्याका कारण डाक्टरकहाँ गइरहनुपर्छ। डाक्टरले सोध्दा आफ्नो कुरा खुलेर भन्न नसक्दा यौनकर्मी हुन सक्ने आशंका गरिन्छ। विस्तृत शान्तिसम्झौता भएको १७ वर्षसम्म उनले अप्रत्यक्ष रूपमा आफ्नो पीडा धेरै ठाउँमा सुनाइसकिन्। धेरै आँसु बगाइसकिन्। उनले मात्रै होइन, उनीजस्ता धेरैले न्याय पाउन सकेका छैनन्। संक्रमणकालीन न्यायसम्बन्धी संशोधन विधेयक संसद्मा अल्झिरहेका बेला उनको न्याय पाउने आशा जीवितै छ। ‘बाटो फराकिलो पारिदिनुस्, म मेरो कुरा खुलेर भन्न सकूँ। म १३ वर्षकी हुँदा सेनाबाट बलात्कृत भएकी हुँ। अहिले ३५ कटिसकें। मेरो पाठेघरमा अहिले पनि समस्या छ। तपाईंकी छोरीलाई मेरो ठाउँमा उभ्याएर हेरिदिनुस्। आफ्नै आमाबुबासँग भन्न नसकेको कुरा तपाईंहरूसँग भनिरहेको छु,’ उनले सुनाएकी थिइन्। द्वन्द्वमा बलात्कृत महिलाहरूको राष्ट्रिय संगठनकी केन्द्रीय संयोजक देवी खड्कालगायतले २०७८ चैतमा प्रधानमन्त्री शेरबहादुर देउवालाई भेटेर आफूहरूका पीडाबारे ध्यानाकर्षण गराएका थिए। ‘तीन वर्ष सुरक्षा फौजको नियन्त्रण र थुनामा रहेकी एक किशोरी मुक्त हुँदा डेढ वर्षको सन्तान काखमा थियो। राज्यकै नियन्त्रणमा रहेको बेला जन्मेको सन्तानको बाबु पत्ता लगाउने जिम्मेवारी कसको हुन्छ?’ प्रधानमन्त्रीलाई बुझाइएको पत्रमा प्रश्न गरिएको थियो। त्यसबेला प्रधानमन्त्री देउवा र सत्तारूढ दलका नेता पुष्पकमल दाहाललाई पीडितहरूले ध्यानाकर्षणपत्र बुझाएका थिए।",
};
