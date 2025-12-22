import React from 'react';
import { Globe, Layers, Activity, Shield, TrendingUp, Briefcase, Brain, Layout, Clock, Rocket, Puzzle } from 'lucide-react';

export const COLORS = {
  primary: '#001c39',
  accent: '#1cafec',
  textMain: '#434243',
  bgLight: '#eef0f2',
  bgPale: '#e9f4fa',
  white: '#ffffff',
  red: '#DA1E28', // IBM Red 60
  redBg: '#FFF1F1',
};

export const ASSETS = {
  logo: 'https://saleslabx.wpenginepowered.com/wp-content/uploads/2021/04/SLX-logo.png',
  favicon: 'https://slxcloud.app/wp-content/uploads/2024/03/SLX-favicon.png',
  spotifyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1280px-Spotify_logo_with_text.svg.png',
};

export const LINKS = {
  website: 'https://saleslabx.com',
};

// Spotify Case Study Hero Data
export const SPOTIFY_HERO_DATA = {
  title: "Spotify's Pardot and Salesforce worked. Technically.",
  subtitle: "Leads came in across 13 countries. Data synced. Reports ran. But nothing connected the way it should—and they knew they were leaving pipeline on the table."
};

// Data for Chaos Section (The Problem)
export const CHAOS_DATA = {
  title: "The system wasn't broken. It was stuck.",
  subtitle: "The system had drifted the way all systems drift. Lead scoring still reflected old assumptions. Automations built for a different moment were still running—or half-running. Sales and marketing had each adapted around the gaps.",
  symptoms: [
    "Lead scoring reflected old assumptions",
    "Automations were half-running",
    "Sales and marketing adapted around gaps",
    "Everything functioned. Nothing compounded."
  ]
};

// Data for "What They'd Already Tried"
export const ATTEMPTS_DATA = [
  {
    title: "Hired internally",
    outcome: "Thought it was a headcount problem. Turns out it wasn't a one-person job—strategy, ops, design, and data were all intertwined. No single hire could cover it."
  },
  {
    title: "Consultancy project",
    outcome: "Big deliverable. Helped for a quarter. Then the system drifted."
  },
  {
    title: "Contractors",
    outcome: "Disconnected work. Paid for hours, not outcomes. Got tasks done, but nothing tied together."
  }
];

// Data for System/Layers Section (The Solution)
export const SYSTEM_LAYERS = [
  {
    id: 'layer-1',
    title: 'Foundation & Signal',
    description: 'Tracking cleaned up. Forms rebuilt to capture real buying signals.',
    icon: 'Globe',
    items: ['Clean Tracking', 'Smart Forms', 'Data Hygiene'],
    playbooks: [
        { name: 'Tracking Audit', desc: 'Identifying where data was leaking or duplicating across 13 markets.' },
        { name: 'Form Strategy', desc: 'Rebuilding capture points to ensure buying signals were actually passed to sales.' }
    ]
  },
  {
    id: 'layer-2',
    title: 'Logic & Routing',
    description: 'Lead scoring rewired based on actual behavior. Routing fixed.',
    icon: 'Activity',
    items: ['Behavioral Scoring', 'Lead Routing', 'Sales Alerts'],
    playbooks: [
        { name: 'Scoring Model', desc: 'Moved from arbitrary points to scoring based on intent and high-value actions.' },
        { name: 'Routing Logic', desc: 'Ensured the right lead went to the right rep, immediately, without manual intervention.' }
    ]
  },
  {
    id: 'layer-3',
    title: 'Execution & Velocity',
    description: 'Nurtures tuned to what was converting. New campaigns launched in days.',
    icon: 'Rocket',
    items: ['High-Intent Nurture', 'Rapid Launch', 'Pipeline Reporting'],
    playbooks: [
        { name: 'Nurture Optimization', desc: 'Removed the noise. Focused on content that actually drove conversion.' },
        { name: 'Velocity Framework', desc: 'Standardized templates and processes that allowed 3-day launch cycles.' }
    ]
  }
];

export const RESULTS_DATA = {
  operational: [
    "Sales works Pardot leads again",
    "Marketing ties campaigns to pipeline",
    "New requests take days, not quarters",
    "No SOWs. No drift. No starting over"
  ],
  strategic: [
    "System kept improving automatically",
    "Drift was eliminated completely",
    "Scale managed without headcount",
    "Revenue loop runs continuously"
  ]
};

// Data for Home Value Prop Section
export const HOME_VALUE_PROP_DATA = {
  title: "What's Included In Your Subscription",
  subtitle: "Everything you need for Account Engagement (Pardot) and Salesforce, done for you at one flat monthly cost.",
  highlights: [
    "One Flat Monthly Cost",
    "Unified Revenue Engine",
    "No New Apps",
    "Always-On Marketing Agility"
  ]
};

// Data for Home Services Section
export const HOME_SERVICES_LAYERS = [
  {
    id: 'service-1',
    title: 'Unlimited Strategy',
    description: 'A Marketing Cloud/Pardot + Salesforce expert at your fingertips.',
    icon: 'Brain',
    items: ['30-60-90 Day Plans', 'Expert Access', 'Screen Share'],
    playbooks: [
        { name: 'Strategic Guidance', desc: 'Sometimes you don’t know what you don’t know. That’s where our dedicated experts come in handy.' },
        { name: 'Dedicated Experts', desc: 'Your expert will be assigned to you, and will deeply understand your unique environment. Click one button and jump on a screen share.' }
    ]
  },
  {
    id: 'service-2',
    title: 'Unlimited Design & Coding',
    description: 'Email templates, form layouts, and landing pages.',
    icon: 'Layout',
    items: ['Email Templates', 'Landing Pages', 'Form Layouts'],
    playbooks: [
        { name: 'World-Class Talent', desc: 'Beautiful design is more than skin deep. Get access to the world’s top design talent leveraging our dataset of best practices.' },
        { name: 'Platform Specific', desc: 'Enjoy unfettered access to our Marketing Cloud/Pardot specific designers who understand the technical constraints.' }
    ]
  },
  {
    id: 'service-3',
    title: 'Real-Time Revisions',
    description: '24 Hour execution on all Marketing Cloud/Pardot+Salesforce tasks.',
    icon: 'Clock',
    items: ['24h Turnaround', 'Quick Pivots', 'Live Updates'],
    playbooks: [
        { name: 'Leverage Data', desc: 'Access to data is amazing, the ability to leverage that data is where the magic happens.' },
        { name: 'Pivot Quickly', desc: 'When you launch a campaign, Engagement Studio Drip, webinar flow, or other assets the ability to quickly pivot is key.' }
    ]
  }
];

// Mapped from Original Copy "Proactive Projects" and "Integrations"
export const HOME_ADDITIONAL_FEATURES = {
  projects: {
    title: "Proactive Projects",
    description: "Fully built Marketing Cloud/Pardot + Salesforce projects, done proactively. We use industry trends and our knowledge of your account to build a custom project for you every month.",
    icon: 'Rocket'
  },
  integrations: {
    title: "Integrations",
    description: "Connect to the tools you use. Salesforce and Marketing Cloud/Pardot have the most robust integration ecosystem available. Get your whole tech stack talking.",
    icon: 'Puzzle'
  }
};