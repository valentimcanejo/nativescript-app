import { Http, ImageSource, Observable } from "@nativescript/core";

export class PlanetService extends Observable {
  private planets: any[] = [];

  static getInstance(): PlanetService {
    return PlanetService._instance;
  }

  private static _instance: PlanetService = new PlanetService();

  async getPlanets(): Promise<any> {
    const resultado: any = await Http.getJSON(
      "https://ifrn-ddm.vercel.app/api/items",
    );

    this.planets = resultado.data;

    return this.planets;
  }

  createPlanet(item: any): any {
    this.planets.push(item);
  }

  getPlanetsLength(): number {
    return this.planets.length;
  }

  getPlanetByidNum(idNum: number): any | undefined {
    return this.planets.find((planet) => planet.idNum === idNum) || undefined;
  }
}
