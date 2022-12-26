function hear() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/GOdOq1qwo/model.json", modelLoaded)
}

function modelLoaded() {
    console.log("Model is OK")
    classifier.classify(gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("label").innerHTML = result[0].label
        document.getElementById("confidence").innerHTML = (result[0].confidence*100).toFixed(2) + "%"
        if (result[0].label == "Clap") {
            document.getElementById("one").src = "aliens-01.gif"
            document.getElementById("two").src = "aliens-02.png"
            document.getElementById("three").src = "aliens-03.png"
            document.getElementById("four").src = "aliens-04.png"
        } else if (result[0].label == "Snap") {
            document.getElementById("one").src = "aliens-01.png"
            document.getElementById("two").src = "aliens-02.gif"
            document.getElementById("three").src = "aliens-03.png"
            document.getElementById("four").src = "aliens-04.png"
        } else if (result[0].label == "Bell") {
            document.getElementById("one").src = "aliens-01.png"
            document.getElementById("two").src = "aliens-02.png"
            document.getElementById("three").src = "aliens-03.gif"
            document.getElementById("four").src = "aliens-04.png"
        } else if (result[0].label == "Background Noise") {
            document.getElementById("one").src = "aliens-01.png"
            document.getElementById("two").src = "aliens-02.png"
            document.getElementById("three").src = "aliens-03.png"
            document.getElementById("four").src = "aliens-04.gif"
        }
    }
}