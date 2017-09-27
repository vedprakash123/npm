import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit{

  _pageCurrent: number = 0;
  _itemsPerPage: number = 0;
  _pageCount: number = 0;

  pages: number[] = [];

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  @Input() set pageCurrent(current:number) {
  	this._pageCurrent = current;
  }

  @Input() set itemsPerPage(items:number) {
  	this._itemsPerPage = items;
  }

  @Input() set pageCount(count:number) {
  	this._pageCount = count;

  	this.pages = [];

  	for ( let index = 0; index < this._pageCount; index++) {
  		this.pages.push(index);
  	}
  }

  onPageChange(page: number) {
  	this.pageChange.emit(page);
  	this._pageCurrent = page;

  }
  
  ngOnInit() {
  }

}
