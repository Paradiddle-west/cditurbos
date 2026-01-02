import { NextResponse } from "next/server";

function genId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams;

  const lead_id = q.get("lead_id") || genId();

  const payload = {
    lead_id,
    utm_source: q.get("utm_source") || "meta",
    utm_medium: q.get("utm_medium") || "whatsapp",
    utm_campaign: q.get("utm_campaign") || "",
    utm_adset: q.get("utm_adset") || q.get("utm_content") || "",
    utm_ad: q.get("utm_ad") || q.get("utm_term") || "",
    fbclid: q.get("fbclid") || "",
    referer: req.headers.get("referer") || "",
    landing: q.get("landing") || "",
    user_agent: req.headers.get("user-agent") || "",
  };

  // 1) Log a Google Sheets (Apps Script Web App)
  const SHEETS_WEBHOOK = process.env.SHEETS_WEBHOOK!;
  try {
    await fetch(SHEETS_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // no-cache para evitar edge cache raro
      cache: "no-store",
    });
  } catch {
    // Si falla el log, igual redirigimos (no rompemos conversión)
  }

  // 2) Redirigir a WhatsApp
  const phone = process.env.WHATSAPP_PHONE!; // ej: 54911XXXXXXXX
  const text = q.get("text") || "Hola! Quiero consultar por...";
  const waUrl = new URL(`https://wa.me/${phone}`);
  waUrl.searchParams.set("text", text);

  // Opcional: meter lead_id en el texto (yo lo haría invisible/soft)
  // waUrl.searchParams.set("text", `${text}\n\nID:${lead_id}`);

  return NextResponse.redirect(waUrl.toString(), 302);
}
