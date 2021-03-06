import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../modules/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item : Item = {
    title : '',
    description : ''
  }

  constructor(private itemService : ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.item.title != '') && (this.item.title != '')){
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
    }
  }

}
