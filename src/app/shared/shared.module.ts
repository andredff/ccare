import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import {
  ArticleListComponent,
  ArticleMetaComponent,
  ArticlePreviewComponent,
} from "./article-helpers";
import { FavoriteButtonComponent, FollowButtonComponent } from "./buttons";
import { ListErrorsComponent } from "./list-errors.component";
import { ShowAuthedDirective } from "./show-authed.directive";
import { ArticleTableComponent } from "./article-table/article-table.component";

import { MatTableModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatPaginatorModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    ListErrorsComponent,
    ShowAuthedDirective,
    ArticleTableComponent,
  ],
  exports: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    CommonModule,
    FavoriteButtonComponent,
    FollowButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective,
    ArticleTableComponent,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatPaginatorModule
  ],
})
export class SharedModule {}
