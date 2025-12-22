import React from 'react';
import { Globe, Layers, Activity, Shield, TrendingUp, Briefcase } from 'lucide-react';

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
  website: 'https://article.slxbox.com/demo',
};

// Data for Chaos Section
export const CHAOS_DATA = {
  title: "The system wasn't broken. It was stuck.",
  subtitle: "The system had drifted the way all systems drift. Lead scoring still reflected old assumptions. Automations built for a different moment were still running—or half-running. Sales and marketing had each adapted around the gaps.",
  callout: "Nobody broke it. It just drifted.",
  secondaryText: "Everything functioned. Nothing compounded.",
  scaleTitle: "Scale made the drift visible. But scale didn't cause it.",
  scaleDesc: "The same friction shows up in teams a tenth the size—sometimes worse, because there's no one dedicated to fixing it. Complexity isn't about headcount. It's about how many things have to work together."
};

// Data for System/Layers Section
// Grouping the 6 Spotify points into 3 Architectural Layers for the visual metaphor
export const SYSTEM_LAYERS = [
  {
    id: 'layer-1',
    title: 'Global Scale Engine',
    description: 'Coordinated rollouts and expansion infrastructure that preserves brand integrity.',
    icon: 'Globe', // String reference to map in component
    items: ['Global Launch Programs', 'Product Expansion Support'],
    playbooks: [
        { name: 'Global Launch Programs', desc: 'Coordinated rollouts across regions that preserved brand integrity while allowing local nuance.' },
        { name: 'Product Expansion Support', desc: 'Launch-ready infrastructure as Spotify’s advertising products entered new markets.' }
    ]
  },
  {
    id: 'layer-2',
    title: 'Engagement & Insight',
    description: 'Repeatable frameworks for education and dynamic marketing motions.',
    icon: 'Activity',
    items: ['Advertiser Education', 'Dynamic Engagement'],
    playbooks: [
        { name: 'Advertiser Education', desc: 'Repeatable frameworks for insights, trends, and learning initiatives that scaled without restarting.' },
        { name: 'Dynamic Engagement Systems', desc: 'Marketing motions that adapted based on advertiser behavior and intent signals.' }
    ]
  },
  {
    id: 'layer-3',
    title: 'Resilience & Precision',
    description: 'Ability to shift messaging quickly and target high-value segments.',
    icon: 'Shield',
    items: ['Crisis Response', 'High-Value Accounts'],
    playbooks: [
        { name: 'Crisis & Market Response', desc: 'The ability to shift messaging and posture quickly—without destabilizing ongoing growth efforts.' },
        { name: 'High-Value Account Programs', desc: 'Segmented and localized experiences for priority advertisers, built on a shared foundation.' }
    ]
  }
];

export const TRIED_DATA = [
  {
    approach: "Hired internally",
    result: "Thought it was a headcount problem. Turns out it wasn't a one-person job—strategy, ops, design, and data were all intertwined. No single hire could cover it."
  },
  {
    approach: "Consultancy project",
    result: "Big deliverable. Helped for a quarter. Then the system drifted."
  },
  {
    approach: "Contractors",
    result: "Disconnected work. Paid for hours, not outcomes. Got tasks done, but nothing tied together."
  }
];

export const RESULTS_DATA = [
  "Sales works Pardot leads again",
  "Marketing ties campaigns to pipeline",
  "New requests take days, not quarters",
  "No SOWs. No drift. No starting over."
];