"use client"

import "@/src/styles/globals.css";
import "@/src/styles/pages/results.css";
import { getCategory, getLifeExpectancyData, getLifeEventsData, getSkillsData } from "./functions"
import { LifeExpectancyChart } from "../../../components/results/LifeExpectancyChart/LifeExpectancyChart"
import { LifeEventsChart } from "../../../components/results/LifeEventsChart/LifeEventsChart"
import { SkillsChart } from "../../../components/results/SkillsChart/SkillsChart"
import { SummaryCard } from "../../../components/results/SummaryCard/SummaryCard"
import { useState, useEffect } from "react"



interface LifeExpectancyData {
  year: number;
  userLife: number;
  averageLife: number;
}

interface LifeEventData {
  event: string;
  probability: number;
  fill: string;
}

interface RadialData {
  skill: string;
  percentage: number;
  fill: string;
}

export default function TestChartsPage() {
  const [lifeData, setLifeData] = useState<LifeExpectancyData[]>([])
  const [eventsData, setEventsData] = useState<LifeEventData[]>([])
  const [radialData, setRadialData] = useState<RadialData[]>([])
  const [category, setCategory] = useState("Chargement...")

  useEffect(() => {
    const lifeData = getLifeExpectancyData()
    const eventsData = getLifeEventsData()
    const skillsData = getSkillsData()
    setLifeData(lifeData)
    setEventsData(eventsData)
    setRadialData(skillsData.map((skill, index) => ({
      skill: skill.skill,
      percentage: skill.percentage,
      fill: `var(--color-rose-${index + 1})`
    })))
    setCategory(getCategory())
  }, [])

  useEffect(() => {
    window.localStorage.setItem('quiz_index',"0");
  });


  return (
    <div className="container mx-auto space-y-8">
      {/* Titre principal */}
      <div className="text-center space-y-4">
        <h1 className="main-title">VOS STATISTIQUES</h1>
        <p className="subtitle">
          {category}
        </p>
      </div>

      {/* Section Gardez bien à l'esprit */}
      <div className="space-y-4">
        <h2 className="section-title">Gardez bien à l&apos;esprit</h2>
        <p className="section-content">
        Tu rêves grand, mais tu ne réalises rien. Tes efforts sont dérisoires, tes ambitions fragiles, et chaque pas que tu crois faire en avant n’est qu’une illusion.
        Tu n’inspires ni admiration ni respect, seulement de l’indifférence. Même ton acharnement ressemble davantage à de la fuite qu’à du courage.
        En vérité, tu ne fais que t’épuiser pour masquer à quel point tu n’as aucune chance d’aller plus loin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Graphique d'espérance de vie avec gradient */}
        <div className="lg:col-span-2">
          <LifeExpectancyChart data={lifeData} />
        </div>

        {/* Graphique des événements de vie */}
        <LifeEventsChart data={eventsData} />

        {/* Graphique radial */}
        <SkillsChart data={radialData} />
      </div>

      {/* Résumé des données */}
      <SummaryCard 
        lifeData={lifeData} 
        eventsData={eventsData} 
        radialData={radialData} 
      />
    </div>
  )
}