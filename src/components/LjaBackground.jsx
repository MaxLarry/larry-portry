import background from '../assets/img/bg-lja.mp4'


function LjaBackground(){

    return(
        <div className="overlay lja-background no-select" data-scroll data-scroll-speed="-3" data-scroll-position="top">
            <video autoPlay loop muted plays-inline="true" id="background-video">
                <source src={background} type="video/mp4"/>
            </video>
        </div>

    );
}

export default LjaBackground