import { action, makeAutoObservable, observable } from "mobx";
import petsData from "../petsData";

class PetsStore {
  pets = [];
  pets = petsData;
  handleAdopt = (petId) => {
      this.pets = this.pets.filter((pet) => pet.id !== petId)
  }

  constructor() {
    makeAutoObservable(this, {
      pets: observable,
      handleAdopt: action,
    });
  }
}

const petsStore = new PetsStore();

export default petsStore;
