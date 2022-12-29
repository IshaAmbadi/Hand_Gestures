Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Kh4bK9FVi/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded');
}


function check_emotion() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        document.getElementById("result_emotion_name1").innerHTML = results[0].label;

        if (results[0].label == "fist") {
            document.getElementById("update_emoji1").innerHTML = "&#129308;";
        }
        if (results[0].label == "rock") {
            document.getElementById("update_emoji1").innerHTML = "&#129304;";
        }
        if (results[0].label == "highfive") {
            document.getElementById("update_emoji1").innerHTML = "&#129306;";
        }

    }
}