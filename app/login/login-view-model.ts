import { Frame, Observable } from "@nativescript/core";
import { PlanetService } from "~/services/planets.service";
import * as appSettings from "@nativescript/core/application-settings";

export class LoginViewModel extends Observable {
  constructor() {
    super();
  }

  onBackTap(args: any): void {
    Frame.goBack();
  }

  login(args: any): void {
    const page = args.object.page;

    const campoEmail = page.getViewById("email");

    const email = campoEmail.text;

    if (email === "admin@gmail.com") {
      appSettings.setString("email", email);
      Frame.topmost().navigate({
        moduleName: "feed/feed-page",
      });
    } else {
      alert("Dados incorretos");
    }
  }

  cadastrar(args: any): void {
    Frame.topmost().navigate({
      moduleName: "cadastro/cadastro-page",
    });
  }
}
