function detectType(val: number | string ){
    if (typeof val == "number"){
       return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id)
    {
        console.log("Please provide ID")
        return
    }

    id.toLowerCase()
}