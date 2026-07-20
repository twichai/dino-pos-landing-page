import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dino POS — ระบบ POS ขายหน้าร้าน ใช้ฟรีตลอดชีพ";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f0c1b",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(139, 92, 246, 0.15) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(168, 85, 247, 0.1) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          color: "white",
          fontFamily: "sans-serif",
          padding: "60px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "300px",
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(60px)",
            borderRadius: "50%",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "rgba(139, 92, 246, 0.2)",
            border: "1px solid rgba(168, 85, 247, 0.4)",
            borderRadius: "50px",
            padding: "8px 24px",
            marginBottom: "30px",
            fontSize: "20px",
            fontWeight: 600,
            color: "#d8b4fe",
          }}
        >
          <span>✨ Dino POS — ใช้ฟรีตลอดชีพ</span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "24px",
            maxWidth: "950px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>ระบบ POS ขายหน้าร้าน</span>
          <span
            style={{
              marginLeft: "16px",
              background: "linear-gradient(to right, #c084fc, #f472b6)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            ใช้ฟรีตลอดชีพ
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "26px",
            color: "#cbd5e1",
            maxWidth: "800px",
            lineHeight: 1.5,
            marginBottom: "40px",
          }}
        >
          สำหรับร้านค้าขนาดเล็ก · ทำงานแม้ออฟไลน์ · ข้อมูลเก็บปลอดภัยบนเครื่องคุณ
        </div>

        {/* Footer brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "22px",
            fontWeight: 700,
            color: "#94a3b8",
          }}
        >
          <span style={{ color: "#a855f7" }}>dinopospro.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
