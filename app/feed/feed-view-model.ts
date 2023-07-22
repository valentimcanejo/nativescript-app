import {
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

  // This will be used as the data source of our ListView
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
      // Call the API to create a new planet with the provided data
      const createdPlanet =
        PlanetService.getInstance().createPlanet(newPlanetData);

      // Update the local _planets array with the new planet
      this._planets.push(createdPlanet);

      // Notify the UI about the updated planets array
      this.notifyPropertyChange("planets", this._planets);

      // Return the updated planets array
      return this._planets;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  onFlickTap(args: ItemEventData): void {
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
}
