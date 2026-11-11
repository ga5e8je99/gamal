"use client";

import * as React from "react";
import dayjs from "dayjs";
import Dialog from "@mui/material/Dialog";
import {
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiX,
  FiUser,
  FiPhone,
  FiMail,
  FiChevronLeft,
  FiChevronRight,
  FiVideo,
  FiArrowRight,
  FiArrowLeft
} from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { useSiteData } from "@/lib/useSiteData";
import { useLanguage } from "@/lib/LanguageContext";

const PRESET_TIME_SLOTS = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "01:30 PM",
  "03:00 PM",
  "04:30 PM",
  "06:00 PM",
  "07:30 PM"
];

export default function Picker({ openProp, onClose }) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const { addAppointment } = useSiteData();
  const { dict, isRTL } = useLanguage();
  const t = dict?.picker || {};

  // Calendar State
  const [currentMonth, setCurrentMonth] = React.useState(dayjs());
  const [selectedDay, setSelectedDay] = React.useState(dayjs().add(1, "day"));
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState("02:00 PM");
  const [customTime, setCustomTime] = React.useState("");
  const [isCustomTimeOpen, setIsCustomTimeOpen] = React.useState(false);

  // Mobile step state (1: Pick date/time, 2: Enter info)
  const [mobileStep, setMobileStep] = React.useState(1);

  // Booking Form State
  const [clientData, setClientData] = React.useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
    service: "Web Development (React / Next.js)"
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const isOpen = Boolean(openProp) || internalOpen;

  const handleOpen = () => {
    setInternalOpen(true);
    setMobileStep(1);
  };

  const handleClose = () => {
    setInternalOpen(false);
    if (onClose) onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setMobileStep(1);
      setErrorMsg("");
      setClientData({
        name: "",
        phone: "",
        email: "",
        notes: "",
        service: "Web Development (React / Next.js)"
      });
    }, 300);
  };

  // Month Navigation
  const prevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  // Generate Calendar Days Grid
  const generateCalendarDays = () => {
    const startOfMonth = currentMonth.startOf("month");
    const endOfMonth = currentMonth.endOf("month");
    const daysInMonth = currentMonth.daysInMonth();
    const startDayOfWeek = startOfMonth.day(); // 0 = Sunday

    const days = [];

    // Previous month filler days
    const prevMonthInstance = currentMonth.subtract(1, "month");
    const prevMonthDays = prevMonthInstance.daysInMonth();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: prevMonthInstance.date(prevMonthDays - i),
        isCurrentMonth: false
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: currentMonth.date(i),
        isCurrentMonth: true
      });
    }

    // Next month filler days (to fill 35 or 42 grid cells)
    const remaining = (7 - (days.length % 7)) % 7;
    const nextMonthInstance = currentMonth.add(1, "month");
    for (let i = 1; i <= remaining; i++) {
      days.push({
        date: nextMonthInstance.date(i),
        isCurrentMonth: false
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const effectiveTime = customTime || selectedTimeSlot;
  const fullFormattedDate = `${selectedDay.format("dddd, MMMM D, YYYY")} at ${effectiveTime}`;

  const handleInputChange = (e) => {
    setClientData({
      ...clientData,
      [e.target.name]: e.target.value
    });
    if (errorMsg) setErrorMsg("");
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!clientData.name.trim()) {
      setErrorMsg("Please enter your name");
      return;
    }
    if (!clientData.phone.trim() && !clientData.email.trim()) {
      setErrorMsg("Please provide your phone or email");
      return;
    }

    addAppointment({
      clientName: clientData.name,
      clientPhone: clientData.phone,
      clientEmail: clientData.email,
      service: clientData.service,
      notes: clientData.notes,
      dateTime: `${selectedDay.format("YYYY-MM-DD")} ${effectiveTime}`,
      formattedDisplay: fullFormattedDate
    });

    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const nameStr = clientData.name ? `\n👤 Name: ${clientData.name}` : "";
    const phoneStr = clientData.phone ? `\n📞 Phone: ${clientData.phone}` : "";
    const serviceStr = clientData.service ? `\n💼 Service: ${clientData.service}` : "";
    const notesStr = clientData.notes ? `\n📝 Notes: ${clientData.notes}` : "";

    const message = `Hello Gamal! I would like to schedule a call/meeting:\n📅 ${fullFormattedDate}${nameStr}${phoneStr}${serviceStr}${notesStr}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/201285645073?text=${encoded}`, "_blank");
  };

  const createGoogleCalendarLink = () => {
    const formattedDateOnly = selectedDay.format("YYYYMMDD");
    const title = encodeURIComponent("Consultation with Gamal Ahmed");
    const details = encodeURIComponent(
      `Project discussion regarding ${clientData.service || "Web Project"}`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${formattedDateOnly}/${formattedDateOnly}`;
  };

  const today = dayjs();

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-4 rounded-full shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:shadow-[0_0_35px_rgba(20,184,166,0.7)] transition-all duration-300 transform hover:scale-110 active:scale-95 group border border-teal-300/30"
          aria-label="Open date and time picker"
          title="Schedule a Call"
        >
          <div className="relative">
            <FiCalendar className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-emerald-400 rounded-full" />
          </div>
        </button>
      )}

      {/* Modal Dialog */}
      <Dialog
        open={Boolean(isOpen)}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#090d16",
            backgroundImage:
              "radial-gradient(at 0% 0%, rgba(20, 184, 166, 0.12) 0, transparent 60%)",
            color: "#ffffff",
            borderRadius: "24px",
            border: "1px solid rgba(45, 212, 191, 0.25)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9)",
            overflow: "hidden",
            margin: { xs: "8px", sm: "16px" },
            maxHeight: "94vh"
          }
        }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800/80 bg-gray-950/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <FiCalendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2">
                {t.title || "Schedule a Consultation"}
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  {isRTL ? "مكالمة مجانية 30 دقيقة" : "Free 30-Min Call"}
                </span>
              </h3>
              <p className="text-xs text-gray-400">
                {t.subtitle || "Choose a suitable date and time to discuss your project"}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-gray-800/60 transition-colors"
            aria-label="Close"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-0 overflow-y-auto max-h-[calc(94vh-75px)]">
          {isSubmitted ? (
            /* Success Confirmation Screen */
            <div className="py-12 px-6 text-center space-y-6 max-w-lg mx-auto">
              <div className="inline-flex p-4 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/40 animate-bounce">
                <FiCheckCircle className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">Meeting Requested!</h4>
                <p className="text-gray-300 text-sm">
                  Thank you, <span className="text-teal-400 font-semibold">{clientData.name}</span>! Your consultation has been scheduled for:
                </p>
                <div className="inline-block mt-3 px-5 py-2.5 bg-gray-900 border border-teal-500/30 rounded-xl text-teal-300 font-mono text-sm shadow-inner">
                  📅 {fullFormattedDate}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={createGoogleCalendarLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <FiCalendar /> Add to Google Calendar
                </a>
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <SiWhatsapp /> Confirm via WhatsApp
                </button>
                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium rounded-xl transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Main 2-Column Split Layout */
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              
              {/* LEFT COLUMN: Modern Interactive Calendar & Time Slots */}
              <div
                className={`lg:col-span-7 p-5 sm:p-7 border-b lg:border-b-0 lg:border-r border-gray-800/80 flex flex-col justify-between ${
                  mobileStep === 2 ? "hidden lg:flex" : "flex"
                }`}
              >
                <div>
                  {/* Month & Year Navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <span>{currentMonth.format("MMMM YYYY")}</span>
                      {currentMonth.isSame(today, "month") && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300">
                          Current
                        </span>
                      )}
                    </h4>

                    <div className="flex items-center gap-1 bg-gray-900 border border-gray-800 rounded-xl p-1">
                      <button
                        type="button"
                        onClick={prevMonth}
                        disabled={currentMonth.isBefore(today, "month")}
                        className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Previous Month"
                      >
                        <FiChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={nextMonth}
                        className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
                        title="Next Month"
                      >
                        <FiChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Day of Week Headers */}
                  <div className="grid grid-cols-7 text-center text-xs font-mono text-gray-400 mb-2 font-medium">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, idx) => (
                      <div
                        key={idx}
                        className={idx === 5 || idx === 6 ? "text-teal-400/80" : ""}
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days Grid */}
                  <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                    {calendarDays.map((item, idx) => {
                      const isPast = item.date.isBefore(today, "day");
                      const isSelected = selectedDay.isSame(item.date, "day");
                      const isTodayDate = today.isSame(item.date, "day");

                      return (
                        <button
                          key={idx}
                          type="button"
                          disabled={isPast || !item.isCurrentMonth}
                          onClick={() => {
                            setSelectedDay(item.date);
                          }}
                          className={`h-9 sm:h-10 rounded-xl text-xs sm:text-sm font-medium flex flex-col items-center justify-center transition-all relative ${
                            !item.isCurrentMonth
                              ? "text-gray-700 cursor-default opacity-20 pointer-events-none"
                              : isPast
                              ? "text-gray-600 cursor-not-allowed opacity-40"
                              : isSelected
                              ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(20,184,166,0.6)] scale-105 z-10"
                              : "text-gray-200 hover:bg-teal-500/15 hover:text-teal-300"
                          } ${
                            isTodayDate && !isSelected
                              ? "border border-teal-500/50 text-teal-300 font-bold"
                              : ""
                          }`}
                        >
                          <span>{item.date.date()}</span>
                          {isTodayDate && !isSelected && (
                            <span className="w-1 h-1 rounded-full bg-teal-400 absolute bottom-1"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Time Slots Section */}
                  <div className="mt-5 pt-4 border-t border-gray-800/80">
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                        <FiClock className="text-teal-400" /> Select Time Slot (Cairo • GMT+2)
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsCustomTimeOpen(!isCustomTimeOpen)}
                        className="text-[11px] text-teal-400 hover:underline"
                      >
                        {isCustomTimeOpen ? "View Presets" : "Custom Time"}
                      </button>
                    </div>

                    {isCustomTimeOpen ? (
                      <div className="flex items-center gap-3">
                        <input
                          type="time"
                          value={customTime}
                          onChange={(e) => {
                            setCustomTime(e.target.value);
                            setSelectedTimeSlot(e.target.value);
                          }}
                          className="px-3.5 py-2 bg-gray-900 border border-teal-500/40 rounded-xl text-white text-sm outline-none font-mono"
                        />
                        <span className="text-xs text-gray-400">
                          Selected: <strong className="text-teal-300">{effectiveTime}</strong>
                        </span>
                      </div>
                    ) : (
                      <div className="grid grid-cols-4 gap-2">
                        {PRESET_TIME_SLOTS.map((slot) => {
                          const isActive = effectiveTime === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => {
                                setSelectedTimeSlot(slot);
                                setCustomTime("");
                              }}
                              className={`py-2 px-1 text-center rounded-xl text-xs font-mono transition-all ${
                                isActive
                                  ? "bg-teal-500 text-black font-bold shadow-md shadow-teal-500/30 scale-102"
                                  : "bg-gray-900/90 text-gray-300 border border-gray-800 hover:border-teal-500/40 hover:text-white"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Next Step Button */}
                <div className="mt-5 pt-4 lg:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileStep(2)}
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20"
                  >
                    <span>Next: Enter Details</span>
                    <FiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: Summary Card & Client Form */}
              <div
                className={`lg:col-span-5 p-5 sm:p-7 bg-gray-950/40 flex flex-col justify-between ${
                  mobileStep === 1 ? "hidden lg:flex" : "flex"
                }`}
              >
                <div>
                  {/* Mobile Back Button */}
                  <div className="lg:hidden mb-4">
                    <button
                      type="button"
                      onClick={() => setMobileStep(1)}
                      className="text-xs text-teal-400 flex items-center gap-1.5 hover:underline"
                    >
                      <FiArrowLeft /> Change Date & Time
                    </button>
                  </div>

                  {/* Selected Summary Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-500/10 via-gray-900/80 to-gray-900 border border-teal-500/30 mb-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-teal-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <FiVideo /> Google Meet / Call
                      </span>
                      <span>30 Mins</span>
                    </div>
                    <div className="text-white font-bold text-sm sm:text-base">
                      {selectedDay.format("dddd, MMMM D, YYYY")}
                    </div>
                    <div className="text-xs font-mono text-teal-300 flex items-center gap-1.5">
                      <FiClock className="w-3.5 h-3.5" />
                      <span>{effectiveTime} (Cairo Time • GMT+2)</span>
                    </div>
                  </div>

                  {/* Booking Details Form */}
                  <form onSubmit={handleConfirmBooking} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1 flex items-center gap-1.5">
                        <FiUser className="text-teal-400" /> {t.nameLabel || "Full Name"} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={clientData.name}
                        onChange={handleInputChange}
                        placeholder={isRTL ? "مثال: أحمد محمد" : "e.g. Alex Morgan"}
                        className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-800 rounded-xl text-white text-xs sm:text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1 flex items-center gap-1.5">
                        <FiPhone className="text-teal-400" /> {t.phoneLabel || "Phone or WhatsApp"} *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={clientData.phone}
                        onChange={handleInputChange}
                        placeholder="+20 123 456 7890"
                        dir="ltr"
                        className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-800 rounded-xl text-white text-xs sm:text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1 flex items-center gap-1.5">
                        <FiMail className="text-teal-400" /> {t.emailLabel || "Email (Optional)"}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={clientData.email}
                        onChange={handleInputChange}
                        placeholder="alex@company.com"
                        dir="ltr"
                        className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-800 rounded-xl text-white text-xs sm:text-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">
                        {t.serviceLabel || "Topic / Service"}
                      </label>
                      <select
                        name="service"
                        value={clientData.service}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-gray-900/90 border border-gray-800 rounded-xl text-white text-xs sm:text-sm focus:border-teal-500 outline-none transition-all"
                      >
                        <option value="Web Development (React / Next.js)">
                          {isRTL ? "تطوير ويب (React / Next.js)" : "Web Development (React / Next.js)"}
                        </option>
                        <option value="UI/UX Design & Prototyping">
                          {isRTL ? "تصميم وتطوير UI/UX" : "UI/UX Design & Prototyping"}
                        </option>
                        <option value="Full Stack & Backend API">
                          {isRTL ? "تطوير متكامل وواجهات برمجية API" : "Full Stack & Backend API"}
                        </option>
                        <option value="General Consultation">
                          {isRTL ? "استشارة تقنية عامة" : "General Consultation"}
                        </option>
                      </select>
                    </div>

                    {errorMsg && (
                      <p className="text-xs text-rose-400 font-medium">{errorMsg}</p>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-3 space-y-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 px-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <FiCalendar className="w-4 h-4" /> {t.confirmBtn || "Confirm Appointment"}
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="w-full py-2.5 px-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <SiWhatsapp className="w-4 h-4" /> {isRTL ? "الحجز المباشر عبر واتساب" : "Book Directly via WhatsApp"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
}
