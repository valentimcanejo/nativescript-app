import { Frame, ItemEventData, Observable, ObservableArray } from "@nativescript/core";
import { PlanetService } from "~/services/planets.service";

export class HomeViewModel extends Observable {
  private _planets: any[]

  constructor() {
    super()
    this.populatePlanets()
  }

  // this will be used as the data source of our ListView
  get planets(): ObservableArray<any> {
    return new ObservableArray(this._planets)
  }

  populatePlanets(): void {
    this._planets = PlanetService.getInstance().getPlanets()
  }

  onFlickTap(args: ItemEventData): void {
    Frame.topmost().navigate({
      moduleName: 'details/details-page',
      context: { planetId: this._planets[args.index].id }
    })
  }

}

