import React from 'react';
import Draggable from 'react-draggable';
import sota_logo from './sota.svg';
import dance from './7aJt.gif';
import sprite from './sprite.jpg';
import './Main.css'

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingText: true,
      showingVideo: true,
      showingTile: true,
      showingMusic: true,
    };
  }

  render () {
    const text = this.state.showingText ? <TextBox /> : '';
    const video = this.state.showingVideo ? <VideoBox /> : '';
    const tile = this.state.showingTile ? <Tile /> : '';
    const music = this.state.showingMusic ? <Music /> : '';
    const finale = !this.state.showingText && !this.state.showingVideo && !this.state.showingTile && !this.state.showingMusic ? <Finale /> : '';

    return (
      <div>
          <div>
            <img src={sota_logo} class="web-logo" alt="logo" />
          </div>
          <div>
          {text}
          {video}
          {tile}
          {music}
          {finale}
          </div>
          <div>
              <td>
                <element id="button" onClick={() => this.setState({ showingText: !this.state.showingText })}><span class="title">Hello</span></element>
              </td>
                <div>&nbsp;</div> 
              <td>
                <element id="button" onClick={() => this.setState({ showingTile: !this.state.showingTile })}><span class="title">Message</span></element>
              </td>
                <div>&nbsp;</div>
              <td>
                <element id="button" onClick={() => this.setState({ showingMusic: !this.state.showingMusic })}><span class="title">Music</span></element>
              </td>
                <div>&nbsp;</div>
              <td>
                <element id="button" onClick={() => this.setState({ showingVideo: !this.state.showingVideo })}><span class="title">Video</span></element>
              </td>  
                <div>&nbsp;</div>
              <element id="button" onClick={() => this.setState({
                showingVideo: true,
                showingText: true,
                showingTile: true,
                showingMusic: true,
              })}
              ><span class="title">Reset</span></element>
          </div>
      </div>
    );
  }
}

const TextBox = () => {
    return (
      <Draggable defaultPosition={{x: 682, y: 0}}>
        <div className="box">
        <span class="title">Hello</span>
          <p>I'm Sota, a 22-year-old software engineer from Kyoto. Because the product that makes the world happy is under development, I share with you my favorite music, video and drink.</p>
          <p>*Cards are draggable.</p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/SotaMakino">Github</a>
          &nbsp;
          <span class="slash">/</span>
          &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://qiita.com/SotaMakino">Qiita</a> 
          &nbsp;
          <span class="slash">/</span>
          &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CooIPool">Twitter</a> 
          &nbsp;
          <span class="slash">/</span>
          &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://filmarks.com/users/chaka_poko">Filmarks</a> 
        </div>
      </Draggable>
    );
}

const VideoBox = () => {
    return (
      <Draggable defaultPosition={{x: 440, y: 120}} >
        <div className="boxVideo">
        <span class="title">Video</span>
          <p>
            <iframe title="unique" width="560" height="315" src="https://www.youtube.com/embed/XawA7O46yJM?rel=0&autoplay=1&modestbranding=1&?showinfo=0&mute=1&loop=1" frameborder="0" allow="autoplay;"></iframe>
          </p>
        </div>
      </Draggable>
  );
}

const Tile = () => {
    return (
      <Draggable defaultPosition={{x: 587, y: 40}}>
        <div className="tile">
        <span class="title">Message</span>
          <div>
          <img src={sprite} alt="loading..." class="sprite" />
          </div>
        </div>
      </Draggable>
    )
}

const Music = () => {
  return (
    <Draggable defaultPosition={{x: 510, y: 80}}>
      <div className="music">
      <span class="title">Music</span>
        <p>
        <iframe src="https://open.spotify.com/embed/track/76o6oYctB0kH2FWXOG8pza" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </p>
      </div>
    </Draggable>
  )
}

const Finale = () => {
  return (
    <div class="dance">
      <h1>Stop Dancing!</h1>
      <img src={dance} alt="loading..." />
    </div>
  )
}