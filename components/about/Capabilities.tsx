export default function Capabilities() {
  const capabilities = [
    {
      title: "CNC Machining",
      description: "High-precision CNC milling and turning for complex industrial components.",
      bgImage: "/images/capabilities/cnc.jpg",
    },
    {
      title: "Fabrication & Welding",
      description: "Structural frames, brackets, and assemblies built to exact specifications.",
      bgImage: "/images/capabilities/fabrication.jpg",
    },
    {
      title: "Custom Engineering",
      description: "Design-to-manufacture solutions tailored to unique client requirements.",
      bgImage: "/images/capabilities/custom-engineering.jpg",
    },
    {
      title: "Quality Assurance",
      description: "Strict inspection processes ensuring dimensional accuracy and consistency.",
      bgImage: "/images/capabilities/quality.jpg",
    },
  ];

  return (
    <section className="capabilities">
      <div className="capabilities__container">
        <h2 className="section-title">Our Capabilities</h2>

        <div className="capabilities__grid">
          {capabilities.map((item, index) => (
            <div key={index} className="capability-item" style={{ backgroundImage: `url(${item.bgImage})` }}>
              <div className="capability-item__overlay" />
              <div className="capability-item__content">
                <h3 className="capability-item__title">{item.title}</h3>
                <p className="capability-item__details">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}