
export default function HeadOfProduction (){
    return (
        <div>
            Head Of Production
            <button
            onClick={()=>{
                console.log(localStorage.getItem('orderData'));
            }}
            ></button>
        </div>
    )
}