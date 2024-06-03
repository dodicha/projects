
let btn = document.getElementsByTagName('button');
let machine;
let material;

 async function machineClick(button){
    for(let i = 0; i <btn.length/2; i++){
        btn[i].style.color = 'black';
        btn[i].style.backgroundColor = 'white'
    }
    button.style.color = '#f0f8ff';
    button.style.backgroundColor = '#46a0ef';
    machine = button.id;
    return machine;

}

async function materialClick(button){
    for(let i = 6; i < btn.length; i++){
        btn[i].style.color = 'black';
        btn[i].style.backgroundColor = 'white'
    }
    button.style.color = '#f0f8ff';
    button.style.backgroundColor = '#46a0ef';
    material = button.id;
    return material;
}


async function main(){
    if(machine != undefined && material != undefined){
        let mainObj = (await fetch('http://127.0.0.1:5500/api/api.json'));
        mainObj = await mainObj.json();
        // console.log(mainObj); working !
        async function textContent(cklickedMachine, clickedmMaterial){

            let cutParent = document.getElementById("cut");
            let h4 = cutParent.querySelectorAll('h4');
            h4.forEach(Element => {
                Element.remove();
            });

            let rasterParent = document.getElementById("raster");
            let el = rasterParent.querySelectorAll("h4");
            el.forEach(Element =>{
                Element.remove();
            })



            let thicknessObj = mainObj.machines[cklickedMachine].materials[clickedmMaterial].thickness;
            milimeters = Object.keys(thicknessObj); // to have an accses to thicknesses.
            for(let i = 0; i < milimeters.length; i++){
                let type = document.createElement("h4");
                if(milimeters[i] != 'ნებისმიერი'){
                    type.textContent = `${milimeters[i]} სისქის მასალისთვის`;
                    let speed = document.createElement("h4");
                    speed.textContent = `Speed: ${thicknessObj[milimeters[i]].cuting.speed}`;
                    let frecuency = document.createElement("h4");
                    frecuency.textContent = `Frequency: ${thicknessObj[milimeters[i]].cuting.frecuency}`;
                    let power = document.createElement("h4");
                    power.textContent = `Power: ${thicknessObj[milimeters[i]].cuting.power}`
                    document.getElementById("cut").appendChild(type).appendChild(frecuency).appendChild(power).appendChild(speed);
                }else{
                    type.textContent = `დაჭრა შეუძლებელია`;
                    document.getElementById("cut").appendChild(type)
                }
                
            }
            let rasterObj = mainObj.machines[cklickedMachine].materials[clickedmMaterial].rastering;
            let rasterDpi = rasterObj.DPI;
            
            let rasterSpeed = rasterObj.speed;
            let rasterPower = rasterObj.power;
            let dpi = document.createElement("h4");
            dpi.textContent = `DPI : ${rasterDpi}`;
            let power = document.createElement("h4");
            power.textContent = `Power: ${rasterPower}`;
            let speed = document.createElement("h4");
            speed.textContent = `Speed: ${rasterSpeed}`;
            document.getElementById("raster").appendChild(dpi).appendChild(power).appendChild(speed);

        }
        await textContent(machine, material);
    }

    
}









