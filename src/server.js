const app =  require("./index")

const connect = require("./configs/db")

app.listen(7894,async  function () {
    try {
        await connect();
        console.log("Listening on port 7894")
    } catch (error) {
      console.log("error",error);        
    }
})