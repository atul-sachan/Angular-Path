import { BookModel } from './../../../shared/models/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnInit {
  books: BookModel[] = [];
  currentBook: BookModel | null = null;
  total: number = 0;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {}
}
