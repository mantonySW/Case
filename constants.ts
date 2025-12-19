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
  website: 'https://saleslabx.com',
};

// Data for Chaos Section
export const CHAOS_DATA = {
  title: "The Problem Growing Teams Feel—Before They Can Name It",
  subtitle: "Growth rarely breaks because of strategy. It breaks because motion becomes fragile.",
  symptoms: [
    "Launches take longer than they used to",
    "Every new initiative feels heavier than the last",
    "Teams rely on heroics to hit deadlines",
    "Momentum resets instead of carrying forward"
  ]
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

export const RESULTS_DATA = {
  operational: [
    "Launches became predictable instead of stressful",
    "Speed increased without sacrificing quality",
    "Teams stopped solving the same problems repeatedly",
    "Marketing activity felt cumulative, not exhausting"
  ],
  strategic: [
    "Revenue marketing supported global expansion with confidence",
    "Education initiatives scaled without added operational drag",
    "Success stories became easier to produce and reuse",
    "Growth felt intentional rather than reactive"
  ]
};