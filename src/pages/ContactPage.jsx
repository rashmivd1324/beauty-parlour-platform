import Contact from "../components/Contact";

const ContactPage = () => {

  const exportAppointments = () => {
    const data =
      JSON.parse(localStorage.getItem("appointments")) || [];

    if (data.length === 0) {
      alert("No appointment data found");
      return;
    }

    const csv =
      "Name,Email,Phone,Service,Message,Date\n" +
      data
        .map(
          (a) =>
            `${a.name},${a.email},${a.phone},${a.service},${a.message},${a.date}`
        )
        .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "appointments.csv";
    link.click();
  };

  return (
    <>
      <Contact />

      {/* ✅ EXPORT BUTTON BELOW FORM */}
      <div style={{ textAlign: "center", margin: "30px" }}>
        <button
          className="secondary-btn"
          onClick={exportAppointments}
        >
          Export Appointments (Excel)
        </button>
      </div>
    </>
  );
};

export default ContactPage;
