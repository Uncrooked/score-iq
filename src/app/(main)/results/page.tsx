"use client"

import "@/src/styles/globals.css";
import { Card, CardContent } from "@/components/ui/card"
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

  const refreshData = () => {
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
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Analyse de Votre Dégradation Mentale</h1>
        <button 
          onClick={refreshData}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Générer de Nouvelles Statistiques Désastreuses
        </button>
      </div>

      {/* Message de catégorie */}
      <Card className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
        <CardContent className="pt-6">
          <p className="text-center text-lg font-semibold text-red-800 dark:text-red-200">
            {category}
          </p>
        </CardContent>
      </Card>

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