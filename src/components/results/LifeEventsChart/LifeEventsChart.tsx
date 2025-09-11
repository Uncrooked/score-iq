"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts"

interface LifeEventData {
  event: string;
  probability: number;
  fill: string;
}

interface LifeEventsChartProps {
  data: LifeEventData[];
}

const chartConfig = {
  probability: {
    label: "Probabilité",
    color: "var(--color-rose-2)",
  },
  // Événements
  cancer: {
    label: "Développer un cancer",
    color: "var(--color-rose-1)",
  },
  accident: {
    label: "Accident grave",
    color: "var(--color-rose-2)",
  },
  riche: {
    label: "Devenir riche",
    color: "var(--color-rose-3)",
  },
  folie: {
    label: "Folie",
    color: "var(--color-rose-4)",
  },
  famille: {
    label: "Créer une famille",
    color: "var(--color-rose-5)",
  },
}

export function LifeEventsChart({ data }: LifeEventsChartProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Événements de Vie : Probabilités Désastreuses</CardTitle>
        <CardDescription className="text-lg">
          Les chances que ces événements se produisent durant votre vie
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="w-full h-[400px]">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart
              accessibilityLayer
              data={data}
              layout="vertical"
              margin={{
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
              }}
            >
            <YAxis
              dataKey="event"
              type="category"
              tickLine={false}
              tickMargin={20}
              axisLine={false}
              tick={{ fontSize: 16, fill: '#ffffff' }}
              width={150}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis 
              dataKey="probability" 
              type="number" 
              domain={[0, 100]}
              tick={{ fontSize: 14, fill: '#ffffff' }}
              tickCount={6}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-lg">
                      <p className="text-white font-medium">{data.event}</p>
                      <p className="text-gray-300 text-sm">{data.probability}%</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar 
              dataKey="probability" 
              layout="vertical" 
              radius={5} 
              fill="#8884d8"
              maxBarSize={60}
              minPointSize={0}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-medium text-lg">
            Probabilités catastrophiques en hausse
          </div>
          <div className="text-muted-foreground text-lg">
            Une Meilleur hygiène de vie serait à envisager
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
