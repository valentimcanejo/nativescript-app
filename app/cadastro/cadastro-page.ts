import { EventData, Frame, NavigatedData, Page } from "@nativescript/core";
import { CadastroViewModel } from "./cadastro-view-model";

export function navigatingTo(args: NavigatedData): void {
  const page = <Page>args.object;
  page.bindingContext = new CadastroViewModel();
}
