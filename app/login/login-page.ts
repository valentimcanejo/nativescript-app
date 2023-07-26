import { Frame, NavigatedData, Page } from "@nativescript/core";
import { LoginViewModel } from "./login-view-model";
import * as appSettings from "@nativescript/core/application-settings";
import Sqlite from "nativescript-sqlite";

let db: Sqlite;
let databaseInitialized = false;

export function navigatingTo(args: NavigatedData): void {
  if (args.isBackNavigation) {
    return;
  }

  const page = <Page>args.object;
  page.bindingContext = new LoginViewModel();
}

export function database() {
  return db;
}

async function initializeDatabase() {
  try {
    const database = await Sqlite("users");

    if (database) {
      databaseInitialized = true;
      db = database;
      await db.execSQL(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT
      )
    `);
    }
  } catch (error) {
    console.error("Erro ao abrir o banco de dados: ", error);
  }
}

export function isDatabaseInitialized() {
  return databaseInitialized;
}

export function checkLogin(args: any): any {
  if (!isDatabaseInitialized()) {
    initializeDatabase();
  }

  const logado = appSettings.getBoolean("logado");

  if (logado) {
    Frame.topmost().navigate({
      moduleName: "feed/feed-page",
    });
  }
}
