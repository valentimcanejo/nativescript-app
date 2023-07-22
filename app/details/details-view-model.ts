import { Frame, Observable } from '@nativescript/core'
import { PlanetService } from '~/services/planets.service'

export class DetailsViewModel extends Observable {
    private _planet: any
  
    // the passed in context object during the navigation will be here
    constructor(private _context: { planetId: number }) {
      super()
      
      this._planet = PlanetService.getInstance().getPlanetByidNum(this._context.planetId)
    }
  
    get planet(): any {
      
      
      return this._planet
    }

    onBackTap(args: any): void {
        Frame.goBack();
    }
}