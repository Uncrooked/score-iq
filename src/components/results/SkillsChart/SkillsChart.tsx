"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { RadialBarChart, RadialBar } from "recharts"

interface SkillData {
  skill: string;
  percentage: number;
  fill: string;
}

interface SkillsChartProps {
  data: SkillData[];
}

const chartConfig = {
  percentage: {
    label: "Pourcentage",
    color: "var(--color-rose-4)",
  },
  // Compétences
  techniques: {
    label: "Compétences techniques",
    color: "var(--color-rose-1)",
  },
  pratiques: {
    label: "Compétences pratiques", 
    color: "var(--color-rose-2)",
  },
  culture: {
    label: "Culture générale",
    color: "var(--color-rose-3)",
  },
  logique: {
    label: "Logique",
    color: "var(--color-rose-4)",
  },
  mauvaises: {
    label: "Mauvaises réponses",
    color: "var(--color-rose-5)",
  },
}

export function SkillsChart({ data }: SkillsChartProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Vos Compétences</CardTitle>
        <CardDescription className="text-lg">Analyse de vos capacités (ou plutôt de leur absence)</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="w-full h-[400px] flex items-center justify-center">
          <ChartContainer
            config={chartConfig}
            className="w-full h-full max-w-[400px] max-h-[400px]"
          >
            <RadialBarChart
              data={data}
              startAngle={-90}
              endAngle={380}
              innerRadius={40}
              outerRadius={180}
              cx="50%"
              cy="50%"
            >
            <ChartTooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-lg">
                      <p className="text-white font-medium">{data.skill}</p>
                      <p className="text-gray-300 text-sm">{data.percentage}%</p>
                    </div>
                  );
                }
                return null;
              }}
            />
              <RadialBar 
                dataKey="percentage" 
                background
                cornerRadius={8}
                fillOpacity={0.8}
              >
              </RadialBar>
           </RadialBarChart>
        </ChartContainer>
        </div>
        
        {/* Légende personnalisée */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div 
                className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
                style={{ backgroundColor: item.fill }}
              ></div>
              <span className="text-white text-sm">
                {item.skill}: {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-medium text-lg">
            Dégradation continue de vos capacités
          </div>
          <div className="text-muted-foreground text-lg">
            Analyse de vos compétences sur une échelle de 0 à 100%.
            Plus proche du 0 que du 100%, c&apos;est que vous êtes complètement débile.
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
