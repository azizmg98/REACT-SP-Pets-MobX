import {makeAutoObservable} from "mobx"
import petsData from "../petsData"

class PetsStore{
    pets = []
    constructor(){
        makeAutoObservable(this)
        // this.pets = petsData
    }
    pets = petsData 
}

const petsStore = new PetsStore(this);

export default petsStore;