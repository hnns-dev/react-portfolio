import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">Get in touch</h2>
        <p className="text-lg">
          You can reach me at{" "}
          <a href="mailto:example@example.com">example@example.com</a>.
        </p>
      </div>
    </section>
  );
}

export default Contact;
