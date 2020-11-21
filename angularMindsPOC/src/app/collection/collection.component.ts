import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  public collectedData: any = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchAllCollectionData();
  }

  public fetchAllCollectionData(): void {
    this.userService.getAllCollectionsData()
    .subscribe(data => {
      this.collectedData = data.collections;
    });
  }

}
