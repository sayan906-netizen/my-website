import { useState, useEffect, useRef } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────
const HOSPITALS = [
  {
    id: 1,
    name: "Apollo Multispeciality",
    address: "Greams Road, Chennai",
    distance: "1.2 km",
    rating: 4.8,
    reviews: 2341,
    verified: true,
    image: "🏥",
    specialties: ["Cardiology", "Neurology", "Oncology"],
    insurance: ["Star Health", "HDFC Ergo", "ICICI Lombard"],
    beds: { icu: { total: 40, available: 8 }, general: { total: 200, available: 47 }, private: { total: 60, available: 12 }, ventilator: { total: 20, available: 3 } },
    facilities: ["24/7 Emergency", "Blood Bank", "Pharmacy", "ICU", "NICU", "Cath Lab"],
    waitTime: "~8 min",
    phone: "+91 44 2829 3333",
  },
  {
    id: 2,
    name: "Fortis Health Institute",
    address: "Bannerghatta Rd, Bengaluru",
    distance: "2.8 km",
    rating: 4.6,
    reviews: 1897,
    verified: true,
    image: "🏨",
    specialties: ["Orthopedics", "Cardiology", "Pediatrics"],
    insurance: ["Bajaj Allianz", "New India", "Oriental"],
    beds: { icu: { total: 30, available: 0 }, general: { total: 180, available: 21 }, private: { total: 45, available: 5 }, ventilator: { total: 15, available: 0 } },
    facilities: ["Emergency", "MRI", "CT Scan", "Dialysis", "Physiotherapy"],
    waitTime: "~15 min",
    phone: "+91 80 6621 4444",
  },
  {
    id: 3,
    name: "AIIMS Trauma Centre",
    address: "Ansari Nagar, New Delhi",
    distance: "4.1 km",
    rating: 4.9,
    reviews: 5102,
    verified: true,
    image: "🏛️",
    specialties: ["Trauma", "Burns", "Neurosurgery"],
    insurance: ["Government", "CGHS", "ESI", "All Private"],
    beds: { icu: { total: 80, available: 14 }, general: { total: 500, available: 89 }, private: { total: 20, available: 2 }, ventilator: { total: 40, available: 7 } },
    facilities: ["Level-1 Trauma", "Burn Unit", "Air Ambulance", "Blood Bank", "OT"],
    waitTime: "~5 min",
    phone: "+91 11 2659 3000",
  },
  {
    id: 4,
    name: "Manipal Super Specialty",
    address: "HAL Airport Road, Bengaluru",
    distance: "5.5 km",
    rating: 4.5,
    reviews: 1234,
    verified: true,
    image: "🏗️",
    specialties: ["Transplant", "Cancer", "Cardiology"],
    insurance: ["Star Health", "Max Bupa", "Aetna"],
    beds: { icu: { total: 50, available: 19 }, general: { total: 250, available: 63 }, private: { total: 80, available: 18 }, ventilator: { total: 25, available: 5 } },
    facilities: ["Transplant Unit", "Robotic Surgery", "Proton Therapy", "PICU"],
    waitTime: "~12 min",
    phone: "+91 80 2502 4444",
  },
  {
    id: 5,
    name: "Narayana Hrudayalaya",
    address: "Bommasandra, Bengaluru",
    distance: "7.3 km",
    rating: 4.7,
    reviews: 3021,
    verified: false,
    image: "❤️",
    specialties: ["Cardiac", "Pediatric Cardiac", "Vascular"],
    insurance: ["All Major Insurers"],
    beds: { icu: { total: 60, available: 4 }, general: { total: 300, available: 78 }, private: { total: 100, available: 22 }, ventilator: { total: 30, available: 2 } },
    facilities: ["Cardiac Cath Lab", "Echo", "EP Lab", "Valve Clinic"],
    waitTime: "~20 min",
    phone: "+91 80 7122 2222",
  },
];

const EMERGENCY_TYPES = [
  { id: "cardiac", label: "Cardiac", icon: "❤️", color: "#ef4444" },
  { id: "accident", label: "Accident", icon: "🚗", color: "#f97316" },
  { id: "respiratory", label: "Respiratory", icon: "🫁", color: "#3b82f6" },
  { id: "stroke", label: "Stroke", icon: "🧠", color: "#8b5cf6" },
  { id: "burns", label: "Burns", icon: "🔥", color: "#f59e0b" },
  { id: "maternity", label: "Maternity", icon: "🤱", color: "#ec4899" },
];

const BED_TYPES = [
  { id: "icu", label: "ICU Bed", icon: "🛏️", desc: "Intensive Care Unit", price: "₹8,500/day" },
  { id: "general", label: "General Ward", icon: "🛏", desc: "Shared ward with nursing", price: "₹1,200/day" },
  { id: "private", label: "Private Room", icon: "🚪", desc: "Single occupancy with AC", price: "₹3,800/day" },
  { id: "ventilator", label: "Ventilator", icon: "💨", desc: "Mechanical ventilation support", price: "₹12,000/day" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function BedStatusBadge({ available, total }) {
  const pct = available / total;
  const status = available === 0 ? "Full" : pct < 0.15 ? "Limited" : "Available";
  const colors = { Full: "#ef4444", Limited: "#f97316", Available: "#10b981" };
  const bg = { Full: "#fef2f2", Limited: "#fff7ed", Available: "#f0fdf4" };
  return (
    <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 20, background: bg[status], color: colors[status], letterSpacing: 0.3 }}>
      {status === "Available" && <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#10b981", marginRight: 4, animation: "pulse 2s infinite" }} />}
      {available}/{total} {status}
    </span>
  );
}

function Stars({ rating }) {
  return (
    <span style={{ fontSize: 12, color: "#f59e0b" }}>
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
      <span style={{ color: "#64748b", marginLeft: 4 }}>{rating}</span>
    </span>
  );
}

function NavBar({ screen, setScreen }) {
  const tabs = [
    { id: "home", icon: "🏠", label: "Home" },
    { id: "hospitals", icon: "🏥", label: "Book" },
    { id: "ambulance", icon: "🚑", label: "Ambulance" },
    { id: "profile", icon: "👤", label: "Profile" },
  ];
  return (
    <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid #f1f5f9", display: "flex", zIndex: 100, paddingBottom: 8 }}>
      {tabs.map((t) => (
        <button key={t.id} onClick={() => setScreen(t.id)} style={{ flex: 1, background: "none", border: "none", cursor: "pointer", padding: "10px 0 4px", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, transition: "transform 0.15s" }}>
          <span style={{ fontSize: 20, filter: screen === t.id ? "none" : "grayscale(100%) opacity(0.5)" }}>{t.icon}</span>
          <span style={{ fontSize: 10, fontWeight: screen === t.id ? 700 : 400, color: screen === t.id ? "#3b82f6" : "#94a3b8", letterSpacing: 0.3 }}>{t.label}</span>
          {screen === t.id && <div style={{ width: 20, height: 2, background: "#3b82f6", borderRadius: 2, marginTop: 2 }} />}
        </button>
      ))}
    </div>
  );
}

// ─── SCREENS ─────────────────────────────────────────────────────────────────

function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 1500);
    const t4 = setTimeout(() => onDone(), 3200);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(145deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, position: "relative", overflow: "hidden" }}>
      {/* Glow rings */}
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.15)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "expand 3s ease-out infinite" }} />
      <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.2)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "expand 3s ease-out 0.5s infinite" }} />
      <div style={{ opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? "scale(1)" : "scale(0.7)", transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)", fontSize: 72, marginBottom: 16 }}>🏥</div>
      <div style={{ opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? "translateY(0)" : "translateY(20px)", transition: "all 0.5s ease 0.1s", textAlign: "center" }}>
        <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: -1, fontFamily: "Georgia, serif" }}>SwiftCare</div>
        <div style={{ fontSize: 13, color: "#60a5fa", marginTop: 8, letterSpacing: 1.5, textTransform: "uppercase" }}>Smart Healthcare Platform</div>
      </div>
      <div style={{ opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? "translateY(0)" : "translateY(16px)", transition: "all 0.5s ease 0.2s", marginTop: 20, textAlign: "center" }}>
        <div style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 260 }}>Book healthcare before reaching the hospital</div>
      </div>
      {phase >= 3 && (
        <div style={{ marginTop: 48, display: "flex", gap: 6 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: i === 0 ? 24 : 6, height: 6, borderRadius: 3, background: i === 0 ? "#60a5fa" : "rgba(255,255,255,0.2)" }} />
          ))}
        </div>
      )}
      <style>{`@keyframes expand { 0%{transform:translate(-50%,-50%) scale(0.8);opacity:0.6} 100%{transform:translate(-50%,-50%) scale(1.4);opacity:0} } @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </div>
  );
}

function HomeScreen({ setScreen, setSelectedHospital }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState(null);
  const [liveUpdates, setLiveUpdates] = useState({ 1: 8, 2: 0, 3: 14, 4: 19, 5: 4 });

  useEffect(() => {
    const iv = setInterval(() => {
      setLiveUpdates((prev) => {
        const id = Math.ceil(Math.random() * 5);
        const delta = Math.random() > 0.5 ? 1 : -1;
        const cur = prev[id];
        const newVal = Math.max(0, Math.min(cur + delta, 20));
        return { ...prev, [id]: newVal };
      });
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  const featured = HOSPITALS.slice(0, 3);

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)", padding: "52px 20px 28px", borderRadius: "0 0 28px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", letterSpacing: 0.5 }}>📍 Kolkata, WB</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginTop: 4, fontFamily: "Georgia, serif" }}>Good Morning 👋</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>How can we help you today?</div>
          </div>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🔔</div>
        </div>
        {/* Search */}
        <div style={{ background: "#fff", borderRadius: 14, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 4px 24px rgba(0,0,0,0.12)", border: searchFocused ? "2px solid #3b82f6" : "2px solid transparent", transition: "border 0.2s" }}>
          <span style={{ fontSize: 18 }}>🔍</span>
          <input onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} placeholder="Search hospitals, beds, emergencies..." style={{ flex: 1, border: "none", outline: "none", fontSize: 14, color: "#334155", background: "none" }} />
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        {/* Quick Actions */}
        <div style={{ marginTop: 24, marginBottom: 20 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>Quick Actions</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {[
              { icon: "🛏️", label: "Book Bed", color: "#eff6ff", iconBg: "#3b82f6", action: () => setScreen("hospitals") },
              { icon: "🚑", label: "Ambulance", color: "#fff7ed", iconBg: "#f97316", action: () => setScreen("ambulance") },
              { icon: "👨‍⚕️", label: "Find Doctor", color: "#f0fdf4", iconBg: "#10b981", action: () => {} },
            ].map((a) => (
              <button key={a.label} onClick={a.action} style={{ background: "#fff", border: "1px solid #f1f5f9", borderRadius: 16, padding: "16px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "transform 0.15s, box-shadow 0.15s" }}
                onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.96)"; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: a.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{a.icon}</div>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#334155" }}>{a.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Emergency Type */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>Emergency Type</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
            {EMERGENCY_TYPES.map((e) => (
              <button key={e.id} onClick={() => setSelectedEmergency(e.id === selectedEmergency ? null : e.id)}
                style={{ background: selectedEmergency === e.id ? e.color : "#fff", border: selectedEmergency === e.id ? `2px solid ${e.color}` : "1px solid #f1f5f9", borderRadius: 12, padding: "10px 6px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, transition: "all 0.2s" }}>
                <span style={{ fontSize: 22 }}>{e.icon}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: selectedEmergency === e.id ? "#fff" : "#334155" }}>{e.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Nearby Hospitals */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Nearby Hospitals</div>
            <button onClick={() => setScreen("hospitals")} style={{ fontSize: 13, color: "#3b82f6", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>See all →</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {featured.map((h) => (
              <button key={h.id} onClick={() => { setSelectedHospital(h); setScreen("hospitalDetail"); }}
                style={{ background: "#fff", border: "1px solid #f1f5f9", borderRadius: 16, padding: 16, display: "flex", gap: 14, alignItems: "flex-start", cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", textAlign: "left", width: "100%", transition: "box-shadow 0.2s" }}>
                <div style={{ width: 54, height: 54, borderRadius: 14, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>{h.image}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{h.name}</span>
                    {h.verified && <span style={{ fontSize: 10, background: "#eff6ff", color: "#3b82f6", padding: "1px 6px", borderRadius: 20, fontWeight: 700 }}>✓ Verified</span>}
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{h.distance} • {h.waitTime} avg wait</div>
                  <Stars rating={h.rating} />
                  <div style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <BedStatusBadge available={liveUpdates[h.id]} total={h.beds.icu.total} />
                    <span style={{ fontSize: 11, background: "#f1f5f9", color: "#475569", padding: "2px 8px", borderRadius: 20 }}>ICU</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SOS Button */}
      <div style={{ position: "fixed", bottom: 90, right: 20, zIndex: 99 }}>
        <button style={{ width: 58, height: 58, borderRadius: "50%", background: "linear-gradient(135deg, #ef4444, #dc2626)", border: "none", boxShadow: "0 4px 20px rgba(239,68,68,0.5)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", animation: "pulseSOS 2s infinite" }}>
          <span style={{ fontSize: 18 }}>🆘</span>
          <span style={{ fontSize: 7, color: "#fff", fontWeight: 800, letterSpacing: 0.5 }}>SOS</span>
        </button>
      </div>
      <style>{`@keyframes pulseSOS { 0%,100%{box-shadow:0 4px 20px rgba(239,68,68,0.5)} 50%{box-shadow:0 4px 32px rgba(239,68,68,0.85)} }`}</style>
    </div>
  );
}

function HospitalsScreen({ setScreen, setSelectedHospital }) {
  const [viewMode, setViewMode] = useState("list");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = HOSPITALS.filter((h) => {
    if (filter === "available" && h.beds.icu.available === 0) return false;
    if (filter === "icu" && h.beds.icu.available === 0) return false;
    if (search && !h.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const getBedColor = (avail, total) => avail === 0 ? "#ef4444" : avail / total < 0.2 ? "#f97316" : "#10b981";

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: 80 }}>
      <div style={{ background: "#fff", padding: "52px 20px 16px", borderBottom: "1px solid #f1f5f9", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", fontFamily: "Georgia, serif" }}>Find Hospitals</div>
          <div style={{ display: "flex", background: "#f1f5f9", borderRadius: 10, padding: 3 }}>
            {["list", "map"].map((m) => (
              <button key={m} onClick={() => setViewMode(m)} style={{ background: viewMode === m ? "#fff" : "transparent", border: "none", borderRadius: 8, padding: "5px 14px", fontSize: 13, fontWeight: 600, color: viewMode === m ? "#3b82f6" : "#64748b", cursor: "pointer", boxShadow: viewMode === m ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
                {m === "list" ? "☰ List" : "🗺 Map"}
              </button>
            ))}
          </div>
        </div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search hospitals..." style={{ width: "100%", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
        <div style={{ display: "flex", gap: 8, marginTop: 10, overflowX: "auto", paddingBottom: 2 }}>
          {[["all", "All"], ["available", "Available Now"], ["icu", "ICU Available"], ["cardiac", "Cardiac"], ["trauma", "Trauma"]].map(([id, label]) => (
            <button key={id} onClick={() => setFilter(id)} style={{ background: filter === id ? "#3b82f6" : "#f1f5f9", color: filter === id ? "#fff" : "#475569", border: "none", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>{label}</button>
          ))}
        </div>
      </div>

      {viewMode === "map" ? (
        <div style={{ margin: "16px", background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 20, textAlign: "center", height: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: 40 }}>🗺️</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#334155", marginTop: 8 }}>Map View</div>
          <div style={{ fontSize: 13, color: "#94a3b8" }}>Showing {filtered.length} hospitals near you</div>
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            {filtered.map((h) => (
              <div key={h.id} style={{ background: getBedColor(h.beds.icu.available, h.beds.icu.total), width: 10, height: 10, borderRadius: "50%", border: "2px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.3)" }} />
            ))}
          </div>
        </div>
      ) : null}

      <div style={{ padding: "8px 16px 0" }}>
        <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 10 }}>{filtered.length} hospitals found</div>
        {filtered.map((h) => (
          <button key={h.id} onClick={() => { setSelectedHospital(h); setScreen("hospitalDetail"); }}
            style={{ background: "#fff", border: "1px solid #f1f5f9", borderRadius: 18, padding: 16, marginBottom: 12, display: "block", width: "100%", textAlign: "left", cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, flexShrink: 0 }}>{h.image}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{h.name}</span>
                  {h.verified && <span style={{ fontSize: 9, background: "#eff6ff", color: "#2563eb", padding: "1px 6px", borderRadius: 10, fontWeight: 700 }}>✓ VERIFIED</span>}
                </div>
                <div style={{ fontSize: 12, color: "#64748b", margin: "2px 0" }}>{h.address}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Stars rating={h.rating} />
                  <span style={{ fontSize: 11, color: "#94a3b8" }}>({h.reviews.toLocaleString()})</span>
                  <span style={{ fontSize: 11, color: "#64748b" }}>• {h.distance}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }}>
                  {Object.entries(h.beds).map(([type, data]) => (
                    <div key={type} style={{ background: "#f8fafc", borderRadius: 8, padding: "6px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 11, color: "#64748b", textTransform: "capitalize" }}>{type === "icu" ? "ICU" : type}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: getBedColor(data.available, data.total) }}>{data.available}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: 6 }}>
                {h.specialties.slice(0, 2).map((s) => (
                  <span key={s} style={{ fontSize: 10, background: "#f0fdf4", color: "#15803d", padding: "2px 8px", borderRadius: 20, fontWeight: 600 }}>{s}</span>
                ))}
              </div>
              <span style={{ fontSize: 12, color: "#3b82f6", fontWeight: 700 }}>Book Now →</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function HospitalDetailScreen({ hospital, setScreen }) {
  const [selectedBed, setSelectedBed] = useState(null);
  const [tab, setTab] = useState("beds");

  if (!hospital) return null;

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: 100 }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #1e3a8a, #0ea5e9)", padding: "52px 20px 24px", position: "relative" }}>
        <button onClick={() => setScreen("hospitals")} style={{ position: "absolute", top: 52, left: 16, background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 10, padding: "6px 12px", color: "#fff", cursor: "pointer", fontSize: 14 }}>← Back</button>
        <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 8 }}>
          <div style={{ width: 70, height: 70, borderRadius: 20, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 38 }}>{hospital.image}</div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", fontFamily: "Georgia, serif" }}>{hospital.name}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 2 }}>📍 {hospital.address}</div>
            <div style={{ marginTop: 4, display: "flex", alignItems: "center", gap: 8 }}>
              <Stars rating={hospital.rating} />
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>({hospital.reviews.toLocaleString()} reviews)</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {[{ icon: "📞", label: "Call" }, { icon: "🗺️", label: `${hospital.distance}` }, { icon: "⏱️", label: hospital.waitTime }].map((i) => (
            <div key={i.label} style={{ background: "rgba(255,255,255,0.15)", borderRadius: 10, padding: "6px 12px", display: "flex", gap: 5, alignItems: "center" }}>
              <span style={{ fontSize: 13 }}>{i.icon}</span>
              <span style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>{i.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "#fff", display: "flex", borderBottom: "1px solid #f1f5f9", padding: "0 20px" }}>
        {["beds", "facilities", "reviews"].map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ flex: 1, background: "none", border: "none", padding: "14px 0", fontSize: 13, fontWeight: 700, color: tab === t ? "#3b82f6" : "#94a3b8", borderBottom: tab === t ? "2px solid #3b82f6" : "none", cursor: "pointer", textTransform: "capitalize" }}>{t === "beds" ? "🛏️ Beds" : t === "facilities" ? "🏥 Facilities" : "⭐ Reviews"}</button>
        ))}
      </div>

      <div style={{ padding: "16px 16px 0" }}>
        {tab === "beds" && (
          <div>
            <div style={{ fontSize: 14, color: "#64748b", marginBottom: 14 }}>Select bed type for real-time availability</div>
            {BED_TYPES.map((bt) => {
              const data = hospital.beds[bt.id];
              const avail = data.available;
              const isSelected = selectedBed === bt.id;
              const color = avail === 0 ? "#ef4444" : avail < 5 ? "#f97316" : "#10b981";
              return (
                <button key={bt.id} onClick={() => avail > 0 && setSelectedBed(isSelected ? null : bt.id)}
                  style={{ background: isSelected ? "#eff6ff" : "#fff", border: isSelected ? "2px solid #3b82f6" : "1px solid #f1f5f9", borderRadius: 16, padding: 16, marginBottom: 10, width: "100%", textAlign: "left", cursor: avail > 0 ? "pointer" : "not-allowed", opacity: avail === 0 ? 0.6 : 1, display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: isSelected ? "#dbeafe" : "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{bt.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{bt.label}</div>
                    <div style={{ fontSize: 12, color: "#64748b" }}>{bt.desc}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#3b82f6", marginTop: 2 }}>{bt.price}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: color }}>{avail}</div>
                    <div style={{ fontSize: 10, color: "#94a3b8" }}>Available</div>
                    {avail > 0 && avail < 5 && <div style={{ fontSize: 9, color: "#f97316", fontWeight: 700 }}>Filling Fast!</div>}
                  </div>
                </button>
              );
            })}

            {/* Insurance */}
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #f1f5f9", padding: 16, marginTop: 4 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>🛡️ Insurance Accepted</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {hospital.insurance.map((ins) => (
                  <span key={ins} style={{ fontSize: 11, background: "#f0fdf4", color: "#15803d", padding: "4px 10px", borderRadius: 20, fontWeight: 600 }}>✓ {ins}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "facilities" && (
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #f1f5f9", padding: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {hospital.facilities.map((f) => (
                <div key={f} style={{ background: "#f8fafc", borderRadius: 10, padding: "10px 12px", fontSize: 13, color: "#334155", fontWeight: 500 }}>✅ {f}</div>
              ))}
            </div>
          </div>
        )}

        {tab === "reviews" && (
          <div>
            {[{ name: "Rahul M.", rating: 5, text: "Excellent emergency response. Bed was ready within 10 minutes of booking.", time: "2 days ago" }, { name: "Priya S.", rating: 4, text: "Good facilities, staff was helpful. ICU care was top-notch.", time: "1 week ago" }, { name: "Amit K.", rating: 5, text: "Used the app to book an ICU bed for my father. Seamless experience!", time: "2 weeks ago" }].map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, border: "1px solid #f1f5f9", padding: 14, marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#3b82f6" }}>{r.name[0]}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{r.name}</div>
                      <Stars rating={r.rating} />
                    </div>
                  </div>
                  <span style={{ fontSize: 11, color: "#94a3b8" }}>{r.time}</span>
                </div>
                <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.6 }}>{r.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Book Button */}
      {tab === "beds" && (
        <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "#fff", borderTop: "1px solid #f1f5f9", padding: "14px 20px 24px", boxSizing: "border-box" }}>
          {selectedBed && (
            <div style={{ fontSize: 13, color: "#64748b", marginBottom: 8, textAlign: "center" }}>
              Selected: <strong>{BED_TYPES.find((b) => b.id === selectedBed)?.label}</strong> · {BED_TYPES.find((b) => b.id === selectedBed)?.price}
            </div>
          )}
          <button onClick={() => selectedBed && setScreen("confirmation")} style={{ width: "100%", background: selectedBed ? "linear-gradient(135deg, #2563eb, #0ea5e9)" : "#e2e8f0", border: "none", borderRadius: 16, padding: "16px", fontSize: 16, fontWeight: 800, color: selectedBed ? "#fff" : "#94a3b8", cursor: selectedBed ? "pointer" : "not-allowed", boxShadow: selectedBed ? "0 4px 20px rgba(37,99,235,0.4)" : "none", transition: "all 0.2s" }}>
            {selectedBed ? "🛏️ Book Bed Now" : "Select a Bed Type"}
          </button>
        </div>
      )}
    </div>
  );
}

function AmbulanceScreen({ setScreen }) {
  const [pickup, setPickup] = useState("Current Location");
  const [emergencyType, setEmergencyType] = useState(null);
  const [calling, setCalling] = useState(false);
  const [eta, setEta] = useState(null);

  const handleCall = () => {
    if (!emergencyType) return;
    setCalling(true);
    setTimeout(() => { setCalling(false); setEta(Math.floor(Math.random() * 8) + 4); }, 2500);
  };

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: 80 }}>
      <div style={{ background: "linear-gradient(135deg, #dc2626, #ef4444)", padding: "52px 20px 24px" }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", fontFamily: "Georgia, serif" }}>🚑 Ambulance Booking</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>Emergency response in your area</div>
      </div>

      <div style={{ padding: 16 }}>
        {eta ? (
          <div style={{ background: "#fff", borderRadius: 20, padding: 24, textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: "2px solid #10b981" }}>
            <div style={{ fontSize: 48 }}>🚑</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#10b981", marginTop: 8 }}>Ambulance Dispatched!</div>
            <div style={{ fontSize: 40, fontWeight: 900, color: "#0f172a", margin: "12px 0" }}>{eta} min</div>
            <div style={{ fontSize: 14, color: "#64748b" }}>Estimated arrival time</div>
            <div style={{ background: "#f0fdf4", borderRadius: 12, padding: 12, marginTop: 16 }}>
              <div style={{ fontSize: 13, color: "#15803d", fontWeight: 600 }}>Driver: Ravi Kumar • MH 02 CA 4821</div>
              <div style={{ fontSize: 13, color: "#15803d" }}>📞 +91 98765 43210</div>
            </div>
            <button onClick={() => setScreen("confirmation")} style={{ marginTop: 16, width: "100%", background: "#10b981", border: "none", borderRadius: 12, padding: 14, color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Track on Map →</button>
          </div>
        ) : (
          <>
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #f1f5f9", padding: 16, marginBottom: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>📍 Pickup Location</div>
              <div style={{ background: "#f8fafc", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>📍</span>
                <input value={pickup} onChange={(e) => setPickup(e.target.value)} style={{ flex: 1, border: "none", outline: "none", fontSize: 14, background: "none", color: "#334155" }} />
              </div>
            </div>

            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #f1f5f9", padding: 16, marginBottom: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>🚨 Emergency Type</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                {EMERGENCY_TYPES.map((e) => (
                  <button key={e.id} onClick={() => setEmergencyType(e.id === emergencyType ? null : e.id)}
                    style={{ background: emergencyType === e.id ? "#fef2f2" : "#f8fafc", border: emergencyType === e.id ? `2px solid #ef4444` : "1px solid #e2e8f0", borderRadius: 12, padding: "10px", cursor: "pointer", display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 20 }}>{e.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#334155" }}>{e.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #f1f5f9", padding: 16, marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>🚑 Vehicle Type</div>
              {[{ type: "ALS", label: "Advanced Life Support", price: "₹1,200", time: "4-8 min" }, { type: "BLS", label: "Basic Life Support", price: "₹600", time: "6-12 min" }].map((v) => (
                <div key={v.type} style={{ background: "#f8fafc", borderRadius: 10, padding: "10px 14px", marginBottom: 6, display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{v.type}</span>
                    <div style={{ fontSize: 11, color: "#64748b" }}>{v.label}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#3b82f6" }}>{v.price}</div>
                    <div style={{ fontSize: 11, color: "#64748b" }}>{v.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handleCall} disabled={!emergencyType || calling}
              style={{ width: "100%", background: emergencyType ? "linear-gradient(135deg, #dc2626, #ef4444)" : "#e2e8f0", border: "none", borderRadius: 18, padding: "18px", fontSize: 18, fontWeight: 900, color: emergencyType ? "#fff" : "#94a3b8", cursor: emergencyType ? "pointer" : "not-allowed", boxShadow: emergencyType ? "0 6px 28px rgba(220,38,38,0.4)" : "none", letterSpacing: 0.5 }}>
              {calling ? "🔄 Dispatching..." : "🚨 Call Ambulance Now"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function ConfirmationScreen({ hospital, setScreen }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 1400);
    const t3 = setTimeout(() => setStep(3), 2200);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  const bookingId = "SWC" + Math.floor(Math.random() * 900000 + 100000);

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: 80 }}>
      <div style={{ background: "linear-gradient(135deg, #0f172a, #1e3a5f)", padding: "52px 20px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", fontFamily: "Georgia, serif" }}>Booking Status</div>
      </div>

      <div style={{ padding: 20 }}>
        {/* Steps */}
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #f1f5f9", padding: 20, marginBottom: 16 }}>
          {[{ label: "Booking Confirmed", icon: "✅" }, { label: "Bed Reserved", icon: "🛏️" }, { label: "Staff Notified", icon: "👨‍⚕️" }].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: i < 2 ? 16 : 0, opacity: step > i ? 1 : 0.3, transition: "opacity 0.4s" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: step > i ? "#f0fdf4" : "#f8fafc", border: step > i ? "2px solid #10b981" : "2px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{s.label}</div>
                {step > i && <div style={{ fontSize: 12, color: "#10b981" }}>Completed</div>}
              </div>
            </div>
          ))}
        </div>

        {step >= 3 && (
          <>
            {/* QR Code */}
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #f1f5f9", padding: 20, textAlign: "center", marginBottom: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 3, width: 120, margin: "0 auto 12px", padding: 10, background: "#f8fafc", borderRadius: 8 }}>
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} style={{ width: "100%", aspectRatio: "1", background: Math.random() > 0.5 ? "#0f172a" : "transparent", borderRadius: 1 }} />
                ))}
              </div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#0f172a", letterSpacing: 2 }}>{bookingId}</div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>Show this at reception</div>
            </div>

            {/* Details */}
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #f1f5f9", padding: 16, marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>Booking Details</div>
              {[
                ["Hospital", hospital?.name || "Apollo Multispeciality"],
                ["Bed Type", "ICU Bed"],
                ["Date", new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })],
                ["ETA for Bed", "~12 minutes"],
                ["Status", "Confirmed ✅"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f8fafc", fontSize: 13 }}>
                  <span style={{ color: "#64748b" }}>{k}</span>
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>{v}</span>
                </div>
              ))}
            </div>

            <button style={{ width: "100%", background: "linear-gradient(135deg, #2563eb, #0ea5e9)", border: "none", borderRadius: 16, padding: 16, fontSize: 15, fontWeight: 800, color: "#fff", cursor: "pointer", boxShadow: "0 4px 20px rgba(37,99,235,0.3)", marginBottom: 10 }}>
              🗺️ Navigate to Hospital
            </button>
            <button onClick={() => setScreen("home")} style={{ width: "100%", background: "#f1f5f9", border: "none", borderRadius: 16, padding: 16, fontSize: 15, fontWeight: 700, color: "#475569", cursor: "pointer" }}>
              🏠 Back to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingBottom: 80 }}>
      <div style={{ background: "linear-gradient(135deg, #0f172a, #1e3a5f)", padding: "52px 20px 32px", textAlign: "center" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, margin: "0 auto 10px" }}>👤</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", fontFamily: "Georgia, serif" }}>Arjun Sharma</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>+91 98765 43210 · Kolkata</div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16 }}>
          {[["3", "Bookings"], ["A+", "Blood"], ["28", "Age"]].map(([val, label]) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "8px 16px", textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{val}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: 16 }}>
        {[{ icon: "🏥", label: "My Bookings", desc: "View past & upcoming" }, { icon: "💊", label: "Medical Records", desc: "Prescriptions & reports" }, { icon: "🛡️", label: "Insurance", desc: "Star Health · Policy #SH2024" }, { icon: "👨‍👩‍👧‍👦", label: "Family Members", desc: "3 members added" }, { icon: "⚙️", label: "Settings", desc: "Notifications, preferences" }, { icon: "🆘", label: "Emergency Contacts", desc: "2 contacts saved" }].map((item) => (
          <div key={item.label} style={{ background: "#fff", borderRadius: 14, padding: "14px 16px", marginBottom: 8, display: "flex", gap: 14, alignItems: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", cursor: "pointer" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{item.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{item.label}</div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>{item.desc}</div>
            </div>
            <span style={{ color: "#cbd5e1" }}>›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [screen, setScreen] = useState("home");
  const [selectedHospital, setSelectedHospital] = useState(null);

  if (showSplash) return <SplashScreen onDone={() => setShowSplash(false)} />;

  const renderScreen = () => {
    switch (screen) {
      case "home": return <HomeScreen setScreen={setScreen} setSelectedHospital={setSelectedHospital} />;
      case "hospitals": return <HospitalsScreen setScreen={setScreen} setSelectedHospital={setSelectedHospital} />;
      case "hospitalDetail": return <HospitalDetailScreen hospital={selectedHospital} setScreen={setScreen} />;
      case "ambulance": return <AmbulanceScreen setScreen={setScreen} />;
      case "confirmation": return <ConfirmationScreen hospital={selectedHospital} setScreen={setScreen} />;
      case "profile": return <ProfileScreen />;
      default: return <HomeScreen setScreen={setScreen} setSelectedHospital={setSelectedHospital} />;
    }
  };

  return (
    <div style={{ maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#f8fafc", position: "relative", fontFamily: "-apple-system, 'Segoe UI', sans-serif" }}>
      {renderScreen()}
      {!["hospitalDetail", "confirmation"].includes(screen) && <NavBar screen={screen} setScreen={setScreen} />}
    </div>
  );
}
