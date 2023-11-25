fetch('https://reqres.in/api/users')
.then((res) => {
    if(res.ok){
        return res.json();
    }else{
        console.log("Error");
    }
})
.then((data) => console.log(data.data))
.catch((err) => console.log(err))