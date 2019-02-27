import React, { Component } from "react";
import * as faceapi from "face-api.js";
import { DefaultPlayer as Video } from 'react-html5video';


export default class FaceRecognition extends Component {
    constructor() {
        super();
    }

    ////////////////////////// A few helper functions ///////////////////////////////////////////   

    resizeCanvasAndResults(dimensions, canvas, results) {
        const { width, height } = dimensions instanceof HTMLVideoElement
            ? faceapi.getMediaDimensions(dimensions)
            : dimensions
        canvas.width = width
        canvas.height = height

        return results.map(res => res.forSize(width, height))
    };


    drawDetections(dimensions, canvas, detections) {
        const resizedDetections = this.resizeCanvasAndResults(dimensions, canvas, detections)
        faceapi.drawDetection(canvas, resizedDetections)
    };


    drawLandmarks(dimensions, canvas, results, withBoxes = true) {
        const resizedResults = this.resizeCanvasAndResults(dimensions, canvas, results)
        if (withBoxes) {
            faceapi.drawDetection(canvas, resizedResults.map(det => det.detection))
        }
        const faceLandmarks = resizedResults.map(det => det.landmarks)
        const drawLandmarksOptions = { lineWidth: 2, drawLines: true, color: 'green' }
        faceapi.drawLandmarks(canvas, faceLandmarks, drawLandmarksOptions)
    };



    ////////////////////////// The 2 Main functions ///////////////////////////////////////////  

    onPlayFuntion(p) {
        this.onPlay(p);
    }

    async onPlay() {
        const videoEl = document.getElementById('inputVideo')
        const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 128, scoreThreshold: 0.3 })


        var result = await faceapi.detectSingleFace(videoEl, options).withFaceLandmarks(true)
        if (result) {
            this.drawLandmarks(videoEl, document.getElementById('overlay'), [result], true)

            // Just printing the first of 68 face landmark x and y 
            document.getElementById('myDiv01').innerHTML = 'First of 68 face landmarks, x: ' +
                Math.round(result._unshiftedLandmarks._positions[0]._x) + ', y: ' +
                Math.round(result._unshiftedLandmarks._positions[0]._y) + '<br>'

        }

        setTimeout(() => this.onPlay())
    };

    async run() {
    // run = (e) => {
    //     e.preventDefault();
        // await faceapi.loadTinyFaceDetectorModel('https://hpssjellis.github.io/face-api.js-for-beginners/')
        // await faceapi.loadFaceLandmarkTinyModel('https://hpssjellis.github.io/face-api.js-for-beginners/')
        await faceapi.loadTinyFaceDetectorModel('https://www.rocksetta.com/tensorflowjs/saved-models/face-api-js/')
        await faceapi.loadFaceLandmarkTinyModel('https://www.rocksetta.com/tensorflowjs/saved-models/face-api-js/')

        const stream = await navigator.mediaDevices.getUserMedia({ video: {} })
        const videoEl = document.getElementById('inputVideo')
        videoEl.srcObject = stream
    };

    runFunction() {
        this.run();
    }

    // export {resizeCanvasAndResults, drawDetections, drawLandmarks,onPlay, run}

    render() {
        return (
            <div>
                <p>Test</p>
                <script src="https://www.rocksetta.com/tensorflowjs/saved-models/face-api-js/face-api.js"></script>

                <div id="myDiv01">...</div><br />

                <input type="button" value="run" onClick={this.runFunction()} />
                {/* <input type="button" value="run" onClick={(e) => this.run(e)} /> */}
                <Video onPlay={this.onPlayFuntion(this)} id="inputVideo" autoPlay muted width="640" height="480" ></Video><br />
                {/* <video onplay="onPlay(this)" id="inputVideo" autoplay muted width="640" height="480" style=" border: 1px solid #ddd;"></video><br /> */}
                <canvas id="overlay" width="640" height="480"  ></canvas><br />
                {/* <canvas id="overlay" width="640" height="480" style="position:relative; top:-487px; border: 1px solid #ddd;" ></canvas><br /> */}
            </div>)
    }
}