/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Color Palette from Design Guide
      colors: {
        // Primary - Deep Slate Blue
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          light: "#243A4D",
          dark: "#0F1A24",
        },
        // Secondary - Vibrant Cyan / Electric Blue
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        // Accent - Emerald Green
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        // Backgrounds
        background: "var(--background)",
        "background-alt": "var(--background-alt)",
        foreground: "var(--foreground)",
        // Dark mode navy
        navy: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
        },
        // Text colors
        "text-primary": "var(--text-primary)",
        "text-subtle": "var(--text-subtle)",
        // Component colors
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        // Specific brand colors
        slate: {
          blue: "#1A2B3C",
        },
        cyan: {
          electric: "#00D1FF",
        },
        emerald: {
          success: "#10B981",
        },
      },
      // Typography from Design Guide
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        // H1 - Hero Headlines
        "hero": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        // H2 - Section Titles
        "section": ["2.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        // H3 - Card Titles
        "card-title": ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
        // Body Large
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        // Body Default
        "body": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        // Small/Label
        "label": ["0.875rem", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.05em" }],
      },
      // Border Radius from Design Guide
      borderRadius: {
        // 8px for cards
        lg: "var(--radius-lg)",
        // Default 8px
        md: "var(--radius-md)",
        // 4px for buttons
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
      },
      // Spacing using base-8 system
      spacing: {
        "18": "4.5rem",   // 72px
        "88": "22rem",    // 352px
        "128": "32rem",   // 512px
      },
      // Max widths for layout (12-column grid, 1200px max)
      maxWidth: {
        "container": "1200px",
        "7xl": "1200px",
      },
      // Box shadows
      boxShadow: {
        // Soft "Level 1" shadow for cards
        "card": "0px 4px 6px rgba(0, 0, 0, 0.05)",
        // Hover lift shadow
        "card-hover": "0px 10px 20px rgba(0, 0, 0, 0.1)",
        // Button hover shadow
        "btn-hover": "0px 4px 12px rgba(26, 43, 60, 0.2)",
      },
      // Transitions
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      // Keyframes for animations
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
