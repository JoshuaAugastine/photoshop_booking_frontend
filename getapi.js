const Remark = async() => {
    let res = await fetch("http://localhost:6003/booking");
    return res
    }
    
    export default Remark;
