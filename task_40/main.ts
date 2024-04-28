interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };
    
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    
    return album;
}

// Create three different albums
const album1 = makeAlbum("Adele", "Album 25");
const album2 = makeAlbum("Kendrick Lamar", "DAMN", 12); // With tracks
const album3 = makeAlbum("Taylor Swift", "Folklore");

// Print each album
console.log(album1);
console.log(album2);
console.log(album3);