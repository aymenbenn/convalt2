import React, { useState } from 'react';
import { CheckIcon, Loader2Icon } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { officeRegions } from '../data/offices';

const businessUnits = [
'Construction',
'Manufacturing',
'Power Generation',
'Project Solis in Gallup, NM'];


const teamInterests = [
'Agriculture',
'Engineering',
'Human Resources',
'Logistics',
'Maintenance',
'Media',
'Project Development',
'Sales',
'Transmission'];


const countries = [
'Africa',
'Australia',
'Europe',
'Japan',
'India',
'Latin America',
'South East Asia',
'UK',
'USA'];


const fieldClass =
'w-full border-b border-line bg-transparent py-3 text-[0.95rem] text-ivory placeholder:text-muted/70 transition-colors duration-150 ease-out focus:border-accent focus:outline-none';

const labelClass = 'block text-[0.62rem] uppercase tracking-[0.22em] text-muted';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    // Front-end only: simulates the hand-off to the enquiry endpoint.
    window.setTimeout(() => setStatus('sent'), 900);
  };

  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Connect with Convalt"
        intro="For project inquiries, partnerships, or general information about our renewable energy initiatives." />
      

      <section aria-labelledby="offices-heading" className="border-b border-line">
        <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
          <h2 id="offices-heading" className="font-display text-3xl text-ivory sm:text-4xl">
            Office locations
          </h2>

          <div className="mt-14 space-y-16">
            {officeRegions.map((region) =>
            <div key={region.id}>
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-accent">
                  {region.title}
                </p>
                <ul className="mt-8 grid gap-x-12 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                  {region.offices.map((office) =>
                <li key={office.name} className="border-t border-line pt-5">
                      <p className="text-[1rem] text-ivory">{office.name}</p>
                      <address className="mt-3 space-y-1 text-[0.88rem] not-italic leading-relaxed text-muted">
                        {office.lines.map((line) =>
                    <span key={line} className="block">
                            {line}
                          </span>
                    )}
                      </address>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="form-heading" className="bg-surface">
        <div className="mx-auto grid max-w-content gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[0.7fr_1fr] lg:gap-24">
          <div>
            <h2 id="form-heading" className="font-display text-3xl text-ivory sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-muted">
              Tell us about your project or interest and the relevant team will respond
              directly.
            </p>
          </div>

          {status === 'sent' ?
          <div
            role="status"
            className="flex flex-col items-start gap-4 border border-line p-10">
            
              <CheckIcon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <p className="font-display text-2xl text-ivory">Thank you — message received.</p>
              <p className="max-w-md text-[0.95rem] leading-relaxed text-muted">
                A member of the Convalt Energy team will be in touch shortly.
              </p>
              <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setMessage('');
              }}
              className="mt-2 rounded-full border border-line px-6 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] text-ivory transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
              
                Send another message
              </button>
            </div> :

          <form onSubmit={onSubmit} noValidate={false} className="space-y-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="firstName">
                    First Name *
                  </label>
                  <input id="firstName" name="firstName" required className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="lastName">
                    Last Name *
                  </label>
                  <input id="lastName" name="lastName" required className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="company">
                    Company
                  </label>
                  <input id="company" name="company" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email *
                  </label>
                  <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass} />
                
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone *
                  </label>
                  <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+216"
                  className={fieldClass} />
                
                </div>
                <div>
                  <label className={labelClass} htmlFor="businessUnit">
                    Business Unit Interest
                  </label>
                  <select
                  id="businessUnit"
                  name="businessUnit"
                  defaultValue=""
                  className={fieldClass}>
                  
                    <option value="">Select</option>
                    {businessUnits.map((unit) =>
                  <option key={unit} value={unit}>
                        {unit}
                      </option>
                  )}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="teamInterest">
                    Team Interest
                  </label>
                  <select
                  id="teamInterest"
                  name="teamInterest"
                  defaultValue=""
                  className={fieldClass}>
                  
                    <option value="">Select</option>
                    {teamInterests.map((interest) =>
                  <option key={interest} value={interest}>
                        {interest}
                      </option>
                  )}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="country">
                    Country of Interest
                  </label>
                  <select id="country" name="country" defaultValue="" className={fieldClass}>
                    <option value="">Select</option>
                    {countries.map((country) =>
                  <option key={country} value={country}>
                        {country}
                      </option>
                  )}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  Message *
                </label>
                <textarea
                id="message"
                name="message"
                required
                maxLength={500}
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={`${fieldClass} resize-none`} />
              
                <p className="mt-2 text-right text-[0.68rem] text-muted">
                  {message.length} / 500
                </p>
              </div>

              <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-9 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-ivory transition-colors duration-150 ease-out hover:border-accent hover:text-accent disabled:opacity-60">
              
                {status === 'sending' &&
              <Loader2Icon className="h-3.5 w-3.5 animate-spin" strokeWidth={1.5} />
              }
                {status === 'sending' ? 'Sending' : 'Send'}
              </button>

              {status === 'error' &&
            <p role="alert" className="text-sm text-accent">
                  Something went wrong. Please try again or email info@convalt.com.
                </p>
            }
            </form>
          }
        </div>
      </section>
    </main>);

}