
import { AudioFile } from '@/utils/audioUtils';

// Sample audio files - replace URLs with your actual audio file URLs
export const audioFiles: AudioFile[] = [
  {
    id: 1,
    filename: "sample1.mp3",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    title: "Bell Ringing"
  },
  {
    id: 2,
    filename: "sample2.mp3", 
    url: "https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav",
    title: "Buzzer Sound"
  },
  {
    id: 3,
    filename: "sample3.mp3",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    title: "Ocean Waves"
  },
  {
    id: 4,
    filename: "sample4.mp3",
    url: "https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav", 
    title: "Forest Ambience"
  },
  {
    id: 5,
    filename: "sample5.mp3",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    title: "Rain Sounds"
  },
  {
    id: 6,
    filename: "sample6.mp3",
    url: "https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav",
    title: "City Traffic"
  },
  {
    id: 7,
    filename: "sample7.mp3",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    title: "Bird Songs"
  },
  {
    id: 8,
    filename: "sample8.mp3", 
    url: "https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav",
    title: "Thunderstorm"
  },
  {
    id: 9,
    filename: "sample9.mp3",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    title: "Cafe Atmosphere"
  },
  {
    id: 10,
    filename: "sample10.mp3",
    url: "https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav",
    title: "Wind Chimes"
  },
  {
    id: 11,
    filename: "sample11.mp3",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    title: "Fireplace Crackling"
  },
  {
    id: 12,
    filename: "sample12.mp3",
    url: "https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav",
    title: "Water Fountain"
  },
  {
    id: 13,
    filename: "sample13.mp3",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    title: "Night Crickets"
  },
  {
    id: 14,
    filename: "sample14.mp3",
    url: "https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav",
    title: "Keyboard Typing"
  },
  {
    id: 15,
    filename: "sample15.mp3",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    title: "Clock Ticking"
  },
  {
    id: 16,
    filename: "sample16.mp3",
    url: "https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav",
    title: "Paper Rustling"
  },
  {
    id: 17,
    filename: "sample17.mp3",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    title: "Pen Clicking"
  },
  {
    id: 18,
    filename: "sample18.mp3",
    url: "https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav",
    title: "Door Opening"
  },
  {
    id: 19,
    filename: "sample19.mp3",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    title: "Footsteps"
  },
  {
    id: 20,
    filename: "sample20.mp3",
    url: "https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav",
    title: "Phone Ringing"
  }
];

// Sample transcripts - replace with actual AI-generated transcripts for your audio files
export const transcripts: Record<number, string> = {
  1: "The sound of a traditional bell ringing creates a clear, resonant tone that echoes with metallic clarity. This particular bell produces a sustained note that gradually fades, creating a peaceful and meditative atmosphere.",
  2: "A sharp, electronic buzzer sound that signals failure or incorrect input. The tone is deliberately harsh and attention-grabbing, designed to immediately alert the listener to an error condition or negative result.",
  3: "Gentle ocean waves rhythmically washing against the shore, creating a soothing white noise effect. The consistent ebb and flow of water provides a natural, calming soundscape perfect for relaxation and meditation.",
  4: "Rich forest ambience featuring a complex mix of natural sounds including distant bird calls, rustling leaves, and the subtle creaking of tree branches swaying in a gentle breeze through the woodland canopy.",
  5: "Steady rainfall creating a consistent patter against various surfaces. The rain produces a white noise effect with occasional variations in intensity, providing a naturally soothing and sleep-inducing audio environment.",
  6: "Urban soundscape capturing the bustling energy of city life with vehicles passing, distant honking, and the general hum of metropolitan activity creating a dynamic and energetic audio backdrop.",
  7: "A chorus of various bird species creating a natural symphony with chirping, tweeting, and melodic calls. This dawn chorus represents the peaceful awakening of nature with overlapping bird songs.",
  8: "Dramatic thunderstorm audio featuring rumbling thunder, crackling lightning, and heavy rainfall. The storm creates an intense natural symphony with varying dynamics from gentle rain to powerful thunder claps.",
  9: "Warm cafe atmosphere with the gentle murmur of conversation, clinking of cups and saucers, and the subtle background noise of coffee preparation creating a cozy, social environment.",
  10: "Delicate wind chimes producing soft, melodic tones as they sway in a gentle breeze. The metallic and wooden chimes create random, peaceful melodies that promote relaxation and tranquility.",
  11: "Crackling fireplace with the warm sounds of burning wood, occasional pops and snaps, and the gentle roar of flames. This creates a cozy, homey atmosphere perfect for relaxation and comfort.",
  12: "Peaceful water fountain with the continuous sound of flowing water creating gentle splashes and bubbles. The water movement produces a soothing, meditative quality ideal for stress relief.",
  13: "Evening cricket chorus creating a natural nighttime soundscape. The rhythmic chirping of various cricket species forms a peaceful, rural ambience perfect for sleep and relaxation.",
  14: "Rhythmic keyboard typing sounds capturing the steady clicking of computer keys during focused work. The mechanical keyboard produces crisp, satisfying clicks that represent productivity and concentration.",
  15: "Classic clock ticking with a steady, mechanical rhythm. Each tick marks the passage of time with precision, creating a hypnotic and somewhat nostalgic audio pattern that can be both calming and contemplative.",
  16: "Paper rustling sounds created by handling documents, turning pages, or shuffling papers. The crisp, dry texture of paper produces subtle but distinct audio textures that evoke office or study environments.",
  17: "Repetitive pen clicking sounds made by pressing and releasing a ballpoint pen mechanism. This common fidgeting sound produces sharp, plastic clicks that many find satisfying or focus-enhancing.",
  18: "Door opening with the characteristic creak of hinges and the solid sound of a wooden door swinging open. The audio captures both the mechanical movement and the spatial acoustics of the action.",
  19: "Footsteps walking across different surfaces, creating a rhythmic pattern of heel and toe contact. The gait produces a steady percussion that suggests purposeful movement through various environments.",
  20: "Traditional telephone ringing with the classic metallic bell sound. The persistent, alternating tone is designed to be attention-grabbing and urgent, representing communication and connection in the pre-digital era."
};
