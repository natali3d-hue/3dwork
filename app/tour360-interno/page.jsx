export default function TourInternoPage() {
  return (
    <main
      style={{
        position: "fixed",
        top: "80px",
        left: 0,
        width: "100%",
        height: "calc(100vh - 80px)",
        zIndex: 1
      }}
    >
      <iframe
        src="/PanoTest/index.html"
        style={{
          border: "none",
          width: "100%",
          height: "100%"
        }}
        title="Tour 360° Interno"
      />
    </main>
  );
}










