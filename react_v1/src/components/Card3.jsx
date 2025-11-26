function Card3(props){
return(
    <div className={styles.card}>
        <img src ={props.src} alt ={props.alt}/>
        <p> {props.name} </p>
        <p> {props.description} </p>
        <p className={styles.card_price}>{props.price}</p>
    </div>
);
}
export default Card3;