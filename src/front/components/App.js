import React from 'react';
import Images from './images/index'
import { IMAGE_DIRECTORY } from '../constants/consants';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.getImages = this.getImages.bind(this);
    }

    getImages() {

        console.log('IMAGE DIRECTORY: ' + IMAGE_DIRETORY);

        return [
            {name: IMAGE_DIRECTORY + '/first-order-star-wars-wallpaper-1920x1280-2208_38.jpg'},
            {name: IMAGE_DIRECTORY + '/o151129_a0c98.jpg'},
            {name: IMAGE_DIRECTORY + '/star_wars_16-wallpaper-1920x1080.jpg'},
            {name: IMAGE_DIRECTORY + '/star_wars_battlefront_3-wallpaper-1920x1080.jpg'},
            {name: IMAGE_DIRECTORY + '/star-wars-episode-7-vii-the-force-awakens-wallpaper-hd-1920x1280-282672.jpg'}
        ]
    }

)

    render() {
        return (<div><Header /></div> /
        <div><Images images={this.getImages()} /></div>);
    }
}

export default App;


