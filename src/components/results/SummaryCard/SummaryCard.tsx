"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

interface SummaryCardProps {
  lifeData: LifeExpectancyData[];
  eventsData: LifeEventData[];
  radialData: RadialData[];
}

export function SummaryCard({ lifeData, eventsData, radialData }: SummaryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Résumé de Votre Situation Désastreuse</CardTitle>
        <CardDescription className="text-lg">
          Un aperçu de vos statistiques les plus déprimantes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h4 className="font-semibold text-red-600 dark:text-red-400 text-lg">Espérance de Vie</h4>
            <p className="text-lg text-muted-foreground">
              Année de départ: 2025<br/>
              Espérance en 2031: vous êtes mort<br/>
              Déficit par rapport à la moyenne: {lifeData[6]?.averageLife - lifeData[6]?.userLife || 0} ans
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-red-600 dark:text-red-400 text-lg">Événements Probables</h4>
            <p className="text-lg text-muted-foreground">
              Cancer: {eventsData.find(e => e.event.includes('cancer'))?.probability || 0}%<br/>
              Accident grave: {eventsData.find(e => e.event.includes('accident'))?.probability || 0}%<br/>
              Devenir riche: {eventsData.find(e => e.event.includes('richesse'))?.probability || 0}%<br/>
              Folie: {eventsData.find(e => e.event.includes('folie'))?.probability || 0}%<br/>
              Créer une famille: {eventsData.find(e => e.event.includes('famille'))?.probability || 0}%
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-red-600 dark:text-red-400 text-lg">Compétences</h4>
            <p className="text-lg text-muted-foreground">
              Techniques: {radialData.find(r => r.skill === 'Compétences techniques')?.percentage || 0}%<br/>
              Pratiques: {radialData.find(r => r.skill === 'Compétences pratiques')?.percentage || 0}%<br/>
              Culture: {radialData.find(r => r.skill === 'Culture générale')?.percentage || 0}%<br/>
              Logique: {radialData.find(r => r.skill === 'Logique')?.percentage || 0}%<br/>
              Mauvaises réponses: {radialData.find(r => r.skill === 'Mauvaises réponses')?.percentage || 0}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
