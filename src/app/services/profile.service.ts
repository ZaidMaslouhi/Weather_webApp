import { Profile } from './../profile';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles: Profile[] = [
    {
    profileName: 'Default Profile',
    cities: ['London','Madrid']
    }
  ];

  constructor() { }

  saveNewProfile(citiesLst: string[]){
    const profileName = 'Profile ' + this.profiles.length;
    const profile = {
      profileName: profileName,
      cities: citiesLst
    }
    this.profiles.push(profile);
  }

  get getProfiles(){
    return this.profiles;
  }

  deleteProfile(profile: Profile){
    let indx = this.profiles.indexOf(profile);
    this.profiles.splice(indx,1);
  }

}
