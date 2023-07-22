import { Http, Observable } from "@nativescript/core";

export class PlanetService extends Observable {
    private planets: any[] = [];

    static getInstance(): PlanetService {
        return PlanetService._instance;
    }

    private static _instance: PlanetService = new PlanetService();

    async getPlanets(): Promise<any> {
        const resultado: any = await Http.getJSON('https://ifrn-ddm.vercel.app/api/items');
        this.planets = resultado.data;
        console.log(this.planets);
        return this.planets;
    }

    getPlanetByidNum(idNum: number): any | undefined {
        console.log(this.planets);
        return this.planets.find(planet => planet.idNum === idNum) || undefined;
    }
}
