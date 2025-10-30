import serviceSummaryData from "./aboutdata.json";

interface SeoMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
}

interface SocialCards {
  type?: string;
  url?: string;
  title?: string;
  description?: string;
  linkedInTitle?: string;
  linkedInDescription?: string;
  linkedInUrl?: string;
  pinterestTitle?: string;
  pinterestDescription?: string;
  pinterestUrl?: string;
  whatsappTitle?: string;
  whatsappDescription?: string;
  whatsappUrl?: string;
  telegramTitle?: string;
  telegramDescription?: string;
  telegramUrl?: string;
}

interface ServiceSummaryData {
  webSeoMetadata?: SeoMetadata;
  facebookCards?: SocialCards;
  twitterCards?: SocialCards;
  linkedInCards?: SocialCards;
  pinterestCards?: SocialCards;
  whatsappCards?: SocialCards;
  telegramCards?: SocialCards;
  heroImage?: any;
  pageTitle?: string;
  pageDesc?: string;
  introductionSection?: {
    introHeading?: string;
    introDesc?: string;
  };
  detailSection?: {
    heading?: string;
    detailInd?: Array<{
      title?: string;
      smDescription?: string;
      description?: string;
      keyBenefits?: string[];
    }>;
  };
  projectManagement?: {
    projectHeading?: string;
    toolsTech?: Array<{
      heading?: string;
      detail?: string;
      images?: string[];
    }>;
  };
  projectCycleSection?: {
    projectCycleHaeding?: string;
    projectLifeCycle?: Array<{
      heading?: string;
      detail?: string;
    }>;
  };
  summarySection?: {
    summaryHeading?: string;
    summaryMessage?: string;
    summaryImg?: any;
  };
  callToActionSection?: {
    callToActionHeading?: string;
    callToAction?: string;
  };
  paymentOption?: {
    paymentHeading?: string;
    paymentDetail?: string;
    paymentTools?: Array<{
      heading?: string;
      detail?: string;
      images?: string[];
    }>;
  };
  bannerFiveImage?: any;
}

export async function generateMetadata() {
  const data = serviceSummaryData as ServiceSummaryData;

  const defaultTitle =
    "GreenSolution - Process-Driven Web Development Company in Pakistan";
  const defaultDescription =
    "Professional web development solutions for SMEs and international clients. Custom development, niche solutions, and recurring services.";
  const defaultKeywords = "GreenSolution, web development Pakistan, SME digital solutions, custom web development";
  const canonicalUrl = "";

  const title = data?.webSeoMetadata?.title ?? defaultTitle;
  const description = data?.webSeoMetadata?.description ?? defaultDescription;
  const keywords =
    data?.webSeoMetadata?.keywords?.join(", ") ?? defaultKeywords;

  const heroImageUrl = "/about-banner.jpg";

  const facebookMeta = data?.facebookCards ?? {};
  const twitterMeta = data?.twitterCards ?? {};
  const linkedInMeta = data?.linkedInCards ?? {};
  const pinterestMeta = data?.pinterestCards ?? {};
  const whatsappMeta = data?.whatsappCards ?? {};
  const telegramMeta = data?.telegramCards ?? {};

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: facebookMeta.type ?? "website",
      url: facebookMeta.url ?? canonicalUrl,
      title: facebookMeta.title ?? title,
      description: facebookMeta.description ?? description,
      images: [{ url: heroImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterMeta.title ?? title,
      description: twitterMeta.description ?? description,
      images: [{ url: heroImageUrl, alt: title }],
      url: twitterMeta.url ?? canonicalUrl,
    },
    linkedIn: {
      title: linkedInMeta.linkedInTitle ?? title,
      description: linkedInMeta.linkedInDescription ?? description,
      image: heroImageUrl,
      url: linkedInMeta.linkedInUrl ?? canonicalUrl,
    },
    pinterest: {
      title: pinterestMeta.pinterestTitle ?? title,
      description: pinterestMeta.pinterestDescription ?? description,
      url: pinterestMeta.pinterestUrl ?? canonicalUrl,
    },
    whatsapp: {
      title: whatsappMeta.whatsappTitle ?? title,
      description: whatsappMeta.whatsappDescription ?? description,
      url: whatsappMeta.whatsappUrl ?? canonicalUrl,
    },
    telegram: {
      title: telegramMeta.telegramTitle ?? title,
      description: telegramMeta.telegramDescription ?? description,
      url: telegramMeta.telegramUrl ?? canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ServiceSummary() {
  const data = serviceSummaryData;
  const dataLogo = [];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white lg:min-h-screen max-md:max-w-full">
        {data.heroImage && (
          <img
            loading="lazy"
            className="top-0 left-0 object-cover absolute inset-0 size-full"
            src="/about-banner.jpg"
            alt="GreenSolution - Web Development Company"
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-65"></div>
        <div className="flex relative flex-col justify-center items-center lg:px-20 px-5 lg:pt-12 lg:pb-0 pt-48 pb-36 w-full max-md:px-5 max-md:max-w-full flex-grow min-h-screen">
          <div>
            <h1 className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-0 lg:w-8/12 mx-auto">
              Process-Driven{" "}
              <span className="text-[#10b981] mt-2"> Web Solutions </span>
              for Global & Local Markets
            </h1>
            <h2 className="lg:text-2xl text-base text-center mt-4 max-md:max-w-full lg:px-32">
              Bridging the Digitization Gap for{" "}
              <span className="text-[#10b981] font-semibold">
                Pakistani SMEs
              </span>{" "}
              While Competing Internationally
            </h2>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {data.introductionSection?.introHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-center">
                {data.introductionSection?.introDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black mb-10">
            {data.detailSection.heading}
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {data.detailSection?.detailInd?.map((detail: any, index: any) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-6 mb-6 w-full max-w-xl border border-gray-200 hover:border-[#10b981] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {detail.title}
                </h3>
                <p className="text-gray-600 mb-4">{detail.smDescription}</p>
                <p className="text-gray-700 mb-4">{detail.description}</p>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Key Benefits:
                </h4>
                <ul className="list-disc pl-6">
                  {detail.keyBenefits.map((benefit: any, index: any) => (
                    <li key={index} className="text-gray-700">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Cycle Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            {data.projectCycleSection?.projectCycleHaeding}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-14">
            {data.projectCycleSection?.projectLifeCycle.map(
              (step: any, index: any) => (
                <div
                  key={index}
                  className="bg-[#EDECEC] rounded-3xl shadow-sm relative hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="z-10 flex justify-center items-center px-5 mt-0 text-3xl font-semibold tracking-tight leading-4 text-justify whitespace-nowrap bg-[#10b981] rounded-full h-[62px] w-[62px] absolute -right-2 -top-8 drop-shadow-serviceCard">
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="p-6 h-full">
                    <div className="font-medium text-lg leading-6 pt-6 text-center text-gray-800">
                      {step.heading}
                    </div>
                    <div
                      className="mt-3 text-sm font-light tracking-normal text-center text-gray-600"
                      style={{ lineHeight: "1.8", wordSpacing: "0.1em" }}
                    >
                      {step.detail}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-8 text-black text-center md:text-left">
                {data.summarySection?.summaryHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed md:text-left text-center">
                {data.summarySection?.summaryMessage}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 md:flex md:justify-center">
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              {data.bannerFiveImage && (
                <img
                  loading="lazy"
                  className="max-w-[100%] h-auto"
                  src="/seacrhing2.jpeg"
                  alt="GreenSolution Team"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="px-6 md:px-16 py-10 md:py-16 mb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-6">
            {data.paymentOption?.paymentHeading}
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            {data.paymentOption?.paymentDetail}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {data.paymentOption?.paymentTools?.map(
              (tool: any, toolIndex: any) => (
                <div
                  key={toolIndex}
                  className="p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-md"
                >
                  <div className="flex justify-center mb-4">
                    {tool.images?.map(
                      (imagePath: string, logoIndex: number) => (
                        <div key={logoIndex}>
                          <img
                            loading="lazy"
                            src={imagePath}
                            alt={tool.heading}
                            className="h-20 w-auto object-contain"
                          />
                        </div>
                      )
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                    {tool.heading}
                  </h3>
                  <p className="text-gray-600 text-center">{tool.detail}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}