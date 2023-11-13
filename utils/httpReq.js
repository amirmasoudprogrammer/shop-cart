// const fetchdata = async () => {
//     const res = await fetch("data.json")
//     const nexjason = await res.json();
//     return nexjason
// }
//
// export {fetchdata}


const fetchdata = async () => {
    const resp = await fetch("data.json")
    const jason = await resp.json()
   return jason
}

export {fetchdata}