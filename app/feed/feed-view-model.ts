import { Frame, ItemEventData, Observable, ObservableArray } from "@nativescript/core";
import { PlanetService } from "~/services/planets.service";

export class HomeViewModel extends Observable {
  private _planets: any[] = [];

  constructor() {
    super();
    this.fetchPlanets();
  }

  // This will be used as the data source of our ListView
  get planets(): ObservableArray<any> {
    return new ObservableArray(this._planets);
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
