import { Frame, ItemEventData, Observable, ObservableArray } from "@nativescript/core";
import { PlanetService } from "~/services/planets.service";
import { Http } from '@nativescript/core'

export class HomeViewModel extends Observable {
  private _planets: any[]

  constructor() {
    super()
    this.populatePlanets()
    this.getApi()
  }

  // this will be used as the data source of our ListView
  get planets(): ObservableArray<any> {
    return new ObservableArray(this._planets)
  }

  getApi(): Promise<void>{
    
   return Http.getJSON('https://ifrn-ddm.vercel.app/api/items').then(
      (result: any) => {
        console.log(result)
      },
      e => {
        console.log(e)
      }
    )
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

  onAddButtonTap(args: any): void {
    
    Frame.topmost().navigate({
      moduleName: 'create/create-page',
      context: { planetId: 1 }
    })
  }

}

