interface ApprovalItem {
  id: string;
  title: string;
  module: string;
  createdBy: string;
  createdOn: string;
  dueDate: string;
  status: 'Pending' | 'In Progress' | 'Closed';
}

interface IncidentTicket {
  id: string;
  title: string;
  category: string;
  priority: string;
  createdBy: string;
  createdOn: string;
  assignedTo: string;
  status: string;
}

interface DashboardData {
  metrics: {
    totalUsers: { value: number; change: number };
    totalOpenTickets: { value: number; change: number };
    totalClosedTickets: { value: number; change: number };
    totalDueTickets: { value: number; change: number };
  };
  ticketsByAgent: { agent: string; count: number; color: string }[];
  pendingTickets: { team: number };
  pendingApprovals: { me: number };
  changeByCategory: {
    total: number;
    categories: { name: string; value: number; color: string }[];
  };
  changeByStatus: {
    month: string;
    Emergency: number;
    Normal: number;
    Elevated: number;
    TotalClosed: number;
  }[];
  avgIncidentResponse: { hours: string; changePercent: number };
  avgChangeResponse: { minutes: string; changePercent: number };
  awaitingApproval: ApprovalItem[];
  incidentTickets: IncidentTicket[];
  ticketResolution: { month: string; closed: number; open: number }[];
  changeByStatusSummary: { status: string; value: number; color: string }[];
}

const dashboardData: DashboardData = {

    
  metrics: {
    totalUsers: { value: 100826, change: 2.5 },
    totalOpenTickets: { value: 2910, change: -1.2 },
    totalClosedTickets: { value: 109291, change: 5.3 },
    totalDueTickets: { value: 34, change: -10.5 }
  },
  
  ticketsByAgent: [
    { agent: 'Agent1', count: 450, color: '#06b6d4' },
    { agent: 'Agent2', count: 320, color: '#ec4899' },
    { agent: 'Agent3', count: 280, color: '#f97316' },
    { agent: 'Agent4', count: 380, color: '#10b981' },
    { agent: 'Agent5', count: 410, color: '#3b82f6' },
    { agent: 'Agent6', count: 360, color: '#a855f7' },
    { agent: 'Agent7', count: 480, color: '#eab308' },
    { agent: 'Agent8', count: 450, color: '#06b6d4' },
    { agent: 'Agent9', count: 320, color: '#ec4899' },
    { agent: 'Agent10', count: 280, color: '#f97316' },
    { agent: 'Agent11', count: 380, color: '#10b981' },
    { agent: 'Agent12', count: 410, color: '#3b82f6' },
    { agent: 'Agent13', count: 360, color: '#a855f7' },
  ],
  
  pendingTickets: { team: 13 },
  pendingApprovals: { me: 2 },
  
  changeByCategory: {
    total: 239891,
    categories: [
      { name: 'Title', value: 45, color: '#eab308' },
      { name: 'Desc', value: 30, color: '#3b82f6' },
      { name: 'Cat', value: 15, color: '#ec4899' },
      { name: 'Oth', value: 10, color: '#10b981' }
    ]
  },
  
  changeByStatus: [
    { month: 'Jan', Emergency: 80, Normal: 120, Elevated: 100, TotalClosed: 103 },
    { month: 'Feb', Emergency: 95, Normal: 135, Elevated: 110, TotalClosed: 95 },
    { month: 'Mar', Emergency: 110, Normal: 150, Elevated: 125, TotalClosed: 110 },
    { month: 'Apr', Emergency: 105, Normal: 145, Elevated: 120, TotalClosed: 105 },
    { month: 'May', Emergency: 90, Normal: 130, Elevated: 115, TotalClosed: 90 },
    { month: 'Jun', Emergency: 100, Normal: 140, Elevated: 130, TotalClosed: 100 },
    { month: 'Jul', Emergency: 115, Normal: 155, Elevated: 140, TotalClosed: 115 },
    { month: 'Aug', Emergency: 125, Normal: 165, Elevated: 150, TotalClosed: 125 },
    { month: 'Sep', Emergency: 120, Normal: 160, Elevated: 145, TotalClosed: 120 },
    { month: 'Oct', Emergency: 110, Normal: 150, Elevated: 135, TotalClosed: 110 },
    { month: 'Nov', Emergency: 100, Normal: 140, Elevated: 125, TotalClosed: 100 },
    { month: 'Dec', Emergency: 95, Normal: 135, Elevated: 120, TotalClosed: 95 }
  ],
  
  avgIncidentResponse: { hours: '0:04:01', changePercent: 15.3 },
  avgChangeResponse: { minutes: '0:04:01', changePercent: -8.7 },
  
  awaitingApproval: [
    { title: 'Request for Application Upgrade for', module: 'Change Management', id: 'CHG-76211', createdBy: 'Cynthia Nkwo', createdOn: '24/04/2025', dueDate: '24/04/2025', status: 'Pending' },
    { title: 'Two-Factor Authentication Setup to', module: 'Service Request', id: 'SRT-56716', createdBy: 'Cynthia Nkwo', createdOn: '24/04/2025', dueDate: '24/04/2025', status: 'Pending' },
    { title: 'Login Failure - Credentials Not Work', module: 'Incident Management', id: 'INC-28236', createdBy: 'Cynthia Nkwo', createdOn: '24/04/2025', dueDate: '24/04/2025', status: 'Pending' },
    { title: 'Locked Out of System - Need Pass', module: 'Incident Management', id: 'INC-28236', createdBy: 'Cynthia Nkwo', createdOn: '24/04/2025', dueDate: '24/04/2025', status: 'Pending' }
  ],
  
  incidentTickets: [
    { title: 'System Crash - Unable to Access', id: 'INC-78714', category: 'System and Applicat', priority: 'Severity 1', createdBy: 'Cynthia Nkwo', createdOn: '24/04/2025', assignedTo: 'Odunr James', status: 'Pending' },
    { title: 'Onboarding process taking more ti', id: 'INC-81631', category: 'Onboarding', priority: 'Severity 3', createdBy: 'Cynthia Nkwo', createdOn: '24/04/2025', assignedTo: 'Bolawor Ojo', status: 'Pending' },
    { title: 'Login Failure - Credentials Not Work', id: 'INC-85142', category: 'System and Applicat', priority: 'Severity 1', createdBy: 'Cynthia Nkwo', createdOn: '24/04/2025', assignedTo: 'Briade Samson', status: 'Pending' },
    { title: 'Locked Out of System - Need Passw', id: 'INC-85142', category: 'Security & Access Is', priority: 'Severity 1', createdBy: 'Cynthia Nkwo', createdOn: '24/04/2025', assignedTo: 'Briade Samson', status: 'Pending' }
  ],
  
  ticketResolution: [
    { month: 'Jan', closed: 120, open: 85 },
    { month: 'Feb', closed: 135, open: 95 },
    { month: 'Mar', closed: 150, open: 110 },
    { month: 'Apr', closed: 145, open: 105 },
    { month: 'May', closed: 130, open: 90 },
    { month: 'Jun', closed: 140, open: 100 },
    { month: 'Jul', closed: 155, open: 115 },
    { month: 'Aug', closed: 165, open: 125 },
    { month: 'Sep', closed: 160, open: 120 },
    { month: 'Oct', closed: 150, open: 110 },
    { month: 'Nov', closed: 140, open: 100 },
    { month: 'Dec', closed: 135, open: 95 }
  ],
  
  changeByStatusSummary: [
    { status: 'Open', value: 850, color: '#3b82f6' },
    { status: 'Work in Progress', value: 1520, color: '#eab308' },
    { status: 'Closed', value: 1340, color: '#10b981' }
  ]
};

export default dashboardData;