import p8 from "../../images/p8.jpg"
import criminalcase from '../../images/buttons/criminal_case.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./3.css"

function Third(){
    const [IsPopupOpened, setIsPopupOpened] = useState(false)
    const navigate = useNavigate();

    const showPopup = () => {
        const popup = document.querySelector(".criminal-case-modal")
        if (IsPopupOpened === false) {
            popup.classList.add("popup-show")
            setIsPopupOpened(true);
        } else {
            popup.classList.remove("popup-show");
            setIsPopupOpened(false);
        }
    }

    const nextPage = () => {
        navigate("/4");
    }
    const nextPage1 = () => {
        navigate("/3e");
    }

    return(
        <div>
            <a title='Материалы дела'>
                <img alt='Материалы дела' className='criminal-case' src={criminalcase} onClick={showPopup}/>
                <div className='criminal-case-modal'>
                    <a href='https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view' target="_blank" rel='noopener noreferrer'>
                       <button>Заявление о преступлении</button> 
                    </a>
                </div>
            </a>
            <img src={p8} alt="2" width="640px" height="542px"/>
            <div className="button-cloud" style={{position: "absolute", top: "83px", left: "calc(50% - 280px)", width: "200px", height: "70px"}} onClick={nextPage}></div>
            <div className="button-cloud" style={{position: "absolute", top: "87px", left: "calc(50% + 10px)", width: "240px", height: "77px"}} onClick={nextPage}></div>
            <div className="button-cloud" style={{position: "absolute", top: "205px", left: "calc(50% - 285px)", width: "230px", height: "85px"}} onClick={nextPage1}></div>
            <div className="button-cloud" style={{position: "absolute", top: "250px", left: "calc(50% - 10px)", width: "270px", height: "85px"}} onClick={nextPage1}></div>      
        </div>
    )
}
export default Third;