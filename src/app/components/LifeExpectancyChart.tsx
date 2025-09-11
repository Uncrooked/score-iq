"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts"

interface LifeExpectancyData {
  year: number;
  userLife: number;
  averageLife: number;
}

interface LifeExpectancyChartProps {
  data: LifeExpectancyData[];
}

const chartConfig = {
  userLife: {
    label: "Votre espérance de vie",
    color: "var(--color-rose-1)",
  },
  averageLife: {
    label: "Espérance de vie moyenne",
    color: "var(--color-rose-3)",
  },
}

export function LifeExpectancyChart({ data }: LifeExpectancyChartProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Espérance de Vie : Dégradation Continue</CardTitle>
        <CardDescription className="text-lg">
          Votre espérance de vie diminue à cause de votre stupidité
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="w-full h-[400px]">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUserLife" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-rose-1)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--color-rose-2)" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorAverageLife" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-rose-3)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--color-rose-4)" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="averageLife"
                stroke="var(--color-rose-3)"
                fill="url(#colorAverageLife)"
                name="Espérance de vie moyenne"
              />
              <Area
                type="monotone"
                dataKey="userLife"
                stroke="var(--color-rose-1)"
                fill="url(#colorUserLife)"
                name="Votre espérance de vie"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
