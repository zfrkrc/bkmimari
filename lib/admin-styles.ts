export const colors = {
  navy: "#0c2c68",
  navyD: "#081d45",
  gold: "#eab308",
  goldL: "#facc15",
  cream: "#f5f2ec",
  white: "#fffffe",
  ink: "#1a1a1a",
  mid: "#5a5a5a",
  soft: "#9a9a9a",
  border: "#ddd8cf",
  red: "#dc2626",
  green: "#16a34a",
};

const font = "'Inter', system-ui, sans-serif";
const heading = "'Oswald', sans-serif";

export const adminStyles = {
  page: { minHeight: "100vh", background: colors.cream, color: colors.ink, fontFamily: font },
  shell: { display: "flex" as const, minHeight: "100vh" },
  sidebar: {
    width: 240, flexShrink: 0, background: colors.navy, color: colors.white,
    padding: "20px 14px", position: "sticky" as const, top: 0, height: "100vh",
    display: "flex" as const, flexDirection: "column" as const,
  },
  logo: { display: "flex" as const, alignItems: "center" as const, gap: 10, marginBottom: 26, padding: "0 8px" },
  logoMark: {
    width: 34, height: 34, background: colors.gold, color: colors.navy,
    display: "flex" as const, alignItems: "center" as const, justifyContent: "center" as const,
    fontFamily: heading, fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em",
  },
  logoText: { fontFamily: heading, fontWeight: 600, fontSize: 15, letterSpacing: "0.02em" },
  logoSub: { fontSize: 10, color: "rgba(255,255,255,.55)", letterSpacing: "0.14em", textTransform: "uppercase" as const },
  navGroup: { fontSize: 10, color: "rgba(255,255,255,.45)", textTransform: "uppercase" as const, letterSpacing: "0.12em", padding: "0 12px", margin: "16px 0 6px" },
  navLink: {
    display: "flex" as const, alignItems: "center" as const, gap: 10, padding: "10px 12px", color: "rgba(255,255,255,.78)",
    textDecoration: "none", fontSize: 14, fontWeight: 500, marginBottom: 2,
  },
  navLinkActive: { background: "rgba(234,179,8,.16)", color: colors.goldL, fontWeight: 600 },
  sidebarFooter: { marginTop: "auto", borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: 14 },
  logoutBtn: {
    width: "100%", background: "transparent", border: "1px solid rgba(255,255,255,.22)", color: "rgba(255,255,255,.8)",
    padding: "9px 12px", fontSize: 13, fontWeight: 600, cursor: "pointer",
    display: "flex" as const, alignItems: "center" as const, gap: 8, fontFamily: font,
  },
  main: { flex: 1, padding: "32px 40px", maxWidth: 1150, width: "100%" },
  mainHeader: { display: "flex" as const, alignItems: "flex-end" as const, justifyContent: "space-between" as const, gap: 16, marginBottom: 6, flexWrap: "wrap" as const },
  h1: { fontFamily: heading, fontSize: 28, fontWeight: 500, margin: 0, letterSpacing: "0.01em" },
  sub: { color: colors.mid, fontSize: 14, marginBottom: 28 },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 16, marginBottom: 28 },
  card: { background: colors.white, border: `1px solid ${colors.border}`, padding: 22 },
  cardNum: { fontFamily: heading, fontSize: 34, fontWeight: 600, color: colors.navy },
  cardLabel: { color: colors.mid, fontSize: 13, marginTop: 6 },
  sectionTitle: { fontFamily: heading, fontSize: 18, fontWeight: 500, marginBottom: 14, color: colors.ink, letterSpacing: "0.02em" },
  table: { width: "100%", borderCollapse: "collapse" as const, background: colors.white, border: `1px solid ${colors.border}` },
  th: { textAlign: "left" as const, padding: "12px 14px", fontSize: 11, color: colors.mid, textTransform: "uppercase" as const, letterSpacing: 0.8, borderBottom: `1px solid ${colors.border}`, fontWeight: 600, background: colors.cream },
  td: { padding: "13px 14px", fontSize: 14, borderBottom: `1px solid ${colors.border}`, verticalAlign: "top" as const },
  btn: {
    background: colors.gold, color: colors.navy, border: "none", padding: "9px 18px",
    fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: font,
  },
  btnNavy: {
    background: colors.navy, color: colors.white, border: "none", padding: "9px 18px",
    fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: font,
  },
  btnGhost: {
    background: "transparent", color: colors.mid, border: `1px solid ${colors.border}`,
    padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
  },
  btnDanger: { background: "rgba(220,38,38,.08)", color: colors.red, border: "1px solid rgba(220,38,38,.3)", padding: "7px 13px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: font },
  input: {
    background: colors.white, border: `1px solid ${colors.border}`, padding: "11px 13px",
    color: colors.ink, fontSize: 14, width: "100%", marginBottom: 12, fontFamily: font, outline: "none",
  },
  label: { display: "block", fontSize: 12, fontWeight: 600, color: colors.mid, marginBottom: 6, textTransform: "uppercase" as const, letterSpacing: 0.6 },
  select: {
    background: colors.white, border: `1px solid ${colors.border}`, padding: "8px 11px",
    color: colors.ink, fontSize: 13, fontFamily: font, outline: "none",
  },
  badge: (bg: string, fg: string) => ({ background: bg, color: fg, padding: "3px 11px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" as const, display: "inline-block" as const }),
  spinner: { width: 32, height: 32, border: `3px solid ${colors.border}`, borderTopColor: colors.gold, borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "80px auto" },
  thumb: { width: 56, height: 40, objectFit: "cover" as const, background: colors.cream, border: `1px solid ${colors.border}` },
};
