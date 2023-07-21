import {
  EventData,
  ItemEventData,
  ListView,
  NavigatedData,
  Page,
  fromObject,
} from "@nativescript/core";
import { HomeViewModel } from "./feed-page-model";

export function navigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  const vm = fromObject({
    // Setting the listview binding source
    myTitles: [
      { name: "The Da Vinci Code" },
      { name: "Harry Potter and the Chamber of Secrets" },
      { name: "The Alchemist" },
      { name: "The Godfather" },
      { name: "Goodnight Moon" },
      { name: "The Hobbit" },
    ],
  });
  page.bindingContext = vm;
}

export function onListViewLoaded(args: EventData) {
  const listView = <ListView>args.object;
}

export function onItemTap(args: ItemEventData) {
  const index = args.index;
  console.log(`Second ListView item tap ${index}`);
}
