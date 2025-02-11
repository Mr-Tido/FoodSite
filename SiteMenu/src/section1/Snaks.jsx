import classes from './Snaks.module.css'
import PhotoMenu from "./assets/Photo1.png"



export default function Snaks(){
    return(
        <>
        <section>
            <div className={classes.FoodContainer}>
                <div>
                    <img src={PhotoMenu} className={classes.FoodPhoto} alt="" />
                </div>
                <div>
                    
                <ul>
                    <h1>Закуски</h1>
                        <li>
                            <div>
                                <p>Брускетта с килькой <span>86 гр.</span></p>
                                <p>хлеб ржаной, крем свекольный, лук маринованный, килька, зелень (8бгр.)</p>
                            </div>
                            <p></p>
                        </li>
                        <li>
                            <p>Брускетта с красной рыбой <span>115 гр.</span> </p>
                            <p>багет, крем трюфельный, огурец свежий, красная рыба, сыр пармезан</p>
                        </li>
                        <li>
                            <p>Брускетта с ростбифом <span>125 гр.</span></p>
                            <p>багет, крем трюфельный, огурец свежий, красная рыба, сыр пармезан</p>
                        </li>
                        <li>
                            <p>Брускетта с томатами <span>159 гр.</span> </p>
                            <p>багет, сыр фета, томаты, лук красный, каперсы, соус</p>
                        </li>
                        <li>
                            <p>Рийет из красной рыбы на брускетте <span>200 гр.</span> </p>
                            <p>красная рыба, сыр творожный, сметана, соус соевый, соус устричный, огурец, багет</p>
                        </li>
                        <li>
                            <p>Рийет из карпаччо на брускетте <span>200 гр.</span></p>
                            <p>багет, карпаччо, орех грецкий, сыр творожный, чеснок, майонез, зелень, специи</p>
                        </li>
                        <li>
                            <p>Рийет из 4 вида сыра на брускетте <span>180 гр.</span></p>
                            <p>багет, сыр моцарелла, чердер, дор-блю, гауда, оливки или маслины, соус песто, микрозелень</p>
                        </li>
                        <li>
                            <p>Рийет куриный на брускетте <span>170 гр.</span></p>
                            <p>багет, филе куриное су-вид, лук репчатый, морковь, сыр творожный</p>
                        </li>
                        <li>
                            <p>Тартар из молодого бычка <span>137 гр.</span> </p>
                            <p>с кремом из пармезана и с красной икрой мраморная говядина, крем из пармезана, каперсы,корнишон, соус варчесер
                            соус табаско, зернистая горчица, масло оливковое, спонж мятный, перепилиное яйцо </p>
                        </li>
                        <li>
                            <p>Строганина из пеламиды <span>300 гр.</span></p>
                            <p>пеламида, лимон, хлеб ржаной, лук красный маринованный, заправка пикантная</p>
                        </li>
                        <li>
                            <p>Закуска солений из бочки <span>320 гр.</span></p>
                            <p>огурец морин-й, капуста квашеная, помидоры маринованные, зелень, масло растительное</p>
                        </li>
                        <li>
                            <p>Тартар из красной рыбы <span>175 гр.</span></p>
                            <p>рыба красная, лимон, апельсин, крем фета, бриошь</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}
