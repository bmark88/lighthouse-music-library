const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function () {
    const lp = this.playlists;

    for (let key in this["playlists"]) {
      const id = lp[key].id;
      const name = lp[key].name;
      const tracksLength = lp[key].tracks.length;

      console.log(`${id}: ${name} - ${tracksLength} Tracks`);
    }
  },
  printTracks: function () {
    const t = this.tracks;

    for (let key in this["tracks"]) {
      const id = t[key].id
      const name = t[key].name;
      const artist = t[key].artist;
      const album = t[key].album;

      console.log(`${id}: ${name} by ${artist} (${album})`);
    }
  },
  printPlaylist: function (playlistId) {
    const id = this.playlists[playlistId].id
    const name = this.playlists[playlistId].name
    const tracks = this.playlists[playlistId].tracks

    console.log(`${id}: ${name} - ${tracks.length} tracks`)
    for (let keyTrack of tracks) {
      const name = this.tracks[keyTrack].name;
      const artist = this.tracks[keyTrack].artist;
      const album = this.tracks[keyTrack].album;
      console.log(`${keyTrack}: ${name} by ${artist} (${album})`);
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId)

    console.log(this.playlists[playlistId].tracks)
  },
  addTrack: function (name, artist, album) {
    const newTrack = generateUid();

    if (!this.tracks.hasOwnProperty(newTrack)) {
      // console.log(newTrack);
      this.tracks[newTrack] = {
        id: newTrack,
        name: name,
        artist: artist,
        album: album
      };
    }
    console.log(this.tracks);
  },
  addPlaylist: function (name) {
    if (!this.playlists[name]) {
      this.playlists[name] = {
        id: name,
        name: "Custom Playlist",
        tracks: ["t01", "t03"]
      }
    }

    console.log(this.playlists);
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {
  const lp = library.playlists;

  for (let key in library["playlists"]) {
    const id = lp[key].id;
    const name = lp[key].name;
    const tracksLength = lp[key].tracks.length;

    console.log(`${id}: ${name} - ${tracksLength} Tracks`);
  }
}


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
  const t = library.tracks;

  for (let key in library["tracks"]) {
    const id = t[key].id
    const name = t[key].name;
    const artist = t[key].artist;
    const album = t[key].album;

    console.log(`${id}: ${name} by ${artist} (${album})`);
  }
}


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId) {
  const id = library.playlists[playlistId].id
  const name = library.playlists[playlistId].name
  const tracks = library.playlists[playlistId].tracks

  console.log(`${id}: ${name} - ${tracks.length} tracks`)

  for (let keyTrack of tracks) {
    const name = library.tracks[keyTrack].name;
    const artist = library.tracks[keyTrack].artist;
    const album = library.tracks[keyTrack].album;
    console.log(`${keyTrack}: ${name} by ${artist} (${album})`);
  }
}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId)

  console.log(library.playlists[playlistId].tracks)
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function (name, artist, album) {
  const newTrack = generateUid();

  if (!library.tracks.hasOwnProperty(newTrack)) {
    // console.log(newTrack);
    library.tracks[newTrack] = {
      id: newTrack,
      name: name,
      artist: artist,
      album: album
    };
  }

  return library;
}


// adds a playlist to the library
const addPlaylist = function (name) {
  if (!library.playlists[name]) {
    library.playlists[name] = {
      id: name,
      name: "Custom Playlist",
      tracks: ["t01", "t03"]
    }
  }

  console.log(library.playlists);
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

}


// printPlaylists(library);
// printTracks(library);
// printPlaylist('p01');
// addTrackToPlaylist('t03', 'p01');
// addTrack('🔥 Fire Track', 'Eminem', 'Music to Be Murdered By');
// addPlaylist(generateUid());
// printSearchResults(query); // STRETCH WORK

// library.printPlaylists()
// library.printTracks();
// library.printPlaylist('p01');
// library.addTrackToPlaylist('t03', 'p01');
// library.addTrack('🔥 Fire Track', 'Eminem', 'Music to Be Murdered By');
// library.addPlaylist(generateUid());