import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = "Room List"

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent

  constructor() {}

  ngOnInit(): void {

    console.log(this.headerComponent);
    

    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1609949279531-cf48d64bed89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        checkinTime: new Date('23-Jan-2023'),
        checkoutTime: new Date('25-January-2023'),
        rating: 4.72,
      },
      {
        roomNumber: 2,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
        price: 760,
        photos:
          'https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        checkinTime: new Date('26-Jan-2023'),
        checkoutTime: new Date('27-January-2023'),
        rating: 4.16,
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe+ Room',
        amenities:
          'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen, Balcony',
        price: 635,
        photos:
          'https://images.unsplash.com/photo-1657349227800-a09220ee7ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        checkinTime: new Date('24-Jan-2023'),
        checkoutTime: new Date('26-January-2023'),
        rating: 4.58,
      },
    ];
  }

  ngDoCheck(): void {
    console.log('on changes was called');
    
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = " Display Rooms List"
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe+ Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen, Balcony',
      price: 722,
      photos:
        'https://images.unsplash.com/photo-1657349227800-a09220ee7ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      checkinTime: new Date('27-Jan-2023'),
      checkoutTime: new Date('31-January-2023'),
      rating: 4.64,
    };
    // this line does not work 'cause immutability, we need to create a new instance
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]
  }
}
