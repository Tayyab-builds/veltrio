import { pipelineStages, topCustomers, upcomingTasks } from '../data/dashboardData';

const responseDelay = 650;

const formatList = (items) => items.map((item) => `• ${item}`).join('\n');

function getMockResponse(prompt) {
  const query = prompt.toLowerCase();
  const openDeals = pipelineStages
    .filter((stage) => !['Won', 'Lost'].includes(stage.name))
    .flatMap((stage) => stage.deals)
    .slice(0, 3);

  if (query.includes('follow') || query.includes('task')) {
    return `Here are the next follow-ups to prioritize:\n${formatList(upcomingTasks.slice(0, 3).map((task) => `${task.title} — ${task.date}`))}`;
  }

  if (query.includes('customer')) {
    return `Your top customers are:\n${formatList(topCustomers.map((customer) => `${customer.name} — ${customer.revenue} in revenue`))}`;
  }

  if (query.includes('deal') || query.includes('attention')) {
    return `These open opportunities deserve attention:\n${formatList(openDeals.map((deal) => `${deal.name} (${deal.client}) — ${deal.value}, ${deal.prob} probability`))}`;
  }

  if (query.includes('pipeline') || query.includes('sales activity')) {
    return `Your pipeline has ${pipelineStages.reduce((total, stage) => total + stage.count, 0)} opportunities across ${pipelineStages.length} stages. The largest open stage is ${pipelineStages.slice(0, -1).reduce((largest, stage) => stage.count > largest.count ? stage : largest).name}. Focus on moving qualified deals into proposals this week.`;
  }

  return 'I can help with your pipeline, open deals, upcoming follow-ups, and top customers. Try asking which deals need attention or what you should follow up on.';
}

/**
 * Mock AI adapter. Replace only this function with a real API call later;
 * UI components can continue using the same Promise<string> contract.
 */
export function getAIResponse(prompt) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(getMockResponse(prompt)), responseDelay);
  });
}
