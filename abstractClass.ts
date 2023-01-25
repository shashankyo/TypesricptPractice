abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string 
    ){}


    getSepia(): void {
    console.log("Sepia");
   }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode :string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
}

// const hc = new Instagram("test","Test")
