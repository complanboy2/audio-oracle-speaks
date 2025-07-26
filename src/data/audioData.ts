import { AudioFile } from '@/utils/audioUtils';

// Sample audio files - replace URLs with your actual audio file URLs
export const audioFiles: AudioFile[] = [
  {
    id: 1,
    filename: "sample1.mp3",
    url: "./audio/sample1.mp3",
    title: "Bell Ringing"
  },
  {
    id: 2,
    filename: "sample2.mp3", 
    url: "./audio/sample2.mp3",
    title: "Buzzer Sound"
  },
  {
    id: 3,
    filename: "sample3.mp3",
    url: "./audio/sample3.mp3",
    title: "Ocean Waves"
  },
  {
    id: 4,
    filename: "sample4.mp3",
    url: "./audio/sample4.mp3", 
    title: "Forest Ambience"
  },
  {
    id: 5,
    filename: "sample5.mp3",
    url: "./audio/sample5.mp3",
    title: "Rain Sounds"
  },
  {
    id: 6,
    filename: "sample6.mp3",
    url: "./audio/sample6.mp3",
    title: "City Traffic"
  },
  {
    id: 7,
    filename: "sample7.mp3",
    url: "./audio/sample7.mp3",
    title: "Bird Songs"
  },
  {
    id: 8,
    filename: "sample8.mp3", 
    url: "./audio/sample8.mp3",
    title: "Thunderstorm"
  },
  {
    id: 9,
    filename: "sample9.mp3",
    url: "./audio/sample9.mp3",
    title: "Cafe Atmosphere"
  },
  {
    id: 10,
    filename: "sample10.mp3",
    url: "./audio/sample10.mp3",
    title: "Wind Chimes"
  },
  {
    id: 11,
    filename: "sample11.mp3",
    url: "./audio/sample11.mp3",
    title: "Fireplace Crackling"
  },
  {
    id: 12,
    filename: "sample12.mp3",
    url: "./audio/sample12.mp3",
    title: "Water Fountain"
  },
  {
    id: 13,
    filename: "sample13.mp3",
    url: "./audio/sample13.mp3",
    title: "Night Crickets"
  },
  {
    id: 14,
    filename: "sample14.mp3",
    url: "./audio/sample14.mp3",
    title: "Keyboard Typing"
  },
  {
    id: 15,
    filename: "sample15.mp3",
    url: "./audio/sample15.mp3",
    title: "Clock Ticking"
  },
  {
    id: 16,
    filename: "sample16.mp3",
    url: "./audio/sample16.mp3",
    title: "Paper Rustling"
  },
  {
    id: 17,
    filename: "sample17.mp3",
    url: "./audio/sample17.mp3",
    title: "Pen Clicking"
  },
  {
    id: 18,
    filename: "sample18.mp3",
    url: "./audio/sample18.mp3",
    title: "Door Opening"
  },
  {
    id: 19,
    filename: "sample19.mp3",
    url: "./audio/sample19.mp3",
    title: "Footsteps"
  },
  {
    id: 20,
    filename: "sample20.mp3",
    url: "./audio/sample20.mp3",
    title: "Phone Ringing"
  }
];

// Sample transcripts - replace with actual AI-generated transcripts for your audio files
export const transcripts: Record<number, Record<string, string>> = {
  1: {
    en: "The sound of a traditional bell ringing creates a clear, resonant tone that echoes with metallic clarity. This particular bell produces a sustained note that gradually fades, creating a peaceful and meditative atmosphere.",
    te: "సాంప్రదాయిక గంట మోగుడు మెటాలిక్ స్పష్టతతో ప్రతిధ్వనించే స్పష్టమైన, గంభీరమైన టోన్‌ను సృష్టిస్తుంది. ఈ గంట నెమ్మదిగా మసలే స్థిరమైన నోట్‌ను ఉత్పత్తి చేస్తుంది, శాంతియుతమైన మరియు ధ్యానాత్మక వాతావరణాన్ని సృష్టిస్తుంది."
  },
  2: {
    en: "A sharp, electronic buzzer sound that signals failure or incorrect input. The tone is deliberately harsh and attention-grabbing, designed to immediately alert the listener to an error condition or negative result.",
    te: "వైఫల్యం లేదా తప్పు ఇన్‌పుట్‌ను సూచించే పదునైన, ఎలక్ట్రానిక్ బజర్ ధ్వని. ఈ టోన్ ఉద్దేశపూర్వకంగా కఠినమైనది మరియు దృష్టిని ఆకర్షిస్తుంది, లిజనర్‌ను ఎర్రర్ కండిషన్ లేదా ప్రతికూల ఫలితం గురించి వెంటనే హెచ్చరించడానికి రూపొందించబడింది."
  },
  3: {
    en: "Gentle ocean waves rhythmically washing against the shore, creating a soothing white noise effect. The consistent ebb and flow of water provides a natural, calming soundscape perfect for relaxation and meditation.",
    te: "తీరానికి వ్యతిరేకంగా లయబద్ధంగా కొట్టుకుంటున్న సున్నితమైన సముద్ర తరంగాలు, ఓదార్చే తెల్లని శబ్దం ప్రభావాన్ని సృష్టిస్తాయి. నీటి స్థిరమైన ఎబ్ మరియు ఫ్లో విశ్రాంతి మరియు ధ్యానానికి అనువైన సహజమైన, శాంతింపజేసే సౌండ్‌స్కేప్‌ను అందిస్తుంది."
  },
  4: {
    en: "Rich forest ambience featuring a complex mix of natural sounds including distant bird calls, rustling leaves, and the subtle creaking of tree branches swaying in a gentle breeze through the woodland canopy.",
    te: "సుదూర పక్షుల కాలింగ్‌లు, ఆకుల చప్పుడు, మరియు అటవీ పందిరి గుండా సున్నితమైన గాలిలో ఊగుతున్న చెట్ల కొమ్మల సూక్ష్మ చప్పుడుతో సహా సహజ శబ్దాల సంక్లిష్ట మిశ్రమాన్ని కలిగి ఉన్న గొప్ప అటవీ వాతావరణం."
  },
  5: {
    en: "Steady rainfall creating a consistent patter against various surfaces. The rain produces a white noise effect with occasional variations in intensity, providing a naturally soothing and sleep-inducing audio environment.",
    te: "వివిధ ఉపరితలాలకు వ్యతిరేకంగా స్థిరమైన చప్పుడును సృష్టించే స్థిరమైన వర్షపాతం. వర్షం అప్పుడప్పుడు తీవ్రతలో వైవిధ్యాలతో తెల్లని శబ్దం ప్రభావాన్ని ఉత్పత్తి చేస్తుంది, సహజంగా ఓదార్చే మరియు నిద్రలేపే ఆడియో వాతావరణాన్ని అందిస్తుంది."
  },
  6: {
    en: "Urban soundscape capturing the bustling energy of city life with vehicles passing, distant honking, and the general hum of metropolitan activity creating a dynamic and energetic audio backdrop.",
    te: "వాహనాలు దాటడం, దూర హార్న్ మరియు మెట్రోపాలిటన్ కార్యకలాపాల సాధారణ హమ్‌తో నగర జీవితం యొక్క సందడిని సంగ్రహించే పట్టణ సౌండ్‌స్కేప్ డైనమిక్ మరియు శక్తివంతమైన ఆడియో బ్యాక్‌డ్రాప్‌ను సృష్టిస్తుంది."
  },
  7: {
    en: "A chorus of various bird species creating a natural symphony with chirping, tweeting, and melodic calls. This dawn chorus represents the peaceful awakening of nature with overlapping bird songs.",
    te: "చిలిపిగ, ట్వీట్ చేయడం మరియు మెలోడిక్ కాల్‌లతో సహజ సింఫనీని సృష్టించే వివిధ పక్షి జాతుల కోరస్. ఈ డాన్ కోరస్ అతివేగా పక్షుల పాటలతో ప్రకృతి యొక్క శాంతియుత మేల్కొలుపును సూచిస్తుంది."
  },
  8: {
    en: "Dramatic thunderstorm audio featuring rumbling thunder, crackling lightning, and heavy rainfall. The storm creates an intense natural symphony with varying dynamics from gentle rain to powerful thunder claps.",
    te: "గర్జనతో కూడిన ఉరుము, మెరుపు మరియు భారీ వర్షపాతంతో కూడిన నాటకీయ ఉరుములు. తుఫాను సున్నితమైన వర్షం నుండి శక్తివంతమైన ఉరుము చప్పుళ్లకు వైవిధ్యమైన డైనమిక్స్‌తో తీవ్రమైన సహజ సింఫనీని సృష్టిస్తుంది."
  },
  9: {
    en: "Warm cafe atmosphere with the gentle murmur of conversation, clinking of cups and saucers, and the subtle background noise of coffee preparation creating a cozy, social environment.",
    te: "సంభాషణ యొక్క సున్నితమైన గొణుగుడు, కప్పులు మరియు సాసర్ల చప్పుడు, మరియు కాఫీ తయారీ యొక్క సూక్ష్మ బ్యాక్‌గ్రౌండ్ శబ్దంతో వెచ్చని కేఫ్ వాతావరణం హాయిగా, సామాజిక వాతావరణాన్ని సృష్టిస్తుంది."
  },
  10: {
    en: "Delicate wind chimes producing soft, melodic tones as they sway in a gentle breeze. The metallic and wooden chimes create random, peaceful melodies that promote relaxation and tranquility.",
    te: "సున్నితమైన గాలిలో ఊగుతున్నప్పుడు మృదువైన, మెలోడిక్ టోన్లను ఉత్పత్తి చేసే సున్నితమైన గాలి చైమ్స్. మెటాలిక్ మరియు కలప చైమ్స్ విశ్రాంతి మరియు ప్రశాంతతను ప్రోత్సహించే యాదృచ్ఛిక, శాంతియుత మెలోడీలను సృష్టిస్తాయి."
  },
  11: {
    en: "Crackling fireplace with the warm sounds of burning wood, occasional pops and snaps, and the gentle roar of flames. This creates a cozy, homey atmosphere perfect for relaxation and comfort.",
    te: "మండుతున్న కలప యొక్క వెచ్చని శబ్దాలు, అప్పుడప్పుడు పాప్స్ మరియు స్నాప్స్, మరియు మంటల సున్నితమైన గర్జనతో మెరుస్తున్న పొయ్యి. ఇది విశ్రాంతి మరియు సౌకర్యానికి అనువైన హాయిగా, హోమ్లీ వాతావరణాన్ని సృష్టిస్తుంది."
  },
  12: {
    en: "Peaceful water fountain with the continuous sound of flowing water creating gentle splashes and bubbles. The water movement produces a soothing, meditative quality ideal for stress relief.",
    te: "సున్నితమైన స్ప్లాష్‌లు మరియు బుడగలను సృష్టించే నీటి ప్రవాహం యొక్క నిరంతర ధ్వనితో శాంతియుత వాటర్ ఫౌంటెన్. నీటి కదలిక ఒత్తిడి ఉపశమనానికి అనువైన ఓదార్చే, ధ్యానాత్మక గుణాన్ని ఉత్పత్తి చేస్తుంది."
  },
  13: {
    en: "Evening cricket chorus creating a natural nighttime soundscape. The rhythmic chirping of various cricket species forms a peaceful, rural ambience perfect for sleep and relaxation.",
    te: "సహజమైన రాత్రి సౌండ్‌స్కేప్‌ను సృష్టించే సాయంత్రం క్రికెట్ కోరస్. వివిధ క్రికెట్ జాతుల లయబద్ధమైన చిలిపిగ నిద్ర మరియు విశ్రాంతికి అనువైన శాంతియుత, గ్రామీణ వాతావరణాన్ని ఏర్పరుస్తుంది."
  },
  14: {
    en: "Rhythmic keyboard typing sounds capturing the steady clicking of computer keys during focused work. The mechanical keyboard produces crisp, satisfying clicks that represent productivity and concentration.",
    te: "దృష్టి కేంద్రీకరించిన పని సమయంలో కంప్యూటర్ కీల స్థిరమైన క్లిక్‌ను సంగ్రహించే లయబద్ధమైన కీబోర్డ్ టైపింగ్ శబ్దాలు. మెకానికల్ కీబోర్డ్ ఉత్పాదకత మరియు ఏకాగ్రతను సూచించే చురుకైన, సంతృప్తికరమైన క్లిక్‌లను ఉత్పత్తి చేస్తుంది."
  },
  15: {
    en: "Classic clock ticking with a steady, mechanical rhythm. Each tick marks the passage of time with precision, creating a hypnotic and somewhat nostalgic audio pattern that can be both calming and contemplative.",
    te: "స్థిరమైన, యాంత్రిక లయతో క్లాసిక్ గడియారం టిక్కింగ్. ప్రతి టిక్ కాలం యొక్క గమనాన్ని ఖచ్చితత్వంతో గుర్తు చేస్తుంది, హిప్నోటిక్ మరియు కొంతవరకు నోస్టాల్జిక్ ఆడియో నమూనాను సృష్టిస్తుంది, ఇది శాంతింపజేసే మరియు ఆలోచనాత్మకంగా ఉంటుంది."
  },
  16: {
    en: "Paper rustling sounds created by handling documents, turning pages, or shuffling papers. The crisp, dry texture of paper produces subtle but distinct audio textures that evoke office or study environments.",
    te: "డాక్యుమెంట్లను నిర్వహించడం, పేజీలను తిప్పడం లేదా కాగితాలను షఫుల్ చేయడం ద్వారా సృష్టించబడిన పేపర్ రస్టలింగ్ శబ్దాలు. కాగితం యొక్క చురుకైన, పొడి ఆకృతి ఆఫీస్ లేదా అధ్యయన వాతావరణాలను ఉద్వేగపరిచే సూక్ష్మమైన కానీ విభిన్నమైన ఆడియో అల్లికలను ఉత్పత్తి చేస్తుంది."
  },
  17: {
    en: "Repetitive pen clicking sounds made by pressing and releasing a ballpoint pen mechanism. This common fidgeting sound produces sharp, plastic clicks that many find satisfying or focus-enhancing.",
    te: "బాల్‌పాయింట్ పెన్ మెకానిజాన్ని నొక్కడం మరియు విడుదల చేయడం ద్వారా చేసే పునరావృత పెన్ క్లిక్ శబ్దాలు. ఈ సాధారణ ఫిడ్జెటింగ్ సౌండ్ పదునైన, ప్లాస్టిక్ క్లిక్‌లను ఉత్పత్తి చేస్తుంది, చాలా మంది సంతృప్తికరంగా లేదా దృష్టిని పెంచుతున్నట్లు కనుగొంటారు."
  },
  18: {
    en: "Door opening with the characteristic creak of hinges and the solid sound of a wooden door swinging open. The audio captures both the mechanical movement and the spatial acoustics of the action.",
    te: "కీలుగుల యొక్క లక్షణ క్రీక్ మరియు కలప తలుపు తెరుచుకునే ఘన ధ్వనితో తలుపు తెరవడం. ఆడియో కదలిక యొక్క యాంత్రిక కదలిక మరియు ప్రాదేశిక ధ్వనిశాస్త్రం రెండింటినీ సంగ్రహిస్తుంది."
  },
  19: {
    en: "Footsteps walking across different surfaces, creating a rhythmic pattern of heel and toe contact. The gait produces a steady percussion that suggests purposeful movement through various environments.",
    te: "వివిధ ఉపరితలాలకు అంతటా నడుస్తున్న అడుగుజాడలు, మడమ మరియు బొటనవేలు సంపర్కం యొక్క లయబద్ధమైన నమూనాను సృష్టిస్తాయి. నడక వివిధ వాతావరణాల ద్వారా ఉద్దేశపూర్వక కదలికను సూచించే స్థిరమైన పెర్కషన్‌ను ఉత్పత్తి చేస్తుంది."
  },
  20: {
    en: "Traditional telephone ringing with the classic metallic bell sound. The persistent, alternating tone is designed to be attention-grabbing and urgent, representing communication and connection in the pre-digital era.",
    te: "క్లాసిక్ మెటాలిక్ బెల్ సౌండ్‌తో సాంప్రదాయిక టెలిఫోన్ రింగింగ్. దృఢమైన, ప్రత్యామ్నాయ టోన్ దృష్టిని ఆకర్షించడానికి మరియు అత్యవసరంగా రూపొందించబడింది, ప్రీ-డిజిటల్ యుగంలో కమ్యూనికేషన్ మరియు కనెక్షన్‌ను సూచిస్తుంది."
  }
};