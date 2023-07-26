import { Frame, Observable } from "@nativescript/core";
import { PlanetService } from "~/services/planets.service";
import * as appSettings from "@nativescript/core/application-settings";
import Sqlite from "nativescript-sqlite";
import { database } from "./login-page";

export class LoginViewModel extends Observable {
  constructor() {
    super();
  }

  onBackTap(args: any): void {
    Frame.goBack();
  }

  async login(args: any): Promise<any> {
    const page = args.object.page;

    const campoEmail = page.getViewById("email");

    const email = campoEmail.text;

    let usuarioCadastrado = [];

    try {
      const usuario = await database().all("SELECT * FROM users");
      const existeUsuario = usuario?.find((element) => element.includes(email));
      usuarioCadastrado = existeUsuario;
    } catch (error) {
      console.log(error);
    }
    if (usuarioCadastrado) {
      appSettings.setBoolean("logado", true);
      Frame.topmost().navigate({
        moduleName: "feed/feed-page",
      });
    }

    //const db = await Sqlite("MyTable");
    // db.execSQL("DROP TABLE IF EXISTS names")
    //   .then(() => {
    //     console.log("Tabela deletada com sucesso.");
    //   })
    //   .catch((error) => {
    //     console.error("Erro ao deletar tabela:", error);
    //   });
    // db.all("SELECT * FROM names").then(
    //   (rows) => {
    //     rows.forEach((row) => {
    //       console.log("Registro:", row);
    //     });
    //   },
    //   (error) => {
    //     console.error("Erro ao consultar:", error);
    //   },
    // );
    //await db.execSQL("CREATE TABLE names (id INT, name TEXT)");
    // db.execSQL(
    //   "insert into names (name) values (?)",
    //   ["teste"],
    //   function (err, id) {
    //     console.log("The new record id is:", id);
    //   },
    // );

    // if (email === "admin@gmail.com") {
    //   appSettings.setString("email", email);
    //   Frame.topmost().navigate({
    //     moduleName: "feed/feed-page",
    //   });
    // } else {
    //   alert("Dados incorretos");
    // }
  }

  cadastrar(args: any): void {
    Frame.topmost().navigate({
      moduleName: "cadastro/cadastro-page",
    });
  }
}
