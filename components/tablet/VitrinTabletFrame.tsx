"use client"

/**
 * Tablet-like frame wrapper for the Vitrin storefront.
 * Provides a dark bezel border + subtle grid overlay consistent with the patron panel.
 * Used on pages that want the "tablet experience" look.
 */
export default function VitrinTabletFrame({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-[#040810]">
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(129,140,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content container with tablet bezel effect */}
      <div className="relative z-10 max-w-[1440px] mx-auto min-h-screen border-x border-white/5 bg-[#060a13]/80 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
        {children}
      </div>
    </div>
  )
}
