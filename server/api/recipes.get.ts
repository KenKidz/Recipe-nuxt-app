export interface Recipe {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number;
    cookingMinutes: number;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    license: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: ExtendedIngredient[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    instructions: string;
    analyzedInstructions: AnalyzedInstruction[];
}

interface ExtendedIngredient {
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    measures: {
        us: {
            amount: number;
            unitShort: string;
            unitLong: string;
        };
        metric: {
            amount: number;
            unitShort: string;
            unitLong: string;
        };
    };
}

interface AnalyzedInstruction {
    name: string;
    steps: Step[];
}

interface Step {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Equipment[];
    length?: {
        number: number;
        unit: string;
    };
}

interface Ingredient {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}

interface Equipment {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}

export default defineEventHandler(async event => {
    const { recipes } = await $fetch<{ recipes: Recipe}>('https://api.spoonacular.com/recipes/random', {
        query: {
            limitLicense: true,
            number: 100,
            apiKey: useRuntimeConfig().spoonacular.apiKey,
        }
    })
    try {

    } catch (e) {
        console.log(e)
        return []
    }
    return recipes
})
