"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const linkAI = "ai-software-development-services";
const linkML = "ml-services";
const devops = "ai-devops";
const linkUrlCMS1 = "custom-cms-development-services";
const linkUrlCMS = "headless-cms-development-services";
const linkUrlSoft = "custom-software-development-services";
const linkUrlAuto = "qa-testing-services";
const linkUrlDigital = "ui-ux-design-services";
const linkMob = "mobile-app-development-services";
const linkRobotic = "rpa-services";
const linkIntegrate = "automation-integration";

export default function HomeNavigationContainer() {
  const pathname = usePathname() || "/";
  const [menuState, setMenuState] = useState({
    menuIcon: false,
    open: false,
    aboutOpen: false,
    menuVisible: false,
    aboutVisible: false,
  });

  const [menuVisible, setMenuVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
    // setAboutVisible((prevMenuVisible) => !prevMenuVisible);
  };
  const toggleAboutVisibility = () => {
    setAboutVisible((prevAboutVisible) => !prevAboutVisible);
  };

  const handleToggleMenuIcon = useCallback(() => {
    setMenuState((prevState) => ({
      ...prevState,
      menuIcon: !prevState.menuIcon,
    }));
  }, []);

  const handleCall = () => {
    // This will attempt to open the standard dialer
    window.location.href = "tel:+18505584691";
  };

  const toggleMenu = useCallback(() => {
    setMenuState((prevState) => ({
      ...prevState,
      open: !prevState.open,
      aboutOpen: prevState.open ? prevState.aboutOpen : false,
    }));
  }, []);

  const toggleAbout = useCallback(() => {
    setMenuState((prevState) => ({
      ...prevState,
      aboutOpen: !prevState.aboutOpen,
      open: prevState.aboutOpen ? prevState.open : false,
    }));
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (menuState.open || menuState.aboutOpen) {
        setMenuState((prevState) => ({
          ...prevState,
          open: false,
          aboutOpen: false,
        }));
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuState.open, menuState.aboutOpen]);

  const linkClasses = (path: string, currentPath: string) =>
    `relative px-2 py-1 text-white transition-all duration-300 
   hover:text-[#F26522] 
   after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#F26522] after:transition-all after:duration-300 
   hover:after:w-full 
   ${currentPath === path ? "text-[#F26522] after:w-full" : ""}`;

  return (
    <div className="navbar flex flex-col items-center   lg:p-0   w-full  max-md:max-w-full flex-grow relative top-0 z-20 xl:bg-transparent xl:h-auto h-[72px]">
      <div className="flex gap-5 justify-between items-center px-8 py-3.5 w-full border border-solid shadow-md backdrop-blur-[36px] bg-black bg-opacity-20 border-white border-opacity-10  max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <span className="relative" style={{ zIndex: 1000 }}>
          <Link href={`/`} className=" my-auto">
            <h1 className="text-white text-2xl">
             <span className="text-[#10b981]"> Green </span>Solution
            </h1>
          </Link>
        </span>
        <div
          className="w-1/12 xl:hidden items-center flex justify-end"
          onClick={handleToggleMenuIcon}
          style={{ zIndex: 1000 }}
        >
          {menuState.menuIcon ? (
            <AiOutlineClose size={23} className="text-gray-800" />
          ) : (
            <AiOutlineMenu size={23} className="text-white" />
          )}
        </div>
        <div
          className={`xl:flex gap-5 items-center max-md:flex-wrap max-md:max-w-full main-navigation list-none p-0 m-0 transition-all duration-300 ease-in-out ${menuState.menuIcon ? "block" : "hidden"} xl:block fixed top-0 left-0 h-full w-full bg-white xl:bg-transparent lg:absolute js-navigation justify-end -z-50`}
        >
          <ul className="nav-links relative lg:mx-auto">
            <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0">
              <Link href="/" className={linkClasses("/", pathname)}>
                Home
              </Link>
            </li>
            <li
              onClick={toggleMenu}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0"
            >
              <Link
                href="/services"
                className={linkClasses("/services", pathname)}
              >
                Services
              </Link>
            </li>
            {/*<div
              className={`absolute z-10 w-screen max-w-5xl px-2 mt-12 transform -translate-x-1/2 left-1/2 sm:px-0 transition-all duration-300 ease-in-out ${menuState.open ? "block" : "hidden"}`}
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-8">
                      <Link
                        href={`/services/${linkUrlSoft}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-javascript.svg"
                            alt="Software Development"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Software Development
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Desktop and Web Development Solutions
                          </p>
                        </div>
                      </Link>
                      <Link
                        href={`/services/${linkUrlCMS1}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-codepen.svg"
                            alt="CMS"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            CMS
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Manage Digital Content
                          </p>
                        </div>
                      </Link>
                      <Link
                        href={`/services/${linkUrlCMS}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-buffer.svg"
                            alt="Headless-CMS"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Headless-CMS
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Customized Headless-CMS
                          </p>
                        </div>
                      </Link>
                      <Link
                        href={`/services/${linkUrlDigital}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-figma.svg"
                            alt="Design Services"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Design Services
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Boost your Online Presence
                          </p>
                        </div>
                      </Link>
                      <Link href="/services">
                        <p className="flex gap-3 text-sm font-bold text-black hover:text-[#0a8ffc] hover:underline mt-8">
                          View all
                          <CgArrowLongRight
                            style={{
                              color: "#5b9ed2",
                              marginTop: "-3px",
                              marginBottom: "-2px",
                              height: "25px",
                              width: "25px",
                            }}
                          />
                        </p>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                      <Link
                        href={`/services/${linkUrlAuto}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-apple-ar.svg"
                            alt="QA Testing & Automation"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            QA Testing & Automation
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Ensure the Highest Quality
                          </p>
                        </div>
                      </Link>
                      <Link
                        href={`/services/${linkMob}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-react.svg"
                            alt="Mobile App development"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Mobile App development
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Transform Idea into Market Leading App
                          </p>
                        </div>
                      </Link>
                      <Link
                        href={`/services/${linkAI}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-web-component.svg"
                            alt="AI Development Services"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            AI Development Services
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Informed Decision Making Process
                          </p>
                        </div>
                      </Link>
                      <Link
                        href={`/services/${linkRobotic}`}
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/logo-ionitron.svg"
                            alt="RPA Services"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            RPA Services
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Tackle the Complex Robotic Challenges
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="https://calendly.com/adnanghaffar"
                        className="inline-flex items-center justify-center mt-4 w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-white duration-200 bg-gray-900 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact Us
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-3 p-2 lg:p-0 bg-gray-50 rounded-2xl">
                      <div className="grid items-start h-1/2 gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                        <p className="text-base font-medium text-black">
                          Hot Topics
                        </p>
                        <div className="space-y-3">
                          <Link
                            href={`/services/${linkAI}`}
                            className="flex items-start text-sm font-medium transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            ChatBot & AI
                          </Link>
                          <Link
                            href={`/services/${linkUrlCMS}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            Headless CMS
                          </Link>
                          <Link
                            href={`/services/${linkIntegrate}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            Integration & Automation
                          </Link>
                          <Link
                            href={`/services/${linkUrlDigital}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            User Interface (UI) Design
                          </Link>
                          <Link
                            href={`/services/${linkUrlAuto}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            QA and Testing
                          </Link>
                          <Link
                            href={`/services/${linkMob}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            Mobile Application
                          </Link>

                          <Link
                            href={`/services/${linkML}`}
                            className="flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            ML Services
                          </Link>
                          <Link
                            href={`/services/${devops}`}
                            className="inline-flex items-start text-sm text-gray-500 transition duration-150 ease-in-out rounded-lg hover:text-black"
                          >
                            Devops Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
            {/* About us */}
            <li
              // onClick={toggleAbout}
              className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0"
            >
              <Link href="/about" className={linkClasses("/about", pathname)}>
                About Us
              </Link>
              {/* <svg
                fill="white"
                viewBox="0 0 20 20"
                className={`inline size-4 cursor-pointer mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${menuState.aboutOpen ? "rotate-180" : "rotate-0"}`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg> */}
            </li>
            <div
              className={`absolute z-10 w-screen max-w-3xl px-2 mt-12 transform -translate-x-1/2 left-1/2 sm:px-0 transition-all duration-300 ease-in-out ${menuState.aboutOpen ? "block" : "hidden"}`}
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 px-5 py-2 bg-white sm:gap-8 sm:p-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-6">
                      <Link
                        href="/about/service-summary"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/documents-sharp.svg"
                            alt="Service Summary"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Service Summary
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Service Essence
                          </p>
                        </div>
                      </Link>
                      {/* <Link
                        href="/career"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/briefcase.svg"
                            alt="Careers"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black ">Careers</p>
                          <p className="mt-1 text-sm text-gray-500">Join our Team</p>
                        </div>
                      </Link> */}
                      {/* <Link
                        href="/lifeatca"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/images.svg"
                            alt="Life At CA"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">Life At CA</p>
                          <p className="mt-1 text-sm text-gray-500">Employee Experiences</p>
                        </div>
                      </Link> */}
                      <Link
                        href="/about/industries"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/industries.svg"
                            alt="industries"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Our Industries
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Who We Help
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/partnership-program"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/partnership-icon.svg"
                            alt="partnership"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Partner with Us
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Grow Together
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/value-blueprints"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/cash.svg"
                            alt="cash"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Value BluePrints
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Efficient Deployment
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/about/happy-clients"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/clients-icon.svg"
                            alt="Clients"
                            height={12}
                            width={12}
                            className="text-black size-8 md hydrated"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-black">
                            Happy Clients
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Trusted Partnerships
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      <Link
                        href="/about/discovery-process"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/server.svg"
                            alt="Discovery Process"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Discovery Process
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Innovative Strategy
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/case-studies"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/library.svg"
                            alt="Case-Studies"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Case-Studies
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Success Stories
                          </p>
                        </div>
                      </Link>
                      {/* OFFFShore Development */}
                      <Link
                        href="/offshore-software-development"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/globe-sharp.svg"
                            alt="OFFFShore Development"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Offshore Development
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Global Development
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/brochure"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/grid.svg"
                            alt="Brochure"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Brochure Downloads
                          </p>
                          <p className="mt-1 text-sm text-gray-500 text-start">
                            Your Ultimate Guide
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/news"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/reader.svg"
                            alt="News"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black text-start">
                            News
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Stay Updated
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/blogs"
                        className="inline-flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-xl hover:bg-gray-50"
                      >
                        <div className="">
                          <Image
                            src="/newspaper.svg"
                            alt="Blogs"
                            height={12}
                            width={12}
                            className="text-black size-6 md hydrated"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            Blogs
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Tech Insights
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-3 lg:p-0 rounded-2xl">
                      <div className="grid items-start h-full">
                        <div className="">
                          <img
                            src="/menu-img.jpg"
                            alt="about us"
                            className="object-cover h-full width-full rounded-2xl"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0">
              <Link href="/blogs">
                <span className="hover:underline text-white">Blogs</span>
              </Link>
            </li> */}

            {/* <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0">
              <Link href="/career">
                <span className="hover:underline hover:text-[#F26522] text-white">Career</span>
              </Link>
            </li> */}

            <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0">
              <Link
                href="/technologies"
                className={linkClasses("/technologies", pathname)}
              >
                Technologies
              </Link>
            </li>

            <li className="flex flex-row items-center w-full px-4 py-2 mt-2 md:w-auto md:inline md:mt-0">
              <Link href="/career" className={linkClasses("/career", pathname)}>
                Career
              </Link>
            </li>
          </ul>
          {/* <Link
            className="hidden xl:flex gap-2 self-stretch  px-4 pt-4 pb-4 text-base font-medium leading-5 rounded-[50px] text-neutral-900 bg-[#F26522] "
            href="tel:+000000000000"
          >
            <Image
              src="/telephone.png"
              alt="Phone-Icon"
              width={20}
              height={20}
              className="object-cover"
            ></Image>
            <div className="my-auto text-nowrap text-whitey">000 000 000</div>
            <Image
              src="/USA-Flag.png"
              alt="USA-Flag-Icon"
              width={20}
              height={20}
              className="object-cover"
            ></Image>
          </Link> */}

          <div
            className={`xl:hidden absolute top-0 right-0 bottom-0 left-0 w-full h-screen bg-white ease-in duration-300 overflow-y-auto ${menuState.menuIcon ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="xl:hidden">
              {menuState.menuIcon && (
                <div className="mobile-menu">
                  <ul className="text-black text-sm flex flex-col pt-20 pb-8 px-6">
                    <li className="border-t border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/" onClick={handleToggleMenuIcon}>
                        Home
                      </Link>
                    </li>
                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <div
                        className=""
                        // onClick={toggleMenuVisibility}
                      >
                        Services
                      </div>
                      {/* {menuVisible && (
                        <div className="content mt-4 mb-0">
                          <div>
                            <ul className="mega-links-mb">
                              <li>
                                <Link
                                  href={`/services/${linkUrlCMS1}`}
                                  className=""
                                  onClick={handleToggleMenuIcon}
                                >
                                  CMS
                                </Link>
                                <p>
                                  <Link
                                    href={`/services/${linkUrlCMS1}`}
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Manage Digital Content
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href={`/services/${linkUrlCMS}`}
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Headless-CMS
                                </Link>
                                <p>
                                  <Link
                                    href={`/services/${linkUrlCMS}`}
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Customized Headless-CMS
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href={`/services/${linkMob}`}
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Mobile App Development
                                </Link>
                                <p>
                                  <Link
                                    href={`/services/${linkMob}`}
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Transform Idea into Market Leading App
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href={`/services/${linkUrlSoft}`}
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Software Development
                                </Link>
                                <p>
                                  <Link
                                    href={`/services/${linkUrlSoft}`}
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Web Development Solutions
                                  </Link>
                                </p>
                              </li>
                            </ul>

                            <Link href="/services">
                              <p
                                className="flex gap-3 text-black hover:text-[#0a8ffc] hover:underline mt-4 mb-0"
                                onClick={handleToggleMenuIcon}
                                style={{ fontWeight: "600", fontSize: "13px" }}
                              >
                                View all
                                <CgArrowLongRight
                                  style={{
                                    color: "#5b9ed2",
                                    marginTop: "-3px",
                                    marginBottom: "-2px",
                                    height: "22px",
                                    width: "22px",
                                  }}
                                />
                              </p>
                            </Link>
                          </div>
                        </div>
                      )} */}
                    </li>

                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/about" onClick={handleToggleMenuIcon}>
                        <span>About Us</span>
                      </Link>
                      {/* {aboutVisible && (
                        <div className="content mt-4 mb-0">
                          <div>
                            <ul className="mega-links-mb">
                              <li>
                                <Link
                                  href="/about/service-summary"
                                  className=""
                                  onClick={handleToggleMenuIcon}
                                >
                                  Service Summary
                                </Link>
                                <p>
                                  <Link
                                    href="/about/service-summary"
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Service Essence
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href="/lifeatca"
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Life At CA
                                </Link>
                                <p>
                                  <Link
                                    href="/lifeatca"
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Employee Experiences
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href="/partnership-program"
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Partner with Us
                                </Link>
                                <p>
                                  <Link
                                    href="/partnership-program"
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Grow Together
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href="/value-blueprints"
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Value BluePrints
                                </Link>
                                <p>
                                  <Link
                                    href="/value-blueprints"
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Efficient Deployment
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href="/case-studies"
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Case-Studies
                                </Link>
                                <p>
                                  <Link
                                    href="/case-studies"
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Success Stories
                                  </Link>
                                </p>
                              </li>
                              <li>
                                <Link
                                  href="/offshore-software-development"
                                  className="heading"
                                  onClick={handleToggleMenuIcon}
                                >
                                  Offshore Development
                                </Link>
                                <p>
                                  <Link
                                    href="/offshore-software-development"
                                    onClick={handleToggleMenuIcon}
                                  >
                                    Global Development
                                  </Link>
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )} */}
                    </li>
                    {/* <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/blogs" onClick={handleToggleMenuIcon}>
                        Blogs
                      </Link>
                    </li> */}
                    {/* <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/career" onClick={handleToggleMenuIcon}>
                        Career
                      </Link>
                    </li> */}
                    <li className="border-b border-gray-200 border-opacity-50 py-4">
                      <Link href="/technologies" onClick={handleToggleMenuIcon}>
                        Technologies
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
