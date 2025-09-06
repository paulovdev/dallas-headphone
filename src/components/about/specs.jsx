import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { textSlideAnim } from "../../anim/anim";

const specs = [
  { title: "Height", value: "18.1 cm" },
  { title: "Length", value: "17.8 cm" },
  { title: "Width", value: "7.8 cm" },
  { title: "Weight", value: "260g" },
  { title: "Form Factor", value: "Over-ear (covers the ear)" },
  { title: "Ports", value: "Bluetooth, Wireless" },
  { title: "Bluetooth Compatibility", value: "Bluetooth 5.3" },
  { title: "Power Source", value: "Battery" },
  { title: "Batteries", value: "Rechargeable lithium-ion" },
  { title: "Connectivity", value: "Bluetooth® Class 1" },
  { title: "Audio", value: "USB-C" },
  { title: "Analog Input", value: "3.5 mm for wired audio sources" },
  {
    title: "Battery Life (single charge)",
    value: "Up to 40 hours of playback",
  },
  { title: "Fast Fuel", value: "10 minutes = up to 4 hours of playback" },
  { title: "On-Ear Controls", value: "“b” button for music and calls" },
  { title: "Volume Control", value: "Integrated" },
  {
    title: "Multi-Function Button",
    value: "Switch between audio modes, Adaptive EQ, power on/off, and pairing",
  },
  {
    title: "Packaging",
    value: "100% made from sustainably sourced fiber",
  },
  ////
  { title: "Driver", value: "Dynamic 40 mm with neodymium magnet" },
  { title: "Frequency Response", value: "20 Hz – 20 kHz" },
  { title: "Impedance", value: "32 Ω" },
  { title: "Sensitivity", value: "98 dB ± 3 dB" },
  {
    title: "Active Noise Cancellation (ANC)",
    value: "Yes, adjustable with 3 levels",
  },
  { title: "Transparency Mode", value: "Yes, for hearing external sounds" },
  { title: "Supported Codecs", value: "SBC, AAC, aptX, aptX Adaptive" },
  { title: "Microphone", value: "Dual mic with noise cancellation" },
  {
    title: "Simultaneous Connection",
    value: "Multi-device pairing (2 devices at once)",
  },
  { title: "Charging Time", value: "1.5 hours for a full charge" },
  { title: "Standby Time", value: "Up to 60 days" },
  {
    title: "Ear Cushion Material",
    value: "Memory foam with premium synthetic leather",
  },
  { title: "Headband", value: "Adjustable, reinforced with steel" },
  { title: "Foldable", value: "Yes, for easy portability" },
  { title: "Water Resistance", value: "IPX4 – splash and sweat resistant" },
  {
    title: "Compatible App",
    value: "Yes, for EQ adjustments and firmware updates",
  },
  { title: "Equalizer", value: "Customizable via app" },
  { title: "Battery Indicator", value: "LED + voice prompts" },
  { title: "USB-C Cable Length", value: "1.2 m, detachable" },
  { title: "Auxiliary Cable", value: "Included, 1.2 m" },
  { title: "Available Colors", value: "Black, Gray, Blue" },
  {
    title: "Eco-Friendly Design",
    value: "Recyclable materials and sustainable packaging",
  },
  {
    title: "Voice Assistant Compatibility",
    value: "Siri, Google Assistant, Alexa",
  },
  { title: "Gaming Mode", value: "Low latency (<40ms)" },
  { title: "Echo Cancellation", value: "Yes, for clear calls" },
  { title: "Programmable Buttons", value: "Yes, customizable via app" },
  {
    title: "Auto-Pause Function",
    value: "Automatically pauses when removing headphones",
  },
  { title: "Find My Device", value: "Trackable via app in case of loss" },
  { title: "Warranty", value: "2 years" },
  { title: "Certifications", value: "RoHS, CE, FCC" },
  { title: "Operating Temperature", value: "-10°C to 45°C" },
  { title: "Recommended Storage", value: "-20°C to 60°C" },
  { title: "PC, Mac, iOS & Android Compatible", value: "Yes" },
  { title: "OTA Firmware Support", value: "Yes, automatic updates" },
  { title: "Vibration Alerts", value: "Optional via app" },
  { title: "Offline Music", value: "Yes, via optional internal storage" },
  {
    title: "Ear Cooling Technology",
    value: "Yes, for long listening sessions",
  },
  { title: "LED Light Customization", value: "Yes, via app" },
];

const Specs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      className="pt-40 size-full flex items-start max-lg:flex-col max-lg:px-5 max-lg:pt-20"
      id="specs"
      ref={ref}
    >
      <div className="w-full">
        <div className="mb-10 w-full h-fit overflow-hidden">
          <motion.h1
            className="text-p font-neue-regular text-[4rem] leading-[1.08] tracking-[-0.03em] max-lg:text-[3rem]"
            variants={textSlideAnim}
            initial="initial"
            animate={inView ? "animate2" : ""}
          >
            Specs
          </motion.h1>
        </div>

        <div className=" pr-10 max-lg:p-0">
          {specs.map((spec, i) => (
            <div key={i} className="border-b border-brd overflow-hidden">
              <motion.div
                className="w-full h-fit py-4 flex justify-between gap-6"
                variants={textSlideAnim}
                initial="initial"
                animate={inView ? "animate" : ""}
                custom={i}
              >
                <p className="text-p/75 font-neue-regular text-[1rem] leading-[1.2] ">
                  {spec.title}
                </p>

                <p className="max-w-[400px] text-p font-neue-regular text-[1rem] leading-[1.2] text-end">
                  {spec.value}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;
