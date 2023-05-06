import { preferencesViewModel } from '@/services/preferencesViewModel';
import playlist from '../musicAssets';
import { useEffect } from 'react';

export const BgMusic = ()=> {
    const {soundMode} = preferencesViewModel;
    let {currentSong, audio, state} = preferencesViewModel

    // useEffect(()=>{
    //     console.log(soundMode)
    //     if(soundMode){
    //         handleClick()
    //     }
    // },[])

    const handleClick = ()=>{
        currentSong = 0;
        if (state.play && audio) {
            audio.pause(); 
          } 
        else{
           playcurrent();
        }
        state.play = !state.play
        state.pause = !state.pause
    }

    const getCurr = ()=>{
        if (currentSong < length) {
            currentSong+=1
            return currentSong-1
        }else{
            currentSong=0
            return currentSong
        }
    }
    const playcurrent = ()=>{
        audio = new Audio(playlist[getCurr()]);
        audio.addEventListener("ended", () => {
            playcurrent
        });
        
        let playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(function (error) {
            error = 'the next song is not available'
            console.log(error)
            });
        }
    }
    
    return (
    <div>
        <button onClick={handleClick}>music</button>
    </div>
  )
}


