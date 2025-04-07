
import React, { useState } from 'react';

const workstreams = [
  {
    id: 'ws1',
    title: 'BIM & Information Management',
    aiType: 'None',
    iso: ['ISO 19650-1:2018', 'ISO 19650-2:2018'],
    summary: 'Defines BIM coordination, QA, and spatial control standards.',
    persona: null
  },
  {
    id: 'ws2',
    title: 'Asset Data & Hierarchy Setup',
    aiType: 'ML + Knowledge Graphs',
    iso: ['ISO 55000:2014', 'ISO 30186:2022'],
    summary: 'Creates structured, standardized asset data models.',
    persona: '🧠 AI auto-classifies and validates asset hierarchies.'
  },
  {
    id: 'ws3',
    title: 'Field Data + AR',
    aiType: 'CV + NLP',
    iso: ['ISO 9241-210:2019', 'ISO 22301:2019'],
    summary: 'Capture validated field data via mobile/AR tools.',
    persona: '👷 On-site Engineer uses voice commands to log issues.'
  },
  {
    id: 'ws4',
    title: 'Data Governance & Dictionary',
    aiType: 'LLM (NLP)',
    iso: ['ISO 8000-110:2009', 'ISO/IEC 5259-1:2024'],
    summary: 'Aligns schemas, vocabularies, and validation processes.',
    persona: '📊 Data Steward generates schema definitions using LLMs.'
  }
];

export default function DigitalFrameworkDashboard() {
  const [selected, setSelected] = useState(workstreams[0]);

  return (
    <div className="p-6 max-w-7xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Digital Transformation Navigator</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {workstreams.map(ws => (
          <div
            key={ws.id}
            className={\`border p-4 rounded-xl shadow hover:shadow-lg cursor-pointer \${selected.id === ws.id ? 'bg-purple-100' : 'bg-white'}\`}
            onClick={() => setSelected(ws)}
          >
            <h2 className="text-lg font-semibold mb-1">{ws.title}</h2>
            <p className="text-sm text-gray-600">AI: {ws.aiType}</p>
            <p className="text-xs text-gray-500 mt-1">Key ISO: {ws.iso.join(', ')}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-xl border">
        <h2 className="text-2xl font-semibold mb-2">{selected.title}</h2>
        <p className="text-sm mb-2 text-gray-600 italic">{selected.summary}</p>
        <div className="mb-2">
          <span className="font-semibold">AI Type:</span> {selected.aiType}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Applicable ISO Standards:</span>
          <ul className="list-disc list-inside ml-4">
            {selected.iso.map(code => <li key={code}>{code}</li>)}
          </ul>
        </div>
        {selected.persona && (
          <div className="mt-4 p-4 bg-white border rounded">
            <h3 className="text-md font-bold mb-1">🧑‍💼 Persona Insight</h3>
            <p className="text-sm text-gray-700">{selected.persona}</p>
          </div>
        )}
      </div>
    </div>
  );
}
