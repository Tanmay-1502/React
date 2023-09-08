let counter ={
    count:1,
    setCount: function(x){
        this.count=this.count+x
    }
}

let {count,setCount} =counter
console.log(count)

setCount(5)

console.log(counter.count)