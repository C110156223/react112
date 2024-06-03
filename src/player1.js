
import { Player,BigPlayButton,ControlBar,PlaybackRateMenuButton,ReplayControl,ForwardControl } from "video-react";
import 'video-react/dist/video-react.css'

export default function Player1(){
    return(
        <Player 
          fluid={false}
          width={600}
          height={400}
          muted={true}
          autoPlay={false}
          poster="https://upload.wikimedia.org/wikipedia/commons/6/69/Sintel_Cover_Durian_Project.jpg"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
          <BigPlayButton position="center"/>
          <ControlBar autoHide={true} autoHideTime={5000}>
            <PlaybackRateMenuButton rates={[5,3,2,1,0.5,0.1]}/>
            <ReplayControl seconds={5} order={2.1}/>
            <ReplayControl seconds={10} order={2.2}/>

            <ForwardControl seconds={5} order={3.1}/>
            <ForwardControl seconds={10} order={3.2}/>
            <ForwardControl seconds={30} order={3.3}/>
          </ControlBar>
        </Player>
    );
}