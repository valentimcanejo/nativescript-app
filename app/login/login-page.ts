import { Frame, NavigatedData, Page } from "@nativescript/core";
import { LoginViewModel } from "./login-view-model";
import * as appSettings from "@nativescript/core/application-settings";

export function navigatingTo(args: NavigatedData): void {
  if (args.isBackNavigation) {
    return;
  }

  const page = <Page>args.object;
  page.bindingContext = new LoginViewModel();
}

export function checkLogin(args: any): any {
  const existe = appSettings.getString("email");
  console.log(existe);
  if (existe === "valentim.canejo@hotmail.com") {
    Frame.topmost().navigate({
      moduleName: "feed/feed-page",
    });
  }
}
