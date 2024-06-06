import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { HeaderComponent } from './header/header.component';
import { RecipesListComponent } from './recipe-book/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipe-book/recipes-details/recipes-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { RecipeItemComponent } from './recipe-book/recipes-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    HeaderComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    ShoppingListComponent,
    NavbarComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
