export default function Profile(){
    return(
        <Avatar
            person={{name:'Capoo',imageID:'1bx5QH6'}}
            size={200}
        />
    );
}

//way1
function Avatar({person,size}){
    return(
        <div>
            <figure>
                <img src="https://stickershop.line-scdn.net/stickershop/v1/product/21587456/LINEStorePC/main.png?v=1"
                    alt="capoo"
                    width={size}
                />
                <figcaption>
                    name:{person.name} <br/>
                    imageID:{person.imageID} <br/>
                </figcaption>
            </figure>
        </div>
    );
}