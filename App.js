const musicDetails = {};
const songList = [];

const container = document.getElementById("container");

async function getAllMusic() {

const res = await fetch("https://api.napster.com/v2.1/tracks/top?apikey=YjhkMzQzMmQtOTk3Ny00NDJkLTljZjMtYjQ5Y2NiZDM5OTAz");

const data = await res.json();

// console.log("Music", data);

const musicContainer = document.createElement("div");
 musicContainer.setAttribute("id","musicContainer");


const music = data.tracks;

music.map((e) => {

const containerDiv = document.createElement("div");
 

const songName = document.createElement("p");
songName.setAttribute("id","song");
songName.innerHTML= e.name;
  songList.push(e.name);

// const id=document.createElement("data-track-id");

containerDiv.setAttribute("class","div1");

const img=document.createElement("img")

img.src=`http://direct.rhapsody.com/imageserver/v2/albums/${e.albumId}/images/300x300.jpg`;

containerDiv.append(img);

const audioContainer = document.createElement("audio");

audioContainer.setAttribute("controls","true")

const previewUrl = e.previewURL;

// audioContainer.src = previewUrl;

audioContainer.id="music";

musicContainer.appendChild(audioContainer);

const source=document.createElement("source");

source.src=e.previewURL;

// console.log(e);

audioContainer.appendChild(source);


containerDiv.append(songName, audioContainer);

container.append(containerDiv);


});

container.appendChild(musicContainer)

}

function PlayMusic(data) {

const audioContainer = document.createElement("audio");

const previewUrl = data;

;

audioContainer.id="music";

musicContainer.appendChild(audioContainer);

const source=document.createElement("source");

source.src=z;

// console.log(e);

audioContainer.appendChild(source);

}

getAllMusic();


// search

function searchMusic(){
    var container= document.getElementById("container").querySelectorAll(".div1");
    var searchString = document.getElementById("sea").value;
    if(searchString=="") {
      for(i=0;i<container.length;i++) {
          container[i].style.display = "block";
      }
    }
    const filteredSong = songList.filter(song => song.includes(searchString));
    // console.log(filteredSong);
    // console.log(container.length);
    for(i=0;i<container.length;i++) {
        const p = container[i].getElementsByTagName('p');
        // console.log(p[0].innerText);
        if(!p[0].innerText.includes(searchString)) {
          container[i].style.display = "none"; 
        }
    }
}

