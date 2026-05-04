import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sent';

export function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const sent = status === 'sent';

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sent');
  };

  return (
    <section className="cta" id="join">
      <div className="shell">
        <span className="eyebrow">Join the pilot</span>
        <h2 className="display h-xl">Be the first store on your block.</h2>
        <p>
          Onboarding 50 new neighbourhoods across the UAE this quarter — from Abu Dhabi to RAK.
          Drop your store email and our team will reach out within 48 hours.
        </p>
        <form className="cta-form" onSubmit={onSubmit}>
          <input
            type="email"
            placeholder={sent ? 'Thanks — we\'ll be in touch.' : 'store@yourshop.ae'}
            value={sent ? '' : email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={sent}
          />
          <button type="submit" className="btn btn-primary" disabled={sent}>
            {sent ? 'Received' : 'Request access'}
          </button>
        </form>
      </div>
    </section>
  );
}
