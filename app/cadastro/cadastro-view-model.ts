import { Frame, Observable } from "@nativescript/core";
import { PlanetService } from "~/services/planets.service";
import * as appSettings from "@nativescript/core/application-settings";

export class CadastroViewModel extends Observable {
  constructor() {
    super();
  }

  onBackTap(args: any): void {
    Frame.goBack();
  }

  cadastrar(args: any): void {
    const page = args.object.page;

    const campoEmail = page.getViewById("email");

    const email = campoEmail.text;

    appSettings.setString("email", email);

    Frame.topmost().navigate({
      moduleName: "login/login-page",
    });
  }
}
