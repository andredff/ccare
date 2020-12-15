import { Component, Input, OnInit, ViewChild } from "@angular/core";

import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import {
  Article,
  ArticleListConfig,
  ArticlesService,
} from "../../core";

@Component({
  selector: "app-article-table",
  templateUrl: "./article-table.component.html",
  styleUrls: ["./article-table.component.scss"],
})
export class ArticleTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() limit: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.getPosts();
    }
  }

  @Input() article: Article;

  public displayedColumns: string[] = [
    "title",
    "description",
    "author",
    "createdAt",
    "favorite"
  ];

  public dataSource: any;

  query: ArticleListConfig;
  results: Article[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];
  

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  private getPosts() {
    this.loading = true;
    this.results = [];

    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = this.limit * (this.currentPage - 1);
    }

    this.articlesService.query(this.query).subscribe((data) => {
      this.loading = false;
      this.results = data.articles;
      this.dataSource = new MatTableDataSource<any>(this.results);
      this.dataSource.paginator = this.paginator;

      this.totalPages = Array.from(
        new Array(Math.ceil(data.articlesCount / this.limit)),
        (val, index) => index + 1
      );
    });
  }

  public goToProfile(name) {
    this.router.navigate([`/profile/${name}`]);
  }

  public onToggleFavorite(favorited: boolean) {
    this.article['favorited'] = favorited;

    if (favorited) {
      this.article['favoritesCount']++;
    } else {
      this.article['favoritesCount']--;
    }
  }
}
