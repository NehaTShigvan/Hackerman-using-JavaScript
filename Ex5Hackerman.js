
const func = async (msg) => {
    for (let i = 0; i<msg.length; i++){
        let p1 =  new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(msg[i])
            }, 2000);
        })
        // let p2 =  new Promise((resolve,reject)=>{
        //     setTimeout(() => {
        //         resolve("I am changing")
        //     }, 2000);
    
        // })
        let a = await p1
        content.innerHTML = content.innerHTML + a + "<br>"
        // let b = await p2
        // document.body.innerHTML = a + b 

    }
    
}
// const hack = async()=>{
//     let a = await func()
//     document.body.innerHTML = a
//     a = await func().p2()
//     document.body.innerHTML = a
//     // a = await func("I am changing")
//     // a = await func("I am changing")
// }
let msg = ["Starting to hack user id and password.....","Work in progress....","Trying to retrieve.....","Information will be retrieved soon....","Hacking user id ....","User Id is @IamYourdad0","Hacking password....","Password is 12#MeetMe"]
func(msg)