import { Frame, NavigatedData, Page } from '@nativescript/core'
import { CreateViewModel } from './create-view-model'

export function navigatingTo(args: NavigatedData): void {
  const page = <Page>args.object
  page.bindingContext = new CreateViewModel(page.navigationContext);


  
}


