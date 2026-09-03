export default function PasswordStrength({ password }) {
  const strength = getStrength(password);
  const labels = { 0: '', 1: 'Weak', 2: 'Fair', 3: 'Strong' };
  const colors = { 1: 'bg-red-500', 2: 'bg-yellow-500', 3: 'bg-emerald-500' };
  const bars = [1, 2, 3].map(i => (
    <span key={i} className={`h-1 flex-1 rounded ${i <= strength ? colors[strength] : 'bg-gray-200'}`} />
  ));

  return (
    <div className="mt-1">
      <div className="flex gap-1">{bars}</div>
      {strength > 0 && <p className="text-xs mt-1 text-muted-text">{labels[strength]}</p>}
    </div>
  );
}

function getStrength(pw) {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw) || /[^A-Za-z0-9]/.test(pw)) score++;
  return Math.min(score, 3);
}