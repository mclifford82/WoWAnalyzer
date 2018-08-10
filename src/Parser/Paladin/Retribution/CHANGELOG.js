import React from 'react';

import SpellLink from 'common/SpellLink';
import { Hewhosmites, Zerotorescue, Juko8} from 'CONTRIBUTORS';

import SPELLS from './SPELLS';

export default [
  {
    date: new Date('2018-06-25'),
    changes: <React.Fragment>Added modules for <SpellLink id={SPELLS.RIGHTEOUS_VERDICT_TALENT} icon /> and <SpellLink id={SPELLS.INQUISITION_TALENT} icon /> </React.Fragment>,
    contributors: [Juko8],
  },
  {
    date: new Date('2018-06-24'),
    changes: <React.Fragment>Updated modules for <SpellLink id={SPELLS.ART_OF_WAR} icon /> and <SpellLink id={SPELLS.JUDGMENT_CAST} icon /></React.Fragment>,
    contributors: [Juko8],
  },
  {
    date: new Date('2018-06-21'),
    changes: 'Talents and abilities updated for 8.0. Artifact traits and related analysis removed',
    contributors: [Juko8],
  },
	{
		date: new Date('2018-02-21'),
		changes: <React.Fragment>Added a <SpellLink id={SPELLS.CRUSADE_TALENT} icon /> module.</React.Fragment>,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2018-01-13'),
		changes: 'Updated to new checklist format,',
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-10-22'),
		changes: 'Changed the active time icon to something more befitting.',
		contributors: [Zerotorescue],
	},
	{
		date: new Date('2017-01-18'),
		changes: 'Added in the Tier 21 Modules',
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-09-14'),
		changes: 'Added a Blessing of the Ashbringer Module.',
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-09-06'),
		changes: `Added in relic traits (Deliver the Justice/Highlord's Judgment/Might of the Templar/Righteous Verdict/Wrath of the Ashbringer).`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-09-05'),
		changes: 'Added a Retribution damage tracker.',
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-22'),
		changes: 'Added a Blade of Wrath proc tracker.',
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-22'),
		changes: `Added a module to check that you're spending inside of Judgment`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-22'),
		changes: `Added a module to check that you're spending inside of Judgment`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-20'),
		changes: `Added a Chain of Thrayn Module.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-20'),
		changes: `Made a Divine Purpose Tracker.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-20'),
		changes: `Added a Soul of the Highlord Module.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-19'),
		changes: `added an Ashes to Dust Module.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-19'),
		changes: `Added a Liadrin's Fury Unleashed Module.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-18'),
		changes: `Added a Holy Power Tracker and Graph.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-16'),
		changes: `Added a Tier 20 4 peice Module.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-16'),
		changes: `Edited the haste Module to work with Crusade.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-15'),
		changes: `Added a Tier 20 2 peice Module.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-13'),
		changes: `Added a Whisper of the Nathrezim Module.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-11'),
		changes: `Added cooldown tracker.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-09'),
		changes: `Added cast ratios statistic.`,
		contributors: [Hewhosmites],
	},
	{
		date: new Date('2017-08-09'),
		changes: `Added Total Damage statistic.`,
		contributors: [Hewhosmites],
	},
];
