import { CONTACT_INFO } from "@/constants";
import { track } from "@vercel/analytics";
import { Mail, MapPin, Phone, Terminal } from "lucide-react";
import DecryptText from "./DecryptText";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-cyber-black pt-24 pb-12 relative border-t border-cyber-cyan/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 glitch-text uppercase">
              <DecryptText text="INITIATE_UPLINK" />
            </h2>
            <p className="text-slate-400 font-mono mb-8 max-w-md">
              Target locked: New opportunities. Transmission channels open. Send
              encrypted packet or voice comms.
            </p>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              onClick={() => track("Transmit Email Button Clicked")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-cyber-pink/10 border border-cyber-pink text-cyber-pink font-bold tracking-widest hover:bg-cyber-pink hover:text-black transition-all cyber-clip-button group"
            >
              <Terminal size={20} />
              TRANSMIT_EMAIL
            </a>
          </div>

          <div className="space-y-6 font-mono text-sm">
            <div className="flex items-center gap-4 p-4 border border-cyber-dim bg-cyber-gray/20 hover:border-cyber-cyan transition-colors">
              <Mail className="text-cyber-cyan" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase">
                  Comm_Channel_01
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  onClick={() =>
                    track("Contact Email Clicked", { source: "Footer" })
                  }
                  className="text-white hover:text-cyber-cyan transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-cyber-dim bg-cyber-gray/20 hover:border-cyber-cyan transition-colors">
              <Phone className="text-cyber-cyan" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase">
                  Comm_Channel_02
                </span>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  onClick={() => track("Contact Phone Clicked")}
                  className="text-white hover:text-cyber-cyan transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-cyber-dim bg-cyber-gray/20 hover:border-cyber-cyan transition-colors">
              <MapPin className="text-cyber-cyan" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase">
                  Physical_Location
                </span>
                <span className="text-white">
                  <DecryptText text={CONTACT_INFO.location} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cyber-dim flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-600">
          <p>
            SYSTEM_VERSION: 2.0.25 | © {new Date().getFullYear()} EzzElddin
            Abdallah
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            NO_THREATS_DETECTED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
