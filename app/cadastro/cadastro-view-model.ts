import { Frame, Observable } from "@nativescript/core";
import { PlanetService } from "~/services/planets.service";
import * as appSettings from "@nativescript/core/application-settings";
import { database } from "~/login/login-page";

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

    if (email !== "") {
      database().execSQL(
        `
  INSERT INTO users (email) VALUES (?)
`,
        [email],
      );
    }

    Frame.topmost().navigate({
      moduleName: "login/login-page",
    });
  }
}
