import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/Button";
import { Mail, MapPin, CheckCircle2, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const countryCodes = [
  { label: "Afghanistan (+93)", value: "+93" },
  { label: "Albania (+355)", value: "+355" },
  { label: "Algeria (+213)", value: "+213" },
  { label: "American Samoa (+1-684)", value: "+1-684" },
  { label: "Andorra (+376)", value: "+376" },
  { label: "Angola (+244)", value: "+244" },
  { label: "Anguilla (+1-264)", value: "+1-264" },
  { label: "Antarctica (+672)", value: "+672" },
  { label: "Antigua and Barbuda (+1-268)", value: "+1-268" },
  { label: "Argentina (+54)", value: "+54" },
  { label: "Armenia (+374)", value: "+374" },
  { label: "Aruba (+297)", value: "+297" },
  { label: "Australia (+61)", value: "+61" },
  { label: "Austria (+43)", value: "+43" },
  { label: "Azerbaijan (+994)", value: "+994" },
  { label: "Bahamas (+1-242)", value: "+1-242" },
  { label: "Bahrain (+973)", value: "+973" },
  { label: "Bangladesh (+880)", value: "+880" },
  { label: "Barbados (+1-246)", value: "+1-246" },
  { label: "Belarus (+375)", value: "+375" },
  { label: "Belgium (+32)", value: "+32" },
  { label: "Belize (+501)", value: "+501" },
  { label: "Benin (+229)", value: "+229" },
  { label: "Bermuda (+1-441)", value: "+1-441" },
  { label: "Bhutan (+975)", value: "+975" },
  { label: "Bolivia (+591)", value: "+591" },
  { label: "Bosnia and Herzegovina (+387)", value: "+387" },
  { label: "Botswana (+267)", value: "+267" },
  { label: "Brazil (+55)", value: "+55" },
  { label: "British Indian Ocean Territory (+246)", value: "+246" },
  { label: "British Virgin Islands (+1-284)", value: "+1-284" },
  { label: "Brunei (+673)", value: "+673" },
  { label: "Bulgaria (+359)", value: "+359" },
  { label: "Burkina Faso (+226)", value: "+226" },
  { label: "Burundi (+257)", value: "+257" },
  { label: "Cambodia (+855)", value: "+855" },
  { label: "Cameroon (+237)", value: "+237" },
  { label: "Canada (+1)", value: "+1" },
  { label: "Cape Verde (+238)", value: "+238" },
  { label: "Cayman Islands (+1-345)", value: "+1-345" },
  { label: "Central African Republic (+236)", value: "+236" },
  { label: "Chad (+235)", value: "+235" },
  { label: "Chile (+56)", value: "+56" },
  { label: "China (+86)", value: "+86" },
  { label: "Christmas Island (+61)", value: "+61" },
  { label: "Cocos Islands (+61)", value: "+61" },
  { label: "Colombia (+57)", value: "+57" },
  { label: "Comoros (+269)", value: "+269" },
  { label: "Cook Islands (+682)", value: "+682" },
  { label: "Costa Rica (+506)", value: "+506" },
  { label: "Croatia (+385)", value: "+385" },
  { label: "Cuba (+53)", value: "+53" },
  { label: "Curacao (+599)", value: "+599" },
  { label: "Cyprus (+357)", value: "+357" },
  { label: "Czech Republic (+420)", value: "+420" },
  { label: "Democratic Republic of the Congo (+243)", value: "+243" },
  { label: "Denmark (+45)", value: "+45" },
  { label: "Djibouti (+253)", value: "+253" },
  { label: "Dominica (+1-767)", value: "+1-767" },
  { label: "Dominican Republic (+1-809)", value: "+1-809" },
  { label: "East Timor (+670)", value: "+670" },
  { label: "Ecuador (+593)", value: "+593" },
  { label: "Egypt (+20)", value: "+20" },
  { label: "El Salvador (+503)", value: "+503" },
  { label: "Equatorial Guinea (+240)", value: "+240" },
  { label: "Eritrea (+291)", value: "+291" },
  { label: "Estonia (+372)", value: "+372" },
  { label: "Ethiopia (+251)", value: "+251" },
  { label: "Falkland Islands (+500)", value: "+500" },
  { label: "Faroe Islands (+298)", value: "+298" },
  { label: "Fiji (+679)", value: "+679" },
  { label: "Finland (+358)", value: "+358" },
  { label: "France (+33)", value: "+33" },
  { label: "French Polynesia (+689)", value: "+689" },
  { label: "Gabon (+241)", value: "+241" },
  { label: "Gambia (+220)", value: "+220" },
  { label: "Georgia (+995)", value: "+995" },
  { label: "Germany (+49)", value: "+49" },
  { label: "Ghana (+233)", value: "+233" },
  { label: "Gibraltar (+350)", value: "+350" },
  { label: "Greece (+30)", value: "+30" },
  { label: "Greenland (+299)", value: "+299" },
  { label: "Grenada (+1-473)", value: "+1-473" },
  { label: "Guam (+1-671)", value: "+1-671" },
  { label: "Guatemala (+502)", value: "+502" },
  { label: "Guernsey (+44-1481)", value: "+44-1481" },
  { label: "Guinea (+224)", value: "+224" },
  { label: "Guinea-Bissau (+245)", value: "+245" },
  { label: "Guyana (+592)", value: "+592" },
  { label: "Haiti (+509)", value: "+509" },
  { label: "Honduras (+504)", value: "+504" },
  { label: "Hong Kong (+852)", value: "+852" },
  { label: "Hungary (+36)", value: "+36" },
  { label: "Iceland (+354)", value: "+354" },
  { label: "India (+91)", value: "+91" },
  { label: "Indonesia (+62)", value: "+62" },
  { label: "Iran (+98)", value: "+98" },
  { label: "Iraq (+964)", value: "+964" },
  { label: "Ireland (+353)", value: "+353" },
  { label: "Isle of Man (+44-1624)", value: "+44-1624" },
  { label: "Israel (+972)", value: "+972" },
  { label: "Italy (+39)", value: "+39" },
  { label: "Ivory Coast (+225)", value: "+225" },
  { label: "Jamaica (+1-876)", value: "+1-876" },
  { label: "Japan (+81)", value: "+81" },
  { label: "Jersey (+44-1534)", value: "+44-1534" },
  { label: "Jordan (+962)", value: "+962" },
  { label: "Kazakhstan (+7)", value: "+7" },
  { label: "Kenya (+254)", value: "+254" },
  { label: "Kiribati (+686)", value: "+686" },
  { label: "Kosovo (+383)", value: "+383" },
  { label: "Kuwait (+965)", value: "+965" },
  { label: "Kyrgyzstan (+996)", value: "+996" },
  { label: "Laos (+856)", value: "+856" },
  { label: "Latvia (+371)", value: "+371" },
  { label: "Lebanon (+961)", value: "+961" },
  { label: "Lesotho (+266)", value: "+266" },
  { label: "Liberia (+231)", value: "+231" },
  { label: "Libya (+218)", value: "+218" },
  { label: "Liechtenstein (+423)", value: "+423" },
  { label: "Lithuania (+370)", value: "+370" },
  { label: "Luxembourg (+352)", value: "+352" },
  { label: "Macau (+853)", value: "+853" },
  { label: "Macedonia (+389)", value: "+389" },
  { label: "Madagascar (+261)", value: "+261" },
  { label: "Malawi (+265)", value: "+265" },
  { label: "Malaysia (+60)", value: "+60" },
  { label: "Maldives (+960)", value: "+960" },
  { label: "Mali (+223)", value: "+223" },
  { label: "Malta (+356)", value: "+356" },
  { label: "Marshall Islands (+692)", value: "+692" },
  { label: "Mauritania (+222)", value: "+222" },
  { label: "Mauritius (+230)", value: "+230" },
  { label: "Mayotte (+262)", value: "+262" },
  { label: "Mexico (+52)", value: "+52" },
  { label: "Micronesia (+691)", value: "+691" },
  { label: "Moldova (+373)", value: "+373" },
  { label: "Monaco (+377)", value: "+377" },
  { label: "Mongolia (+976)", value: "+976" },
  { label: "Montenegro (+382)", value: "+382" },
  { label: "Montserrat (+1-664)", value: "+1-664" },
  { label: "Morocco (+212)", value: "+212" },
  { label: "Mozambique (+258)", value: "+258" },
  { label: "Myanmar (+95)", value: "+95" },
  { label: "Namibia (+264)", value: "+264" },
  { label: "Nauru (+674)", value: "+674" },
  { label: "Nepal (+977)", value: "+977" },
  { label: "Netherlands (+31)", value: "+31" },
  { label: "Netherlands Antilles (+599)", value: "+599" },
  { label: "New Caledonia (+687)", value: "+687" },
  { label: "New Zealand (+64)", value: "+64" },
  { label: "Nicaragua (+505)", value: "+505" },
  { label: "Niger (+227)", value: "+227" },
  { label: "Nigeria (+234)", value: "+234" },
  { label: "Niue (+683)", value: "+683" },
  { label: "North Korea (+850)", value: "+850" },
  { label: "Northern Mariana Islands (+1-670)", value: "+1-670" },
  { label: "Norway (+47)", value: "+47" },
  { label: "Oman (+968)", value: "+968" },
  { label: "Pakistan (+92)", value: "+92" },
  { label: "Palau (+680)", value: "+680" },
  { label: "Palestine (+970)", value: "+970" },
  { label: "Panama (+507)", value: "+507" },
  { label: "Papua New Guinea (+675)", value: "+675" },
  { label: "Paraguay (+595)", value: "+595" },
  { label: "Peru (+51)", value: "+51" },
  { label: "Philippines (+63)", value: "+63" },
  { label: "Pitcairn (+64)", value: "+64" },
  { label: "Poland (+48)", value: "+48" },
  { label: "Portugal (+351)", value: "+351" },
  { label: "Puerto Rico (+1-787)", value: "+1-787" },
  { label: "Qatar (+974)", value: "+974" },
  { label: "Republic of the Congo (+242)", value: "+242" },
  { label: "Reunion (+262)", value: "+262" },
  { label: "Romania (+40)", value: "+40" },
  { label: "Russia (+7)", value: "+7" },
  { label: "Rwanda (+250)", value: "+250" },
  { label: "Saint Barthelemy (+590)", value: "+590" },
  { label: "Saint Helena (+290)", value: "+290" },
  { label: "Saint Kitts and Nevis (+1-869)", value: "+1-869" },
  { label: "Saint Lucia (+1-758)", value: "+1-758" },
  { label: "Saint Martin (+590)", value: "+590" },
  { label: "Saint Pierre and Miquelon (+508)", value: "+508" },
  { label: "Saint Vincent and the Grenadines (+1-784)", value: "+1-784" },
  { label: "Samoa (+685)", value: "+685" },
  { label: "San Marino (+378)", value: "+378" },
  { label: "Sao Tome and Principe (+239)", value: "+239" },
  { label: "Saudi Arabia (+966)", value: "+966" },
  { label: "Senegal (+221)", value: "+221" },
  { label: "Serbia (+381)", value: "+381" },
  { label: "Seychelles (+248)", value: "+248" },
  { label: "Sierra Leone (+232)", value: "+232" },
  { label: "Singapore (+65)", value: "+65" },
  { label: "Sint Maarten (+1-721)", value: "+1-721" },
  { label: "Slovakia (+421)", value: "+421" },
  { label: "Slovenia (+386)", value: "+386" },
  { label: "Solomon Islands (+677)", value: "+677" },
  { label: "Somalia (+252)", value: "+252" },
  { label: "South Africa (+27)", value: "+27" },
  { label: "South Korea (+82)", value: "+82" },
  { label: "South Sudan (+211)", value: "+211" },
  { label: "Spain (+34)", value: "+34" },
  { label: "Sri Lanka (+94)", value: "+94" },
  { label: "Sudan (+249)", value: "+249" },
  { label: "Suriname (+597)", value: "+597" },
  { label: "Svalbard and Jan Mayen (+47)", value: "+47" },
  { label: "Swaziland (+268)", value: "+268" },
  { label: "Sweden (+46)", value: "+46" },
  { label: "Switzerland (+41)", value: "+41" },
  { label: "Syria (+963)", value: "+963" },
  { label: "Taiwan (+886)", value: "+886" },
  { label: "Tajikistan (+992)", value: "+992" },
  { label: "Tanzania (+255)", value: "+255" },
  { label: "Thailand (+66)", value: "+66" },
  { label: "Togo (+228)", value: "+228" },
  { label: "Tokelau (+690)", value: "+690" },
  { label: "Tonga (+676)", value: "+676" },
  { label: "Trinidad and Tobago (+1-868)", value: "+1-868" },
  { label: "Tunisia (+216)", value: "+216" },
  { label: "Turkey (+90)", value: "+90" },
  { label: "Turkmenistan (+993)", value: "+993" },
  { label: "Turks and Caicos Islands (+1-649)", value: "+1-649" },
  { label: "Tuvalu (+688)", value: "+688" },
  { label: "U.S. Virgin Islands (+1-340)", value: "+1-340" },
  { label: "Uganda (+256)", value: "+256" },
  { label: "Ukraine (+380)", value: "+380" },
  { label: "United Arab Emirates (+971)", value: "+971" },
  { label: "United Kingdom (+44)", value: "+44" },
  { label: "United States (+1)", value: "+1" },
  { label: "Uruguay (+598)", value: "+598" },
  { label: "Uzbekistan (+998)", value: "+998" },
  { label: "Vanuatu (+678)", value: "+678" },
  { label: "Vatican (+379)", value: "+379" },
  { label: "Venezuela (+58)", value: "+58" },
  { label: "Vietnam (+84)", value: "+84" },
  { label: "Wallis and Futuna (+681)", value: "+681" },
  { label: "Western Sahara (+212)", value: "+212" },
  { label: "Yemen (+967)", value: "+967" },
  { label: "Zambia (+260)", value: "+260" },
  { label: "Zimbabwe (+263)", value: "+263" },
];

// --- Zod Schema ---
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required (min 2 chars)" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().optional(),
  countryCode: z.string().default("+1"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message is too short (min 10 chars)" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      countryCode: "+1",
    },
  });

  useGSAP(
    () => {
      // Animate Info Column
      gsap.from(".contact-info", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // Animate Form Column
      gsap.from(".contact-form", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: containerRef },
  );

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset({ countryCode: "+1" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="py-24 bg-background relative border-t border-border transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Info */}
          <div className="contact-info">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-none uppercase">
              Let&apos;s Build
              <br />
              Something Real
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              We work with businesses ready to move beyond basic software. Tell
              us about your infrastructure needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold uppercase tracking-widest text-sm mb-1">
                    Email Us
                  </h4>
                  <p className="text-muted-foreground">
                    hello@mikrosell.systems
                  </p>
                  <p className="text-muted-foreground">
                    careers@mikrosell.systems
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold uppercase tracking-widest text-sm mb-1">
                    Headquarters
                  </h4>
                  <p className="text-muted-foreground">
                    101 California St, Suite 2710
                  </p>
                  <p className="text-muted-foreground">
                    San Francisco, CA 94111
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form bg-foreground/5 border border-border p-8 md:p-10 relative">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/30"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/30"></div>

            {isSuccess ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Message Received
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ll analyze your request and get back to you within 24
                  hours.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="mt-8"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Full Name
                    </label>
                    <input
                      {...register("name")}
                      className={`flex h-12 w-full border-b bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors ${errors.name ? "border-destructive" : "border-input"}`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-[10px] text-destructive font-medium uppercase tracking-wider">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Company
                    </label>
                    <input
                      {...register("company")}
                      className="flex h-12 w-full border-b border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      className={`flex h-12 w-full border-b bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors ${errors.email ? "border-destructive" : "border-input"}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-[10px] text-destructive font-medium uppercase tracking-wider">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Phone Number{" "}
                      <span className="text-[10px] font-normal normal-case opacity-50">
                        (Optional)
                      </span>
                    </label>
                    <div className="flex gap-2">
                      {/* Country Selector */}
                      <div className="relative w-[120px]">
                        <select
                          {...register("countryCode")}
                          className="flex h-12 w-full appearance-none border-b border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                        >
                          {countryCodes.map((c, i) => (
                            <option
                              key={i}
                              value={c.value}
                              className="bg-background text-foreground"
                            >
                              {c.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>

                      {/* Phone Input */}
                      <input
                        {...register("phone")}
                        type="tel"
                        className="flex-1 flex h-12 w-full border-b border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                        placeholder="555-0123"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Project Details
                  </label>
                  <textarea
                    {...register("message")}
                    className={`flex min-h-[120px] w-full border bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-none ${errors.message ? "border-destructive" : "border-input"}`}
                    placeholder="Tell us about the infrastructure or automation you need..."
                  />
                  {errors.message && (
                    <p className="text-[10px] text-destructive font-medium uppercase tracking-wider">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-4 uppercase tracking-widest font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit Request"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
