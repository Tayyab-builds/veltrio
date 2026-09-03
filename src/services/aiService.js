import { kpis, pipelineStages, upcomingTasks, topCustomers } from '../data/dashboardData';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Intent detection
function detectIntent(message) {
  const lower = message.toLowerCase().trim();

  // Greetings
  if (lower === 'hi' || lower === 'hello' || lower === 'hey' || lower.startsWith('hi ') || lower.startsWith('hello ') || lower.startsWith('hey ')) {
    return 'greeting';
  }

  // About Veltrio / what is
  if (lower.includes('what is veltrio') || lower.includes('about veltrio') || lower.includes('tell me about veltrio')) {
    return 'about_veltrio';
  }

  // Help / capabilities
  if (lower.includes('help') || lower.includes('what can you do') || lower.includes('what can i ask')) {
    return 'help';
  }

  // Login/signup questions
  if (lower.includes('log in') || lower.includes('login') || lower.includes('sign in')) {
    return 'login_help';
  }
  if (lower.includes('sign up') || lower.includes('signup') || lower.includes('create account') || lower.includes('register')) {
    return 'signup_help';
  }
  if (lower.includes('forgot password') || lower.includes('reset password')) {
    return 'forgot_password_help';
  }

  // Existing sales intents
  if (lower.includes('summar') && (lower.includes('sales') || lower.includes('activ'))) return 'sales_summary';
  if (lower.includes('deal') && (lower.includes('attention') || lower.includes('need'))) return 'deals_attention';
  if (lower.includes('pipeline') && lower.includes('insight')) return 'pipeline_insights';
  if (lower.includes('follow') && (lower.includes('up') || lower.includes('task'))) return 'follow_ups';
  if (lower.includes('top') && lower.includes('customer')) return 'top_customers';
  if (lower.includes('lead') && (lower.includes('perform') || lower.includes('how'))) return 'leads_performance';
  if (lower.includes('lead')) return 'leads_overview';

  // Fallback
  return 'fallback';
}

// Generate mock response based on intent
function getResponseForIntent(intent) {
  switch (intent) {
    case 'greeting':
      return "Hello! I'm Veltrio AI, your CRM assistant. I can help you with sales insights, pipeline updates, tasks, and account guidance. Ask me things like:\n\n• \"Summarize my sales activity\"\n• \"Show me my pipeline insights\"\n• \"How do I log in?\"\n\nWhat would you like to know?";

    case 'about_veltrio':
      return "Veltrio is a premium B2B CRM platform that helps teams manage leads, clients, sales pipelines, tasks, and business performance — all in one modern workspace. You can capture leads, track deals, collaborate with your team, and turn data into better decisions.";

    case 'help':
      return "I can assist you with:\n\n• Sales summaries and metrics\n• Pipeline and deal insights\n• Follow-up and task reminders\n• Top customer information\n• Login and signup questions\n\nJust ask, for example: \"Summarize my sales activity\" or \"Which deals need attention?\"";

    case 'login_help':
      return "To log in to Veltrio:\n\n1. Go to the Login page.\n2. Enter your email and password.\n3. Click \"Sign in\".\n\nIf you've forgotten your password, click \"Forgot password?\" on the login page, and we'll send you a reset link.";

    case 'signup_help':
      return "To create a Veltrio account:\n\n1. Go to the Signup page.\n2. Enter your full name and work email.\n3. Create a strong password.\n4. Accept the terms.\n5. Click \"Create account\".\n\nYou can also continue with Google for faster setup.";

    case 'forgot_password_help':
      return "If you forgot your password:\n\n1. Go to the Login page.\n2. Click \"Forgot password?\".\n3. Enter the email associated with your account.\n4. We'll send you instructions to reset your password.\n\nIf you don't see the email, check your spam folder.";

    case 'sales_summary': {
      const revenue = kpis.find(k => k.title === 'Revenue');
      const leads = kpis.find(k => k.title === 'New Leads');
      const deals = kpis.find(k => k.title === 'Active Deals');
      const conversion = kpis.find(k => k.title === 'Conversion Rate');
      return `Here's your current sales snapshot:\n\n• Revenue: ${revenue.value}\n• Active deals: ${deals.value}\n• New leads: ${leads.value}\n• Conversion rate: ${conversion.value}\n\nRevenue is trending upward, with an increase of ${revenue.change} compared with the previous period.`;
    }
    case 'deals_attention': {
      const negotiation = pipelineStages.find(s => s.name === 'Negotiation');
      const proposal = pipelineStages.find(s => s.name === 'Proposal');
      const newLeads = pipelineStages.find(s => s.name === 'New Lead');
      return `Based on the current pipeline, these areas may need attention:\n\n1. Negotiation — ${negotiation.count} deals worth ${negotiation.totalValue}\n2. Proposal — ${proposal.count} deals worth ${proposal.totalValue}\n3. New leads — ${newLeads.count} opportunities worth ${newLeads.totalValue}\n\nThe negotiation stage has the highest immediate opportunity for follow-up.`;
    }
    case 'pipeline_insights': {
      const totalDeals = pipelineStages.reduce((sum, s) => sum + s.count, 0);
      const proposal = pipelineStages.find(s => s.name === 'Proposal');
      const qualified = pipelineStages.find(s => s.name === 'Qualified');
      return `Your pipeline currently contains ${totalDeals} active opportunities.\n\nThe Proposal stage represents the largest opportunity value at ${proposal.totalValue}, followed by Qualified at ${qualified.totalValue}.\n\nA focused follow-up on proposal-stage opportunities could help move more deals toward negotiation.`;
    }
    case 'follow_ups': {
      const tasks = upcomingTasks.filter(t => !t.done);
      if (tasks.length === 0) return 'You have no pending tasks.';
      const formatted = tasks.map(t => `• ${t.title} — ${t.date}`).join('\n');
      return `Your upcoming follow-ups include:\n\n${formatted}\n\nAcme Corporation should be your next priority.`;
    }
    case 'top_customers': {
      const top = topCustomers.map(c => `${c.name} — ${c.revenue}`).join('\n');
      return `Your highest-value customers currently include:\n\n${top}\n\n${topCustomers[0].name} currently represents your strongest customer value.`;
    }
    case 'leads_performance': {
      const leads = kpis.find(k => k.title === 'New Leads');
      return `Your account currently has ${leads.value} new leads, a ${leads.change} increase. Conversion is at ${kpis.find(k => k.title === 'Conversion Rate').value}. Consider focusing on qualified leads to improve win rates.`;
    }
    case 'leads_overview': {
      const leads = kpis.find(k => k.title === 'New Leads');
      return `You have ${leads.value} new leads this period, showing a ${leads.change} change. Your conversion rate is ${kpis.find(k => k.title === 'Conversion Rate').value}. Keep nurturing high-intent leads.`;
    }
    default:
      return "I can help you with your sales data, pipeline, tasks, and account guidance. Try asking:\n\n• \"Summarize my sales activity\"\n• \"Which deals need attention?\"\n• \"How do I log in?\"\n• \"What can you do?\"";
  }
}

export async function getAIResponse(message) {
  await delay(1000); // simulate network delay
  const intent = detectIntent(message);
  return getResponseForIntent(intent);
}
