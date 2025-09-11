export function getCategory(): string {
    const score = Math.floor(Math.random() * 100);

    if (score < 20) {
        return "Votre QI est si bas qu'il défie les lois de la physique.";
    } else if (score < 40) {
        return "Félicitations ! Vous avez atteint un niveau d'incompétence légendaire.";
    } else if (score < 60) {
        return "Vous êtes dans la moyenne... des scores les plus bas.";
    } else if (score < 80) {
        return "Votre cerveau fonctionne comme un ordinateur des années 90.";
    } else {
        return "Même avec de la chance, vous n'avez pas réussi à briller.";
    }
}

export function getPercentile(positive: boolean): number {
    if (positive) {
        return Math.floor(Math.random() * 50) + 50;
    } else {
        return 100 - Math.floor(Math.random() * 50) - 50;
    }
}

export function getLifeExpectancyData(): Array<{year: number, userLife: number, averageLife: number}> {
    const lineData = getLine();
    const data = [];
    const baseYear = 2025;
    const averageLifeExpectancy = 80;
    
    for (let i = 0; i < lineData.length; i++) {
        const year = baseYear + i;
        const userLife = Math.max(lineData[i]);
        const averageLife = averageLifeExpectancy - (i * 1.5);
        
        data.push({
            year: year,
            userLife: Math.round(userLife),
            averageLife: Math.round(averageLife)
        });
    }
    
    return data;
}


export function getLifeEventsData(): Array<{event: string, probability: number, fill: string}> {
    return [
        { event: "cancer", probability: getPercentile(true), fill: "var(--color-rose-1)" },
        { event: "accident", probability: getPercentile(true), fill: "var(--color-rose-2)" },
        { event: "riche", probability: getPercentile(false), fill: "var(--color-rose-3)" },
        { event: "folie", probability: getPercentile(true), fill: "var(--color-rose-4)" },
        { event: "famille", probability: getPercentile(false), fill: "var(--color-rose-5)" }
    ];
}

export function getLine(): number[] {
    const lines: number[] = [];
    
    for (let i = 0; i < 7; i++) {
        const baseValue = 100 - (i * (100 / 6));
        const randomVariation = Math.random() * 0.4;
        const randomizedValue = baseValue * (1 + (Math.random() - 0.5) * randomVariation);
        
        lines.push(Math.max(0, Math.floor(randomizedValue)));
    }
    
    lines.sort((a, b) => b - a);
    return lines;
}

// Génère les données des compétences
export function getSkillsData(): Array<{skill: string, percentage: number}> {
    return [
        { skill: "Compétences techniques", percentage: getPercentile(false) },
        { skill: "Compétences pratiques", percentage: getPercentile(false) },
        { skill: "Culture générale", percentage: getPercentile(false) },
        { skill: "Logique", percentage: getPercentile(false) },
        { skill: "Mauvaises réponses", percentage: getPercentile(true)}
    ];
}