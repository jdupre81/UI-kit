import { useState, useEffect } from "react";
import { ArrowUp, Sun, Moon } from "lucide-react";
import { ColorPalette } from "./components/ColorPalette";
import { TypographySystem } from "./components/TypographySystem";
import { ContentHierarchy } from "./components/ContentHierarchy";
import { LogoExamples } from "./components/LogoExamples";
import { DotPattern } from "./components/DotPattern";
import { ButtonComponents } from "./components/ButtonComponents";
import {
  FormInputs,
  Checkboxes,
  Toggles,
  ProgressIndicators,
} from "./components/BasicComponents";

import { 
  PageLayouts, 
  KeyNumbers,
  FullWidthBanner,
  ListLayout,
  Sidebar,
  EventIndex, 
  ArticleGrid,
} from "./components/PageLayouts";

//import logoColor from "/src/imports/SDSC_logo_horizontal_rgb_colors.png";
//import logoWhite from "/src/imports/SDSC_logo_horizontal_rgb_white.png";
//import bgPattern from "/src/imports/global_background2.png";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors ${darkMode ? "bg-[#1a1a1a]" : "bg-[#F7F7F8]"}`}
    >
      {/* Header */}
      <header
        className={`border-b sticky top-0 z-50 shadow-sm transition-colors ${darkMode ? "bg-[#2d2d2d] border-[#404040]" : "bg-white border-[#E5E5E5]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                //src={logoColor}
                alt="SDSC Logo"
                className="h-10 dark:hidden"
              />

              <img
                //src={logoWhite}
                alt="SDSC Logo"
                className="hidden h-10 dark:block"
              />
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6 text-sm">
                <a
                  href="#colors"
                  className={`hover:text-[#5461a6] dark:hover:text-white transition-colors ${darkMode ? "text-gray-100" : "text-[#848484]"}`}
                >
                  Design Tokens
                </a>
                <a
                  href="#buttons"
                  className={`hover:text-[#5461a6] dark:hover:text-white transition-colors ${darkMode ? "text-gray-100" : "text-[#848484]"}`}
                >
                  Basic Components
                </a>
                <a
                  href="#page-layouts"
                  className={`hover:text-[#5461a6] dark:hover:text-white transition-colors ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                >
                  Page Layouts
                </a>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-none border hover:border-[#5461a6] transition-colors ${darkMode ? "border-[#404040] hover:bg-[#404040]" : "border-[#E5E5E5] hover:bg-[#F7F7F8]"}`}
                title={
                  darkMode
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"
                }
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-[#5461a6]" />
                ) : (
                  <Moon className="w-5 h-5 text-[#5461a6]" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex items-center gap-3 text-xs mt-3 ${darkMode ? "text-gray-300" : "text-[#999999]"}`}
          >
            <span>UI Design Kit v2.1</span>
            <span>•</span>
            <span>Updated June 10, 2026</span>
            <span>•</span>
            <span className="text-[#5461a6] dark:text-[#93c5fd]">
              Based on datascience.ch
            </span>
          </div>
        </div>
      </header>

      {/* Hero - Full Width */}
      <section className=" sticky py-0">
        <div
          className="w-full p-12 text-white relative overflow-hidden"
          style={{
            //backgroundImage: `url(${bgPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "sticky center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#26245c]/95 to-[#5461a6]/95"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <h1
                className="text-5xl font-bold mb-4 leading-tight"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                <br />
                Design System Foundation | UI Kit
              </h1>
              <p
                className="text-lg leading-relaxed opacity-95"
                style={{ fontFamily: "Switzer, sans-serif" }}
              >
                Foundations of the SDSC Design System for
                building data science and research applications.
              </p>
              <p
                className="text-lg leading-relaxed opacity-95"
                style={{ fontFamily: "Switzer, sans-serif" }}
              >
                Based on datascience.ch visual identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex gap-8 relative">
          {/* Sticky Sidebar - Table of Contents */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div
              className={`sticky top-30 border p-6 rounded-none shadow-sm transition-colors ${darkMode ? "bg-[#2d2d2d] border-[#404040]" : "bg-white border-[#E5E5E5]"}`}
            >
              <h2
                className={`text-sm font-bold mb-4 uppercase tracking-wide ${darkMode ? "text-white" : "text-[#000000]"}`}
              >
                Table of Contents
              </h2>

              <div className="space-y-6">
                {/* About */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-bold ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                    >
                      〇
                    </span>
                    <h3
                      className={`text-xs font-bold uppercase tracking-wide ${darkMode ? "text-white" : "text-[#000000]"}`}
                    >
                      1. About
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="#about"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        About this UI Kit
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Core Components */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-bold ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                    >
                      〇
                    </span>
                    <h3
                      className={`text-xs font-bold uppercase tracking-wide ${darkMode ? "text-white" : "text-[#000000]"}`}
                    >
                      2. Design Tokens
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="#colors"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Colors
                      </a>
                    </li>
                    <li>
                      <a
                        href="#typography"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Typography
                      </a>
                    </li>
                    <li>
                      <a
                        href="#content-hierarchy"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Content Hierarchy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#logo"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Logo
                      </a>
                    </li>
                    <li>
                      <a
                        href="#dot-pattern"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Dot Pattern
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Basic Components */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-bold ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                    >
                      〇
                    </span>
                    <h3
                      className={`text-xs font-bold uppercase tracking-wide ${darkMode ? "text-white" : "text-[#000000]"}`}
                    >
                      3. Basic Components
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="#buttons"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Buttons
                      </a>
                    </li>
                    <li>
                      <a
                        href="#form-inputs"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Form Inputs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#checkboxes"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Checkboxes
                      </a>
                    </li>
                    <li>
                      <a
                        href="#toggles"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Toggles
                      </a>
                    </li>
                    <li>
                      <a
                        href="#progress"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Progress Indicators
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Page Layout Possibilities */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-bold ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                    >
                      〇
                    </span>
                    <h3
                      className={`text-xs font-bold uppercase tracking-wide ${darkMode ? "text-white" : "text-[#000000]"}`}
                    >
                      4. Page Layouts
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="#hero-section"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Hero Section
                      </a>
                    </li>
                    <li>
                      <a
                        href="#feature-grids"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Feature Grids
                      </a>
                    </li>
                    <li>
                      <a
                        href="#KeyNumbers"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Key Numbers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#full-width-banner"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Full-Width Banner
                      </a>
                    </li>
                    <li>
                      <a
                        href="#list-layout"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        List Layout
                      </a>
                    </li>
                    <li>
                      <a
                        href="#content-sidebar"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Content + Sidebar
                      </a>
                    </li>
                    <li>
                      <a
                        href="#event-index"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Event Index
                      </a>
                    </li>
                    <li>
                      <a
                        href="#article-grid"
                        className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors block py-1"
                      >
                        Article Grid
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-16">
              {/* ABOUT SECTION */}
              <section id="about" className="space-y-6 py-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-2xl font-medium ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                    >
                      〇
                    </span>
                    <h2
                      className={`text-3xl font-bold ${darkMode ? "text-white" : "text-[#000000]"}`}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                      }}
                    >
                      1. About this UI Kit
                    </h2>
                  </div>
                  <div className="space-y-4 max-w-4xl">
                    <p
                      className={`text-base leading-relaxed ${darkMode ? "text-white" : "text-[#000000]"}`}
                      style={{
                        fontFamily: "Switzer, sans-serif",
                      }}
                    >
                      This UI Kit establishes the foundational
                      elements of the SDSC design system,
                      providing guidance for developers building
                      digital platforms and applications. It
                      includes design tokens, typography, color
                      palettes, brand assets, core UI
                      components, accessibility guidelines, and
                      layout patterns derived from the Swiss
                      Data Science Center's visual identity,
                      helping ensure consistency and quality
                      across SDSC digital products.
                    </p>
                    <p
                      className={`text-base leading-relaxed ${darkMode ? "text-white" : "text-[#000000]"}`}
                      style={{
                        fontFamily: "Switzer, sans-serif",
                      }}
                    >
                      The guidelines provide practical examples,
                      implementation recommendations, and
                      reusable assets to streamline development
                      and support a coherent user experience
                      across projects. Whether you're building a
                      new platform from scratch or enhancing an
                      existing application, this kit provides a
                      consistent visual and implementation
                      framework that aligns with SDSC brand
                      standards while serving as the basis for a
                      broader design system.
                    </p>
                  </div>
                </div>
              </section>

              {/* CORE COMPONENTS */}
              <section className="space-y-16 py-6 border-t-2 border-[#26245c] dark:border-[#93c5fd]">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-2xl font-medium ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                    >
                      〇
                    </span>
                    <h2
                      className={`text-3xl font-bold ${darkMode ? "text-white" : "text-[#000000]"}`}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                      }}
                    >
                      2. Design Tokens – Core Components
                    </h2>
                  </div>
                  <p
                    className={`text-base ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                  >
                    Foundational design elements and base
                    components
                  </p>
                </div>

                {/* 1. Colors */}
                <div id="colors">
                  <ColorPalette />
                </div>

                {/* 2. Typography */}
                <div id="typography">
                  <TypographySystem />
                </div>

                {/* 3. Content Hierarchy */}
                <div id="content-hierarchy">
                  <ContentHierarchy />
                </div>

                {/* 4. Logo */}
                <div id="logo">
                  <LogoExamples />
                </div>

                {/* 5. Dot Pattern */}
                <div id="dot-pattern">
                  <DotPattern />
                </div>
              </section>

              {/* BASIC COMPONENTS */}
              <section className="space-y-16 py-6 border-t-2 border-[#26245c] dark:border-[#93c5fd]">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-2xl font-medium ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                    >
                      〇
                    </span>
                    <h2
                      className={`text-3xl font-bold ${darkMode ? "text-white" : "text-[#000000]"}`}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                      }}
                    >
                      3. Basic Components
                    </h2>
                  </div>
                  <p
                    className={`text-base ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                  >
                    Interactive UI elements including buttons,
                    form inputs, checkboxes, toggles and
                    progress indicators
                  </p>
                </div>

                {/* Buttons */}
                <div id="buttons">
                  <ButtonComponents />
                </div>

                {/* Form Inputs */}
                <div id="form-inputs">
                  <FormInputs />
                </div>

                {/* Checkboxes */}
                <div id="checkboxes">
                  <Checkboxes />
                </div>

                {/* Toggles */}
                <div id="toggles">
                  <Toggles />
                </div>

                {/* Progress Indicators */}
                <div id="progress">
                  <ProgressIndicators />
                </div>
              </section>

              {/* PAGE LAYOUT POSSIBILITIES */}
              <section className="space-y-16 pt-8 border-t-2 border-[#26245c] dark:border-[#93c5fd]">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-2xl font-medium ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                    >
                      〇
                    </span>
                    <h2
                      className={`text-3xl font-bold ${darkMode ? "text-white" : "text-[#000000]"}`}
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                      }}
                    >
                      4. Page Layout Possibilities
                    </h2>
                  </div>
                  <p
                    className={`text-base ${darkMode ? "text-gray-300" : "text-[#848484]"}`}
                  >
                    Common page compositions and layout patterns
                  </p>
                </div>

                {/* Hero Section: Image + Content */}
                <div id="hero-section">
                  <PageLayouts />
                </div>

                {/* Key Numbers */}
                <div id="key-numbers">
                  <KeyNumbers />
                </div>

                {/* Full-Width Banner */}
                <div id="full-width-banner">
                  <FullWidthBanner />
                </div>

                {/* List Layout */}
                <div id="list-layout">
                  <ListLayout />
                </div>

                {/* Content Sidebar */}
                <div id="content-sidebar">
                  <Sidebar />
                </div>

                  {/* Event Index */}
                <div id="event-index">
                  <EventIndex />
                </div>

                  {/* Article Grid */}
                <div id="article-grid">
                  <ArticleGrid />
                </div>

              </section>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#000000] mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-1 mb-4">
                <p>
                  <img
                  //src={logoWhite}
                  alt="SDSC Logo"
                  className="h-8"
                />
                </p>
              </div>

            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-white mb-3">
                {/* Resources */}
              </h4>
              <ul className="text-sm space-y-2 text-gray-400">
                <li className="hover:text-[#93c5fd] transition-colors cursor-pointer">
                  {/* Design Tokens */}
                </li>
                <li className="hover:text-[#93c5fd] transition-colors cursor-pointer">
                  {/* Component Library */}
                </li>
                <li className="hover:text-[#93c5fd] transition-colors cursor-pointer">
                  {/* Layout Patterns */}
                </li>
                <li className="hover:text-[#93c5fd] transition-colors cursor-pointer">
                  {/* Usage Guidelines */}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-white mb-3">
                Inspired By
              </h4>
              <a
                href="https://datascience.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#5461a6] dark:text-[#93c5fd] hover:text-[#5B7FBF] dark:hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Swiss Data Science Center
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              Design System v2.1 • React + Tailwind CSS • Space
              Grotesk + Switzer
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Version 1 - June, 2026
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#5461a6] hover:bg-[#26245c] text-white p-4 rounded-none shadow-lg transition-colors z-50"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
