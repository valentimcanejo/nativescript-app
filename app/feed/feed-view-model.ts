import {
  ApplicationSettings,
  Frame,
  ItemEventData,
  Observable,
  ObservableArray,
} from "@nativescript/core";
import { PlanetService } from "~/services/planets.service";

export class HomeViewModel extends ObservableArray<any> {
  private _planets: any[] = [];

  constructor() {
    super();
    this.fetchPlanets();
  }

  static getInstance(): HomeViewModel {
    return HomeViewModel._instance;
  }

  private static _instance: HomeViewModel = new HomeViewModel();

  get planets(): any {
    return this._planets;
  }

  async fetchPlanets(): Promise<void> {
    try {
      const result = await PlanetService.getInstance().getPlanets();
      this._planets = result;

      this.notifyPropertyChange("planets", this._planets);
    } catch (error) {
      console.log(error);
    }
  }

  createPlanet(newPlanetData: any): any {
    try {
      const createdPlanet =
        PlanetService.getInstance().createPlanet(newPlanetData);

      this._planets.push(createdPlanet);

      this.notifyPropertyChange("planets", this._planets);

      return this._planets;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  verDetalhes(args: ItemEventData): void {
    Frame.topmost().navigate({
      moduleName: "details/details-page",
      context: { planetId: this._planets[args.index].idNum },
    });
  }

  onAddButtonTap(args: any): void {
    Frame.topmost().navigate({
      moduleName: "create/create-page",
      context: { planetId: 1 },
    });
  }

  onBackTap(args: any): void {
    Frame.goBack();
  }

  logout(args: any): void {
    ApplicationSettings.remove("email");
    Frame.topmost().navigate({
      moduleName: "login/login-page",
      context: { planetId: 1 },
    });
  }
}
