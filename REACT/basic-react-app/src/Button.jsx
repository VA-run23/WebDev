function doSomething(evnt){
    console.log("Button clicked");
    console.log(evnt)
}

function over(){
    console.log("Byee!")
}
export default function Button(){
    return(
        <div>
            <button onClick={doSomething}>Click me</button>
            <p onMouseOver={over}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga inventore praesentium incidunt porro temporibus facere maxime, nobis animi totam doloremque quasi, atque soluta reiciendis sunt? Accusamus unde delectus aut.</p>
        </div>
        // onClick={doSomething}//This is right 
        // onClick={doSomething()}//this is wrong as it calls the function immediately
    )
}