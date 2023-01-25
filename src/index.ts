// console.log("typescript is here");
// console.log("typescript is amazing");

// class User{
//     public email: string
//     private name: string
//     readonly city:string = "Mangalore"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
        
//     }
// }

class User{

    protected _courseCount = 1
  
    readonly city:string = "Mangalore"
    constructor(
        public email: string,
        public  name: string
        // private userId : string
        ){
    }

    private deleteToken(){
        console.log("Token deleted");
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    } 
}

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}
const shashank = new User("s@shashank.com","shashank")
// shashank.name 

// shashank.deleteToken