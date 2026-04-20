import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Terminal, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  org: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const PROJECT_TYPES = [
  'Starter Presence (Squarespace / WordPress)',
  'Platform Plus (Shopify / Square / WooCommerce)',
  'Custom Build (React / Next.js)',
  'Consultation & Audit',
  'Retainer / Ongoing Support',
  'Maintenance Package',
  'Site Migration',
  'Payment & Donation Integration',
  'Not sure yet',
];

const BUDGET_RANGES = [
  'Under $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  'Let\'s discuss',
];

const Field = ({
  label,
  hint,
  children,
  index,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 + index * 0.06, duration: 0.4 }}
    className="space-y-2"
  >
    <div className="flex items-baseline justify-between">
      <label className="text-xs font-sans uppercase tracking-widest text-amber-mid/70">
        {label}
      </label>
      {hint && (
        <span className="text-[10px] text-amber-mid/60 font-sans">{hint}</span>
      )}
    </div>
    {children}
  </motion.div>
);

const inputClass =
  'w-full bg-marine/60 border border-amber-mid/30 text-amber-mid font-sans text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-amber-mid/50 focus:ring-1 focus:ring-amber-mid/40 transition-all placeholder:text-amber-mid/40 hover:border-amber-mid/25';

const selectClass =
  'w-full bg-marine/60 border border-amber-mid/30 text-amber-mid font-sans text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-amber-mid/50 focus:ring-1 focus:ring-amber-mid/40 transition-all appearance-none cursor-pointer hover:border-amber-mid/25';

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    org: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('submitting');

    const res = await fetch('https://formspree.io/f/mgorlkyd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) setStatus('success'); else setStatus('error');
    setStatus('success');
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Header */}
      <header className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold mb-6 font-mono text-amber-mid text-glow uppercase tracking-tighter"
        >
          Let's Build.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-amber-mid/60 max-w-2xl text-lg"
        >
          Tell us about your project. We'll respond within one business day
          to schedule a free 30-minute scoping call.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

        {/* Form */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="glass-panel p-12 flex flex-col items-center text-center"
              >
                <CheckCircle className="text-amber-mid w-16 h-16 mb-6 drop-shadow-[0_0_12px_rgba(255,179,71,0.4)]" />
                <h2 className="text-3xl font-bold text-amber-bright mb-4">Message Received</h2>
                <p className="text-amber-mid/60 max-w-sm leading-relaxed">
                  Thanks for reaching out. We'll be in touch within one business day
                  to talk through your project.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-panel p-8 space-y-6"
              >
                {/* Prompt line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                  className="flex items-center space-x-2 mb-2 pb-4 border-b border-amber-mid/10"
                >
                  <Terminal className="text-amber-mid/40 w-4 h-4" />
                  <span className="text-amber-mid/30 font-sans text-xs tracking-widest uppercase">
                    new_inquiry.init
                  </span>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Name" hint="required" index={0}>
                    <input
                      type="text"
                      placeholder="Alex Arasawa"
                      value={form.name}
                      onChange={set('name')}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Organization" hint="optional" index={1}>
                    <input
                      type="text"
                      placeholder="Koyasan Beikoku Betsuin"
                      value={form.org}
                      onChange={set('org')}
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Email" hint="required" index={2}>
                  <input
                    type="email"
                    placeholder="hello@yourorg.com"
                    value={form.email}
                    onChange={set('email')}
                    className={inputClass}
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Project Type" index={3}>
                    <div className="relative">
                      <select
                        value={form.projectType}
                        onChange={set('projectType')}
                        className={selectClass}
                      >
                        <option value="" disabled>Select a service...</option>
                        {PROJECT_TYPES.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <span className="text-amber-mid/30 text-xs">▾</span>
                      </div>
                    </div>
                  </Field>

                  <Field label="Budget Range" index={4}>
                    <div className="relative">
                      <select
                        value={form.budget}
                        onChange={set('budget')}
                        className={selectClass}
                      >
                        <option value="" disabled>Select a range...</option>
                        {BUDGET_RANGES.map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <span className="text-amber-mid/30 text-xs">▾</span>
                      </div>
                    </div>
                  </Field>
                </div>

                <Field label="Tell us about your project" hint="required" index={5}>
                  <textarea
                    rows={5}
                    placeholder="What are you trying to build or fix? Who's it for? Any deadlines or constraints we should know about?"
                    value={form.message}
                    onChange={set('message')}
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-sm text-red-400/80 bg-red-900/10 border border-red-400/20 rounded-sm px-4 py-3"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Something went wrong. Try again or email us directly at hello@deepphosphor.com.</span>
                  </motion.div>
                )}

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={handleSubmit}
                  disabled={!isValid || status === 'submitting'}
                  className={`w-full py-4 font-bold rounded-sm transition-all flex items-center justify-center space-x-2 ${
                    isValid
                      ? 'bg-amber-mid text-marine hover:bg-amber-bright border-glow cursor-pointer'
                      : 'bg-amber-mid/20 text-amber-mid/30 cursor-not-allowed'
                  }`}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="animate-pulse">Transmitting</span>
                      <span className="animate-pulse">...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-2 space-y-6 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass-panel p-6"
          >
            <h3 className="text-sm font-sans uppercase tracking-widest text-amber-mid mb-5">
              What to Expect
            </h3>
            <div className="space-y-5">
              {[
                { step: '01', text: 'Submit this form — takes 2 minutes.' },
                { step: '02', text: 'We\'ll respond within one business day.' },
                { step: '03', text: 'Free 30-min call to scope the project together.' },
                { step: '04', text: 'Written proposal with a fixed price or hourly estimate.' },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start space-x-4">
                  <span className="text-amber-mid/25 font-mono text-xs mt-0.5 shrink-0">{step}</span>
                  <span className="text-amber-mid/60 text-sm leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="glass-panel p-6"
          >
            <h3 className="text-sm font-sans uppercase tracking-widest text-amber-mid mb-5">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm text-amber-mid/60">
              <p>
                <span className="text-amber-mid/30 font-sans text-xs">EMAIL</span>
                <br />
                <a href="mailto:alex@deepphosphor.studio" className="hover:text-amber-mid transition-colors">
                  alex@deepphosphor.studio
                </a>
              </p>
              <p>
                <span className="text-amber-mid/30 font-sans text-xs">LOCATION</span>
                <br />
                Los Angeles, CA — SGV Area
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-amber-mid/5 border border-amber-mid/15 rounded-sm p-5"
          >
            <p className="text-amber-mid/50 text-xs leading-relaxed font-sans">
              <span className="text-amber-mid font-bold">Nonprofit?</span> Mention your org's 501(c)(3) status
              in your message and we'll apply our sliding scale rate to your quote automatically.
            </p>
          </motion.div>
        </aside>

      </div>
    </div>
  );
}
