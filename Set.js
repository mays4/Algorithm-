function mySet(){
  // this collection will hold the set
  let collection = [];
  // this method will check for the presenc of an element  and return true or false
  this.has = (element)=>{
    return (collection.indexOf(element) !== -1)
  }
  // this method will return all the values in the set 
  this.values = ()=>{
    return collection;

  }
  // this method will add an element to the set 
  this.add = (element)=>{
    if(!this.has(element)){
      collection.push(element);
      return true;
    }
    return false;
  }
  // this method wil remove an element from a set
  this.remove = (element)=>{
    if(this.has(element)){
      index = collection.indexOf(element);
      collection.splice(index,1);
      return true;
        } 
        return false;

      };
        // this method will return the size of the collection 
        this.size = ()=>{
          return collection.length;
        };

  // this method will return the union of two sets
  this.union =(otherSet)=>{
    let unionSet = new Set();
    let firstSet = this.values();
    let secondSet= otherSet.values();
    firstSet.forEach((e)=>{
      unionSet.add(e);
    });
    secondSet.forEach((e)=>{
      unionSet.add(e);
    });
    return unionSet;

  };
  // this method will return the intersection of two sets as a new set 
  this.intersection = (otherSet)=>{
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((e)=>{
      if(otherSet.has(e)){
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets as a new set
  this.difference =(otherSet)=>{
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((e)=>{
      if(!otherSet.has(e)){
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  // this method will test if the set is a subset of a different set 
  this.subset= (otherSet)=>{
    let firstSet = this.values();
    return firstSet.every((value)=>{
       return otherSet.has(value);
    });
  };
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).value);
console.log(setB.difference(setA).value);

let setC = new Set();
let setD= new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");

console.log(setD.values())
setD.delete("a");
console.log(setD.has("a")
)
